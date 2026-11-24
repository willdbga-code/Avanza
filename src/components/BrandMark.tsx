import React from 'react'

/**
 * Exact AVANZA vector rocket/chevron symbol extracted from workspace asset:
 * branding/SVG/Prancheta 5.svg (viewBox="0 0 679.92 747.38")
 * Upper chevron: #00c2ff | Lower triangle: #009bcc
 */
export const AvanzaSymbol: React.FC<{
  className?: string
  monochrome?: boolean
}> = ({ className = 'w-6 h-6', monochrome = false }) => (
  <svg
    viewBox="220 110 250 520"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M444.87,535.08c-5.05-2.63-9.23-6.98-13.15-11.52-19.14-23.27-43.06-53.84-62.47-77.71-14.57-19.13-29.94-22.98-48.91-6.24-9.18,8.29-16.58,18.36-24.56,27.78-14.74,17.73-28.5,34.79-43.45,52.41-5.37,6.12-11.8,12.97-18.72,16.72-14,7.88-27.92-1.02-28.58-16.51-.85-9.75,1.85-19.38,4.72-28.63,3.37-10.71,7.24-22.8,11.8-37.18,24.89-75.73,71.48-230.17,100.1-312.31,5.68-11.14,22.61-14.07,32.69-7.49,6.47,4.05,9.17,10.96,11.26,17.97,27.18,88.73,72.67,235.54,98.83,320.86,4.67,17.43,14.49,38.33,9.06,51.76-4.23,10.82-18.27,15.85-28.43,10.18l-.16-.08Z"
      fill={monochrome ? 'currentColor' : '#00C2FF'}
    />
    <path
      d="M409.98,613.31c-7.99,3.66-22.12,3.1-34.44,3.16-17.63,0-36.99,0-55.45,0-9.57-.01-17.86.04-24.88-.05-12.1,0-26.5-1.24-32.51-13.15-7.19-12.24,1.87-26.75,9.89-36.9,9.18-11.7,19-22.96,28.38-34.34,12.51-14.47,28.57-37.19,50.15-30.03,10.76,4.25,17.34,13.49,25.18,22.45,6.69,8,14.96,17.91,22.48,26.91,11.23,14.13,19.92,21.7,24.35,34.87,3.06,11.01-2.91,22.61-12.99,27l-.17.07Z"
      fill={monochrome ? 'currentColor' : '#009BCC'}
    />
  </svg>
)

/**
 * Circular orbital badge mirroring unanim's top-right booking emblem & footer emblem
 */
export const AvanzaRingBadge: React.FC<{
  className?: string
  animated?: boolean
}> = ({ className = 'w-[2.125rem] h-[2.125rem]', animated = false }) => (
  <span
    className={`relative inline-flex items-center justify-center rounded-full ${className}`}
    role="img"
    aria-label="avanza"
  >
    <svg
      viewBox="0 0 44 44"
      fill="none"
      className={`absolute inset-0 w-full h-full ${animated ? 'animate-slow-orbit' : ''}`}
      aria-hidden="true"
    >
      <circle
        cx="22"
        cy="22"
        r="20.2"
        stroke="rgba(255,255,255,0.85)"
        strokeWidth="1.25"
        strokeDasharray={animated ? '96 14 14 14' : undefined}
      />
      {animated && <circle cx="22" cy="1.8" r="1.8" fill="#00C2FF" />}
    </svg>
    <AvanzaSymbol className="w-[46%] h-[46%] translate-y-[-1px]" />
  </span>
)

/**
 * Monumental edge-to-edge hero wordmark matching unanim.studio's exact full-width presence
 * with AVANZA's official lowercase geometric identity + rocket emblem accent
 */
export const AvanzaHeroWordmark: React.FC<{ className?: string }> = ({
  className = '',
}) => (
  <svg
    viewBox="0 0 1500 225"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="avanza.studio"
  >
    <text
      x="0"
      y="196"
      fill="#FFFFFF"
      fontFamily="'Manrope', 'Segoe UI Variable', sans-serif"
      fontWeight="500"
      fontSize="248"
      letterSpacing="-11"
      textLength="1496"
      lengthAdjust="spacingAndGlyphs"
    >
      avanza<tspan fill="#00C2FF">.</tspan>studio
    </text>
  </svg>
)

/**
 * Diagonal 9x9 Arrow matching unanim.studio's exact vector geometry + hover rotation/slide
 */
export const DiagonalArrow: React.FC<{
  className?: string
  variant?: 'rotate' | 'slide'
}> = ({ className = 'h-[0.5625rem] w-[0.5625rem]', variant = 'rotate' }) => {
  const d =
    'M8.82282 6.49427L7.49682 6.47727V2.27827L0.968824 8.84027L-0.000175733 7.85427L6.56182 1.30927H2.34582V0.00027287H8.82282V6.49427Z'
  if (variant === 'slide') {
    return (
      <svg
        className={`${className} overflow-hidden`}
        viewBox="0 0 9 9"
        fill="none"
        aria-hidden="true"
      >
        <path
          d={d}
          fill="currentColor"
          className="transition-transform duration-500 ease-out-expo group-hover:-translate-y-[115%] group-hover:translate-x-[115%]"
        />
        <path
          d={d}
          fill="currentColor"
          className="translate-y-[115%] -translate-x-[115%] transition-transform duration-500 ease-out-expo group-hover:translate-x-0 group-hover:translate-y-0"
        />
      </svg>
    )
  }
  return (
    <svg
      className={`${className} overflow-visible`}
      viewBox="0 0 9 9"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={d}
        fill="currentColor"
        className="origin-center transition-transform duration-500 ease-out-expo [transform-box:fill-box] group-hover:rotate-45"
      />
    </svg>
  )
}

/**
 * Eyebrow component matching unanim.studio's `.ui-eyebrow` rounded dot + label
 */
export const Eyebrow: React.FC<{
  label: string
  tone?: 'dark' | 'light'
  className?: string
}> = ({ label, tone = 'dark', className = '' }) => (
  <div
    className={`inline-flex items-center gap-[0.6125rem] ${
      tone === 'dark' ? 'text-black' : 'text-white'
    } ${className}`}
  >
    <span
      className={`flex h-[1.7005rem] w-[1.7005rem] items-center justify-center rounded-[0.625rem] text-[max(0.95rem,15px)] font-semibold leading-none backdrop-blur-[2px] ${
        tone === 'dark'
          ? 'bg-[#008DCD]/[0.12] text-[#005A7A]'
          : 'bg-[#00C2FF]/[0.20] text-[#69C9F2]'
      }`}
      aria-hidden="true"
    >
      .
    </span>
    <span className="t-ui">{label}</span>
  </div>
)
