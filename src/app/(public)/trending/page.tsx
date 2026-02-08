import { PAGE } from "@/config/public-page.config"
import { Flame } from "lucide-react";
import type { Metadata } from "next"
import { Heading } from "@/ui/Heading";
import { VideoItem } from "@/ui/videoItem/VIdeoItem";
import { videoService } from "@/services/video.service";
import type { IVideo } from "@/types/video.types";

export const revalidate = 100;
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Trending',
  description: 'Trending videos page',
  alternates: {
    canonical: PAGE.TRENDING,
  },
  openGraph: {
    title: 'Trending',
    description: 'Trending videos page',
    type: 'website',
    url: PAGE.TRENDING,
  }
}

export default async function TrendingPage() {
  const trendingVideos = await videoService.getTrandingVideos();

	return (
		<section>
				<Heading Icon={Flame}>Trending</Heading>
				<div className='grid-6-cols'>
					{trendingVideos.data.length ?
						trendingVideos.data.map(video => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={Flame}
							/>
						)) : <div className="col-span-6 text-center py-10">No trending videos available</div>}
				</div>
		</section>
	)
}