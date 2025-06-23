"use client"

import React from "react"
import { motion } from "framer-motion"
import { ClipboardList, Settings, Palette, Eye, Building2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// =============================================================================
// DADOS DOS SERVIÇOS - OTIMIZADOS
// =============================================================================

const servicos = [
  {
    icon: ClipboardList,
    titulo: "Planejamento",
    subtitulo: "Estratégico",
    descricao: "Viabilidade técnica, anteprojetos arquitetônicos e análises jurídicas completas.",
    itens: ["Viabilidade técnica", "Anteprojetos", "Análises jurídicas"],
  },
  {
    icon: Settings,
    titulo: "Gestão",
    subtitulo: "de Obras",
    descricao: "Gerenciamento completo: financeiro, contábil, jurídico e de contratos.",
    itens: ["Gestão financeira", "Controle contábil", "Administração de contratos"],
  },
  {
    icon: Building2,
    titulo: "Incorporação",
    subtitulo: "Imobiliária",
    descricao: "Desenvolvimento completo do conceito à entrega das chaves.",
    itens: ["Incorporação", "Construção", "Entrega turnkey"],
  },
  {
    icon: Palette,
    titulo: "Design",
    subtitulo: "de Interiores",
    descricao: "Projetos de stands de vendas e ambientação personalizada.",
    itens: ["Stands de vendas", "Design de interiores", "Consultoria"],
  },
  {
    icon: Eye,
    titulo: "Acompanhamento",
    subtitulo: "Técnico",
    descricao: "Supervisão técnica e controle de qualidade em todas as etapas.",
    itens: ["Supervisão técnica", "Controle de qualidade", "Gestão de equipes"],
  },
]

// =============================================================================
// COMPONENTE PRINCIPAL
// =============================================================================

export default function ServicosSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
    viewport: { once: true, margin: "-50px" },
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.08 },
    viewport: { once: true },
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Header Moderno */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Juntos construiremos
            <br />
            o seu sonho
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed" style={{ fontSize: '0.875rem' }}>
            Soluções completas em engenharia e incorporação imobiliária, 
            com excelência em cada etapa do seu projeto.
          </p>
        </motion.div>

        {/* Grid de Serviços */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {servicos.map((servico, index) => {
            const Icon = servico.icon
            
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -2 }}
                className="group relative bg-card rounded-xl border border-border/20 hover:border-border/40 overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                {/* Número da Etapa */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-muted/30 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-muted-foreground">{index + 1}</span>
                </div>

                <div className="p-6">
                  {/* Header do Card */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-muted/50 group-hover:bg-muted/70 flex items-center justify-center transition-colors">
                      <Icon className="h-6 w-6 text-muted-foreground" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1" style={{ fontSize: '1.125rem' }}>
                        {servico.titulo} <span className="text-muted-foreground/80 font-medium">{servico.subtitulo}</span>
                      </h3>
                    </div>
                  </div>

                  {/* Descrição */}
                  <p className="text-muted-foreground leading-relaxed mb-4" style={{ fontSize: '0.875rem' }}>
                    {servico.descricao}
                  </p>

                  {/* Lista de Itens */}
                  <div className="space-y-2">
                    {servico.itens.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground/90">
                        <div className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Indicator - Azul Escuro */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-slate-800/20 via-slate-800/60 to-slate-800/20 
                              scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
