import { useEffect, useState } from 'react'
import Particles from 'react-tsparticles'
import { Container, Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import TypewriterEffect from '../TypewriterEffect'

export default function Hero() {
  const [isInitialGlitch, setIsInitialGlitch] = useState(true)
  const [randomGlitch, setRandomGlitch] = useState(false)

  useEffect(() => {
    // Stop initial glitch after 3 seconds
    const stabilizeTimer = setTimeout(() => {
      setIsInitialGlitch(false)
    }, 3000)

    return () => clearTimeout(stabilizeTimer)
  }, [])

  useEffect(() => {
    // Random glitch after initial glitch ends
    const glitchInterval = setInterval(() => {
      setRandomGlitch(true)
      setTimeout(() => setRandomGlitch(false), 200)
    }, Math.random() * 4000 + 3000) // Every 3-7 seconds

    return () => clearInterval(glitchInterval)
  }, [])

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine)
  }

  const particlesLoaded = (container: Container | undefined) => {
    // Particles loaded callback
  }

  const scrollToCurriculum = () => {
    const timelineElement = document.getElementById('curriculum-timeline')
    if (timelineElement) {
      timelineElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Particle background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: { value: 'transparent' },
          },
          fpsLimit: 60,
          particles: {
            color: { value: '#00ffff' },
            links: {
              color: '#00ffff',
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              outModes: { default: 'bounce' },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 80,
            },
            opacity: {
              value: 0.5,
              animation: { enable: true, speed: 1, minimumValue: 0.1 },
            },
            shape: { type: 'circle' },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main heading with glitch effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-mono"
        >
          <span
            className={`text-cyan-400 font-bold relative inline-block ${
              isInitialGlitch || randomGlitch ? 'glitch-text' : ''
            }`}
            data-text="Young Scholars Program"
          >
            Young Scholars Program
          </span>
          <br />
          <span className="text-2xl sm:text-3xl lg:text-5xl text-cyan-400 neon-text inline-block min-h-[1.5em]">
            <TypewriterEffect text="Tech, Data & Computer Science" speed={50} />
          </span>
        </motion.h1>

        {/* Typewriter subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="my-8 p-4 sm:p-6 rounded-lg glassmorphism inline-block border border-cyan-500/30"
        >
          <div className="font-mono text-sm sm:text-base text-cyan-300 flex items-start gap-2">
            <span className="text-neon-green">$</span>
            <TypewriterEffect
              text="> Initiating YSP TDCS protocols... Loading AI, ML, & Robotics modules..."
              speed={50}
            />
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="mt-12"
        >
          <button
            onClick={scrollToCurriculum}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 pulse-glow"
          >
            <span className="flex items-center gap-3 justify-center">
              Explore the 8-Day Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>

        {/* Floating orbs in background */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
      </div>
    </section>
  )
}
