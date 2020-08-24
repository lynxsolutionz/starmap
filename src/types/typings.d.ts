interface Config {
	siteTitle: string
	siteTitleShort: string
	siteTitleAlt: string
	siteLogo: string
	siteUrl: string
	email: string
	pathPrefix: string
	dateFromFormat: string
	dateFormat: string
	siteDescription: string
	googleAnalyticsID: string
	menuLinks: MenuLink[]
}

interface MenuLink {
	name: string
	link: string
}