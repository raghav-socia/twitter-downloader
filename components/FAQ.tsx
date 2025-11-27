import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: 'このサービスは無料ですか？',
      a: 'はい、完全無料でご利用いただけます。登録やアプリのインストールも不要です。回数制限もありませんので、何度でもご利用ください。',
    },
    {
      q: 'iPhoneやAndroidでも使えますか？',
      a: 'はい、スマートフォン（iPhone/Android）、タブレット、PC（Windows/Mac）など、ブラウザが動作するすべてのデバイスでご利用いただけます。',
    },
    {
      q: '非公開アカウント（鍵垢）の動画は保存できますか？',
      a: 'いいえ、非公開アカウントの動画やプライベート設定の動画はアクセス権限がないためダウンロードできません。公開アカウントの動画のみ対応しています。',
    },
    {
      q: 'ダウンロードした動画の保存先はどこですか？',
      a: '通常はデバイスの「ダウンロード」フォルダまたは写真アプリ（iPhoneの場合）に保存されます。ブラウザの設定によって異なる場合があります。',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-bg-tertiary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">よくある質問</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none">
                <span className="font-bold text-text-primary pr-4">{faq.q}</span>
                <span className="bg-bg-tertiary p-1 rounded-full group-open:rotate-180 transition-transform duration-200">
                  <ChevronDown className="h-5 w-5 text-text-secondary" />
                </span>
              </summary>
              <div className="px-5 pb-5 pt-0">
                <p className="text-text-secondary text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;