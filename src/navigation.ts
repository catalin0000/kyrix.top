import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Apps', href: getPermalink('/#apps') },
    { text: 'Privacy Policies', href: getPermalink('/privacy') },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Apps',
      links: [{ text: 'KyrixPill', href: getPermalink('/privacy/kyrixpill') }],
    },
  ],
  secondaryLinks: [{ text: 'Privacy Policies', href: getPermalink('/privacy') }],
  socialLinks: [{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/catalin0000' }],
  footNote: `© ${new Date().getFullYear()} Kyrix. All rights reserved.`,
};
