'use client'

import { useQuery } from '@tanstack/react-query'
import { Search } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import { Heading } from '@/ui/Heading'
import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { VideoItem } from '@/ui/videoItem/VIdeoItem'

import { videoService } from '@/services/video.service'
import type { IVideo } from '@/types/video.types'

export function SearchPage() {
	const searchParams = useSearchParams()
	const searchTerm = searchParams.get('term')

	const { data, isLoading } = useQuery({
		queryKey: ['search', searchTerm],
		queryFn: () => videoService.getAll(searchTerm),
		select: data => data.data.videos as IVideo[]
	})

	return (
		<section>
			<Heading
				as='h1'
				Icon={Search}
			>
				Search &quot;{searchTerm}&quot;
			</Heading>
			{isLoading ? (
				<SkeletonLoader
					count={6}
					className='h-36 rounded-md'
				/>
			) : (
				data?.map(video => (
					<VideoItem
						key={video.id}
						video={video}
					/>
				))
			)}
		</section>
	)
}
