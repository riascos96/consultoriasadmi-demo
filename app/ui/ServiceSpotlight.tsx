"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { contact, services } from "../data";
import { assetPath } from "../urls";

gsap.registerPlugin(useGSAP);

export function ServiceSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0);
  const root = useRef<HTMLDivElement | null>(null);
  const activeService = services[activeIndex];

  useEffect(() => {
    const container = root.current;

    if (!container || window.matchMedia("(max-width: 859px)").matches) {
      return;
    }

    const cards = Array.from(container.querySelectorAll<HTMLElement>("[data-service-card]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) {
          return;
        }

        const index = Number(visible.target.getAttribute("data-service-card"));
        if (!Number.isNaN(index)) {
          setActiveIndex(index);
        }
      },
      {
        root: null,
        rootMargin: "-28% 0px -44% 0px",
        threshold: [0.32, 0.5, 0.68]
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.killTweensOf("[data-service-panel], [data-service-image]");

        gsap.fromTo(
          "[data-service-panel]",
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.34,
            ease: "power2.out",
            overwrite: true,
            onComplete: () => gsap.set("[data-service-panel]", { clearProps: "opacity,transform" })
          }
        );

        gsap.fromTo(
          "[data-service-image]",
          { scale: 1.035, opacity: 0.88 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.46,
            ease: "power2.out",
            overwrite: true,
            onComplete: () => gsap.set("[data-service-image]", { clearProps: "opacity,transform" })
          }
        );
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-service-panel], [data-service-image]", { clearProps: "all" });
      });

      return () => media.revert();
    },
    { scope: root, dependencies: [activeIndex] }
  );

  function selectService(index: number) {
    setActiveIndex(index);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const lastIndex = services.length - 1;
    const keyMap: Record<string, number> = {
      ArrowRight: index === lastIndex ? 0 : index + 1,
      ArrowDown: index === lastIndex ? 0 : index + 1,
      ArrowLeft: index === 0 ? lastIndex : index - 1,
      ArrowUp: index === 0 ? lastIndex : index - 1,
      Home: 0,
      End: lastIndex
    };

    const nextIndex = keyMap[event.key];

    if (nextIndex === undefined) {
      return;
    }

    event.preventDefault();
    selectService(nextIndex);
    requestAnimationFrame(() => {
      const nextButton = root.current?.querySelector<HTMLButtonElement>(
        `[data-service-tab="${nextIndex}"]`
      );
      nextButton?.focus();
    });
  }

  return (
    <div className="service-showcase" ref={root} data-reveal>
      <div className="service-list" role="tablist" aria-label="Servicios principales">
        {services.map((service, index) => (
          <button
            type="button"
            className="service-card-control"
            key={service.title}
            id={`service-tab-${index}`}
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls="service-panel"
            tabIndex={activeIndex === index ? 0 : -1}
            data-service-tab={index}
            data-service-card={index}
            onClick={() => selectService(index)}
            onFocus={() => selectService(index)}
            onMouseEnter={() => selectService(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            <span className="service-control-icon" aria-hidden="true">
              <service.icon size={21} />
            </span>
            <span>
              <strong>{service.title}</strong>
              <small>{service.summary}</small>
            </span>
            <ChevronRight size={18} aria-hidden="true" />

            <span className="service-mobile-detail" aria-hidden={activeIndex !== index}>
              <span className="service-mobile-image">
                <Image
                  src={assetPath(service.image)}
                  alt=""
                  fill
                  sizes="(max-width: 859px) 86vw"
                />
              </span>
              <span className="service-mobile-items">
                {service.items.map((item) => (
                  <span key={item}>
                    <CheckCircle2 size={15} />
                    {item}
                  </span>
                ))}
              </span>
            </span>
          </button>
        ))}
      </div>

      <article
        className="service-feature"
        id="service-panel"
        role="tabpanel"
        aria-labelledby={`service-tab-${activeIndex}`}
        data-service-panel
      >
        <div className="service-feature-media" data-service-image>
          <Image
            src={assetPath(activeService.image)}
            alt={`Servicio de ${activeService.title}`}
            fill
            sizes="(max-width: 860px) 100vw, 620px"
          />
        </div>
        <div className="service-feature-copy">
          <p className="eyebrow">Servicio destacado</p>
          <h3>{activeService.title}</h3>
          <p>{activeService.summary}</p>
          <ul>
            {activeService.items.map((item) => (
              <li key={item}>
                <CheckCircle2 size={17} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            className="service-feature-cta"
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Consultar este servicio
            <ArrowRight size={18} />
          </a>
        </div>
      </article>
    </div>
  );
}
