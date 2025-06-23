import { Metadata } from "next"
import Image from 'next/image'
import Link from "next/link"
import { MapPin, Home, Shield, Diamond, ArrowLeft, Building, Dumbbell, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'

// Dados do Grand Club Cotia
const grandClub = {
  nome: "Grand Club Cotia",
  endereco: "R. Geraldo Otaviano de Almeida, 1025, Bairro Nakamura Park, Cotia - SP",
  tipo: "Apartamentos de 1 e 2 dormitórios",
  descricao: "O GRAND CLUB COTIA foi projetado para proporcionar um estilo de vida único, onde a flexibilidade e o conforto são prioridades. Suas plantas inteligentes foram pensadas para otimizar a distribuição e funcionalidade dos espaços.",
  imagem: "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/1 - VITRINE_GRANDCLUB.jpg",
  status: "Concluído em Maio 2019",
  arquiteto: "Studio Gemini",
  area: "22.000m²",
  unidades: 198,
  torres: 8,
  diferenciais: [
    "Piscina com deck e área de descanso",
    "Salão de festas com decoração contemporânea",
    "Espaço fitness ao ar livre integrado à natureza",
    "Churrasqueiras com área gourmet",
    "Playground completo para crianças",
    "Mini campo de golfe",
    "Praças de convivência entre os edifícios",
    "Paisagismo com espécies nativas e frutíferas",
    "Segurança 24 horas com controle de acesso",
    "Localização privilegiada com fácil acesso ao Rodoanel"
  ]
}

export const metadata: Metadata = {
  title: "Grand Club Cotia - 198 Unidades em Cotia | Elleven Engenharia",
  description: "Grand Club Cotia - Condomínio de 22.000m² em Cotia. 198 unidades, 1 e 2 dormitórios. Mini golfe, fitness, piscina e área completa de lazer. Projeto Studio Gemini.",
}

export default function GrandClubCotiaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header com botão voltar */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/empreendimentos">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar aos Empreendimentos
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src={grandClub.imagem}
          alt={grandClub.nome}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{grandClub.nome}</h1>
            <p className="text-lg md:text-xl mb-2">{grandClub.endereco}</p>
            <Badge variant="secondary" className="text-lg px-4 py-2 mt-4 bg-purple-600 text-white">
              {grandClub.status}
            </Badge>
          </div>
        </div>
      </section>

      {/* Sobre o Empreendimento */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Conheça o {grandClub.nome}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {grandClub.descricao}
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Tipo</span>
                  <span className="text-gray-600">{grandClub.tipo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Localização</span>
                  <span className="text-gray-600">Cotia, São Paulo</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Arquiteto</span>
                  <span className="text-gray-600">{grandClub.arquiteto}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Área Total</span>
                  <span className="text-gray-600">{grandClub.area}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Status</span>
                  <span className="text-purple-600 font-medium">{grandClub.status}</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_FACHADA.jpg"
                alt="Fachada do Grand Club Cotia"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cards de Informações */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que escolher o Grand Club?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça os principais diferenciais que fazem do Grand Club um estilo de vida único.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mini Golfe</h3>
                <p className="text-gray-600">Campo de mini golfe exclusivo para diversão da família.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Dumbbell className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fitness Outdoor</h3>
                <p className="text-gray-600">Espaço fitness ao ar livre integrado à natureza.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">8 Torres</h3>
                <p className="text-gray-600">198 unidades distribuídas em 8 torres com 1 e 2 dormitórios.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Convivência</h3>
                <p className="text-gray-600">Praças de convivência entre os edifícios para socialização.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Galeria de Imagens</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_PISCINA.jpg"
                alt="Piscina do Grand Club"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_GOLFE.jpg"
                alt="Mini Campo de Golfe"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_FITNESS.jpg"
                alt="Espaço Fitness"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_PLAYGROUND.jpg"
                alt="Playground"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLU_SALÃO DE FESTAS.jpg"
                alt="Salão de Festas"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_ÁREA DE CONVIVÊNCIA.jpg"
                alt="Área de Convivência"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Diferenciais do Grand Club</h2>
              <p className="text-gray-600 mb-8">
                O Grand Club Cotia foi projetado para proporcionar flexibilidade, conforto e estilo de vida único.
              </p>
              
              <div className="space-y-4">
                {grandClub.diferenciais.map((diferencial, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">{diferencial}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Informações do Projeto</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Unidades:</span>
                    <span className="text-gray-600">{grandClub.unidades}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Torres:</span>
                    <span className="text-gray-600">{grandClub.torres}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Área Total:</span>
                    <span className="text-gray-600">{grandClub.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Arquiteto:</span>
                    <span className="text-gray-600">{grandClub.arquiteto}</span>
                  </div>
                </div>
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 mt-6 w-full">
                  FALE CONOSCO
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 