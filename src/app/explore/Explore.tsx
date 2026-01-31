'use client'

import { useQuery } from '@tanstack/react-query'

import { VideoItem } from '@/ui/videoItem/VIdeoItem'

import { videoService } from '@/services/video.service'
import type { IVideo } from '@/types/video.types'

export function Explore() {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: async () => await videoService.getExploreVideos(),
		select: data => data.data.videos as IVideo[]
	})

	return (
		<section>
			<h2>Explore</h2>
			<div className='grid grid-cols-6 gap-6'>
				{isLoading
					? 'Loading...'
					: data?.map(video => (
							<VideoItem
								key={video.id}
								video={video}
							/>
						))}
			</div>
		</section>
	)
}
