# Padrão Seção de Serviços - Elleven Engenharia

## 🎯 **Layout da Seção de Serviços (5 Cards Numerados)**

### **Estrutura Base**
```jsx
export default function ServicesSection() {
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

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <HeaderSection fadeInUp={fadeInUp} />
        
        {/* Grid de Serviços */}
        <ServicesGrid services={services} staggerContainer={staggerContainer} />
        
        {/* Optional CTA */}
        <CTASection fadeInUp={fadeInUp} />
        
      </div>
    </section>
  )
}
```

### **Header Padrão**
```jsx
function HeaderSection({ fadeInUp }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
        Título da <span className="text-secondary">Seção</span>
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Descrição da seção que explica o contexto
      </p>
    </motion.div>
  )
}
```

### **Grid de 5 Serviços**
```jsx
function ServicesGrid({ services, staggerContainer }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16"
    >
      {services.map((service, index) => (
        <ServiceCard 
          key={index} 
          service={service} 
          number={index + 1}
        />
      ))}
    </motion.div>
  )
}
```

### **Card de Serviço Individual**
```jsx
function ServiceCard({ service, number }) {
  const Icon = service.icon
  
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative bg-card/50 border border-border/30 rounded-xl p-6 hover:border-border/60 hover:bg-card/80 transition-all duration-300 text-center"
    >
      {/* Número da Etapa */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
        <span className="text-sm font-bold text-secondary">{number}</span>
      </div>

      {/* Icon */}
      <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
        <Icon className="h-8 w-8 text-secondary" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-foreground mb-3">
        {service.titulo}
      </h3>
      <h4 className="text-base font-semibold text-secondary mb-4">
        {service.subtitulo}
      </h4>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {service.descricao}
      </p>

      {/* Lista de Itens */}
      <div className="space-y-2">
        {service.itens.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground/90">
            <div className="w-1.5 h-1.5 bg-secondary/60 rounded-full flex-shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Hover Indicator */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-secondary/20 via-secondary/60 to-secondary/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl" />
    </motion.div>
  )
}
```

## 📊 **Dados de Exemplo**

```jsx
const services = [
  {
    icon: ClipboardList,
    titulo: "Planejamento",
    subtitulo: "Estratégico", 
    descricao: "Viabilidade técnica, anteprojetos arquitetônicos e análises jurídicas completas.",
    itens: ["Viabilidade técnica", "Anteprojetos", "Análises jurídicas"],
  },
  {
    icon: Settings,
    titulo: "Gestão",
    subtitulo: "de Obras",
    descricao: "Gerenciamento completo: financeiro, contábil, jurídico e de contratos.",
    itens: ["Gestão financeira", "Controle contábil", "Administração de contratos"],
  },
  {
    icon: Building2,
    titulo: "Incorporação",
    subtitulo: "Imobiliária", 
    descricao: "Desenvolvimento completo do conceito à entrega das chaves.",
    itens: ["Incorporação", "Construção", "Entrega turnkey"],
  },
  {
    icon: Palette,
    titulo: "Design",
    subtitulo: "de Interiores",
    descricao: "Projetos de stands de vendas e ambientação personalizada.",
    itens: ["Stands de vendas", "Design de interiores", "Consultoria"],
  },
  {
    icon: Eye,
    titulo: "Acompanhamento", 
    subtitulo: "Técnico",
    descricao: "Supervisão técnica e controle de qualidade em todas as etapas.",
    itens: ["Supervisão técnica", "Controle de qualidade", "Gestão de equipes"],
  },
]
```

## 📱 **Responsividade Específica**

### **Breakpoints para Grid de Serviços**
```css
/* Mobile: 1 coluna */
grid-cols-1

/* Tablet: 2 colunas */
md:grid-cols-2

/* Desktop: 5 colunas */
lg:grid-cols-5
```

### **Ajustes de Conteúdo por Tela**
```jsx
// Mobile
className="text-sm" // Textos menores
className="p-4" // Padding reduzido

// Tablet  
className="md:text-base" // Textos normais
className="md:p-6" // Padding normal

// Desktop
className="lg:text-lg" // Textos maiores
className="lg:p-8" // Padding aumentado
```

## 🎨 **Variações de Design**

### **Versão com Timeline Conectada**
```jsx
// Adicionar linha conectora entre cards
<div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -z-10" />
```

### **Versão com Cards Destacados**
```jsx
// Primeiro card com destaque especial
className={`${index === 0 ? 'ring-2 ring-secondary/20 bg-secondary/5' : ''}`}
```

### **Versão com Progress Indicators**
```jsx
// Adicionar indicador de progresso
<div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-background" />
```

## ⚡ **Melhorias de UX**

### **Micro-interações Avançadas**
```jsx
// Hover em sequência
onMouseEnter={() => setHoveredIndex(index)}
className={`transition-all duration-300 ${
  hoveredIndex === index ? 'scale-105 z-10' : 
  hoveredIndex !== null ? 'scale-95 opacity-50' : ''
}`}
```

### **Click para Expandir**
```jsx
const [expandedCard, setExpandedCard] = useState(null)

// Click handler
onClick={() => setExpandedCard(expandedCard === index ? null : index)}

// Conteúdo expandido
{expandedCard === index && (
  <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: "auto", opacity: 1 }}
    className="mt-4 pt-4 border-t border-border/30"
  >
    {/* Conteúdo adicional */}
  </motion.div>
)}
```

### **Tooltips Informativos**
```jsx
// Tooltip no hover do número
<Tooltip content={`Etapa ${number} do processo`}>
  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center cursor-help">
    <span className="text-sm font-bold text-secondary">{number}</span>
  </div>
</Tooltip>
```

## 🚀 **Call-to-Action Final**

```jsx
function CTASection({ fadeInUp }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="whileInView" 
      viewport={{ once: true }}
      className="text-center mt-16"
    >
      <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-2xl p-8 border border-secondary/10">
        <h3 className="text-xl font-bold text-foreground mb-4">
          Pronto para começar seu projeto?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Entre em contato conosco e descubra como podemos transformar sua visão em realidade.
        </p>
        <Button 
          size="lg" 
          className="bg-secondary hover:bg-secondary/90 shadow-glow-sm group text-white"
        >
          Fale Conosco
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  )
}
```

---

**Este padrão deve ser usado sempre que precisar criar uma seção de serviços ou processo sequencial no site da Elleven Engenharia.** 