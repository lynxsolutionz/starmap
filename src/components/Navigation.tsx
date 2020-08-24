import React from 'react'
import { Link } from 'react-router-dom'

import { ML } from './../assets/icon'

type PropsType = {
	menuLinks: MenuLink[]
}

const Navigation: React.FC<PropsType> = ({ menuLinks }) => {
	return (
		<div className="hero-head" style={{ background: "#00d1b2" }}>
			<div className="container">
				<nav className="navbar is-primary" role="navigation" aria-label="main navigation">
					<div className="navbar-brand">
						<Link className="navbar-item narvbar-icon" to="/">
							<img src={ML} width="48" height="75" alt="logo" />
						</Link>
						{
							menuLinks.map((link, index) => <Link key={index}
								style={{ fontSize: index === 0 ? '1.25rem' : '1rem' }}
								className={`navbar-item has-text-white is-hovered has-text-weight-semibold`}
								to={link.link}>{link.name}</Link>)
						}
					</div>
				</nav>
			</div>
		</div>
	)
}

export default Navigation