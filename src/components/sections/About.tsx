import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating orbs background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-mono text-cyan-400">
            About the Curriculum
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mb-12"
        >
          <div className="glassmorphism p-8 rounded-xl border border-cyan-500/30 text-center hover:border-cyan-500/60 transition-all duration-300">
            <h3 className="text-2xl font-bold font-mono text-cyan-400 mb-4">
              Robotics101
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300 font-mono">
              Dive deep into an intensive 8-day curriculum designed to transform beginners into confident tech innovators. Through hands-on projects, interactive sessions, and collaborative learning, students will master the fundamentals of Robotics, AI, Machine Learning, and Data Science.
            </p>
          </div>
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {[
            { number: '8', label: 'Days' },
            { number: '5', label: 'Instructors' },
            { number: '16', label: 'Hours of Learning' },
            { number: '∞', label: 'Possibilities' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group text-center p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/50 transition-all cursor-pointer min-h-[120px] flex items-center justify-center"
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
