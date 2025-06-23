"use client"

import { motion } from "framer-motion"
import { MapPin, Car, Train, ShoppingBag, GraduationCap, Heart } from "lucide-react"

interface PontoInteresse {
  nome: string
  distancia: string
  tipo: string
}

interface EmpreendimentoLocalizacaoProps {
  endereco: string
  coordenadas: { lat: number; lng: number }
  pontos: PontoInteresse[]
}

export default function EmpreendimentoLocalizacao({ endereco, coordenadas, pontos }: EmpreendimentoLocalizacaoProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  const getIcon = (tipo: string) => {
    switch (tipo) {
      case "shopping":
        return ShoppingBag
      case "transporte":
        return Train
      case "educacao":
        return GraduationCap
      case "saude":
        return Heart
      default:
        return MapPin
    }
  }

  const getColor = (tipo: string) => {
    switch (tipo) {
      case "shopping":
        return "text-blue-500"
      case "transporte":
        return "text-green-500"
      case "educacao":
        return "text-purple-500"
      case "saude":
        return "text-red-500"
      default:
        return "text-secondary"
    }
  }

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-glow-xs">
            Localização <span className="text-secondary">Privilegiada</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            No coração da cidade, próximo a tudo que você precisa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mapa */}
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Mapa Interativo</h3>
                <p className="text-dark-400 mb-4">{endereco}</p>
                <div className="text-sm text-dark-500">
                  Coordenadas: {coordenadas.lat}, {coordenadas.lng}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pontos de Interesse */}
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-white mb-8">Pontos de Interesse</h3>

            <div className="space-y-4">
              {pontos.map((ponto, index) => {
                const Icon = getIcon(ponto.tipo)
                const colorClass = getColor(ponto.tipo)

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-dark-800/30 border border-dark-700 rounded-lg hover:border-dark-600 transition-colors duration-300"
                  >
                    <div className={`w-12 h-12 rounded-full bg-dark-700 flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 ${colorClass}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{ponto.nome}</h4>
                      <p className="text-sm text-dark-400 capitalize">{ponto.tipo}</p>
                    </div>
                    <div className="text-secondary font-bold">{ponto.distancia}</div>
                  </motion.div>
                )
              })}
            </div>

            {/* Transporte */}
            <div className="mt-8 p-6 bg-dark-800/30 border border-dark-700 rounded-lg">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Car className="h-5 w-5 text-secondary" />
                Facilidade de Acesso
              </h4>
              <ul className="space-y-2 text-dark-300">
                <li>• Próximo às principais vias de acesso</li>
                <li>• Transporte público na porta</li>
                <li>• Fácil acesso ao centro da cidade</li>
                <li>• Próximo ao aeroporto</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
