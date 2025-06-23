"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// =============================================================================
// COMPONENTE PRINCIPAL
// =============================================================================

export default function SobreSection() {
  // Animações
  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  }

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  }

  return (
    <section id="sobre" className="py-20 bg-muted">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Conteúdo de Texto */}
          <ConteudoTexto fadeInLeft={fadeInLeft} />

          {/* Imagem e Stats */}
          <ImagemStats fadeInRight={fadeInRight} />
          
        </div>
      </div>
    </section>
  )
}

// =============================================================================
// COMPONENTES AUXILIARES
// =============================================================================

function ConteudoTexto({ fadeInLeft }: { fadeInLeft: any }) {
  return (
          <motion.div variants={fadeInLeft} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
      
      {/* Título */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 text-glow-xs">
                      Sobre a Elleven Engenharia
            </h2>

      {/* Parágrafos */}
      <div className="space-y-6 mb-8">
                <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '0.875rem' }}>
          Há mais de 15 anos no mercado, a Elleven Engenharia se consolidou como referência em empreendimentos de alto padrão. Nossa missão é transformar sonhos em realidade através de projetos inovadores que combinam design excepcional, qualidade superior e sustentabilidade.
        </p>

        <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '0.875rem' }}>
          Trabalhamos com os mais altos padrões de qualidade e excelência, sempre buscando superar as expectativas dos nossos clientes. Nossa equipe de profissionais altamente qualificados está comprometida em entregar projetos que não apenas atendam, mas superem as expectativas.
        </p>

        <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '0.875rem' }}>
          Com um portfólio diversificado de empreendimentos residenciais e comerciais, a Elleven Engenharia se destaca pela atenção aos detalhes, uso de tecnologias avançadas e compromisso com prazos e orçamentos.
        </p>
      </div>

      {/* CTA */}
            <Button size="lg" className="mt-4 bg-secondary hover:bg-secondary/90 shadow-glow-sm group text-white">
              Conheça Nossa História
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
  )
}

function ImagemStats({ fadeInRight }: { fadeInRight: any }) {
  return (
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="relative"
          >
      {/* Imagem Principal */}
            <div className="relative overflow-hidden rounded-lg shadow-light-lg dark:shadow-2xl">
              <img
                src="/modern-construction-team.png"
                alt="Equipe Elleven Engenharia"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent dark:from-dark-900/60" />
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-6 shadow-light-md dark:shadow-2xl">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-secondary">15+</div>
                  <div className="text-sm text-muted-foreground">Anos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">50+</div>
                  <div className="text-sm text-muted-foreground">Projetos</div>
                </div>
              </div>
            </div>
          </motion.div>
  )
}
