# YSP TDCS Website - Young Scholars Programme: Tech, Data & Computer Science

A highly interactive, visually stunning, and strictly responsive website built for the Young Scholars Programme focused on Tech, Data & Computer Science. This is a "futuristic hacker/maker playground" with constant motion, deep interactivity, and novel web elements.

## 🎨 Design Features

- **Cyber/Hacker Dark Mode**: Deep slate/black backgrounds with vibrant neon accents (electric cyan, matrix green, hyper purple)
- **Custom Cursor**: Glowing cyan dot that trails with a slight delay
- **Scroll Progress Bar**: Glowing neon line at top showing scroll position
- **Glitch & Hover Effects**: Subtle CSS glitch animations on headings and card tilt effects
- **Interactive Neural Network**: Particle background that reacts to mouse movement
- **Glassmorphism**: Premium translucent cards with blurred backgrounds
- **Smooth Animations**: Powered by Framer Motion for cinematic interactions

## 🚀 Tech Stack

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **Lucide React** - Beautiful icons
- **React TSParticles** - Interactive particle effects
- **React Fast Marquee** - Infinite scrolling text
- **Vite** - Lightning-fast build tool

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm

### Setup Steps

1. **Clone the repository**
   ```bash
   cd WebsiteTDCS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The site will open at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📋 Project Structure

```
src/
├── components/
│   ├── CustomCursor.tsx          # Custom mouse cursor
│   ├── ScrollProgressBar.tsx     # Top scroll progress indicator
│   ├── TypewriterEffect.tsx      # Typewriter text animation
│   └── sections/
│       ├── Hero.tsx              # Neural terminal hero section
│       ├── MarqueeSection.tsx    # Infinite scrolling ticker
│       ├── About.tsx             # Glassmorphism about section
│       ├── RobotZone.tsx         # Interactive robot zone
│       ├── Timeline.tsx          # 10-day curriculum timeline
│       ├── Resources.tsx         # Download resources & GitHub
│       ├── Instructors.tsx       # Instructor profiles
│       └── Footer.tsx            # Footer with links
├── App.tsx                       # Main app component
├── main.tsx                      # Entry point
└── index.css                     # Global styles & animations
```

## 🎯 Sections Overview

### 1. **Hero Section** (The "Neural Terminal" Hook)
- Interactive particle background simulating AI neural networks
- Animated headline with glitch effect
- Typewriter command-line subheading
- Pulsating CTA button

### 2. **Marquee Transition**
- Continuous horizontal scrolling of tech topics
- Glowing monospace text on dark background

### 3. **About YSP TDCS**
- Glassmorphism cards with translucent backgrounds
- Floating animated orbs in the background
- Weekend highlight box for Ashoka Campus stay
- Statistics showcasing program scale

### 4. **Ronnie Robot Interactive Maker Zone**
- Hackable terminal input to name the robot
- Wokwi Arduino simulation iframe
- 3D model viewer placeholder (can integrate Google Model Viewer)
- Demo video container
- Real-time specs display

### 5. **10-Day Curriculum Timeline**
- Interactive vertical timeline with scroll animations
- Circuit board-style connecting line
- Expandable day cards with details
- Special weekend highlight
- Glowing node indicators

### 6. **Resources & Downloads**
- Grid of downloadable resource cards
- GitHub repository section with pulsing animation
- Tilt effects on hover

### 7. **Instructor Profiles**
- 5 instructor cards with specialties
- Avatar placeholders
- Specialty tags
- Email contact buttons
- Responsive grid layout

### 8. **Ronnie Gallery**
- Interactive gallery showcase
- Animated image transitions
- Hover effects with descriptions
- Responsive grid layout

### 9. **Makerspace Section**
- Immersive makerspace experience showcase
- High-impact visual presentation
- Call-to-action integration
- Featured projects and capabilities

### 10. **Footer**
- Program information
- Quick links
- Contact details
- Social media icons
- Terminal-style end message

## 🎮 Interactions & Animations

- **Hover Effects**: Cards tilt, glow, and elevate
- **Scroll Animations**: Elements fade in as you scroll
- **Particle Background**: Reacts to mouse movement
- **Pulsing Elements**: GitHub logo and buttons pulse with energy
- **Glitch Text**: Headlines have subtle glitch effects on hover
- **Typewriter Effect**: Text types out character by character
- **Smooth Transitions**: All state changes are animated

## 🛠️ Customization

### Colors
Edit the color values in `tailwind.config.js`:
- `neon.cyan`: `#00ffff`
- `neon.purple`: `#b60ce8`
- `neon.green`: `#39ff14`
- `neon.pink`: `#ff006e`

### Fonts
The site uses:
- **Inter** for body text (Google Fonts)
- **Fira Code** for monospace/code elements (Google Fonts)

### Animations
All animations are defined in `src/index.css` and `tailwind.config.js`

## 📱 Responsive Design

- **Mobile First**: Designed for mobile, enhanced for larger screens
- **Breakpoints**: sm (640px), md (768px), lg (1024px)
- **Touch Optimized**: All interactive elements are touch-friendly

## 🚀 Performance

- Lazy loading of components with Framer Motion
- Optimized particle count for smooth performance
- CSS animations for better performance
- Tree-shaking with Vite

## 📝 License

This project is created for the Young Scholars Programme: Tech, Data & Computer Science

## � Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port (5174, 5175, etc.)

### Slow Performance
- Reduce particle count in `src/components/sections/Hero.tsx`
- Disable animations temporarily by commenting out Framer Motion components
- Clear browser cache and restart dev server

### Build Errors
```bash
# Clear dependencies and reinstall
rm -r node_modules
npm install

# Clear Vite cache
rm -r node_modules/.vite
npm run build
```

## 📧 Development Tips

- Use **React DevTools** browser extension for component inspection
- Enable **TS Strict Mode** in `tsconfig.json` for better type safety
- Run `npm run lint` before committing to catch issues early

## 🔄 Scripts Reference

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview production build locally |

## 💡 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Multi-language support (i18n)
- [ ] Accessibility improvements (a11y)
- [ ] SEO optimization with Meta tags
- [ ] Analytics integration
- [ ] Newsletter subscription form

## �💬 Support

For questions or issues, please reach out to: info@ysptech.org

---

**Built with ❤️ for the next generation of tech innovators** ⚡
