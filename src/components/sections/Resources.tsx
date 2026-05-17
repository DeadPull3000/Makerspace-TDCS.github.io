import { motion } from 'framer-motion'
import { Download, Github, FileText, Code2, BookOpen } from 'lucide-react'

const resources = [
  {
    title: 'Curriculum Guide',
    description: 'Complete 10-day curriculum with detailed lesson plans',
    icon: FileText,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Code Repository',
    description: 'All source code and Arduino sketches',
    icon: Code2,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Learning Materials',
    description: 'Comprehensive study guides and references',
    icon: BookOpen,
    color: 'from-green-500 to-cyan-500',
  },
  {
    title: 'Hardware Setup',
    description: 'Component list and wiring diagrams',
    icon: Download,
    color: 'from-yellow-500 to-orange-500',
  },
]

export default function Resources() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-mono text-yellow-400">
            Resources & Downloads
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, rotateX: 5 }}
                className="tilt-card"
              >
                <div className="glassmorphism p-6 rounded-lg border border-cyan-500/30 h-full group hover:border-cyan-500/60 transition-all duration-300">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${resource.color} p-2.5 mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-cyan-300 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {resource.description}
                  </p>
                  <button className="w-full py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* GitHub Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="glassmorphism p-12 rounded-xl border-2 border-gray-700/50 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-all duration-300 inline-block max-w-md">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center mb-6"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-lg">
                <Github className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-3 font-mono">
              Open Source Repository
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Access all code, documentation, and project files on our GitHub repository
            </p>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Visit GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
