"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsLoading(true)
      // Simular loading
      setTimeout(() => {
        setIsLoading(false)
        setIsSubscribed(true)
        setEmail("")
        setTimeout(() => setIsSubscribed(false), 4000)
      }, 1500)
    }
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
    <section className="section-padding-large bg-gradient-to-br from-muted/60 via-muted/40 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          {/* Header seguindo padrão documentado */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            {/* Ícone com padrão documented */}
            <motion.div 
              className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Mail className="h-8 w-8 text-secondary" />
            </motion.div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Fique por Dentro dos{" "}
              <span className="text-secondary">Lançamentos</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Receba em primeira mão informações sobre nossos novos empreendimentos, ofertas exclusivas e dicas do mercado imobiliário.
            </p>
          </motion.div>

          {isSubscribed ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 15, stiffness: 100 }}
              className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 shadow-lg"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 0.6 }}
              >
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Inscrição Realizada!</h3>
              <p className="text-green-600 text-lg">Obrigado por se inscrever. Você receberá nossas novidades em breve.</p>
            </motion.div>
          ) : (
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Container do formulário com glassmorphism padrão */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <div className="flex-1 relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    <Input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="relative h-14 bg-white/90 backdrop-blur-sm border-2 border-transparent text-foreground placeholder:text-muted-foreground focus:border-secondary focus:bg-white focus:shadow-lg transition-all duration-300 rounded-xl text-lg group-hover:bg-white group-hover:shadow-md"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    size="lg"
                    className="h-14 px-8 bg-secondary hover:bg-secondary/90 shadow-glow-sm group text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-secondary/25 transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap text-lg"
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="flex items-center gap-2"
                      >
                        <Loader2 className="h-5 w-5" />
                        Enviando...
                      </motion.div>
                    ) : (
                      "Inscrever-se"
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          )}

          {/* Disclaimer com elementos decorativos padrão */}
          <motion.p 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-sm text-muted-foreground/80 flex items-center justify-center gap-2"
          >
            <span className="w-1 h-1 bg-secondary rounded-full"></span>
            Respeitamos sua privacidade. Você pode cancelar a inscrição a qualquer momento.
            <span className="w-1 h-1 bg-secondary rounded-full"></span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
