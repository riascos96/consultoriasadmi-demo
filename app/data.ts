import {
  BadgeCheck,
  Banknote,
  Building2,
  ClipboardList,
  FileCheck2,
  GraduationCap,
  Handshake,
  Landmark,
  Scale,
  UsersRound
} from "lucide-react";

export const contact = {
  phoneLabel: "+506 6446-7305",
  phoneHref: "tel:+50664467305",
  whatsapp: "https://wa.me/50664467305",
  email: "info@consultoriasadmi.com",
  location: "La Granja, Palmares, Alajuela 20707, Costa Rica",
  facebook: "https://www.facebook.com/profile.php?id=100078018789388",
  instagram: "https://www.instagram.com/consultoriasadmi9?igsh=ZmNiMmZmcDdnc25n",
  linkedin: "https://www.linkedin.com/in/consultor%C3%ADas-administrativas-8a8864231"
};

export const services = [
  {
    title: "Trámites Administrativos",
    image: "/img/projects-1.jpg",
    icon: FileCheck2,
    summary: "Inscripciones y gestiones clave para operar con orden desde el primer día.",
    items: [
      "CCSS",
      "Inscripción ante el Ministerio de Hacienda",
      "Inscripción ante el MEIC",
      "Póliza de Riesgo del Trabajo y más"
    ]
  },
  {
    title: "Administración General",
    image: "/img/projects-2.jpg",
    icon: ClipboardList,
    summary: "Dirección, procesos internos y planeación para emprendimientos y PYMES.",
    items: [
      "Asesoría y capacitación en administración y dirección de empresas",
      "Control y gestión interna",
      "Planeación estratégica"
    ]
  },
  {
    title: "Financiero / Contable",
    image: "/img/projects-5.jpg",
    icon: Banknote,
    summary: "Acompañamiento financiero para cumplir, entender números y decidir mejor.",
    items: [
      "Asesoría y capacitación financiera",
      "Declaraciones mensuales, trimestrales y anuales",
      "Contabilidad mensual y más"
    ]
  },
  {
    title: "Cursos y Capacitaciones",
    image: "/img/projects-6.jpg",
    icon: GraduationCap,
    summary: "Formación práctica para equipos que necesitan operar con más autonomía.",
    items: [
      "Contratación Pública, su Reglamento y SICOP",
      "Recursos Humanos",
      "Excel básico, intermedio y avanzado"
    ]
  },
  {
    title: "Ventas al Gobierno | SICOP",
    image: "/img/projects-12.jpg",
    icon: Landmark,
    summary: "Gestión integral para participar en compras públicas con mayor precisión.",
    items: [
      "Uso completo de la plataforma SICOP",
      "Elaboración y presentación de ofertas, recursos y subsanaciones",
      "Trámites administrativos de la plataforma",
      "Talleres, cursos, capacitación y asesoramiento",
      "Asesoría legal en contratación pública",
      "Análisis de riesgos"
    ]
  },
  {
    title: "Gobernanza Empresarial",
    image: "/img/projects-13.jpg",
    icon: Scale,
    summary: "Contratos, compliance y preparación para decisiones empresariales sensibles.",
    items: [
      "Acompañamiento, redacción y revisión de contratos",
      "Políticas y procedimientos de compliance en gobernanza corporativa",
      "Auditorías de compliance",
      "Gestión de crisis",
      "Due diligence"
    ]
  },
  {
    title: "Sector Público",
    image: "/img/projects-11.jpg",
    icon: Building2,
    summary: "Soporte para instituciones en procesos de compra, análisis y asesoría legal.",
    items: [
      "Proceso completo de compras",
      "Manejo de SICOP desde institución pública",
      "Sondeos y estudios de mercado",
      "Asesoría legal"
    ]
  },
  {
    title: "Recursos Humanos",
    image: "/img/projects-8.jpg",
    icon: UsersRound,
    summary: "Gestión de talento, nómina, clima y estructura interna de equipos.",
    items: [
      "Asesoría y capacitación legal y administrativa de Recursos Humanos",
      "Gestión del Talento Humano",
      "Reclutamiento y selección de personal",
      "Desarrollo de manual de puestos",
      "Evaluaciones del desempeño",
      "Clima organizacional",
      "Gestión de nómina",
      "Gestión de planilla mensual INS y CCSS"
    ]
  }
];

export const clients = [
  { name: "Agroinsumos J&G", image: "/img/agroinsumos-logo.png", logoClass: "logo-agro" },
  { name: "iKora Technologies", image: "/img/service-3.png", logoClass: "logo-ikora" },
  { name: "FORBS Innovation System", image: "/img/service-4.png", logoClass: "logo-stack" },
  {
    name: "Clínica del Trauma y la Extremidad Superior",
    image: "/img/service-5.jpg",
    logoClass: "logo-clinic"
  },
  { name: "Odontocasa", image: "/img/odontocasa-logo-clean.png", logoClass: "logo-odonto" }
];

export const values = [
  {
    title: "Orientación al cliente",
    text: "Escuchamos necesidades, expectativas y desafíos para ofrecer soluciones que superen expectativas."
  },
  {
    title: "Responsabilidad",
    text: "Cumplimos compromisos, cuidamos los plazos y sostenemos un servicio de calidad."
  },
  {
    title: "Calidad en el servicio",
    text: "Actuamos con integridad, ética y altos estándares en cada interacción."
  },
  {
    title: "Responsabilidad social",
    text: "Contribuimos positivamente al bienestar social y ambiental mediante participación activa en la comunidad."
  }
];

export const proofPoints = [
  { label: "Áreas de servicio", value: "8", icon: BadgeCheck },
  { label: "Enfoque en PYMES", value: "100%", icon: Handshake },
  { label: "Canal directo", value: "WhatsApp", icon: UsersRound }
];
