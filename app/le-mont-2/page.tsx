import { Metadata } from "next"
import Image from 'next/image'
import Link from "next/link"
import { ArrowLeft, Building, Home, Shield, TreePine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'

// Dados do Le Mont 2
const leMont2 = {
  nome: "Le Mont 2",
  endereco: "Estrada Morro Grande, 3502, Jardim Ísis, Cotia - São Paulo",
  tipo: "Apartamentos de 1, 2 e 3 dormitórios",
  descricao: "O Condomínio Le Mont 2 foi planejado com atenção aos detalhes, focado na qualidade de vida de sua família. Com uma vasta área verde preservada e um ambiente que propicia o contato constante com a natureza.",
  imagem: "/empreendimentos/_SITE ELLEVEN/LE MONT 2/1 - VITRINE_LE MONT 2.jpg",
  status: "Concluído em Março 2017",
  arquiteto: "Studio Gemini",
  area: "15.000m²",
  unidades: 120,
  torres: 4,
  diferenciais: [
    "Apartamentos de 1, 2 e 3 dormitórios",
    "Piscina adulto e infantil",
    "Salão de festas com espaço gourmet",
    "Churrasqueiras",
    "Playground",
    "Fitness",
    "Segurança 24 horas",
    "Paisagismo elaborado",
    "Localização privilegiada em Cotia",
    "Próximo a comércios e serviços"
  ]
}

export const metadata: Metadata = {
  title: "Le Mont 2 - Condomínio 1, 2 e 3 Dormitórios em Cotia | Elleven Engenharia",
  description: "Le Mont 2 - Condomínio de 15.000m² em Cotia. 120 unidades, 1, 2 e 3 dormitórios. Piscina, fitness, playground. Projeto Studio Gemini.",
}

export default function LeMont2Page() {
  return (
    <div className="min-h-screen bg-white">
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

      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src={leMont2.imagem}
          alt={leMont2.nome}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{leMont2.nome}</h1>
            <p className="text-lg md:text-xl mb-2">{leMont2.endereco}</p>
            <Badge variant="secondary" className="text-lg px-4 py-2 mt-4 bg-teal-600 text-white">
              {leMont2.status}
            </Badge>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Conheça o {leMont2.nome}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {leMont2.descricao}
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Tipo</span>
                  <span className="text-gray-600">{leMont2.tipo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Unidades</span>
                  <span className="text-gray-600">{leMont2.unidades}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Torres</span>
                  <span className="text-gray-600">{leMont2.torres}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Status</span>
                  <span className="text-teal-600 font-medium">{leMont2.status}</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_FACHADA.jpg"
                alt="Fachada do Le Mont 2"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Diferenciais do Le Mont 2</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Área Verde</h3>
                <p className="text-gray-600">Vasta área verde preservada para contato com a natureza.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lazer Completo</h3>
                <p className="text-gray-600">Piscina, fitness, playground e espaço gourmet.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">4 Torres</h3>
                <p className="text-gray-600">120 unidades em 4 torres.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Segurança 24h</h3>
                <p className="text-gray-600">Portaria com segurança 24 horas.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Galeria de Imagens</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_PISCINA.jpg"
                alt="Piscina do Le Mont 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_PLAYGROUND.jpg"
                alt="Playground"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_SALÃO DE FESTAS.jpg"
                alt="Salão de Festas"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Diferenciais do Le Mont 2</h2>
              <p className="text-gray-600 mb-8">
                O Le Mont 2 foi planejado com atenção aos detalhes, focado na qualidade de vida de sua família.
              </p>
              
              <div className="space-y-4">
                {leMont2.diferenciais.map((diferencial, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-gray-700">{diferencial}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Informações do Projeto</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Unidades:</span>
                    <span className="text-gray-600">{leMont2.unidades}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Torres:</span>
                    <span className="text-gray-600">{leMont2.torres}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Área Total:</span>
                    <span className="text-gray-600">{leMont2.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Arquiteto:</span>
                    <span className="text-gray-600">{leMont2.arquiteto}</span>
                  </div>
                </div>
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 mt-6 w-full">
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