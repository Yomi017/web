export interface SiteDomain {
  main: string
  imageBed: string
  storage: string
  telegram_group: string
  patch: string
  backup: string
  sticker: string
  nav: string
  doc: string
}

export interface SiteAuthor {
  name: string
  url: string
}

export interface SiteOpenGraph {
  title: string
  description: string
  image: string
  url: string
}

export interface SiteCreator {
  name: string
  mention: string
  url: string
}

export interface SiteImage {
  url: string
  width: number
  height: number
  alt: string
}
export interface SiteConfig {
  name: string;
  title: string;
  titleShort: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
  canonical: string;
  themeColor: string;
  github: string;
  authorGitHub: string;
  author: SiteAuthor[];
  creator: SiteCreator;
  publisher: SiteCreator;
  domain: SiteDomain;
  og: SiteOpenGraph;
  images: SiteImage[];
}
