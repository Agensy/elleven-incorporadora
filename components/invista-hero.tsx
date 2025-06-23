"use client"

import { motion } from "framer-motion"
import { TrendingUp, Calculator, DollarSign, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InvistaHero() {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding-hero">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/investment-background.png')",
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
                          Invista no Seu <span className="text-white">Futuro</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-2xl text-dark-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Descubra as melhores oportunidades de investimento imobiliário. Simule financiamentos, compare opções e
            realize o sonho da casa própria com as melhores condições do mercado.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 shadow-glow-sm text-lg px-8 py-6">
              <Calculator className="mr-2 h-5 w-5" />
              Simular Financiamento
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-dark-700 hover:border-dark-600 hover:bg-dark-800 text-lg px-8 py-6"
            >
              <Target className="mr-2 h-5 w-5" />
              Ver Oportunidades
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-secondary mb-2">Valorização</div>
              <div className="text-dark-400">Imóveis com alta valorização</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-secondary mb-2">Financiamento</div>
              <div className="text-dark-400">Melhores taxas do mercado</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-secondary mb-2">Consultoria</div>
              <div className="text-dark-400">Especialistas dedicados</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
