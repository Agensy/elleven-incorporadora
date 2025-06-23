"use client"

import { motion } from "framer-motion"
import { TrendingUp, ArrowRight, Target, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InvestimentoSection() {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Bloco de Texto */}
          <motion.div variants={fadeInLeft} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              A rentabilidade
              <br />
              certa para o seu
              <br />
              investimento
            </h2>

            <p className="text-muted-foreground mb-10 leading-relaxed" style={{ fontSize: '0.875rem' }}>
              No mercado imobiliário, você encontra a segurança e rentabilidade que seu patrimônio merece. Invista em
              empreendimentos sólidos com potencial de valorização garantido.
            </p>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
            >
              {[
                { icon: TrendingUp, title: "Valorização", subtitle: "Constante" },
                { icon: DollarSign, title: "Renda", subtitle: "Passiva" },
                { icon: Target, title: "Segurança", subtitle: "Garantida" },
                { icon: "percent", title: "Rentabilidade", subtitle: "Acima da média" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-secondary/5 hover:shadow-md transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                    {typeof item.icon === "string" ? (
                      <div className="text-secondary font-bold text-sm">%</div>
                    ) : (
                      <item.icon className="h-6 w-6 text-secondary" />
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-foreground group-hover:text-secondary transition-colors duration-300" style={{ fontSize: '1rem' }}>
                      {item.title}
                    </div>
                    <div className="text-sm text-muted-foreground">{item.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 shadow-glow-sm group text-white">
                Quero Investir
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button size="lg" variant="outline" className="border-secondary/30 text-secondary hover:border-secondary hover:bg-secondary/5">
                Simular Investimento
              </Button>
            </div>
          </motion.div>

          {/* Bloco de Imagem */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="relative order-first lg:order-last"
          >
            <div className="relative max-w-md mx-auto lg:max-w-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homem-terno-investimento-5kKFFwfh6r3Cy9nptvdULYrDGlDVkP.png"
                alt="Especialista em investimentos imobiliários"
                className="w-full h-auto"
              />

              {/* Elementos decorativos melhorados */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Cards flutuantes com melhor posicionamento */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-4 left-0 lg:-bottom-6 lg:-left-6 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg p-4 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-secondary mb-1">12%</div>
                <div className="text-xs lg:text-sm text-muted-foreground">Rentabilidade anual</div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute top-4 right-0 lg:-top-6 lg:-right-6 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg p-3 lg:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="font-bold text-secondary mb-1" style={{ fontSize: '1rem' }}>R$ 2M+</div>
                <div className="text-xs text-muted-foreground">Investimentos</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
