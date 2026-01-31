'use client'

import { useQuery } from '@tanstack/react-query'

import { VideoItem } from '@/ui/videoItem/VIdeoItem'

import { videoService } from '@/services/video.service'
import type { IVideo } from '@/types/video.types'
import { Heading } from '@/ui/Heading'
import { Compass } from 'lucide-react'
import { SkeletonLoader } from '@/ui/SkeletonLoader'

export function Explore() {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: async () => await videoService.getExploreVideos(),
		select: data => data.data.videos as IVideo[]
	})

	return (
		<section>
			<Heading Icon={Compass}>Explore</Heading>
			<div className='grid grid-cols-6 gap-6'>
				{isLoading
					? <SkeletonLoader count={6} className='h-36 rounded-md' />
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
