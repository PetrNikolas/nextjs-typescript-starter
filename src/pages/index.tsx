import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import { NextSeo } from 'next-seo';

import Home from '../components/Home';
import Layout from '../components/Layout';

const IndexPage: React.FC<{}> & NextPage<{}> = () => (
	<>
		<NextSeo
			title="Home"
			description=""
		/>
		<Layout>
			<Home/>
		</Layout>
	</>
);

IndexPage.getInitialProps = async (_ctx: NextPageContext) => ({});

export default IndexPage;
