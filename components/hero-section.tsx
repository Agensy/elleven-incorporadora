"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function HeroSection() {

  const fadeInUp = {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Blur and Overlay */}
      <div className="absolute inset-0">
        <img
          src="/background-elleven.png"
          alt="Vista panorâmica da cidade com apartamento moderno"
          className="w-full h-full object-cover scale-105 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 to-blue-600/20"></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-3xl mx-auto text-center"
        >
          
          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 leading-normal tracking-wide"
          >
            Excelência do pequeno
            <br />
            ao grande detalhe.
          </motion.h1>

          {/* Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border border-white/80 text-white hover:bg-white hover:text-black transition-all duration-500 text-sm font-semibold tracking-wider px-8 py-4 min-w-[180px]"
            >
              VER EMPREENDIMENTOS
            </Button>
            
            <Button
              size="lg"
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white text-sm font-semibold tracking-wider px-8 py-4 min-w-[140px] transition-all duration-500"
            >
              INVISTA
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 flex flex-col items-center text-white/50">
        <span className="text-xs uppercase tracking-widest mb-4 rotate-90 origin-center transform font-light">
          SCROLL
        </span>
        <div className="w-px h-16 bg-white/20 relative">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-4 bg-white/60 absolute top-0"
          />
        </div>
      </div>
    </section>
  )
}
