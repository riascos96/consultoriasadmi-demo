import Image from "next/image";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  Eye,
  Gem,
  Goal,
  HeartHandshake,
  Leaf,
  Mail,
  MapPin,
  Phone,
  ShieldCheck
} from "lucide-react";
import { AnimatedLanding } from "./ui/AnimatedLanding";
import { ServiceSpotlight } from "./ui/ServiceSpotlight";
import { clients, contact, proofPoints, services, values } from "./data";
import { absoluteUrl, assetPath } from "./urls";

const serviceSchema = services.map((service) => ({
  "@type": "Service",
  name: service.title,
  description: service.summary,
  areaServed: "Costa Rica",
  provider: {
    "@type": "LocalBusiness",
    name: "Consultorías Administrativas"
  }
}));

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Consultorías Administrativas",
  url: absoluteUrl("/"),
  logo: absoluteUrl("/img/logo.png"),
  image: absoluteUrl("/img/carousel-2.jpg"),
  email: contact.email,
  telephone: contact.phoneLabel,
  address: {
    "@type": "PostalAddress",
    streetAddress: "La Granja, Palmares",
    addressLocality: "Alajuela",
    postalCode: "20707",
    addressCountry: "CR"
  },
  areaServed: "Costa Rica",
  description:
    "Consultoría administrativa, financiera, contable, SICOP, contratación pública, gobernanza empresarial y recursos humanos para emprendedores, PYMES y sector público.",
  sameAs: [contact.facebook, contact.instagram, contact.linkedin],
  makesOffer: serviceSchema
};

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      focusable="false"
    >
      <path d="M16.04 3.2C9.08 3.2 3.42 8.78 3.42 15.64c0 2.2.6 4.34 1.72 6.22L3.32 28.8l7.16-1.82a12.8 12.8 0 0 0 5.56 1.28c6.96 0 12.64-5.58 12.64-12.44C28.68 8.78 23 3.2 16.04 3.2Zm0 22.92c-1.8 0-3.56-.46-5.1-1.34l-.36-.2-4.24 1.08 1.12-4.06-.24-.42a10.26 10.26 0 0 1-1.56-5.54c0-5.66 4.66-10.28 10.38-10.28s10.38 4.62 10.38 10.28c0 5.84-4.84 10.48-10.38 10.48Zm5.68-7.7c-.3-.16-1.82-.88-2.1-.98-.28-.1-.48-.16-.68.16-.2.3-.78.98-.96 1.18-.18.2-.36.22-.66.08-.3-.16-1.28-.46-2.44-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.14-.62.14-.14.3-.36.46-.54.16-.18.2-.3.3-.5.1-.2.06-.38-.02-.54-.08-.16-.68-1.62-.94-2.22-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.54.08-.82.38-.28.3-1.08 1.04-1.08 2.54s1.1 2.96 1.26 3.16c.16.2 2.18 3.28 5.28 4.6.74.32 1.32.5 1.76.64.74.24 1.42.2 1.96.12.6-.08 1.82-.74 2.08-1.46.26-.72.26-1.34.18-1.46-.08-.14-.28-.22-.6-.38Z" />
    </svg>
  );
}

function SocialIcon({ type }: { type: "facebook" | "instagram" | "linkedin" }) {
  if (type === "facebook") {
    return (
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.2 8.4V6.9c0-.7.5-.9.9-.9h2.2V2.2L14.2 2c-3.4 0-4.1 2.5-4.1 4.1v2.3H7.4v4.2h2.7V22h4.2v-9.4h3.1l.5-4.2h-3.7Z" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect width="16" height="16" x="4" y="4" rx="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="7" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.8 8.9H3.1V21h3.7V8.9ZM5 3a2.1 2.1 0 1 0 0 4.2A2.1 2.1 0 0 0 5 3Zm16 10.9c0-3.4-1.8-5-4.3-5-1.9 0-2.8 1.1-3.3 1.8V8.9H9.9V21h3.7v-6c0-1.6.3-3.1 2.2-3.1 1.9 0 1.9 1.8 1.9 3.2V21H21v-7.1Z" />
    </svg>
  );
}

const valueIcons = [HeartHandshake, ShieldCheck, Gem, Leaf];
const heroStyle = { "--hero-image": `url("${assetPath("/img/carousel-2.jpg")}")` } as CSSProperties;

export default function Home() {
  return (
    <AnimatedLanding>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header" data-animate="nav">
        <a className="brand" href="#inicio" aria-label="Consultorías Administrativas inicio">
          <Image src={assetPath("/img/logo.png")} width={64} height={64} alt="" priority />
          <span>Consultorías Administrativas</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#clientes">Clientes</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a
          className="whatsapp-button"
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Escribir por WhatsApp"
          title="WhatsApp"
        >
          <WhatsAppIcon size={22} />
        </a>
      </header>

      <main id="contenido">
        <section className="hero section-band" id="inicio" style={heroStyle}>
          <div className="hero-copy">
            <p className="eyebrow" data-hero="item">
              Consultoría integral para crecer con orden
            </p>
            <h1 data-hero="item">Impulsamos el éxito sostenible de emprendedores y PYMES.</h1>
            <p className="hero-lead" data-hero="item">
              Soluciones administrativas, contables, financieras, de SICOP, recursos humanos y
              gobernanza empresarial diseñadas para liberar el potencial de tu negocio.
            </p>
            <div className="hero-actions" data-hero="item">
              <a className="primary-button" href={contact.whatsapp} target="_blank" rel="noreferrer">
                Agendar por WhatsApp
                <ArrowRight size={18} />
              </a>
              <a className="secondary-button" href="#servicios">
                Ver servicios
              </a>
            </div>
            <div className="quick-contact" data-hero="item" aria-label="Contacto rápido">
              <a href={contact.phoneHref} aria-label={`Llamar al ${contact.phoneLabel}`}>
                <Phone size={16} />
                {contact.phoneLabel}
              </a>
              <a href={`mailto:${contact.email}`} aria-label={`Enviar correo a ${contact.email}`}>
                <Mail size={16} />
                {contact.email}
              </a>
            </div>
          </div>

          <div className="hero-note" data-hero="image">
            <strong>Servicios accesibles, personalizados y de calidad</strong>
            <span>Para micro, pequeñas y medianas empresas en Costa Rica.</span>
          </div>
        </section>

        <section className="proof-strip" aria-label="Diferenciales">
          {proofPoints.map((point) => (
            <article className="proof-item" key={point.label} data-reveal>
              <div className="proof-icon" aria-hidden="true">
                <point.icon size={22} />
              </div>
              <div>
                <strong>{point.value}</strong>
                <span>{point.label}</span>
              </div>
            </article>
          ))}
        </section>

        <section className="intro section-band" id="nosotros">
          <div>
            <p className="eyebrow">Más que un servicio</p>
            <h2>Un aliado estratégico para operar mejor, cumplir mejor y vender mejor.</h2>
          </div>
          <p>
            La propuesta simplifica el mensaje original: Consultorías Administrativas acompaña a
            negocios y organizaciones con servicios integrales a la medida, desde trámites y
            contabilidad hasta contratación pública, SICOP, talento humano y gobernanza.
          </p>
        </section>

        <section className="services section-band" id="servicios">
          <div className="section-heading">
            <p className="eyebrow">Catálogo</p>
            <h2>Elige el área que hoy puede destrabar tu crecimiento.</h2>
            <p>
              Trámites, finanzas, contratación pública, talento y gobernanza con una ruta clara,
              accionable y acompañamiento directo.
            </p>
          </div>

          <ServiceSpotlight />
        </section>

        <section className="process section-band">
          <div className="section-heading compact">
            <p className="eyebrow">Forma de trabajo</p>
            <h2>Simple para el cliente, riguroso por dentro.</h2>
          </div>
          <div className="steps">
            {[
              ["Diagnóstico", "Entendemos trámites, riesgos, procesos y prioridades."],
              ["Ruta de acción", "Priorizamos lo urgente, lo legal y lo que libera crecimiento."],
              ["Acompañamiento", "Ejecutamos, capacitamos y dejamos estructura para sostener avances."]
            ].map(([title, text], index) => (
              <article key={title} data-reveal>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="clients section-band" id="clientes">
          <div className="section-heading">
            <p className="eyebrow">Clientes</p>
            <h2>Confianza de empresas y organizaciones con necesidades distintas.</h2>
            <p>
              Marcas y organizaciones que han buscado acompañamiento para operar con más claridad,
              estructura y respaldo administrativo.
            </p>
          </div>
          <div className="client-grid">
            {clients.map((client, index) => (
              <article className="client-card" key={client.name} data-reveal>
                <div className="client-image">
                  <Image
                    className={client.logoClass}
                    src={assetPath(client.image)}
                    alt=""
                    fill
                    sizes="(max-width: 860px) 100vw, 20vw"
                  />
                </div>
                <div className="client-copy">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{client.name}</strong>
                  <small>Cliente acompañado</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mission section-band">
          <div className="mission-heading" data-reveal>
            <p className="eyebrow">Nuestra razón de ser</p>
            <h2>Una consultoría cercana para empresas que quieren avanzar con estructura.</h2>
          </div>
          <div className="mission-grid">
            <article data-reveal>
              <div className="mission-icon" aria-hidden="true">
                <Goal size={28} />
              </div>
              <p className="eyebrow">Misión</p>
              <h3>Liberar el potencial empresarial.</h3>
              <p>
                Impulsar el éxito y crecimiento sostenible de los clientes con soluciones accesibles,
                de calidad y a la medida para optimizar procesos.
              </p>
            </article>
            <article data-reveal>
              <div className="mission-icon" aria-hidden="true">
                <Eye size={28} />
              </div>
              <p className="eyebrow">Visión</p>
              <h3>Ser el aliado elegido por emprendedores y PYMES.</h3>
              <p>
                Ser reconocidos por soluciones integrales que impulsan crecimiento, éxito empresarial
                y servicios personalizados.
              </p>
            </article>
          </div>
        </section>

        <section className="values section-band">
          <div className="section-heading compact">
            <p className="eyebrow">Valores</p>
            <h2>La cultura de servicio que sostiene la relación.</h2>
          </div>
          <div className="values-grid">
            {values.map((value, index) => {
              const Icon = valueIcons[index] ?? HeartHandshake;
              return (
              <article key={value.title} data-reveal>
                <div className="value-icon" aria-hidden="true">
                  <Icon size={24} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
              );
            })}
          </div>
        </section>

        <section className="final-cta section-band" id="contacto">
          <div>
            <p className="eyebrow">Hablemos</p>
            <h2>Convierte trámites, procesos y compras públicas en una ruta clara.</h2>
            <p>
              Agenda una conversación y recibe orientación sobre el servicio que mejor responde a tu
              situación.
            </p>
          </div>
          <div className="cta-panel">
            <a className="primary-button whatsapp-cta" href={contact.whatsapp} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={19} />
              Escribir por WhatsApp
            </a>
            <a className="secondary-button" href={`mailto:${contact.email}`}>
              <Mail size={18} />
              Enviar correo
            </a>
            <span>
              <MapPin size={18} />
              {contact.location}
            </span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <Image src={assetPath("/img/logo.png")} width={52} height={52} alt="" />
          <strong>Consultorías Administrativas</strong>
        </div>
        <p>
          Servicios administrativos, financieros, contables, SICOP y recursos humanos para empresas
          que quieren operar con más claridad.
        </p>
        <div className="footer-links">
          <a href={contact.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
            <SocialIcon type="facebook" />
          </a>
          <a href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <SocialIcon type="instagram" />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <SocialIcon type="linkedin" />
          </a>
        </div>
        <small>© 2026 Consultorías Administrativas. Todos los derechos reservados.</small>
      </footer>
    </AnimatedLanding>
  );
}
