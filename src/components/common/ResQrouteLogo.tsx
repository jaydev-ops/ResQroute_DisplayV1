import React from 'react';

interface ResQrouteLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
}

export const ResQrouteLogo: React.FC<ResQrouteLogoProps> = ({
  className = '',
  size = 40,
  showText = false,
  textColor = 'text-[#1A1C1C]',
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Official Circular Pin & Hazard Shield Emblem */}
      <svg
        viewBox="0 0 800 800"
        width={size}
        height={size}
        className="shrink-0 drop-shadow-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="resQroute Official Logo"
      >
        {/* Black Circular Badge Base */}
        <rect width="800" height="800" rx="400" fill="#000000" />

        {/* Outer Perimeter Hazard Shield */}
        <circle cx="400" cy="360" r="230" stroke="#FFFFFF" strokeWidth="8" />
        <line x1="400" y1="130" x2="400" y2="180" stroke="#FFFFFF" strokeWidth="5" />
        <line x1="170" y1="360" x2="220" y2="360" stroke="#FFFFFF" strokeWidth="5" />
        <line x1="580" y1="360" x2="630" y2="360" stroke="#FFFFFF" strokeWidth="5" />

        {/* Top-Left: Storm Cloud, Rain & Lightning */}
        <g transform="translate(240, 160)" fill="#FFFFFF">
          <path d="M45,35 Q30,35 25,48 Q10,50 12,65 Q12,78 28,78 L85,78 Q100,78 100,64 Q100,52 88,50 Q88,35 70,35 Q60,35 55,40 Q52,35 45,35 Z" />
          <line x1="25" y1="88" x2="20" y2="102" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
          <line x1="42" y1="88" x2="37" y2="102" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
          <line x1="60" y1="88" x2="55" y2="102" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
          <polygon points="75,80 58,105 70,105 52,135 88,98 72,98" />
        </g>

        {/* Bottom-Left: Ocean Flood & Tsunami Surge */}
        <g transform="translate(195, 305)" fill="#FFFFFF">
          <path d="M15,90 C30,70 55,50 85,55 C95,57 105,65 100,75 C95,85 80,82 75,75 C65,65 50,68 40,80 C32,90 25,98 15,90 Z" />
          <path d="M10,120 C35,95 70,85 105,95 C115,98 120,108 112,118 C105,125 92,122 88,115 C78,105 58,105 45,118 L10,120 Z" />
          <circle cx="95" cy="50" r="4" />
          <circle cx="108" cy="62" r="3" />
          <circle cx="118" cy="85" r="4" />
          <circle cx="30" cy="60" r="3.5" />
        </g>

        {/* Top-Right: Gale Wind Spirals & Debris */}
        <g transform="translate(480, 160)" fill="#FFFFFF">
          <path d="M10,40 C35,28 75,25 95,45 C105,55 100,68 88,68 C76,68 75,55 85,48" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M30,65 C55,55 85,55 105,72 C112,78 110,88 100,88" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <polygon points="40,25 48,22 45,30 38,28" />
          <polygon points="75,18 82,14 80,22" />
          <circle cx="118" cy="55" r="5" />
          <circle cx="132" cy="70" r="4" />
        </g>

        {/* Bottom-Right: Earthquake Fissure & Collapsing Structure */}
        <g transform="translate(490, 275)" fill="#FFFFFF">
          <g transform="rotate(14 60 70)">
            <path d="M40,20 L80,20 L80,100 L40,100 Z" />
            <rect x="46" y="28" width="8" height="10" rx="1" fill="#000000" />
            <rect x="62" y="28" width="8" height="10" rx="1" fill="#000000" />
            <rect x="46" y="46" width="8" height="10" rx="1" fill="#000000" />
            <rect x="62" y="46" width="8" height="10" rx="1" fill="#000000" />
            <rect x="46" y="64" width="8" height="10" rx="1" fill="#000000" />
            <rect x="62" y="64" width="8" height="10" rx="1" fill="#000000" />
          </g>
          <path d="M25,125 L45,105 L60,118 L80,95 L100,112 L120,85 L135,100" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M35,138 L55,122 L72,132 L95,115 L115,128" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>

        {/* Central Map Pin Location Marker */}
        <path d="M400,165 C285,165 195,255 195,370 C195,445 235,510 295,548 L400,645 L460,535 C565,505 605,420 605,370 C605,255 515,165 400,165 Z" fill="#FFFFFF" />
        <path d="M400,195 C305,195 228,272 228,367 C228,425 258,477 305,508 L400,600 L445,502 C515,480 572,430 572,367 C572,272 495,195 400,195 Z" fill="#000000" />

        {/* Winding Evacuation Road with Perspective */}
        <path d="M295,510 C320,470 380,455 350,405 C335,380 355,355 385,350 L415,350 C445,355 465,380 450,405 C420,455 480,470 505,510 Z" fill="#FFFFFF" />
        <path d="M305,512 C330,473 388,458 358,408 C345,385 363,362 390,358 L410,358 C437,362 455,385 442,408 C412,458 470,473 495,512 Z" fill="#000000" />

        {/* Road Lane Center Markings */}
        <path d="M400,370 L400,385" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M396,400 C392,415 390,425 388,435" stroke="#FFFFFF" strokeWidth="5.5" strokeLinecap="round" fill="none" />
        <path d="M386,450 C384,465 382,475 378,488" stroke="#FFFFFF" strokeWidth="6.5" strokeLinecap="round" fill="none" />

        {/* Safe Shelter & Family Inside */}
        <g transform="translate(400, 310)" fill="#FFFFFF">
          <polygon points="0,-42 -50,-2 50,-2" />
          <rect x="22" y="-34" width="7" height="16" />
          <path d="M-38, -2 L-38,36 L38,36 L38,-2 Z" />
          <path d="M-22,36 L-22,12 C-22,0 22,0 22,12 L22,36 Z" fill="#000000" />
          <circle cx="-11" cy="14" r="3.5" />
          <path d="M-16,34 C-16,23 -6,23 -6,34 Z" />
          <circle cx="0" cy="18" r="3" />
          <path d="M-5,34 C-5,26 5,26 5,34 Z" />
          <circle cx="11" cy="14" r="3.5" />
          <path d="M6,34 C6,23 16,23 16,34 Z" />
        </g>
      </svg>

      {/* Brand Wordmark if requested */}
      {showText && (
        <div className="flex flex-col">
          <span className={`text-lg font-black tracking-tight ${textColor}`}>
            Res<span className="text-[#005EB2]">Q</span>route
          </span>
          <span className="text-[11px] text-[#524436] font-medium tracking-normal hidden sm:block">
            Life-Critical Evacuation & Shelter Intelligence
          </span>
        </div>
      )}
    </div>
  );
};
