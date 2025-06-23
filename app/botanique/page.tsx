import { Metadata } from "next"
import Image from 'next/image'
import Link from "next/link"
import { MapPin, Home, Shield, Diamond, ArrowLeft, Calendar, Building, Bath, Car, Ruler, Phone, Download, Play, CheckCircle, TreePine, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'

// Dados do Botanique
const botanique = {
  nome: "Botanique",
  endereco: "Estr. Ribeirão, 550 - Chácara Roselândia, Cotia - São Paulo",
  preco: "Empreendimento Concluído",
  tipo: "Apartamentos de 2 e 3 dormitórios",
  descricao: "Um condomínio clube cuidadosamente projetado pensando na qualidade de vida de sua família. Localizado em Cotia, o Botanique possui uma extensa área verde preservada de 4.500m², que propicia um agradável contato com a natureza.",
  imagem: "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/1 - VITRINE_BOTANIQUE.jpg",
  status: "Concluído em Outubro 2013",
  arquiteto: "Studio Gemini",
  area: "10.500m²",
  unidades: 150,
  torres: 5,
  areaVerde: "4.500m²",
  diferenciais: [
    "Área verde preservada de 4.500m²",
    "Piscina com deck e cascata",
    "Playground completo para crianças",
    "Churrasqueiras com área gourmet",
    "Salão de festas com espaço para TV",
    "Segurança 24 horas",
    "Paisagismo elaborado",
    "Localização privilegiada em Cotia"
  ]
}

export const metadata: Metadata = {
  title: "Botanique - Condomínio Clube em Cotia | Elleven Engenharia",
  description: "Botanique - Condomínio com área verde de 4.500m² em Cotia. 150 unidades, 2 e 3 dormitórios. Piscina, playground e área gourmet. Projeto Studio Gemini.",
}

export default function BotaniquePage() {
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
          src={botanique.imagem}
          alt={botanique.nome}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{botanique.nome}</h1>
            <p className="text-lg md:text-xl mb-2">{botanique.endereco}</p>
            <Badge variant="secondary" className="text-lg px-4 py-2 mt-4 bg-green-600 text-white">
              {botanique.status}
            </Badge>
          </div>
        </div>
      </section>

      {/* Sobre o Empreendimento */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Conheça o {botanique.nome}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {botanique.descricao}
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Tipo</span>
                  <span className="text-gray-600">{botanique.tipo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Localização</span>
                  <span className="text-gray-600">Cotia, São Paulo</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Arquiteto</span>
                  <span className="text-gray-600">{botanique.arquiteto}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Área Total</span>
                  <span className="text-gray-600">{botanique.area}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Status</span>
                  <span className="text-green-600 font-medium">{botanique.status}</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_1_FACHADA.jpg"
                alt="Fachada do Botanique"
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
            <h2 className="text-4xl font-bold mb-4">Por que escolher o Botanique?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça os principais diferenciais que fazem do Botanique um lugar especial para sua família.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Área Verde</h3>
                <p className="text-gray-600">4.500m² de área verde preservada para contato com a natureza.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lazer Completo</h3>
                <p className="text-gray-600">Piscina com deck, playground e área gourmet para toda família.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">5 Torres</h3>
                <p className="text-gray-600">150 unidades distribuídas em 5 torres com 2 e 3 dormitórios.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Segurança 24h</h3>
                <p className="text-gray-600">Portaria com segurança 24 horas para sua tranquilidade.</p>
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
                src="/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_8_PISCINA.jpg"
                alt="Piscina do Botanique"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_5_PLAYGROUND.jpg"
                alt="Playground do Botanique"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_4_ESPAÇO GRILL.jpg"
                alt="Espaço Grill do Botanique"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_3_SALÃO DE FESTAS.jpg"
                alt="Salão de Festas do Botanique"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_6_VISTA AÉREA.jpg"
                alt="Vista Aérea do Botanique"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_2_VISTA AÉREA FACHADA .jpg"
                alt="Vista Aérea da Fachada"
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
              <h2 className="text-3xl font-bold mb-6">Diferenciais do Botanique</h2>
              <p className="text-gray-600 mb-8">
                O Botanique foi pensado para oferecer qualidade de vida e contato com a natureza para toda a família.
              </p>
              
              <div className="space-y-4">
                {botanique.diferenciais.map((diferencial, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{diferencial}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Informações do Projeto</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Unidades:</span>
                    <span className="text-gray-600">{botanique.unidades}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Torres:</span>
                    <span className="text-gray-600">{botanique.torres}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Área Verde:</span>
                    <span className="text-gray-600">{botanique.areaVerde}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Arquiteto:</span>
                    <span className="text-gray-600">{botanique.arquiteto}</span>
                  </div>
                </div>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 mt-6 w-full">
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