import React from 'react';
import { Zap, CheckCircle, Smartphone, Shield } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: '完全無料',
      desc: 'すべての機能を無料でご利用いただけます。課金や隠れた費用は一切ありません。',
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
    },
    {
      title: '高速処理',
      desc: '高性能なサーバーにより、URL解析からダウンロードリンク生成まで数秒で完了します。',
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: '登録不要',
      desc: 'アカウント作成や個人情報の入力は不要。誰でもすぐに使い始められます。',
      icon: <Shield className="h-6 w-6 text-blue-500" />,
    },
    {
      title: '全デバイス対応',
      desc: 'iPhone、Android、PC、タブレットなど、あらゆるデバイスでご利用いただけます。',
      icon: <Smartphone className="h-6 w-6 text-purple-500" />,
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">特徴・機能</h2>
          <p className="text-text-secondary">便利で快適なダウンロード体験を提供します</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-bg-secondary border border-transparent hover:border-gray-200 transition-colors">
              <div className="mb-4 bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{feature.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;