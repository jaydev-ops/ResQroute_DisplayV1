import React, { useState } from 'react';
import { INITIAL_HAZARD } from '../../data/platformData';

interface CitizenVerificationDossierProps {
  onBack: () => void;
  onSelectDetour: () => void;
}

export const CitizenVerificationDossier: React.FC<CitizenVerificationDossierProps> = ({
  onBack,
  onSelectDetour,
}) => {
  const [hazard, setHazard] = useState(INITIAL_HAZARD);
  const [userConfirmed, setUserConfirmed] = useState(false);
  const [reportClearedSent, setReportClearedSent] = useState(false);

  const handleConfirmFlooded = () => {
    setUserConfirmed(true);
    setHazard((prev) => ({
      ...prev,
      neighborsConfirmed: prev.neighborsConfirmed + 1,
      communityConfirmationPct: Math.min(prev.communityConfirmationPct + 1, 99),
    }));
  };

  const handleReportCleared = () => {
    setReportClearedSent(true);
  };

  return (
    <div className="flex flex-col w-full px-4 pt-2 pb-28 gap-4 font-body">
      {/* Top Breadcrumb Bar */}
      <div className="flex items-center justify-between pt-1">
        <button
          onClick={onBack}
          className="min-w-[44px] min-h-[44px] -ml-2 flex items-center gap-1 text-[#005EB2] font-medium active:opacity-60 transition-opacity rounded-full px-2"
        >
          <span className="material-symbols-outlined text-[24px]">chevron_left</span>
          <span className="text-sm tracking-tight font-medium">Radar</span>
        </button>
        <div className="flex items-center gap-2 bg-[#EFEEED] px-3 py-1.5 rounded-full shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB248] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#855400]" />
          </span>
          <span className="text-[11px] font-bold tracking-tight text-[#1A1C1C]">
            Under Authority Review
          </span>
        </div>
      </div>

      {/* Threat Header Dossier Card */}
      <div className="relative overflow-hidden rounded-3xl bg-white p-5 shadow-xs border border-[#E9E8E8]">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFDAD6]/40 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-xl bg-[#FFDAD6] text-[#BA1A1A] font-bold text-xs">
              <span className="material-symbols-outlined text-[18px]">flood</span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#BA1A1A]">
              Hazard Report {hazard.reportNumber}
            </span>
          </div>
          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#FFDAD6] text-[#93000A] font-bold">
            Active Flood
          </span>
        </div>
        <h2 className="text-xl font-bold tracking-tight text-[#1A1C1C] mb-2">{hazard.title}</h2>
        <div className="flex items-center gap-1.5 text-xs text-[#524436]">
          <span className="material-symbols-outlined text-[16px] text-[#005EB2] flex-shrink-0">
            location_on
          </span>
          <span className="leading-relaxed">{hazard.locationName} • Reported 6 mins ago</span>
        </div>
      </div>

      {/* Consensus & Verification Engine Gauge */}
      <div className="rounded-3xl bg-white p-5 shadow-xs border border-[#E9E8E8] space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#D5E3FF] flex items-center justify-center text-[#001B3B]">
              <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
            </div>
            <h3 className="text-sm font-semibold tracking-tight text-[#1A1C1C]">
              Community Verification
            </h3>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#704600] bg-[#FFDDB7] px-2.5 py-1 rounded-full">
            Verified
          </span>
        </div>

        {/* Meter Gauge */}
        <div className="bg-[#F4F3F3] rounded-2xl p-4 flex items-center gap-4">
          <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-[#E3E2E2]"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
              />
              <path
                className="text-[#005EB2] stroke-current"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                strokeDasharray={`${hazard.communityConfirmationPct}, 100`}
                strokeLinecap="round"
                strokeWidth="3.5"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-sm font-extrabold font-mono text-[#1A1C1C] tracking-tight">
                {hazard.communityConfirmationPct}%
              </span>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-sm font-bold text-[#1A1C1C]">
              {hazard.communityConfirmationPct}% Confirmed
            </span>
            <p className="text-xs text-[#524436] leading-relaxed mt-0.5">
              Nearby neighbors and water sensors confirm this road is impassable.
            </p>
          </div>
        </div>

        {/* Verification Stack Breakdown */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF9F9]">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-[#D5E3FF] flex items-center justify-center text-[#005EB2]">
                <span className="material-symbols-outlined text-[15px]">group</span>
              </div>
              <p className="text-xs font-semibold text-[#1A1C1C]">
                {hazard.neighborsConfirmed} Neighbors Confirmed
              </p>
            </div>
            <span className="material-symbols-outlined text-[16px] text-[#005EB2]">check_circle</span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF9F9]">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-[#FFDDB7] flex items-center justify-center text-[#855400]">
                <span className="material-symbols-outlined text-[15px]">sensors</span>
              </div>
              <p className="text-xs font-semibold text-[#1A1C1C]">
                Water Sensor: {hazard.waterDepthCm}cm deep ({hazard.culvertNode})
              </p>
            </div>
            <span className="material-symbols-outlined text-[16px] text-[#855400]">check_circle</span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF9F9]">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-[#FFDAD6] flex items-center justify-center text-[#BA1A1A]">
                <span className="material-symbols-outlined text-[15px]">emergency</span>
              </div>
              <p className="text-xs font-semibold text-[#1A1C1C]">Rescue Team Alerted</p>
            </div>
            <span className="text-[11px] font-bold text-[#BA1A1A] font-mono bg-[#FFDAD6] px-2 py-0.5 rounded">
              Sent
            </span>
          </div>
        </div>
      </div>

      {/* Ground Truth Photo Inspection */}
      <div className="rounded-3xl bg-white p-5 shadow-xs border border-[#E9E8E8] space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#524436]">photo_camera</span>
            <h3 className="text-sm font-semibold text-[#1A1C1C] tracking-tight">Photos from the Ground</h3>
          </div>
          <span className="text-xs font-medium text-[#5F5E5E]">Live on scene</span>
        </div>

        {/* Real Ground Photograph */}
        <div className="relative w-full h-52 rounded-2xl overflow-hidden bg-[#EFEEED]">
          <img
            src={hazard.imageUrl}
            alt="Ground level photograph of flood water"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[11px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#005EB2] animate-pulse" />
            <span>Verified Photo</span>
          </div>
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5 bg-[#BA1A1A]/90 backdrop-blur-xs text-white px-3 py-1.5 rounded-xl text-xs font-semibold shadow-xs">
            <span className="material-symbols-outlined text-[16px] flex-shrink-0">water</span>
            <span className="truncate">Water Level: {hazard.waterDepthCm}cm deep (Too deep for cars)</span>
          </div>
        </div>

        {/* Warning Callout */}
        <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FFDAD6] text-[#93000A]">
          <span className="material-symbols-outlined text-[20px] text-[#BA1A1A] flex-shrink-0 mt-0.5">
            warning
          </span>
          <div className="text-xs">
            <p className="font-bold">Road is Underwater</p>
            <p className="text-[11px] opacity-90 leading-tight mt-0.5">
              Water is 48cm deep. Cars will stall. Do not attempt in low clearance vehicles.
            </p>
          </div>
        </div>
      </div>

      {/* Safe Detour Card */}
      <div className="rounded-3xl bg-white p-5 shadow-xs border border-[#E9E8E8] space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-[#D5E3FF] flex items-center justify-center text-[#005EB2]">
            <span className="material-symbols-outlined text-[18px]">alt_route</span>
          </div>
          <h3 className="text-sm font-semibold tracking-tight text-[#1A1C1C]">Safe Detour Available</h3>
        </div>
        <div className="p-3.5 rounded-2xl bg-[#F4F3F3] space-y-2.5">
          <p className="text-xs text-[#1A1C1C] leading-snug">
            This road is blocked. Take Ridge Road instead (+6 min detour).
          </p>
          <div
            onClick={onSelectDetour}
            className="cursor-pointer p-2.5 rounded-xl bg-white flex items-center justify-between hover:border-[#005EB2] border border-transparent transition-all"
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="material-symbols-outlined text-[18px] text-[#005EB2] flex-shrink-0">
                turn_right
              </span>
              <span className="text-xs font-bold text-[#1A1C1C] truncate">{hazard.detourName}</span>
            </div>
            <span className="text-[11px] font-medium text-[#005EB2] bg-[#D5E3FF]/60 px-2.5 py-1 rounded-full">
              {hazard.detourSafeUsersCount} guided safely
            </span>
          </div>
        </div>
      </div>

      {/* Citizen Action Controls */}
      <div className="space-y-2.5 pt-1">
        <button
          onClick={handleConfirmFlooded}
          disabled={userConfirmed}
          className={`w-full min-h-[56px] py-3.5 px-5 font-bold rounded-2xl text-sm flex items-center justify-center gap-2 shadow-xs active:scale-[0.98] transition-transform ${
            userConfirmed
              ? 'bg-[#D5E3FF] text-[#005EB2]'
              : 'bg-[#FFB248] text-[#2A1700] hover:bg-[#FFB95D]'
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">
            {userConfirmed ? 'check' : 'thumb_up'}
          </span>
          <span>{userConfirmed ? 'Confirmed: Road is Still Flooded (+1)' : 'Confirm Road is Still Flooded'}</span>
        </button>

        <button
          onClick={handleReportCleared}
          disabled={reportClearedSent}
          className="w-full min-h-[48px] py-2.5 px-4 bg-[#EFEEED] text-[#1A1C1C] font-semibold rounded-2xl text-xs flex items-center justify-center gap-2 active:bg-[#E3E2E2] transition-colors"
        >
          <span className="material-symbols-outlined text-[18px] text-[#524436]">
            {reportClearedSent ? 'done' : 'check_circle'}
          </span>
          <span>{reportClearedSent ? 'Clearance Notice Sent to Command Center' : 'Report Water Has Cleared'}</span>
        </button>
      </div>
    </div>
  );
};
