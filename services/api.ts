import { VideoResponse } from '../types';

const API_ENDPOINT = 'https://twitterdownloaderapi.internal.glootieapps.com/api/video';

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

export const fetchVideoInfo = async (url: string): Promise<VideoResponse> => {
  // Client-side validation
  if (!isValidTwitterUrl(url)) {
    throw new Error('URLの形式が正しくありません。X（Twitter）の動画URLを入力してください。');
  }

  try {
    const response = await fetch(`${API_ENDPOINT}?url=${encodeURIComponent(url)}`);

    if (!response.ok) {
      const errorMessage = getJapaneseErrorMessage(response.status);
      throw new ApiError(response.status, errorMessage);
    }

    const data: VideoResponse = await response.json();
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    } else if (error instanceof Error) {
       // Network errors or other unexpected errors
      throw new Error('通信エラーが発生しました。インターネット接続を確認してください。');
    } else {
      throw new Error('予期せぬエラーが発生しました。');
    }
  }
};

const isValidTwitterUrl = (url: string): boolean => {
  const patterns = [
    /^https?:\/\/(www\.)?(twitter\.com|x\.com)\/\w+\/status\/\d+/i,
    /^https?:\/\/(www\.)?t\.co\/\w+/i
  ];
  return patterns.some(pattern => pattern.test(url));
};

const getJapaneseErrorMessage = (status: number): string => {
  switch (status) {
    case 400:
      return 'URLの形式が正しくありません。';
    case 404:
      return '動画が見つかりませんでした。URLを確認してください。';
    case 429:
      return 'リクエスト制限を超えました。少々お待ちください。';
    case 500:
      return 'サーバーエラーが発生しました。時間をおいてお試しください。';
    default:
      return 'エラーが発生しました。もう一度お試しください。';
  }
};