import React, { useState } from 'react';
import { INITIAL_SHELTER } from '../../data/platformData';

interface SafeHavenDossierProps {
  onBack: () => void;
  onGetDirections: () => void;
  onOpenHomeVolunteer: () => void;
}

export const SafeHavenDossier: React.FC<SafeHavenDossierProps> = ({
  onBack,
  onGetDirections,
  onOpenHomeVolunteer,
}) => {
  const [shelter, setShelter] = useState(INITIAL_SHELTER);
  const [hasConfirmedCondition, setHasConfirmedCondition] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleConfirmConditions = () => {
    setHasConfirmedCondition(true);
  };

  return (
    <div className="flex flex-col w-full px-4 pt-2 pb-28 gap-4 font-body">
      {/* Top Header */}
      <div className="flex items-center justify-between pt-1">
        <button
          onClick={onBack}
          className="w-10 h-10 -ml-1 flex items-center justify-center rounded-full text-[#1A1C1C] hover:bg-[#F4F3F3] transition-colors"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
        </button>
        <h1 className="text-base font-bold text-[#1A1C1C] tracking-tight">
          Safe Haven Dossier
        </h1>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="w-9 h-9 flex items-center justify-center rounded-full text-[#524436] hover:bg-[#F4F3F3]"
          >
            <span
              className="material-symbols-outlined text-[20px]"
              style={isBookmarked ? { fontVariationSettings: "'FILL' 1", color: '#005EB2' } : undefined}
            >
              bookmark
            </span>
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full text-[#524436] hover:bg-[#F4F3F3]">
            <span className="material-symbols-outlined text-[20px]">ios_share</span>
          </button>
        </div>
      </div>

      {/* 1. TOP STATUS BANNER & SHELTER SUMMARY */}
      <div className="bg-white rounded-3xl shadow-xs border border-[#E9E8E8] p-4 space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#D5E3FF] text-[#001B3B] text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#005EB2] animate-pulse" />
            <span>Updated just now</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-[#5F5E5E]">
            <span className="material-symbols-outlined text-sm text-[#005EB2]">wifi</span>
            <span>Live Network</span>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-[#1A1C1C] tracking-tight">
            {shelter.name}
          </h2>
          <p className="text-xs font-medium text-[#524436] mt-0.5">{shelter.sector}</p>
        </div>

        {/* Primary Status Badges */}
        <div className="flex flex-wrap gap-2 pt-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#005EB2]/10 text-[#005EB2] font-semibold text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#005EB2] ring-2 ring-[#005EB2]/30 animate-ping" />
            <span>Open & Accepting Evacuees</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F4F3F3] text-[#524436] font-medium text-xs">
            <span className="material-symbols-outlined text-sm text-[#005EB2]">directions_walk</span>
            <span>14 min walk (Ridge Road)</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] pt-1 text-[#5F5E5E] bg-[#F4F3F3] px-3 py-1.5 rounded-xl">
          <span className="inline-flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-[#005EB2]">verified_user</span>
            Verified Safe
          </span>
          <span className="inline-flex items-center gap-1 font-medium text-[#1A1C1C]">
            <span className="material-symbols-outlined text-[14px] text-[#855400]">terrain</span>
            On High Ground (Safe from Flood)
          </span>
        </div>
      </div>

      {/* 2. CAPACITY & OCCUPANCY VISUALIZATION */}
      <div className="bg-white rounded-3xl shadow-xs border border-[#E9E8E8] p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#FFB248]/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#855400] text-lg">pie_chart</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1A1C1C]">Space Available</h3>
              <p className="text-[11px] text-[#5F5E5E]">Current shelter count</p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#FFDDB7] text-[#2A1700]">
            {shelter.occupancyPct}% Full
          </span>
        </div>

        {/* Hero Numbers */}
        <div className="flex items-baseline justify-between pt-1">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold tracking-tight text-[#1A1C1C] font-mono">
                {shelter.occupiedCount}
              </span>
              <span className="text-base font-semibold text-[#5F5E5E]">
                / {shelter.totalCapacity} People
              </span>
            </div>
            <p className="text-xs text-[#855400] font-medium flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#855400] inline-block" />
              {shelter.availableSpaces} Spaces Available
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs text-[#5F5E5E] block">Arrivals</span>
            <span className="text-sm font-bold text-[#1A1C1C] font-mono">
              +{shelter.arrivalRatePerMin} people/min
            </span>
          </div>
        </div>

        {/* Segmented Progress Bar */}
        <div className="space-y-1.5">
          <div className="w-full bg-[#E9E8E8] h-3 rounded-full overflow-hidden flex relative">
            <div className="h-full bg-[#005EB2] transition-all duration-700" style={{ width: '75%' }} />
            <div className="h-full bg-[#FFB248] transition-all duration-700" style={{ width: '7%' }} />
            <div className="h-full bg-[#E9E8E8] flex-1" />
          </div>
          <div className="flex justify-between text-[10px] text-[#5F5E5E] font-mono">
            <span>0</span>
            <span className="text-[#005EB2] font-medium">Comfortable</span>
            <span className="text-[#855400] font-semibold">{shelter.occupancyPct}% Full</span>
            <span>{shelter.totalCapacity} (Max)</span>
          </div>
        </div>

        {/* Operational Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          <div className="bg-[#F4F3F3] p-2.5 rounded-xl text-center">
            <span className="text-[10px] text-[#5F5E5E] uppercase tracking-wider font-medium block">
              Arriving
            </span>
            <span className="text-xs font-bold text-[#1A1C1C] mt-0.5 block">
              +{shelter.arrivalRatePerMin} people/min
            </span>
          </div>
          <div className="bg-[#F4F3F3] p-2.5 rounded-xl text-center">
            <span className="text-[10px] text-[#5F5E5E] uppercase tracking-wider font-medium block">
              Time Left
            </span>
            <span className="text-xs font-bold text-[#855400] mt-0.5 block">
              Full in {shelter.expectedFullMins} mins
            </span>
          </div>
          <div className="bg-[#F4F3F3] p-2.5 rounded-xl text-center">
            <span className="text-[10px] text-[#5F5E5E] uppercase tracking-wider font-medium block">
              Accessible
            </span>
            <span className="text-xs font-bold text-[#005EB2] mt-0.5 block">
              {shelter.wheelchairBedsLeft} Wheelchair Beds
            </span>
          </div>
        </div>

        {/* Approaching Quorum Alert Warning */}
        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFDDB7]/40 text-[#653E00] text-xs">
          <span className="material-symbols-outlined text-base text-[#855400] shrink-0 mt-0.5">
            info
          </span>
          <div className="space-y-0.5">
            <span className="font-bold text-[#2A1700]">Almost Full</span>
            <p className="text-[11px] leading-relaxed">
              If this shelter fills up, you will be guided to{' '}
              <strong className="underline font-semibold">Ridge Road Annex</strong> automatically.
            </p>
          </div>
        </div>
      </div>

      {/* 3. SHELTER STATUS CARD */}
      <div className="bg-[#D5E3FF]/25 rounded-3xl p-4 shadow-xs border border-[#D5E3FF]/60 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#005EB2] flex items-center justify-center text-white shadow-xs">
              <span className="material-symbols-outlined text-base">check_circle</span>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1A1C1C] uppercase tracking-wider">
                Shelter Status
              </h4>
              <span className="text-[10px] text-[#005EB2] font-semibold">Safe & Ready</span>
            </div>
          </div>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#4597FE] text-[#002E5D]">
            Recommended
          </span>
        </div>

        <div className="space-y-2 text-xs text-[#1A1C1C]">
          <div className="flex items-start gap-2">
            <span className="material-symbols-outlined text-[#005EB2] text-sm shrink-0 mt-0.5">
              schedule
            </span>
            <span>Space available for at least <strong>3 more hours</strong>.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="material-symbols-outlined text-[#005EB2] text-sm shrink-0 mt-0.5">
              accessible_forward
            </span>
            <span><strong>Easy access for wheelchairs, seniors, and strollers</strong> (gentle ramp with handrails).</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="material-symbols-outlined text-[#005EB2] text-sm shrink-0 mt-0.5">
              bolt
            </span>
            <span>Emergency backup power is running. Doctors and medical help available.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="material-symbols-outlined text-[#005EB2] text-sm shrink-0 mt-0.5">
              wb_sunny
            </span>
            <span>The road to this shelter is <strong>100% dry</strong>.</span>
          </div>
        </div>
      </div>

      {/* 4. AVAILABLE FACILITIES GRID (12 items) */}
      <div className="bg-white rounded-3xl shadow-xs border border-[#E9E8E8] p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-[#1A1C1C]">Available Facilities</h3>
            <p className="text-[11px] text-[#5F5E5E]">All services are free and open</p>
          </div>
          <span className="material-symbols-outlined text-[#005EB2]">task_alt</span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          {shelter.facilities.map((fac) => (
            <div key={fac.id} className="p-2.5 rounded-xl bg-[#F4F3F3] flex items-start gap-2">
              <span className="material-symbols-outlined text-[#005EB2] text-base shrink-0">
                {fac.icon}
              </span>
              <div className="min-w-0">
                <span className="font-semibold text-[#1A1C1C] block truncate">{fac.name}</span>
                <span className="text-[10px] text-[#005EB2] font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#005EB2]" /> {fac.statusText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. LIVE GROUND UPDATES */}
      <div className="bg-white rounded-3xl shadow-xs border border-[#E9E8E8] p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-[#1A1C1C]">Ground Updates</h3>
            <p className="text-[11px] text-[#5F5E5E]">Latest reports from the shelter team</p>
          </div>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#005EB2] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#005EB2]" />
          </span>
        </div>

        <div className="space-y-3 pt-1">
          {shelter.groundUpdates.map((update, idx) => (
            <div key={idx} className="flex gap-3 text-xs">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-[#D5E3FF] text-[#001B3B] flex items-center justify-center shrink-0 font-bold text-[11px]">
                  ✓
                </div>
                {idx < shelter.groundUpdates.length - 1 && (
                  <div className="w-0.5 h-full bg-[#E3E2E2] my-1" />
                )}
              </div>
              <div className="pb-2 space-y-0.5">
                <span className="font-bold text-[#1A1C1C] font-mono">{update.timeAgo}</span>
                <p className="text-[#524436] leading-relaxed">{update.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. COMMUNITY TRUST SCORE */}
      <div className="bg-white rounded-3xl shadow-xs border border-[#E9E8E8] p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-[#1A1C1C]">Visitor Rating</h3>
            <p className="text-[11px] text-[#5F5E5E]">From families staying here</p>
          </div>
          <div className="px-3 py-1 rounded-full bg-[#4597FE]/20 text-[#002E5D] font-bold text-xs flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">verified</span>
            {shelter.visitorPositivePct}% Positive
          </div>
        </div>
        <p className="text-xs text-[#524436] leading-relaxed">
          94% of evacuees confirm conditions are clean, organized, and safe.
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          <span className="px-2.5 py-1 rounded-lg bg-[#F4F3F3] text-[#1A1C1C] text-xs font-medium">
            👍 Clean & Organized
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-[#F4F3F3] text-[#1A1C1C] text-xs font-medium">
            🍲 Fresh Food
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-[#F4F3F3] text-[#1A1C1C] text-xs font-medium">
            🩺 Doctors Here
          </span>
        </div>
        <button
          onClick={handleConfirmConditions}
          disabled={hasConfirmedCondition}
          className={`w-full py-2.5 px-3 rounded-xl transition-colors text-xs font-semibold flex items-center justify-center gap-2 ${
            hasConfirmedCondition
              ? 'bg-[#D5E3FF] text-[#005EB2]'
              : 'bg-[#EFEEED] hover:bg-[#E9E8E8] text-[#1A1C1C]'
          }`}
        >
          <span className="material-symbols-outlined text-base text-[#005EB2]">rate_review</span>
          <span>{hasConfirmedCondition ? 'Feedback Sent • Thank You!' : 'Confirm Shelter Conditions'}</span>
        </button>
      </div>

      {/* 7. VOLUNTEER SAFE SPACES */}
      <div className="space-y-3">
        <div className="px-1">
          <h3 className="text-sm font-bold text-[#1A1C1C]">Volunteer Safe Spaces</h3>
          <p className="text-[11px] text-[#5F5E5E]">
            Local homes welcoming neighbors during high water
          </p>
        </div>

        {shelter.volunteerHomes.map((home, idx) => (
          <div key={idx} className="bg-white rounded-3xl shadow-xs border border-[#E9E8E8] p-4 space-y-2.5">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-sm text-[#1A1C1C]">{home.name}</h4>
                  <span className="material-symbols-outlined text-[#005EB2] text-sm">verified</span>
                </div>
                <p className="text-xs text-[#5F5E5E]">{home.distance} • {home.spots} spots open</p>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-[#D5E3FF] text-[#001B3B] text-[11px] font-bold">
                {home.spots} Spots Open
              </span>
            </div>
            <div className="flex flex-wrap gap-1 text-[11px]">
              {home.features.map((f, i) => (
                <span key={i} className="px-2 py-0.5 rounded-md bg-[#F4F3F3] text-[#524436] font-medium">
                  {f}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-1">
              <div className="text-[11px] text-[#005EB2] font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                Verified Host
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 rounded-lg bg-[#EFEEED] text-xs font-medium text-[#1A1C1C]">
                  Call
                </button>
                <button
                  onClick={onGetDirections}
                  className="px-3 py-1.5 rounded-lg bg-[#005EB2] text-white text-xs font-semibold"
                >
                  Directions
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Register home card */}
        <div className="bg-[#FFDDB7]/30 rounded-3xl p-4 shadow-xs border border-[#FFB248]/30 space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFB248] text-[#704600] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              <span className="material-symbols-outlined text-xl">home</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1A1C1C]">Open Your Home</h3>
              <p className="text-xs text-[#524436] mt-0.5 leading-relaxed">
                Have room on high ground? Help shelter neighbors during flash floods. Turn off anytime.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenHomeVolunteer}
            className="w-full py-2.5 rounded-xl bg-[#FFB248] text-[#2A1700] font-bold text-xs hover:opacity-90 transition-all shadow-xs flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-base">add_home</span>
            <span>Register as Volunteer Safe Space</span>
          </button>
        </div>
      </div>

      {/* 8. STICKY BOTTOM ACTIONS */}
      <div className="fixed bottom-0 inset-x-0 z-30 bg-white/90 backdrop-blur-xl border-t border-[#E9E8E8] pb-safe pt-2 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <div className="max-w-md mx-auto flex flex-col gap-2">
          <button
            onClick={onGetDirections}
            className="w-full h-14 bg-[#005EB2] text-white font-bold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-md hover:bg-[#005EB2]/95 active:scale-[0.98] transition-all"
          >
            <span className="material-symbols-outlined text-xl">navigation</span>
            <span>Get Directions ({shelter.walkTimeMins} min walk)</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
