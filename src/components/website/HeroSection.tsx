import React, { useState } from 'react';
import { IPhoneDeviceFrame } from '../mobile/IPhoneDeviceFrame';
import { MobileAppExperience } from '../mobile/MobileAppExperience';
import { MobileTab } from '../../types';

interface HeroSectionProps {
  onOpenMobileApp: () => void;
  onExploreArchitecture: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenMobileApp,
  onExploreArchitecture,
}) => {
  const [selectedHeroTab, setSelectedHeroTab] = useState<MobileTab>('radar');

  const heroTabs = [
    { id: 'radar' as MobileTab, label: 'Evacuation Radar', icon: 'radar' },
    { id: 'preparedness' as MobileTab, label: 'Peacetime Hub', icon: 'shield_with_heart' },
    { id: 'safe_zones' as MobileTab, label: 'Safe Haven Dossier', icon: 'night_shelter' },
    { id: 'dossier' as MobileTab, label: 'Hazard Verification', icon: 'how_to_reg' },
    { id: 'profile' as MobileTab, label: 'Profile & Accessibility', icon: 'account_circle' },
  ];

  return (
    <section id="hero" className="relative w-full pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Editorial Ambient Background Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#D5E3FF]/30 via-[#FFDDB7]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Manifesto */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Editorial Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1A1C1C] leading-[1.08] font-display">
              Safest route is{' '}
              <span className="text-[#005EB2] block mt-1">not the Shortest Route.</span>
            </h1>

            {/* Subtitle / Human Manifesto */}
            <p className="text-base sm:text-lg text-[#524436] font-normal leading-relaxed max-w-2xl">
              When monsoons strike, standard navigation apps blindly route families into drowned underpasses.
              <strong className="text-[#1A1C1C] font-semibold"> resQroute</strong> mathematically guarantees safe
              high-ground evacuation corridors using deterministic PostGIS topological elevation, real-time shelter
              quorum, and an offline 2G SMS lifeline.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenMobileApp}
                className="h-13 px-6 rounded-2xl bg-[#005EB2] text-white font-bold text-sm shadow-md hover:bg-[#005EB2]/95 active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">play_circle</span>
                <span>Launch Interactive Mobile App</span>
              </button>

              <button
                onClick={onExploreArchitecture}
                className="h-13 px-5 rounded-2xl bg-white text-[#1A1C1C] font-bold text-sm border border-[#E9E8E8] hover:bg-[#F4F3F3] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px] text-[#855400]">
                  account_tree
                </span>
                <span>Explore Spatial Architecture</span>
              </button>
            </div>

            {/* Trust Quote / Authority Verification */}
            <div className="pt-2 flex items-center gap-3 text-xs text-[#524436]">
              <div className="w-8 h-8 rounded-full bg-[#D5E3FF] flex items-center justify-center text-[#001B3B] font-bold text-xs flex-shrink-0">
                ✓
              </div>
              <p>
                To make evacuation safer in partnership with Municipal Disaster Authorities & NDRF search and
                rescue teams under simulated severe monsoon inundation.
              </p>
            </div>
          </div>

          {/* Right Column: Realistic iPhone 16 Pro Device Mockup with Live Screen Interactive Switching */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Screen Selector Pills for the Hero Device */}
            <div className="flex items-center gap-1.5 p-1 bg-[#EFEEED] rounded-2xl mb-4 max-w-full overflow-x-auto no-scrollbar shadow-inner">
              {heroTabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedHeroTab(t.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    selectedHeroTab === t.id
                      ? 'bg-white text-[#005EB2] shadow-xs'
                      : 'text-[#524436] hover:text-[#1A1C1C]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[15px]">{t.icon}</span>
                  <span>{t.label}</span>
                </button>
              ))}
            </div>

            {/* iPhone Device Frame Rendering the Active Mobile Screen */}
            <div className="w-full flex justify-center transition-transform duration-200">
              <IPhoneDeviceFrame>
                <MobileAppExperience
                  activeTab={selectedHeroTab}
                  onTabChange={(tab) => setSelectedHeroTab(tab)}
                  initialMode={selectedHeroTab === 'preparedness' ? 'peacetime' : 'emergency'}
                />
              </IPhoneDeviceFrame>
            </div>

            <p className="text-[11px] text-[#524436] mt-3 font-medium flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-[#005EB2]">touch_app</span>
              <span>Fully interactive hardware container. Tap controls to test live routing and Go-Bag.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
