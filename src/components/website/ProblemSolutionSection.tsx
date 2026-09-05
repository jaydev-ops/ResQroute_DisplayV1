import React from 'react';

export const ProblemSolutionSection: React.FC = () => {
  return (
    <section id="problem" className="w-full py-16 lg:py-24 bg-[#FAF9F9] border-t border-[#E9E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFDAD6] text-[#93000A] text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px] text-[#BA1A1A]">warning</span>
            <span>The Evacuation Navigation Crisis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1C1C] tracking-tight">
            Why Standard Maps Turn Deadly During Flash Floods
          </h2>
          <p className="text-base text-[#524436] leading-relaxed">
            Commercial turn-by-turn navigation apps are engineered for dry-weather traffic optimization.
            During intense monsoons and rapid water rise, their fundamental algorithmic assumptions fail with fatal consequences.
          </p>
        </div>

        {/* Comparison: Commercial GPS vs resQroute */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Box 1: The Fatal Flaws of Commercial GPS */}
          <div className="rounded-3xl bg-white p-6 sm:p-8 border border-[#FFDAD6] shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#FFDAD6]/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFDAD6] text-[#BA1A1A] flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[22px]">cancel</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1A1C1C]">Commercial GPS Defaults</h3>
                  <span className="text-xs text-[#BA1A1A] font-semibold">Speed-Optimized, Terrain-Blind</span>
                </div>
              </div>
              <span className="text-xs font-bold uppercase text-[#BA1A1A] bg-[#FFDAD6] px-2.5 py-1 rounded-full">
                Danger
              </span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#524436]">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#BA1A1A] text-[20px] shrink-0 mt-0.5">
                  trending_down
                </span>
                <div>
                  <strong className="text-[#1A1C1C] block font-bold">Diverts into Depressed Basins</strong>
                  <span>
                    Shortest-path algorithms guide drivers into highway underpasses and riverside culverts
                    simply because speed limits are higher, leading to engine hydro-lock and drownings.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#BA1A1A] text-[20px] shrink-0 mt-0.5">
                  group_remove
                </span>
                <div>
                  <strong className="text-[#1A1C1C] block font-bold">The 'Thundering Herd' Shelter Stampede</strong>
                  <span>
                    Directs all nearby citizens to the single nearest hospital, creating sudden overcrowding
                    and turning families away at the gate while nearby relief pavilions sit empty.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#BA1A1A] text-[20px] shrink-0 mt-0.5">
                  signal_cellular_connected_no_internet_4_bar
                </span>
                <div>
                  <strong className="text-[#1A1C1C] block font-bold">Catastrophic Network Blackout</strong>
                  <span>
                    When flood waters submerge cellular backhaul cables, apps spin on indefinite loading spinners.
                    Zero navigation guidance is delivered without active 4G/5G data.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#BA1A1A] text-[20px] shrink-0 mt-0.5">
                  question_mark
                </span>
                <div>
                  <strong className="text-[#1A1C1C] block font-bold">Opacity: 'Trust the Line'</strong>
                  <span>
                    Commercial systems never explain <em>why</em> a turn is recommended or if an alternate path
                    is submerged, breeding panic when drivers encounter unexpected brown water.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Box 2: resQroute's 4 Invariant Axioms */}
          <div className="rounded-3xl bg-white p-6 sm:p-8 border border-[#D5E3FF] shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#D5E3FF]/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#005EB2] text-white flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[22px]">verified_user</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1A1C1C]">The resQroute Architecture</h3>
                  <span className="text-xs text-[#005EB2] font-semibold">Deterministic Spatial Guardrails</span>
                </div>
              </div>
              <span className="text-xs font-bold uppercase text-[#001B3B] bg-[#D5E3FF] px-2.5 py-1 rounded-full">
                Guaranteed Safe
              </span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#524436]">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#005EB2] text-[20px] shrink-0 mt-0.5">
                  terrain
                </span>
                <div>
                  <strong className="text-[#1A1C1C] block font-bold">Axiom 1: Topological Ridge Routing</strong>
                  <span>
                    Every route calculation factors in Digital Elevation Models (DEM). Routing weights prioritize
                    natural ridge spines (+32m above datum), strictly penalizing depressions and low culverts.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#005EB2] text-[20px] shrink-0 mt-0.5">
                  balance
                </span>
                <div>
                  <strong className="text-[#1A1C1C] block font-bold">Axiom 2: Shelter Quorum & Load Balancing</strong>
                  <span>
                    Dynamic arrival rate telemetry prevents shelter surges. If a haven reaches 80% capacity, incoming
                    traffic is progressively routed to designated backup pavilions before overflow occurs.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#005EB2] text-[20px] shrink-0 mt-0.5">
                  sms
                </span>
                <div>
                  <strong className="text-[#1A1C1C] block font-bold">Axiom 3: 2G SMS Failover & Satellite Compass</strong>
                  <span>
                    When mobile broadband collapses, a lightweight 160-character binary SMS gateway routes queries
                    via cellular control channels, parsing bearing, distance, and safe high-ground headings.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#005EB2] text-[20px] shrink-0 mt-0.5">
                  fact_check
                </span>
                <div>
                  <strong className="text-[#1A1C1C] block font-bold">Axiom 4: Radically Transparent 'Why This Route?'</strong>
                  <span>
                    Side-by-side elevation profiles clearly show evacuees why the shorter road is submerged (e.g. 48cm deep water)
                    and why the 14 min ridge detour ensures safe arrival.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
