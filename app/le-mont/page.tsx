import { Metadata } from "next"
import Image from 'next/image'
import Link from "next/link"
import { ArrowLeft, Building, Home, Shield, TreePine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'

// Dados do Le Mont
const leMont = {
  nome: "Le Mont",
  endereco: "Estrada Morro Grande, 3400, Jardim Ísis, Cotia - São Paulo",
  tipo: "Apartamentos de 1 e 2 dormitórios + Unidades Garden",
  descricao: "O Condomínio Le Mont foi cuidadosamente projetado para proporcionar qualidade de vida à sua família, com segurança 24 horas, contando com uma extensa área verde preservada e uma variedade de opções de lazer.",
  imagem: "/empreendimentos/_SITE ELLEVEN/LE MONT/1 - VITRINE_LE MONT 1.jpg",
  status: "Concluído em Outubro 2016",
  arquiteto: "Studio Gemini",
  area: "18.000m²",
  unidades: 150,
  torres: 5,
  diferenciais: [
    "Apartamentos de 1 e 2 dormitórios",
    "Unidades garden com acesso exclusivo ao jardim",
    "Piscina adulto e infantil",
    "Quadra poliesportiva",
    "Salão de festas com espaço gourmet",
    "Playground completo",
    "Churrasqueiras",
    "Segurança 24 horas",
    "Paisagismo elaborado",
    "Localização privilegiada em Cotia"
  ]
}

export const metadata: Metadata = {
  title: "Le Mont - Condomínio com Unidades Garden em Cotia | Elleven Engenharia",
  description: "Le Mont - Condomínio de 18.000m² em Cotia. 150 unidades, 1 e 2 dormitórios + Garden. Piscina, quadra, playground. Projeto Studio Gemini.",
}

export default function LeMontPage() {
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
          src={leMont.imagem}
          alt={leMont.nome}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{leMont.nome}</h1>
            <p className="text-lg md:text-xl mb-2">{leMont.endereco}</p>
            <Badge variant="secondary" className="text-lg px-4 py-2 mt-4 bg-orange-600 text-white">
              {leMont.status}
            </Badge>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Conheça o {leMont.nome}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {leMont.descricao}
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Tipo</span>
                  <span className="text-gray-600">{leMont.tipo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Status</span>
                  <span className="text-orange-600 font-medium">{leMont.status}</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_FACHADAS.jpg"
                alt="Fachada do Le Mont"
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
            <h2 className="text-4xl font-bold mb-4">Diferenciais do Le Mont</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Unidades Garden</h3>
                <p className="text-gray-600">Apartamentos com acesso exclusivo ao jardim.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lazer Completo</h3>
                <p className="text-gray-600">Piscina, playground e área gourmet.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">5 Torres</h3>
                <p className="text-gray-600">150 unidades em 5 torres.</p>
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
                src="/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_PISCINA.jpg"
                alt="Piscina do Le Mont"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_PLAYGROUND.jpg"
                alt="Playground"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_SALÃO DE FESTAS.jpg"
                alt="Salão de Festas"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 