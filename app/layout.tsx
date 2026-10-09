import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";
import { absoluteUrl, siteUrl } from "./urls";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap"
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Consultorías Administrativas | Asesoría para PYMES en Costa Rica",
    template: "%s | Consultorías Administrativas"
  },
  description:
    "Servicios administrativos, contables, financieros, recursos humanos, SICOP, contratación pública y gobernanza para emprendedores, PYMES y sector público en Costa Rica.",
  keywords: [
    "consultorías administrativas Costa Rica",
    "asesoría para PYMES",
    "SICOP Costa Rica",
    "contratación pública",
    "contabilidad para PYMES",
    "recursos humanos",
    "trámites administrativos",
    "gobernanza empresarial"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Consultorías Administrativas",
    description:
      "Soluciones administrativas, financieras, contables, de SICOP y recursos humanos para liberar el potencial empresarial.",
    url: siteUrl,
    siteName: "Consultorías Administrativas",
    locale: "es_CR",
    type: "website",
    images: [
      {
        url: absoluteUrl("/img/carousel-2.jpg"),
        width: 1200,
        height: 800,
        alt: "Consultoría administrativa para empresas en Costa Rica"
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CR" className={`${openSans.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
