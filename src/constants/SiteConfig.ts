const config: Config = {
	siteTitle: 'Starmap SVG Generator',
	siteTitleShort: 'Starmap Generator',
	siteTitleAlt: '',
	email: '',
	siteLogo: '',
	siteUrl: '',
	pathPrefix: '',
	dateFromFormat: '',
	dateFormat: '',
	googleAnalyticsID: '',
	siteDescription: '',
	menuLinks: [
		{
			name: 'Home',
			link: '/',
		},
		{
			name: 'About',
			link: '/about/',
		}
	]
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
	config.pathPrefix = ''
} else {
	// Make sure pathPrefix only contains the first forward slash
	config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

export default config
