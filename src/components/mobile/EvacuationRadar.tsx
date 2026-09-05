import React, { useState } from 'react';
import { INITIAL_SHELTER } from '../../data/platformData';

interface EvacuationRadarProps {
  onStartEvacuation: () => void;
  onRequestRescue: () => void;
  onViewRouteDetails: () => void;
  onViewShelterDetails: () => void;
}

export const EvacuationRadar: React.FC<EvacuationRadarProps> = ({
  onStartEvacuation,
  onRequestRescue,
  onViewRouteDetails,
  onViewShelterDetails,
}) => {
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const [selectedPin, setSelectedPin] = useState<'you' | 'hazard' | 'shelter'>('shelter');

  return (
    <div className="flex flex-col w-full px-4 pt-2 pb-24 gap-3.5">
      {/* 1. CORE QUESTION: 'AM I SAFE?' - High-visibility life threat banner */}
      <div className="w-full rounded-2xl bg-[#BA1A1A] text-white flex flex-col shadow-lg border-2 border-white/20 overflow-hidden">
        <div className="p-4 flex items-start gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-md">
            <span
              className="material-symbols-outlined text-[30px] text-[#BA1A1A]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              warning
            </span>
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/30 border border-white/30 text-[10px] font-extrabold uppercase tracking-wide text-white">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-ping inline-block" />
                LIFE THREAT ACTIVE
              </span>
              <span className="text-[10px] font-bold text-white/80 uppercase tracking-tight">
                Priority 1
              </span>
            </div>
            <h2 className="text-[17px] font-black uppercase tracking-tight text-white leading-tight drop-shadow-xs">
              FLASH FLOOD EMERGENCY
            </h2>
            <p className="text-xs font-semibold text-white/95 mt-1 leading-snug">
              Sector 17 Low Basin • Immediate High-Ground Evacuation Mandated
            </p>
          </div>
        </div>
        <div className="bg-black/25 px-4 py-2 flex items-center gap-2 border-t border-white/10 text-white/90 text-[11px] font-medium">
          <span className="material-symbols-outlined text-[15px] text-white/80">verified_user</span>
          <span>Municipal Disaster Authority (NDRF) • Issued 1 min ago</span>
        </div>
      </div>

      {/* 2. EXPANDED MAP HERO: Topological micro-GIS corridor map */}
      <div className="w-full rounded-2xl bg-white p-3 shadow-sm border border-[#E9E8E8] flex flex-col gap-3">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#005EB2]/10 flex items-center justify-center text-[#005EB2]">
              <span className="material-symbols-outlined text-[18px]">alt_route</span>
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#1A1C1C] leading-none">
                Recommended Escape Ridge
              </h2>
              <p className="text-[11px] text-[#524436] font-medium mt-0.5">
                Dry spine corridor (+32m elevation)
              </p>
            </div>
          </div>
          <button
            onClick={onViewRouteDetails}
            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#005EB2] bg-[#D5E3FF]/60 hover:bg-[#D5E3FF] px-2.5 py-1 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined text-[14px]">verified</span> Clear & Dry
          </button>
        </div>

        {/* Micro-GIS Topological Vector Map Canvas */}
        <div
          className={`relative w-full ${
            isMapExpanded ? 'h-[500px] sm:h-[540px]' : 'h-56'
          } rounded-xl bg-[#F4F3F3] overflow-hidden flex items-center justify-center border border-[#D7C3B0]/40 transition-all duration-300 shadow-sm`}
        >
          <svg
            className="w-full h-full cursor-pointer"
            viewBox={isMapExpanded ? '0 0 340 420' : '0 0 340 220'}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="floodGradWide" x1="0" y1="130" x2="160" y2="220" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFDAD6" stopOpacity="0.95" />
                <stop stopColor="#BA1A1A" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="floodGradExp" x1="0" y1="260" x2="200" y2="420" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFDAD6" stopOpacity="0.95" />
                <stop stopColor="#BA1A1A" stopOpacity="0.35" />
              </linearGradient>
            </defs>

            {!isMapExpanded ? (
              /* COLLAPSED VIEW (0 0 340 220) */
              <>
                {/* Topographic Elevation Contours */}
                <path d="M -10 180 C 80 160 180 120 350 70" stroke="#D7C3B0" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                <path d="M -10 140 C 90 120 190 80 350 40" stroke="#D7C3B0" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                <path d="M -10 100 C 100 80 200 50 350 20" stroke="#D7C3B0" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

                {/* Active Flood Basin Threat Polygon */}
                <path d="M 0 120 Q 90 135 150 220 L 0 220 Z" fill="url(#floodGradWide)" />
                <path d="M 0 120 Q 90 135 150 220" stroke="#BA1A1A" strokeWidth="2" strokeDasharray="4 4" opacity="0.7" />
                <text x="16" y="196" fill="#BA1A1A" fontFamily="Inter" fontSize="10" fontWeight="800" letterSpacing="0.05em">
                  FLOOD BASIN (AVOID)
                </text>

                {/* Safe Elevated Ridge Route Buffer */}
                <path d="M 40 185 C 90 150 160 95 285 45" stroke="#FFDDB7" strokeWidth="26" strokeLinecap="round" opacity="0.7" />
                <path d="M 40 185 C 90 150 160 95 285 45" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" opacity="0.95" />

                {/* Solid Safe High-Ground Route */}
                <path d="M 40 185 C 90 150 160 95 285 45" stroke="#005EB2" strokeWidth="6" strokeLinecap="round" />
                <path d="M 40 185 C 90 150 160 95 285 45" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" />

                {/* Canal Road Blocked Indicator */}
                <g transform="translate(85, 172)" onClick={(e) => { e.stopPropagation(); setSelectedPin('hazard'); }}>
                  <circle cx="0" cy="0" r="9" fill="#BA1A1A" />
                  <path d="M -4 0 L 4 0" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                </g>
                <text x="98" y="176" fill="#BA1A1A" fontFamily="Inter" fontSize="9" fontWeight="700">
                  Canal Rd Cut Off
                </text>

                {/* Resident Starting Point (YOU) */}
                <g transform="translate(40, 185)" onClick={(e) => { e.stopPropagation(); setSelectedPin('you'); }}>
                  <circle cx="0" cy="0" r="16" fill="#005EB2" opacity="0.25" className="animate-ping" />
                  <circle cx="0" cy="0" r="8" fill="#FFFFFF" />
                  <circle cx="0" cy="0" r="5" fill="#005EB2" />
                </g>
                <rect x="18" y="136" width="52" height="20" rx="5" fill="#005EB2" />
                <text x="44" y="150" fill="#FFFFFF" fontFamily="Inter" fontSize="9" fontWeight="800" textAnchor="middle">
                  YOU
                </text>

                {/* Safe Destination Marker */}
                <g transform="translate(285, 45)" onClick={(e) => { e.stopPropagation(); setSelectedPin('shelter'); }}>
                  <circle cx="0" cy="0" r="16" fill="#FFB248" opacity="0.4" className="animate-ping" />
                  <circle cx="0" cy="0" r="11" fill="#005EB2" />
                  <path d="M -4 0 L -1 3 L 5 -3" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <rect x="206" y="14" width="126" height="22" rx="6" fill="#002E5D" />
                <text x="269" y="29" fill="#FFFFFF" fontFamily="Inter" fontSize="9.5" fontWeight="800" textAnchor="middle">
                  ST. JUDE RELIEF (+32m)
                </text>
              </>
            ) : (
              /* EXPANDED FULL-SCREEN TOPOGRAPHIC VIEW (0 0 340 420) */
              <>
                {/* Elevation Contours Grid */}
                <path d="M -10 370 C 80 340 180 280 350 200" stroke="#D7C3B0" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                <path d="M -10 310 C 90 270 190 210 350 140" stroke="#D7C3B0" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                <path d="M -10 240 C 90 200 190 150 350 90" stroke="#D7C3B0" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                <path d="M -10 170 C 90 130 190 90 350 40" stroke="#D7C3B0" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

                {/* Elevation Contour Labels */}
                <text x="300" y="215" fill="#855400" fontFamily="Inter" fontSize="8" fontWeight="600">+12m</text>
                <text x="300" y="155" fill="#855400" fontFamily="Inter" fontSize="8" fontWeight="600">+20m</text>
                <text x="300" y="105" fill="#855400" fontFamily="Inter" fontSize="8" fontWeight="600">+28m</text>

                {/* Active Expanded Flood Basin Threat Polygon */}
                <path d="M 0 240 Q 110 260 170 420 L 0 420 Z" fill="url(#floodGradExp)" />
                <path d="M 0 240 Q 110 260 170 420" stroke="#BA1A1A" strokeWidth="2.5" strokeDasharray="5 5" opacity="0.8" />
                <rect x="14" y="380" width="130" height="24" rx="6" fill="#BA1A1A" />
                <text x="79" y="396" fill="#FFFFFF" fontFamily="Inter" fontSize="9.5" fontWeight="800" textAnchor="middle">
                  DANGER: FLOOD BASIN
                </text>

                {/* Sensor marker in flood zone */}
                <g transform="translate(45, 290)">
                  <circle cx="0" cy="0" r="7" fill="#BA1A1A" opacity="0.9" />
                  <circle cx="0" cy="0" r="14" stroke="#BA1A1A" strokeWidth="1.5" opacity="0.4" className="animate-ping" />
                  <text x="12" y="4" fill="#BA1A1A" fontFamily="Inter" fontSize="8" fontWeight="700">
                    Water: 48cm Deep
                  </text>
                </g>

                {/* Impassable Canal Road cut-off */}
                <g transform="translate(100, 310)" onClick={(e) => { e.stopPropagation(); setSelectedPin('hazard'); }}>
                  <circle cx="0" cy="0" r="11" fill="#BA1A1A" />
                  <path d="M -5 0 L 5 0" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                  <text x="16" y="4" fill="#BA1A1A" fontFamily="Inter" fontSize="9" fontWeight="700">
                    Canal Road Submerged
                  </text>
                </g>

                {/* Safe Elevated Ridge Corridor Buffer */}
                <path d="M 50 350 C 90 300 130 250 170 190 C 200 145 230 110 265 60" stroke="#FFDDB7" strokeWidth="32" strokeLinecap="round" opacity="0.75" />
                <path d="M 50 350 C 90 300 130 250 170 190 C 200 145 230 110 265 60" stroke="#FFFFFF" strokeWidth="20" strokeLinecap="round" opacity="0.95" />

                {/* Solid High Ground Corridor Path */}
                <path d="M 50 350 C 90 300 130 250 170 190 C 200 145 230 110 265 60" stroke="#005EB2" strokeWidth="7" strokeLinecap="round" />
                <path d="M 50 350 C 90 300 130 250 170 190 C 200 145 230 110 265 60" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="5 7" strokeLinecap="round" />

                {/* Intermediate Safety Checkpoint */}
                <g transform="translate(150, 215)">
                  <circle cx="0" cy="0" r="8" fill="#005EB2" />
                  <text x="0" y="3" fill="#FFFFFF" fontFamily="Inter" fontSize="7" fontWeight="800" textAnchor="middle">1</text>
                  <rect x="12" y="-10" width="85" height="18" rx="4" fill="white" stroke="#005EB2" strokeWidth="1" />
                  <text x="54" y="2" fill="#005EB2" fontFamily="Inter" fontSize="8" fontWeight="700" textAnchor="middle">
                    Ridge Spine (+22m)
                  </text>
                </g>

                {/* Resident Starting Point (YOU) */}
                <g transform="translate(50, 350)" onClick={(e) => { e.stopPropagation(); setSelectedPin('you'); }}>
                  <circle cx="0" cy="0" r="18" fill="#005EB2" opacity="0.25" className="animate-ping" />
                  <circle cx="0" cy="0" r="9" fill="#FFFFFF" />
                  <circle cx="0" cy="0" r="6" fill="#005EB2" />
                </g>
                <rect x="22" y="300" width="56" height="22" rx="6" fill="#005EB2" />
                <text x="50" y="315" fill="#FFFFFF" fontFamily="Inter" fontSize="9.5" fontWeight="800" textAnchor="middle">
                  YOU (+2m)
                </text>

                {/* Safe Haven Destination Marker */}
                <g transform="translate(265, 60)" onClick={(e) => { e.stopPropagation(); setSelectedPin('shelter'); }}>
                  <circle cx="0" cy="0" r="20" fill="#FFB248" opacity="0.45" className="animate-ping" />
                  <circle cx="0" cy="0" r="13" fill="#005EB2" />
                  <path d="M -5 0 L -1 4 L 6 -3" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <rect x="165" y="16" width="162" height="26" rx="7" fill="#002E5D" />
                <text x="246" y="33" fill="#FFFFFF" fontFamily="Inter" fontSize="10.5" fontWeight="900" textAnchor="middle">
                  ST. JUDE HAVEN (+32m)
                </text>

                {/* Compass Rose */}
                <g transform="translate(295, 385)">
                  <circle cx="0" cy="0" r="14" fill="white" stroke="#D7C3B0" strokeWidth="1" />
                  <polygon points="0,-10 3,0 -3,0" fill="#BA1A1A" />
                  <polygon points="0,10 3,0 -3,0" fill="#524436" />
                  <text x="0" y="-12" fill="#BA1A1A" fontFamily="Inter" fontSize="7" fontWeight="900" textAnchor="middle">N</text>
                </g>
              </>
            )}
          </svg>

          {/* Floating Elevation Badge */}
          <div className="absolute top-2 left-2 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#1A1C1C] shadow-xs border border-[#E9E8E8] flex items-center gap-1.5 pointer-events-none">
            <span className="material-symbols-outlined text-[15px] text-[#855400]">terrain</span>
            <span>+32m Elevation Gain</span>
            {isMapExpanded && (
              <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-extrabold ml-1">
                Ridge Dry
              </span>
            )}
          </div>

          {/* Expanded View Helper Tip */}
          {isMapExpanded && (
            <div className="absolute top-2 right-2 px-2 py-1 rounded-lg bg-black/70 backdrop-blur-md text-[10px] font-semibold text-white flex items-center gap-1 pointer-events-none">
              <span className="material-symbols-outlined text-[13px] text-emerald-400">gps_fixed</span>
              <span>Live Sensor GIS</span>
            </div>
          )}

          {/* Fullscreen / Collapse Map Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMapExpanded(!isMapExpanded);
            }}
            className="absolute bottom-2 right-2 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#005EB2] hover:bg-white active:scale-95 shadow-md border border-[#005EB2]/30 flex items-center gap-1.5 transition-all z-10"
            title={isMapExpanded ? 'Collapse Map' : 'Expand Map to cover screen'}
          >
            <span className="material-symbols-outlined text-[16px]">
              {isMapExpanded ? 'fullscreen_exit' : 'fullscreen'}
            </span>
            <span>{isMapExpanded ? 'Collapse Map' : 'Expand Map'}</span>
          </button>
        </div>

        {/* 3. CORE QUESTION: 'WHERE SHOULD I GO?' - Prominent Destination Card */}
        <div
          onClick={onViewShelterDetails}
          className="cursor-pointer p-3.5 rounded-xl bg-[#F4F3F3] hover:bg-[#EFEEED] transition-colors flex flex-col gap-2"
        >
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#855400] uppercase">
                Designated Safe Haven
              </span>
              <h3 className="text-base font-extrabold text-[#1A1C1C] leading-tight mt-0.5">
                {INITIAL_SHELTER.name}
              </h3>
              <p className="text-xs text-[#524436] font-medium mt-0.5">
                High Ground Ridge Corridor • (+32m MSL)
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-base font-black text-[#005EB2] leading-none">
                {INITIAL_SHELTER.walkTimeMins} min
              </div>
              <div className="text-[11px] font-medium text-[#524436] mt-0.5">
                {INITIAL_SHELTER.distanceKm} km walk
              </div>
            </div>
          </div>

          {/* Visual Amenities & Capacity Badges */}
          <div className="grid grid-cols-3 gap-2 pt-1 border-t border-[#D7C3B0]/30 mt-1">
            <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white text-[#1A1C1C]">
              <span className="material-symbols-outlined text-[18px] text-[#005EB2]">bed</span>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-bold truncate leading-tight">55 Beds</span>
                <span className="text-[9px] text-[#524436] truncate leading-none">Available</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white text-[#1A1C1C]">
              <span className="material-symbols-outlined text-[18px] text-[#005EB2]">accessible</span>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-bold truncate leading-tight">Step-Free</span>
                <span className="text-[9px] text-[#524436] truncate leading-none">ADA Ramp</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white text-[#1A1C1C]">
              <span className="material-symbols-outlined text-[18px] text-[#855400]">bolt</span>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-bold truncate leading-tight">Food & Power</span>
                <span className="text-[9px] text-[#524436] truncate leading-none">Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. ACTIONS: Primary Evacuate CTA + Lifeline Rescue Button */}
      <div className="flex flex-col gap-2.5 pt-1">
        <button
          onClick={onStartEvacuation}
          className="w-full h-14 min-h-[56px] rounded-2xl bg-[#005EB2] hover:bg-[#005EB2]/95 active:scale-[0.98] transition-all flex items-center justify-between px-5 text-white font-extrabold text-sm tracking-wide shadow-md"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">navigation</span>
            </div>
            <span className="tracking-tight text-left text-[15px]">
              Start Evacuation to High Ground
            </span>
          </div>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>

        <button
          onClick={onRequestRescue}
          className="w-full h-12 min-h-[48px] rounded-2xl bg-[#FFDAD6] hover:bg-[#FFDAD6]/80 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-[#BA1A1A] font-bold text-xs border border-[#BA1A1A]/20"
        >
          <span
            className="material-symbols-outlined text-[18px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            emergency_share
          </span>
          <span>Trapped or need assistance? Request Rescue</span>
        </button>
      </div>
    </div>
  );
};
