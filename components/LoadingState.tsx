import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 animate-in fade-in duration-500">
      <div className="relative">
        {/* Decorative circles */}
        <div className="absolute -inset-4 border-4 border-jp-red/20 animate-ping rounded-none"></div>
        <div className="absolute -inset-2 border-2 border-jp-gold/30 animate-pulse rounded-none"></div>

        {/* Main loader container */}
        <div className="bg-jp-black p-4 border-4 border-jp-black relative">
          <Loader2 className="h-10 w-10 text-jp-gold animate-spin" />
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-xl font-black text-jp-black">動画を取得中...</p>
        <p className="text-xs text-jp-gold tracking-widest mt-1 font-bold">LOADING</p>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-jp-red animate-bounce" style={{ animationDelay: '0ms' }}></span>
        <span className="w-2 h-2 bg-jp-red animate-bounce" style={{ animationDelay: '150ms' }}></span>
        <span className="w-2 h-2 bg-jp-red animate-bounce" style={{ animationDelay: '300ms' }}></span>
      </div>

      <p className="text-sm text-text-secondary mt-4">数秒お待ちください</p>
    </div>
  );
};

export default LoadingState;
