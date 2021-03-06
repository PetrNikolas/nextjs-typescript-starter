// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { SITE_DESCRIPTION, SITE_IMAGE, SITE_NAME, SITE_TITLE } from '../constants/env';

class CustomDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<meta
						name="viewport"
						content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
					/>
					<meta property="og:type" content="website"/>
					<meta property="og:site_name" content={SITE_NAME}/>
					<meta property="og:title" content={SITE_TITLE}/>
					<meta property="og:description" content={SITE_DESCRIPTION}/>
					<meta property="og:image" content={SITE_IMAGE}/>
					<meta name="twitter:card" content="summary_large_image"/>
					<meta name="twitter:site" content={SITE_NAME}/>
					<meta name="twitter:title" content={SITE_TITLE}/>
					<meta name="twitter:description" content={SITE_DESCRIPTION}/>
					<meta property="twitter:image" content={SITE_IMAGE}/>
					<meta name="format-detection" content="telephone=no, address=no, email=no"/>

					<link rel="shortcut icon" href="/public/favicon.ico"/>
				</Head>
				<body>
					<Main/>
					<script src="https://cdn.polyfill.io/v2/polyfill.min.js"/>
					<NextScript/>
				</body>
			</Html>
		);
	}
}

export default CustomDocument;
