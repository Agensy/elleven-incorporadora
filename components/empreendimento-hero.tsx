"use client"

import { motion } from "framer-motion"
import { Play, ArrowRight, MapPin, Calendar, Home, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface EmpreendimentoHeroProps {
  empreendimento: any
}

export default function EmpreendimentoHero({ empreendimento }: EmpreendimentoHeroProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/aurora-hero-background.png')",
          filter: "brightness(0.4)",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 via-dark-950/60 to-dark-950/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div variants={fadeInUp} initial="initial" animate="animate" className="space-y-6">
            <Badge className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl text-white text-sm px-4 py-2">{empreendimento.destaque}</Badge>

            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-glow-sm">
                {empreendimento.nome}
              </h1>
              <h2 className="text-2xl md:text-3xl text-secondary font-semibold mb-6">{empreendimento.subtitulo}</h2>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-dark-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-secondary" />
                <span>{empreendimento.localizacao}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-secondary" />
                <span>Entrega: {empreendimento.entrega}</span>
              </div>
            </div>

            <p className="text-lg text-dark-200 leading-relaxed max-w-2xl">{empreendimento.descricao}</p>

            <div className="text-3xl font-bold text-secondary text-glow-xs">{empreendimento.preco}</div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 shadow-glow-sm group">
                Agendar Visita
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-dark-600 hover:border-dark-500 hover:bg-dark-800/50 backdrop-blur-sm group"
              >
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Ver Vídeo
              </Button>
            </div>
          </motion.div>

          {/* Info Card */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
            className="bg-dark-800/30 backdrop-blur-xl border border-dark-700 rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-6">Informações Gerais</h3>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <Home className="h-8 w-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{empreendimento.especificacoes.unidades}</div>
                <div className="text-sm text-dark-400">Unidades</div>
              </div>

              <div className="text-center">
                <div className="h-8 w-8 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-secondary font-bold text-sm">{empreendimento.especificacoes.andares}</span>
                </div>
                <div className="text-2xl font-bold text-white">{empreendimento.especificacoes.andares}</div>
                <div className="text-sm text-dark-400">Andares</div>
              </div>

              <div className="text-center">
                <Car className="h-8 w-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{empreendimento.especificacoes.vagas}</div>
                <div className="text-sm text-dark-400">Vagas</div>
              </div>

              <div className="text-center">
                <div className="h-8 w-8 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-secondary font-bold text-xs">m²</span>
                </div>
                <div className="text-2xl font-bold text-white">{empreendimento.especificacoes.area}</div>
                <div className="text-sm text-dark-400">Área</div>
              </div>
            </div>

            <Button className="w-full mt-8 bg-secondary hover:bg-secondary/90 shadow-glow-sm">Baixar Material</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
