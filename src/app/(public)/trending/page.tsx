import { PAGE } from "@/config/public-page.config"
import type { Metadata } from "next"

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

export default function TrendingPage() {
  return <div>trending</div>
}