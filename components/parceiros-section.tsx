"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// =============================================================================
// DADOS DOS PARCEIROS
// =============================================================================

const parceiros = [
  {
    id: 1,
    nome: "Banco do Brasil",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bb%20%281%29-FDuuKoeGIz4hYCTKoSfSan7Ac3V05Q.png",
  },
  {
    id: 2,
    nome: "Construz",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/construz-YjK77Bp6tNXiqAxJ1Of9H8hrq1O0nS.png",
  },
  {
    id: 3,
    nome: "Safra",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/safra-07i9tic9iBWjipn3Pfhf6IpQkN53iK.png",
  },
  {
    id: 4,
    nome: "Revolução",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/revolucao-XWBNP3owoXWMLxWxhNOC5SYrf37Twa.png",
  },
  {
    id: 5,
    nome: "Stuchi Imóveis",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stuchi-imoveis-sCuv6GqRee3XDLOudQmBylv3A9yJYs.png",
  },
  {
    id: 6,
    nome: "Vinocur",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vinocur%20%281%29-IcJXA9hAeCz8gC1pNR401F9LGtl8oj.png",
  },
  {
    id: 7,
    nome: "Stuchi",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stuchi-1LTa1uW2EIOQZl4oD2TDuxAUf9YVsP.png",
  },
  {
    id: 8,
    nome: "Smart Solution",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smart-solution-4AYY2NU5xxvDvvpEsAJOFCXqwrwL1s.png",
  },
  {
    id: 9,
    nome: "Vinx",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vinx%20%281%29-ZHFphsz1YXXTXfRzzyxrwVqLZn0XrZ.png",
  },
]

// =============================================================================
// COMPONENTE PRINCIPAL
// =============================================================================

export default function ParceirosSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(4)

  // Calcula o total de páginas
  const totalSlides = Math.max(1, parceiros.length - slidesToShow + 1)

  // Responsividade
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth
      if (width < 640) {
        setSlidesToShow(1)
      } else if (width < 768) {
        setSlidesToShow(2)
      } else if (width < 1024) {
        setSlidesToShow(3)
      } else {
        setSlidesToShow(4)
      }
    }

    updateSlidesToShow()
    window.addEventListener('resize', updateSlidesToShow)
    return () => window.removeEventListener('resize', updateSlidesToShow)
  }, [])

  // Navegação
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [currentSlide, totalSlides])

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  return (
    <section id="parceiros" className="py-20 bg-gray-50">
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
            Empresas que confiam em nosso trabalho
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontSize: '0.875rem' }}>
            O que nos torna únicos no mercado imobiliário de alto padrão
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-full hover:bg-white hover:border-secondary/50 shadow-lg transition-all duration-300 flex items-center justify-center"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-full hover:bg-white hover:border-secondary/50 shadow-lg transition-all duration-300 flex items-center justify-center"
            aria-label="Próximo slide"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
                width: `${(parceiros.length * 100) / slidesToShow}%`
              }}
            >
              {parceiros.map((parceiro) => (
                <div
                  key={parceiro.id}
                  className="px-2 md:px-3"
                  style={{ width: `${100 / parceiros.length}%` }}
                >
                  <div className="bg-slate-800 border border-slate-600 rounded-lg p-6 h-28 md:h-32 flex items-center justify-center hover:border-secondary/50 transition-all duration-300 group cursor-pointer hover:scale-105 hover:-translate-y-1">
                    <div className="relative w-full h-full flex items-center justify-center bg-slate-700 rounded-md p-3">
                      <img
                        src={parceiro.logo}
                        alt={`Logo ${parceiro.nome}`}
                        className="max-h-8 md:max-h-10 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0"
                        loading="lazy"
                        style={{
                          filter: 'grayscale(100%)',
                        }}
                        onError={(e) => {
                          const img = e.currentTarget;
                          const fallback = img.nextElementSibling as HTMLElement;
                          img.style.display = 'none';
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                      {/* Fallback para logos que não carregam */}
                      <div className="hidden absolute inset-0 flex items-center justify-center bg-slate-600 rounded text-white text-xs font-medium border-2 border-dashed border-slate-400">
                        {parceiro.nome}
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                        {parceiro.nome}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
        </div>
      </div>
    </section>
  )
}
