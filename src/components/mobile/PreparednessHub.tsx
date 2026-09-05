import React, { useState } from 'react';
import { INITIAL_GO_BAG, INITIAL_SHELTER } from '../../data/platformData';
import { GoBagItem, OperatingMode } from '../../types';

interface PreparednessHubProps {
  onNavigateToRoute: () => void;
  onNavigateToSOS: () => void;
  onNavigateToShelter: () => void;
  onNavigateToSMS: () => void;
  operatingMode: OperatingMode;
  onToggleMode: (mode: OperatingMode) => void;
}

export const PreparednessHub: React.FC<PreparednessHubProps> = ({
  onNavigateToRoute,
  onNavigateToSOS,
  onNavigateToShelter,
  onNavigateToSMS,
  operatingMode,
  onToggleMode,
}) => {
  const [goBagItems, setGoBagItems] = useState<GoBagItem[]>(INITIAL_GO_BAG);
  const [showInventoryModal, setShowInventoryModal] = useState(false);
  const [showDrillAlert, setShowDrillAlert] = useState(false);

  const packedCount = goBagItems.filter((i) => i.packed).length;
  const percentage = Math.round((packedCount / goBagItems.length) * 100);

  const toggleItem = (id: string) => {
    setGoBagItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
    );
  };

  return (
    <div className="flex flex-col w-full px-4 pb-24 pt-2 space-y-4">
      {/* Peacetime / District Header & Live Civic Telemetry */}
      <div className="flex flex-col space-y-2.5">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#524436]/80">
              Peacetime Monitoring
            </span>
            <h2 className="text-xl font-bold tracking-tight text-[#1A1C1C]">
              Good morning, Drashti
            </h2>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#F4F3F3] shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#005EB2] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#005EB2]" />
            </span>
            <span className="text-[11px] font-semibold text-[#524436]">Live Sync</span>
          </div>
        </div>

        {/* Civic Telemetry Chip */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#F4F3F3] shadow-xs border border-[#E9E8E8]/60">
          <div className="w-2 h-2 rounded-full bg-[#005EB2] flex-shrink-0" />
          <p className="text-xs text-[#524436] font-medium truncate">
            Bandra West • District 17 • Normal Status{' '}
            <span className="text-[#005EB2] font-semibold">(River Gauge 1.2m / Safe)</span>
          </p>
        </div>

        {/* Peacetime vs Emergency Drill Switcher */}
        <div className="flex items-center justify-between p-1 bg-[#EFEEED] rounded-xl shadow-inner">
          <button
            onClick={() => onToggleMode('peacetime')}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
              operatingMode === 'peacetime'
                ? 'bg-[#FFFFFF] text-[#1A1C1C] shadow-xs'
                : 'text-[#524436] hover:text-[#1A1C1C]'
            }`}
          >
            <span
              className="material-symbols-outlined text-[16px] text-[#855400]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              shield_with_heart
            </span>
            <span>Peacetime Hub</span>
          </button>
          <button
            onClick={() => {
              onToggleMode('drill');
              setShowDrillAlert(true);
            }}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
              operatingMode === 'drill'
                ? 'bg-[#BA1A1A] text-white shadow-xs font-bold'
                : 'text-[#524436] hover:text-[#BA1A1A]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">warning</span>
            <span>Emergency Drill</span>
          </button>
        </div>
      </div>

      {showDrillAlert && (
        <div className="p-3.5 rounded-2xl bg-[#FFDAD6] text-[#93000A] text-xs flex items-center justify-between border border-[#BA1A1A]/30 animate-fadeIn">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">emergency</span>
            <span className="font-semibold">Simulated Flood Drill active in District 17.</span>
          </div>
          <button
            onClick={() => setShowDrillAlert(false)}
            className="text-[11px] underline font-bold"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Monsoon Readiness Card (Apple Health / Weather Style) */}
      <div className="rounded-2xl bg-white p-4 shadow-xs border border-[#E9E8E8] relative overflow-hidden">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-[#005EB2]">
              <span className="material-symbols-outlined text-[18px]">water_drop</span>
              <span className="text-xs font-semibold uppercase tracking-wider">
                Hydrology & Drainage
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#1A1C1C] tracking-tight">
              Monsoon Readiness
            </h3>
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFB248]/25 text-[#704600] text-[11px] font-bold">
            <span className="material-symbols-outlined text-[13px]">cyclone</span>
            Seasonal Watch
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-[#F4F3F3] flex flex-col justify-between">
            <span className="text-[11px] text-[#524436] font-medium">72h Precipitation</span>
            <div className="mt-1">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-extrabold text-[#1A1C1C] tracking-tight">22</span>
                <span className="text-xs font-medium text-[#524436]">mm</span>
              </div>
              <div className="inline-flex items-center gap-1 mt-1 text-[11px] font-semibold text-[#005EB2]">
                <span className="material-symbols-outlined text-[12px]">verified</span> Low Risk
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#F4F3F3] flex flex-col justify-between">
            <span className="text-[11px] text-[#524436] font-medium">Culvert Flow Capacity</span>
            <div className="mt-1">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-extrabold text-[#1A1C1C] tracking-tight">98</span>
                <span className="text-xs font-medium text-[#524436]">%</span>
              </div>
              <div className="inline-flex items-center gap-1 mt-1 text-[11px] font-medium text-[#524436] truncate">
                Node #104 • 2m ago
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between pt-3 text-xs bg-[#FFDDB7]/30 p-2.5 rounded-xl border border-[#FFB248]/30">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#855400] text-[18px]">engineering</span>
            <span className="text-[#653E00] font-medium">
              Pre-monsoon culvert desilting active in Sector 4
            </span>
          </div>
          <span className="material-symbols-outlined text-[#855400] text-[16px]">chevron_right</span>
        </div>
      </div>

      {/* Go-Bag Readiness Interactive Ring & Checklist */}
      <div className="rounded-2xl bg-white p-4 shadow-xs border border-[#E9E8E8] flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-[#1A1C1C] tracking-tight">
              Go-Bag Readiness
            </h3>
            <p className="text-xs text-[#524436]">
              {packedCount} of {goBagItems.length} household essentials packed
            </p>
          </div>
          <button
            onClick={() => setShowInventoryModal(true)}
            className="text-xs font-semibold text-[#005EB2] hover:underline"
          >
            Manage Items
          </button>
        </div>

        <div className="flex items-center gap-4 py-1">
          {/* Circular Progress Ring */}
          <div className="relative flex-shrink-0 w-20 h-20 flex items-center justify-center">
            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 72 72">
              <circle
                className="text-[#E9E8E8]"
                cx="36"
                cy="36"
                fill="transparent"
                r="30"
                stroke="currentColor"
                strokeWidth="6"
              />
              <circle
                className="text-[#4597FE]"
                cx="36"
                cy="36"
                fill="transparent"
                r="30"
                stroke="currentColor"
                strokeDasharray="188.4"
                strokeDashoffset={188.4 - (188.4 * percentage) / 100}
                strokeLinecap="round"
                strokeWidth="6"
              />
              <circle
                className="text-[#FFB248]"
                cx="36"
                cy="36"
                fill="transparent"
                r="30"
                stroke="currentColor"
                strokeDasharray="188.4"
                strokeDashoffset={188.4 - (188.4 * Math.min(percentage, 50)) / 100}
                strokeLinecap="round"
                strokeWidth="6"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-sm font-extrabold text-[#1A1C1C] leading-tight">
                {percentage}%
              </span>
              <span className="text-[9px] font-medium text-[#524436]">Ready</span>
            </div>
          </div>

          {/* Quick Item Pills */}
          <div className="flex-1 flex flex-wrap gap-1.5">
            {goBagItems.slice(0, 4).map((item) => (
              <span
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`cursor-pointer inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                  item.packed
                    ? 'bg-[#F4F3F3] text-[#1A1C1C]'
                    : 'bg-[#FFB248]/20 text-[#704600] border border-[#FFB248]/40'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-[13px] ${
                    item.packed ? 'text-[#005EB2]' : 'text-[#855400]'
                  }`}
                >
                  {item.packed ? 'check_circle' : 'warning'}
                </span>
                {item.name.split(' (')[0]}
              </span>
            ))}
          </div>
        </div>

        {/* Update Button */}
        <button
          onClick={() => setShowInventoryModal(true)}
          className="w-full mt-1 py-2.5 px-4 rounded-xl bg-[#EFEEED] hover:bg-[#E9E8E8] text-[#1A1C1C] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 active:scale-[0.99]"
        >
          <span className="material-symbols-outlined text-[16px]">checklist</span>
          <span>Update Go-Bag Inventory</span>
        </button>
      </div>

      {/* Core Safeguards 2x2 Grid */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-0.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#524436]">
            Core Safeguards
          </h3>
          <span className="text-[11px] font-semibold text-[#005EB2]">All Operational</span>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {/* Tile 1: Offline Map */}
          <div
            onClick={onNavigateToSMS}
            className="cursor-pointer p-3.5 rounded-2xl bg-white shadow-xs border border-[#E9E8E8] flex flex-col justify-between space-y-2 hover:border-[#005EB2]/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-[#D5E3FF] flex items-center justify-center text-[#001B3B]">
                <span className="material-symbols-outlined text-[18px]">map</span>
              </div>
              <span className="material-symbols-outlined text-[#005EB2] text-[16px]">
                check_circle
              </span>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1A1C1C]">Offline Map Pack</h4>
              <p className="text-[11px] text-[#524436] mt-0.5 leading-snug">
                District 17 (42 MB) Cached
              </p>
            </div>
          </div>

          {/* Tile 2: Shelter */}
          <div
            onClick={onNavigateToShelter}
            className="cursor-pointer p-3.5 rounded-2xl bg-white shadow-xs border border-[#E9E8E8] flex flex-col justify-between space-y-2 hover:border-[#005EB2]/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-[#FFDDB7] flex items-center justify-center text-[#2A1700]">
                <span className="material-symbols-outlined text-[18px]">night_shelter</span>
              </div>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#D5E3FF] text-[#001B3B]">
                Open
              </span>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1A1C1C] truncate">{INITIAL_SHELTER.name}</h4>
              <p className="text-[11px] text-[#524436] mt-0.5 leading-snug">
                Sector 17 • 1.4 km
              </p>
            </div>
          </div>

          {/* Tile 3: Emergency SOS */}
          <div
            onClick={onNavigateToSOS}
            className="cursor-pointer p-3.5 rounded-2xl bg-white shadow-xs border border-[#E9E8E8] flex flex-col justify-between space-y-2 hover:border-[#BA1A1A]/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-[#FFDAD6] flex items-center justify-center text-[#BA1A1A]">
                <span className="material-symbols-outlined text-[18px]">sos</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#005EB2]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1A1C1C]">Emergency SOS</h4>
              <p className="text-[11px] text-[#524436] mt-0.5 leading-snug">
                3 Confirmed • Kin & NDRF
              </p>
            </div>
          </div>

          {/* Tile 4: Family Safe Word */}
          <div className="p-3.5 rounded-2xl bg-white shadow-xs border border-[#E9E8E8] flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-[#A7C8FF]/50 flex items-center justify-center text-[#001B3B]">
                <span className="material-symbols-outlined text-[18px]">group</span>
              </div>
              <span className="material-symbols-outlined text-[#005EB2] text-[16px]">sync</span>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1A1C1C]">Family Safe Word</h4>
              <p className="text-[11px] text-[#524436] mt-0.5 leading-snug">
                Synced • "BLUE RIVER"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reassuring Daily Corridor Simulation & CTA */}
      <div className="rounded-2xl bg-gradient-to-br from-white to-[#EFEEED] p-4 shadow-xs border border-[#E9E8E8] space-y-3.5">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#005EB2] flex-shrink-0 flex items-center justify-center text-white shadow-xs">
            <span className="material-symbols-outlined text-[20px]">explore</span>
          </div>
          <div className="space-y-0.5">
            <h4 className="text-xs font-bold text-[#1A1C1C] tracking-tight">
              Daily Corridor Simulation
            </h4>
            <p className="text-xs text-[#524436] leading-relaxed">
              Autonomous route testing validated 4 minutes ago. Your primary high-ground evacuation
              path is verified dry.
            </p>
          </div>
        </div>

        <button
          onClick={onNavigateToRoute}
          className="w-full h-[52px] rounded-xl bg-[#005EB2] hover:bg-[#005EB2]/95 active:scale-[0.99] text-white font-semibold text-sm shadow-md transition-all flex items-center justify-between px-4"
        >
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">alt_route</span>
            <span>Inspect Cached Evacuation Route</span>
          </div>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>

      {/* Go-Bag Modal / Sheet */}
      {showInventoryModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn">
          <div className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl max-h-[80vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-[#E9E8E8]">
              <div>
                <h3 className="text-base font-bold text-[#1A1C1C]">72-Hour Emergency Go-Bag</h3>
                <p className="text-xs text-[#524436]">Tap items to mark as packed</p>
              </div>
              <button
                onClick={() => setShowInventoryModal(false)}
                className="w-8 h-8 rounded-full bg-[#F4F3F3] flex items-center justify-center text-[#1A1C1C]"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="overflow-y-auto py-3 space-y-2 flex-1 no-scrollbar">
              {goBagItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`cursor-pointer p-3 rounded-xl border flex items-center justify-between transition-all ${
                    item.packed
                      ? 'bg-[#F4F3F3] border-transparent text-[#1A1C1C]'
                      : 'bg-[#FAF9F9] border-[#E9E8E8] text-[#524436]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`material-symbols-outlined text-[20px] ${
                        item.packed ? 'text-[#005EB2]' : 'text-[#94A3B8]'
                      }`}
                    >
                      {item.packed ? 'check_circle' : 'radio_button_unchecked'}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold ${item.packed ? 'line-through text-[#524436]' : ''}`}>
                          {item.name}
                        </span>
                        {item.essential && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#FFB248]/25 text-[#704600]">
                            ESSENTIAL
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-[#94A3B8]">{item.note}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#524436]">{item.category}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E9E8E8]">
              <button
                onClick={() => setShowInventoryModal(false)}
                className="w-full h-11 rounded-xl bg-[#005EB2] text-white font-bold text-xs"
              >
                Save & Close ({percentage}% Ready)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
