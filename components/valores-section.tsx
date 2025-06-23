"use client"

import { motion } from "framer-motion"
import { Users, Zap, Lightbulb, TrendingUp } from "lucide-react"

// =============================================================================
// DADOS DOS VALORES
// =============================================================================

const valores = [
  {
    icon: Users,
    titulo: "Respeito",
    descricao: "Clientes, colaboradores, investidores e parceiros são nossas prioridades. Respeitar as suas necessidades é fundamental.",
  },
  {
    icon: Zap,
    titulo: "Agilidade",
    descricao: "Processos otimizados e profissionais capacitados para atender às suas demandas, sempre cumprindo com o prazo.",
  },
  {
    icon: Lightbulb,
    titulo: "Inovação",
    descricao: "Com a capacidade para ousar, estamos alinhados com as novas tendências do mercado, em projetos verticais e horizontais.",
  },
  {
    icon: TrendingUp,
    titulo: "Aprimoramento",
    descricao: "Estamos em constante qualificação para oferecer um serviço com excelência. A evolução está em nosso sangue.",
  },
]

// =============================================================================
// COMPONENTE PRINCIPAL
// =============================================================================

export default function ValoresSection() {
  // Animações
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
    <section id="valores" className="section-padding bg-background">
      <div className="container mx-auto px-8">
        
        {/* Header */}
        <HeaderSection fadeInUp={fadeInUp} />

        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Grid de Valores */}
          <ValoresGrid valores={valores} staggerContainer={staggerContainer} fadeInUp={fadeInUp} />

          {/* Bloco de Propósito */}
          <PropostoBlock fadeInUp={fadeInUp} />
          
        </div>
      </div>
    </section>
  )
}

// =============================================================================
// COMPONENTES AUXILIARES
// =============================================================================

function HeaderSection({ fadeInUp }: { fadeInUp: any }) {
  return (
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
              className="text-center mb-11"
        >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Nossos <span className="text-foreground">Valores</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        </motion.div>
  )
}

function ValoresGrid({ valores, staggerContainer, fadeInUp }: {
  valores: any[]
  staggerContainer: any
  fadeInUp: any
}) {
  return (
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
      {valores.map((valor, index) => (
        <ValorCard key={index} valor={valor} fadeInUp={fadeInUp} />
      ))}
    </motion.div>
  )
}

function ValorCard({ valor, fadeInUp }: {
  valor: any
  fadeInUp: any
}) {
              const Icon = valor.icon

              return (
                <motion.div
                  variants={fadeInUp}
      className="bg-card backdrop-blur-sm border border-border rounded-lg p-6 hover:border-secondary/50 transition-all duration-300 shadow-light-sm hover:shadow-light-md"
                >
      {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
        <h3 className="text-xl font-bold text-foreground">{valor.titulo}</h3>
                  </div>
      
      {/* Descrição */}
      <p className="text-muted-foreground leading-relaxed">{valor.descricao}</p>
                </motion.div>
              )
}

function PropostoBlock({ fadeInUp }: { fadeInUp: any }) {
  return (
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex items-center"
          >
      <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20 rounded-lg p-8 w-full shadow-light-sm">
        
        {/* Header */}
              <div className="mb-6">
          <h3 className="text-2xl font-bold text-foreground">Nosso Propósito</h3>
              </div>

        {/* Título Principal */}
        <h4 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Seu sonho,
                <br />
                        <span className="text-foreground">nossa realização</span>
              </h4>

        {/* Descrição */}
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed text-lg">
            Todo o nosso trabalho é planejado para ser agente transformador na conquista do seu imóvel, empreendimento ou investimento.
              </p>

          <p className="text-muted-foreground leading-relaxed text-lg">
                Porque, para nós,{" "}
            <span className="text-secondary font-semibold">o seu sucesso é a nossa maior conquista</span> nessa empreitada.
              </p>
        </div>
      </div>
    </motion.div>
  )
}
