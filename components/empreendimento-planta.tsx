"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bed, Bath, Car, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Planta {
  tipo: string
  area: string
  quartos: number
  banheiros: number
  vagas: number
  imagem: string
  preco: string
}

interface EmpreendimentoPlantaProps {
  plantas: Planta[]
}

export default function EmpreendimentoPlanta({ plantas }: EmpreendimentoPlantaProps) {
  const [plantaAtiva, setPlantaAtiva] = useState(0)

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  return (
    <section className="section-padding-alt bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-glow-xs">
            Plantas dos <span className="text-secondary">Apartamentos</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Escolha a planta que melhor se adapta ao seu estilo de vida
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {plantas.map((planta, index) => (
            <Button
              key={index}
              variant={plantaAtiva === index ? "default" : "outline"}
              className={`${
                plantaAtiva === index
                  ? "bg-secondary hover:bg-secondary/90 shadow-glow-xs"
                  : "border-dark-700 hover:border-dark-600 hover:bg-dark-800"
              } transition-all duration-300`}
              onClick={() => setPlantaAtiva(index)}
            >
              {planta.tipo}
            </Button>
          ))}
        </motion.div>

        {/* Planta Ativa */}
        <motion.div
          key={plantaAtiva}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Imagem da Planta */}
          <div className="relative">
            <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-lg p-8">
              <img
                src={plantas[plantaAtiva].imagem || "/placeholder.svg"}
                alt={`Planta ${plantas[plantaAtiva].tipo}`}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Detalhes da Planta */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">{plantas[plantaAtiva].tipo}</h3>
              <div className="text-2xl font-bold text-secondary mb-6">{plantas[plantaAtiva].preco}</div>
            </div>

            {/* Especificações */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3 p-4 bg-dark-800/30 border border-dark-700 rounded-lg">
                <Bed className="h-6 w-6 text-secondary" />
                <div>
                  <div className="text-lg font-bold text-white">{plantas[plantaAtiva].quartos}</div>
                  <div className="text-sm text-dark-400">Quartos</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-dark-800/30 border border-dark-700 rounded-lg">
                <Bath className="h-6 w-6 text-secondary" />
                <div>
                  <div className="text-lg font-bold text-white">{plantas[plantaAtiva].banheiros}</div>
                  <div className="text-sm text-dark-400">Banheiros</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-dark-800/30 border border-dark-700 rounded-lg">
                <Car className="h-6 w-6 text-secondary" />
                <div>
                  <div className="text-lg font-bold text-white">{plantas[plantaAtiva].vagas}</div>
                  <div className="text-sm text-dark-400">Vagas</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-dark-800/30 border border-dark-700 rounded-lg">
                <Maximize className="h-6 w-6 text-secondary" />
                <div>
                  <div className="text-lg font-bold text-white">{plantas[plantaAtiva].area}</div>
                  <div className="text-sm text-dark-400">Área Total</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 shadow-glow-sm">
                Tenho Interesse
              </Button>
              <Button size="lg" variant="outline" className="border-dark-700 hover:border-dark-600 hover:bg-dark-800">
                Baixar Planta
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
