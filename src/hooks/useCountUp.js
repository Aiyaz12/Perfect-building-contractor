import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Counts up from start to end when the attached ref scrolls into view.
 */
const useCountUp = (end = 0, { start = 0, duration = 1600 } = {}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px', amount: 0.3 })
  const [value, setValue] = useState(start)

  useEffect(() => {
    if (!isInView) return
    let startTime = null
    const frame = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(start + (end - start) * easedProgress))
      if (progress < 1) {
        animationFrame = requestAnimationFrame(frame)
      }
    }

    let animationFrame = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, start, duration, isInView])

  return { ref, value }
}

export default useCountUp

