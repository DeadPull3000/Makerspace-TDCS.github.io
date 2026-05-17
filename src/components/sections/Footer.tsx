import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-cyan-500/20 overflow-hidden">
      {/* Background matrix effect */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, #00ffff 1px, transparent 1px),
                              linear-gradient(#00ffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            opacity: 0.1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Program Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-4 font-mono">
              YSP TDCS
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Empowering the next generation of tech innovators through immersive learning in AI, Robotics, and Data Science.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-purple-400 mb-4 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Curriculum', href: '#' },
                { label: 'Resources', href: '#' },
                { label: 'Instructors', href: '#' },
                { label: 'Apply Now', href: '#' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-pink-400 mb-4 font-mono">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                <span>Ashoka University Campus, Delhi-NCR, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-pink-400" />
                <span>+91 XXX-XXXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-pink-400" />
                <span>info@ysptech.org</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-500/20 my-8" />

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4"
        >
          <p className="text-sm text-gray-500">
            © {currentYear} Young Scholars Programme: Tech, Data & Computer Science. All rights reserved.
          </p>

          {/* Terminal-like text */}
          <div className="text-xs font-mono text-cyan-500/50 text-center md:text-right">
            <div className="inline-block px-3 py-2 bg-slate-900/50 rounded border border-cyan-500/20">
              <span className="text-neon-green">$</span> {'>>'} Thank you for visiting
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/2 -left-32 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />
    </footer>
  )
}
