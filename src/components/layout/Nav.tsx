import * as React from 'react';
import Link from 'next/link';

export const Nav: React.FC = () => (
	<nav>
		<h4>
			Nav
		</h4>
		<ul>
			<li>
				<Link href="/">
					<a>Home</a>
				</Link>
			</li>
		</ul>
	</nav>
);

export default Nav;
