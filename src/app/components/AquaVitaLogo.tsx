import React from 'react';

interface AquaVitaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
}

export default function AquaVitaLogo({ size = 'md', showTagline = false, className = '' }: AquaVitaLogoProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-3xl md:text-4xl',
    xl: 'text-5xl md:text-6xl',
  };

  const waveSize = {
    sm: { width: 40, height: 8 },
    md: { width: 60, height: 12 },
    lg: { width: 80, height: 16 },
    xl: { width: 120, height: 24 },
  };

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div className="relative inline-flex items-baseline">
        {/* Brand name with split colors */}
        <span className={`${sizeClasses[size]} font-black tracking-tight font-instrument-serif`}>
          <span className="text-white">Aqua</span>
          <span className="text-[#4A90E2] relative inline-block">
            {/* Wavy lines above Vita */}
            <div className="absolute -top-3 left-0" style={{ 
              width: waveSize[size].width, 
              height: waveSize[size].height
            }}>
              <svg width={waveSize[size].width} height={waveSize[size].height} viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Upper wave - darker blue */}
                <path d="M0 8 Q15 4, 30 8 T60 8" stroke="#0F4C75" strokeWidth="2" fill="none" />
                {/* Lower wave - lighter blue */}
                <path d="M0 10 Q15 6, 30 10 T60 10" stroke="#4A90E2" strokeWidth="2" fill="none" />
              </svg>
            </div>
            Vita
          </span>
        </span>
      </div>
      
      {/* Tagline */}
      {showTagline && (
        <p className="text-white text-xs md:text-sm italic font-manrope mt-1 opacity-90">
          where water&apos;s tight, we make it right.
        </p>
      )}
    </div>
  );
}

