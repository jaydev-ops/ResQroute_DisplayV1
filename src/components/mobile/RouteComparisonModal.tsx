import React, { useState } from 'react';
import { ROUTE_OPTIONS, INITIAL_SHELTER } from '../../data/platformData';

interface RouteComparisonModalProps {
  onBack: () => void;
  onConfirmSafestRoute: () => void;
}

export const RouteComparisonModal: React.FC<RouteComparisonModalProps> = ({
  onBack,
  onConfirmSafestRoute,
}) => {
  const [selectedRouteId, setSelectedRouteId] = useState<'route-b-safe' | 'route-a-unsafe'>('route-b-safe');
  const [isCalibrating, setIsCalibrating] = useState(false);

  const safeRoute = ROUTE_OPTIONS[0];
  const unsafeRoute = ROUTE_OPTIONS[1];

  const handleFollowRoute = () => {
    setIsCalibrating(true);
    setTimeout(() => {
      setIsCalibrating(false);
      onConfirmSafestRoute();
    }, 800);
  };

  return (
    <div className="flex flex-col w-full px-4 pt-2 pb-24 gap-4 font-body">
      {/* Header Navigation with Back */}
      <div className="flex items-center gap-3 pt-1">
        <button
          onClick={onBack}
          className="w-10 h-10 -ml-1 flex items-center justify-center rounded-full text-[#1A1C1C] bg-[#F4F3F3] hover:bg-[#EFEEED] active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <div className="flex flex-col">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#005EB2]">
            Route Comparison
          </span>
          <h2 className="text-[22px] font-bold text-[#1A1C1C] tracking-tight">
            Why this route?
          </h2>
        </div>
      </div>

      {/* Reassuring Clarity Callout */}
      <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#D5E3FF]/30 text-[#1A1C1C] border border-[#D5E3FF]/60">
        <div className="w-8 h-8 rounded-full bg-[#005EB2] flex items-center justify-center shrink-0 text-white shadow-xs">
          <span className="material-symbols-outlined text-[18px]">verified_user</span>
        </div>
        <p className="text-[13px] font-medium leading-snug">
          We picked the <span className="font-bold text-[#005EB2]">safest dry path</span> to St. Jude
          Shelter. The shorter shortcut is dangerously flooded.
        </p>
      </div>

      {/* Visual Side-by-Side Elevation Route Graphic */}
      <div className="relative w-full rounded-2xl overflow-hidden bg-white shadow-xs p-3.5 flex flex-col gap-3 border border-[#E9E8E8]">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#005EB2] text-[18px]">map</span>
            <span className="text-[13px] font-bold text-[#1A1C1C]">Visual Route Comparison</span>
          </div>
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#D5E3FF] text-[#001B3B]">
            Live Elevation View
          </span>
        </div>

        {/* Map Canvas with Ridge & Submerged Flood Polygon */}
        <div className="relative w-full h-48 rounded-xl overflow-hidden bg-[#EEF3F7] flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 360 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            {/* Elevated Dry Ridge Terrain */}
            <path d="M 0,0 L 360,0 L 360,95 C 270,110 180,75 0,115 Z" fill="#E2F3E8" />
            {/* Flood Water Hazard Zone */}
            <ellipse cx="195" cy="148" rx="60" ry="34" fill="#FED7D7" opacity="0.75" />
            <ellipse cx="195" cy="148" rx="44" ry="22" fill="#FEB2B2" opacity="0.6" />

            {/* Topography contour lines */}
            <path d="M 20 50 Q 180 30 340 60" fill="none" stroke="#C2DFCE" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 10 90 Q 180 70 350 100" fill="none" stroke="#C2DFCE" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Labels */}
            <text x="190" y="32" textAnchor="middle" className="fill-[#2E7D32] text-[10px] font-bold tracking-wide">
              HIGH-GROUND RIDGE (+32m DRY)
            </text>
            <text x="195" y="145" textAnchor="middle" className="fill-[#BA1A1A] text-[10px] font-bold tracking-wider">
              48cm FLOOD WATER
            </text>
            <text x="195" y="158" textAnchor="middle" className="fill-[#BA1A1A] text-[9px] font-medium">
              Road Submerged
            </text>

            {/* ROUTE A: Unsafe Red Dashed Path into Flood */}
            <path d="M 40 148 L 140 148 L 195 148" fill="none" stroke="#BA1A1A" strokeWidth="3.5" strokeDasharray="5 4" strokeLinecap="round" />
            <path d="M 195 148 L 260 148 L 320 80" fill="none" stroke="#BA1A1A" strokeWidth="2.5" strokeDasharray="3 4" strokeLinecap="round" opacity="0.35" />

            {/* ROUTE B: Selected Safe Blue Solid Corridor Over Ridge */}
            <path d="M 40 148 C 65 85, 110 52, 195 50 C 265 48, 290 60, 320 80" fill="none" stroke="#005EB2" strokeWidth="5" strokeLinecap="round" />
            <path d="M 40 148 C 65 85, 110 52, 195 50 C 265 48, 290 60, 320 80" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="5 6" strokeLinecap="round" />

            {/* Start Pin: Origin */}
            <circle cx="40" cy="148" r="7" fill="#1A1C1C" />
            <circle cx="40" cy="148" r="3.5" fill="#FFFFFF" />
            <rect x="8" y="166" width="64" height="16" rx="4" fill="#1A1C1C" />
            <text x="40" y="178" textAnchor="middle" className="fill-[#FFFFFF] text-[9px] font-bold">
              You Are Here
            </text>

            {/* Hazard Cross Marker on Route A */}
            <circle cx="195" cy="122" r="9" fill="#BA1A1A" />
            <path d="M 191 118 L 199 126 M 199 118 L 191 126" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

            {/* End Pin: St. Jude Shelter */}
            <circle cx="320" cy="80" r="8" fill="#005EB2" />
            <circle cx="320" cy="80" r="4" fill="#FFFFFF" />
            <rect x="276" y="94" width="74" height="16" rx="4" fill="#005EB2" />
            <text x="313" y="106" textAnchor="middle" className="fill-[#FFFFFF] text-[9px] font-bold">
              St. Jude Shelter
            </text>
          </svg>

          {/* Floating Chips */}
          <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-[#005EB2] flex items-center gap-1.5 shadow-xs border border-[#D5E3FF]">
            <span className="w-2 h-2 rounded-full bg-[#005EB2]" />
            Route B: Safe (+32m Ridge)
          </div>
          <div className="absolute bottom-2.5 right-2.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-[#BA1A1A] flex items-center gap-1.5 shadow-xs border border-[#FFDAD6]">
            <span className="w-2 h-2 rounded-full bg-[#BA1A1A]" />
            Route A: Flooded Ahead
          </div>
        </div>
      </div>

      {/* GLANCEABLE SAFETY CARDS */}
      {/* Card 1: Safe Route (Selected) */}
      <div
        onClick={() => setSelectedRouteId('route-b-safe')}
        className={`cursor-pointer rounded-2xl p-4 shadow-sm border transition-all ${
          selectedRouteId === 'route-b-safe'
            ? 'bg-white border-[#005EB2] ring-2 ring-[#005EB2]/20'
            : 'bg-[#FAF9F9] border-[#E9E8E8]'
        } flex flex-col gap-3`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#005EB2] text-white flex items-center justify-center font-bold text-[12px]">
              ✓
            </span>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-[16px] font-bold text-[#1A1C1C]">{safeRoute.name}</h3>
                <span className="text-[10px] font-bold uppercase tracking-wide bg-[#D5E3FF] text-[#001B3B] px-2 py-0.5 rounded-full">
                  Recommended
                </span>
              </div>
              <p className="text-[12px] text-[#524436] font-medium">{safeRoute.corridorName}</p>
            </div>
          </div>
          <span className="text-[13px] font-bold text-[#005EB2] bg-[#005EB2]/10 px-2.5 py-1 rounded-xl">
            {safeRoute.travelTimeMins} min
          </span>
        </div>

        {/* Metrics Pill Row */}
        <div className="grid grid-cols-3 gap-2 py-0.5">
          <div className="bg-[#F4F3F3] rounded-xl p-2 text-center">
            <span className="text-[10px] text-[#524436] font-medium">Travel Time</span>
            <p className="text-[14px] font-bold text-[#005EB2]">{safeRoute.travelTimeMins} min</p>
          </div>
          <div className="bg-[#F4F3F3] rounded-xl p-2 text-center">
            <span className="text-[10px] text-[#524436] font-medium">Distance</span>
            <p className="text-[14px] font-bold text-[#1A1C1C]">{safeRoute.distanceKm} km</p>
          </div>
          <div className="bg-[#F4F3F3] rounded-xl p-2 text-center">
            <span className="text-[10px] text-[#524436] font-medium">Ground Status</span>
            <p className="text-[13px] font-bold text-[#005EB2] flex items-center justify-center gap-1 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-[#005EB2]" /> High Ground
            </p>
          </div>
        </div>

        {/* Human Reason */}
        <div className="flex items-start gap-2.5 pt-1 text-[13px] text-[#524436] leading-snug">
          <span className="material-symbols-outlined text-[#005EB2] text-[18px] shrink-0 mt-0.5">
            check_circle
          </span>
          <p>{safeRoute.description}</p>
        </div>
      </div>

      {/* Card 2: Unsafe Shortcut (Avoid) */}
      <div
        onClick={() => setSelectedRouteId('route-a-unsafe')}
        className={`cursor-pointer rounded-2xl p-4 shadow-xs border transition-all ${
          selectedRouteId === 'route-a-unsafe'
            ? 'bg-white border-[#BA1A1A] ring-2 ring-[#BA1A1A]/20'
            : 'bg-[#FAF9F9] border-[#FFDAD6]'
        } flex flex-col gap-3 opacity-90`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#FFDAD6] text-[#BA1A1A] flex items-center justify-center font-bold text-[12px]">
              ✕
            </span>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-[16px] font-bold text-[#1A1C1C]">{unsafeRoute.name}</h3>
                <span className="text-[10px] font-bold uppercase tracking-wide bg-[#FFDAD6] text-[#93000A] px-2 py-0.5 rounded-full">
                  Hazard
                </span>
              </div>
              <p className="text-[12px] text-[#524436] font-medium">{unsafeRoute.corridorName}</p>
            </div>
          </div>
          <span className="text-[13px] font-bold text-[#BA1A1A] bg-[#FFDAD6]/60 px-2.5 py-1 rounded-xl line-through">
            {unsafeRoute.travelTimeMins} min
          </span>
        </div>

        {/* Metrics Pill Row */}
        <div className="grid grid-cols-3 gap-2 py-0.5 opacity-80">
          <div className="bg-[#F4F3F3] rounded-xl p-2 text-center">
            <span className="text-[10px] text-[#524436] font-medium">Nominal Time</span>
            <p className="text-[14px] font-bold text-[#1A1C1C] line-through decoration-[#BA1A1A]">
              {unsafeRoute.travelTimeMins} min
            </p>
          </div>
          <div className="bg-[#F4F3F3] rounded-xl p-2 text-center">
            <span className="text-[10px] text-[#524436] font-medium">Distance</span>
            <p className="text-[14px] font-bold text-[#1A1C1C] line-through decoration-[#BA1A1A]">
              {unsafeRoute.distanceKm} km
            </p>
          </div>
          <div className="bg-[#F4F3F3] rounded-xl p-2 text-center">
            <span className="text-[10px] text-[#524436] font-medium">Hazard</span>
            <p className="text-[13px] font-bold text-[#BA1A1A] flex items-center justify-center gap-1 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-[#BA1A1A]" /> Flooded Ahead
            </p>
          </div>
        </div>

        {/* Human Reason */}
        <div className="flex items-start gap-2.5 pt-1 text-[13px] text-[#524436] leading-snug">
          <span className="material-symbols-outlined text-[#BA1A1A] text-[18px] shrink-0 mt-0.5">
            cancel
          </span>
          <p>
            <strong className="text-[#BA1A1A]">Road is completely underwater (48cm deep).</strong> Cars
            and walking are impassable due to deep canal water and drain collapse.
          </p>
        </div>
      </div>

      {/* Destination Confirmation Badge */}
      <div className="rounded-xl bg-white p-3.5 shadow-xs border border-[#E9E8E8] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#005EB2]/10 text-[#005EB2] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[20px]">local_hospital</span>
          </div>
          <div>
            <h4 className="text-[13px] font-bold text-[#1A1C1C]">
              Destination: {INITIAL_SHELTER.name}
            </h4>
            <p className="text-[11px] text-[#524436] font-medium">
              55 open beds • Generator backup & medical staff
            </p>
          </div>
        </div>
        <span className="text-[11px] font-bold text-[#005EB2]">Safe Zone</span>
      </div>

      {/* Dominant Primary CTA */}
      <div className="w-full pt-1 pb-2">
        <button
          onClick={handleFollowRoute}
          disabled={isCalibrating}
          className="w-full h-14 rounded-2xl bg-[#005EB2] hover:bg-[#005EB2]/95 active:scale-[0.99] text-white font-bold text-[16px] tracking-tight shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-80"
        >
          {isCalibrating ? (
            <>
              <span className="material-symbols-outlined text-[20px] animate-spin">
                progress_activity
              </span>
              <span>Calibrating High-Ground GPS...</span>
            </>
          ) : (
            <>
              <span>Follow Safest Route (14 min)</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </>
          )}
        </button>
        <p className="text-center text-[11px] text-[#524436] mt-2 font-medium">
          Real-time alerts will reroute you if water rises unexpectedly.
        </p>
      </div>
    </div>
  );
};
