export interface SocialLink {
  id: string;
  name: string;
  url: string;
  handle: string;
  iconName: 'Instagram' | 'Youtube' | 'Linkedin' | 'Reddit' | 'Twitter';
}

export const socialLinks: SocialLink[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/gentricks__?utm_source=qr',
    handle: '@gentricks__',
    iconName: 'Instagram',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://www.youtube.com/@GenTricks-01',
    handle: '@GenTricks-01',
    iconName: 'Youtube',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/gentricks-7b7a77426/',
    handle: 'gentricks-7b7a77426',
    iconName: 'Linkedin',
  },
  {
    id: 'reddit',
    name: 'Reddit',
    url: 'https://reddit.com/r/gentricks',
    handle: 'r/gentricks',
    iconName: 'Reddit',
  },
  {
    id: 'x',
    name: 'X (Twitter)',
    url: 'https://x.com/GenTricks__',
    handle: '@GenTricks__',
    iconName: 'Twitter',
  },
];

export const contactEmails = {
  support: 'support@gentricks.in',
  collab: 'collab@gentricks.in',
};
