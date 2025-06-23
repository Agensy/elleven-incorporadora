import { Metadata } from "next"
import Image from 'next/image'
import Link from "next/link"
import { MapPin, Home, Shield, Diamond, ArrowLeft, Calendar, Building, Bath, Car, Ruler, Phone, Download, Play, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import { empreendimentos } from "@/lib/data/empreendimentos"
import { notFound } from "next/navigation"

type Props = {
  params: { slug: string }
}

// Função para gerar as páginas estáticas durante o build
export async function generateStaticParams() {
  return empreendimentos
    .filter(emp => emp.ativo)
    .map((empreendimento) => ({
      slug: empreendimento.slug,
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const empreendimento = empreendimentos.find(emp => emp.slug === params.slug)
  
  if (!empreendimento) {
    return {
      title: 'Empreendimento não encontrado | Elleven Engenharia'
    }
  }

  return {
    title: `${empreendimento.nome} - ${empreendimento.tipo} | Elleven Engenharia`,
    description: `${empreendimento.nome} - ${empreendimento.descricao}. ${empreendimento.precoFormatado}. Localização: ${empreendimento.localizacao}`,
    keywords: `${empreendimento.nome}, ${empreendimento.localizacao}, apartamento, ${empreendimento.tipo}, Elleven Engenharia`,
  }
}

export default function EmpreendimentoPage({ params }: Props) {
  const empreendimento = empreendimentos.find(emp => emp.slug === params.slug)
  
  if (!empreendimento) {
    notFound()
  }

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
          src={empreendimento.imagemDestaque || empreendimento.imagem}
          alt={empreendimento.nome}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{empreendimento.nome}</h1>
            <p className="text-lg md:text-xl mb-2">{empreendimento.localizacao}</p>
            <Badge variant="secondary" className="text-lg px-4 py-2 mt-4">
              {empreendimento.status}
            </Badge>
          </div>
        </div>
      </section>

      {/* Sobre o Empreendimento */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Conheça o {empreendimento.nome}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {empreendimento.descricao}
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Tipo</span>
                  <span className="text-gray-600">{empreendimento.tipo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Localização</span>
                  <span className="text-gray-600">{empreendimento.localizacao}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Status</span>
                  <span className="text-gray-600">{empreendimento.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Área</span>
                  <span className="text-gray-600">{empreendimento.area}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Investimento</span>
                  <span className="text-gray-600 font-bold text-lg">{empreendimento.precoFormatado}</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src={empreendimento.imagem}
                alt={`Vista do ${empreendimento.nome}`}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      {empreendimento.diferenciais && empreendimento.diferenciais.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Diferenciais</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Conheça o que torna este empreendimento único e especial.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {empreendimento.diferenciais.map((diferencial, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="bg-secondary/10 p-3 rounded-full">
                        <CheckCircle className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <p className="text-gray-700 leading-relaxed">{diferencial}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Plantas e Tipologias */}
      {empreendimento.plantas && empreendimento.plantas.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Plantas e Tipologias</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Conheça as opções disponíveis e escolha a que melhor se adapta ao seu estilo de vida.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {empreendimento.plantas.map((planta, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-100 relative">
                    <Image
                      src={planta.imagem}
                      alt={planta.tipo}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{planta.tipo}</h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <Ruler className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                        <div className="text-sm font-medium">{planta.area}</div>
                        <div className="text-xs text-gray-500">Área</div>
                      </div>
                      <div className="text-center">
                        <Home className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                        <div className="text-sm font-medium">{planta.quartos}</div>
                        <div className="text-xs text-gray-500">Quartos</div>
                      </div>
                      <div className="text-center">
                        <Bath className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                        <div className="text-sm font-medium">{planta.banheiros}</div>
                        <div className="text-xs text-gray-500">Banheiros</div>
                      </div>
                      <div className="text-center">
                        <Car className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                        <div className="text-sm font-medium">{planta.vagas}</div>
                        <div className="text-xs text-gray-500">Vagas</div>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary mb-2">
                        {planta.preco}
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{planta.descricao}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Galeria */}
      {empreendimento.galeria && empreendimento.galeria.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Galeria</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Veja mais imagens do empreendimento e sua infraestrutura.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {empreendimento.galeria.map((imagem, index) => (
                <div key={index} className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                  <Image
                    src={imagem}
                    alt={`${empreendimento.nome} - Imagem ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Localização */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Localização</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estrategicamente localizado com fácil acesso a tudo que você precisa.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Pontos de Interesse</h3>
              {empreendimento.pontos_interesse && empreendimento.pontos_interesse.length > 0 ? (
                <div className="space-y-4">
                  {empreendimento.pontos_interesse.map((ponto, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <MapPin className="h-5 w-5 text-secondary flex-shrink-0" />
                      <div>
                        <span className="font-medium">{ponto.nome}</span>
                        <span className="text-gray-500 ml-2">({ponto.distancia})</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">Informações de localização em breve.</p>
              )}
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-bold mb-2">{empreendimento.localizacao}</h3>
              <p className="text-gray-600 mb-6">
                Localização privilegiada com excelente infraestrutura urbana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Interessado?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato conosco e saiba mais sobre este empreendimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-secondary hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Entrar em Contato
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-secondary">
              <Download className="mr-2 h-5 w-5" />
              Baixar Folder
            </Button>
          </div>
        </div>
      </section>
      
    </div>
  )
} 