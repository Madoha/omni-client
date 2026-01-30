import type { IVideo } from "./video.types";

export interface IChannel {
  id: string,
  name: string,
  slug: string,
  description: string,
  isVerified: string,
  avatarUrl: string,
  bannerUrl: string,
  // user
  videos: IVideo[],
  subscribers: [],
  createdAt: string
}