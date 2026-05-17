import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface TimelineItem {
  day: number
  title: string
  description: string
  special?: boolean
}

const timelineData: TimelineItem[] = [
  {
    day: 1,
    title: 'Introduction to Robotics',
    description: 'What is a robot? Sensors, actuators, controllers, and the basics of robotic systems.',
  },
  {
    day: 2,
    title: 'Electricity & Safe Power',
    description: 'Understanding power systems, battery management, and safe electrical practices.',
  },
  {
    day: 3,
    title: 'Servos & Motion (PWM, PCA9685)',
    description: 'Deep dive into servo motors, pulse-width modulation, and motion control.',
  },
  {
    day: 4,
    title: 'Coding Basics (ESP32, loops, variables)',
    description: 'Introduction to programming with ESP32 microcontroller, variables, and control flow.',
  },

  {
    day: 5,
    title: 'CAD Basics & Hardware',
    description: 'Digital design, 3D modeling, circuit assembly, and hardware integration.',
  },
  {
    day: 6,
    title: 'Mechanics & Assembly',
    description: 'Understanding joints, torque, and assembling the complete robotic system.',
  },
  {
    day: 7,
    title: 'Debugging & Tuning',
    description: 'Problem-solving, testing, calibration, and optimization techniques.',
  },
  {
    day: 8,
    title: 'Demo & Reflection',
    description: 'Final project demonstration, reflection on learning, and future pathways.',
  },
]

export default function Timeline() {
  const [expandedDay, setExpandedDay] = useState<number | null>(null)

  return (
    <section id="curriculum-timeline" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-mono text-green-400">
            8-Day Curriculum Timeline
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central circuit line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-cyan-500 to-purple-500 transform -translate-x-1/2">
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-green-400 via-cyan-400 to-purple-400"
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 1.5 }}
              style={{ transformOrigin: 'top' }}
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <motion.div
                    onMouseEnter={() => setExpandedDay(item.day)}
                    onMouseLeave={() => setExpandedDay(null)}
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                      item.special
                        ? 'glassmorphism border-2 border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-pink-500/10'
                        : 'glassmorphism border border-cyan-500/30 hover:border-cyan-500/60'
                    }`}
                  >
                    <div className="font-mono text-sm text-neon-green mb-2">
                      Day {item.day}
                    </div>
                    <h3 className="text-lg font-bold text-cyan-300 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">
                      {item.description}
                    </p>

                    <motion.div
                      animate={{
                        height: expandedDay === item.day ? 'auto' : 0,
                        opacity: expandedDay === item.day ? 1 : 0,
                        marginTop: expandedDay === item.day ? 16 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                      className="pt-4 border-t border-cyan-500/20"
                    >
                      <ul className="text-sm text-gray-300 space-y-2">
                        <li className="flex gap-2">
                          <span className="text-purple-400">▸</span>
                          <span>Hands-on practical exercises</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-purple-400">▸</span>
                          <span>Expert-led mentoring sessions</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-purple-400">▸</span>
                          <span>Collaborative projects with peers</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-purple-400">▸</span>
                          <span>Real-world application scenarios</span>
                        </li>
                      </ul>
                    </motion.div>

                    <motion.div
                      animate={{ rotate: expandedDay === item.day ? 180 : 0 }}
                      className="mt-3 text-cyan-400 flex justify-center"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Node */}
                <motion.div
                  whileInView={{ scale: [0.8, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                  className={`w-0 relative flex justify-center ${
                    item.special ? 'z-10' : ''
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-4 bg-slate-950 ${
                      item.special
                        ? 'border-purple-500 shadow-lg shadow-purple-500'
                        : 'border-cyan-500 shadow-lg shadow-cyan-500'
                    }`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
