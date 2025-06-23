"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Calendar, Home, Bath, Car, Phone, Mail, Download, Ruler, Shield, Diamond } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

// Dados do Jade
const jade = {
  nome: "Jade",
  subtitulo: "BREVE LANÇAMENTO",
  slogan: "Onde Sofisticação e Exclusividade Se Encontram",
  localizacao: "Bela Vista, São Paulo - SP",
  endereco: "Rua Maestro Cardim, 1028",
  preco: "A partir de R$ 390.000",
  area: "25 a 40m²",
  entrega: "2025",
  tipo: "Studio",
  descricao: "No coração da Bela Vista, São Paulo, o Jade representa um endereço privilegiado que combina sofisticação, tradição e conveniência. Este bairro, conhecido por sua rica vida cultural e excelente infraestrutura, oferece proximidade com importantes pontos da cidade.",
  imagem: "/empreendimentos/jade/fachada-jade.webp",
  imagemDestaque: "/empreendimentos/jade/background-jade.webp",
  logo: "/empreendimentos/jade/logo-jade.png",
  diferenciais: [
    "Localização privilegiada próxima à Av. Paulista",
    "Rooftop com piscina e vista panorâmica",
    "Design sofisticado com acabamentos premium",
    "Studios de alto padrão com aproveitamento inteligente",
    "Infraestrutura completa de lazer",
    "Sistema de segurança completo",
    "Próximo a hospitais, metrô e shopping centers",
    "Investimento valorizado em bairro nobre"
  ],
  pontosInteresse: [
    { nome: "Hospital Beneficência Portuguesa", distancia: "190m" },
    { nome: "Shopping Pátio Paulista", distancia: "280m" },
    { nome: "Estação Brigadeiro", distancia: "650m" },
    { nome: "Avenida Paulista", distancia: "700m" },
    { nome: "Estação Vergueiro", distancia: "1km" },
    { nome: "Estação Paraíso", distancia: "1.2km" }
  ],
  plantas: [
    {
      tipo: "Studio 26m²",
      area: "26m²",
      preco: "A partir de R$ 390.000",
      imagem: "/empreendimentos/jade/plantas/studio-26m2.jpg"
    }
  ]
}

export default function JadePage() {
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
            src={jade.imagem}
            alt={jade.nome}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h1 
              className="font-light mb-6 leading-tight"
              style={{ fontSize: '2.5rem' }}
            >
              JADE
            </h1>
            <p 
              className="font-light mb-8 max-w-2xl mx-auto"
              style={{ fontSize: '0.875rem' }}
            >
              Sofisticação e modernidade no coração da Bela Vista
            </p>
          </div>
        </div>

        {/* Info Footer */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center text-white text-sm">
              <div>
                <p style={{ fontSize: '0.875rem' }}>Studios de 25m² a 40m²</p>
              </div>
              <div className="text-right">
                <p style={{ fontSize: '0.875rem' }}>A partir de R$ 390.000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Empreendimento */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <span className="text-sm text-orange-500 font-medium tracking-wider uppercase">
                Sobre o empreendimento
              </span>
              <h2 className="text-4xl font-light text-gray-900 mt-4 mb-8 leading-tight">
                Luxo e <span className="text-orange-500">Comodidade</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                O Jade representa a união perfeita entre sofisticação e praticidade. 
                Localizado na vibrante Bela Vista, oferece studios modernos com acabamentos 
                premium e uma localização privilegiada.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Com design contemporâneo e espaços otimizados, cada unidade foi pensada 
                para proporcionar máximo conforto em um ambiente urbano dinâmico.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Localização</h3>
                  <p className="text-gray-600">{jade.localizacao}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Entrega</h3>
                  <p className="text-gray-600">{jade.entrega}</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="relative">
              <Image
                src={jade.imagemDestaque}
                alt="Interior do Jade"
                width={600}
                height={400}
                className="rounded object-cover w-full h-[400px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plantas */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-sm text-orange-500 font-medium tracking-wider uppercase">
              Plantas
            </span>
            <h2 className="text-4xl font-light text-gray-900 mt-4 mb-6">
              Nossos <span className="text-orange-500">Studios</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jade.plantas.map((planta, index) => (
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
                      <h3 className="text-xl font-light text-gray-900 mb-2">{planta.tipo}</h3>
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <span className="text-sm text-orange-500 font-medium tracking-wider uppercase">
                Localização
              </span>
              <h2 className="text-4xl font-light text-gray-900 mt-4 mb-8">
                Coração da <span className="text-orange-500">Bela Vista</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Estrategicamente localizado na Bela Vista, oferece acesso privilegiado aos principais pontos da cidade.
              </p>

              <div className="space-y-4">
                {jade.pontosInteresse.map((ponto, index) => (
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
                  <p className="text-gray-600 mb-2">{jade.endereco}</p>
                  <p className="text-gray-500 text-sm">{jade.localizacao}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-sm text-orange-500 font-medium tracking-wider uppercase">
              Diferenciais
            </span>
            <h2 className="text-4xl font-light text-gray-900 mt-4">
              Por que escolher o Jade
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {jade.diferenciais.map((diferencial, index) => (
              <motion.div key={index} {...fadeIn} className="text-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mx-auto mb-4"></div>
                <p className="text-gray-700 text-sm leading-relaxed">{diferencial}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl font-light text-white mb-6">
              Realize o sonho do seu <span className="text-orange-500">primeiro imóvel</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              O Jade oferece a oportunidade perfeita para quem busca um imóvel moderno, 
              bem localizado e com excelente custo-benefício no centro de São Paulo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Baixar Material
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Falar com Consultor
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 