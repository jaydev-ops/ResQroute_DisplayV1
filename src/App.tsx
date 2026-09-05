/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { WebsiteHeader } from './components/website/WebsiteHeader';
import { HeroSection } from './components/website/HeroSection';
import { ProblemSolutionSection } from './components/website/ProblemSolutionSection';
import { InteractiveScreenGallery } from './components/website/InteractiveScreenGallery';
import { ArchitectureDeepDiveSection } from './components/website/ArchitectureDeepDiveSection';
import { ApiDocsSection } from './components/website/ApiDocsSection';
import { CaseStudiesRoadmapSection } from './components/website/CaseStudiesRoadmapSection';
import { IPhoneDeviceFrame } from './components/mobile/IPhoneDeviceFrame';
import { MobileAppExperience } from './components/mobile/MobileAppExperience';

export default function App() {
  const [currentView, setCurrentView] = useState<'website' | 'mobile'>('website');

  const scrollToSection = (sectionId: string) => {
    if (currentView === 'mobile') {
      setCurrentView('website');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FAF9F9] text-[#1A1C1C] flex flex-col font-body selection:bg-[#D5E3FF] selection:text-[#001B3B]">
      {/* Universal Top Header */}
      <WebsiteHeader
        currentView={currentView}
        onViewChange={setCurrentView}
        onNavigateSection={scrollToSection}
      />

      {/* Main View Router */}
      {currentView === 'website' && (
        <main className="flex-1 w-full">
          <HeroSection
            onOpenMobileApp={() => setCurrentView('mobile')}
            onExploreArchitecture={() => scrollToSection('architecture')}
          />
          <ProblemSolutionSection />
          <InteractiveScreenGallery />
          <ArchitectureDeepDiveSection />
          <ApiDocsSection />
          <CaseStudiesRoadmapSection onOpenMobileApp={() => setCurrentView('mobile')} />
        </main>
      )}

      {currentView === 'mobile' && (
        <main className="flex-1 w-full flex flex-col items-center justify-center p-2 sm:p-6 lg:p-10 bg-gradient-to-b from-[#F4F3F3] to-[#FAF9F9]">
          <div className="w-full max-w-md flex flex-col items-center">
            {/* Quick Context Strip */}
            <div className="flex items-center justify-between w-full px-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#005EB2] animate-pulse" />
                <span className="text-xs font-bold text-[#1A1C1C]">
                  Mobile Application Sandbox
                </span>
              </div>
              <button
                onClick={() => setCurrentView('website')}
                className="text-xs font-bold text-[#005EB2] hover:underline flex items-center gap-1"
              >
                <span>Return to Editorial Website</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>

            {/* Realistic iPhone Hardware Frame Container */}
            <IPhoneDeviceFrame>
              <MobileAppExperience initialTab="radar" initialMode="emergency" />
            </IPhoneDeviceFrame>

            <p className="text-center text-[11px] text-[#524436] mt-4 font-medium">
              Interactive Mobile Suite • Tap bottom tabs to switch between Radar, Go-Bag Kit, Safe Havens, Dossier & Profile.
            </p>
          </div>
        </main>
      )}
    </div>
  );
}

