import { Flame } from 'lucide-react'

import { VideoItem } from '@/ui/videoItem/VIdeoItem'

import { Explore } from './explore/Explore'
import { videoService } from '@/services/video.service'
import type { IVideo } from '@/types/video.types'
import type { Metadata } from 'next'
import { Heading } from '@/ui/Heading'

export const revalidate = 100;
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page showing trending and explore videos',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Home',
    description: 'Home page showing trending and explore videos',
    type: 'website',
    url: '/',
  }
}

export default async function Home() {
	const data = await videoService.getTrandingVideos()
	const trendingVideos = data.data.videos.slice(0, 6) as IVideo[]

	return (
		<section>
			<section>
				<Heading Icon={Flame}>Trending</Heading>
				<div className='grid grid-cols-6 gap-6'>
					{trendingVideos.length &&
						trendingVideos.map(video => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={Flame}
							/>
						))}
				</div>
			</section>
			<Explore />
		</section>
	)
}
