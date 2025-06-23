"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EmpreendimentoGaleriaProps {
  galeria: string[]
  nome: string
}

export default function EmpreendimentoGaleria({ galeria, nome }: EmpreendimentoGaleriaProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galeria.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galeria.length) % galeria.length)
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  return (
    <>
      <section className="section-padding-alt bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-glow-xs">
              Galeria de <span className="text-secondary">Imagens</span>
            </h2>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              Conheça cada detalhe do {nome} através de nossa galeria exclusiva
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galeria.map((imagem, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={imagem || "/placeholder.svg"}
                  alt={`${nome} - Imagem ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-secondary/80 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">+</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={galeria[selectedImage] || "/placeholder.svg"}
              alt={`${nome} - Imagem ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
              {selectedImage + 1} / {galeria.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
