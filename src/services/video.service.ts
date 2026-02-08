import { axiosClassic } from "@/api/axios";
import type { IVideo } from "@/types/video.types";

class VideoService {
  private readonly _VIDEOS = '/videos';

  getAll(searchTerm?: string | null) {
    return axiosClassic.get(this._VIDEOS, {
      params: searchTerm ? { searchTerm } : {}
    });
  }

  getTrandingVideos() {
    return axiosClassic.get<IVideo[]>(`${this._VIDEOS}/trending`);
  }

  getExploreVideos() {
    return axiosClassic.get(`${this._VIDEOS}/explore`);
  }

  getVideoGamesVideos() {
    return axiosClassic.get<IVideo[]>(`${this._VIDEOS}/video-games`);
  }
}

export const videoService = new VideoService();