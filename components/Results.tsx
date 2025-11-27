import React from 'react';
import { VideoResponse } from '../types';
import { Download, Clock, Film, Eye } from 'lucide-react';

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
    <div className="max-w-4xl mx-auto mt-12 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden md:flex">
        
        {/* Thumbnail Section */}
        <div className="md:w-2/5 relative group bg-black min-h-[200px]">
          <img 
            src={data.thumbnail} 
            alt="動画サムネイル" 
            className="w-full h-full object-contain md:object-cover aspect-video md:aspect-auto opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {formatDuration(data.duration)}
          </div>
        </div>

        {/* Info & Download Section */}
        <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3 line-clamp-2 leading-relaxed">
              {data.title || "動画のタイトルなし"}
            </h2>
            <div className="flex items-center gap-4 text-sm text-text-secondary mb-6">
              <span className="flex items-center gap-1.5 bg-bg-tertiary px-2.5 py-1 rounded-md">
                <Film className="h-4 w-4" />
                MP4形式
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-4">
              ダウンロード形式を選択
            </h3>
            <div className="space-y-3">
              {sortedDownloads.map((option, idx) => {
                const isHighQuality = idx === 0;
                const qualityP = option.resolution.split('x')[1];
                
                return (
                  <div 
                    key={idx}
                    className={`
                      flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border transition-all duration-200
                      ${isHighQuality ? 'bg-primary/5 border-primary/30' : 'bg-white border-gray-200'}
                    `}
                  >
                    <div className="flex flex-col mb-3 sm:mb-0">
                      <span className="font-bold text-lg leading-none flex items-center gap-2 text-text-primary">
                        {qualityP}p
                        {isHighQuality && (
                          <span className="text-[10px] bg-primary px-1.5 py-0.5 rounded text-white font-medium">
                            HD
                          </span>
                        )}
                      </span>
                      <span className="text-xs mt-1 text-text-secondary">
                        {getQualityLabel(option.resolution)} • {option.resolution}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* View Button */}
                      <a
                        href={option.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold bg-white border border-gray-300 text-text-secondary hover:text-primary hover:border-primary transition-colors"
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
                          flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-bold text-white shadow-sm transition-all active:scale-95
                          ${isHighQuality 
                            ? 'bg-primary hover:bg-primary-hover shadow-primary/20' 
                            : 'bg-text-secondary hover:bg-text-primary'}
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
            <p className="text-center text-xs text-text-tertiary mt-4">
              ※「保存」ボタンを押しても再生される場合は、長押し（右クリック）して「リンク先のファイルをダウンロード」を選択してください
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;