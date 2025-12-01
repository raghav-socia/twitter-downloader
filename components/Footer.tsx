import React from 'react';
import { ShieldCheck, Lock, ArrowUp, ExternalLink, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-jp-black text-white">
      {/* Back to Top Button */}
      <div className="border-b border-jp-black-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={scrollToTop}
            className="w-full py-4 flex items-center justify-center gap-2 text-jp-gold hover:text-jp-gold-light transition-colors font-bold"
          >
            <ArrowUp className="h-5 w-5" />
            <span>ページトップへ戻る</span>
            <span className="text-xs tracking-wider opacity-70">BACK TO TOP</span>
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-jp-red text-white p-2 border-2 border-white">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                    <g>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </g>
                  </svg>
                </div>
                <div>
                  <span className="font-black text-lg block leading-none">動画ダウンローダー</span>
                  <span className="text-xs text-jp-gold tracking-wider">VIDEO DOWNLOADER</span>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                X（Twitter）の動画を無料で高画質ダウンロード。登録不要、すぐに使える便利なツールです。
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-black text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-jp-red"></span>
                サービス
                <span className="text-xs text-jp-gold tracking-wider font-medium">SERVICE</span>
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#how-to" className="text-white/70 hover:text-jp-gold transition-colors flex items-center gap-2">
                    <span className="text-jp-red">→</span>
                    使い方
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-white/70 hover:text-jp-gold transition-colors flex items-center gap-2">
                    <span className="text-jp-red">→</span>
                    特徴・機能
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-white/70 hover:text-jp-gold transition-colors flex items-center gap-2">
                    <span className="text-jp-red">→</span>
                    よくある質問
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-black text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-jp-gold"></span>
                法的情報
                <span className="text-xs text-jp-gold tracking-wider font-medium">LEGAL</span>
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-white/70 hover:text-jp-gold transition-colors flex items-center gap-2">
                    <span className="text-jp-gold">→</span>
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-jp-gold transition-colors flex items-center gap-2">
                    <span className="text-jp-gold">→</span>
                    利用規約
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-jp-gold transition-colors flex items-center gap-2">
                    <span className="text-jp-gold">→</span>
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </div>

            {/* Security */}
            <div>
              <h4 className="text-white font-black text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500"></span>
                セキュリティ
                <span className="text-xs text-jp-gold tracking-wider font-medium">SECURITY</span>
              </h4>

              {/* SSL Badge */}
              <div className="bg-jp-black-soft border-2 border-jp-black-muted p-4 mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-500 p-2">
                    <Lock className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-white block text-sm">SSL暗号化</span>
                    <span className="text-xs text-green-400">SECURE CONNECTION</span>
                  </div>
                </div>
              </div>

              <p className="text-white/50 text-xs leading-relaxed">
                当サイトはユーザーのプライバシーを尊重し、入力されたURLやダウンロード履歴を保存しません。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-4 border-jp-red bg-jp-black-soft py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/50">
              &copy; {currentYear} X（Twitter）動画ダウンローダー. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-jp-red fill-jp-red" />
              <span>in Japan</span>
              <span className="text-jp-gold">🇯🇵</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
