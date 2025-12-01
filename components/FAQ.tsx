import React from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      num: 'Q1',
      q: 'このサービスは無料ですか？',
      a: 'はい、完全無料でご利用いただけます。登録やアプリのインストールも不要です。回数制限もありませんので、何度でもご利用ください。',
    },
    {
      num: 'Q2',
      q: 'iPhoneやAndroidでも使えますか？',
      a: 'はい、スマートフォン（iPhone/Android）、タブレット、PC（Windows/Mac）など、ブラウザが動作するすべてのデバイスでご利用いただけます。',
    },
    {
      num: 'Q3',
      q: '非公開アカウント（鍵垢）の動画は保存できますか？',
      a: 'いいえ、非公開アカウントの動画やプライベート設定の動画はアクセス権限がないためダウンロードできません。公開アカウントの動画のみ対応しています。',
    },
    {
      num: 'Q4',
      q: 'ダウンロードした動画の保存先はどこですか？',
      a: '通常はデバイスの「ダウンロード」フォルダまたは写真アプリ（iPhoneの場合）に保存されます。ブラウザの設定によって異なる場合があります。',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-jp-white-cream bg-sakura relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-6xl font-black text-jp-red opacity-20">質</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-jp-black mb-2">
            よくある質問
          </h2>
          <p className="text-sm font-bold text-jp-gold tracking-widest mb-4">
            FAQ
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-1 bg-jp-black"></span>
            <span className="text-jp-red text-2xl">✦</span>
            <span className="w-12 h-1 bg-jp-black"></span>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white border-4 border-jp-black shadow-jp overflow-hidden"
            >
              <summary className="flex items-center gap-4 p-5 cursor-pointer list-none select-none hover:bg-jp-white-cream transition-colors">
                {/* Question Number */}
                <span className="flex-shrink-0 bg-jp-red text-white font-black px-3 py-1 text-sm">
                  {faq.num}
                </span>

                {/* Question Text */}
                <span className="flex-1 font-bold text-jp-black pr-4">
                  {faq.q}
                </span>

                {/* Toggle Icon */}
                <span className="flex-shrink-0 bg-jp-black text-white p-1 group-open:bg-jp-red group-open:rotate-180 transition-all duration-200">
                  <ChevronDown className="h-5 w-5" />
                </span>
              </summary>

              <div className="border-t-4 border-jp-black bg-jp-white-off">
                <div className="p-5 flex gap-4">
                  {/* Answer Label */}
                  <span className="flex-shrink-0 bg-jp-gold text-jp-black font-black px-3 py-1 text-sm h-fit">
                    A
                  </span>

                  {/* Answer Text */}
                  <p className="text-text-secondary leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-jp-black border-4 border-jp-red p-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <MessageCircle className="h-6 w-6 text-jp-gold" />
            <span className="text-white font-bold text-lg">
              その他のご質問がありますか？
            </span>
          </div>
          <p className="text-white/70 text-sm">
            お気軽にお問い合わせください
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
