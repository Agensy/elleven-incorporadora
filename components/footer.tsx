"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
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
    <footer className="border-t border-white/10" style={{ backgroundColor: '#1E2C51' }}>
      <div className="container mx-auto px-8 py-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Logo e Descrição */}
          <motion.div variants={fadeInUp} className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img
                src="/logo-elleven-white.png"
                alt="Elleven Engenharia"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-white/80 leading-relaxed mb-6" style={{ fontSize: '0.875rem' }}>
               Muito além do aço e concreto, construímos sonhos. Empreendimentos premium com inovação, qualidade e sustentabilidade.
             </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-9 h-9 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-200"
              >
                <Facebook className="h-4 w-4 text-white" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-200"
              >
                <Instagram className="h-4 w-4 text-white" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-200"
              >
                <Linkedin className="h-4 w-4 text-white" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-200"
              >
                <Youtube className="h-4 w-4 text-white" />
              </Link>
            </div>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-white font-semibold mb-6" style={{ fontSize: '1rem' }}>Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                   href="#empreendimentos"
                   className="text-white/70 hover:text-white transition-colors duration-200"
                   style={{ fontSize: '0.875rem' }}
                 >
                   Empreendimentos
                 </Link>
              </li>
              <li>
                <Link
                   href="#servicos"
                   className="text-white/70 hover:text-white transition-colors duration-200"
                   style={{ fontSize: '0.875rem' }}
                 >
                   Serviços
                 </Link>
              </li>
              <li>
                <Link
                   href="#sobre"
                   className="text-white/70 hover:text-white transition-colors duration-200"
                   style={{ fontSize: '0.875rem' }}
                 >
                   Sobre Nós
                 </Link>
              </li>
              <li>
                <Link
                   href="#diferenciais"
                   className="text-white/70 hover:text-white transition-colors duration-200"
                   style={{ fontSize: '0.875rem' }}
                 >
                   Diferenciais
                 </Link>
              </li>
              <li>
                <Link
                   href="/invista"
                   className="text-white/70 hover:text-white transition-colors duration-200"
                   style={{ fontSize: '0.875rem' }}
                 >
                   Invista
                 </Link>
              </li>
            </ul>
          </motion.div>

          {/* Serviços */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-white font-semibold mb-6" style={{ fontSize: '1rem' }}>Serviços</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors duration-200" style={{ fontSize: '0.875rem' }}>
                   Planejamento Completo
                 </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors duration-200" style={{ fontSize: '0.875rem' }}>
                   Gestão de Obras
                 </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors duration-200" style={{ fontSize: '0.875rem' }}>
                   Design de Interiores
                 </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors duration-200" style={{ fontSize: '0.875rem' }}>
                   Acompanhamento de Obras
                 </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors duration-200" style={{ fontSize: '0.875rem' }}>
                   Incorporação e Construção
                 </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="text-white font-semibold mb-6" style={{ fontSize: '1rem' }}>Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-white/70 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 leading-relaxed" style={{ fontSize: '0.875rem' }}>
                     Av. Paulista, 1000
                     <br />
                     Bela Vista, São Paulo - SP
                     <br />
                     01310-100
                   </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white/70 flex-shrink-0" />
                <p className="text-white/70" style={{ fontSize: '0.875rem' }}>(21) 3333-4444</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-white/70 flex-shrink-0" />
                <p className="text-white/70" style={{ fontSize: '0.875rem' }}>contato@elleven.com.br</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="border-t border-white/20 mt-12 pt-6 text-center"
        >
          <p className="text-white/60" style={{ fontSize: '0.875rem' }}>© 2024 Elleven Engenharia. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}
