"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MapPin,
  Calendar,
  Home,
  Dumbbell,
  Car,
  Users,
  Sparkles,
  Smartphone,
  Shield,
  Building,
  Play,
  Trees,
  Coffee,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { buscarEmpreendimentosDestaque } from "@/lib/data/empreendimentos"

// =============================================================================
// DADOS DOS BANNERS
// =============================================================================

// Helper para mapear slugs para suas páginas específicas
function getEmpreendimentoUrl(slug: string | null): string {
  if (!slug) return "/empreendimentos"
  
  const empreendimentoUrls: Record<string, string> = {
    'jade': '/jade',
    'obsidian': '/obsidian',
    'icarai': '/icarai'
  }
  
  return empreendimentoUrls[slug] || "/empreendimentos"
}

// Helper para estilos hover por empreendimento
function getEmpreendimentoHoverStyle(slug: string | null): string {
  if (!slug) return 'hover:bg-white/10 hover:border-white/40'
  
  const hoverStyles: Record<string, string> = {
    'jade': 'hover:bg-green-900/20 hover:border-green-600/60',
    'obsidian': 'hover:bg-orange-900/20 hover:border-orange-600/60',
    'icarai': 'hover:bg-blue-900/20 hover:border-blue-600/60'
  }
  
  return hoverStyles[slug] || 'hover:bg-white/10 hover:border-white/40'
}

// Helper para estilos de texto hover por empreendimento
function getEmpreendimentoTextHoverStyle(slug: string | null): string {
  if (!slug) return 'hover:opacity-80'
  
  const textHoverStyles: Record<string, string> = {
    'jade': 'hover:text-green-400',
    'obsidian': 'hover:text-orange-400',
    'icarai': 'hover:text-blue-400'
  }
  
  return textHoverStyles[slug] || 'hover:opacity-80'
}

// =============================================================================
// DADOS DOS BANNERS
// =============================================================================

// Banners placeholder para quando não há empreendimentos
const bannersPlaceholder = [
  {
    id: 1,
    titulo: "Em Breve",
    slug: null, // Placeholder não tem slug
    subtitulo: "Novos Lançamentos",
    slogan: "Excelência em Construção",
    localizacao: "São Paulo, SP",
    status: "Aguarde",
    descricao: "Empreendimentos exclusivos em desenvolvimento. Cadastre-se para ser o primeiro a saber.",
    preco: "Valores em breve",
    entrega: "Em breve",
    imagem: "/placeholder.svg",
    imagemDestaque: "/placeholder.svg",
    video: false,
    destaque: "EM BREVE",
    destaqueInfo: "Novidades",
    diferenciais: ["Projetos exclusivos", "Localização privilegiada"],
    amenidades: [
      { icon: Building, label: "Projetos", info: "Exclusivos" },
      { icon: Shield, label: "Qualidade", info: "Premium" },
      { icon: Sparkles, label: "Inovação", info: "Design" },
      { icon: Users, label: "Atendimento", info: "VIP" },
    ],
    localizacaoDetalhes: [
      { nome: "Centro", distancia: "Próximo" },
      { nome: "Transporte", distancia: "Acessível" },
    ],
    identidadeVisual: {
      logo: null,
      corPrimaria: "#D4AF37",
      imagemBackground: "/placeholder.svg"
    }
  },
  {
    id: 2,
    titulo: "Cadastre-se",
    slug: null, // Placeholder não tem slug
    subtitulo: "Fique por Dentro",
    slogan: "Oportunidades Exclusivas",
    localizacao: "São Paulo, SP",
    status: "Newsletter",
    descricao: "Seja o primeiro a conhecer nossos próximos lançamentos e oportunidades especiais.",
    preco: "Condições especiais",
    entrega: "Notificações",
    imagem: "/placeholder.svg",
    imagemDestaque: "/placeholder.svg",
    video: false,
    destaque: "CADASTRE-SE",
    destaqueInfo: "Newsletter",
    diferenciais: ["Acesso antecipado", "Condições exclusivas"],
    amenidades: [
      { icon: Smartphone, label: "Digital", info: "Moderno" },
      { icon: Users, label: "Exclusivo", info: "VIP" },
      { icon: Building, label: "Portfólio", info: "Variado" },
      { icon: Shield, label: "Confiança", info: "Total" },
    ],
    localizacaoDetalhes: [
      { nome: "Toda SP", distancia: "Cobertura" },
      { nome: "Oportunidades", distancia: "Sempre" },
    ],
  },
  {
    id: 3,
    titulo: "Qualidade",
    slug: null, // Placeholder não tem slug
    subtitulo: "Nossa Marca",
    slogan: "Tradição e Inovação",
    localizacao: "São Paulo, SP",
    status: "Sempre",
    descricao: "Anos de experiência construindo sonhos com qualidade, inovação e responsabilidade.",
    preco: "Valor justo sempre",
    entrega: "No prazo",
    imagem: "/placeholder.svg",
    imagemDestaque: "/placeholder.svg",
    video: false,
    destaque: "QUALIDADE",
    destaqueInfo: "Tradição",
    diferenciais: ["Experiência comprovada", "Entrega no prazo"],
    amenidades: [
      { icon: Shield, label: "Garantia", info: "Total" },
      { icon: Building, label: "Experiência", info: "Anos" },
      { icon: Users, label: "Equipe", info: "Expert" },
      { icon: Sparkles, label: "Resultados", info: "Excelentes" },
    ],
    localizacaoDetalhes: [
      { nome: "Atendimento", distancia: "24/7" },
      { nome: "Suporte", distancia: "Sempre" },
    ],
  },
]

// Converter empreendimentos do sistema para formato de banner
function empreendimentoParaBanner(emp: any) {
  return {
    id: emp.id,
    titulo: emp.nome,
    slug: emp.slug,
    subtitulo: emp.subtitulo || "Novo Empreendimento",
    slogan: emp.slogan || "Viva bem",
    localizacao: emp.localizacao,
    status: emp.status,
    descricao: emp.descricao,
    preco: emp.precoFormatado,
    entrega: emp.entrega,
    imagem: emp.imagemDestaque || emp.imagem,
    imagemDestaque: emp.imagem,
    video: !!emp.video,
    destaque: emp.status.toUpperCase(),
    destaqueInfo: emp.destaque || emp.subtitulo,
    diferenciais: emp.diferenciais?.slice(0, 3) || ["Projeto exclusivo", "Localização premium"],
    identidadeVisual: emp.identidadeVisual,
    amenidades: [
      { icon: Building, label: "Tipo", info: emp.tipo },
      { icon: Home, label: "Área", info: emp.area || `${emp.quartos}Q` },
      { icon: MapPin, label: "Local", info: emp.bairro },
      { icon: Shield, label: "Status", info: emp.status },
    ],
    localizacaoDetalhes: emp.pontos_interesse?.slice(0, 2)?.map((p: any) => ({
      nome: p.nome,
      distancia: p.distancia
    })) || [
      { nome: "Centro", distancia: "Próximo" },
      { nome: "Transporte", distancia: "Acessível" }
    ],
  }
}

// Buscar empreendimentos em destaque ou usar placeholders
const empreendimentosDestaque = buscarEmpreendimentosDestaque()
const banners = empreendimentosDestaque.length > 0 
  ? empreendimentosDestaque.map(empreendimentoParaBanner)
  : bannersPlaceholder

// =============================================================================
// COMPONENTE PRINCIPAL
// =============================================================================

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)

  // Auto-play otimizado
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 6000) // Aumentado para dar mais tempo para carregar

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Navegação otimizada com useCallback
  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % banners.length)
    setIsAutoPlaying(false)
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
    setIsAutoPlaying(false)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }, [currentSlide])

  const currentBanner = banners[currentSlide]

  return (
    <section className="relative h-[75vh] md:h-[80vh] overflow-hidden bg-black">
      
      {/* Background com transição simplificada */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut"
            }}
            className="absolute inset-0"
          >
            {currentBanner.identidadeVisual?.imagemBackground || currentBanner.imagem ? (
              <>
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
                  style={{
                    backgroundImage: `url('${currentBanner.identidadeVisual?.imagemBackground || currentBanner.imagem}')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]" />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content com transição única */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-8 max-w-7xl">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              initial={{ x: direction > 0 ? 50 : -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction < 0 ? 50 : -50, opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
            >
              
              {/* Texto - 7 colunas */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* Logo */}
                {currentBanner.identidadeVisual?.logo && (
                  <div>
                    <img
                      src={currentBanner.identidadeVisual.logo}
                      alt={`Logo ${currentBanner.titulo}`}
                      className={`w-auto filter drop-shadow-lg ${
                        currentBanner.slug === 'obsidian' 
                          ? 'h-14 md:h-16 transform scale-100' 
                          : 'h-16 md:h-20 transform scale-110'
                      }`}
                    />
                  </div>
                )}

                {/* Localização */}
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-white/60" />
                  <span 
                    className="text-sm font-medium tracking-[0.2em] uppercase"
                    style={{ color: currentBanner.identidadeVisual?.corPrimaria || "#D4AF37" }}
                  >
                    {currentBanner.localizacao}
                  </span>
                </div>

                {/* Título Principal */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight">
                  {currentBanner.slogan}
                </h1>

                {/* Descrição */}
                <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                  {currentBanner.descricao}
                </p>

                {/* CTA */}
                <div className="pt-4">
                  <Link href={getEmpreendimentoUrl(currentBanner.slug)}>
                    <Button
                      variant="outline"
                      size="lg"
                      className={`group bg-transparent border-white/20 text-white transition-all duration-300 ${getEmpreendimentoHoverStyle(currentBanner.slug)}`}
                    >
                      Conhecer Mais
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Imagem - 5 colunas */}
              <div className="lg:col-span-5 relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  
                  {/* Imagem principal com loading otimizado */}
                  <img
                    src={currentBanner.imagemDestaque || "/placeholder.svg"}
                    alt={currentBanner.titulo}
                    className="w-full h-[500px] md:h-[600px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />
                  
                                     {/* Badge status */}
                   <div className="absolute top-6 right-6">
                     <div className="bg-white/10 backdrop-blur-lg rounded-xl px-4 py-2 border border-white/20 shadow-xl">
                       <span className="text-white text-xs font-bold">
                         {currentBanner.subtitulo}
                       </span>
                     </div>
                   </div>

                  {/* Características simplificadas */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    
                    {/* Ícones de características */}
                    <div className="grid grid-cols-4 gap-4 mb-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-black/60 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-2 p-3">
                          <Home className="h-6 w-6 text-white" strokeWidth={1.5} />
                        </div>
                        <div className="text-xs text-white font-medium">STUDIOS</div>
                        <div className="text-xs text-white/80">25 a 40m²</div>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-black/60 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-2 p-3">
                          <Dumbbell className="h-6 w-6 text-white" strokeWidth={1.5} />
                        </div>
                        <div className="text-xs text-white font-medium">SAÚDE</div>
                        <div className="text-xs text-white/80">Academia</div>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-black/60 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-2 p-3">
                          <Coffee className="h-6 w-6 text-white" strokeWidth={1.5} />
                        </div>
                        <div className="text-xs text-white font-medium">BEM-ESTAR</div>
                        <div className="text-xs text-white/80">Sauna</div>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-black/60 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-2 p-3">
                          <Sparkles className="h-6 w-6 text-white" strokeWidth={1.5} />
                        </div>
                        <div className="text-xs text-white font-medium">LAZER</div>
                        <div className="text-xs text-white/80">Piscina Aquecida</div>
                      </div>
                    </div>

                    {/* Informações finais */}
                    <div className="flex items-end justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <MapPin 
                            className="h-4 w-4" 
                            style={{color: currentBanner.identidadeVisual?.corPrimaria || "#D4AF37"}} 
                          />
                          <span className="text-white text-sm font-medium">{currentBanner.localizacao}</span>
                        </div>
                      </div>

                      {/* Ver detalhes */}
                      <div>
                        <Link href={getEmpreendimentoUrl(currentBanner.slug)}>
                          <button 
                            className={`text-xs font-medium transition-all duration-300 flex items-center gap-1 ${getEmpreendimentoTextHoverStyle(currentBanner.slug)}`}
                            style={{color: currentBanner.identidadeVisual?.corPrimaria || "#D4AF37"}}
                          >
                            Ver detalhes
                            <ArrowRight className="h-3 w-3" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controles simplificados */}
      <NavigationControls
        currentSlide={currentSlide}
        bannersLength={banners.length}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        goToSlide={goToSlide}
      />

      {/* Barra de progresso otimizada */}
      <ProgressBar isAutoPlaying={isAutoPlaying} currentSlide={currentSlide} />
      
    </section>
  )
}

// =============================================================================
// COMPONENTES AUXILIARES OTIMIZADOS
// =============================================================================

function NavigationControls({ currentSlide, bannersLength, nextSlide, prevSlide, goToSlide }: {
  currentSlide: number
  bannersLength: number
  nextSlide: () => void
  prevSlide: () => void
  goToSlide: (index: number) => void
}) {
  return (
    <>
      {/* Setas de navegação */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-30">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="h-12 w-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30">
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="h-12 w-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        <div className="flex items-center gap-3">
          {Array.from({ length: bannersLength }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-white' 
                  : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </>
  )
}

function ProgressBar({ isAutoPlaying, currentSlide }: { isAutoPlaying: boolean, currentSlide: number }) {
  if (!isAutoPlaying) return null

  return (
    <div className="absolute top-0 left-0 right-0 z-30">
      <div className="h-0.5 bg-white/20">
        <motion.div
          key={currentSlide}
          className="h-full bg-white/60"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
        />
      </div>
    </div>
  )
}
