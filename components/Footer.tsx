import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* About */}
          <div>
            <h4 className="text-lg font-bold text-text-primary mb-4">サービスについて</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><a href="#how-to" className="hover:text-primary transition-colors">使い方</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">特徴</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">よくある質問</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold text-text-primary mb-4">法的情報</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-primary transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">利用規約</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">お問い合わせ</a></li>
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h4 className="text-lg font-bold text-text-primary mb-4">セキュリティ</h4>
            <div className="flex items-center gap-2 text-text-secondary mb-2">
               <ShieldCheck className="h-5 w-5 text-green-600" />
               <span className="text-sm font-medium">SSL暗号化通信対応</span>
            </div>
            <p className="text-xs text-text-tertiary leading-relaxed">
              当サイトはユーザーのプライバシーを尊重し、入力されたURLやダウンロード履歴を保存しません。安心・安全にご利用いただけます。
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-text-tertiary">
            &copy; {currentYear} X（Twitter）動画ダウンローダー. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;