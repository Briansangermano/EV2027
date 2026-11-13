/**
 * Utilidades de idioma.
 * El español es el idioma por defecto y vive en "/"; el inglés vive en "/en/".
 */
import { ui } from './ui';
import { getContenido } from '../data/contenido';

export const idiomas = ['es', 'en'] as const;
export type Lang = (typeof idiomas)[number];
export const idiomaPorDefecto: Lang = 'es';

export const nombresIdioma: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
};

/** Normaliza `Astro.currentLocale` (o cualquier string) a un idioma soportado. */
export function getLang(locale: string | undefined): Lang {
  return (idiomas as readonly string[]).includes(locale ?? '') ? (locale as Lang) : idiomaPorDefecto;
}

/** Ruta de la página de inicio para un idioma. */
export function rutaIdioma(lang: Lang): string {
  return lang === idiomaPorDefecto ? '/' : `/${lang}/`;
}

/** Todo lo que necesita un componente: textos de UI, contenido y enlaces. */
export function useIdioma(locale: string | undefined) {
  const lang = getLang(locale);
  const { evento, enlaces } = getContenido(lang);
  return { lang, t: ui[lang], evento, enlaces };
}
