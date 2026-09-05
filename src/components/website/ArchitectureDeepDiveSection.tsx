import React, { useState } from 'react';
import { ADR_LIST } from '../../data/platformData';
import { ArchitectureDecisionRecord } from '../../types';

export const ArchitectureDeepDiveSection: React.FC = () => {
  const [selectedAdr, setSelectedAdr] = useState<ArchitectureDecisionRecord>(ADR_LIST[0]);

  return (
    <section id="architecture" className="w-full py-16 lg:py-24 bg-[#FAF9F9] border-t border-[#E9E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5E3FF] text-[#001B3B] text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px] text-[#005EB2]">account_tree</span>
            <span>How the Platform Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1C1C] tracking-tight">
            How resQroute Protects You in a Crisis
          </h2>
          <p className="text-base text-[#524436] leading-relaxed">
            In an emergency, technology should give you clarity, not confusion.
            resQroute continuously monitors ground conditions to guide you and your family safely away from danger.
          </p>
        </div>

        {/* Spatial Inundation Pipeline Diagram */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#E9E8E8] shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#005EB2] text-white flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[20px]">hub</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1A1C1C]">Four Steps to Safe Evacuation</h3>
                <p className="text-xs text-[#524436]">From the first warning to verified safe shelter arrival</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              Guaranteed Safety First
            </span>
          </div>

          {/* Flow Stages */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
            {/* Stage 1 */}
            <div className="p-4 rounded-2xl bg-[#F4F3F3] border border-[#E9E8E8] space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#855400] block">
                01 • Live Awareness
              </span>
              <h4 className="text-sm font-bold text-[#1A1C1C]">Gathering Live Disaster Information</h4>
              <p className="text-xs text-[#524436] leading-relaxed">
                We combine information from sensors, satellites, and verified community reports to understand what is happening in real time.
              </p>
            </div>

            {/* Stage 2 */}
            <div className="p-4 rounded-2xl bg-[#F4F3F3] border border-[#E9E8E8] space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#005EB2] block">
                02 • High Ground First
              </span>
              <h4 className="text-sm font-bold text-[#1A1C1C]">Finding the Safest Areas</h4>
              <p className="text-xs text-[#524436] leading-relaxed">
                We scan terrain elevation maps to identify dangerous low-lying flood zones and automatically guide you toward dry, elevated ground.
              </p>
            </div>

            {/* Stage 3 */}
            <div className="p-4 rounded-2xl bg-[#F4F3F3] border border-[#E9E8E8] space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#855400] block">
                03 • Shelter Care
              </span>
              <h4 className="text-sm font-bold text-[#1A1C1C]">Sending People to Safer Shelters</h4>
              <p className="text-xs text-[#524436] leading-relaxed">
                We check shelter capacity live so centers never get overcrowded, gently directing families to nearby facilities with available space.
              </p>
            </div>

            {/* Stage 4 */}
            <div className="p-4 rounded-2xl bg-[#F4F3F3] border border-[#E9E8E8] space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                04 • Offline Lifeline
              </span>
              <h4 className="text-sm font-bold text-[#1A1C1C]">Staying Connected Even When Networks Fail</h4>
              <p className="text-xs text-[#524436] leading-relaxed">
                If cellular towers lose power and mobile internet drops, we automatically switch to simple SMS text messages so you never lose your way.
              </p>
            </div>
          </div>
        </div>

        {/* Architecture Decision Records (ADRs) Explorer */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ADR Selector List */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#524436] px-1">
              Architecture Decision Records (ADRs)
            </span>
            <div className="space-y-2">
              {ADR_LIST.map((adr) => {
                const isSelected = selectedAdr.id === adr.id;
                return (
                  <div
                    key={adr.id}
                    onClick={() => setSelectedAdr(adr)}
                    className={`cursor-pointer p-3.5 rounded-2xl border transition-all ${
                      isSelected
                        ? 'bg-white border-[#005EB2] shadow-sm ring-2 ring-[#005EB2]/10'
                        : 'bg-[#F4F3F3] border-[#E9E8E8] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#005EB2]">{adr.id}</span>
                      <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        {adr.status}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-[#1A1C1C] mt-1 line-clamp-1">{adr.title}</h4>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ADR Detailed Inspector */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white border border-[#E9E8E8] shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-[#E9E8E8]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#005EB2]">{selectedAdr.id}</span>
                  <span className="text-xs font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {selectedAdr.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1A1C1C] mt-1">{selectedAdr.title}</h3>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#524436]">
              <div>
                <strong className="text-[#1A1C1C] block font-bold text-xs uppercase tracking-wider mb-1">
                  Context & Constraints
                </strong>
                <p className="leading-relaxed bg-[#FAF9F9] p-3.5 rounded-2xl border border-[#E9E8E8]">
                  {selectedAdr.context}
                </p>
              </div>

              <div>
                <strong className="text-[#1A1C1C] block font-bold text-xs uppercase tracking-wider mb-1">
                  Architectural Decision
                </strong>
                <p className="leading-relaxed bg-[#D5E3FF]/20 p-3.5 rounded-2xl border border-[#D5E3FF] text-[#001B3B]">
                  {selectedAdr.decision}
                </p>
              </div>

              <div>
                <strong className="text-[#1A1C1C] block font-bold text-xs uppercase tracking-wider mb-1">
                  System Consequences & Guardrails
                </strong>
                <p className="leading-relaxed bg-[#FAF9F9] p-3.5 rounded-2xl border border-[#E9E8E8]">
                  {selectedAdr.consequences}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
