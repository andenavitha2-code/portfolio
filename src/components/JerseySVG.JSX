import React from 'react';

export default function JerseySVG({ 
  id, 
  primaryColor = '#e30613', 
  secondaryColor = '#ffffff', 
  accentColor = '#ffffff',
  sponsorText = 'T', 
  brand = 'adidas',
  stripeType = 'none',
  customPattern = null
}) {
  return (
    <svg className="w-full h-full drop-shadow-2xl hover:scale-105 transition-transform duration-300" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Clip path to keep stripes/patterns inside the jersey outline */}
        <clipPath id={`jersey-clip-${id}`}>
          <path d="M 50 40 
                   L 70 30 
                   L 100 37 
                   L 130 30 
                   L 150 40 
                   L 180 65 
                   L 165 95 
                   L 148 83 
                   L 148 210 
                   L 52 210 
                   L 52 83 
                   L 35 95 
                   L 20 65 Z" 
                strokeLinejoin="round"
          />
        </clipPath>
        
        {/* Custom Patterns */}
        <pattern id="zebra-pattern" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="20" height="40" fill="#000000"/>
          <rect x="20" width="20" height="40" fill="#ffffff"/>
        </pattern>

        <pattern id="tiger-pattern" width="100" height="40" patternUnits="userSpaceOnUse">
          <path d="M 0 10 Q 25 20 50 10 Q 75 0 100 10 L 100 25 Q 75 15 50 25 Q 25 35 0 25 Z" fill="#cccccc" opacity="0.3"/>
        </pattern>
      </defs>

      {/* Shadow background glow */}
      <ellipse cx="100" cy="215" rx="55" ry="12" fill="#000000" opacity="0.4" filter="blur(8px)" />

      {/* Base Jersey Shape inside Clip */}
      <g clipPath={`url(#jersey-clip-${id})`}>
        {/* Main Base Color */}
        <rect width="200" height="240" fill={primaryColor} />

        {/* Stripes / Patterns */}
        {stripeType === 'vertical' && (
          <g>
            <rect x="62" width="16" height="240" fill={secondaryColor} />
            <rect x="92" width="16" height="240" fill={secondaryColor} />
            <rect x="122" width="16" height="240" fill={secondaryColor} />
            <rect x="42" width="8" height="240" fill={secondaryColor} opacity="0.5" />
            <rect x="150" width="8" height="240" fill={secondaryColor} opacity="0.5" />
          </g>
        )}

        {stripeType === 'zebra' && (
          <rect width="200" height="240" fill="url(#zebra-pattern)" />
        )}

        {stripeType === 'tiger' && (
          <g>
            <rect width="200" height="240" fill={primaryColor} />
            <rect width="200" height="240" fill="url(#tiger-pattern)" />
          </g>
        )}

        {stripeType === 'center-stripes' && (
          <g>
            {/* White side borders, red center */}
            <rect x="85" width="30" height="240" fill={accentColor} />
            <rect x="92" width="16" height="240" fill={secondaryColor} />
          </g>
        )}

        {stripeType === 'waves' && (
          <g opacity="0.3">
            <path d="M-50 60 C 20 80 40 40 100 60 C 160 80 180 40 250 60 L 250 240 L -50 240 Z" fill={secondaryColor} />
            <path d="M-50 120 C 20 140 40 100 100 120 C 160 140 180 100 250 120 L 250 240 L -50 240 Z" fill={secondaryColor} opacity="0.5" />
          </g>
        )}

        {stripeType === 'roses' && (
          <g opacity="0.25">
            {/* Circular rose shapes simulation */}
            <circle cx="65" cy="110" r="22" stroke={secondaryColor} strokeWidth="3" fill="none" />
            <circle cx="65" cy="110" r="12" stroke={secondaryColor} strokeWidth="2" fill="none" />
            <circle cx="135" cy="110" r="22" stroke={secondaryColor} strokeWidth="3" fill="none" />
            <circle cx="135" cy="110" r="12" stroke={secondaryColor} strokeWidth="2" fill="none" />
            <circle cx="100" cy="160" r="28" stroke={secondaryColor} strokeWidth="3" fill="none" />
            <circle cx="100" cy="160" r="15" stroke={secondaryColor} strokeWidth="2" fill="none" />
          </g>
        )}

        {/* Custom manual paths / shapes */}
        {customPattern}

        {/* Collar Detailing */}
        <path d="M 70 30 Q 100 55 130 30" fill="none" stroke={secondaryColor} strokeWidth="5" />
        <path d="M 70 30 Q 100 50 130 30" fill="none" stroke={primaryColor} strokeWidth="3" />

        {/* Sleeves Trims */}
        <path d="M 20 65 L 35 95" stroke={secondaryColor} strokeWidth="4" />
        <path d="M 180 65 L 165 95" stroke={secondaryColor} strokeWidth="4" />

        {/* Team Logo Crest (Right Chest from perspective, so Left side of drawing) */}
        <circle cx="75" cy="70" r="8" fill={accentColor} />
        <circle cx="75" cy="70" r="6" fill={primaryColor} />
        <polygon points="75,66 78,73 72,73" fill={accentColor} />

        {/* Brand Logo (Left Chest, Right side of drawing) */}
        {brand === 'adidas' && (
          <g transform="translate(118, 66) scale(0.7)" fill={accentColor}>
            <rect x="0" y="8" width="3" height="4" transform="rotate(-30)" />
            <rect x="5" y="5" width="3" height="7" transform="rotate(-30)" />
            <rect x="10" y="2" width="3" height="10" transform="rotate(-30)" />
          </g>
        )}
        {brand === 'nike' && (
          <path d="M 118 69 Q 123 68 128 65 Q 124 72 119 72 Q 116 72 118 69 Z" fill={accentColor} />
        )}
        {brand === 'jordan' && (
          <g transform="translate(120, 65) scale(0.35)" fill={accentColor}>
            <circle cx="12" cy="5" r="2.5" />
            <path d="M 12 8 L 8 18 L 4 19 L 7 24 L 12 16 L 17 24 L 20 19 L 16 18 Z" />
          </g>
        )}

        {/* Sponsor Banner in Center */}
        {sponsorText && (
          <g transform="translate(100, 115)">
            {sponsorText === 'T' && (
              <g fill={secondaryColor}>
                <rect x="-18" y="-12" width="36" height="4" />
                <rect x="-4" y="-8" width="8" height="22" />
                {/* Dots around T sponsor typical of Telekom */}
                <circle cx="-14" cy="2" r="2.5" />
                <circle cx="14" cy="2" r="2.5" />
              </g>
            )}
            {sponsorText === 'Jeep' && (
              <text x="0" y="4" fill={secondaryColor} fontFamily="Impact, Arial Black, sans-serif" fontSize="22" textAnchor="middle" letterSpacing="1">
                Jeep
              </text>
            )}
            {sponsorText === 'chelsea' && (
              <g>
                {/* Simulated Trivago sponsor or Three logo */}
                <circle cx="0" cy="-2" r="12" stroke={secondaryColor} strokeWidth="3" fill="none" />
                <text x="0" y="5" fill={secondaryColor} fontFamily="sans-serif" fontWeight="900" fontSize="12" textAnchor="middle">3</text>
              </g>
            )}
            {sponsorText === 'TeamViewer' && (
              <g fill={secondaryColor}>
                {/* TeamViewer logo representation */}
                <rect x="-30" y="-8" width="60" height="15" rx="3" fill="none" stroke={secondaryColor} strokeWidth="2" />
                <circle cx="-18" cy="-0.5" r="4" fill={secondaryColor} />
                <polygon points="-12,-3.5 -5,-0.5 -12,2.5" fill={primaryColor} />
                <text x="8" y="4" fill={secondaryColor} fontFamily="sans-serif" fontWeight="bold" fontSize="8" textAnchor="middle">TeamViewer</text>
              </g>
            )}
            {sponsorText === 'Spotify' && (
              <g fill={secondaryColor} transform="translate(0, -4) scale(0.9)">
                {/* Spotify crest and text */}
                <circle cx="-20" cy="4" r="8" fill="none" stroke={secondaryColor} strokeWidth="2" />
                <path d="M-24 2 Q-20 -1 -16 2" stroke={secondaryColor} strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <path d="M-23 4 Q-20 2 -17 4" stroke={secondaryColor} strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <path d="M-22 6 Q-20 5 -18 6" stroke={secondaryColor} strokeWidth="1" strokeLinecap="round" fill="none" />
                <text x="12" y="8" fill={secondaryColor} fontFamily="Helvetica Neue, sans-serif" fontWeight="bold" fontSize="11" textAnchor="middle" letterSpacing="0.5">Spotify</text>
              </g>
            )}
            {sponsorText === 'ALL' && (
              <g fill={secondaryColor}>
                <text x="0" y="-2" fill={secondaryColor} fontFamily="sans-serif" fontWeight="900" fontSize="14" textAnchor="middle" letterSpacing="2">ALL</text>
                <text x="0" y="8" fill={secondaryColor} fontFamily="sans-serif" fontSize="5" textAnchor="middle" letterSpacing="1">ACCOR LIVE LIMITLESS</text>
                <line x1="-25" y1="1" x2="25" y2="1" stroke={secondaryColor} strokeWidth="1" />
              </g>
            )}
          </g>
        )}
      </g>

      {/* Outlined border for realism */}
      <path d="M 50 40 
               L 70 30 
               L 100 37 
               L 130 30 
               L 150 40 
               L 180 65 
               L 165 95 
               L 148 83 
               L 148 210 
               L 52 210 
               L 52 83 
               L 35 95 
               L 20 65 Z" 
            stroke={secondaryColor} 
            strokeWidth="2.5" 
            strokeLinejoin="round" 
            fill="none" 
            opacity="0.8"
      />
    </svg>
  );
}
