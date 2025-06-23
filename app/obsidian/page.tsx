"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Calendar, Home, Car, Phone, Download, Shield, Wifi, Ruler, Bath, Diamond } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

// Dados do Obsidian
const obsidian = {
  nome: "Obsidian",
  subtitulo: "BREVE LANÇAMENTO",
  slogan: "Viva a Exclusividade",
  localizacao: "Pinheiros, São Paulo - SP",
  endereco: "Rua Oscar Freire, 40",
  preco: "A partir de R$ 699.000",
  area: "26 a 32m²",
  entrega: "2025",
  tipo: "Studio",
  descricao: "Localizado em Pinheiros, uma das regiões mais nobres e valorizadas da cidade. O OBSIDIAN de alto padrão é o empreendimento perfeito para quem busca um estilo de vida sofisticado, design moderno e prático.",
  imagem: "/empreendimentos/obsidian/fachada-obsidian.png",
  imagemDestaque: "/empreendimentos/obsidian/background-obsidian.png",
  logo: "/empreendimentos/obsidian/logo-obsidian.png",
  diferenciais: [
    "Localização Premium a 40m da Oscar Freire",
    "Apartamentos de Alto Padrão com design contemporâneo",
    "Sistema de segurança avançado com portaria 24h",
    "Controle de acesso biométrico e fechaduras inteligentes",
    "Sistema de monitoramento digital completo",
    "Wi-Fi nas áreas comuns",
    "Alta demanda para locação de curta temporada",
    "Investimento com valorização constante"
  ],
  pontosInteresse: [
    { nome: "Rua Oscar Freire", distancia: "40m" },
    { nome: "Estação de Metrô Oscar Freire", distancia: "100m" },
    { nome: "Hospital das Clínicas", distancia: "900m" },
    { nome: "Rua dos Pinheiros", distancia: "800m" },
    { nome: "Instituto Tomie Ohtake", distancia: "700m" }
  ],
  plantas: [
    {
      tipo: "Studio de Luxo",
      area: "26 a 32m²",
      preco: "A partir de R$ 699.000",
      imagem: "/empreendimentos/obsidian/plantas/studio-26m2.jpg"
    }
  ]
}

export default function ObsidianPage() {
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
            src={obsidian.imagem}
            alt={obsidian.nome}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-16">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-white/90 text-gray-800 border-0">
                {obsidian.subtitulo}
              </Badge>
              <h1 
                className="font-light mb-6 leading-tight text-white"
                style={{ fontSize: '2.5rem' }}
              >
                {obsidian.nome}
              </h1>
              <p 
                className="font-light mb-8 max-w-2xl mx-auto text-white/90"
                style={{ fontSize: '0.875rem' }}
              >
                {obsidian.slogan}
              </p>
              <div className="flex items-center gap-6 text-white/80 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{obsidian.localizacao}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Entrega: {obsidian.entrega}</span>
                </div>
              </div>
              <div className="text-3xl font-light text-white">
                {obsidian.preco}
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
                Requinte e <span className="text-orange-500">Exclusividade</span>
              </h2>
              <p 
                className="text-gray-600 leading-relaxed mb-6"
                style={{ fontSize: '0.875rem' }}
              >
                O Obsidian redefine o conceito de luxo urbano. Localizado na prestigiosa 
                Oscar Freire, oferece studios de alto padrão com acabamentos únicos e 
                uma localização incomparável.
              </p>
              
              <p 
                className="text-gray-600 leading-relaxed mb-8"
                style={{ fontSize: '0.875rem' }}
              >
                Cada detalhe foi cuidadosamente planejado para proporcionar uma experiência 
                de vida sofisticada no coração dos Jardins, cercado por alta gastronomia, 
                boutiques exclusivas e cultura.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <Home className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                  <div className="text-2xl font-light text-gray-900">{obsidian.tipo}</div>
                  <div className="text-sm text-gray-500">Tipologia</div>
                </div>
                <div className="text-center">
                  <div className="w-6 h-6 bg-gray-100 rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-gray-600 text-xs">m²</span>
                  </div>
                  <div className="text-2xl font-light text-gray-900">{obsidian.area}</div>
                  <div className="text-sm text-gray-500">Área</div>
                </div>
                <div className="text-center">
                  <Calendar className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                  <div className="text-2xl font-light text-gray-900">{obsidian.entrega}</div>
                  <div className="text-sm text-gray-500">Entrega</div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="relative">
              <Image
                src={obsidian.imagemDestaque}
                alt="Interior do Obsidian"
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
              Studios de <span className="text-orange-500">Alto Padrão</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {obsidian.plantas.map((planta, index) => (
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
                Oscar Freire, <span className="text-orange-500">Jardins</span>
              </h2>
              <p 
                className="text-gray-600 mb-8"
                style={{ fontSize: '0.875rem' }}
              >
                Estrategicamente posicionado a poucos metros da famosa Oscar Freire, oferece acesso privilegiado ao que há de melhor em São Paulo.
              </p>

              <div className="space-y-4">
                {obsidian.pontosInteresse.map((ponto, index) => (
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
                  <p className="text-gray-600 mb-2">{obsidian.endereco}</p>
                  <p className="text-gray-500 text-sm">{obsidian.localizacao}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-sm text-orange-500 font-medium tracking-wider uppercase">
              Diferenciais
            </span>
            <h2 
              className="font-light text-foreground mt-4"
              style={{ fontSize: '1.875rem' }}
            >
              Por que escolher o <span className="text-orange-500">Obsidian</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {obsidian.diferenciais.map((diferencial, index) => (
              <motion.div key={index} {...fadeIn} className="text-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mx-auto mb-4"></div>
                <p className="text-gray-700 text-sm leading-relaxed">{diferencial}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologia e Segurança */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-sm text-orange-500 font-medium tracking-wider uppercase">
              Tecnologia
            </span>
            <h2 
              className="font-light text-foreground mt-4"
              style={{ fontSize: '1.875rem' }}
            >
              Segurança e <span className="text-orange-500">conectividade</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div {...fadeIn} className="text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 text-gray-400" />
              </div>
              <h3 
                className="font-medium text-foreground mb-4"
                style={{ fontSize: '1.25rem' }}
              >
                Segurança Avançada
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontSize: '0.875rem' }}
              >
                Sistema completo de monitoramento digital com controle de acesso biométrico e portaria 24h.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Wifi className="h-8 w-8 text-gray-400" />
              </div>
              <h3 
                className="font-medium text-foreground mb-4"
                style={{ fontSize: '1.25rem' }}
              >
                Conectividade Total
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontSize: '0.875rem' }}
              >
                Wi-Fi nas áreas comuns e infraestrutura preparada para alta conectividade em todos os ambientes.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Home className="h-8 w-8 text-gray-400" />
              </div>
              <h3 
                className="font-medium text-foreground mb-4"
                style={{ fontSize: '1.25rem' }}
              >
                Design Inteligente
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontSize: '0.875rem' }}
              >
                Apartamentos com aproveitamento máximo do espaço e acabamentos premium em todos os ambientes.
              </p>
            </motion.div>
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
              Viva o luxo na <span className="text-orange-500">Oscar Freire</span>
            </h2>
                          <p 
                className="text-gray-300 mb-8 max-w-2xl mx-auto"
                style={{ fontSize: '0.875rem' }}
              >
                O Obsidian é mais que um endereço, é um estilo de vida exclusivo no coração 
                dos Jardins. Uma oportunidade única de investimento e moradia.
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