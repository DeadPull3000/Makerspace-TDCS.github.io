import { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const crosshairRef = useRef<HTMLDivElement>(null)
  const bracketsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const crosshair = crosshairRef.current
    const brackets = bracketsRef.current
    if (!crosshair || !brackets) return

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY

      // Direct DOM manipulation — no React re-render, zero latency
      crosshair.style.transform = `translate(${x - 10}px, ${y - 10}px)`
      brackets.style.transform = `translate(${x - 20}px, ${y - 20}px)`

      const target = e.target as HTMLElement
      const isClickable = target.closest(
        'a, button, [role="button"], input, select, textarea, .cursor-pointer, .glassmorphism'
      ) !== null
      brackets.style.opacity = isClickable ? '0.8' : '0'
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Main cursor tech crosshair */}
      <div
        ref={crosshairRef}
        className="fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center mix-blend-screen w-5 h-5"
        style={{ willChange: 'transform' }}
      >
        {/* Cross lines */}
        <div className="w-5 h-[2px] bg-cyan-400 absolute shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
        <div className="w-[2px] h-5 bg-cyan-400 absolute shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
        {/* Center dot */}
        <div className="w-1 h-1 bg-white rounded-full absolute shadow-[0_0_10px_rgba(255,255,255,1)]" />
      </div>

      {/* Tech brackets around cursor */}
      <div
        ref={bracketsRef}
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[99]"
        style={{ willChange: 'transform', opacity: 0, transition: 'opacity 0.15s ease' }}
      >
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />
      </div>
    </>
  )
}

CustomCursor.displayName = 'CustomCursor'

export default CustomCursor

