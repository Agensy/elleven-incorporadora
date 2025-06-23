"use client"

import { useState, useMemo, useEffect } from "react"
import { motion } from "framer-motion"
import {
  MapPin,
  Bed,
  Bath,
  Car,
  ArrowRight,
  ChevronDown,
  X,
  Grid3X3,
  List,
  SlidersHorizontal,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { empreendimentos, opcoesFiltros } from "@/lib/data/empreendimentos"
import { FiltrosEmpreendimento } from "@/lib/types/empreendimento"

// =============================================================================
// FUNÇÕES AUXILIARES
// =============================================================================

function getEmpreendimentoUrl(slug: string): string {
  // Mapeamento de slugs para páginas específicas
  const paginasEspecificas: Record<string, string> = {
    'jade': '/jade',
    'obsidian': '/obsidian',
    'botanique': '/botanique',
    'icarai': '/icarai',
    'grand-club-cotia': '/grand-club-cotia',
    'le-mont': '/le-mont',
    'le-mont-2': '/le-mont-2',
    'icarai-parque-clube': '/icarai-parque-clube'
  }
  
  return paginasEspecificas[slug] || `/empreendimento/${slug}`
}

// =============================================================================
// TIPOS
// =============================================================================

type VisualizacaoTipo = "grid" | "lista"
type OrdenacaoTipo = "preco-asc" | "preco-desc" | "nome" | "lancamento"

// =============================================================================
// COMPONENTE PRINCIPAL
// =============================================================================

export default function EmpreendimentosListing() {
  // Estados
  const [filtros, setFiltros] = useState<FiltrosEmpreendimento>({
    tipo: "",
    status: "",
    faixa: "",
    bairro: "",
    busca: "",
  })

  const [dropdownAberto, setDropdownAberto] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [visualizacao, setVisualizacao] = useState<VisualizacaoTipo>("grid")
  const [ordenacao, setOrdenacao] = useState<OrdenacaoTipo>("lancamento")
  const [mostrarFiltros, setMostrarFiltros] = useState(false)

  // Empreendimentos filtrados e ordenados
  const empreendimentosFiltrados = useMemo(() => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 300)

    const resultado = empreendimentos.filter((emp) => {
      // Filtro de busca
      if (filtros.busca) {
        const termo = filtros.busca.toLowerCase()
        const matchNome = emp.nome.toLowerCase().includes(termo)
        const matchLocalizacao = emp.localizacao.toLowerCase().includes(termo)
        const matchTags = emp.tags.some((tag) => tag.toLowerCase().includes(termo))
        if (!matchNome && !matchLocalizacao && !matchTags) return false
      }

      // Outros filtros
      if (filtros.tipo && emp.tipo !== filtros.tipo) return false
      if (filtros.status && emp.status !== filtros.status) return false
      if (filtros.bairro && emp.bairro !== filtros.bairro) return false

      if (filtros.faixa) {
        const faixa = opcoesFiltros.faixas.find((f) => f.label === filtros.faixa)
        if (faixa && (emp.preco < faixa.min || emp.preco > faixa.max)) return false
      }

      return true
    })

    // Ordenação
    switch (ordenacao) {
      case "preco-asc":
        resultado.sort((a, b) => a.preco - b.preco)
        break
      case "preco-desc":
        resultado.sort((a, b) => b.preco - a.preco)
        break
      case "nome":
        resultado.sort((a, b) => a.nome.localeCompare(b.nome))
        break
      case "lancamento":
        resultado.sort((a, b) => {
          if (a.destacado && !b.destacado) return -1
          if (!a.destacado && b.destacado) return 1
          const statusOrder = ["Lançamento", "Breve lançamento", "Em Obras", "Futuro lançamento", "Pronto", "100% vendido"]
          return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status)
        })
        break
    }

    return resultado
  }, [filtros, ordenacao])

  // Funções auxiliares
  const updateFiltro = (key: keyof FiltrosEmpreendimento, value: string) => {
    setFiltros((prev) => ({ ...prev, [key]: value }))
  }

  const limparFiltros = () => {
    setFiltros({ tipo: "", status: "", faixa: "", bairro: "", busca: "" })
  }

  const temFiltrosAtivos = Object.values(filtros).some((filtro) => filtro !== "")

  // Animações
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownAberto !== null) {
        const target = event.target as HTMLElement
        if (!target.closest(".dropdown-container")) {
          setDropdownAberto(null)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [dropdownAberto])

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        
        {/* Barra de Busca */}
        <SearchBar filtros={filtros} updateFiltro={updateFiltro} />

        {/* Controles */}
        <ControlsBar
          mostrarFiltros={mostrarFiltros}
          setMostrarFiltros={setMostrarFiltros}
          temFiltrosAtivos={temFiltrosAtivos}
          limparFiltros={limparFiltros}
          visualizacao={visualizacao}
          setVisualizacao={setVisualizacao}
          ordenacao={ordenacao}
          setOrdenacao={setOrdenacao}
          dropdownAberto={dropdownAberto}
          setDropdownAberto={setDropdownAberto}
        />

        {/* Painel de Filtros */}
        {mostrarFiltros && (
          <FilterPanel
            filtros={filtros}
            updateFiltro={updateFiltro}
            dropdownAberto={dropdownAberto}
            setDropdownAberto={setDropdownAberto}
          />
        )}

        {/* Contador */}
        <ResultCounter isLoading={isLoading} count={empreendimentosFiltrados.length} />

        {/* Lista de Empreendimentos */}
        <ListingGrid
          isLoading={isLoading}
          empreendimentos={empreendimentosFiltrados}
          visualizacao={visualizacao}
          temFiltrosAtivos={temFiltrosAtivos}
          limparFiltros={limparFiltros}
        />
      </div>
    </section>
  )
}

// =============================================================================
// COMPONENTES AUXILIARES
// =============================================================================

function SearchBar({ filtros, updateFiltro }: {
  filtros: FiltrosEmpreendimento
  updateFiltro: (key: keyof FiltrosEmpreendimento, value: string) => void
}) {
  return (
        <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="max-w-2xl mx-auto relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Buscar por nome, localização ou características..."
              value={filtros.busca}
              onChange={(e) => updateFiltro("busca", e.target.value)}
          className="pl-12 pr-4 py-4 bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-gray-300 text-lg"
            />
          </div>
        </motion.div>
  )
}

interface ControlsBarProps {
  mostrarFiltros: boolean
  setMostrarFiltros: (value: boolean) => void
  temFiltrosAtivos: boolean
  limparFiltros: () => void
  visualizacao: VisualizacaoTipo
  setVisualizacao: (value: VisualizacaoTipo) => void
  ordenacao: OrdenacaoTipo
  setOrdenacao: (value: OrdenacaoTipo) => void
  dropdownAberto: string | null
  setDropdownAberto: (value: string | null) => void
}

function ControlsBar(props: ControlsBarProps) {
  const {
    mostrarFiltros,
    setMostrarFiltros,
    temFiltrosAtivos,
    limparFiltros,
    visualizacao,
    setVisualizacao,
    ordenacao,
    setOrdenacao,
    dropdownAberto,
    setDropdownAberto,
  } = props

  const opcoesOrdenacao = [
    { value: "lancamento", label: "Lançamentos" },
    { value: "preco-asc", label: "Menor preço" },
    { value: "preco-desc", label: "Maior preço" },
    { value: "nome", label: "Nome A-Z" },
  ]

  return (
        <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-6">
        
        {/* Filtros e Limpeza */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setMostrarFiltros(!mostrarFiltros)}
            className="border-border hover:border-gray-300 hover:bg-gray-50"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filtros
                {temFiltrosAtivos && (
                  <Badge className="ml-2 bg-white/20 backdrop-blur-md border border-white/30 text-gray-800 text-xs px-1.5 py-0.5 shadow-lg">
                {Object.values(props).filter((f: any) => f !== "").length}
                  </Badge>
                )}
              </Button>

              {temFiltrosAtivos && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={limparFiltros}
                  className="text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                >
                  <X className="h-4 w-4 mr-1" />
                  Limpar
                </Button>
              )}
            </div>

        {/* Visualização e Ordenação */}
            <div className="flex items-center gap-4">
          {/* Visualização */}
          <div className="flex items-center">
            <Button
              variant={visualizacao === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setVisualizacao("grid")}
              className="px-3"
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={visualizacao === "lista" ? "default" : "ghost"}
              size="sm"
              onClick={() => setVisualizacao("lista")}
              className="px-3"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>

              {/* Ordenação */}
              <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Ordenar por:</span>
                <div className="relative dropdown-container">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setDropdownAberto(dropdownAberto === "ordenacao" ? null : "ordenacao")}
                className="border-border hover:border-gray-300 hover:bg-gray-50"
                  >
                {opcoesOrdenacao.find(o => o.value === ordenacao)?.label}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>

                  {dropdownAberto === "ordenacao" && (
                <div className="fixed mt-1 w-48 bg-card border border-border rounded-md shadow-lg" style={{ zIndex: 99999 }}>
                  {opcoesOrdenacao.map((opcao) => (
                        <div
                          key={opcao.value}
                      className="p-2 text-foreground hover:bg-gray-50 hover:text-gray-800 cursor-pointer"
                          onClick={() => {
                            setOrdenacao(opcao.value as OrdenacaoTipo)
                            setDropdownAberto(null)
                          }}
                        >
                          {opcao.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              </div>
            </div>
    </motion.div>
  )
}

function FilterPanel({ filtros, updateFiltro, dropdownAberto, setDropdownAberto }: {
  filtros: FiltrosEmpreendimento
  updateFiltro: (key: keyof FiltrosEmpreendimento, value: string) => void
  dropdownAberto: string | null
  setDropdownAberto: (value: string | null) => void
}) {
  return (
    <div className="bg-card backdrop-blur-sm border border-border rounded-lg p-6 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <FilterDropdown
          label="Tipo"
          value={filtros.tipo}
          placeholder="Todos os tipos"
          options={opcoesFiltros.tipos}
          isOpen={dropdownAberto === "tipo"}
          onToggle={() => setDropdownAberto(dropdownAberto === "tipo" ? null : "tipo")}
          onSelect={(value) => {
            updateFiltro("tipo", value)
                          setDropdownAberto(null)
                        }}
        />
                      </div>
                        </div>
  )
}

function FilterDropdown({ label, value, placeholder, options, isOpen, onToggle, onSelect }: {
  label: string
  value: string
  placeholder: string
  options: string[]
  isOpen: boolean
  onToggle: () => void
  onSelect: (value: string) => void
}) {
  return (
                <div className="relative dropdown-container">
      <label className="block text-sm font-medium text-muted-foreground mb-2">{label}</label>
      <Button variant="outline" className="w-full justify-between" onClick={onToggle}>
        <span>{value || placeholder}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>

      {isOpen && (
        <div className="absolute mt-1 w-full bg-card border border-border rounded-md shadow-lg z-50">
          <div className="p-2 hover:bg-gray-50 cursor-pointer" onClick={() => onSelect("")}>
            {placeholder}
                      </div>
          {options.map((option) => (
            <div key={option} className="p-2 hover:bg-gray-50 cursor-pointer" onClick={() => onSelect(option)}>
              {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
  )
}

function ResultCounter({ isLoading, count }: { isLoading: boolean, count: number }) {
  return (
        <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
      <p className="text-muted-foreground">
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                  Carregando...
                </span>
              ) : (
                <>
            <span className="text-gray-800 font-bold">{count}</span>{" "}
            {count === 1 ? "empreendimento encontrado" : "empreendimentos encontrados"}
                </>
              )}
            </p>
        </motion.div>
  )
}

function ListingGrid({ isLoading, empreendimentos, visualizacao, temFiltrosAtivos, limparFiltros }: {
  isLoading: boolean
  empreendimentos: any[]
  visualizacao: VisualizacaoTipo
  temFiltrosAtivos: boolean
  limparFiltros: () => void
}) {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  if (isLoading) {
    return (
        <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-card border border-border rounded-lg overflow-hidden animate-pulse">
              <div className="w-full h-64 bg-muted"></div>
                  <div className="p-6 space-y-4">
                <div className="h-6 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
      </motion.div>
    )
  }

  if (empreendimentos.length === 0) {
    return (
      <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <div className="text-center py-16">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
              </div>
          <h3 className="text-xl font-bold text-foreground mb-2">Nenhum empreendimento encontrado</h3>
          <p className="text-muted-foreground mb-6">
            {temFiltrosAtivos 
              ? "Não encontramos empreendimentos com os filtros aplicados. Tente ajustar os critérios de busca."
              : "Em breve, novos empreendimentos serão cadastrados aqui."
            }
          </p>
          {temFiltrosAtivos && (
            <Button onClick={limparFiltros} className="bg-gray-800 hover:bg-gray-900 text-white">
              Limpar filtros
              </Button>
          )}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
      <div className={`grid gap-8 ${
        visualizacao === "grid" 
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
          : "grid-cols-1"
      }`}>
        {empreendimentos.map((empreendimento) => (
          <EmpreendimentoCard key={empreendimento.id} empreendimento={empreendimento} />
        ))}
            </div>
    </motion.div>
  )
}

function EmpreendimentoCard({ empreendimento }: { empreendimento: any }) {
  return (
                <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-lg overflow-hidden hover:border-gray-300 transition-all duration-300 group hover:shadow-md"
                >
      <div className="relative overflow-hidden">
                    <img
                      src={empreendimento.imagem || "/placeholder.svg"}
                      alt={empreendimento.nome}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
        <Badge className="absolute top-4 left-4 text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-lg group-hover:bg-secondary/40 group-hover:border-secondary/30 transition-all duration-300">
                      {empreendimento.status}
                    </Badge>
                  </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{empreendimento.nome}</h3>

        <div className="flex items-center text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{empreendimento.localizacao}</span>
                    </div>

        <p className="text-muted-foreground text-sm mb-4">{empreendimento.descricao}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
          {empreendimento.tags?.map((tag: string, idx: number) => (
                        <span key={idx} className="text-xs bg-white/20 backdrop-blur-sm border border-white/20 text-gray-700 px-2 py-0.5 rounded-full shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {empreendimento.tipo !== "Comercial" && empreendimento.quartos > 0 && (
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Bed className="h-4 w-4" />
                          <span>{empreendimento.quartos}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath className="h-4 w-4" />
                          <span>{empreendimento.banheiros}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Car className="h-4 w-4" />
                          <span>{empreendimento.vagas}</span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-end">
                      <Link href={getEmpreendimentoUrl(empreendimento.slug)}>
            <Button size="sm" className="text-white group" style={{ backgroundColor: "#1E2C51" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#152140"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#1E2C51"}>
              Ver Mais
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
  )
}

function getStatusColor(status: string): string {
  switch (status) {
    case "Lançamento": return "bg-gray-800"
    case "Em Obras": return "bg-yellow-600"
    case "Futuro lançamento": return "bg-purple-600"
    case "Breve lançamento": return "bg-blue-600"
    case "100% vendido": return "bg-red-600"
    default: return "bg-green-600"
  }
}
