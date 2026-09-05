import React, { useState } from 'react';
import { INITIAL_SHELTER } from '../../data/platformData';

interface SmsGatewayViewProps {
  onBack: () => void;
  onFollowCompass: () => void;
}

export const SmsGatewayView: React.FC<SmsGatewayViewProps> = ({
  onBack,
  onFollowCompass,
}) => {
  const [outgoingText, setOutgoingText] = useState('EMERGENCY LOC 19.0760,72.8777 WHEELCHAIR');
  const [isSending, setIsSending] = useState(false);
  const [hasReceivedReply, setHasReceivedReply] = useState(true);
  const [compassDegrees, setCompassDegrees] = useState(24);
  const [showCompassModal, setShowCompassModal] = useState(false);

  const handleSendText = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setHasReceivedReply(true);
    }, 900);
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
        <h1 className="text-base font-bold text-[#1A1C1C]">Sms Fallback Gateway</h1>
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FFB248] text-[#704600] font-bold text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#704600]" />
          Offline
        </span>
      </div>

      {/* Offline GPS Linked Instruction Banner */}
      <div className="rounded-2xl bg-[#F4F3F3] p-3.5 border border-[#E9E8E8] flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#005EB2] flex items-center justify-center text-white shrink-0 shadow-xs">
          <span className="material-symbols-outlined text-[22px]">turn_left</span>
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#855400]">
            <span>In 200 M • Elevated Safe Path</span>
            <span className="bg-[#D5E3FF] text-[#001B3B] px-1.5 py-0.2 rounded">Offline GPS Linked</span>
          </div>
          <h2 className="text-sm font-bold text-[#1A1C1C]">Turn Left onto Ridge Road</h2>
          <p className="text-[11px] text-[#524436]">Ridge Road is +32m above flood level</p>
        </div>
      </div>

      {/* Explanation Banner */}
      <div className="space-y-1">
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#005EB2] bg-[#D5E3FF]/50 px-2.5 py-1 rounded-full">
          <span className="material-symbols-outlined text-[14px]">chat</span>
          No Internet? Emergency SMS Gateway
        </span>
        <h2 className="text-2xl font-extrabold text-[#1A1C1C] tracking-tight pt-1">
          Offline SMS Lifeline
        </h2>
        <p className="text-xs text-[#524436] leading-relaxed">
          When mobile data and Wi-Fi fail, resQroute sends safe routes and shelter directions through
          a simple text message.
        </p>
      </div>

      {/* Outgoing Emergency SMS Card */}
      <div className="rounded-3xl bg-white p-4 shadow-xs border border-[#E9E8E8] space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1A1C1C]">
            <span className="material-symbols-outlined text-[18px] text-[#005EB2]">outgoing_mail</span>
            <span>Outgoing Emergency SMS</span>
          </div>
          <span className="text-[10px] font-mono text-[#5F5E5E] bg-[#F4F3F3] px-2 py-0.5 rounded-full">
            {outgoingText.length} / 160 chars (1 segment)
          </span>
        </div>

        <div className="p-3 rounded-2xl bg-[#F4F3F3] border border-[#E9E8E8]">
          <textarea
            value={outgoingText}
            onChange={(e) => setOutgoingText(e.target.value)}
            className="w-full bg-transparent text-xs font-mono font-semibold text-[#1A1C1C] outline-hidden resize-none"
            rows={2}
          />
          <div className="flex items-center justify-between pt-2 border-t border-[#E3E2E2] text-[11px] text-[#524436]">
            <span>ⓘ Sent as standard SMS text</span>
            <button
              onClick={() => setOutgoingText('EMERGENCY LOC 19.0760,72.8777 WHEELCHAIR')}
              className="font-bold text-[#005EB2] hover:underline"
            >
              Preset Safe Query
            </button>
          </div>
        </div>

        <button
          onClick={handleSendText}
          disabled={isSending}
          className="w-full h-12 rounded-xl bg-[#005EB2] hover:bg-[#005EB2]/95 active:scale-[0.99] text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-all disabled:opacity-80"
        >
          <span className="material-symbols-outlined text-[18px]">
            {isSending ? 'hourglass_top' : 'send'}
          </span>
          <span>{isSending ? 'Broadcasting via 2G Carrier...' : 'Send Emergency Text'}</span>
        </button>
      </div>

      {/* Carrier Link Bar */}
      <div className="flex items-center justify-between px-1 text-xs text-[#524436]">
        <div className="flex items-center gap-1.5 font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#FFB248]" />
          <span>Carrier Link Confirmed</span>
        </div>
        <span className="font-mono text-[11px]">Latency: 1.4s • Signal: -94dBm</span>
      </div>

      {/* Incoming Text Reply */}
      {hasReceivedReply && (
        <div className="rounded-3xl bg-white p-4 shadow-xs border border-[#E9E8E8] space-y-2.5 animate-fadeIn">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#1A1C1C]">
              <span className="material-symbols-outlined text-[18px] text-emerald-600">
                check_circle
              </span>
              <span>Incoming Text Reply</span>
            </div>
            <span className="text-[11px] text-[#5F5E5E]">From Emergency Service</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#D5E3FF]/30 border border-[#D5E3FF] text-xs font-mono leading-relaxed text-[#001B3B]">
            resQroute: Shelter B • 14 min walk • Safe high ground. Ridge Road is dry (+32m elevation).
            Wheelchair accessible: YES. 55 beds open. Sent via 2G Fallback.
          </div>
        </div>
      )}

      {/* Parsed Route Card */}
      <div className="rounded-3xl bg-white p-4 shadow-xs border border-[#E9E8E8] space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1A1C1C]">
            <span className="material-symbols-outlined text-[18px] text-[#005EB2]">map</span>
            <span>Your Safe Route</span>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFB248] text-[#704600]">
            Safe Path
          </span>
        </div>

        <div className="p-3 rounded-2xl bg-[#F4F3F3] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#524436]">
              Recommended Shelter
            </span>
            <h4 className="text-sm font-bold text-[#1A1C1C]">{INITIAL_SHELTER.name}</h4>
            <p className="text-xs text-[#524436]">3.4 km away</p>
          </div>
          <div className="text-center bg-white px-2.5 py-1.5 rounded-xl border border-[#E9E8E8]">
            <span className="text-sm font-black text-[#005EB2] block font-mono">55</span>
            <span className="text-[9px] uppercase font-bold text-[#5F5E5E]">Beds</span>
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-[#F4F3F3] space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-[#1A1C1C]">SAFE PATH</span>
            <span className="text-xs font-semibold text-[#BA1A1A]">⊘ Canal Road Flooded</span>
          </div>
          <p className="text-xs text-[#524436]">Take Ridge Road. Stay off Canal Road (Flooded).</p>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2.5 rounded-xl bg-[#F4F3F3]">
            <span className="material-symbols-outlined text-[18px] text-[#005EB2]">directions_walk</span>
            <p className="text-xs font-bold text-[#1A1C1C] mt-0.5">14 min walk</p>
            <span className="text-[9px] text-[#5F5E5E]">Est. Time</span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#F4F3F3]">
            <span className="material-symbols-outlined text-[18px] text-[#005EB2]">terrain</span>
            <p className="text-xs font-bold text-[#1A1C1C] mt-0.5">+32m</p>
            <span className="text-[9px] text-[#5F5E5E]">High ground</span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#F4F3F3]">
            <span className="material-symbols-outlined text-[18px] text-emerald-600">accessible</span>
            <p className="text-xs font-bold text-emerald-700 mt-0.5">Verified</p>
            <span className="text-[9px] text-[#5F5E5E]">Wheelchair friendly</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 pt-1">
        <button
          onClick={() => setShowCompassModal(true)}
          className="w-full h-14 rounded-2xl bg-[#005EB2] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 active:scale-[0.99] transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">explore</span>
          <span>Follow Compass to Shelter</span>
        </button>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => navigator.clipboard?.writeText(outgoingText)}
            className="h-11 rounded-xl bg-[#EFEEED] text-xs font-semibold text-[#1A1C1C] flex items-center justify-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">content_copy</span>
            <span>Copy Template</span>
          </button>
          <button
            onClick={() => alert('Offline Topo Grid tiles loaded from IndexedDB cache.')}
            className="h-11 rounded-xl bg-[#EFEEED] text-xs font-semibold text-[#1A1C1C] flex items-center justify-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">map</span>
            <span>Offline Topo Grid</span>
          </button>
        </div>

        <p className="text-center text-[11px] text-[#5F5E5E] pt-1">
          Works with or without mobile data. Your phone uses satellite compass.
        </p>
      </div>

      {/* Compass Modal */}
      {showCompassModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl flex flex-col items-center text-center space-y-4">
            <div className="w-full flex justify-between items-center">
              <span className="text-xs font-bold text-[#005EB2] uppercase tracking-wider">
                Magnetic Heading
              </span>
              <button
                onClick={() => setShowCompassModal(false)}
                className="w-8 h-8 rounded-full bg-[#F4F3F3] flex items-center justify-center text-[#1A1C1C]"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {/* Simulated Digital Compass Dial */}
            <div className="relative w-48 h-48 rounded-full border-4 border-[#005EB2] flex items-center justify-center bg-[#FAF9F9] shadow-inner">
              <div
                className="absolute inset-2 flex items-center justify-center transition-transform duration-500"
                style={{ transform: `rotate(${compassDegrees}deg)` }}
              >
                {/* Compass Needle */}
                <div className="w-2 h-20 bg-gradient-to-t from-[#005EB2] to-[#BA1A1A] rounded-full shadow-md" />
                <div className="absolute -top-3 text-xs font-bold text-[#BA1A1A]">N</div>
              </div>
              <div className="z-10 w-16 h-16 rounded-full bg-white shadow-md flex flex-col items-center justify-center border border-[#E9E8E8]">
                <span className="text-base font-black text-[#1A1C1C] font-mono leading-none">
                  {compassDegrees}°
                </span>
                <span className="text-[9px] font-bold text-[#005EB2]">NNE</span>
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#1A1C1C]">Walk 3.4 km on 024° Bearing</h3>
              <p className="text-xs text-[#524436] mt-1">
                Target: {INITIAL_SHELTER.name}. Keep heading northeast along the natural ridge spine.
              </p>
            </div>

            <button
              onClick={() => {
                setShowCompassModal(false);
                onFollowCompass();
              }}
              className="w-full h-12 rounded-xl bg-[#005EB2] text-white font-bold text-xs"
            >
              Switch to Live Topo View
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
