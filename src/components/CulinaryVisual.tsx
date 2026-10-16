import React from 'react';

interface CulinaryVisualProps {
  type: 'hero' | 'sapi' | 'ayam' | 'ikan' | 'kuah';
  className?: string;
}

export const CulinaryVisual: React.FC<CulinaryVisualProps> = ({ type, className = '' }) => {
  if (type === 'hero') {
    return (
      <div className={`relative w-full h-full min-h-[420px] bg-[#000000] overflow-hidden flex items-center justify-center ${className}`}>
        {/* Atmospheric ambient dark luxury spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#202020]/70 via-[#101010]/90 to-[#000000]"></div>
        
        {/* Geometric Hexagonal grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-grid" width="40" height="69.282" patternUnits="userSpaceOnUse" patternTransform="scale(1)">
              <path d="M 40 0 L 20 11.547 L 0 0 L 0 23.094 L 20 34.641 L 40 23.094 Z M 0 34.641 L 20 46.188 L 0 57.735 L 0 80.829 L 20 92.376 L 40 80.829 L 40 57.735 L 20 46.188 Z" fill="none" stroke="#FFC000" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-grid)" />
        </svg>

        {/* Central Masterpiece Stage Plate */}
        <div className="relative z-10 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] flex items-center justify-center">
          {/* Obsidian stone pedestal rim */}
          <div className="absolute inset-4 bg-[#141414] border border-[#313131] rotate-45 shadow-[0_0_80px_rgba(255,192,0,0.08)] flex items-center justify-center">
            <div className="w-[85%] h-[85%] border border-[#FFC000]/20 flex items-center justify-center">
              <div className="w-[70%] h-[70%] bg-[#080808] border border-[#202020]"></div>
            </div>
          </div>

          {/* Sliced Gourmet Tahu Bakso Vector Illustration */}
          <svg className="relative z-20 w-64 h-64 sm:w-80 sm:h-80 drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Ambient hot steam paths */}
            <path d="M120 70 C125 40 110 30 120 10" stroke="rgba(255,255,255,0.25)" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 8" />
            <path d="M150 60 C155 35 140 25 150 5" stroke="rgba(255,192,0,0.3)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="5 7" />
            <path d="M180 75 C175 45 190 35 180 15" stroke="rgba(255,255,255,0.2)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 6" />

            {/* Sliced Triangle Tahu Shape with Crisp Golden Edge */}
            <path d="M60 220 L150 70 L240 220 Z" fill="#99582A" stroke="#FFC000" strokeWidth="2" />
            {/* Tahu Skin Texture & Shading */}
            <path d="M64 218 L150 75 L150 218 Z" fill="#7F441E" />
            <path d="M150 75 L236 218 L150 218 Z" fill="#B06530" />

            {/* Dense 85.7% Beef Core (Exposed Cross-Section) */}
            <path d="M90 205 L150 100 L210 205 Z" fill="#4A2511" stroke="#331A0C" strokeWidth="1.5" />
            {/* Minced Beef Granules / High Meat Density Texture */}
            <circle cx="125" cy="180" r="7" fill="#6B371E" />
            <circle cx="145" cy="175" r="9" fill="#5A2E19" />
            <circle cx="165" cy="185" r="6" fill="#7A3E22" />
            <circle cx="135" cy="160" r="8" fill="#532915" />
            <circle cx="155" cy="155" r="7" fill="#6B371E" />
            <circle cx="150" cy="135" r="8" fill="#462210" />
            <circle cx="140" cy="195" r="6" fill="#61331B" />
            <circle cx="160" cy="195" r="7" fill="#502714" />
            <circle cx="115" cy="195" r="5" fill="#6B371E" />
            <circle cx="180" cy="195" r="5" fill="#5A2E19" />

            {/* Meat Glistening Specular Highlights */}
            <ellipse cx="148" cy="145" rx="14" ry="4" fill="rgba(255,255,255,0.2)" />
            <ellipse cx="138" cy="170" rx="10" ry="3" fill="rgba(255,192,0,0.3)" />

            {/* Golden crispy exterior seam */}
            <path d="M60 220 L150 70" stroke="#FFC000" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
            <path d="M150 70 L240 220" stroke="#FFCE3E" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          </svg>

          {/* Floating Meat Ratio Seal */}
          <div className="absolute -bottom-2 sm:-bottom-4 bg-[#000000] border border-[#FFC000] px-4 py-2 font-mono text-center shadow-lg">
            <span className="text-[10px] uppercase text-[#969696] tracking-widest block">KOMPOSISI MURNI</span>
            <span className="text-sm sm:text-base font-bold text-[#FFC000] tracking-wider">85.7% DAGING ASLI</span>
          </div>
        </div>
      </div>
    );
  }

  // Product Card Visuals (Sapi, Ayam, Ikan, Kuah)
  const isSapi = type === 'sapi';
  const isAyam = type === 'ayam';
  const isIkan = type === 'ikan';
  const isKuah = type === 'kuah';

  return (
    <div className={`relative w-full h-56 bg-[#141414] border-b border-[#202020] overflow-hidden flex items-center justify-center ${className}`}>
      {/* Background dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#141414] to-[#1F1F1F]"></div>
      
      {/* Subtle radial glow */}
      <div 
        className="absolute w-48 h-48 rounded-full blur-2xl opacity-20"
        style={{
          backgroundColor: isSapi ? '#FFC000' : isAyam ? '#FFA500' : isIkan ? '#29ABE2' : '#E63946'
        }}
      ></div>

      {isKuah ? (
        // Bakso Kuah Illustration
        <svg className="relative z-10 w-44 h-44 drop-shadow-xl" viewBox="0 0 200 200" fill="none">
          {/* Steam */}
          <path d="M90 40 C95 25 85 15 90 5" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
          <path d="M110 35 C115 20 105 10 110 0" stroke="rgba(255,192,0,0.5)" strokeWidth="2" strokeLinecap="round" />

          {/* Matte Black Ceramic Bowl */}
          <ellipse cx="100" cy="140" rx="75" ry="32" fill="#0A0A0A" stroke="#313131" strokeWidth="2" />
          <ellipse cx="100" cy="115" rx="70" ry="25" fill="#181818" stroke="#383838" strokeWidth="1" />
          {/* Golden Savory Broth */}
          <ellipse cx="100" cy="116" rx="64" ry="20" fill="#785918" opacity="0.85" />
          <ellipse cx="100" cy="116" rx="60" ry="18" fill="#B3862A" opacity="0.6" />

          {/* Floating Meatballs */}
          {/* Meatball 1 */}
          <circle cx="85" cy="112" r="16" fill="#4A2511" stroke="#30180B" strokeWidth="1" />
          <circle cx="82" cy="108" r="3" fill="#6B371E" />
          <ellipse cx="88" cy="106" rx="5" ry="2" fill="rgba(255,255,255,0.25)" />

          {/* Meatball 2 */}
          <circle cx="115" cy="114" r="15" fill="#522913" stroke="#30180B" strokeWidth="1" />
          <circle cx="112" cy="110" r="3" fill="#6E391C" />

          {/* Meatball 3 (Front Center) */}
          <circle cx="100" cy="122" r="17" fill="#44210E" stroke="#251206" strokeWidth="1.5" />
          <circle cx="98" cy="118" r="4" fill="#633118" />
          <ellipse cx="104" cy="116" rx="6" ry="2" fill="rgba(255,255,255,0.3)" />

          {/* Fresh Celery & Crispy Fried Shallots */}
          <path d="M72 120 Q75 116 80 120" stroke="#48BB78" strokeWidth="2" strokeLinecap="round" />
          <path d="M125 122 Q128 118 132 122" stroke="#48BB78" strokeWidth="2" strokeLinecap="round" />
          <circle cx="93" cy="126" r="1.5" fill="#D69E2E" />
          <circle cx="108" cy="128" r="1.5" fill="#C05621" />
        </svg>
      ) : (
        // Tahu Bakso Triangle Slice Illustration
        <svg className="relative z-10 w-44 h-44 drop-shadow-xl" viewBox="0 0 200 200" fill="none">
          {/* Steam */}
          <path d="M100 45 C103 30 96 20 100 8" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
          
          {/* Outer Fried Tahu Shell */}
          <path 
            d="M40 155 L100 50 L160 155 Z" 
            fill={isSapi ? '#8B4513' : isAyam ? '#A2682A' : '#735B3B'} 
            stroke={isSapi ? '#FFC000' : isAyam ? '#FFA500' : '#29ABE2'} 
            strokeWidth="1.5" 
          />
          {/* Diagonal Tahu Facet */}
          <path 
            d="M42 153 L100 53 L100 153 Z" 
            fill={isSapi ? '#6F370F' : isAyam ? '#825220' : '#5A462D'} 
          />

          {/* Meat Core (Filled to the Brims - 85.7% ratio) */}
          <path 
            d="M60 145 L100 70 L140 145 Z" 
            fill={isSapi ? '#48230F' : isAyam ? '#9E784F' : '#CFD4D8'} 
            stroke={isSapi ? '#2C1509' : isAyam ? '#6E5336' : '#94A3B8'} 
            strokeWidth="1" 
          />

          {/* Dense Protein Granules */}
          <circle cx="85" cy="130" r="5" fill={isSapi ? '#613015' : isAyam ? '#BA9164' : '#E2E8F0'} />
          <circle cx="100" cy="125" r="6" fill={isSapi ? '#502610' : isAyam ? '#8F6C45' : '#CBD5E1'} />
          <circle cx="115" cy="132" r="5" fill={isSapi ? '#6B3517' : isAyam ? '#AF8457' : '#E2E8F0'} />
          <circle cx="95" cy="105" r="5" fill={isSapi ? '#44210D' : isAyam ? '#7F5E3B' : '#B0B9C2'} />
          <circle cx="105" cy="100" r="4" fill={isSapi ? '#5C2D13' : isAyam ? '#997349' : '#D1D9E0'} />
          <circle cx="100" cy="140" r="5" fill={isSapi ? '#3C1D0B' : isAyam ? '#735332' : '#94A3B8'} />

          {/* Glistening Juicy Highlight */}
          <ellipse cx="102" cy="115" rx="10" ry="3" fill="rgba(255,255,255,0.25)" />
        </svg>
      )}

      {/* Protein Tag Overlay */}
      <div className="absolute top-3 left-3 bg-[#000000]/90 border border-[#313131] px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase text-white">
        {isSapi && <span className="text-[#FFC000]">100% SAPI MURNI</span>}
        {isAyam && <span className="text-[#FFA500]">100% AYAM MURNI</span>}
        {isIkan && <span className="text-[#29ABE2]">100% IKAN SEGAR</span>}
        {isKuah && <span className="text-[#E63946]">DAGING PILIHAN</span>}
      </div>

      {/* Meat Ratio Badge */}
      <div className="absolute bottom-3 right-3 bg-[#000000]/90 border border-[#202020] px-2 py-0.5 text-[9px] font-mono text-[#969696]">
        {isKuah ? 'MINIM TEPUNG' : 'RASIO 6 : 1'}
      </div>
    </div>
  );
};
