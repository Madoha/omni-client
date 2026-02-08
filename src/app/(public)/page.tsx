import type { Metadata } from 'next'

import { Explore } from './explore/Explore'
import TrendingPage from './trending/page'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Home',
	description: 'Home page showing trending and explore videos',
	alternates: {
		canonical: '/'
	},
	openGraph: {
		title: 'Home',
		description: 'Home page showing trending and explore videos',
		type: 'website',
		url: '/'
	}
}

export default async function Home() {
	return (
		<section>
			<TrendingPage />
			<Explore />
		</section>
	)
}
