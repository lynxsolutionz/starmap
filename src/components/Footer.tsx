import React from 'react'

const Footer = () => {
	return (
		<footer className="footer has-background-black" style={{ padding: "2.5rem 0.75rem" }}>
			<div className="content has-text-centered">
				<div className="columns">
					<div className="column is-11 is-offset-1 has-text-left has-text-white">
						<p>© {new Date().getFullYear()} <a href="https://lynxsolutionz.com">Lynx Solutionz</a></p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer