import React, { useState } from 'react';
import { Menu, X, Download, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { label: '使い方', labelEn: 'HOW TO', href: '#how-to' },
    { label: '特徴', labelEn: 'FEATURES', href: '#features' },
    { label: 'よくある質問', labelEn: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-jp-black text-white border-b-4 border-jp-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-3 group">
              <div className="bg-jp-red text-white p-2 border-2 border-white group-hover:bg-jp-red-dark transition-colors duration-200">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <g>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </g>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg tracking-tight leading-none">
                  動画ダウンローダー
                </span>
                <span className="text-xs text-jp-gold font-medium tracking-widest">
                  VIDEO DOWNLOADER
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 font-bold text-sm hover:bg-jp-red transition-colors duration-200 group"
              >
                <span className="block text-white group-hover:text-white">
                  {link.label}
                </span>
                <span className="block text-[10px] text-jp-gold-light tracking-wider">
                  {link.labelEn}
                </span>
              </a>
            ))}
            {/* CTA Button */}
            <a
              href="#hero"
              className="ml-4 flex items-center gap-2 bg-jp-red hover:bg-jp-red-dark text-white font-bold px-5 py-2 border-2 border-white transition-all duration-200 shadow-jp-sm btn-jp"
            >
              <Download className="h-4 w-4" />
              <span>今すぐ保存</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 border-2 border-white text-white hover:bg-jp-red focus:outline-none transition-colors"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">メニューを開く</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-jp-black-soft border-t-2 border-jp-red">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 border-2 border-jp-black-muted hover:border-jp-red hover:bg-jp-red/10 transition-all"
              >
                <div>
                  <span className="block font-bold text-white">{link.label}</span>
                  <span className="block text-xs text-jp-gold tracking-wider">{link.labelEn}</span>
                </div>
                <span className="text-jp-red text-xl">→</span>
              </a>
            ))}
            {/* Mobile CTA */}
            <a
              href="#hero"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-jp-red text-white font-bold px-5 py-3 border-2 border-white mt-4 shadow-jp-sm btn-jp"
            >
              <Download className="h-5 w-5" />
              <span>今すぐ動画を保存</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
