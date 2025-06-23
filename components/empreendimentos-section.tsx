"use client"

import { useState, useMemo, useEffect } from "react"
import { motion } from "framer-motion"
import { MapPin, Bed, Bath, Car, ArrowRight, Filter, X, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { empreendimentos, opcoesFiltros } from "@/lib/data/empreendimentos"
import { FiltrosEmpreendimento } from "@/lib/types/empreendimento"
import Link from "next/link"

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
// COMPONENTE PRINCIPAL
// =============================================================================

export default function EmpreendimentosSection() {
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
  const [mostrarTodos, setMostrarTodos] = useState(false)
  const [mostrarFiltros, setMostrarFiltros] = useState(false)

  // Empreendimentos filtrados
  const empreendimentosFiltrados = useMemo(() => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 300) // Simular delay

    return empreendimentos.filter((emp) => {
      // Filtro de busca por nome
      if (filtros.busca) {
        const termo = filtros.busca.toLowerCase()
        const matchNome = emp.nome.toLowerCase().includes(termo)
        const matchLocalizacao = emp.localizacao.toLowerCase().includes(termo)
        const matchTags = emp.tags?.some((tag) => tag.toLowerCase().includes(termo))
        if (!matchNome && !matchLocalizacao && !matchTags) return false
      }

      if (filtros.tipo && emp.tipo !== filtros.tipo) return false
      if (filtros.status && emp.status !== filtros.status) return false
      if (filtros.bairro && emp.bairro !== filtros.bairro) return false

      if (filtros.faixa) {
        const faixa = opcoesFiltros.faixas.find((f) => f.label === filtros.faixa)
        if (faixa && (emp.preco < faixa.min || emp.preco > faixa.max)) return false
      }

      return true
    })
  }, [filtros])

  // Empreendimentos para exibir (limitados ou todos)
  const empreendimentosParaExibir = useMemo(() => {
    const limitePorLinha = 3 // Assumindo 3 empreendimentos por linha
    const limiteInicial = limitePorLinha * 2 // 2 linhas = 6 empreendimentos
    
    if (mostrarTodos || empreendimentosFiltrados.length <= limiteInicial) {
      return empreendimentosFiltrados
    }
    
    return empreendimentosFiltrados.slice(0, limiteInicial)
  }, [empreendimentosFiltrados, mostrarTodos])

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

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.1 },
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
    <section id="empreendimentos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-8">
        
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossos Empreendimentos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8" style={{ fontSize: '0.875rem' }}>
            Descubra projetos únicos que combinam design inovador, localização privilegiada e qualidade incomparável.
          </p>
          
          {/* Barra de Busca */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-border/30 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                <Input
                  placeholder="Buscar empreendimentos por nome ou localização..."
                  value={filtros.busca}
                  onChange={(e) => updateFiltro("busca", e.target.value)}
                  className="pl-12 pr-4 h-14 text-base bg-transparent border-0 focus:ring-0 focus:outline-none placeholder:text-muted-foreground/70"
                />
              </div>
            </div>
          </div>
          
          {/* Container de Controles */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {/* Botão de Filtros */}
            <Button
              variant={mostrarFiltros ? "default" : "outline"}
              size="default"
              onClick={() => setMostrarFiltros(!mostrarFiltros)}
              className={`h-11 px-6 transition-all duration-300 ${
                mostrarFiltros 
                  ? "bg-secondary hover:bg-secondary/90 text-white shadow-lg" 
                  : "border-border/50 hover:border-secondary hover:bg-muted hover:shadow-md"
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              {mostrarFiltros ? "Ocultar Filtros" : "Filtros Avançados"}
            </Button>
            
            {/* Badge de Filtros Ativos */}
            {temFiltrosAtivos && (
              <Badge variant="secondary" className="bg-secondary/10 text-secondary border border-secondary/20 px-3 py-1">
                {Object.values(filtros).filter(Boolean).length} filtro{Object.values(filtros).filter(Boolean).length > 1 ? 's' : ''} ativo{Object.values(filtros).filter(Boolean).length > 1 ? 's' : ''}
              </Badge>
            )}
          </div>
        </motion.div>

        {/* Filtros */}
        {mostrarFiltros && (
          <FilterSection 
            filtros={filtros}
            updateFiltro={updateFiltro}
            limparFiltros={limparFiltros}
            temFiltrosAtivos={temFiltrosAtivos}
            dropdownAberto={dropdownAberto}
            setDropdownAberto={setDropdownAberto}
          />
        )}

        {/* Contador e Controles */}
        <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="mb-12">
          <div className="bg-white/50 backdrop-blur-sm border border-border/30 rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              
              {/* Contador */}
              <div className="flex items-center gap-4">
                {isLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin"></div>
                    <span className="text-foreground font-medium">Filtrando empreendimentos...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 text-secondary px-3 py-1.5 rounded-full font-semibold text-sm">
                      {empreendimentosFiltrados.length} {empreendimentosFiltrados.length === 1 ? "empreendimento" : "empreendimentos"}
                    </div>
                    {!mostrarTodos && empreendimentosFiltrados.length > 6 && (
                      <span className="text-muted-foreground text-sm">
                        Exibindo {empreendimentosParaExibir.length} de {empreendimentosFiltrados.length}
                      </span>
                    )}
                  </div>
                )}
              </div>
              
              {/* Botões de Ação */}
              {empreendimentosFiltrados.length > 0 && (
                <div className="flex flex-wrap items-center gap-3">
                  {empreendimentosFiltrados.length > 6 && !mostrarTodos && (
                    <Button
                      variant="default"
                      size="default"
                      onClick={() => setMostrarTodos(true)}
                      className="bg-secondary hover:bg-secondary/90 text-white h-10 px-6 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Ver Todos ({empreendimentosFiltrados.length})
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                  <Link href="/empreendimentos">
                    <Button
                      variant="outline"
                      size="default"
                      className="border-border/50 hover:border-secondary hover:bg-muted h-10 px-6 hover:shadow-md transition-all duration-300"
                    >
                      Página Dedicada
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Grid de Empreendimentos */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {isLoading ? (
            <LoadingGrid />
          ) : empreendimentosFiltrados.length === 0 ? (
            <EmptyState limparFiltros={limparFiltros} />
          ) : (
            empreendimentosParaExibir.map((empreendimento) => (
              <EmpreendimentoCard key={empreendimento.id} empreendimento={empreendimento} />
            ))
          )}
        </motion.div>

        {/* Botão "Mostrar Menos" quando todos estão visíveis */}
        {mostrarTodos && empreendimentosFiltrados.length > 6 && (
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-xl blur-sm opacity-60"></div>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => setMostrarTodos(false)}
                className="relative bg-white/90 backdrop-blur-sm border-border/30 hover:border-secondary hover:bg-white hover:shadow-lg transition-all duration-300 h-12 px-8"
              >
                Mostrar Menos
                <ChevronDown className="ml-2 h-4 w-4 rotate-180 transition-transform group-hover:translate-y-0.5" />
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

// =============================================================================
// COMPONENTES AUXILIARES
// =============================================================================

interface FilterSectionProps {
  filtros: FiltrosEmpreendimento
  updateFiltro: (key: keyof FiltrosEmpreendimento, value: string) => void
  limparFiltros: () => void
  temFiltrosAtivos: boolean
  dropdownAberto: string | null
  setDropdownAberto: (value: string | null) => void
}

function FilterSection({ 
  filtros, 
  updateFiltro, 
  limparFiltros, 
  temFiltrosAtivos, 
  dropdownAberto, 
  setDropdownAberto 
}: FilterSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16 relative z-50"
    >
      <div className="bg-white/80 backdrop-blur-sm border border-border/30 rounded-2xl p-8 shadow-lg relative">
        
        {/* Header dos filtros */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-secondary/10 p-2 rounded-full">
            <Filter className="h-5 w-5 text-secondary" />
          </div>
                          <h3 className="font-semibold text-foreground" style={{ fontSize: '1rem' }}>Filtros Avançados</h3>
          {temFiltrosAtivos && (
            <Button
              variant="ghost"
              size="sm"
              onClick={limparFiltros}
              className="text-muted-foreground hover:text-foreground hover:bg-muted/50 ml-auto h-9 px-4 rounded-full"
            >
              <X className="h-4 w-4 mr-1" />
              Limpar filtros
            </Button>
          )}
        </div>

            {/* Grid de Filtros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-50">
          <FilterDropdown
            label="Tipo de Imóvel"
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

          <FilterDropdown
            label="Status"
            value={filtros.status}
            placeholder="Todos os status"
            options={opcoesFiltros.status}
            isOpen={dropdownAberto === "status"}
            onToggle={() => setDropdownAberto(dropdownAberto === "status" ? null : "status")}
            onSelect={(value) => {
              updateFiltro("status", value)
                          setDropdownAberto(null)
                        }}
          />

          <FilterDropdown
            label="Faixa de Investimento"
            value={filtros.faixa}
            placeholder="Todas as faixas"
            options={opcoesFiltros.faixas.map(f => f.label)}
            isOpen={dropdownAberto === "faixa"}
            onToggle={() => setDropdownAberto(dropdownAberto === "faixa" ? null : "faixa")}
            onSelect={(value) => {
              updateFiltro("faixa", value)
                        setDropdownAberto(null)
                      }}
          />

          <FilterDropdown
            label="Bairro"
            value={filtros.bairro}
            placeholder="Todos os bairros"
            options={opcoesFiltros.bairros}
            isOpen={dropdownAberto === "bairro"}
            onToggle={() => setDropdownAberto(dropdownAberto === "bairro" ? null : "bairro")}
            onSelect={(value) => {
              updateFiltro("bairro", value)
                          setDropdownAberto(null)
                        }}
          />
                      </div>

        {/* Filtros Ativos */}
        {temFiltrosAtivos && (
          <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border/50">
            <span className="text-sm text-muted-foreground mr-2">Filtros ativos:</span>
            {Object.entries(filtros).map(([key, value]) => 
              value && (
                <Badge key={key} variant="secondary" className="bg-white/20 backdrop-blur-md border border-white/30 text-foreground text-xs shadow-lg">
                  {value}
                  <button onClick={() => updateFiltro(key as keyof FiltrosEmpreendimento, "")} className="ml-1 hover:text-muted-foreground">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )
            )}
                  </div>
                )}
              </div>
    </motion.div>
  )
}

interface FilterDropdownProps {
  label: string
  value: string
  placeholder: string
  options: string[]
  isOpen: boolean
  onToggle: () => void
  onSelect: (value: string) => void
}

function FilterDropdown({ label, value, placeholder, options, isOpen, onToggle, onSelect }: FilterDropdownProps) {
  return (
    <div className="relative dropdown-container">
      <label className="block text-sm font-medium text-foreground mb-3">{label}</label>
      <Button
        variant="outline"
        className="w-full justify-between border-border/30 hover:border-secondary hover:bg-white/80 relative z-50 text-sm h-11 rounded-xl shadow-sm hover:shadow-md transition-all duration-300" 
        onClick={onToggle}
      >
        <span className={value ? "text-foreground font-medium" : "text-muted-foreground"}>
          {value || placeholder}
        </span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className="absolute mt-2 w-full bg-white/95 backdrop-blur-sm border border-border/30 rounded-xl shadow-xl z-[9999] overflow-hidden">
          <div 
            className="p-3 text-muted-foreground hover:bg-secondary/10 hover:text-secondary cursor-pointer text-sm transition-colors" 
            onClick={() => onSelect("")}
          >
            {placeholder}
          </div>
          {options.map((option) => (
            <div 
              key={option} 
              className="p-3 text-foreground hover:bg-secondary/10 hover:text-secondary cursor-pointer text-sm transition-colors border-t border-border/20" 
              onClick={() => onSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function LoadingGrid() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="bg-card border border-border/50 rounded-lg overflow-hidden animate-pulse">
          <div className="w-full h-64 bg-muted/50"></div>
          <div className="p-6 space-y-4">
            <div className="h-6 bg-muted/50 rounded"></div>
            <div className="h-4 bg-muted/50 rounded w-3/4"></div>
            <div className="h-4 bg-muted/50 rounded w-1/2"></div>
            <div className="h-8 bg-muted/50 rounded"></div>
          </div>
                </div>
      ))}
    </>
  )
}

function EmptyState({ limparFiltros }: { limparFiltros: () => void }) {
  return (
                  <div className="col-span-full text-center section-padding-header">
      <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Nenhum empreendimento encontrado</h3>
              <p className="text-muted-foreground mb-6">Tente ajustar os filtros para encontrar mais opções.</p>
              <Button onClick={limparFiltros} className="bg-secondary hover:bg-secondary/90 text-white">
                Limpar todos os filtros
              </Button>
            </div>
  )
}

function EmpreendimentoCard({ empreendimento }: { empreendimento: any }) {
  return (
              <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-card border border-border/50 rounded-lg overflow-hidden hover:border-border transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={empreendimento.imagem || "/placeholder.svg"}
                    alt={empreendimento.nome}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <Badge className="absolute top-4 left-4 text-white text-xs bg-white/10 backdrop-blur-md border border-white/20 shadow-lg group-hover:bg-secondary/40 group-hover:border-secondary/30 transition-all duration-300">
                    {empreendimento.status}
                  </Badge>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{empreendimento.nome}</h3>

                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{empreendimento.localizacao}</span>
                  </div>

                         <p className="text-muted-foreground mb-4 line-clamp-2" style={{ fontSize: '0.875rem' }}>{empreendimento.descricao}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
          {empreendimento.tags?.slice(0, 3).map((tag: string, idx: number) => (
            <span key={idx} className="text-xs bg-white/20 backdrop-blur-sm border border-white/20 text-muted-foreground px-2 py-1 rounded-full shadow-sm">
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
                  <Button size="sm" className="text-white group text-xs" style={{ backgroundColor: "#1E2C51" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#152140"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#1E2C51"}>
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
    case "Lançamento": return "bg-secondary"
    case "Em Obras": return "bg-foreground/80"
    case "Futuro lançamento": return "bg-foreground/60"
    case "Breve lançamento": return "bg-foreground/70"
    case "100% vendido": return "bg-foreground/50"
    default: return "bg-foreground/60"
  }
}

