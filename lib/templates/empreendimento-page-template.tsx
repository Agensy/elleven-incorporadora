import { Metadata } from "next"
import Image from 'next/image'
import Link from "next/link"
import { MapPin, Home, Shield, Diamond, ArrowLeft, Calendar, Building, Bath, Car, Ruler, Phone, Download, Play, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'

// =============================================================================
// DADOS DO EMPREENDIMENTO - SUBSTITUIR POR DADOS REAIS
// =============================================================================

const NOME_EMPREENDIMENTO = {
  nome: "NOME_DO_EMPREENDIMENTO", // Ex: "Botanique"
  endereco: "ENDEREÇO_COMPLETO", // Ex: "Vila Progredior, São Paulo - SP"
  preco: "PREÇO_INICIAL", // Ex: "A partir de R$ 450.000"
  tipo: "TIPOS_DISPONIVEIS", // Ex: "2 e 3 dormitórios"
  descricao: "DESCRIÇÃO_COMPLETA_DO_EMPREENDIMENTO", // 2-3 parágrafos detalhados
  imagem: "/empreendimentos/NOME/fachada-NOME.jpg", // Imagem principal
  
  pontosInteresse: [
    "PONTO_DE_INTERESSE_1", // Ex: "Shopping Center (800m)"
    "PONTO_DE_INTERESSE_2", // Ex: "Estação de Metrô (1.2km)"
    "PONTO_DE_INTERESSE_3", // Ex: "Hospital Regional (900m)"
    "PONTO_DE_INTERESSE_4", // Ex: "Parque Municipal (600m)"
    "PONTO_DE_INTERESSE_5", // Ex: "Centro Empresarial (1.5km)"
    "PONTO_DE_INTERESSE_6", // Ex: "Universidade (2km)"
  ],
  
  diferenciais: [
    "DIFERENCIAL_1", // Ex: "Localização privilegiada em região valorizada"
    "DIFERENCIAL_2", // Ex: "Ampla área de lazer com piscina e churrasqueira"
    "DIFERENCIAL_3", // Ex: "Playground e brinquedoteca para crianças"
    "DIFERENCIAL_4", // Ex: "Academia equipada e espaço fitness"
    "DIFERENCIAL_5", // Ex: "Salão de festas com cozinha gourmet"
    "DIFERENCIAL_6", // Ex: "Sistema de segurança 24h com portaria"
    "DIFERENCIAL_7", // Ex: "Apartamentos com varanda e vista panorâmica"
    "DIFERENCIAL_8", // Ex: "Acabamentos premium em todos os ambientes"
  ],
  
  tipologias: [
    {
      nome: "TIPOLOGIA_1", // Ex: "2 Dormitórios"
      area: "AREA_M2", // Ex: "65m²"
      quartos: 2, // Número de quartos
      banheiros: 2, // Número de banheiros
      vagas: 1, // Número de vagas
      preco: "PRECO_TIPOLOGIA", // Ex: "A partir de R$ 450.000"
      imagem: "/empreendimentos/NOME/plantas/planta-1.jpg"
    },
    {
      nome: "TIPOLOGIA_2", // Ex: "3 Dormitórios"
      area: "AREA_M2", // Ex: "85m²"
      quartos: 3,
      banheiros: 2,
      vagas: 1,
      preco: "PRECO_TIPOLOGIA", // Ex: "A partir de R$ 620.000"
      imagem: "/empreendimentos/NOME/plantas/planta-2.jpg"
    },
    // Adicionar mais tipologias conforme necessário
  ],
  
  galeria: [
    "/empreendimentos/NOME/fachada-NOME.jpg",
    "/empreendimentos/NOME/galeria/imagem-1.jpg",
    "/empreendimentos/NOME/galeria/imagem-2.jpg",
    "/empreendimentos/NOME/galeria/imagem-3.jpg",
    "/empreendimentos/NOME/galeria/imagem-4.jpg",
    "/empreendimentos/NOME/galeria/imagem-5.jpg",
    "/empreendimentos/NOME/galeria/imagem-6.jpg",
    // Adicionar mais imagens conforme disponível
  ]
}

// =============================================================================
// METADATA SEO - PERSONALIZAR
// =============================================================================

export const metadata: Metadata = {
  title: `${NOME_EMPREENDIMENTO.nome} - ${NOME_EMPREENDIMENTO.tipo} | Elleven Engenharia`,
  description: `${NOME_EMPREENDIMENTO.nome} - Apartamentos com área de lazer completa em ${NOME_EMPREENDIMENTO.endereco}. ${NOME_EMPREENDIMENTO.preco}. Localização privilegiada e acabamentos premium.`,
  keywords: `${NOME_EMPREENDIMENTO.nome}, ${NOME_EMPREENDIMENTO.endereco}, apartamento, ${NOME_EMPREENDIMENTO.tipo}, Elleven Engenharia, área de lazer`,
}

// =============================================================================
// COMPONENTE PRINCIPAL
// =============================================================================

export default function EmpreendimentoPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* ===== 1. HEADER COM BOTÃO VOLTAR ===== */}
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

      {/* ===== 2. HERO SECTION ===== */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src={NOME_EMPREENDIMENTO.imagem}
          alt={NOME_EMPREENDIMENTO.nome}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{NOME_EMPREENDIMENTO.nome}</h1>
            <p className="text-lg md:text-xl mb-2">{NOME_EMPREENDIMENTO.endereco}</p>
            <Badge variant="secondary" className="text-lg px-4 py-2 mt-4">
              {NOME_EMPREENDIMENTO.preco}
            </Badge>
          </div>
        </div>
      </section>

      {/* ===== 3. SOBRE O EMPREENDIMENTO ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Conheça o {NOME_EMPREENDIMENTO.nome}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {NOME_EMPREENDIMENTO.descricao}
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Tipo</span>
                  <span className="text-gray-600">{NOME_EMPREENDIMENTO.tipo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Localização</span>
                  <span className="text-gray-600">{NOME_EMPREENDIMENTO.endereco}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Investimento</span>
                  <span className="text-gray-600">{NOME_EMPREENDIMENTO.preco}</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/empreendimentos/NOME/background-NOME.jpg" // SUBSTITUIR POR IMAGEM REAL
                alt="Vista do empreendimento"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. PLANTAS E TIPOLOGIAS ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Plantas e Tipologias</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça as opções disponíveis e escolha a que melhor se adapta ao seu estilo de vida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NOME_EMPREENDIMENTO.tipologias.map((tipologia, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-100 relative">
                  <Image
                    src={tipologia.imagem}
                    alt={tipologia.nome}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{tipologia.nome}</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <Ruler className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                      <div className="text-sm font-medium">{tipologia.area}</div>
                      <div className="text-xs text-gray-500">Área</div>
                    </div>
                    <div className="text-center">
                      <Home className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                      <div className="text-sm font-medium">{tipologia.quartos}</div>
                      <div className="text-xs text-gray-500">Quartos</div>
                    </div>
                    <div className="text-center">
                      <Bath className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                      <div className="text-sm font-medium">{tipologia.banheiros}</div>
                      <div className="text-xs text-gray-500">Banheiros</div>
                    </div>
                    <div className="text-center">
                      <Car className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                      <div className="text-sm font-medium">{tipologia.vagas}</div>
                      <div className="text-xs text-gray-500">Vagas</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-800">{tipologia.preco}</div>
                    <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                      <Download className="h-4 w-4 mr-2" />
                      Baixar Planta
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. GALERIA ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Galeria</h2>
            <p className="text-gray-600">
              Conheça os espaços e ambientes exclusivos do empreendimento.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {NOME_EMPREENDIMENTO.galeria.map((imagem, index) => (
              <div key={index} className={`relative overflow-hidden rounded-lg ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <Image
                  src={imagem}
                  alt={`Galeria ${index + 1}`}
                  width={index === 0 ? 800 : 400}
                  height={index === 0 ? 600 : 300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <Play className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. CARDS DE DIFERENCIAIS ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que escolher o {NOME_EMPREENDIMENTO.nome}?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça os principais diferenciais que fazem do {NOME_EMPREENDIMENTO.nome} um investimento único.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8" style={{ color: "#1A2D54" }} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Localização Privilegiada</h3>
                <p className="text-gray-600">Próximo a shopping, transporte público e principais vias de acesso.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8" style={{ color: "#1A2D54" }} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Área de Lazer Completa</h3>
                <p className="text-gray-600">Piscina, playground, churrasqueira e salão de festas para toda família.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" style={{ color: "#1A2D54" }} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Segurança Total</h3>
                <p className="text-gray-600">Sistema completo de segurança 24h para sua tranquilidade.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Diamond className="w-8 h-8" style={{ color: "#1A2D54" }} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Investimento Inteligente</h3>
                <p className="text-gray-600">Alto potencial de valorização em região em crescimento.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== 7. PONTOS DE INTERESSE ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Tudo ao seu alcance</h2>
              <p className="text-gray-600 mb-8">
                A localização privilegiada do {NOME_EMPREENDIMENTO.nome} oferece fácil acesso aos principais pontos da região.
              </p>
              
              <div className="space-y-4">
                {NOME_EMPREENDIMENTO.pontosInteresse.map((ponto, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#1A2D54" }}></div>
                    <span className="text-gray-700">{ponto}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-lg border border-slate-200">
                <h3 className="text-2xl font-bold mb-4">Quer saber mais?</h3>
                <p className="text-gray-600 mb-6">
                  Entre em contato conosco e descubra como o {NOME_EMPREENDIMENTO.nome} pode ser o seu próximo investimento.
                </p>
                <Button size="lg" className="text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "#1A2D54" }}>
                  FALE CONOSCO
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 8. LISTA DE DIFERENCIAIS ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Diferenciais do {NOME_EMPREENDIMENTO.nome}</h2>
            <p className="text-gray-600">
              Conheça todos os detalhes que tornam este empreendimento único.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NOME_EMPREENDIMENTO.diferenciais.map((diferencial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#1A2D54" }}></div>
                  <span className="font-medium text-gray-800">{diferencial}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 9. CTA FINAL ===== */}
      <section className="py-20 text-white" style={{ backgroundColor: "#1A2D54" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Pronto para investir no {NOME_EMPREENDIMENTO.nome}?</h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato conosco e garanta já o seu apartamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white hover:bg-gray-100" style={{ color: "#1A2D54" }}>
              <Phone className="h-4 w-4 mr-2" />
              FALE COM CONSULTOR
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 transition-colors">
              <Download className="h-4 w-4 mr-2" />
              BAIXAR MATERIAL
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// =============================================================================
// INSTRUÇÕES DE USO
// =============================================================================

/*
COMO USAR ESTE TEMPLATE:

1. COPIE este arquivo para: app/[nome-empreendimento]/page.tsx

2. SUBSTITUA todas as ocorrências de:
   - NOME_EMPREENDIMENTO → nome real do empreendimento
   - NOME → slug do empreendimento (ex: "botanique", "jade")
   - Todos os dados placeholder por dados reais

3. ORGANIZE as imagens em:
   public/empreendimentos/[nome]/
   ├── fachada-[nome].jpg
   ├── background-[nome].jpg
   ├── galeria/
   └── plantas/

4. PERSONALIZE:
   - Metadata SEO
   - Diferenciais específicos
   - Pontos de interesse reais
   - Preços e tipologias

5. TESTE:
   - Responsividade
   - Build sem erros
   - Navegação

6. VALIDE:
   - SEO
   - Performance
   - Acessibilidade
*/ 