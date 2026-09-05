import React from 'react';

interface IPhoneDeviceFrameProps {
  children: React.ReactNode;
  currentTime?: string;
  isStandalone?: boolean;
}

export const IPhoneDeviceFrame: React.FC<IPhoneDeviceFrameProps> = ({
  children,
  currentTime = '09:41',
  isStandalone = false,
}) => {
  if (isStandalone) {
    return <div className="w-full min-h-screen bg-[#FAF9F9] flex flex-col">{children}</div>;
  }

  return (
    <div className="relative w-full max-w-[385px] mx-auto my-2 sm:my-4 transition-all duration-300">
      {/* Outer Titanium Frame */}
      <div className="relative w-full h-[740px] sm:h-[812px] bg-[#1a1c1e] rounded-[44px] sm:rounded-[52px] p-2 sm:p-[11px] shadow-[0_25px_70px_rgba(0,0,0,0.35),0_10px_30px_rgba(0,0,0,0.2),inset_0_0_2px_2px_rgba(255,255,255,0.15)] ring-1 ring-black/40">
        {/* Hardware side buttons - visible on desktop/tablet to prevent horizontal phone overflow */}
        <div className="hidden sm:block absolute -left-[14px] top-[115px] w-[3px] h-[28px] bg-[#2a2c30] rounded-l-sm" />
        <div className="hidden sm:block absolute -left-[14px] top-[160px] w-[3px] h-[50px] bg-[#2a2c30] rounded-l-sm" />
        <div className="hidden sm:block absolute -left-[14px] top-[220px] w-[3px] h-[50px] bg-[#2a2c30] rounded-l-sm" />
        <div className="hidden sm:block absolute -right-[14px] top-[170px] w-[3px] h-[75px] bg-[#2a2c30] rounded-r-sm" />

        {/* Screen Glass Surface */}
        <div className="relative w-full h-full bg-[#FAF9F9] rounded-[36px] sm:rounded-[42px] overflow-hidden flex flex-col border border-black/10 select-none">
          {/* Status Bar */}
          <div className="absolute top-0 inset-x-0 h-11 z-50 px-6 flex items-center justify-between text-[13px] font-semibold text-[#1A1C1C] pointer-events-none bg-gradient-to-b from-[#FAF9F9]/90 to-transparent">
            <span>{currentTime}</span>
            {/* Dynamic Island */}
            <div className="w-[105px] h-[26px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-sm pointer-events-auto">
              <span className="w-2.5 h-2.5 rounded-full bg-[#005EB2] animate-pulse" title="resQroute Live Telemetry Active" />
              <div className="flex items-center gap-1">
                <span className="text-[9px] font-bold text-white tracking-wider font-mono">LIVE</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
            </div>
            {/* Status Icons */}
            <div className="flex items-center gap-1 text-[#1A1C1C]">
              <span className="text-[11px] font-bold">5G</span>
              <span className="material-symbols-outlined text-[15px]">wifi</span>
              <span className="material-symbols-outlined text-[17px] -rotate-90">battery_full_alt</span>
            </div>
          </div>

          {/* Main App Canvas Inside Frame */}
          <div className="relative flex-1 w-full h-full overflow-hidden pt-10 pb-1 flex flex-col">
            {children}
          </div>

          {/* iOS Home Indicator Bar */}
          <div className="absolute bottom-0.5 inset-x-0 h-4 flex items-center justify-center pointer-events-none z-40">
            <div className="w-28 h-1 bg-[#1A1C1C]/20 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
