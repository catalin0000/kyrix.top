import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Apps', href: getPermalink('/#apps') },
    { text: 'Privacy Policies', href: getPermalink('/privacy') },
  ],
  actions: [{ text: 'KyrixPill Policy', href: getPermalink('/privacy/kyrixpill'), variant: 'primary' as const }],
};

export const footerData = {
  links: [
    {
      title: 'Applications',
      links: [{ text: 'KyrixPill: Medication Tracker', href: getPermalink('/#apps') }],
    },
    {
      title: 'Privacy & Legal',
      links: [
        { text: 'KyrixPill Privacy Policy', href: getPermalink('/privacy/kyrixpill') },
        { text: 'All Privacy Policies', href: getPermalink('/privacy') },
      ],
    },
    {
      title: 'Open Source',
      links: [
        { text: 'KyrixPill GitHub', href: 'https://github.com/catalin0000/kyrixpill' },
        { text: 'Report an Issue', href: 'https://github.com/catalin0000/kyrixpill/issues' },
      ],
    },
  ],
  secondaryLinks: [{ text: 'Privacy Policy', href: getPermalink('/privacy/kyrixpill') }],
  socialLinks: [{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/catalin0000/kyrixpill' }],
  footNote: `© ${new Date().getFullYear()} Kyrix. All rights reserved. 100% Offline, Private Android Applications.`,
};
