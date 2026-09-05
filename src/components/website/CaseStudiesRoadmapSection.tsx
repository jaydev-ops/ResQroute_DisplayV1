import React from 'react';
import { ResQrouteLogo } from '../common/ResQrouteLogo';

interface CaseStudiesRoadmapSectionProps {
  onOpenMobileApp: () => void;
}

export const CaseStudiesRoadmapSection: React.FC<CaseStudiesRoadmapSectionProps> = ({
  onOpenMobileApp,
}) => {
  return (
    <section id="casestudy" className="w-full py-16 lg:py-24 bg-[#FAF9F9] border-t border-[#E9E8E8]">
      <div id="roadmap" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Humanitarian Multi-Disaster Roadmap */}
        <div className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5E3FF] text-[#001B3B] text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px] text-[#005EB2]">rocket_launch</span>
              <span>Engineering Roadmap</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1C1C] tracking-tight">
              Phased Engineering Roadmap
            </h2>
            <p className="text-base text-[#524436] leading-relaxed">
              Architectural milestone trajectory advancing from our deterministic web-first core to expanded machine intelligence and autonomous disaster resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Phase 1: MVP (Web-First Core) */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-emerald-500/50 shadow-xs space-y-5 flex flex-col justify-between relative transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-300">
                    Phase 1: MVP
                  </span>
                  <span className="text-[11px] font-bold text-[#524436] bg-[#F4F3F3] px-2.5 py-0.5 rounded-full">
                    Web-First Core
                  </span>
                </div>

                <div className="pt-1">
                  <h3 className="text-base sm:text-lg font-black text-[#1A1C1C] tracking-tight">
                    Foundational Core
                  </h3>
                </div>

                <ul className="space-y-2.5 text-xs text-[#524436]">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                    <span className="font-medium text-[#1A1C1C]">React + FastAPI + PostGIS</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                    <span>Deterministic Overlay Engine</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                    <span>Append-only Shelter Capacity</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                    <span>Authority Dashboard & Audit</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                    <span>Simulated SMS Demo Screen</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 border-t border-emerald-100 flex items-center justify-between text-[11px] font-bold text-emerald-800">
                <span>Status: Current Target</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>

            {/* Phase 2: Enhanced (Expanded Intelligence) */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-[#005EB2]/50 shadow-xs space-y-5 flex flex-col justify-between relative transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#005EB2] bg-[#D5E3FF]/80 px-3 py-1 rounded-full border border-[#005EB2]/30">
                    Phase 2: Enhanced
                  </span>
                  <span className="text-[11px] font-bold text-[#524436] bg-[#F4F3F3] px-2.5 py-0.5 rounded-full">
                    Expanded Intelligence
                  </span>
                </div>

                <div className="pt-1">
                  <h3 className="text-base sm:text-lg font-black text-[#1A1C1C] tracking-tight">
                    Machine & Sensor Graph
                  </h3>
                </div>

                <ul className="space-y-2.5 text-xs text-[#524436]">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#005EB2] mt-1.5 shrink-0" />
                    <span className="font-medium text-[#1A1C1C]">Custom Dynamic Graph Engine</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#005EB2] mt-1.5 shrink-0" />
                    <span>Shadow Mode ML Classifier</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#005EB2] mt-1.5 shrink-0" />
                    <span>Automated Weather Ingestion</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#005EB2] mt-1.5 shrink-0" />
                    <span>Native Android Companion</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#005EB2] mt-1.5 shrink-0" />
                    <span>Volunteer QR Check-in</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 border-t border-[#D5E3FF] flex items-center justify-between text-[11px] font-bold text-[#005EB2]">
                <span>Status: In Development</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>

            {/* Phase 3: Advanced (Disaster Resilience) */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-purple-500/50 shadow-xs space-y-5 flex flex-col justify-between relative transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-purple-800 bg-purple-100/80 px-3 py-1 rounded-full border border-purple-300">
                    Phase 3: Advanced
                  </span>
                  <span className="text-[11px] font-bold text-[#524436] bg-[#F4F3F3] px-2.5 py-0.5 rounded-full">
                    Disaster Resilience
                  </span>
                </div>

                <div className="pt-1">
                  <h3 className="text-base sm:text-lg font-black text-[#1A1C1C] tracking-tight">
                    Autonomous Mesh & Sat-Link
                  </h3>
                </div>

                <ul className="space-y-2.5 text-xs text-[#524436]">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                    <span className="font-medium text-[#1A1C1C]">Experimental BLE Mesh SOS</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                    <span>Predictive Inundation Models</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                    <span>Autonomous Drone Feeds</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                    <span>Nationwide Edge Clustering</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                    <span>Sat-link Fallback Gateway</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 border-t border-purple-100 flex items-center justify-between text-[11px] font-bold text-purple-800">
                <span>Status: Research & Mesh Field</span>
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Final Conversion / Call to Action */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#005EB2] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Experience the Complete Product Ecosystem
            </h3>
            <p className="text-sm text-white/90 leading-relaxed">
              Interact with the mobile application inside the realistic iPhone container or test all 8 disaster screens.
            </p>
          </div>
          <button
            onClick={onOpenMobileApp}
            className="px-6 py-3.5 rounded-2xl bg-white text-[#005EB2] font-extrabold text-sm shadow-md hover:bg-white/90 active:scale-[0.98] transition-all whitespace-nowrap flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">phone_iphone</span>
            <span>Switch to Mobile App View</span>
          </button>
        </div>

        {/* 4. Editorial Footer */}
        <footer className="pt-8 border-t border-[#E9E8E8] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#524436]">
          <div className="flex items-center gap-2.5">
            <ResQrouteLogo size={28} />
            <span className="font-bold text-[#1A1C1C]">
              Res<span className="text-[#005EB2]">Q</span>route Platform
            </span>
            <span>• Open Disaster Resilience Standard</span>
          </div>
          <p className="text-center md:text-right font-medium">
            © Designed by Jayesh Yadav • 2026 SIH
          </p>
        </footer>
      </div>
    </section>
  );
};
