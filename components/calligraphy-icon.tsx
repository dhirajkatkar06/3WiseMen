'use client'

export default function CalligraphyIcon() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-calligraphy"
    >
      <defs>
        <linearGradient id="penGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="currentColor" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      
      {/* Pen nib */}
      <path
        d="M20 45L30 5L40 45"
        stroke="url(#penGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      
      {/* Decorative flourish lines */}
      <path
        d="M15 40Q20 35 25 40"
        stroke="url(#penGradient)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M35 40Q40 35 45 40"
        stroke="url(#penGradient)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      
      {/* Ink drop */}
      <circle
        cx="30"
        cy="50"
        r="3"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  )
}
