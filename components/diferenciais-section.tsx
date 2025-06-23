"use client"

import { motion } from "framer-motion"
import { Users, Zap, Lightbulb, TrendingUp } from "lucide-react"

// =============================================================================
// DADOS DOS DIFERENCIAIS
// =============================================================================

const diferenciais = [
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

export default function DiferenciaisSection() {
  // Animações padrão documentadas
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
    <section id="diferenciais" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header seguindo padrão documentado */}
        <HeaderSection fadeInUp={fadeInUp} />

        {/* Grid de Diferenciais */}
        <DiferenciaisGrid diferenciais={diferenciais} staggerContainer={staggerContainer} fadeInUp={fadeInUp} />

        {/* Bloco de Propósito */}
        <PropostoSection fadeInUp={fadeInUp} />
        
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
      className="text-center mb-16"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
        Nossos Diferenciais
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed" style={{ fontSize: '0.875rem' }}>
        O que nos torna únicos no mercado imobiliário de alto padrão
      </p>
    </motion.div>
  )
}

function DiferenciaisGrid({ diferenciais, staggerContainer, fadeInUp }: {
  diferenciais: any[]
  staggerContainer: any
  fadeInUp: any
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
    >
      {diferenciais.map((diferencial, index) => (
        <DiferencialCard key={index} diferencial={diferencial} fadeInUp={fadeInUp} />
      ))}
    </motion.div>
  )
}

function DiferencialCard({ diferencial, fadeInUp }: {
  diferencial: any
  fadeInUp: any
}) {
  const Icon = diferencial.icon

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -2, scale: 1.02 }}
      className="bg-card/50 border border-border/30 rounded-lg p-6 text-center hover:border-border/60 hover:bg-card/80 transition-all duration-300 group"
    >
      {/* Icon com padrão documentado */}
      <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
        <Icon className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors duration-300">
        {diferencial.titulo}
      </h3>
      <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '0.875rem' }}>
        {diferencial.descricao}
      </p>
    </motion.div>
  )
}

function PropostoSection({ fadeInUp }: { fadeInUp: any }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="max-w-5xl mx-auto"
    >
      <div className="bg-gradient-to-r from-secondary/5 to-primary/5 border border-secondary/10 rounded-2xl p-12 text-center">
        
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">Nosso Propósito</h3>
        </div>

        {/* Main Title */}
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
          Seu sonho, nossa realização
        </h4>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8" style={{ fontSize: '0.875rem' }}>
          Todo o nosso trabalho é planejado para ser agente transformador na conquista do seu imóvel.
          <span className="text-foreground font-semibold"> O seu sucesso é a nossa maior conquista</span> nessa empreitada.
        </p>

        {/* Decorative Elements padrão */}
        <div className="flex justify-center items-center gap-2">
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-border rounded-full"></div>
          <div className="w-2 h-2 bg-secondary rounded-full"></div>
          <div className="w-8 h-0.5 bg-gradient-to-r from-border to-transparent rounded-full"></div>
        </div>
      </div>
    </motion.div>
  )
}
