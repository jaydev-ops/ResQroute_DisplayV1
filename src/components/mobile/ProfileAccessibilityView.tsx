import React, { useState } from 'react';
import { INITIAL_USER_PROFILE } from '../../data/platformData';
import { AccessibilityProfile } from '../../types';

interface ProfileAccessibilityViewProps {
  onBack: () => void;
  onOpenAuthorityConsole: () => void;
}

export const ProfileAccessibilityView: React.FC<ProfileAccessibilityViewProps> = ({
  onBack,
  onOpenAuthorityConsole,
}) => {
  const [profile, setProfile] = useState<AccessibilityProfile>(
    INITIAL_USER_PROFILE.accessibilityProfile
  );
  const [offlinePackCached, setOfflinePackCached] = useState(true);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const togglePreference = (key: keyof AccessibilityProfile) => {
    setProfile((prev) => ({ ...prev, [key]: !prev[key] }));
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div className="flex flex-col w-full px-4 pt-2 pb-28 gap-4 font-body">
      {/* Top Header */}
      <div className="flex items-center justify-between pt-1">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-[#005EB2] font-semibold text-sm py-1"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back_ios</span>
          <span>Back</span>
        </button>
        <h1 className="text-base font-bold text-[#1A1C1C]">Profile & Safety Settings</h1>
        <div className="w-8 h-8 rounded-full bg-[#005EB2] text-white flex items-center justify-center text-xs font-bold shadow-xs">
          D
        </div>
      </div>

      {savedSuccess && (
        <div className="p-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold text-center animate-fadeIn">
          Safety preferences updated and synced offline.
        </div>
      )}

      {/* Citizen ID Card */}
      <div className="rounded-3xl bg-white p-5 shadow-xs border border-[#E9E8E8] flex items-start gap-4">
        <div className="w-14 h-14 rounded-2xl bg-[#005EB2] text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">
          D
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h2 className="text-base font-bold text-[#1A1C1C] truncate">
              {INITIAL_USER_PROFILE.name}
            </h2>
            <span className="material-symbols-outlined text-[18px] text-[#005EB2]">
              verified
            </span>
          </div>
          <p className="text-xs text-[#524436] mt-0.5">{INITIAL_USER_PROFILE.sector}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#D5E3FF] text-[#001B3B] font-bold">
              ID: {INITIAL_USER_PROFILE.phone}
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-semibold">
              Verified Resident
            </span>
          </div>
        </div>
      </div>

      {/* Family Safe Word */}
      <div className="rounded-3xl bg-white p-5 shadow-xs border border-[#E9E8E8] space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#855400]">key</span>
            <h3 className="text-sm font-bold text-[#1A1C1C]">Family Safe Word</h3>
          </div>
          <span className="text-[10px] uppercase font-bold text-emerald-600">End-to-End Synced</span>
        </div>
        <div className="p-3 rounded-2xl bg-[#FFDDB7]/30 border border-[#FFB248]/40 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-[#653E00] uppercase tracking-wider font-bold">
              Challenge & Response
            </span>
            <p className="text-base font-mono font-black text-[#2A1700] tracking-wider">
              {INITIAL_USER_PROFILE.familySafeWord}
            </p>
          </div>
          <button
            onClick={() => alert('Safe word re-broadcasted to registered emergency contacts.')}
            className="px-3 py-1.5 rounded-xl bg-white text-xs font-bold text-[#855400] shadow-xs"
          >
            Verify
          </button>
        </div>
      </div>

      {/* Accessibility & Evacuation Routing Preferences */}
      <div className="rounded-3xl bg-white p-5 shadow-xs border border-[#E9E8E8] space-y-3.5">
        <div>
          <h3 className="text-sm font-bold text-[#1A1C1C]">Evacuation Mobility Constraints</h3>
          <p className="text-xs text-[#524436] mt-0.5">
            Routes will automatically filter stairs, steep slopes, and standing water.
          </p>
        </div>

        <div className="space-y-3">
          {/* Toggle 1: Wheelchair */}
          <div className="flex items-center justify-between p-2.5 rounded-2xl bg-[#F4F3F3]">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[20px] text-[#005EB2]">
                accessible
              </span>
              <div>
                <span className="text-xs font-bold text-[#1A1C1C] block">
                  Wheelchair / Step-Free Ramps Only
                </span>
                <span className="text-[11px] text-[#524436]">
                  Strictly avoid curbs, staircases, and muddy trails
                </span>
              </div>
            </div>
            <button
              onClick={() => togglePreference('wheelchairAccessible')}
              className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 ${
                profile.wheelchairAccessible ? 'bg-[#005EB2]' : 'bg-[#C6C6C6]'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
                  profile.wheelchairAccessible ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Toggle 2: Gentle Elevation */}
          <div className="flex items-center justify-between p-2.5 rounded-2xl bg-[#F4F3F3]">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[20px] text-[#005EB2]">
                elevation
              </span>
              <div>
                <span className="text-xs font-bold text-[#1A1C1C] block">
                  Gentle Incline Only (Max 6% Grade)
                </span>
                <span className="text-[11px] text-[#524436]">
                  For strollers, seniors, and luggage
                </span>
              </div>
            </div>
            <button
              onClick={() => togglePreference('avoidSteepSlopes')}
              className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 ${
                profile.avoidSteepSlopes ? 'bg-[#005EB2]' : 'bg-[#C6C6C6]'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
                  profile.avoidSteepSlopes ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Toggle 3: Medical Priority */}
          <div className="flex items-center justify-between p-2.5 rounded-2xl bg-[#F4F3F3]">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[20px] text-[#BA1A1A]">
                medical_services
              </span>
              <div>
                <span className="text-xs font-bold text-[#1A1C1C] block">
                  Medical Facility Safe Havens First
                </span>
                <span className="text-[11px] text-[#524436]">
                  Prioritize shelters with oxygen & doctor presence
                </span>
              </div>
            </div>
            <button
              onClick={() => togglePreference('medicalPriority')}
              className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 ${
                profile.medicalPriority ? 'bg-[#005EB2]' : 'bg-[#C6C6C6]'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
                  profile.medicalPriority ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Toggle 4: Audio Haptics */}
          <div className="flex items-center justify-between p-2.5 rounded-2xl bg-[#F4F3F3]">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[20px] text-[#005EB2]">
                vibration
              </span>
              <div>
                <span className="text-xs font-bold text-[#1A1C1C] block">
                  High-Intensity Audio & Haptic Alerts
                </span>
                <span className="text-[11px] text-[#524436]">
                  Vibrates on hazardous water turn warnings
                </span>
              </div>
            </div>
            <button
              onClick={() => togglePreference('audioHapticGuidance')}
              className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 ${
                profile.audioHapticGuidance ? 'bg-[#005EB2]' : 'bg-[#C6C6C6]'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
                  profile.audioHapticGuidance ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Offline Storage & Region Packs */}
      <div className="rounded-3xl bg-white p-5 shadow-xs border border-[#E9E8E8] space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#005EB2]">save</span>
            <h3 className="text-sm font-bold text-[#1A1C1C]">Offline Topo & Shelter Caches</h3>
          </div>
          <span className="text-xs font-mono text-[#5F5E5E]">IndexedDB</span>
        </div>

        <div className="p-3 rounded-2xl bg-[#F4F3F3] flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-[#1A1C1C] block">District 17 (Bandra Basin)</span>
            <span className="text-[11px] text-[#524436]">42 MB • Vector Contours & Shelters</span>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">check</span> Cached
          </span>
        </div>

        <button
          onClick={() => alert('Downloading District 18 Vector Tile Pack (38 MB)... Completed!')}
          className="w-full py-2.5 rounded-xl bg-[#EFEEED] text-[#1A1C1C] font-semibold text-xs hover:bg-[#E3E2E2] flex items-center justify-center gap-1.5"
        >
          <span className="material-symbols-outlined text-[16px]">download</span>
          <span>Download Adjacent District 18 Pack (38 MB)</span>
        </button>
      </div>

      {/* Authority Command Center Mode Switcher */}
      <div className="rounded-3xl bg-[#FFDDB7]/30 border border-[#FFB248]/40 p-4 space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#855400] text-white flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#2A1700]">Disaster Authority Switcher</h4>
            <p className="text-[11px] text-[#653E00] mt-0.5">
              Review incident telemetry, approve detours, and moderate live civic alerts.
            </p>
          </div>
        </div>
        <button
          onClick={onOpenAuthorityConsole}
          className="w-full h-11 rounded-xl bg-[#855400] text-white font-bold text-xs hover:bg-[#704600] transition-colors flex items-center justify-center gap-1.5 shadow-xs"
        >
          <span className="material-symbols-outlined text-[16px]">shield</span>
          <span>Open Authority Command Console</span>
        </button>
      </div>
    </div>
  );
};
