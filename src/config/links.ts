/**
 * ============================================================
 *  CENTRAL LINK CONFIG
 * ------------------------------------------------------------
 *  Every external / contact link in the entire site is read
 *  from this one file. To update a link, change it here only —
 *  never hard-code a URL inside a component.
 * ============================================================
 */

export const SOCIAL_LINKS = {
  youtube: "https://youtube.com/@PASTE_YOUTUBE_HANDLE",
  instagram: "https://instagram.com/PASTE_INSTAGRAM_HANDLE",
  whatsapp: "https://wa.me/91XXXXXXXXXX",
  telegram: "https://t.me/PASTE_TELEGRAM_HANDLE",
} as const;

export const CONTACT_INFO = {
  email: "hello@parshuram.example.com",
} as const;

/**
 * Site-wide identity — used in the navbar, hero, footer, and
 * all <meta> generation. Keep this as the single source of
 * truth for the brand name.
 */
export const SITE = {
  name: "Parshuram",
  tagline: "Creator. AI Builder. Future Entrepreneur.",
  location: "India",
} as const;

export type SocialPlatform = keyof typeof SOCIAL_LINKS;
