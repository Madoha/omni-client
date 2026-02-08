import { PAGE } from "@/config/public-page.config"
import { Flame, Gamepad2 } from "lucide-react";
import type { Metadata } from "next"
import { Heading } from "@/ui/Heading";
import { VideoItem } from "@/ui/videoItem/VIdeoItem";
import { videoService } from "@/services/video.service";

export const revalidate = 100;
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Video Games',
  description: 'Video Games page',
  alternates: {
    canonical: PAGE.VIDEO_GAMES,
  },
  openGraph: {
    title: 'Video Games',
    description: 'Video Games page',
    type: 'website',
    url: PAGE.VIDEO_GAMES,
  }
}

export default async function VideoGamesPage() {
  const videoGamesVideos = await videoService.getVideoGamesVideos();

	return (
		<section>
				<Heading Icon={Gamepad2}>Video Games</Heading>
				<div className='grid-6-cols'>
					{videoGamesVideos.data.length ?
						videoGamesVideos.data.map(video => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={Flame}
							/>
						)) : <div className="col-span-6 text-center py-10">No video games videos available</div>}
				</div>
		</section>
	)
}