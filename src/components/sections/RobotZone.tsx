import { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

export default function RobotZone() {
  const [robotName, setRobotName] = useState('RONNIE')
  const [inputValue, setInputValue] = useState('')

  const handleNameChange = () => {
    if (inputValue.trim()) {
      setRobotName(inputValue.toUpperCase())
      setInputValue('')
    }
  }

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-mono text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">
            The Ronnie Robot Interactive Maker Zone
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Interactive terminal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="glassmorphism p-8 rounded-xl border border-purple-500/30 mb-6">
              <div className="font-mono text-sm mb-4 text-purple-400">
                <span className="text-neon-green">$</span> {'>>'} Initialize Robot
              </div>
              <div className="mb-4">
                <label className="block text-cyan-300 text-sm mb-3 font-mono">
                  Root@terminal:~# Name Your Robot:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleNameChange()}
                    placeholder="Enter robot name..."
                    className="flex-1 px-4 py-2 bg-slate-900 border border-cyan-500/50 rounded text-cyan-300 placeholder-gray-600 focus:outline-none focus:border-cyan-400 font-mono"
                  />
                  <button
                    onClick={handleNameChange}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded hover:shadow-lg transition-all font-mono font-semibold flex items-center gap-2"
                  >
                    <Zap className="w-4 h-4" />
                    Load
                  </button>
                </div>
              </div>

              <div className="mt-6 p-3 bg-slate-900/50 rounded border border-cyan-500/20 font-mono text-cyan-400 text-sm">
                <div className="text-neon-green">➜ Robot Status: ACTIVE</div>
                <div className="text-purple-400">➜ Name: {robotName}</div>
                <div className="text-cyan-300">➜ System: Ready for Commands</div>
              </div>
            </div>

            {/* Wokwi iframe */}
            <div className="rounded-xl overflow-hidden border-2 border-cyan-500/50 shadow-lg">
              <iframe
                src="https://wokwi.com/projects/391919024748380161"
                className="w-full h-96 bg-slate-900"
                style={{ border: 'none' }}
              />
            </div>
          </motion.div>

          {/* Right: 3D Model and Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* 3D Model Viewer placeholder */}
            <div className="relative aspect-square rounded-xl border-2 border-purple-500/50 overflow-hidden glassmorphism p-4">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 blur-2xl" />
                  <p className="text-cyan-400 font-mono text-sm">
                    3D Model: {robotName}
                  </p>
                  <p className="text-gray-500 text-xs mt-2">
                    Interactive 360° View
                  </p>
                </div>
              </div>
            </div>

            {/* Features info - Telemetry Data */}
            <div className="glassmorphism p-6 rounded-xl border border-cyan-500/30">
              <h3 className="text-lg font-bold text-purple-400 mb-4 font-mono">
                {robotName}'s Live Telemetry
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-2 rounded bg-slate-900/30 border border-cyan-500/20">
                  <span className="text-cyan-400">CPU Usage:</span>
                  <span className="text-neon-green font-mono">{Math.floor(Math.random() * 45 + 25)}%</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-slate-900/30 border border-cyan-500/20">
                  <span className="text-cyan-400">Memory:</span>
                  <span className="text-neon-green font-mono">{Math.floor(Math.random() * 512 + 256)}MB</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-slate-900/30 border border-cyan-500/20">
                  <span className="text-cyan-400">Sensors:</span>
                  <span className="text-neon-green font-mono">8/8 Active</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-slate-900/30 border border-cyan-500/20">
                  <span className="text-cyan-400">Uptime:</span>
                  <span className="text-neon-green font-mono">247h 32m</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-slate-900/30 border border-cyan-500/20">
                  <span className="text-cyan-400">Temp:</span>
                  <span className="text-neon-green font-mono">42°C</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-slate-900/30 border border-cyan-500/20">
                  <span className="text-cyan-400">Battery:</span>
                  <span className="text-neon-green font-mono">87%</span>
                </div>
              </div>
            </div>

            {/* Demo Video */}
            <div className="rounded-xl overflow-hidden border-2 border-pink-500/50">
              <div className="aspect-video bg-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full border-4 border-pink-500 flex items-center justify-center mx-auto mb-2 cursor-pointer hover:border-pink-400 transition-all">
                    <div className="w-0 h-0 border-l-8 border-l-pink-500 border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" />
                  </div>
                  <p className="text-pink-400 text-sm font-mono">Demo Video</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Media Gallery & Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 pt-16 border-t border-purple-500/30"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-pink-400 mb-8 font-mono text-center">
            {robotName}'s Gallery & Showcase
          </h3>

          {/* Image gallery with marquee effect */}
          <div className="mb-8 rounded-xl overflow-hidden border-2 border-pink-500/50">
            <motion.div
              animate={{ x: [0, -100, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="flex gap-4 p-4 bg-slate-900"
            >
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-64 h-48 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">🤖</div>
                    <p className="text-pink-400 font-mono text-sm">
                      Frame {i + 1}: {robotName}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Video showcase with animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Main demo video */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden border-2 border-pink-500/50"
            >
              <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center relative group">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 rounded-full border-4 border-pink-500 flex items-center justify-center cursor-pointer group-hover:border-pink-400 transition-all"
                >
                  <div className="w-0 h-0 border-l-8 border-l-pink-500 border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1 group-hover:border-l-pink-400" />
                </motion.div>
                <p className="absolute bottom-4 left-4 text-pink-400 text-sm font-mono">
                  Live Demo
                </p>
              </div>
            </motion.div>

            {/* Performance metrics video */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden border-2 border-cyan-500/50"
            >
              <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center relative group p-4">
                <motion.div className="space-y-2 w-full">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-mono text-xs">Speed:</span>
                    <motion.div
                      animate={{ width: ['0%', '80%', '0%'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="flex-1 h-2 bg-cyan-500/30 rounded overflow-hidden"
                    >
                      <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                    </motion.div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-mono text-xs">Precision:</span>
                    <motion.div
                      animate={{ width: ['0%', '95%', '0%'] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="flex-1 h-2 bg-cyan-500/30 rounded overflow-hidden"
                    >
                      <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500" />
                    </motion.div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-mono text-xs">Efficiency:</span>
                    <motion.div
                      animate={{ width: ['0%', '85%', '0%'] }}
                      transition={{ duration: 3.5, repeat: Infinity }}
                      className="flex-1 h-2 bg-cyan-500/30 rounded overflow-hidden"
                    >
                      <div className="w-full h-full bg-gradient-to-r from-neon-green to-cyan-500" />
                    </motion.div>
                  </div>
                </motion.div>
                <p className="absolute bottom-4 right-4 text-cyan-400 text-sm font-mono">
                  Performance
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
