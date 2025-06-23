"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Calendar, Home, Car, Phone, Download, Trees, Waves } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

// Dados do Icaraí Parque Clube
const icarai = {
  nome: "Icaraí Parque Clube",
  subtitulo: "EM CONSTRUÇÃO",
  slogan: "Onde Natureza e Qualidade de Vida se Encontram",
  localizacao: "Salto, São Paulo - SP",
  endereco: "Avenida Brasília, 739",
  preco: "A partir de R$ 480.000",
  area: "55.000m²",
  entrega: "Novembro 2026",
  tipo: "3 dormitórios",
  descricao: "Um lugar onde o equilíbrio entre qualidade de vida e o encanto da natureza cria o cenário perfeito para o seu novo lar. Com 55 mil metros quadrados, o Icaraí Parque Clube oferece uma experiência completa de moradia com infraestrutura de clube.",
  imagem: "/empreendimentos/_SITE ELLEVEN/ICARAÍ/1 - VITRINE_ICARAÍ.jpg",
  imagemDestaque: "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_ÁREA DA PISCINA.jpg",
  diferenciais: [
    "55.000m² de área total com muito verde",
    "408 unidades distribuídas em 4 torres modernas",
    "Piscina com raias para natação e área de lazer",
    "Pool bar com mesas e cadeiras para convivência",
    "Quadra de beach tennis profissional",
    "Quadra de tênis oficial",
    "Quadra poliesportiva completa",
    "Bicicletário moderno com suportes verticais",
    "Playground colorido com equipamentos modernos",
    "Praça de convivência com fogueira central",
    "Segurança 24 horas com portaria elegante",
    "Ampla área verde com paisagismo tropical"
  ],
  pontosInteresse: [
    { nome: "Centro de Salto", distancia: "2km" },
    { nome: "Rodovia Castello Branco", distancia: "5km" },
    { nome: "Shopping Itu Plaza", distancia: "15km" },
    { nome: "Hospital Municipal de Salto", distancia: "3km" },
    { nome: "Estação Ferroviária de Salto", distancia: "4km" }
  ],
  plantas: [
    {
      tipo: "Apartamento 2 dormitórios",
      area: "58m²",
      preco: "A partir de R$ 480.000",
      imagem: "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_Z 38-icarai-planta-tipo-b-r03-alta-66m-270ef9e269db6fd88396e0ba56f02f2b0c970d4f.jpg"
    },
    {
      tipo: "Apartamento 3 dormitórios",
      area: "68m²",
      preco: "A partir de R$ 580.000",
      imagem: "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_Z 38-icarai-planta-tipo-a-r02-alta-75m-b612e3e6b3d5a2124b835d983f60e0771f4a3b4e.jpg"
    }
  ]
}

export default function IcaraiPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header minimalista */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/empreendimentos">
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900 p-2">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </Link>
            
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="border-gray-200 text-gray-600 hover:bg-gray-50">
                <Download className="h-4 w-4 mr-2" />
                Material
              </Button>
              <Button size="sm" className="bg-gray-900 hover:bg-gray-800 text-white">
                <Phone className="h-4 w-4 mr-2" />
                Contato
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section Minimalista */}
      <section className="relative h-[80vh] overflow-hidden bg-gray-50">
        <div className="absolute inset-0">
          <Image
            src={icarai.imagem}
            alt={icarai.nome}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-16">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-white/90 text-gray-800 border-0">
                {icarai.subtitulo}
              </Badge>
              <h1 
                className="font-light mb-6 leading-tight text-white"
                style={{ fontSize: '2.5rem' }}
              >
                {icarai.nome}
              </h1>
              <p 
                className="font-light mb-8 max-w-2xl mx-auto text-white/90"
                style={{ fontSize: '0.875rem' }}
              >
                {icarai.slogan}
              </p>
              <div className="flex items-center gap-6 text-white/80 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{icarai.localizacao}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Entrega: {icarai.entrega}</span>
                </div>
              </div>
              <div className="text-3xl font-light text-white">
                {icarai.preco}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Empreendimento */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <span className="text-sm text-orange-500 font-medium tracking-wider uppercase">
                Sobre o empreendimento
              </span>
              <h2 
                className="font-light text-foreground mb-6 mt-4"
                style={{ fontSize: '1.875rem' }}
              >
                Vida em harmonia com a <span className="text-orange-500">natureza</span>
              </h2>
              <p 
                className="text-gray-600 leading-relaxed mb-6"
                style={{ fontSize: '0.875rem' }}
              >
                O Icaraí Parque Clube oferece uma experiência única de moradia, combinando 
                apartamentos modernos com uma extensa área de lazer em meio à natureza. 
                Com 55.000m² de área verde preservada.
              </p>
              
              <p 
                className="text-gray-600 leading-relaxed mb-8"
                style={{ fontSize: '0.875rem' }}
              >
                Localizado em Salto, oferece a tranquilidade do interior com a conveniência 
                de estar próximo aos grandes centros urbanos. Um verdadeiro refúgio para 
                toda a família.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <Home className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                  <div className="text-2xl font-light text-gray-900">408</div>
                  <div className="text-sm text-gray-500">Unidades</div>
                </div>
                <div className="text-center">
                  <Trees className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                  <div className="text-2xl font-light text-gray-900">{icarai.area}</div>
                  <div className="text-sm text-gray-500">Área Total</div>
                </div>
                <div className="text-center">
                  <Calendar className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                  <div className="text-2xl font-light text-gray-900">{icarai.entrega}</div>
                  <div className="text-sm text-gray-500">Entrega</div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="relative">
              <Image
                src={icarai.imagemDestaque}
                alt="Área de lazer do Icaraí"
                width={600}
                height={400}
                className="rounded object-cover w-full h-[400px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plantas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-sm text-orange-500 font-medium tracking-wider uppercase">
              Plantas
            </span>
            <h2 
              className="font-light text-foreground mt-4"
              style={{ fontSize: '1.875rem' }}
            >
              Nossas <span className="text-orange-500">Tipologias</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {icarai.plantas.map((planta, index) => (
              <motion.div key={index} {...fadeIn}>
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                      <Image
                        src={planta.imagem}
                        alt={planta.tipo}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 
                        className="font-medium text-foreground mb-2"
                        style={{ fontSize: '1.25rem' }}
                      >
                        {planta.tipo}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span>{planta.area}</span>
                      </div>
                      <div className="text-lg font-light text-gray-900">
                        {planta.preco}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <span className="text-sm text-orange-500 font-medium tracking-wider uppercase">
                Localização
              </span>
              <h2 
                className="font-light text-foreground mt-4 mb-8"
                style={{ fontSize: '1.875rem' }}
              >
                Conectado à <span className="text-orange-500">região metropolitana</span>
              </h2>
              <p 
                className="text-gray-600 mb-8"
                style={{ fontSize: '0.875rem' }}
              >
                Estrategicamente localizado em Salto, oferece fácil acesso aos principais centros urbanos da região.
              </p>

              <div className="space-y-4">
                {icarai.pontosInteresse.map((ponto, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700">{ponto.nome}</span>
                    <span className="text-sm text-gray-500">{ponto.distancia}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn}>
              <div className="bg-gray-50 rounded-lg p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">{icarai.endereco}</p>
                  <p className="text-gray-500 text-sm">{icarai.localizacao}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Área de Lazer */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-sm text-orange-500 font-medium tracking-wider uppercase">
              Lazer
            </span>
            <h2 
              className="font-light text-foreground mt-4"
              style={{ fontSize: '1.875rem' }}
            >
              Infraestrutura completa de <span className="text-orange-500">clube</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div {...fadeIn} className="text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Waves className="h-8 w-8 text-gray-400" />
              </div>
              <h3 
                className="font-medium text-foreground mb-4"
                style={{ fontSize: '1.25rem' }}
              >
                Complexo Aquático
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontSize: '0.875rem' }}
              >
                Piscina com raias para natação, área de lazer e pool bar para momentos de descontração.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-xs font-medium">🎾</span>
                </div>
              </div>
              <h3 
                className="font-medium text-foreground mb-4"
                style={{ fontSize: '1.25rem' }}
              >
                Quadras Esportivas
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontSize: '0.875rem' }}
              >
                Beach tennis profissional, quadra de tênis oficial e quadra poliesportiva completa.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Trees className="h-8 w-8 text-gray-400" />
              </div>
              <h3 
                className="font-medium text-foreground mb-4"
                style={{ fontSize: '1.25rem' }}
              >
                Áreas Verdes
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontSize: '0.875rem' }}
              >
                Amplo paisagismo tropical, playground moderno e praça de convivência com fogueira.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-sm text-orange-500 font-medium tracking-wider uppercase">
              Diferenciais
            </span>
            <h2 
              className="font-light text-foreground mt-4"
              style={{ fontSize: '1.875rem' }}
            >
              Por que escolher o <span className="text-orange-500">Icaraí Parque Clube</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {icarai.diferenciais.slice(0, 8).map((diferencial, index) => (
              <motion.div key={index} {...fadeIn} className="text-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mx-auto mb-4"></div>
                <p className="text-gray-700 text-sm leading-relaxed">{diferencial}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <h2 
              className="font-light text-white mb-6"
              style={{ fontSize: '1.875rem' }}
            >
              Seu novo lar em <span className="text-orange-500">Salto</span>
            </h2>
                          <p 
                className="text-gray-300 mb-8 max-w-2xl mx-auto"
                style={{ fontSize: '0.875rem' }}
              >
                Experimente a combinação perfeita entre natureza e conforto urbano. 
                Um lugar onde sua família pode crescer com qualidade de vida e segurança.
              </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Phone className="h-4 w-4 mr-2" />
                Falar com Consultor
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                <Download className="h-4 w-4 mr-2" />
                Baixar Material
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 