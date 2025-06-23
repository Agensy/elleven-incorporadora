// =============================================================================
// TIPOS BÁSICOS
// =============================================================================

export type EmpreendimentoTipo = "Studio" | "1 dormitório" | "2 dormitórios" | "3 dormitórios" | "Cobertura"
export type EmpreendimentoStatus = "Breve lançamento" | "Lançamento" | "Em Obras" | "Pronto"

// =============================================================================
// INTERFACES AUXILIARES
// =============================================================================

// Interface para endereço completo
export interface Endereco {
  rua: string
  numero: string
  bairro: string
  cidade: string
  estado: string
  cep: string
}

// Interface para coordenadas geográficas
export interface Coordenadas {
  lat: number
  lng: number
}

// Interface para pontos de interesse próximos
export interface PontoInteresse {
  nome: string
  distancia: string
  tipo: "saude" | "shopping" | "transporte" | "comercio" | "parque" | "educacao"
}

// Interface para faixas de preço nos filtros
export interface FaixaPreco {
  label: string
  min: number
  max: number
}

// Interface para plantas/tipologias
export interface Planta {
  id: number
  tipo: string
  area: string
  quartos: number
  banheiros: number
  vagas: number
  imagem: string
  preco: string
  descricao: string
  destaque?: boolean
}

// Interface para especificações técnicas
export interface EspecificacoesTecnicas {
  unidades: string
  andares: string
  elevadores: string
  entrega: string
}

// Interface para identidade visual do empreendimento
export interface IdentidadeVisual {
  logo: string
  corPrimaria: string
  corSecundaria?: string
  imagemBackground: string
}

// Interface para filtros de busca
export interface FiltrosEmpreendimento {
  tipo: string
  status: string
  faixa: string
  bairro: string
  busca: string
}

// =============================================================================
// INTERFACE PRINCIPAL
// =============================================================================

export interface Empreendimento {
  // Identificação
  id: number
  slug: string
  nome: string
  subtitulo?: string
  slogan?: string
  
  // Localização
  localizacao: string
  bairro: string
  endereco?: Endereco
  coordenadas: Coordenadas
  pontos_interesse: PontoInteresse[]
  
  // Características básicas
  tipo: EmpreendimentoTipo
  status: EmpreendimentoStatus
  area: string
  quartos: number
  banheiros: number
  vagas: number
  
  // Preço e entrega
  preco: number
  precoFormatado: string
  entrega: string
  
  // Conteúdo
  descricao: string
  destaque?: string
  diferenciais: string[]
  
  // Mídia
  imagem: string
  imagemDestaque?: string
  galeria: string[]
  
  // Identidade visual
  identidadeVisual: IdentidadeVisual
  
  // Dados técnicos
  plantas: Planta[]
  especificacoes: EspecificacoesTecnicas
  
  // Metadados
  destacado?: boolean
  ativo: boolean
  tags: string[]
  categoria: string[]
}

// =============================================================================
// CONFIGURAÇÕES DE FILTROS
// =============================================================================

export interface OpcoesFilter {
  tipos: EmpreendimentoTipo[]
  status: EmpreendimentoStatus[]
  bairros: string[]
  faixas: FaixaPreco[]
} 