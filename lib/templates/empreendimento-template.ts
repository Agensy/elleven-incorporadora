// Template padrão para criação de novos empreendimentos
// Este arquivo define a estrutura base que será usada quando você fornecer as informações

export interface EmpreendimentoTemplate {
  // Informações básicas (você fornecerá)
  nome: string
  slug: string
  descricao: string
  tipo: string
  tamanho: string
  preco: string
  status: string
  entrega: string
  
  // Localização (você fornecerá)
  endereco: {
    rua: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    cep?: string
  }
  
  // Imagens (seguirá padrão de pasta)
  imagem: string // Imagem principal
  galeria: string[] // Array de imagens para galeria
  
  // Características técnicas (você pode customizar)
  caracteristicas: {
    area: string
    quartos?: string
    banheiros?: string
    vagas?: string
    lazer: string[]
    diferenciais_tecnicos: string[]
  }
  
  // Pontos de interesse (adaptáveis por região)
  pontosDeInteresse: Array<{
    nome: string
    distancia: string
    categoria: 'transporte' | 'saude' | 'educacao' | 'lazer' | 'comercio'
  }>
  
  // Diferenciais (personalizáveis)
  diferenciais: Array<{
    titulo: string
    descricao: string
    categoria: 'localizacao' | 'infraestrutura' | 'design' | 'tecnologia' | 'sustentabilidade' | 'seguranca' | 'investimento' | 'lazer'
  }>
}

// Template base com diferenciais mais comuns
export const diferenciais_padrao = [
  {
    titulo: "Localização Privilegiada",
    descricao: "Próximo a importantes centros urbanos, transporte público e serviços essenciais.",
    categoria: "localizacao" as const
  },
  {
    titulo: "Infraestrutura Completa",
    descricao: "Área de lazer completa com piscina, academia, salão de festas e espaços de convivência.",
    categoria: "infraestrutura" as const
  },
  {
    titulo: "Design Sofisticado",
    descricao: "Arquitetura moderna com acabamentos premium e projeto diferenciado.",
    categoria: "design" as const
  },
  {
    titulo: "Tecnologia Integrada",
    descricao: "Sistemas inteligentes de acesso, automação e conectividade de última geração.",
    categoria: "tecnologia" as const
  },
  {
    titulo: "Segurança 24h",
    descricao: "Sistema completo de segurança com monitoramento, portaria e controle de acesso.",
    categoria: "seguranca" as const
  },
  {
    titulo: "Sustentabilidade",
    descricao: "Projeto eco-friendly com tecnologias sustentáveis e certificações ambientais.",
    categoria: "sustentabilidade" as const
  },
  {
    titulo: "Investimento Valorizado",
    descricao: "Excelente potencial de valorização em região de alta demanda e crescimento.",
    categoria: "investimento" as const
  },
  {
    titulo: "Área de Lazer Premium",
    descricao: "Espaços exclusivos de lazer e entretenimento para toda a família.",
    categoria: "lazer" as const
  }
]

// Pontos de interesse mais comuns (adaptar por região)
export const pontos_interesse_padrao = {
  sao_paulo_centro: [
    { nome: "Estação de Metrô", distancia: "500m", categoria: "transporte" as const },
    { nome: "Shopping Center", distancia: "800m", categoria: "comercio" as const },
    { nome: "Hospital", distancia: "1km", categoria: "saude" as const },
    { nome: "Universidade", distancia: "1.5km", categoria: "educacao" as const },
    { nome: "Parque", distancia: "600m", categoria: "lazer" as const }
  ],
  sao_paulo_zona_sul: [
    { nome: "Estação de Metrô", distancia: "400m", categoria: "transporte" as const },
    { nome: "Av. Paulista", distancia: "1.2km", categoria: "comercio" as const },
    { nome: "Hospital Sírio-Libanês", distancia: "800m", categoria: "saude" as const },
    { nome: "Parque Ibirapuera", distancia: "2km", categoria: "lazer" as const },
    { nome: "Shopping", distancia: "900m", categoria: "comercio" as const }
  ]
}

// Função para gerar estrutura de pastas de imagens
export const gerarEstruturaPastas = (slug: string) => ({
  pasta_principal: `public/images/${slug}/`,
  imagens_necessarias: [
    'fachada.jpg',      // Imagem principal da fachada
    'rooftop.jpg',      // Área de lazer/rooftop
    'lobby.jpg',        // Lobby/entrada
    'apartamento.jpg',  // Apartamento decorado
    'area-comum.jpg',   // Áreas comuns
    'planta.jpg',       // Planta baixa
    'localizacao.jpg'   // Vista da localização
  ],
  pastas_adicionais: [
    `public/images/${slug}/galeria/`,
    `public/images/${slug}/plantas/`,
    `public/images/${slug}/renders/`
  ]
})

// Função para criar empreendimento baseado no template
export const criarEmpreendimentoDoTemplate = (dados: Partial<EmpreendimentoTemplate>) => {
  const slug = dados.slug || dados.nome?.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '') || 'novo-empreendimento'
  
  return {
    ...dados,
    slug,
    imagem: dados.imagem || `/images/${slug}/fachada.jpg`,
    galeria: dados.galeria || [
      `/images/${slug}/fachada.jpg`,
      `/images/${slug}/rooftop.jpg`,
      `/images/${slug}/lobby.jpg`,
      `/images/${slug}/apartamento.jpg`,
      `/images/${slug}/area-comum.jpg`
    ],
    diferenciais: dados.diferenciais || diferenciais_padrao,
    pontosDeInteresse: dados.pontosDeInteresse || pontos_interesse_padrao.sao_paulo_centro,
    estrutura_pastas: gerarEstruturaPastas(slug)
  }
}

export default EmpreendimentoTemplate 