import React from 'react';
import { Zap, CheckCircle, Smartphone, Shield, Star, Globe, Lock, Clock } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: '完全無料',
      titleEn: 'FREE',
      desc: 'すべての機能を無料でご利用いただけます。課金や隠れた費用は一切ありません。',
      icon: <CheckCircle className="h-7 w-7" />,
      accent: 'border-l-jp-red',
      badge: '¥0',
      badgeColor: 'bg-jp-red',
    },
    {
      title: '高速処理',
      titleEn: 'FAST',
      desc: '高性能なサーバーにより、URL解析からダウンロードリンク生成まで数秒で完了します。',
      icon: <Zap className="h-7 w-7" />,
      accent: 'border-l-jp-gold',
      badge: '⚡',
      badgeColor: 'bg-jp-gold',
    },
    {
      title: '登録不要',
      titleEn: 'NO SIGNUP',
      desc: 'アカウント作成や個人情報の入力は不要。誰でもすぐに使い始められます。',
      icon: <Shield className="h-7 w-7" />,
      accent: 'border-l-jp-navy',
      badge: '✓',
      badgeColor: 'bg-jp-navy',
    },
    {
      title: '全デバイス対応',
      titleEn: 'ALL DEVICES',
      desc: 'iPhone、Android、PC、タブレットなど、あらゆるデバイスでご利用いただけます。',
      icon: <Smartphone className="h-7 w-7" />,
      accent: 'border-l-jp-black',
      badge: '📱',
      badgeColor: 'bg-jp-black',
    },
  ];

  const additionalFeatures = [
    { icon: <Globe className="h-5 w-5" />, text: '日本語対応' },
    { icon: <Lock className="h-5 w-5" />, text: 'SSL暗号化' },
    { icon: <Clock className="h-5 w-5" />, text: '24時間利用可能' },
    { icon: <Star className="h-5 w-5" />, text: '高画質対応' },
  ];

  return (
    <section id="features" className="py-20 bg-jp-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-4 border-jp-red/20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-jp-gold/20 rounded-full"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-jp-gold/10 rounded-full hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-6xl font-black text-white opacity-10">特</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
            特徴・機能
          </h2>
          <p className="text-sm font-bold text-jp-gold tracking-widest mb-4">
            FEATURES
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-1 bg-white"></span>
            <span className="text-jp-red text-2xl">✦</span>
            <span className="w-12 h-1 bg-white"></span>
          </div>
          <p className="text-white/70 mt-6 font-medium">
            便利で快適なダウンロード体験を提供します
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`bg-white border-4 border-jp-black ${feature.accent} border-l-4 shadow-jp card-jp relative overflow-hidden`}
            >
              {/* Badge */}
              <div className={`absolute top-0 right-0 ${feature.badgeColor} text-white font-black px-3 py-1 text-sm`}>
                {feature.badge}
              </div>

              <div className="p-6">
                {/* Icon */}
                <div className="mb-4 bg-jp-white-cream border-3 border-jp-black w-14 h-14 flex items-center justify-center shadow-jp-sm">
                  <div className="text-jp-black">
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-jp-black mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs font-bold text-jp-gold tracking-wider mb-3">
                  {feature.titleEn}
                </p>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Bar */}
        <div className="mt-12 bg-jp-red border-4 border-white p-6">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {additionalFeatures.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white font-bold">
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
