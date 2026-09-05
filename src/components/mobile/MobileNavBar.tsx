import React from 'react';
import { MobileTab } from '../../types';

interface MobileNavBarProps {
  activeTab: MobileTab;
  onTabChange: (tab: MobileTab) => void;
  activeEmergency?: boolean;
}

export const MobileNavBar: React.FC<MobileNavBarProps> = ({
  activeTab,
  onTabChange,
  activeEmergency = false,
}) => {
  const tabs = [
    {
      id: 'radar' as MobileTab,
      label: 'Radar',
      icon: 'radar',
      badge: activeEmergency ? '!' : undefined,
    },
    {
      id: 'preparedness' as MobileTab,
      label: 'Kit & Plan',
      icon: 'medical_services',
    },
    {
      id: 'safe_zones' as MobileTab,
      label: 'Safe Zones',
      icon: 'location_on',
    },
    {
      id: 'dossier' as MobileTab,
      label: 'Dossier',
      icon: 'verified_user',
    },
    {
      id: 'profile' as MobileTab,
      label: 'Profile',
      icon: 'account_circle',
    },
  ];

  return (
    <nav className="relative z-30 shrink-0 w-full bg-[#FAF9F9]/95 backdrop-blur-xl border-t border-[#E9E8E8] shadow-[0_-4px_16px_rgba(0,0,0,0.03)] px-1 pt-1 pb-1">
      <div className="w-full max-w-full mx-auto h-14 flex items-center justify-between px-0.5">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex flex-col items-center justify-center flex-1 min-w-0 h-12 px-0.5 py-1 rounded-xl transition-colors ${
                isActive
                  ? 'text-[#005EB2] font-semibold'
                  : 'text-[#524436] hover:text-[#1A1C1C]'
              }`}
            >
              <div className="relative flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-[22px] transition-transform"
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {tab.icon}
                </span>
                {tab.badge && (
                  <span className="absolute -top-1 -right-2 w-3.5 h-3.5 rounded-full bg-[#BA1A1A] text-white text-[9px] font-black flex items-center justify-center">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] tracking-tight mt-0.5 leading-none font-medium truncate max-w-full text-center">
                {tab.label}
              </span>
              {isActive && (
                <span className="absolute bottom-0.5 w-4 h-0.5 rounded-full bg-[#005EB2]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
