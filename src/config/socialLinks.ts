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
    url: 'https://instagram.com/gentricks',
    handle: '@gentricks',
    iconName: 'Instagram',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://youtube.com/@gentricks',
    handle: '@gentricks',
    iconName: 'Youtube',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/gentricks',
    handle: 'company/gentricks',
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
    url: 'https://x.com/gentricks',
    handle: '@gentricks',
    iconName: 'Twitter',
  },
];
