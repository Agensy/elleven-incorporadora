"use client"

import { motion } from "framer-motion"
import {
  CheckCircle,
  Star,
  Shield,
  Leaf,
  Eye,
  Sparkles,
  Waves,
  Dumbbell,
  Flower2,
  ChefHat,
  Baby,
  Laptop,
  UserCheck,
  Trees,
  Car,
  ArrowUp,
  Home,
  Wind,
  Wifi,
} from "lucide-react"

interface EmpreendimentoDetalhesProps {
  empreendimento: any
}

export default function EmpreendimentoDetalhes({ empreendimento }: EmpreendimentoDetalhesProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.1 },
    viewport: { once: true },
  }

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Especificações */}
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-glow-xs">
              Especificações <span className="text-secondary">Técnicas</span>
            </h2>

            <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-lg p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Object.entries(empreendimento.especificacoes).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center py-3 border-b border-dark-700 last:border-b-0"
                  >
                    <span className="text-dark-400 capitalize">{key.replace("_", " ")}</span>
                    <span className="text-white font-medium">{String(value)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-dark-800/30 border border-dark-700 rounded-lg p-4 text-center">
                <Star className="h-8 w-8 text-secondary mx-auto mb-2" />
                <div className="text-lg font-bold text-white">Premium</div>
                <div className="text-sm text-dark-400">Acabamentos</div>
              </div>

              <div className="bg-dark-800/30 border border-dark-700 rounded-lg p-4 text-center">
                <Shield className="h-8 w-8 text-secondary mx-auto mb-2" />
                <div className="text-lg font-bold text-white">Segurança</div>
                <div className="text-sm text-dark-400">24 horas</div>
              </div>

              <div className="bg-dark-800/30 border border-dark-700 rounded-lg p-4 text-center">
                <Leaf className="h-8 w-8 text-secondary mx-auto mb-2" />
                <div className="text-lg font-bold text-white">Sustentável</div>
                <div className="text-sm text-dark-400">Certificado</div>
              </div>
            </div>
          </motion.div>

          {/* Diferenciais */}
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-glow-xs">
              Diferenciais <span className="text-secondary">Exclusivos</span>
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {empreendimento.diferenciais.map((diferencial: string, index: number) => {
                // Função para obter o ícone baseado no texto do diferencial
                const getIcon = (texto: string) => {
                  const textoLower = texto.toLowerCase()

                  if (textoLower.includes("vista") || textoLower.includes("panorâmica") || textoLower.includes("mar")) {
                    return <Eye className="h-5 w-5 text-secondary flex-shrink-0" />
                  }
                  if (
                    textoLower.includes("acabamento") ||
                    textoLower.includes("importado") ||
                    textoLower.includes("premium")
                  ) {
                    return <Sparkles className="h-5 w-5 text-secondary flex-shrink-0" />
                  }
                  if (textoLower.includes("piscina") || textoLower.includes("infinity")) {
                    return <Waves className="h-5 w-5 text-secondary flex-shrink-0" />
                  }
                  if (textoLower.includes("academia") || textoLower.includes("fitness")) {
                    return <Dumbbell className="h-5 w-5 text-secondary flex-shrink-0" />
                  }
                  if (textoLower.includes("spa") || textoLower.includes("sauna") || textoLower.includes("wellness")) {
                    return <Flower2 className="h-5 w-5 text-secondary flex-shrink-0" />
                  }
                  if (textoLower.includes("salão") || textoLower.includes("festa") || textoLower.includes("gourmet")) {
                    return <ChefHat className="h-5 w-5 text-secondary flex-shrink-0" />
                  }
                  if (
                    textoLower.includes("brinquedoteca") ||
                    textoLower.includes("criança") ||
                    textoLower.includes("kids")
                  ) {
                    return <Baby className="h-5 w-5 text-secondary flex-shrink-0" />
                  }
                  if (
                    textoLower.includes("coworking") ||
                    textoLower.includes("trabalho") ||
                    textoLower.includes("escritório")
                  ) {
                    return <Laptop className="h-5 w-5 text-secondary flex-shrink-0" />
                  }
                  if (
                    textoLower.includes("segurança") ||
                    textoLower.includes("24h") ||
                    textoLower.includes("vigilância")
                  ) {
                    return <Shield className="h-5 w-5 text-secondary flex-shrink-0" />
                  }
                  if (
                    textoLower.includes("concierge") ||
                    textoLower.includes("portaria") ||
                    textoLower.includes("recepção")
                  ) {
                    return <UserCheck className="h-5 w-5 text-secondary flex-shrink-0" />
                  }
                  if (
                    textoLower.includes("jardim") ||
                    textoLower.includes("paisagismo") ||
                    textoLower.includes("verde")
                  ) {
                    return <Trees className="h-5 w-5 text-secondary flex-shrink-0" />
                  }
                  if (
                    textoLower.includes("garagem") ||
                    textoLower.includes("vaga") ||
                    textoLower.includes("estacionamento")
                  ) {
                    return <Car className="h-5 w-5 text-secondary flex-shrink-0" />
                  }
                  if (textoLower.includes("elevador") || textoLower.includes("acesso")) {
                    return <ArrowUp className="h-5 w-5 text-secondary flex-shrink-0" />
                  }
                  if (
                    textoLower.includes("varanda") ||
                    textoLower.includes("terraço") ||
                    textoLower.includes("sacada")
                  ) {
                    return <Home className="h-5 w-5 text-secondary flex-shrink-0" />
                  }
                  if (textoLower.includes("ar condicionado") || textoLower.includes("climatização")) {
                    return <Wind className="h-5 w-5 text-secondary flex-shrink-0" />
                  }
                  if (textoLower.includes("internet") || textoLower.includes("wifi") || textoLower.includes("fibra")) {
                    return <Wifi className="h-5 w-5 text-secondary flex-shrink-0" />
                  }

                  // Ícone padrão
                  return <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                }

                return (
                  <motion.div
                    key={index}
                    variants={{
                      initial: { opacity: 0, x: -20 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: { duration: 0.5 } as any,
                    }}
                    className="flex items-center gap-3 p-4 bg-dark-800/30 border border-dark-700 rounded-lg hover:border-dark-600 transition-colors duration-300"
                  >
                    {getIcon(diferencial)}
                    <span className="text-dark-200">{diferencial}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
