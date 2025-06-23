"use client"

import { motion } from "framer-motion"
import { Search, Calculator, FileText, Key, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const passos = [
  {
    numero: "01",
    icon: Search,
    titulo: "Análise de Perfil",
    descricao: "Entendemos seus objetivos, prazo e capacidade de investimento para encontrar a melhor oportunidade.",
    tempo: "1 dia",
  },
  {
    numero: "02",
    icon: Calculator,
    titulo: "Simulação Financeira",
    descricao: "Realizamos simulações detalhadas de financiamento e retorno sobre investimento.",
    tempo: "2-3 dias",
  },
  {
    numero: "03",
    icon: FileText,
    titulo: "Documentação",
    descricao: "Auxiliamos na preparação e análise de toda documentação necessária para o processo.",
    tempo: "5-7 dias",
  },
  {
    numero: "04",
    icon: Key,
    titulo: "Fechamento",
    descricao: "Acompanhamos todo o processo de compra até a entrega das chaves do seu imóvel.",
    tempo: "30-45 dias",
  },
  {
    numero: "05",
    icon: TrendingUp,
    titulo: "Acompanhamento",
    descricao: "Oferecemos suporte contínuo para maximizar o retorno do seu investimento.",
    tempo: "Contínuo",
  },
]

export default function ProcessoInvestimento() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.2 },
    viewport: { once: true },
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-glow-xs">
            Como <span className="text-secondary">Investir</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Nosso processo estruturado garante que você faça o melhor investimento para seu perfil
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {passos.map((passo, index) => {
            const Icon = passo.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* Conteúdo */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center font-bold text-white">
                      {passo.numero}
                    </div>
                    <div className="text-sm text-secondary font-semibold">{passo.tempo}</div>
                  </div>

                  <h3 className="text-2xl font-bold text-white">{passo.titulo}</h3>
                  <p className="text-dark-300 leading-relaxed text-lg">{passo.descricao}</p>
                </div>

                {/* Ícone */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-full flex items-center justify-center">
                    <Icon className="h-12 w-12 text-secondary" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para <span className="text-secondary">Começar?</span>
            </h3>
            <p className="text-dark-300 mb-6 max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para ajudar você a encontrar o investimento perfeito. Agende uma
              consulta gratuita e descubra as melhores oportunidades do mercado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 shadow-glow-sm">
                Agendar Consulta Gratuita
              </Button>
              <Button size="lg" variant="outline" className="border-dark-700 hover:border-dark-600 hover:bg-dark-800">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
