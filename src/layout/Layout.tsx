import React from 'react'

import config from 'constants/SiteConfig'

import Navigation from 'components/Navigation'
import Footer from 'components/Footer'

type PropsType = {
	children: React.ReactNode
	title?: string
}

const Layout: React.FC<PropsType> = ({ children, title }) => {

	return <>
		<Navigation menuLinks={config.menuLinks} />
		{children}
		<Footer />
	</>
}


export default Layout