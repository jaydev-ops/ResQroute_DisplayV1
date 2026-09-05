import React, { useState } from 'react';
import { IPhoneDeviceFrame } from '../mobile/IPhoneDeviceFrame';
import { PreparednessHub } from '../mobile/PreparednessHub';
import { EvacuationRadar } from '../mobile/EvacuationRadar';
import { RouteComparisonModal } from '../mobile/RouteComparisonModal';
import { LiveGuidanceHUD } from '../mobile/LiveGuidanceHUD';
import { SafeHavenDossier } from '../mobile/SafeHavenDossier';
import { CitizenVerificationDossier } from '../mobile/CitizenVerificationDossier';
import { SmsGatewayView } from '../mobile/SmsGatewayView';
import { AuthorityIncidentModeration } from '../mobile/AuthorityIncidentModeration';

type ScreenId =
  | 'radar'
  | 'preparedness'
  | 'comparison'
  | 'guidance'
  | 'shelter'
  | 'citizen'
  | 'sms'
  | 'authority';

interface ScreenMeta {
  id: ScreenId;
  title: string;
  category: string;
  badge: string;
  description: string;
  higNotes: string;
}

const SCREENS: ScreenMeta[] = [
  {
    id: 'radar',
    title: 'Emergency Warning & Safe Map',
    category: 'Immediate Safety',
    badge: 'Urgent Alert',
    description:
      'Shows you immediately if your area is at risk, highlights flooded streets, and gives you one tap to start walking along safe, dry high ground.',
    higNotes:
      'High-contrast red banner (#BA1A1A) with WCAG AAA legibility, prominent 56px primary touch target, and real-time elevation gain callout (+32m).',
  },
  {
    id: 'comparison',
    title: "Route Comparison: 'Why this route?'",
    category: 'Route Safety',
    badge: 'Clear Choice',
    description:
      'Shows you side-by-side why the familiar, short path is dangerous with rising floodwater, and why following the ridge path keeps you and your family safe.',
    higNotes:
      'Visual terrain SVG cross-section eliminating route ambiguity. Direct human-readable safety metrics replacing opaque turn lines.',
  },
  {
    id: 'guidance',
    title: 'Live Walking Directions',
    category: 'On the Move',
    badge: 'Live Guidance',
    description:
      'Simple, step-by-step walking directions that guide you around flooded streets in real time until you safely check into the nearest shelter.',
    higNotes:
      'SF Pro display typography with tabular numbers, high-contrast chevron guidance on elevated blue corridor, and persistent emergency shelter quota tracker.',
  },
  {
    id: 'preparedness',
    title: 'Family Preparedness & Go-Bag',
    category: 'Before the Storm',
    badge: 'Ready & Safe',
    description:
      'Helps you prepare before heavy rains begin. Track local weather, check off emergency essentials in your Go-Bag, and practice your family evacuation plan.',
    higNotes:
      'Apple Health-inspired circular progress ring, calm high-contrast neutral cards, and interactive item state persistence.',
  },
  {
    id: 'shelter',
    title: 'Safe Shelters & Available Beds',
    category: 'Finding Shelter',
    badge: 'Live Space',
    description:
      'Find open, verified relief centers nearby. See live counts of open beds, check for clean water and medical care, and confirm wheelchair accessibility before heading out.',
    higNotes:
      'Segmented occupancy bar preventing thundering herd surges, ADA step-free wheelchair badges, and community trust rating.',
  },
  {
    id: 'citizen',
    title: 'Community Hazard Reports',
    category: 'Neighbor Updates',
    badge: 'Verified',
    description:
      'See photos and reports from people nearby. Neighbors confirm where roads are blocked or flooded so everyone in the community can steer clear of danger.',
    higNotes:
      'Circular consensus meter, real ground photos with verified water depth overlay, and safe detour card.',
  },
  {
    id: 'sms',
    title: 'Offline SMS & Compass Lifeline',
    category: 'No Internet Needed',
    badge: 'Always Works',
    description:
      'Works even when mobile data and Wi-Fi stop working. Simple text messages and a built-in compass guide you straight to safety with zero internet connection.',
    higNotes:
      'Interactive magnetic compass dial (024° NNE bearing), 160-character SMS buffer optimization, and offline topo tile caching.',
  },
  {
    id: 'authority',
    title: 'Disaster Team Command Center',
    category: 'Emergency Teams',
    badge: 'Authority View',
    description:
      'A clear dashboard for search-and-rescue teams and local authorities to monitor flood levels, send help to people in need, and broadcast urgent safety alerts.',
    higNotes:
      'Dense multi-source telemetry validation, Synthetic Aperture Radar (SAR) correlation, and instant district broadcast triggers.',
  },
];

export const InteractiveScreenGallery: React.FC = () => {
  const [selectedScreenId, setSelectedScreenId] = useState<ScreenId>('radar');

  const selectedScreen = SCREENS.find((s) => s.id === selectedScreenId) || SCREENS[0];

  return (
    <section id="screens" className="w-full py-16 lg:py-24 bg-white border-t border-[#E9E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5E3FF] text-[#001B3B] text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px] text-[#005EB2]">phone_iphone</span>
            <span>Mobile Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1C1C] tracking-tight">
            Explore the Mobile App
          </h2>
          <p className="text-base text-[#524436] leading-relaxed">
            Designed to keep you calm, informed, and safe when every minute counts. Tap any screen below to see how it protects you in an emergency.
          </p>
        </div>

        {/* Screen Catalog Tabs */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {SCREENS.map((screen) => {
            const isSelected = screen.id === selectedScreenId;
            return (
              <button
                key={screen.id}
                onClick={() => setSelectedScreenId(screen.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-[#005EB2] text-white border-transparent shadow-md scale-102'
                    : 'bg-[#F4F3F3] text-[#524436] border-[#E9E8E8] hover:bg-[#EFEEED]'
                }`}
              >
                <span>{screen.title}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-[#E9E8E8] text-[#1A1C1C]'
                  }`}
                >
                  {screen.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Dual Stage: Phone Hardware on Left, HIG Specs & Interactive Flow on Right */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Hardware Container Column */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="p-4 bg-[#F4F3F3] rounded-3xl border border-[#E9E8E8] shadow-inner">
              <IPhoneDeviceFrame>
                <div className="w-full h-full overflow-y-auto no-scrollbar">
                  {selectedScreenId === 'radar' && (
                    <EvacuationRadar
                      onStartEvacuation={() => setSelectedScreenId('guidance')}
                      onRequestRescue={() => setSelectedScreenId('sms')}
                      onViewRouteDetails={() => setSelectedScreenId('comparison')}
                      onViewShelterDetails={() => setSelectedScreenId('shelter')}
                    />
                  )}
                  {selectedScreenId === 'comparison' && (
                    <RouteComparisonModal
                      onBack={() => setSelectedScreenId('radar')}
                      onConfirmSafestRoute={() => setSelectedScreenId('guidance')}
                    />
                  )}
                  {selectedScreenId === 'guidance' && (
                    <LiveGuidanceHUD
                      onBack={() => setSelectedScreenId('radar')}
                      onEndRoute={() => setSelectedScreenId('radar')}
                      onShelterCheckIn={() => setSelectedScreenId('shelter')}
                    />
                  )}
                  {selectedScreenId === 'preparedness' && (
                    <PreparednessHub
                      operatingMode="peacetime"
                      onToggleMode={() => setSelectedScreenId('radar')}
                      onNavigateToRoute={() => setSelectedScreenId('comparison')}
                      onNavigateToSOS={() => setSelectedScreenId('sms')}
                      onNavigateToShelter={() => setSelectedScreenId('shelter')}
                      onNavigateToSMS={() => setSelectedScreenId('sms')}
                    />
                  )}
                  {selectedScreenId === 'shelter' && (
                    <SafeHavenDossier
                      onBack={() => setSelectedScreenId('radar')}
                      onGetDirections={() => setSelectedScreenId('guidance')}
                      onOpenHomeVolunteer={() => alert('Host registration opened.')}
                    />
                  )}
                  {selectedScreenId === 'citizen' && (
                    <CitizenVerificationDossier
                      onBack={() => setSelectedScreenId('radar')}
                      onSelectDetour={() => setSelectedScreenId('comparison')}
                    />
                  )}
                  {selectedScreenId === 'sms' && (
                    <SmsGatewayView
                      onBack={() => setSelectedScreenId('radar')}
                      onFollowCompass={() => setSelectedScreenId('radar')}
                    />
                  )}
                  {selectedScreenId === 'authority' && (
                    <AuthorityIncidentModeration
                      onBack={() => setSelectedScreenId('radar')}
                      onBroadcastApproved={() => setSelectedScreenId('radar')}
                    />
                  )}
                </div>
              </IPhoneDeviceFrame>
            </div>
          </div>

          {/* Screen Specification & Interaction Column */}
          <div className="lg:col-span-6 flex flex-col space-y-6 lg:pl-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF9F9] border border-[#E9E8E8] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#005EB2]">
                  {selectedScreen.category}
                </span>
                <span className="text-xs font-mono font-bold text-[#855400] bg-[#FFDDB7] px-2.5 py-1 rounded-full">
                  {selectedScreen.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#1A1C1C] tracking-tight">
                {selectedScreen.title}
              </h3>

              <p className="text-sm text-[#524436] leading-relaxed">
                {selectedScreen.description}
              </p>
            </div>

            {/* Quick Navigation Shortcuts */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#524436]">
                Jump to specific scenario:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => setSelectedScreenId('radar')}
                  className="p-3 rounded-2xl bg-white border border-[#E9E8E8] hover:border-[#005EB2] text-left font-semibold flex items-center justify-between transition-colors"
                >
                  <span>1. Life-Threat Active</span>
                  <span className="material-symbols-outlined text-[16px] text-[#005EB2]">chevron_right</span>
                </button>
                <button
                  onClick={() => setSelectedScreenId('comparison')}
                  className="p-3 rounded-2xl bg-white border border-[#E9E8E8] hover:border-[#005EB2] text-left font-semibold flex items-center justify-between transition-colors"
                >
                  <span>2. Why this route?</span>
                  <span className="material-symbols-outlined text-[16px] text-[#005EB2]">chevron_right</span>
                </button>
                <button
                  onClick={() => setSelectedScreenId('guidance')}
                  className="p-3 rounded-2xl bg-white border border-[#E9E8E8] hover:border-[#005EB2] text-left font-semibold flex items-center justify-between transition-colors"
                >
                  <span>3. High-Ground HUD</span>
                  <span className="material-symbols-outlined text-[16px] text-[#005EB2]">chevron_right</span>
                </button>
                <button
                  onClick={() => setSelectedScreenId('sms')}
                  className="p-3 rounded-2xl bg-white border border-[#E9E8E8] hover:border-[#005EB2] text-left font-semibold flex items-center justify-between transition-colors"
                >
                  <span>4. 2G SMS Compass</span>
                  <span className="material-symbols-outlined text-[16px] text-[#005EB2]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
