import React, { useState } from 'react';
import { INITIAL_HAZARD } from '../../data/platformData';

interface AuthorityIncidentModerationProps {
  onBack: () => void;
  onBroadcastApproved: () => void;
}

export const AuthorityIncidentModeration: React.FC<AuthorityIncidentModerationProps> = ({
  onBack,
  onBroadcastApproved,
}) => {
  const [isApproved, setIsApproved] = useState(false);
  const [isRescueDeployed, setIsRescueDeployed] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleApprove = () => {
    setIsApproved(true);
    setToastMessage('Detour broadcast active to 1,420 nearby citizen handsets.');
    setTimeout(() => {
      onBroadcastApproved();
    }, 1200);
  };

  const handleDeployRescue = () => {
    setIsRescueDeployed(true);
    setToastMessage('NDRF Rescue Unit 4 dispatched with 2 high-clearance inflatable boats.');
    setTimeout(() => setToastMessage(null), 3000);
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
          <span>Command</span>
        </button>
        <h1 className="text-base font-bold text-[#1A1C1C]">Incident Moderation</h1>
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#BA1A1A] text-white font-bold text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Urgent
        </span>
      </div>

      {toastMessage && (
        <div className="p-3 rounded-2xl bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 shadow-lg animate-fadeIn">
          <span className="material-symbols-outlined text-[18px]">verified</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Urgent Banner Card */}
      <div className="rounded-3xl bg-[#BA1A1A] text-white p-5 shadow-lg border border-white/20 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black uppercase tracking-widest bg-black/30 px-2 py-0.5 rounded">
            Municipal Command Console
          </span>
          <span className="text-xs font-bold text-white/90">Priority 1 Critical</span>
        </div>

        <div>
          <h2 className="text-lg font-black tracking-tight leading-tight">
            Flash Flood Emergency • Sector 17 Basin
          </h2>
          <p className="text-xs text-white/90 mt-1">
            Culvert Node #104 Overtopped • 48cm Flood Depth
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/20 text-center">
          <div>
            <span className="text-[10px] text-white/70 uppercase font-semibold">Confidence</span>
            <p className="text-base font-black text-white font-mono">87%</p>
          </div>
          <div>
            <span className="text-[10px] text-white/70 uppercase font-semibold">Citizens</span>
            <p className="text-base font-black text-white font-mono">14 Reports</p>
          </div>
          <div>
            <span className="text-[10px] text-white/70 uppercase font-semibold">Water Sensor</span>
            <p className="text-base font-black text-white font-mono">+48 cm</p>
          </div>
        </div>
      </div>

      {/* Verification Stack Inspection */}
      <div className="rounded-3xl bg-white p-5 shadow-xs border border-[#E9E8E8] space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-[#1A1C1C]">Telemetry Multi-Source Validation</h3>
          <span className="text-xs font-mono text-emerald-600 font-bold">Consensus 87%</span>
        </div>

        <div className="space-y-2 text-xs">
          <div className="p-3 rounded-2xl bg-[#F4F3F3] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[18px] text-[#005EB2]">people</span>
              <div>
                <span className="font-bold text-[#1A1C1C] block">14 Citizen Reports</span>
                <span className="text-[11px] text-[#524436]">Photos verified within 80m geo-fence</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-emerald-600 text-[18px]">verified</span>
          </div>

          <div className="p-3 rounded-2xl bg-[#F4F3F3] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[18px] text-[#855400]">sensors</span>
              <div>
                <span className="font-bold text-[#1A1C1C] block">Sensor Node #104</span>
                <span className="text-[11px] text-[#524436]">Rate of rise: +6cm in last 12 minutes</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-emerald-600 text-[18px]">verified</span>
          </div>

          <div className="p-3 rounded-2xl bg-[#F4F3F3] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[18px] text-[#BA1A1A]">satellite_alt</span>
              <div>
                <span className="font-bold text-[#1A1C1C] block">Synthetic Aperture Radar (SAR)</span>
                <span className="text-[11px] text-[#524436]">Water mask matches PostGIS flood polygon</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-emerald-600 text-[18px]">verified</span>
          </div>
        </div>
      </div>

      {/* Ground Image Verification */}
      <div className="rounded-3xl bg-white p-4 shadow-xs border border-[#E9E8E8] space-y-2">
        <span className="text-xs font-bold text-[#1A1C1C]">Submitted Evidence Photo</span>
        <div className="w-full h-40 rounded-2xl overflow-hidden relative">
          <img
            src={INITIAL_HAZARD.imageUrl}
            alt="Submitted flood photo"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-white text-[10px] font-mono">
            GEO: 19.0760° N, 72.8777° E • Heading: 142° SE
          </div>
        </div>
      </div>

      {/* Impact Assessment */}
      <div className="rounded-3xl bg-white p-5 shadow-xs border border-[#E9E8E8] space-y-2.5">
        <h3 className="text-sm font-bold text-[#1A1C1C]">Command Impact Assessment</h3>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-[#F4F3F3]">
            <span className="text-[#5F5E5E]">Traffic Diverted</span>
            <p className="font-bold text-[#1A1C1C] mt-0.5">340 Evacuees</p>
          </div>
          <div className="p-2.5 rounded-xl bg-[#F4F3F3]">
            <span className="text-[#5F5E5E]">Primary Safe Corridor</span>
            <p className="font-bold text-[#005EB2] mt-0.5">Ridge Road Spine</p>
          </div>
        </div>
      </div>

      {/* Authority Command Action Controls */}
      <div className="space-y-2.5 pt-1">
        <button
          onClick={handleApprove}
          disabled={isApproved}
          className={`w-full h-14 rounded-2xl font-bold text-sm text-white shadow-lg flex items-center justify-center gap-2 active:scale-[0.99] transition-all ${
            isApproved ? 'bg-emerald-700' : 'bg-[#005EB2] hover:bg-[#005EB2]/95'
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">
            {isApproved ? 'done_all' : 'broadcast_on_personal'}
          </span>
          <span>
            {isApproved
              ? 'Detour Broadcast Live (Active)'
              : 'Approve & Broadcast Ridge Detour'}
          </span>
        </button>

        <button
          onClick={handleDeployRescue}
          disabled={isRescueDeployed}
          className={`w-full h-12 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 border transition-all ${
            isRescueDeployed
              ? 'bg-[#FFDDB7] text-[#704600] border-[#FFB248]'
              : 'bg-[#EFEEED] text-[#1A1C1C] border-[#E9E8E8] hover:bg-[#E3E2E2]'
          }`}
        >
          <span className="material-symbols-outlined text-[18px] text-[#855400]">
            emergency_home
          </span>
          <span>
            {isRescueDeployed
              ? 'NDRF Rescue Unit 4 Dispatched ✓'
              : 'Deploy Rescue Team (NDRF Unit 4)'}
          </span>
        </button>

        <button
          onClick={() => {
            alert('Incident marked as resolved / water cleared.');
            onBack();
          }}
          className="w-full py-2 text-center text-xs font-semibold text-[#524436] hover:text-[#1A1C1C]"
        >
          Dismiss / Archive Incident
        </button>
      </div>
    </div>
  );
};
