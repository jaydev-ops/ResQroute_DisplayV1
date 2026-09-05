import React from 'react';
import { ResQrouteLogo } from '../common/ResQrouteLogo';

interface WebsiteHeaderProps {
  currentView: 'website' | 'mobile';
  onViewChange: (view: 'website' | 'mobile') => void;
  onNavigateSection: (sectionId: string) => void;
}

export const WebsiteHeader: React.FC<WebsiteHeaderProps> = ({
  currentView,
  onViewChange,
  onNavigateSection,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF9F9]/90 backdrop-blur-xl border-b border-[#E9E8E8] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => onNavigateSection('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="group-hover:scale-105 transition-transform">
            <ResQrouteLogo size={42} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-black tracking-tight text-[#1A1C1C]">
                Res<span className="text-[#005EB2]">Q</span>route
              </span>
            </div>
            <p className="text-[11px] text-[#524436] font-medium hidden sm:block">
              Life-Critical Evacuation & Shelter Intelligence
            </p>
          </div>
        </div>

        {/* Editorial Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-[#524436]">
          <button
            onClick={() => onNavigateSection('problem')}
            className="hover:text-[#005EB2] transition-colors"
          >
            Why Standard Maps Fail
          </button>
          <button
            onClick={() => onNavigateSection('screens')}
            className="hover:text-[#005EB2] transition-colors"
          >
            Mobile Suite
          </button>
          <button
            onClick={() => onNavigateSection('architecture')}
            className="hover:text-[#005EB2] transition-colors"
          >
            Spatial Architecture
          </button>
          <button
            onClick={() => onNavigateSection('api')}
            className="hover:text-[#005EB2] transition-colors"
          >
            API & Telemetry
          </button>
          <button
            onClick={() => onNavigateSection('roadmap')}
            className="hover:text-[#005EB2] transition-colors"
          >
            Roadmap
          </button>
        </nav>

        {/* View Switcher Bar */}
        <div className="flex items-center gap-2.5">
          {/* View Mode Toggle Pill */}
          <div className="flex items-center p-1 bg-[#EFEEED] rounded-xl border border-[#E9E8E8]">
            <button
              onClick={() => onViewChange('website')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentView === 'website'
                  ? 'bg-white text-[#1A1C1C] shadow-xs'
                  : 'text-[#524436] hover:text-[#1A1C1C]'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">web</span>
              <span className="hidden md:inline">Website</span>
            </button>
            <button
              onClick={() => onViewChange('mobile')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentView === 'mobile'
                  ? 'bg-[#005EB2] text-white shadow-xs'
                  : 'text-[#524436] hover:text-[#005EB2]'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">smartphone</span>
              <span>App</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
