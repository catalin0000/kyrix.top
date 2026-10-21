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
      links: [
        { text: 'Kyrix Hydration: Water Tracker', href: getPermalink('/#apps') },
        { text: 'KyrixPill: Medication Tracker', href: getPermalink('/#apps') },
      ],
    },
    {
      title: 'Privacy & Legal',
      links: [
        { text: 'Kyrix Hydration Privacy Policy', href: getPermalink('/privacy/kyrixhydration') },
        { text: 'KyrixPill Privacy Policy', href: getPermalink('/privacy/kyrixpill') },
        { text: 'All Privacy Policies', href: getPermalink('/privacy') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Contact Us', href: 'mailto:support@kyrix.top' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Hydration Policy', href: getPermalink('/privacy/kyrixhydration') },
    { text: 'KyrixPill Policy', href: getPermalink('/privacy/kyrixpill') },
  ],
  socialLinks: [],
  footNote: `© ${new Date().getFullYear()} Kyrix. All rights reserved. 100% Offline, Private Android Applications.`,
};
