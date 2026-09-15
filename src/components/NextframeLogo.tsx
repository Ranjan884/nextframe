import React from 'react';

interface NextframeLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showText?: boolean;
  showSubtitle?: boolean;
  lightMode?: boolean;
}

export const NextframeLogo: React.FC<NextframeLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  showSubtitle = false,
  lightMode = true,
}) => {
  const sizeConfig = {
    sm: {
      mark: 'w-7 h-7',
      text: 'text-base sm:text-lg',
      sub: 'text-[9px]',
      gap: 'gap-2.5',
    },
    md: {
      mark: 'w-8 h-8 sm:w-9 sm:h-9',
      text: 'text-lg sm:text-xl',
      sub: 'text-[10px]',
      gap: 'gap-2.5',
    },
    lg: {
      mark: 'w-11 h-11 sm:w-12 sm:h-12',
      text: 'text-2xl sm:text-3xl',
      sub: 'text-xs',
      gap: 'gap-3.5',
    },
    hero: {
      mark: 'w-16 h-16 sm:w-20 sm:h-20',
      text: 'text-3xl sm:text-4xl',
      sub: 'text-sm',
      gap: 'gap-4',
    },
  }[size];

  const darkColor = lightMode ? '#0F172A' : '#FFFFFF';
  const blueColor = '#2563EB';

  return (
    <div className={`inline-flex items-center ${sizeConfig.gap} select-none ${className}`}>
      {/* Exact Vector Monogram Symbol */}
      <div className={`relative ${sizeConfig.mark} shrink-0`}>
        <svg
          viewBox="170 100 260 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain"
        >
          {/* N Glyph: Left vertical bar with angled bottom */}
          <path
            d="M 185 120 L 220 120 L 220 205 L 185 240 Z"
            fill={darkColor}
          />

          {/* N Glyph: Main dynamic diagonal slash extending downward */}
          <path
            d="M 185 120 L 225 120 L 318 285 L 290 285 Z"
            fill={darkColor}
          />

          {/* F Glyph: Top horizontal bar with 45-degree cut */}
          <path
            d="M 295 130 L 415 130 L 388 158 L 330 158 L 330 130 Z"
            fill={darkColor}
          />

          {/* F Glyph: Vertical stem */}
          <path
            d="M 295 130 L 330 130 L 330 225 L 295 225 Z"
            fill={darkColor}
          />

          {/* Signature Vibrant Blue Triangle Accent (Forward Frame / Play Motif) */}
          <path
            d="M 334 175 L 368 200 L 334 225 Z"
            fill={blueColor}
          />

          {/* F Glyph: Lower horizontal bar */}
          <path
            d="M 374 190 L 415 190 L 415 225 L 374 225 Z"
            fill={darkColor}
          />
        </svg>
      </div>

      {/* Typography Wordmark matching the exact brand identity */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline font-sans font-extrabold tracking-tight uppercase">
            <span style={{ color: darkColor }} className={sizeConfig.text}>
              NEX
            </span>
            <span style={{ color: blueColor }} className={sizeConfig.text}>
              FRAME
            </span>
          </div>

          {showSubtitle ? (
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="h-[1px] w-2.5 bg-[#E2E8F0]" />
              <span className="font-sans uppercase tracking-[0.2em] font-semibold text-[9px] sm:text-[10px] text-[#64748B]">
                STUDIO
              </span>
              <span className="h-[1px] w-2.5 bg-[#E2E8F0]" />
            </div>
          ) : (
            <span className="font-sans uppercase tracking-[0.2em] font-semibold text-[9px] sm:text-[10px] text-[#64748B] mt-0.5">
              STUDIO
            </span>
          )}
        </div>
      )}
    </div>
  );
};
