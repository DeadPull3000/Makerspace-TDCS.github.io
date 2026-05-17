import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'

export default function MarqueeSection() {
  const items = [
    'Robotics',
    'Hardware',
    'Systems Thinking',
    'Electronics',
    'Mechanics',
    'Kinematics',
    'Computer-Aided Design',
    '3D Printing'
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full py-8 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-t border-b border-cyan-500/30"
    >
      <Marquee
        gradient={true}
        gradientColor="rgb(15, 23, 42)"
        speed={50}
      >
        <div className="flex items-center">
          {items.map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="font-mono text-cyan-400 text-lg whitespace-nowrap neon-text mx-4">
                {item}
              </span>
              <span className="font-mono text-cyan-400 text-lg whitespace-nowrap neon-text">
                ///
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </motion.section>
  )
}
