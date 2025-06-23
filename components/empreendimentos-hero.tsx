"use client"

import { motion } from "framer-motion"
import { Building, MapPin, TrendingUp } from "lucide-react"

export default function EmpreendimentosHero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden section-padding-hero">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/luxury-construction-sunset.png')",
          filter: "brightness(0.3)",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 via-dark-950/60 to-dark-950/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div variants={staggerContainer} initial="initial" animate="animate" className="max-w-4xl mx-auto">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Todos os <span className="text-gray-200">Empreendimentos</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-2xl text-dark-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Descubra nossa seleção completa de empreendimentos premium em São Paulo. Desde studios modernos até
            coberturas exclusivas, encontre o imóvel perfeito para seu estilo de vida.
          </motion.p>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-white/70" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">12+</div>
              <div className="text-white/60">Empreendimentos Ativos</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white/70" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">11</div>
              <div className="text-white/60">Bairros Nobres</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white/70" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">15%</div>
              <div className="text-white/60">Valorização Média</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
