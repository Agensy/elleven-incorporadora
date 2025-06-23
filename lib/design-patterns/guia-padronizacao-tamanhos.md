# Guia de Padronização de Tamanhos - Elleven Engenharia

## 🎯 **Objetivo Simples**
Padronizar apenas os **tamanhos de texto** sem alterar estruturas ou layouts existentes.

## ⚠️ **Problema Atual**
O CSS global está limitando os tamanhos do Tailwind:
```css
/* CSS Global limitando */
.text-base { font-size: 0.75rem; }  /* 12px em vez de 16px */  
.text-lg { font-size: 0.8rem; }     /* 12.8px em vez de 18px */
.text-xl { font-size: 0.9rem; }     /* 14.4px em vez de 20px */
.text-2xl { font-size: 1.1rem; }    /* 17.6px em vez de 24px */
```

## 🔧 **Solução**
Usar `style={{ fontSize: 'XXpx' }}` para contornar as limitações.

---

## 📏 **Padrões de Tamanho**

### **H1 - Títulos Principais (Hero)**
```tsx
style={{ fontSize: '2.5rem' }} // 40px
```

### **H2 - Títulos de Seção**
```tsx
style={{ fontSize: '1.875rem' }} // 30px
```

### **H3 - Subtítulos**
```tsx
style={{ fontSize: '1.25rem' }} // 20px
```

### **Parágrafos Principais (Descrições de Seção)**
```tsx
style={{ fontSize: '0.875rem' }} // 14px
```

### **Parágrafos Padrão**
```tsx
style={{ fontSize: '0.875rem' }} // 14px
```

### **Textos Secundários**
```tsx
style={{ fontSize: '0.75rem' }} // 12px
```

### **Textos Pequenos (Labels, Copyright)**
```tsx
style={{ fontSize: '0.75rem' }} // 12px
```

---

## 🎨 **Como Aplicar**

### **Antes (Limitado pelo CSS):**
```tsx
<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
  Título da Seção
</h2>
<p className="text-lg text-muted-foreground">
  Descrição da seção
</p>
```

### **Depois (Tamanho Real):**
```tsx
<h2 className="font-bold" style={{ fontSize: '1.875rem' }}>
  Título da Seção
</h2>
<p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
  Descrição da seção
</p>
```

---

## 📋 **Checklist de Padronização**

### **Headers (H1, H2, H3)**
- [ ] Hero H1: `fontSize: '2.5rem'`
- [ ] Seção H2: `fontSize: '1.875rem'`
- [ ] Card H3: `fontSize: '1.25rem'`

### **Parágrafos (P)**
- [ ] Descrições principais: `fontSize: '0.875rem'`
- [ ] Textos padrão: `fontSize: '0.875rem'`
- [ ] Textos secundários: `fontSize: '0.75rem'`

### **Botões**
- [ ] Botões principais: `fontSize: '1rem'`
- [ ] Botões pequenos: `fontSize: '0.875rem'`

### **Labels e Tags**
- [ ] Labels: `fontSize: '0.875rem'`
- [ ] Tags pequenas: `fontSize: '0.75rem'`

---

## 🚀 **Implementação Rápida**

### **1. Manter Classes Existentes**
Não remover classes como `text-muted-foreground`, `font-bold`, etc.

### **2. Adicionar Style Inline**
Apenas adicionar `style={{ fontSize: 'XXrem' }}` ao lado.

### **3. Exemplo Prático**
```tsx
// ✅ CORRETO - Manter classes + adicionar style
<p className="text-muted-foreground leading-relaxed" 
   style={{ fontSize: '0.875rem' }}>
  Texto da descrição
</p>

// ❌ ERRADO - Não remover classes existentes
<p style={{ fontSize: '0.875rem' }}>
  Texto da descrição
</p>
```

---

## 📊 **Resumo dos Tamanhos**

| Elemento | Tamanho | Uso |
|----------|---------|-----|
| `2.5rem` | 40px | H1 Hero |
| `1.875rem` | 30px | H2 Seções |
| `1.25rem` | 20px | H3 Cards |
| `0.875rem` | 14px | Parágrafos principais |
| `0.875rem` | 14px | Texto padrão |
| `0.75rem` | 12px | Texto secundário |
| `0.75rem` | 12px | Labels pequenos |

---

---

## 🧡 **Padrão de Headlines (NOVO)**

### **Regra: Toda headline H2 deve ter uma palavra em laranja**
```tsx
<h2 className="font-bold text-foreground">
  Texto normal <span className="text-secondary">palavra-chave</span>
</h2>
```

### **Exemplos Implementados:**
- Quem somos **nós**
- Nossos **Empreendimentos** 
- Nossos **Diferenciais**
- Juntos construiremos **o seu sonho**
- A rentabilidade **certa** para o seu **investimento**
- Sobre a **Elleven Engenharia**
- Empresas que **confiam** em nosso trabalho

---

## 📏 **Padrão de Padding das Seções (NOVO)**

### **Regra: Todas as seções (exceto Hero) devem ter py-20**
```tsx
<section className="py-20 bg-background">
  {/* Conteúdo da seção */}
</section>
```

### **Valor Padronizado:**
- **`py-20`** = **80px** superior e inferior
- **Aplica-se a**: Todas as seções principais
- **Exceção**: Hero Section (mantém próprio padrão)

### **Seções Padronizadas:**
- ✅ Quem Somos: `py-32` → `py-20`
- ✅ Serviços: `py-16` → `py-20`  
- ✅ Investimento: `section-padding` → `py-20`
- ✅ Empreendimentos: `section-padding-large` → `py-20`
- ✅ Diferenciais: `section-padding` → `py-20`
- ✅ Sobre: `section-padding` → `py-20`
- ✅ Parceiros: `section-padding` → `py-20`

---

**🎯 Foco:** Tamanhos + Headlines + Padding padronizados.
**⚡ Rápido:** Aplicação incremental por seção.
**✅ Simples:** Manter código existente + adicionar padrões. 