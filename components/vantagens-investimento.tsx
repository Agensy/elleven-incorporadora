"use client"

import { motion } from "framer-motion"
import { Shield, TrendingUp, Home, Banknote, Users, Award } from "lucide-react"

const vantagens = [
  {
    icon: Shield,
    titulo: "Segurança",
    descricao: "Investimento em bens tangíveis com menor volatilidade que outros ativos.",
    beneficio: "Proteção contra inflação",
  },
  {
    icon: TrendingUp,
    titulo: "Valorização",
    descricao: "Histórico consistente de valorização acima da inflação no longo prazo.",
    beneficio: "Ganho de capital garantido",
  },
  {
    icon: Banknote,
    titulo: "Renda Passiva",
    descricao: "Geração de renda mensal através de aluguéis sem esforço adicional.",
    beneficio: "Fluxo de caixa constante",
  },
  {
    icon: Home,
    titulo: "Uso Próprio",
    descricao: "Possibilidade de usar o imóvel para moradia ou negócios futuramente.",
    beneficio: "Flexibilidade total",
  },
  {
    icon: Users,
    titulo: "Herança",
    descricao: "Patrimônio sólido para deixar para as próximas gerações.",
    beneficio: "Legado familiar",
  },
  {
    icon: Award,
    titulo: "Prestígio",
    descricao: "Status social e reconhecimento por possuir patrimônio imobiliário.",
    beneficio: "Realização pessoal",
  },
]

export default function VantagensInvestimento() {
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
    <section className="section-padding-alt bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-glow-xs">
            Vantagens do <span className="text-secondary">Investimento Imobiliário</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Descubra por que o mercado imobiliário é uma das melhores opções para fazer seu dinheiro crescer
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {vantagens.map((vantagem, index) => {
            const Icon = vantagem.icon
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-lg p-6 hover:border-dark-600 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                  <Icon className="h-8 w-8 text-secondary" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{vantagem.titulo}</h3>
                <p className="text-dark-300 leading-relaxed mb-4">{vantagem.descricao}</p>

                <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-3">
                  <span className="text-secondary font-semibold text-sm">{vantagem.beneficio}</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Comparativo */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mt-16 bg-dark-800/30 border border-dark-700 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Comparativo de <span className="text-secondary">Rentabilidade</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">12%</div>
              <div className="text-white font-medium mb-1">Imóveis</div>
              <div className="text-sm text-dark-400">Valorização + Aluguel</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-dark-400 mb-2">13%</div>
              <div className="text-white font-medium mb-1">CDI</div>
              <div className="text-sm text-dark-400">Taxa atual</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-dark-400 mb-2">6%</div>
              <div className="text-white font-medium mb-1">Poupança</div>
              <div className="text-sm text-dark-400">Rendimento anual</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-dark-400 mb-2">10%</div>
              <div className="text-white font-medium mb-1">Tesouro</div>
              <div className="text-sm text-dark-400">IPCA+ 2035</div>
            </div>
          </div>

          <p className="text-center text-dark-400 text-sm mt-6">
            * Dados baseados em médias históricas e cenário atual do mercado
          </p>
        </motion.div>
      </div>
    </section>
  )
}
