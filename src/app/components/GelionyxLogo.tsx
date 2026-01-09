import React from 'react';
import Image from 'next/image';

interface GelionyxLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  useImage?: boolean;
}

export default function GelionyxLogo({ size = 'md', showTagline = false, className = '', useImage = false }: GelionyxLogoProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-3xl md:text-4xl',
    xl: 'text-5xl md:text-6xl',
  };

  const waveSize = {
    sm: { width: 35, height: 6 },
    md: { width: 50, height: 8 },
    lg: { width: 70, height: 12 },
    xl: { width: 100, height: 16 },
  };

  const imageSizes = {
    sm: { width: 120, height: 60 },
    md: { width: 180, height: 90 },
    lg: { width: 240, height: 120 },
    xl: { width: 360, height: 180 },
  };

  if (useImage) {
    return (
      <div className={`flex flex-col items-start ${className}`}>
        <Image 
          src="/logo.png" 
          alt="Gelionyx Logo" 
          width={imageSizes[size].width}
          height={imageSizes[size].height}
          className="object-contain"
          priority
        />
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div className="relative inline-flex items-baseline">
        {/* Brand name with split colors - matching logo exactly */}
        <span className={`${sizeClasses[size]} font-black tracking-tight`} style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          <span className="text-white">Geli</span>
          <span className="text-[#4A90E2] relative inline-block">
            {/* Wavy lines above onyx - matching logo exactly */}
            <div className="absolute -top-2 left-0" style={{ 
              width: waveSize[size].width, 
              height: waveSize[size].height
            }}>
              <svg width={waveSize[size].width} height={waveSize[size].height} viewBox="0 0 50 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Upper wave - darker blue */}
                <path d="M0 6 Q12.5 3, 25 6 T50 6" stroke="#0F4C75" strokeWidth="1.5" fill="none" />
                {/* Lower wave - lighter blue */}
                <path d="M0 8 Q12.5 5, 25 8 T50 8" stroke="#4A90E2" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            onyx
          </span>
        </span>
      </div>
      
      {/* Tagline - matching logo exactly */}
      {showTagline && (
        <p className="text-white text-xs md:text-sm italic mt-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          where water&apos;s tight, we make it <span className="text-[#4A90E2]">right.</span>
        </p>
      )}
    </div>
  );
}

