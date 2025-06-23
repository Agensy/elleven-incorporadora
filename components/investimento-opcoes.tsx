"use client"

import { motion } from "framer-motion"
import { Home, Building, Store, TrendingUp, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const opcoes = [
  {
    icon: Home,
    titulo: "Residencial",
    subtitulo: "Casa Própria",
    descricao: "Apartamentos e casas para morar com financiamento facilitado e condições especiais.",
    vantagens: ["Financiamento até 35 anos", "Entrada a partir de 10%", "FGTS como entrada"],
    rentabilidade: "Valorização: 8-12% a.a.",
    risco: "Baixo",
    prazo: "Longo prazo",
  },
  {
    icon: Building,
    titulo: "Investimento",
    subtitulo: "Renda Passiva",
    descricao: "Imóveis para locação com alta rentabilidade e valorização garantida.",
    vantagens: ["Renda mensal garantida", "Valorização constante", "Diversificação de portfólio"],
    rentabilidade: "Rentabilidade: 6-10% a.a.",
    risco: "Médio",
    prazo: "Médio/Longo prazo",
  },
  {
    icon: Store,
    titulo: "Comercial",
    subtitulo: "Negócios",
    descricao: "Salas comerciais e lojas em pontos estratégicos para seu negócio crescer.",
    vantagens: ["Localização privilegiada", "Alto potencial de valorização", "Flexibilidade de uso"],
    rentabilidade: "Rentabilidade: 10-15% a.a.",
    risco: "Médio/Alto",
    prazo: "Médio prazo",
  },
]

export default function InvestimentoOpcoes() {
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
            Opções de <span className="text-secondary">Investimento</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Escolha a modalidade que melhor se adapta aos seus objetivos financeiros
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {opcoes.map((opcao, index) => {
            const Icon = opcao.icon
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-dark-800/50 backdrop-blur-sm border-dark-700 h-full hover:border-dark-600 transition-all duration-300 group">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-white text-xl">{opcao.titulo}</CardTitle>
                    <p className="text-secondary font-semibold">{opcao.subtitulo}</p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-dark-300 leading-relaxed">{opcao.descricao}</p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-white">Vantagens:</h4>
                      <ul className="space-y-2">
                        {opcao.vantagens.map((vantagem, i) => (
                          <li key={i} className="text-dark-300 text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                            {vantagem}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-dark-300">{opcao.rentabilidade}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Shield className="h-4 w-4 text-blue-500" />
                        <span className="text-dark-300">Risco: {opcao.risco}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-purple-500" />
                        <span className="text-dark-300">{opcao.prazo}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-secondary hover:bg-secondary/90 shadow-glow-xs">Saiba Mais</Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
