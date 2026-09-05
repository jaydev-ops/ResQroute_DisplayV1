import React, { useState } from 'react';
import { INITIAL_SHELTER } from '../../data/platformData';
import { ResQrouteLogo } from '../common/ResQrouteLogo';

interface LiveGuidanceHUDProps {
  onBack: () => void;
  onEndRoute: () => void;
  onShelterCheckIn: () => void;
}

export const LiveGuidanceHUD: React.FC<LiveGuidanceHUDProps> = ({
  onBack,
  onEndRoute,
  onShelterCheckIn,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [detourAccepted, setDetourAccepted] = useState(false);
  const [checkedIn, setCheckedIn] = useState(false);

  const handleCheckIn = () => {
    setCheckedIn(true);
    onShelterCheckIn();
  };

  return (
    <div className="relative w-full h-[calc(100vh-56px)] max-w-md mx-auto flex flex-col overflow-hidden select-none bg-[#E8ECEF]">
      {/* Top Header */}
      <div className="relative z-30 px-3 pt-2 pb-1 bg-white/85 backdrop-blur-xl border-b border-[#E9E8E8] flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <button
            onClick={onBack}
            className="w-9 h-9 flex items-center justify-center rounded-full text-[#005EB2] hover:bg-[#F4F3F3] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
          </button>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <ResQrouteLogo size={15} />
              <span className="text-[10px] font-bold tracking-wide uppercase text-[#005EB2]">
                ResQroute Live
              </span>
            </div>
            <h1 className="text-[15px] font-bold text-[#1A1C1C] tracking-tight leading-none">
              Live Guidance
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="w-9 h-9 flex items-center justify-center rounded-full text-[#524436] hover:text-[#1A1C1C]"
          >
            <span className="material-symbols-outlined text-[20px]">
              {isMuted ? 'volume_off' : 'volume_up'}
            </span>
          </button>
          <div className="w-7 h-7 rounded-full bg-[#855400] text-white flex items-center justify-center text-xs font-bold">
            D
          </div>
        </div>
      </div>

      {/* SVG Map Background Canvas */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <svg
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 390 680"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="390" height="680" fill="#E8EDF2" />
          {/* Water Inundation Polygon */}
          <path
            d="M-20 420 C60 390, 180 430, 260 400 C320 380, 360 430, 420 410 L420 680 L-20 680 Z"
            fill="#D9E2EC"
            fillOpacity="0.6"
          />
          <path
            d="M160 80 C240 120, 290 190, 360 210 C390 220, 410 210, 420 230 L420 390 C360 400, 300 370, 240 340 C190 315, 170 260, 180 210 Z"
            fill="#BA1A1A"
            fillOpacity="0.12"
          />

          {/* Submerged Canal Rd (Red Dashed Path) */}
          <path
            d="M170 380 L250 290 L330 250"
            stroke="#BA1A1A"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.75"
          />
          <path
            d="M170 380 L250 290 L330 250"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeDasharray="6 8"
            strokeLinecap="round"
          />

          {/* Elevated Ridge Safe Path (Solid Royal Blue Line with Arrows) */}
          <path
            d="M70 650 L170 380 L125 190 L95 60"
            stroke="#005EB2"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M70 650 L170 380 L125 190 L95 60"
            stroke="#4597FE"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M70 650 L170 380 L125 190 L95 60"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeDasharray="14 12"
            strokeLinecap="round"
          />

          {/* GPS Direction Arrows */}
          <g stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M160 360 L166 348 L174 358" />
            <path d="M138 245 L141 233 L149 240" />
            <path d="M112 120 L115 108 L123 115" />
          </g>

          {/* User Location Pulsing Chevron */}
          <g transform="translate(170, 380)">
            <circle cx="0" cy="0" r="32" fill="#005EB2" fillOpacity="0.18" className="animate-ping" />
            <circle cx="0" cy="0" r="20" fill="#D5E3FF" />
            <circle cx="0" cy="0" r="14" fill="#005EB2" />
            <path d="M0 -8 L6 6 L0 4 L-6 6 Z" fill="#FFFFFF" transform="rotate(-35)" />
          </g>

          {/* Shelter Goal Pin */}
          <g transform="translate(95, 60)">
            <circle cx="0" cy="0" r="16" fill="#855400" />
            <circle cx="0" cy="0" r="8" fill="#FFFFFF" />
            <path d="M-4 0 L4 0 M0 -4 L0 4" stroke="#855400" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      {/* Floating Map Labels & Controls */}
      <div className="relative z-10 px-3.5 pt-1.5 flex flex-col gap-1.5 pointer-events-auto">
        {/* Turn-by-Turn Instruction Banner (Warm Amber #FFB248) */}
        <div className="w-full bg-[#FFB248] text-[#2A1700] rounded-2xl p-3 shadow-lg flex items-center justify-between gap-2.5 border border-[#855400]/20">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-10 h-10 min-w-[40px] rounded-xl bg-black/10 flex items-center justify-center text-[#2A1700] shadow-inner">
              <span
                className="material-symbols-outlined text-[24px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                turn_left
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase leading-none">
                <span>In 200 m</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2A1700]/60" />
                <span className="bg-black/10 px-1.5 py-0.5 rounded text-[10px] font-bold">
                  Elevated Safe Path
                </span>
              </div>
              <h2 className="text-[15px] font-bold tracking-tight truncate leading-tight text-[#2A1700] mt-0.5">
                Turn Left onto Ridge Crest Way
              </h2>
              <p className="text-[11px] text-[#653E00] truncate font-medium">
                High-ground route clear of rising water
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="w-8 h-8 min-w-[32px] rounded-full bg-black/10 flex items-center justify-center active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[18px]">
              {isMuted ? 'volume_off' : 'volume_up'}
            </span>
          </button>
        </div>

        {/* Dynamic Reroute Alert Prompt */}
        {!detourAccepted && (
          <div className="w-full bg-white text-[#1A1C1C] rounded-xl px-3 py-2 shadow-md flex items-center justify-between gap-2 border border-[#FFB248]/60 animate-fadeIn">
            <div className="flex items-center gap-1.5 min-w-0">
              <span
                className="material-symbols-outlined text-[18px] text-[#855400] flex-shrink-0"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                warning
              </span>
              <p className="text-[12px] font-bold truncate">Flooding Ahead on Canal Rd</p>
              <span className="text-[10px] font-bold text-[#855400] bg-[#FFB248]/25 px-1.5 py-0.5 rounded-full">
                +3 min
              </span>
            </div>
            <button
              onClick={() => setDetourAccepted(true)}
              className="h-7 px-3 bg-[#005EB2] text-white rounded-lg font-bold text-[11px] shadow-xs flex items-center justify-center gap-1 active:scale-95 transition-transform flex-shrink-0"
            >
              <span className="material-symbols-outlined text-[14px]">check_circle</span>
              <span>Detour</span>
            </button>
          </div>
        )}
      </div>

      {/* Floating HUD Badges on Map */}
      <div className="relative z-10 px-3.5 my-auto pointer-events-none flex flex-col justify-between h-48">
        <div className="flex justify-between items-start pointer-events-auto">
          <div className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-md flex items-center gap-2 border border-[#E9E8E8]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#005EB2] inline-block animate-pulse" />
            <span className="text-[11px] font-bold text-[#005EB2] whitespace-nowrap">
              Ridge Way • Elevated Safe Path
            </span>
          </div>

          <div className="flex items-center gap-2 bg-[#BA1A1A] text-white px-3 py-1 rounded-xl shadow-lg">
            <span
              className="material-symbols-outlined text-[16px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              flood
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider leading-none">
                Flooding Ahead
              </span>
              <span className="text-[11px] font-medium leading-tight">Canal Rd Submerged</span>
            </div>
          </div>
        </div>

        {/* Speed HUD & Floating Action FABs */}
        <div className="flex justify-between items-end pointer-events-auto">
          <div className="bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg flex items-center gap-2.5 border border-[#E9E8E8]">
            <div className="flex flex-col items-center border-r border-[#E9E8E8] pr-2.5">
              <span className="text-[18px] font-bold leading-none text-[#1A1C1C]">38</span>
              <span className="text-[10px] font-bold text-[#5F5E5E] uppercase">km/h</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-[#005EB2] uppercase leading-none tracking-wide">
                Safe Ground
              </span>
              <span className="text-[12px] font-bold text-[#1A1C1C] leading-tight mt-0.5">
                NNE 24°
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button
              aria-label="Center Location"
              className="w-10 h-10 rounded-full bg-white text-[#005EB2] shadow-lg flex items-center justify-center active:scale-95 transition-transform border border-[#E9E8E8]"
            >
              <span className="material-symbols-outlined text-[20px]">my_location</span>
            </button>
            <button
              aria-label="Report Danger"
              className="w-10 h-10 rounded-full bg-[#BA1A1A] text-white shadow-lg flex items-center justify-center active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-[20px]">warning</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Navigation Panel */}
      <div className="relative z-20 w-full px-3.5 pb-3 pointer-events-auto">
        <div className="w-full bg-white rounded-3xl p-4 shadow-2xl flex flex-col gap-3 border border-[#E9E8E8]">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="text-[32px] font-black text-[#005EB2] tracking-tight leading-none font-mono">
                9
              </span>
              <span className="text-[14px] font-bold text-[#005EB2] uppercase">min</span>
            </div>
            <div className="flex items-center gap-2 text-[14px] font-bold text-[#1A1C1C]">
              <span>2.6 km</span>
              <span className="text-[#5F5E5E]">•</span>
              <span>ETA 09:50</span>
            </div>
            <div className="px-2.5 py-1 rounded-full bg-[#D5E3FF] text-[#001B3B] text-[11px] font-bold uppercase tracking-wider">
              High Ground
            </div>
          </div>

          {/* Safe Haven Destination Card */}
          <div className="w-full bg-[#F4F3F3] rounded-2xl p-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-[#FFDDB7] flex items-center justify-center text-[#2A1700] flex-shrink-0">
                <span className="material-symbols-outlined text-[18px]">night_shelter</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#855400]">
                  Safe Haven Destination
                </span>
                <span className="text-[13px] font-bold text-[#1A1C1C] truncate">
                  {INITIAL_SHELTER.name} • Gate 2
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-[#855400] whitespace-nowrap bg-[#FFDDB7]/60 px-2 py-1 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#855400] inline-block" />
              <span>55 beds ready</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2.5 pt-0.5">
            <button
              onClick={onEndRoute}
              className="h-12 rounded-xl bg-[#E9E8E8] hover:bg-[#E3E2E2] text-[#1A1C1C] font-bold text-[13px] flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[18px] text-[#BA1A1A]">close</span>
              <span>End Route</span>
            </button>
            <button
              onClick={handleCheckIn}
              className={`h-12 rounded-xl text-white font-bold text-[13px] flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all ${
                checkedIn
                  ? 'bg-emerald-600'
                  : 'bg-[#855400] hover:bg-[#704600]'
              }`}
            >
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <span>{checkedIn ? 'Checked In ✓' : 'Shelter Check-In'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
