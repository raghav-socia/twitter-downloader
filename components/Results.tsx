import React from 'react';
import { VideoResponse } from '../types';
import { Download, Clock, Film, Eye, CheckCircle, Star } from 'lucide-react';

interface ResultsProps {
  data: VideoResponse;
}

const Results: React.FC<ResultsProps> = ({ data }) => {
  // Sort downloads by quality (highest resolution height first)
  const sortedDownloads = [...data.downloads].sort((a, b) => {
    const heightA = parseInt(a.resolution.split('x')[1] || '0');
    const heightB = parseInt(b.resolution.split('x')[1] || '0');
    return heightB - heightA;
  });

  const formatDuration = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const getQualityLabel = (resolution: string) => {
    const height = parseInt(resolution.split('x')[1] || '0');
    if (height >= 1080) return '最高画質';
    if (height >= 720) return '高画質';
    if (height >= 480) return '標準画質';
    return '低画質';
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 animate-in slide-in-from-bottom-4 duration-500">
      {/* Success Banner */}
      <div className="bg-green-500 text-white px-4 py-3 flex items-center justify-center gap-2 border-4 border-jp-black mb-0">
        <CheckCircle className="h-5 w-5" />
        <span className="font-bold">動画を取得しました！</span>
        <span className="text-xs opacity-80">VIDEO FOUND</span>
      </div>

      <div className="bg-white border-4 border-jp-black border-t-0 shadow-jp overflow-hidden">
        <div className="md:flex">
          {/* Thumbnail Section */}
          <div className="md:w-2/5 relative group bg-jp-black">
            <img
              src={data.thumbnail}
              alt="動画サムネイル"
              className="w-full h-full object-contain md:object-cover aspect-video md:aspect-auto opacity-90 group-hover:opacity-100 transition-opacity"
            />
            {/* Duration Badge */}
            <div className="absolute bottom-3 right-3 bg-jp-red text-white text-sm font-black px-3 py-1 border-2 border-white flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {formatDuration(data.duration)}
            </div>
            {/* MP4 Badge */}
            <div className="absolute top-3 left-3 bg-jp-gold text-jp-black text-xs font-black px-2 py-1 border-2 border-jp-black">
              MP4
            </div>
          </div>

          {/* Info & Download Section */}
          <div className="md:w-3/5 flex flex-col">
            {/* Title Area */}
            <div className="p-6 border-b-4 border-jp-black bg-jp-white-cream">
              <h2 className="text-xl font-black text-jp-black mb-3 line-clamp-2 leading-relaxed">
                {data.title || '動画のタイトルなし'}
              </h2>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 bg-jp-black text-white px-3 py-1 text-sm font-bold">
                  <Film className="h-4 w-4" />
                  MP4形式
                </span>
                <span className="text-sm text-text-secondary font-medium">
                  {sortedDownloads.length}種類の画質
                </span>
              </div>
            </div>

            {/* Download Options */}
            <div className="p-6">
              <h3 className="text-sm font-black text-jp-black uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-jp-red"></span>
                ダウンロード形式を選択
                <span className="text-xs text-jp-gold tracking-wider">SELECT QUALITY</span>
              </h3>

              <div className="space-y-3">
                {sortedDownloads.map((option, idx) => {
                  const isHighQuality = idx === 0;
                  const qualityP = option.resolution.split('x')[1];

                  return (
                    <div
                      key={idx}
                      className={`
                        flex flex-col sm:flex-row sm:items-center justify-between p-4 border-3 transition-all duration-200
                        ${isHighQuality
                          ? 'bg-jp-red-light border-jp-red'
                          : 'bg-white border-jp-black hover:border-jp-red'}
                      `}
                    >
                      <div className="flex flex-col mb-3 sm:mb-0">
                        <span className="font-black text-xl leading-none flex items-center gap-2 text-jp-black">
                          {qualityP}p
                          {isHighQuality && (
                            <span className="text-xs bg-jp-red text-white px-2 py-0.5 font-black flex items-center gap-1">
                              <Star className="h-3 w-3" />
                              推奨
                            </span>
                          )}
                        </span>
                        <span className="text-xs mt-1 text-text-secondary font-medium">
                          {getQualityLabel(option.resolution)} • {option.resolution}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* View Button */}
                        <a
                          href={option.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-bold bg-white border-3 border-jp-black text-jp-black hover:bg-jp-white-cream transition-colors shadow-jp-sm btn-jp"
                          title="ブラウザで再生"
                        >
                          <Eye className="h-4 w-4" />
                          <span className="sm:hidden lg:inline">再生</span>
                        </a>

                        {/* Download Button */}
                        <a
                          href={option.url}
                          download={`twitter_video_${qualityP}p.mp4`}
                          className={`
                            flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-5 py-2.5 text-sm font-black text-white transition-all shadow-jp-sm btn-jp border-3
                            ${isHighQuality
                              ? 'bg-jp-red hover:bg-jp-red-dark border-jp-black'
                              : 'bg-jp-black hover:bg-jp-black-soft border-jp-black'}
                          `}
                          title="端末に保存"
                        >
                          <Download className="h-4 w-4" />
                          <span>保存</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Help Text */}
              <div className="mt-6 bg-jp-white-cream border-l-4 border-jp-gold p-4">
                <p className="text-sm text-text-secondary">
                  <span className="font-bold text-jp-gold">ヒント：</span>
                  「保存」ボタンを押しても再生される場合は、長押し（右クリック）して「リンク先のファイルをダウンロード」を選択してください
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
