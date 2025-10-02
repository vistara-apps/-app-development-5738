import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Heart, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Spark
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#experiences" className="text-text-muted hover:text-text transition-colors">
            Experiences
          </a>
          <a href="#rescue" className="text-text-muted hover:text-text transition-colors">
            Rescue
          </a>
          <a href="#proposal" className="text-text-muted hover:text-text transition-colors">
            Proposal
          </a>
          <a href="#community" className="text-text-muted hover:text-text transition-colors">
            Community
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <ConnectButton showBalance={false} />
          </div>
          <Sparkles className="w-5 h-5 text-accent animate-pulse" />
        </div>
      </div>
    </header>
  );
};

export default Header;