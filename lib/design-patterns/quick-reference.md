# Quick Reference - Elleven UI Patterns

## 🎨 **Cores Principais**
```css
Primary: #1A2D54 (Azul institucional)
Secondary: #ea580c (Laranja CTA)
Background: #FFFFFF
Muted: #f1f5f9
```

## 📏 **Espaçamentos**
```css
.section-padding       /* py-16 px-4 md:px-8 */
.section-padding-large /* py-24 px-4 md:px-8 */
```

## 🎭 **Animações Essenciais**
```jsx
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
```

## 📋 **Header de Seção**
```jsx
<motion.div variants={fadeInUp} className="text-center mb-16">
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
    Título <span className="text-secondary">Destaque</span>
  </h2>
  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
    Descrição da seção
  </p>
</motion.div>
```

## 🃏 **Card Padrão**
```jsx
<motion.div
  variants={fadeInUp}
  whileHover={{ y: -2, scale: 1.02 }}
  className="bg-card/50 border border-border/30 rounded-lg p-6 hover:border-border/60 hover:bg-card/80 transition-all duration-300 group"
>
  {/* Content */}
</motion.div>
```

## 🔘 **Botão Primário**
```jsx
<Button 
  size="lg" 
  className="bg-secondary hover:bg-secondary/90 shadow-glow-sm group text-white"
>
  Texto
  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
</Button>
```

## 📊 **Grids Responsivos**
```jsx
// 3 colunas
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

// 4 colunas  
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"

// 5 colunas (serviços)
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
```

## 💫 **Hover Effects**
```jsx
// Cards
whileHover={{ y: -2, scale: 1.02 }}

// Links
<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full rounded-full"></span>

// Icons
className="group-hover:scale-110 transition-transform duration-300"
```

## 🖼️ **Backgrounds**
```jsx
// Gradiente padrão
className="bg-gradient-to-br from-muted/60 via-muted/40 to-background"

// Glassmorphism
className="bg-white/10 backdrop-blur-md border border-white/20"
```

## 📱 **Container Responsivo**
```jsx
<div className="container mx-auto px-4 md:px-8">
  {/* Content */}
</div>
```

---

**Sempre consulte os arquivos completos para implementações específicas!** 