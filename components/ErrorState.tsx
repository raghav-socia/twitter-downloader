import React from 'react';
import { AlertCircle, RefreshCw, XCircle } from 'lucide-react';

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({ message, onRetry }) => {
  return (
    <div className="max-w-2xl mx-auto mt-8 animate-in slide-in-from-bottom-2">
      {/* Error Header */}
      <div className="bg-jp-red text-white px-4 py-3 flex items-center justify-center gap-2 border-4 border-jp-black">
        <XCircle className="h-5 w-5" />
        <span className="font-black">エラーが発生しました</span>
        <span className="text-xs opacity-80">ERROR</span>
      </div>

      {/* Error Content */}
      <div className="bg-white border-4 border-jp-black border-t-0 p-6 text-center shadow-jp">
        <div className="flex justify-center mb-4">
          <div className="bg-jp-red-light p-4 border-3 border-jp-red">
            <AlertCircle className="h-10 w-10 text-jp-red" />
          </div>
        </div>

        <p className="text-text-secondary mb-6 text-lg">{message}</p>

        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-8 py-3 bg-jp-black hover:bg-jp-black-soft text-white font-black border-4 border-jp-black shadow-jp-red btn-jp transition-colors duration-200"
        >
          <RefreshCw className="h-5 w-5" />
          <span>もう一度試す</span>
          <span className="text-xs text-jp-gold">RETRY</span>
        </button>

        {/* Help Text */}
        <div className="mt-6 bg-jp-white-cream border-l-4 border-jp-gold p-4 text-left">
          <p className="text-sm text-text-secondary">
            <span className="font-bold text-jp-gold">ヒント：</span>
            URLが正しいか確認してください。非公開アカウントの動画は取得できません。
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorState;
