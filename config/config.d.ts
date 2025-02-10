export interface SiteConfig {
    name: string
    title: string
    titleShort: string
    titleTemplate: string
    description: string
    keywords: string[]
    canonical: string
    themeColor: string
    github: string
    authorGitHub: string
    author: SiteAuthor[]
    creator: SiteCreator
    publisher: SiteCreator
    domain: SiteDomain
    og: SiteOpenGraph
    images: SiteImage[]
  }