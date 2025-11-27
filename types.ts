export interface DownloadOption {
  bitrate: number;
  quality: string;
  resolution: string;
  url: string;
}

export interface VideoResponse {
  downloads: DownloadOption[];
  duration: number;
  stream_url: string;
  thumbnail: string;
  title: string;
}

export enum FetchStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface AppState {
  status: FetchStatus;
  data: VideoResponse | null;
  error: string | null;
}