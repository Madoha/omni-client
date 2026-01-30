'use client'

import { useQuery } from '@tanstack/react-query'

import { VideoItem } from '@/ui/videoItem/VIdeoItem'

import { videoService } from '@/services/video.service'

export default function Home() {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: () => videoService.getExploreVideos()
	})

	return (
		<div>
			{isLoading
				? 'Loading...'
				: data?.data.length &&
					data.data.map(video => (
						<VideoItem
							key={video.id}
							video={video}
						/>
					))}
		</div>
	)
}
