import React, { useState } from 'react';
import { ArrowRight, Link as LinkIcon, XCircle } from 'lucide-react';
import { AppState, FetchStatus, VideoResponse } from '../types';
import { fetchVideoInfo } from '../services/api';
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';
import Results from './Results';

const Hero: React.FC = () => {
  const [url, setUrl] = useState('');
  const [appState, setAppState] = useState<AppState>({
    status: FetchStatus.IDLE,
    data: null,
    error: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setAppState({ status: FetchStatus.LOADING, data: null, error: null });

    try {
      const data = await fetchVideoInfo(url);
      setAppState({ status: FetchStatus.SUCCESS, data, error: null });
    } catch (error) {
      setAppState({
        status: FetchStatus.ERROR,
        data: null,
        error: error instanceof Error ? error.message : '不明なエラーが発生しました',
      });
    }
  };

  const handleClear = () => {
    setUrl('');
    setAppState({ status: FetchStatus.IDLE, data: null, error: null });
  };

  return (
    <section className="relative pt-16 pb-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50"></div>
         <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-6">
          <span className="block mb-2">X（Twitter）動画ダウンローダー</span>
          <span className="block text-primary text-2xl md:text-3xl font-bold mt-2">
            無料・高速・簡単に動画を保存
          </span>
        </h1>
        
        <p className="text-text-secondary text-base md:text-lg mb-10 max-w-2xl mx-auto">
          URLを貼り付けるだけで、Twitterの動画を高画質MP4でダウンロードできます。<br className="hidden md:block"/>
          登録不要、完全無料でご利用いただける便利なツールです。
        </p>

        <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto group">
          <div className="relative flex items-center">
            <div className="absolute left-4 text-text-tertiary">
              <LinkIcon className="h-5 w-5" />
            </div>
            
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://x.com/username/status/..."
              className="w-full pl-12 pr-32 md:pr-40 py-4 md:py-5 bg-white border-2 border-gray-200 rounded-2xl shadow-sm text-base focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-text-tertiary"
              required
              aria-label="Twitter動画のURL"
            />

            {/* Clear button (visible when typing) */}
            {url && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-36 md:right-44 text-text-tertiary hover:text-text-secondary p-1"
              >
                <XCircle className="h-5 w-5" />
              </button>
            )}

            <button
              type="submit"
              disabled={appState.status === FetchStatus.LOADING}
              className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl px-4 md:px-8 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95"
            >
              <span className="hidden md:inline">動画を取得</span>
              <span className="md:hidden">取得</span>
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>
          
          <div className="text-left mt-3 px-4">
             <p className="text-xs text-text-tertiary">
               例：https://x.com/elonmusk/status/1234567890
             </p>
          </div>
        </form>

        {/* Dynamic Content Area */}
        <div className="min-h-[200px]">
          {appState.status === FetchStatus.LOADING && <LoadingState />}
          {appState.status === FetchStatus.ERROR && (
            <ErrorState 
              message={appState.error || 'エラーが発生しました'} 
              onRetry={() => handleSubmit({ preventDefault: () => {} } as React.FormEvent)} 
            />
          )}
          {appState.status === FetchStatus.SUCCESS && appState.data && (
            <Results data={appState.data} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;