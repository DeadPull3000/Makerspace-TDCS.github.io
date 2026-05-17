import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function RonnieGallery() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-900/50">
      {/* Background orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-mono text-pink-400">
            Meet Ronnie: Your Robotic Companion
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Marquee Image Gallery */}
        <div className="mb-16 rounded-xl overflow-hidden border-2 border-pink-500/30 bg-slate-950 p-6 shadow-[0_0_30px_rgba(236,72,153,0.15)]">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex gap-6 w-max"
          >
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-80 h-56 rounded-lg border border-pink-500/50 bg-gradient-to-br from-pink-500/10 to-purple-500/10 flex items-center justify-center flex-shrink-0 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                
                {/* Simulated Robot Image / 3D Asset */}
                <div className="text-7xl group-hover:scale-110 transition-transform duration-500 filter drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">🤖</div>
                
                {/* Tech overlay grid */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
                
                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs font-mono text-pink-300 z-20 bg-slate-900/80 px-2 py-1 rounded">
                  <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                  Ronnie_Model_v{i+1}.0
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Demo Video Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glassmorphism rounded-xl overflow-hidden border border-cyan-500/30 relative aspect-video flex items-center justify-center group cursor-pointer hover:border-cyan-500 transition-all duration-300 shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent z-10" />
            
            <motion.div 
              whileHover={{ scale: 1.15 }}
              className="w-24 h-24 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center z-20 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.4)]"
            >
              <Play className="w-10 h-10 text-cyan-300 ml-2" />
            </motion.div>
            
            <div className="absolute bottom-8 left-8 z-20">
              <h3 className="text-2xl font-bold text-cyan-300 font-mono mb-2">Ronnie in Action</h3>
              <p className="text-gray-400 max-w-lg">Watch our interactive robot navigate the obstacle course and demonstrate its AI-powered object recognition capabilities.</p>
            </div>
            
            {/* Background pattern for video placeholder */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,255,255,0.3) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
