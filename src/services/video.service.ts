import type { IVideo } from "@/types/video.types";
import axios from "axios";

class VideoService {
  getTrandingVideos() {
    return axios.get('http://localhost:4200/api/videos/trending');
  }

  getExploreVideos() {
    return axios.get('http://localhost:4200/api/videos/explore');
  }
}

export const videoService = new VideoService();