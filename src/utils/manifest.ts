import type { ManifestOptions } from 'vite-plugin-pwa'

export const manifest: Partial<ManifestOptions> = {
  name: 'Wovie',
  short_name: 'Wovie',
  description: 'Watch Movies and Tv shows!',
  start_url: '/',
  display: 'standalone',
  background_color: '#2f68c5',
  theme_color: '#2f68c5',
  icons: [
    {
      src: '/favicon.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
}
