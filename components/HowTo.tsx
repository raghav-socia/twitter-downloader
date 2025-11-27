import React from 'react';
import { Copy, ClipboardPaste, Download } from 'lucide-react';

const HowTo: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'URLをコピー',
      desc: 'X（Twitter）アプリまたはブラウザから、保存したい動画が含まれる投稿のURLをコピーします。',
      icon: <Copy className="h-8 w-8 text-primary" />,
    },
    {
      num: '2',
      title: 'URLを貼り付け',
      desc: 'このサイトの入力フォームにコピーしたURLを貼り付け、「動画を取得」ボタンを押します。',
      icon: <ClipboardPaste className="h-8 w-8 text-primary" />,
    },
    {
      num: '3',
      title: 'ダウンロード',
      desc: '画質の一覧が表示されます。お好みの画質（MP4）を選択してダウンロード・保存します。',
      icon: <Download className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <section id="how-to" className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">使い方</h2>
          <p className="text-text-secondary">3つの簡単なステップで動画を保存できます</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
              
              {/* Step Number Badge */}
              <div className="absolute -top-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg shadow-md border-2 border-white">
                {step.num}
              </div>

              <div className="mb-6 p-5 bg-primary-light rounded-full group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowTo;