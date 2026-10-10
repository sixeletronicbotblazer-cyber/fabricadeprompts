import type { Locale } from "./translations";

export interface SocialProofImage {
  src: string;
  alt: string;
  tag?: string;
}

const socialProofs: Record<Locale, SocialProofImage[]> = {
  br: [
    { src: "/images/prova_social_whatsapp_01.png", alt: "Prova social WhatsApp 1" },
    { src: "/images/prova_social_whatsapp_02.png", alt: "Prova social WhatsApp 2" },
    { src: "/images/prova_social_whatsapp_03.png", alt: "Prova social WhatsApp 3" },
    { src: "/images/prova_social_whatsapp_04.png", alt: "Prova social WhatsApp 4" },
  ],
  es: [
    { src: "/images/es_social_proof_mecanismo.png", alt: "Prueba social mecanismo", tag: "COPIA Y ADAPTA" },
    { src: "/images/es_social_proof_velocidade.png", alt: "Prueba social velocidad", tag: "MÁS AGILIDAD" },
    { src: "/images/es_social_proof_faceless.png", alt: "Prueba social faceless", tag: "FACELESS + POV" },
    { src: "/images/es_social_proof_versatilidade.png", alt: "Prueba social versatilidad", tag: "VARIOS FORMATOS" },
    { src: "/images/es_social_proof_acesso.png", alt: "Prueba social acceso", tag: "ACCESO SIMPLE" },
  ],
  en: [],
};

export function getSocialProofs(locale: Locale): SocialProofImage[] {
  return socialProofs[locale];
}

export function shouldShowSocialProof(locale: Locale): boolean {
  return socialProofs[locale].length > 0;
}
