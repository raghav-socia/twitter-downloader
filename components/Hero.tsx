import React, { useState } from 'react';
import { ArrowRight, Link as LinkIcon, XCircle, Sparkles, Zap } from 'lucide-react';
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
    <section id="hero" className="relative pt-12 pb-16 overflow-hidden bg-jp-white-cream bg-sakura">
      {/* Decorative elements */}
      <div className="absolute top-8 left-8 w-20 h-20 bg-jp-gold rounded-full opacity-80 blur-sm hidden lg:block"></div>
      <div className="absolute top-32 right-12 w-12 h-12 bg-jp-red rounded-full opacity-60 hidden lg:block"></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 bg-jp-black rounded-full opacity-30 hidden lg:block"></div>

      {/* Vertical decorative text */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 vertical-text text-jp-red/10 text-6xl font-black tracking-widest hidden xl:block">
        動画保存
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-jp-black text-white px-4 py-2 mb-6 border-2 border-jp-black shadow-jp-sm">
          <Sparkles className="h-4 w-4 text-jp-gold" />
          <span className="text-sm font-bold">完全無料 / FREE</span>
          <span className="text-jp-gold">✦</span>
          <span className="text-sm font-bold">登録不要</span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-8">
          <span className="block text-hero-sm md:text-hero text-jp-black font-black tracking-tight leading-tight">
            X（Twitter）
          </span>
          <span className="block text-hero-sm md:text-hero text-jp-red font-black tracking-tight leading-tight">
            動画ダウンローダー
          </span>
          <span className="block text-lg md:text-xl text-jp-black-muted font-medium mt-4 tracking-wide">
            VIDEO DOWNLOADER FOR X/TWITTER
          </span>
        </h1>

        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <span className="inline-flex items-center gap-1.5 bg-white px-4 py-2 border-3 border-jp-black shadow-jp-sm font-bold text-sm">
            <Zap className="h-4 w-4 text-jp-gold" />
            高速処理
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white px-4 py-2 border-3 border-jp-black shadow-jp-sm font-bold text-sm">
            <span className="text-jp-red">♦</span>
            高画質MP4
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white px-4 py-2 border-3 border-jp-black shadow-jp-sm font-bold text-sm">
            <span className="text-jp-gold">★</span>
            簡単操作
          </span>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
          <div className="bg-white border-4 border-jp-black shadow-jp p-2">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-jp-black text-white p-3">
                <LinkIcon className="h-5 w-5" />
              </div>

              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://x.com/username/status/..."
                className="flex-1 px-4 py-3 text-base focus:outline-none placeholder:text-text-tertiary font-medium"
                required
                aria-label="Twitter動画のURL"
              />

              {/* Clear button */}
              {url && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="flex-shrink-0 p-2 text-text-tertiary hover:text-jp-red transition-colors"
                >
                  <XCircle className="h-5 w-5" />
                </button>
              )}

              <button
                type="submit"
                disabled={appState.status === FetchStatus.LOADING}
                className="flex-shrink-0 bg-jp-red hover:bg-jp-red-dark text-white font-black px-6 py-3 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 border-l-4 border-jp-black"
              >
                <span className="hidden md:inline">動画を取得</span>
                <span className="md:hidden">取得</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 px-2">
            <p className="text-sm text-text-secondary font-medium">
              <span className="text-jp-red font-bold">例：</span>
              https://x.com/elonmusk/status/1234567890
            </p>
            <span className="text-xs text-jp-gold font-bold bg-jp-black px-2 py-1">
              PASTE & GO
            </span>
          </div>
        </form>

        {/* Dynamic Content Area */}
        <div className="min-h-[200px] mt-8">
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
