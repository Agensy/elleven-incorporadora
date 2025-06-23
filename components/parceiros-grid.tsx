"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

// =============================================================================
// DADOS DOS PARCEIROS
// =============================================================================

interface Parceiro {
  id: number
  nome: string
  logo: string
  categoria: string
  descricao: string
  website?: string
}

const parceiros: Parceiro[] = [
  {
    id: 1,
    nome: "Banco do Brasil",
    logo: "/parceiros/banco-do-brasil.png",
    categoria: "financeira",
    descricao: "Soluções de financiamento imobiliário com as melhores taxas do mercado."
  },
  {
    id: 2,
    nome: "Construz",
    logo: "/parceiros/construz.png",
    categoria: "construtora",
    descricao: "Parceria estratégica em projetos de construção e desenvolvimento urbano."
  },
  {
    id: 3,
    nome: "Safra",
    logo: "/parceiros/safra.png",
    categoria: "financeira",
    descricao: "Banco premium com soluções financeiras exclusivas para investidores."
  },
  {
    id: 4,
    nome: "Revolução",
    logo: "/parceiros/revolucao.png",
    categoria: "imobiliaria",
    descricao: "Inovação em vendas e marketing imobiliário com foco em resultados."
  },
  {
    id: 5,
    nome: "Stuchi Imóveis",
    logo: "/parceiros/stuchi-imoveis.png",
    categoria: "imobiliaria",
    descricao: "Tradição e excelência no mercado imobiliário há mais de 20 anos."
  },
  {
    id: 6,
    nome: "Vinocur",
    logo: "/parceiros/vinocur.png",
    categoria: "construtora",
    descricao: "Construtora especializada em empreendimentos residenciais de alto padrão."
  },
  {
    id: 7,
    nome: "Stuchi",
    logo: "/parceiros/stuchi.png",
    categoria: "imobiliaria",
    descricao: "Grupo imobiliário com expertise em desenvolvimento e comercialização."
  },
  {
    id: 8,
    nome: "Smart Solution",
    logo: "/parceiros/smart-solution.png",
    categoria: "tecnologia",
    descricao: "Soluções tecnológicas inteligentes para o setor imobiliário."
  },
  {
    id: 9,
    nome: "Vinx",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vinx%20%281%29-ZHFphsz1YXXTXfRzzyxrwVqLZn0XrZ.png",
    categoria: "imobiliaria",
    descricao: "Plataforma digital inovadora para transações imobiliárias."
  },
]

// =============================================================================
// COMPONENTE PRINCIPAL
// =============================================================================

export default function ParceirosGrid() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(3)

  // Usar todos os parceiros sempre (sem filtros)
  const parceirosVisiveis = parceiros
  
  // Total de slides baseado na quantidade por slide
  const totalSlides = Math.ceil(parceirosVisiveis.length / slidesToShow)

  // Responsividade
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth
      if (width < 640) {
        setSlidesToShow(1) // Mobile: 1 por slide
      } else if (width < 1024) {
        setSlidesToShow(2) // Tablet: 2 por slide
      } else {
        setSlidesToShow(3) // Desktop: 3 por slide
      }
    }

    updateSlidesToShow()
    window.addEventListener('resize', updateSlidesToShow)
    return () => window.removeEventListener('resize', updateSlidesToShow)
  }, [])

  // Reset slide quando slidesToShow muda
  useEffect(() => {
    setCurrentSlide(0)
  }, [slidesToShow])

  // Navegação do carrossel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  // Auto-play
  useEffect(() => {
    if (totalSlides <= 1) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4000) // 4 segundos por slide
    
    return () => clearInterval(interval)
  }, [totalSlides])

  // Função para obter parceiros do slide atual
  const getParceirosDoSlide = (slideIndex: number) => {
    const startIndex = slideIndex * slidesToShow
    const endIndex = startIndex + slidesToShow
    return parceirosVisiveis.slice(startIndex, endIndex)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="text-foreground">Parceiros</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O que nos torna únicos no mercado imobiliário de alto padrão
          </p>
        </motion.div>

        {/* Carrossel de Parceiros */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Navigation Buttons */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 bg-slate-800/90 backdrop-blur-sm border border-slate-600 rounded-full hover:bg-slate-700 hover:border-secondary/50 transition-all duration-300 flex items-center justify-center"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 bg-slate-800/90 backdrop-blur-sm border border-slate-600 rounded-full hover:bg-slate-700 hover:border-secondary/50 transition-all duration-300 flex items-center justify-center"
                aria-label="Próximo slide"
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </button>
            </>
          )}

          {/* Carrossel Container */}
          <div className="relative h-80 overflow-hidden rounded-xl">
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  slideIndex === currentSlide 
                    ? 'opacity-100 translate-x-0' 
                    : slideIndex < currentSlide 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="h-full flex items-center justify-center p-4">
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getParceirosDoSlide(slideIndex).map((parceiro, index) => (
                      <div key={parceiro.id} className="flex justify-center">
                        <div className="w-full max-w-sm">
                          <ParceiroCard parceiro={parceiro} index={index} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          {totalSlides > 1 && (
            <div className="flex justify-center items-center mt-8 gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? "w-8 bg-secondary" 
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Indicador de slide atual */}
          {totalSlides > 1 && (
            <div className="text-center mt-4">
              <span className="text-sm text-muted-foreground">
                Página {currentSlide + 1} de {totalSlides}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// =============================================================================
// COMPONENTE DO CARD
// =============================================================================

function ParceiroCard({ 
  parceiro, 
  index
}: {
  parceiro: Parceiro
  index: number
}) {
  return (
    <motion.div
      whileHover={{ 
        y: -8, 
        transition: { duration: 0.2 } 
      }}
      className="group relative rounded-xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col items-center justify-center"
      style={{ backgroundColor: '#1E2C51' }}
    >
      {/* Logo centralizada */}
      <img
        src={parceiro.logo}
        alt={`Logo ${parceiro.nome}`}
        className="max-h-20 max-w-full object-contain mb-8 transition-all duration-300 group-hover:scale-105"
        loading="lazy"
      />

      {/* Descrição centralizada */}
      <p className="text-sm text-white/90 text-center leading-relaxed group-hover:text-white transition-colors duration-300">
        {parceiro.descricao}
      </p>

      {/* Linha decorativa inferior */}
      <div className="absolute bottom-0 left-0 h-1 bg-secondary w-0 group-hover:w-full transition-all duration-500 ease-out" />
    </motion.div>
  )
} 