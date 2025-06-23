"use client"

import { motion } from "framer-motion"

// =============================================================================
// DADOS DO TIME
// =============================================================================

const timeElleven = [
  {
    id: 1,
    nome: "Eduardo Rocha",
    cargo: "Founder & CEO",
    imagem: "/empreendimentos/_SITE ELLEVEN/_PESSOAS ELLEVEN/1 - EDUARDO ROCHA.png",
    descricao: "Visionário empreendedor com mais de 15 anos de experiência no mercado imobiliário. Lidera a Elleven com foco em inovação e excelência, transformando projetos em realidade e superando expectativas dos clientes."
  },
  {
    id: 2,
    nome: "Marco Túlio",
    cargo: "CTO & Co-founder",
    imagem: "/empreendimentos/_SITE ELLEVEN/_PESSOAS ELLEVEN/2 - MARCO TÚLIO.png",
    descricao: "Especialista em tecnologia e desenvolvimento de projetos, combina expertise técnica com visão estratégica. Responsável pela implementação de soluções inovadoras que posicionam a Elleven na vanguarda do setor."
  },
  {
    id: 3,
    nome: "Fernando Remor",
    cargo: "Diretor de Projetos",
    imagem: "/empreendimentos/_SITE ELLEVEN/_PESSOAS ELLEVEN/3 - FERNANDO REMOR.png",
    descricao: "Com vasta experiência em gestão de projetos imobiliários, Fernando garante que cada empreendimento seja executado com precisão, qualidade e dentro dos prazos estabelecidos, mantendo os mais altos padrões da empresa."
  },
  {
    id: 4,
    nome: "Mauro Resende",
    cargo: "Diretor Comercial",
    imagem: "/empreendimentos/_SITE ELLEVEN/_PESSOAS ELLEVEN/4 - MAURO RESENDE.png",
    descricao: "Especialista em relacionamento com clientes e estratégias comerciais. Mauro lidera a equipe de vendas com foco em compreender as necessidades dos clientes e oferecer soluções personalizadas de alto valor."
  }
]

// =============================================================================
// COMPONENTE PRINCIPAL
// =============================================================================

export default function QuemSomosSection() {
  // Animações
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.2 },
    viewport: { once: true },
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Quem somos nós
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed" style={{ fontSize: '0.875rem' }}>
            Conheça os profissionais visionários que lideram a Elleven Engenharia, combinando experiência, 
            inovação e excelência em cada projeto.
          </p>
        </motion.div>

        {/* Grid do Time */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto"
        >
          {timeElleven.map((pessoa) => (
            <PessoaCard key={pessoa.id} pessoa={pessoa} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// =============================================================================
// COMPONENTES AUXILIARES
// =============================================================================

function PessoaCard({ pessoa }: { pessoa: any }) {
  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  return (
    <motion.div
      variants={cardVariants}
      className="text-center group"
    >
      {/* Foto */}
      <div className="relative mb-6 mx-auto w-48 h-48 lg:w-56 lg:h-56">
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-secondary/20 group-hover:border-secondary/40 transition-all duration-300 shadow-lg">
          <img
            src={pessoa.imagem}
            alt={pessoa.nome}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {/* Overlay sutil no hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Informações */}
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors duration-300">
          {pessoa.nome}
        </h3>
        <p className="text-secondary font-medium text-sm uppercase tracking-wider">
          {pessoa.cargo}
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4" style={{ fontSize: '0.875rem' }}>
          {pessoa.descricao}
        </p>
      </div>
    </motion.div>
  )
} 