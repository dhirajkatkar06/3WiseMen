'use client'

import { useEffect, useState } from 'react'

interface CountUpProps {
  end: number
  suffix?: string
  duration?: number
}

export default function CountUp({
  end,
  suffix = '',
  duration = 2000,
}: CountUpProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / duration
      const value = Math.floor(end * progress)

      if (value < end) {
        setCount(value)
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}
