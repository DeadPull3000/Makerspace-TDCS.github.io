import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'

export default function MakerspaceSection() {
  const images = [
    { id: 1, src: '/MakerspaceImages/IMG20260312061507.jpg' },
    { id: 2, src: '/MakerspaceImages/IMG20260426045130.jpg' },
    { id: 3, src: '/MakerspaceImages/IMG20260426045240.jpg' },
    { id: 4, src: '/MakerspaceImages/IMG20260515000415.jpg' },
    { id: 5, src: '/MakerspaceImages/IMG20260515000440.jpg' },
    { id: 6, src: '/MakerspaceImages/IMG20260515000526.jpg' },
  ]

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />
      <div className="absolute bottom-0 -right-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-mono text-cyan-400">
            The Makerspace Labs
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Who we are & What we do */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Who we are */}
          <div className="glassmorphism p-8 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300">
            <div className="font-mono text-xs text-neon-green mb-3">
              <span className="text-blue-400"># </span>who_we_are()
            </div>
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Who We Are</h3>
            <p className="text-gray-300 mb-4">
              The Makerspace Labs is a collaborative innovation hub dedicated to fostering hands-on learning and creative problem-solving. We're a collective of engineers, educators, and innovators passionate about building the future through technology.
            </p>
            <div className="space-y-2 text-sm text-cyan-300 font-mono">
              <div className="flex gap-2">
                <span className="text-neon-green">▸</span>
                <span>Founded on principles of Open Innovation</span>
              </div>
              <div className="flex gap-2">
                <span className="text-neon-green">▸</span>
                <span>Home to cutting-edge maker technology</span>
              </div>
              <div className="flex gap-2">
                <span className="text-neon-green">▸</span>
                <span>Mentoring the next generation of creators</span>
              </div>
            </div>
          </div>

          {/* What we do */}
          <div className="glassmorphism p-8 rounded-xl border border-indigo-500/30 hover:border-indigo-500/60 transition-all duration-300">
            <div className="font-mono text-xs text-neon-green mb-3">
              <span className="text-indigo-400"># </span>what_we_do()
            </div>
            <h3 className="text-2xl font-bold text-indigo-300 mb-4">What We Do</h3>
            <p className="text-gray-300 mb-4">
              We design and deliver immersive robotics programs, AI workshops, and data science bootcamps. Our mission is to turn curiosity into capability through hands-on experimentation with real hardware, code, and data.
            </p>
            <div className="space-y-2 text-sm text-purple-300 font-mono">
              <div className="flex gap-2">
                <span className="text-neon-green">▸</span>
                <span>Build advanced robotics systems</span>
              </div>
              <div className="flex gap-2">
                <span className="text-neon-green">▸</span>
                <span>Train students in AI & Machine Learning</span>
              </div>
              <div className="flex gap-2">
                <span className="text-neon-green">▸</span>
                <span>Enable real-world tech innovation</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image ribbons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          {/* Ribbon 1 - Left to Right */}
          <div className="rounded-xl overflow-hidden border border-blue-500/30">
            <Marquee
              gradient={true}
              gradientColor="rgb(15, 23, 42)"
              speed={50}
            >
              <div className="flex gap-6 px-6 py-8 bg-slate-900/40">
                {images.concat(images).map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden border-2 border-blue-500/30 hover:border-blue-500/80 transition-all cursor-pointer shadow-lg shadow-blue-500/10 group"
                  >
                    <img 
                      src={img.src} 
                      alt={`Makerspace image ${idx}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </Marquee>
          </div>


        </motion.div>

        {/* CTA for makerspace */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            Explore Makerspace
          </a>
        </motion.div>
      </div>
    </section>
  )
}
