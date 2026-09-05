import React, { useState } from 'react';

export const ApiDocsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'route' | 'shelter' | 'sms'>('route');
  const [copied, setCopied] = useState(false);

  const snippets = {
    route: {
      endpoint: 'POST /api/v1/routes/evacuate',
      desc: 'Calculates the mathematically guaranteed safest high-ground corridor factoring in real-time PostGIS water inundation polygons and DEM elevation crests.',
      curl: `curl -X POST https://api.resqroute.org/v1/routes/evacuate \\
  -H "Authorization: Bearer <API_TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "origin": { "lat": 19.0760, "lng": 72.8777 },
    "mobility_constraints": {
      "wheelchair_accessible": true,
      "max_grade_incline_pct": 6.0,
      "avoid_stairs": true
    },
    "destination_type": "HIGH_GROUND_SAFE_HAVEN"
  }'`,
      response: `{
  "route_id": "route_ridge_024",
  "status": "CLEAR_AND_DRY",
  "corridor_name": "Ridge Crest Way High-Ground Corridor",
  "elevation_gain_m": 32.0,
  "travel_time_seconds": 840,
  "distance_meters": 3400,
  "destination_shelter": {
    "id": "shelter-st-jude-17",
    "name": "St. Jude Relief Pavilion",
    "available_beds": 55,
    "occupancy_pct": 82
  },
  "hazard_mitigation": {
    "avoided_hazards": ["Canal Rd Submerged 48cm"],
    "safety_rationale": "High-ground ridge route avoids flooded basin."
  }
}`,
    },
    shelter: {
      endpoint: 'GET /api/v1/shelters/{id}/telemetry',
      desc: 'Returns live shelter occupancy, arriving flux rate per minute, medical facility status, and quorum capacity to prevent the thundering herd problem.',
      curl: `curl -X GET https://api.resqroute.org/v1/shelters/shelter-st-jude-17/telemetry\\
  -H "Authorization: Bearer <API_TOKEN>"`,
      response: `{
  "shelter_id": "shelter-st-jude-17",
  "name": "St. Jude Relief Pavilion",
  "operational_status": "OPEN_ACCEPTING_EVACUEES",
  "total_capacity": 350,
  "current_occupancy": 286,
  "occupancy_percentage": 82,
  "arrival_rate_per_min": 4.2,
  "wheelchair_beds_remaining": 12,
  "backup_generator_active": true,
  "clean_water_potable": true,
  "overflow_cascade_target": "shelter-ridge-annex-18"
}`,
    },
    sms: {
      endpoint: 'POST /api/v1/sms/webhook',
      desc: 'Inbound carrier webhook for 2G cellular control channel SMS queries. Encodes concise routing instructions within a single 160-character segment.',
      curl: `curl -X POST https://api.resqroute.org/v1/sms/webhook \\
  -H "X-Carrier-Signature: sha256=..." \\
  -d "From=+919820011223&Body=EMERGENCY LOC 19.0760,72.8777 WHEELCHAIR"`,
      response: `{
  "outbound_sms_body": "resQroute: Shelter B • 14 min walk • Safe high ground. Ridge Road is dry (+32m). Wheelchair: YES. 55 beds open. Heading: 024 NNE. Sent via 2G Fallback.",
  "segments_used": 1,
  "character_count": 154
}`,
    },
  };

  const currentSnippet = snippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard?.writeText(currentSnippet.curl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="api" className="w-full py-16 lg:py-24 bg-white border-t border-[#E9E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5E3FF] text-[#001B3B] text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px] text-[#005EB2]">api</span>
            <span>Developer & Municipal APIs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1C1C] tracking-tight">
            REST & 2G Fallback Interface Specifications
          </h2>
          <p className="text-base text-[#524436] leading-relaxed">
            Open disaster telemetry APIs built for high availability.
            Municipal disaster agencies, search-and-rescue teams, and civic volunteer networks connect via
            secure, low-latency endpoints.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="mt-8 flex gap-2">
          <button
            onClick={() => setActiveTab('route')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'route'
                ? 'bg-[#005EB2] text-white shadow-xs'
                : 'bg-[#F4F3F3] text-[#524436] hover:bg-[#EFEEED]'
            }`}
          >
            POST /routes/evacuate
          </button>
          <button
            onClick={() => setActiveTab('shelter')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'shelter'
                ? 'bg-[#005EB2] text-white shadow-xs'
                : 'bg-[#F4F3F3] text-[#524436] hover:bg-[#EFEEED]'
            }`}
          >
            GET /shelters/telemetry
          </button>
          <button
            onClick={() => setActiveTab('sms')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'sms'
                ? 'bg-[#005EB2] text-white shadow-xs'
                : 'bg-[#F4F3F3] text-[#524436] hover:bg-[#EFEEED]'
            }`}
          >
            POST /sms/webhook (2G)
          </button>
        </div>

        {/* Code Visualizer Box */}
        <div className="mt-6 rounded-3xl bg-[#1A1C1C] text-white p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold text-[#4597FE] block">
                {currentSnippet.endpoint}
              </span>
              <p className="text-xs text-white/70 mt-1">{currentSnippet.desc}</p>
            </div>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white flex items-center gap-1.5 transition-colors self-start sm:self-auto"
            >
              <span className="material-symbols-outlined text-[16px]">
                {copied ? 'check' : 'content_copy'}
              </span>
              <span>{copied ? 'Copied cURL' : 'Copy cURL'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Request */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-white/60">
                cURL Request
              </span>
              <pre className="p-4 rounded-2xl bg-black/50 text-emerald-400 font-mono text-xs overflow-x-auto leading-relaxed border border-white/5">
                {currentSnippet.curl}
              </pre>
            </div>

            {/* Response */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-white/60">
                JSON Response
              </span>
              <pre className="p-4 rounded-2xl bg-black/50 text-[#93C5FD] font-mono text-xs overflow-x-auto leading-relaxed border border-white/5 max-h-80">
                {currentSnippet.response}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
