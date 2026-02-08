'use client'

import { useQuery } from '@tanstack/react-query'
import { Compass } from 'lucide-react'

import { Heading } from '@/ui/Heading'
import { SkeletonLoader } from '@/ui/SkeletonLoader'
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
			<Heading Icon={Compass}>Explore</Heading>
			<div className='grid-cols-6'>
				{isLoading ? (
					<SkeletonLoader
						count={6}
						className='h-36 rounded-md'
					/>
				) : data?.length ? (
					data?.map(video => (
						<VideoItem
							key={video.id}
							video={video}
						/>
					))
				) : (
					<div className='col-span-6 text-center py-10'>No explore videos available</div>
				)}
			</div>
		</section>
	)
}
