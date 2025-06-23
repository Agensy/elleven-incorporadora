# 📋 ESTRUTURA DA PÁGINA DE EMPREENDIMENTO
## Template para criação de páginas individuais de empreendimentos

---

## 🏗️ **ESTRUTURA GERAL**

### **Arquivo:** `app/[empreendimento]/page.tsx`
- **Tipo:** Server Component (Next.js 15)
- **Metadata:** SEO otimizado
- **Responsivo:** Desktop e mobile

---

## 📊 **DADOS DO EMPREENDIMENTO**

### **Objeto Principal**
```typescript
const empreendimento = {
  // BÁSICO
  nome: string,                    // "Botanique"
  endereco: string,               // "Vila Progredior, São Paulo - SP"
  preco: string,                  // "A partir de R$ 450.000"
  tipo: string,                   // "2 e 3 dormitórios"
  descricao: string,              // Descrição completa (2-3 parágrafos)
  
  // IMAGENS
  imagem: string,                 // Imagem principal para hero
  
  // LOCALIZAÇÃO
  pontosInteresse: string[],      // Array de pontos próximos
  
  // DIFERENCIAIS
  diferenciais: string[],         // Array de diferenciais únicos
  
  // TIPOLOGIAS
  tipologias: Array<{
    nome: string,                 // "2 Dormitórios"
    area: string,                 // "65m²"
    quartos: number,              // 2
    banheiros: number,            // 2
    vagas: number,                // 1
    preco: string,                // "A partir de R$ 450.000"
    imagem: string                // Caminho da planta
  }>,
  
  // GALERIA
  galeria: string[]               // Array de imagens
}
```

---

## 🎨 **SEÇÕES DA PÁGINA**

### **1. HEADER DE NAVEGAÇÃO**
```tsx
<header className="bg-white border-b">
  <div className="container mx-auto px-4 py-4">
    <Link href="/empreendimentos">
      <Button variant="ghost">
        <ArrowLeft /> Voltar aos Empreendimentos
      </Button>
    </Link>
  </div>
</header>
```

### **2. HERO SECTION**
- **Altura:** `h-[70vh]`
- **Background:** Imagem principal com overlay
- **Conteúdo:** Nome, endereço, preço em badge
- **Estilo:** Centralizado, texto branco

```tsx
<section className="relative h-[70vh] overflow-hidden">
  <Image src={imagem} fill className="object-cover" />
  <div className="absolute inset-0 bg-black/40" />
  <div className="absolute inset-0 flex items-center justify-center">
    {/* Conteúdo */}
  </div>
</section>
```

### **3. SOBRE O EMPREENDIMENTO**
- **Layout:** Grid 2 colunas (lg:grid-cols-2)
- **Lado esquerdo:** Texto descritivo + informações básicas
- **Lado direito:** Imagem secundária
- **Background:** Branco (`bg-white`)

### **4. PLANTAS E TIPOLOGIAS**
- **Background:** Cinza claro (`bg-gray-50`)
- **Layout:** Grid responsivo (md:grid-cols-2 lg:grid-cols-3)
- **Cards:** Com imagem, especificações e preço
- **Ícones:** Ruler, Home, Bath, Car

### **5. GALERIA**
- **Background:** Branco (`bg-white`)
- **Layout:** Grid com primeira imagem em destaque
- **Efeito:** Hover com scale e overlay

### **6. CARDS DE DIFERENCIAIS**
- **Background:** Cinza claro (`bg-gray-50`)
- **Layout:** Grid 4 colunas (lg:grid-cols-4)
- **Ícones:** MapPin, Home, Shield, Diamond
- **Cor dos ícones:** `#1A2D54` (azul Elleven)

### **7. PONTOS DE INTERESSE**
- **Background:** Branco (`bg-white`)
- **Layout:** Grid 2 colunas
- **Lado esquerdo:** Lista com bullets azuis
- **Lado direito:** Card de contato

### **8. LISTA DE DIFERENCIAIS**
- **Background:** Cinza claro (`bg-gray-50`)
- **Layout:** Grid 4 colunas (md:grid-cols-2 lg:grid-cols-4)
- **Estilo:** Cards brancos com bullets azuis

### **9. CTA FINAL**
- **Background:** Azul Elleven (`#1A2D54`)
- **Conteúdo:** Título, descrição, 2 botões
- **Botões:** Primário branco, secundário outline

---

## 🎨 **PADRÕES VISUAIS**

### **Cores Oficiais**
```css
Azul Elleven: #1A2D54
Hover: #152444
Backgrounds: bg-white, bg-gray-50
```

### **Tipografia**
```css
H1 Hero: text-4xl md:text-6xl font-bold
H2 Seções: text-4xl font-bold mb-4
H3 Cards: text-xl font-semibold mb-2
Parágrafos: text-gray-600 leading-relaxed
```

### **Espaçamentos**
```css
Seções: py-20
Container: container mx-auto px-4
Cards: p-6, hover:shadow-lg
```

### **Componentes UI**
```tsx
// Importações necessárias
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
```

---

## 📁 **ESTRUTURA DE ARQUIVOS**

### **Imagens Organizadas**
```
public/empreendimentos/[nome]/
├── fachada-[nome].jpg          # Hero principal
├── background-[nome].jpg       # Secundária
├── logo-[nome].png             # Logo (se houver)
├── galeria/
│   ├── imagem-1.jpg
│   ├── imagem-2.jpg
│   └── ...
└── plantas/
    ├── tipologia-1.jpg
    ├── tipologia-2.jpg
    └── ...
```

### **Dados Centralizados**
```
lib/data/empreendimentos.ts     # Dados de todos empreendimentos
lib/types/empreendimento.ts     # Tipagens TypeScript
```

---

## 🚀 **TEMPLATE COMPLETO**

### **Metadata SEO**
```tsx
export const metadata: Metadata = {
  title: "[Nome] - [Tipos] | Elleven Engenharia",
  description: "[Nome] - [Descrição resumida]. [Preço]. [Localização], [diferenciais principais].",
  keywords: "[nome], [cidade], [estado], apartamento, [tipos], Elleven Engenharia, [características]",
}
```

### **Esqueleto da Página**
```tsx
export default function EmpreendimentoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header com voltar */}
      {/* 2. Hero Section */}
      {/* 3. Sobre o Empreendimento */}
      {/* 4. Plantas e Tipologias */}
      {/* 5. Galeria */}
      {/* 6. Cards de Diferenciais (4 principais) */}
      {/* 7. Pontos de Interesse */}
      {/* 8. Lista de Diferenciais Completa */}
      {/* 9. CTA Final */}
    </div>
  )
}
```

---

## ✅ **CHECKLIST PARA NOVA PÁGINA**

### **Dados**
- [ ] Nome do empreendimento
- [ ] Endereço completo
- [ ] Preço atualizado
- [ ] Descrição envolvente (2-3 parágrafos)
- [ ] 4 diferenciais principais (com ícones)
- [ ] Lista completa de diferenciais
- [ ] 6+ pontos de interesse próximos
- [ ] Tipologias com plantas e especificações

### **Imagens**
- [ ] Foto principal para hero (alta resolução)
- [ ] Foto secundária para seção "sobre"
- [ ] 6+ imagens para galeria
- [ ] Plantas de todas as tipologias
- [ ] Logo do empreendimento (se houver)

### **Técnico**
- [ ] Arquivo criado em `app/[nome]/page.tsx`
- [ ] Metadata SEO configurada
- [ ] Imagens organizadas na pasta correta
- [ ] Dados adicionados ao arquivo central
- [ ] Responsividade testada
- [ ] Build sem erros

### **Visual**
- [ ] Cores Elleven aplicadas (#1A2D54)
- [ ] Espaçamentos padronizados
- [ ] Tipografia consistente
- [ ] Hover effects funcionando
- [ ] CTA final configurado

---

## 🎯 **EXEMPLO DE USO**

Para criar a página do **Jade**:
1. Copiar template da página Botanique
2. Substituir dados do objeto principal
3. Ajustar imagens para pasta `public/empreendimentos/jade/`
4. Personalizar diferenciais específicos do Jade
5. Testar responsividade
6. Fazer build e validar

---

## 📞 **NOTAS IMPORTANTES**

- **Server Component:** Não usar hooks ou event handlers inline
- **Imagens:** Usar Next.js Image component para otimização
- **SEO:** Sempre configurar metadata específica
- **Consistência:** Manter padrão visual da Elleven
- **Performance:** Otimizar imagens antes de usar
- **Acessibilidade:** Alt text em todas as imagens

---

*Documentação criada com base na página do Botanique - Janeiro 2025* 