import React from 'react';
import { Copy, ClipboardPaste, Download, ArrowRight } from 'lucide-react';

const HowTo: React.FC = () => {
  const steps = [
    {
      num: '01',
      numJp: '一',
      title: 'URLをコピー',
      titleEn: 'COPY URL',
      desc: 'X（Twitter）アプリまたはブラウザから、保存したい動画が含まれる投稿のURLをコピーします。',
      icon: <Copy className="h-8 w-8" />,
      color: 'bg-jp-red',
    },
    {
      num: '02',
      numJp: '二',
      title: 'URLを貼り付け',
      titleEn: 'PASTE URL',
      desc: 'このサイトの入力フォームにコピーしたURLを貼り付け、「動画を取得」ボタンを押します。',
      icon: <ClipboardPaste className="h-8 w-8" />,
      color: 'bg-jp-black',
    },
    {
      num: '03',
      numJp: '三',
      title: 'ダウンロード',
      titleEn: 'DOWNLOAD',
      desc: '画質の一覧が表示されます。お好みの画質（MP4）を選択してダウンロード・保存します。',
      icon: <Download className="h-8 w-8" />,
      color: 'bg-jp-gold-dark',
    },
  ];

  return (
    <section id="how-to" className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-seigaiha opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-6xl font-black text-jp-red opacity-20">使</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-jp-black mb-2">
            使い方
          </h2>
          <p className="text-sm font-bold text-jp-gold tracking-widest mb-4">
            HOW TO USE
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-1 bg-jp-black"></span>
            <span className="text-jp-red text-2xl">✦</span>
            <span className="w-12 h-1 bg-jp-black"></span>
          </div>
          <p className="text-text-secondary mt-6 font-medium">
            3つの簡単なステップで動画を保存できます
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Connector Arrow (hidden on last item and mobile) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-10 text-jp-red">
                  <ArrowRight className="h-6 w-6" />
                </div>
              )}

              <div className="bg-white border-4 border-jp-black shadow-jp card-jp h-full">
                {/* Step Number Header */}
                <div className={`${step.color} text-white px-6 py-4 flex items-center justify-between border-b-4 border-jp-black`}>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black">{step.num}</span>
                    <span className="text-2xl opacity-60">{step.numJp}</span>
                  </div>
                  <div className="text-white opacity-80">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-jp-black mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-bold text-jp-gold tracking-wider mb-4">
                    {step.titleEn}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#hero"
            className="inline-flex items-center gap-3 bg-jp-red hover:bg-jp-red-dark text-white font-black px-8 py-4 border-4 border-jp-black shadow-jp btn-jp transition-colors"
          >
            <span className="text-lg">今すぐ試してみる</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowTo;
