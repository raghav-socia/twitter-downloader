import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 animate-in fade-in duration-500">
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-pulse"></div>
        <Loader2 className="relative h-12 w-12 text-primary animate-spin" />
      </div>
      <p className="mt-4 text-text-secondary font-medium">動画を取得中...</p>
      <p className="text-xs text-text-tertiary mt-2">数秒お待ちください</p>
    </div>
  );
};

export default LoadingState;