import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({ message, onRetry }) => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-red-50 border border-red-100 rounded-xl text-center animate-in slide-in-from-bottom-2">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-red-100 rounded-full">
          <AlertCircle className="h-8 w-8 text-accent" />
        </div>
      </div>
      <h3 className="text-lg font-bold text-text-primary mb-2">エラーが発生しました</h3>
      <p className="text-text-secondary mb-6">{message}</p>
      <button
        onClick={onRetry}
        className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-red-200 text-accent font-semibold rounded-lg hover:bg-red-50 hover:border-accent transition-colors duration-200"
      >
        <RefreshCw className="h-4 w-4" />
        もう一度試す
      </button>
    </div>
  );
};

export default ErrorState;