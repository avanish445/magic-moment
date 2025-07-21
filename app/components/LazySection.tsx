// components/LazySection.tsx
'use client'

import { useInView } from 'react-intersection-observer'
import { ReactNode, useEffect } from 'react'

type LazySectionProps = {
  children: ReactNode
  threshold?: number
  className?: string
  debugName?: string
}

export default function LazySection({
  children,
  threshold = 0.5,
  className = '',
  debugName,
}: LazySectionProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  })
  // console.log('innview', inView, ref)
  useEffect(() => {
    if (inView) {
      console.log(`📦 ${debugName || 'Component'} is now in view`, ref)
    }
  }, [inView, debugName])

  return <div ref={ref}>{inView ? children : null}</div>
}
