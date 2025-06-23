# Padrões de UI/UX - Elleven Engenharia

## 🎨 **Paleta de Cores**

### **Cores Principais**
- **Primary**: `#1A2D54` (Azul escuro institucional)
- **Secondary**: `#ea580c` (Laranja - Call-to-action)
- **Background**: `#FFFFFF` (Branco)
- **Foreground**: `#0f172a` (Texto principal)
- **Muted**: `#f1f5f9` (Cinza claro para backgrounds)
- **Muted-foreground**: `#64748b` (Texto secundário)

### **Gradientes Padrão**
```css
/* Background gradients */
bg-gradient-to-br from-muted via-muted/80 to-muted/60
bg-gradient-to-r from-secondary/20 to-primary/20

/* Text gradients */
bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent
```

## 📏 **Sistema de Espaçamentos**

### **Classes de Seção**
```css
.section-padding          /* py-16 px-4 md:px-8 */
.section-padding-alt      /* py-12 px-4 md:px-8 */
.section-padding-hero     /* py-20 px-4 md:px-8 */
.section-padding-large    /* py-24 px-4 md:px-8 */
```

### **Espaçamentos Padrão**
- **Container**: `mx-auto px-4 md:px-8`
- **Seções**: `py-16` (reduzido para `py-10`)
- **Cards**: `p-6` ou `p-8`
- **Elementos**: `gap-6`, `gap-8`, `gap-12`

## 🖋️ **Tipografia**

### **Hierarquia de Títulos**
```css
/* H1 - Hero sections */
text-3xl md:text-4xl lg:text-5xl font-bold

/* H2 - Section titles */
text-2xl md:text-3xl lg:text-4xl font-bold

/* H3 - Card titles */
text-xl font-bold

/* H4 - Subtitles */
text-lg font-semibold

/* Body text */
text-lg text-muted-foreground leading-relaxed

/* Small text */
text-sm text-muted-foreground
```

### **Padrão de Títulos de Seção**
```jsx
<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
  Título <span className="text-secondary">Destaque</span>
</h2>
<p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
  Descrição da seção
</p>
```

## 🎭 **Animações Padrão**

### **Framer Motion - Variants Principais**
```jsx
// Entrada padrão
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

// Stagger container
const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { staggerChildren: 0.1 },
  viewport: { once: true },
}

// Hover para cards
whileHover={{ y: -2, scale: 1.02 }}

// Spring animations
transition: { type: "spring", stiffness: 300, damping: 20 }
```

### **Transições CSS**
```css
/* Transições padrão */
transition-all duration-300
transition-colors duration-200
hover:shadow-lg

/* Transform hover states */
hover:-translate-y-1
group-hover:translate-x-1
```

## 🃏 **Padrões de Cards**

### **Card Base**
```jsx
<div className="bg-card/50 border border-border/30 rounded-lg p-6 hover:border-border/60 hover:bg-card/80 transition-all duration-300 group">
  {/* Content */}
</div>
```

### **Card com Glassmorphism**
```jsx
<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl">
  {/* Content */}
</div>
```

### **Card de Pessoa/Time**
```jsx
<div className="text-center group">
  <div className="relative mb-6 mx-auto w-48 h-48 lg:w-56 lg:h-56">
    <div className="w-full h-full rounded-full overflow-hidden border-4 border-secondary/20 group-hover:border-secondary/40 transition-all duration-300 shadow-lg">
      <img className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
    </div>
  </div>
  {/* Info */}
</div>
```

### **Card de Empreendimento**
```jsx
<div className="bg-card border border-border/50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
  {/* Image */}
  <div className="relative overflow-hidden">
    <img className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
  {/* Content */}
</div>
```

## 🔘 **Componentes de Interface**

### **Botões Primários**
```jsx
<Button 
  size="lg" 
  className="bg-secondary hover:bg-secondary/90 shadow-glow-sm group text-white"
>
  Texto do Botão
  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
</Button>
```

### **Botões Secundários**
```jsx
<Button 
  variant="outline" 
  size="lg"
  className="border-border/50 hover:border-secondary hover:bg-muted hover:shadow-md transition-all duration-300"
>
  Botão Outline
</Button>
```

### **Input Padrão**
```jsx
<div className="relative group">
  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  <Input className="relative bg-white/90 backdrop-blur-sm border-2 border-transparent focus:border-secondary focus:bg-white focus:shadow-lg transition-all duration-300 rounded-xl" />
</div>
```

## 📋 **Layout Patterns**

### **Header de Seção Padrão**
```jsx
<motion.div
  variants={fadeInUp}
  initial="initial"
  whileInView="whileInView"
  viewport={{ once: true }}
  className="text-center mb-16"
>
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
    Título <span className="text-secondary">Destaque</span>
  </h2>
  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
    Descrição da seção
  </p>
</motion.div>
```

### **Grid Responsivo 3 Colunas**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Cards */}
</div>
```

### **Grid Responsivo 4 Colunas**
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Cards */}
</div>
```

### **Layout Duas Colunas**
```jsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
  <div>{/* Conteúdo esquerda */}</div>
  <div>{/* Conteúdo direita */}</div>
</div>
```

## ⭐ **Estados e Feedback**

### **Loading States**
```jsx
// Skeleton loading
<div className="animate-pulse">
  <div className="h-6 bg-muted/50 rounded mb-4"></div>
  <div className="h-4 bg-muted/50 rounded w-3/4"></div>
</div>

// Spinner
<div className="w-5 h-5 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin"></div>
```

### **Success States**
```jsx
<motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8"
>
  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
  {/* Success content */}
</motion.div>
```

### **Hover Indicators**
```jsx
// Links com underline animado
<Link className="group relative">
  Texto do Link
  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full rounded-full"></span>
</Link>

// Cards com elevação
<div className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
  {/* Card content */}
</div>
```

## 🖼️ **Background Patterns**

### **Background com Pattern**
```jsx
<div className="absolute inset-0 opacity-[0.02]">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
</div>
```

### **Background com Gradiente**
```jsx
<section className="bg-gradient-to-br from-muted/60 via-muted/40 to-background">
  {/* Content */}
</section>
```

### **Logo como Marca d'Água**
```jsx
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <img
    src="/logo.png"
    alt=""
    className="w-64 h-auto opacity-3 -rotate-12 blur-[0.5px]"
  />
</div>
```

## 📱 **Responsividade**

### **Breakpoints Padrão**
```css
/* Mobile first approach */
.responsive-element {
  /* Mobile: base styles */
}

@media (md) {
  /* Tablet: 768px+ */
}

@media (lg) {
  /* Desktop: 1024px+ */
}

@media (xl) {
  /* Large: 1280px+ */
}
```

### **Container Responsivo**
```jsx
<div className="container mx-auto px-4 md:px-8 lg:px-16">
  {/* Content */}
</div>
```

## 🎯 **Micro-interações**

### **Elementos Decorativos**
```jsx
// Pontos decorativos
<span className="w-1 h-1 bg-secondary rounded-full"></span>

// Linhas decorativas
<div className="w-8 h-0.5 bg-gradient-to-r from-secondary to-transparent rounded-full"></div>

// Separadores
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
```

### **Icons com Background**
```jsx
<div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
  <Icon className="h-6 w-6 text-secondary" />
</div>
```

## 🏗️ **Estrutura de Componentes**

### **Anatomia de uma Seção**
```jsx
export default function ExampleSection() {
  // 1. Animation variants
  const fadeInUp = { /* ... */ }
  const staggerContainer = { /* ... */ }
  
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-8">
        
        {/* 2. Header */}
        <HeaderSection fadeInUp={fadeInUp} />
        
        {/* 3. Main content grid */}
        <ContentGrid staggerContainer={staggerContainer} />
        
        {/* 4. Optional CTA */}
        <CTASection fadeInUp={fadeInUp} />
        
      </div>
    </section>
  )
}

// 5. Componentes auxiliares
function HeaderSection({ fadeInUp }) { /* ... */ }
function ContentGrid({ staggerContainer }) { /* ... */ }
function CTASection({ fadeInUp }) { /* ... */ }
```

## 📝 **Checklist de Implementação**

### ✅ **Ao criar uma nova seção:**
- [ ] Usar `section-padding` adequado
- [ ] Implementar `fadeInUp` e `staggerContainer`
- [ ] Header centralizado com título + descrição
- [ ] Grid responsivo apropriado
- [ ] Hover states nos elementos interativos
- [ ] Transições suaves (300ms padrão)
- [ ] Variants de animação consistentes
- [ ] Espaçamentos using design system
- [ ] Cores da paleta oficial

### ✅ **Para cards:**
- [ ] Background semi-transparente
- [ ] Border sutil
- [ ] Hover effects (elevação + escala)
- [ ] Transições smooth
- [ ] Icons com backgrounds circulares
- [ ] Typography hierarchy correta

### ✅ **Para formulários:**
- [ ] Glassmorphism background
- [ ] Estados de loading
- [ ] Feedback visual (success/error)
- [ ] Hover effects nos inputs
- [ ] Botões com gradientes e shadows

---

**Este documento serve como referência para manter a consistência visual e de UX em todo o site da Elleven Engenharia.** 