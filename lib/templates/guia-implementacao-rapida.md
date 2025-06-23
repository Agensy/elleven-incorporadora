# 🚀 GUIA DE IMPLEMENTAÇÃO RÁPIDA
## Criando uma nova página de empreendimento em 10 minutos

---

## ⚡ **PASSOS RÁPIDOS**

### **1. PREPARAR ASSETS (5 min)**
```bash
# Criar pasta do empreendimento
mkdir public/empreendimentos/[NOME]
mkdir public/empreendimentos/[NOME]/galeria
mkdir public/empreendimentos/[NOME]/plantas

# Organizar imagens:
# - 1 foto principal (fachada)
# - 1 foto secundária (vista/área)
# - 6+ fotos para galeria
# - Plantas das tipologias
```

### **2. COPIAR TEMPLATE (1 min)**
```bash
# Copiar template base
cp lib/templates/empreendimento-page-template.tsx app/[NOME]/page.tsx
```

### **3. SUBSTITUIR DADOS (3 min)**
Editar `app/[NOME]/page.tsx`:

**CTRL+F e substituir:**
- `NOME_EMPREENDIMENTO` → Nome completo
- `NOME` → slug (ex: "jade", "obsidian") 
- `ENDEREÇO_COMPLETO` → Endereço real
- `PREÇO_INICIAL` → Preço de lançamento
- `TIPOS_DISPONIVEIS` → Ex: "1, 2 e 3 dormitórios"
- `DESCRIÇÃO_COMPLETA` → Texto vendedor 2-3 parágrafos

### **4. CONFIGURAR TIPOLOGIAS (1 min)**
```typescript
tipologias: [
  {
    nome: "Studio 26m²",
    area: "26m²",
    quartos: 0, // Studio = 0
    banheiros: 1,
    vagas: 0,
    preco: "A partir de R$ 280.000",
    imagem: "/empreendimentos/[NOME]/plantas/studio.jpg"
  },
  // Adicionar mais conforme necessário
]
```

---

## 🎯 **CHECKLIST ULTRA-RÁPIDO**

### **PRÉ-REQUISITOS** ✅
- [ ] Fotos organizadas na pasta correta
- [ ] Nome e slug definidos
- [ ] Dados básicos coletados (preço, endereço, tipos)

### **IMPLEMENTAÇÃO** ⚡
- [ ] Template copiado para `app/[nome]/page.tsx`
- [ ] Dados placeholder substituídos
- [ ] Imagens com caminhos corretos
- [ ] Metadata SEO personalizada

### **VALIDAÇÃO** 🔍
- [ ] `npm run build` sem erros
- [ ] Página abre no navegador
- [ ] Todas as imagens carregam
- [ ] Responsividade OK

---

## 📝 **TEMPLATE DE DADOS MÍNIMOS**

**Copie e preencha rapidamente:**

```typescript
const EMPREENDIMENTO = {
  nome: "________",
  endereco: "________, São Paulo - SP",
  preco: "A partir de R$ _______",
  tipo: "_____ dormitórios",
  descricao: `
    Primeiro parágrafo sobre localização e conceito.
    
    Segundo parágrafo sobre diferenciais únicos.
    
    Terceiro parágrafo sobre público-alvo e benefícios.
  `,
  
  // PONTOS PRÓXIMOS (6 itens)
  pontosInteresse: [
    "Shopping _____ (___m)",
    "Estação _____ (___km)",
    "Hospital _____ (___m)",
    "Parque _____ (___m)",
    "Escola _____ (___m)",
    "Centro _____ (___km)"
  ],
  
  // DIFERENCIAIS (8 itens)
  diferenciais: [
    "Localização privilegiada em _____",
    "Área de lazer com _____",
    "_____ e _____ para toda família",
    "_____ equipada",
    "Salão de festas com _____",
    "Segurança 24h com _____",
    "Apartamentos com _____",
    "Acabamentos _____ em todos ambientes"
  ]
}
```

---

## 🖼️ **PADRÃO DE IMAGENS**

### **NOMES OBRIGATÓRIOS:**
```
/empreendimentos/[nome]/
├── fachada-[nome].jpg          ← HERO principal
├── background-[nome].jpg       ← Seção "sobre"
├── galeria/
│   ├── area-lazer.jpg         ← Piscina/churrasqueira
│   ├── playground.jpg         ← Área infantil
│   ├── salao-festas.jpg       ← Salão
│   ├── academia.jpg           ← Fitness
│   ├── vista-aerea.jpg        ← Vista do alto
│   └── fachada-noite.jpg      ← Fachada iluminada
└── plantas/
    ├── studio-26m2.jpg        ← Por tipologia
    ├── 1-dormitorio-45m2.jpg
    └── 2-dormitorios-65m2.jpg
```

### **ESPECIFICAÇÕES:**
- **Formato:** JPG ou PNG
- **Resolução mínima:** 1920x1080 (hero), 800x600 (demais)
- **Peso máximo:** 500KB por imagem
- **Proporção hero:** 16:9 ou 21:9

---

## ⚙️ **COMANDOS ÚTEIS**

### **Durante desenvolvimento:**
```bash
# Servidor local
npm run dev

# Build para testar
npm run build

# Verificar erros
npm run lint
```

### **Otimizar imagens (opcional):**
```bash
# Redimensionar com ImageMagick
convert input.jpg -resize 1920x1080^ -gravity center -crop 1920x1080+0+0 output.jpg

# Comprimir com TinyPNG online ou:
npx imagemin input.jpg --out-dir=output --plugin=imagemin-mozjpeg
```

---

## 🎨 **PERSONALIZAÇÃO RÁPIDA**

### **Cores específicas do empreendimento:**
```css
/* Se houver cor específica */
.empreendimento-cor {
  background-color: #COR_ESPECÍFICA;
}

/* Manter padrão Elleven por consistência */
.elleven-primary {
  background-color: #1A2D54;
}
```

### **Diferenciais únicos por empreendimento:**
- **Luxury/Alto padrão:** Diamond, Crown, Star
- **Familiar:** Home, Heart, Users  
- **Moderno/Tech:** Zap, Wifi, Monitor
- **Sustentável:** Leaf, Sun, Droplets

---

## 🚨 **ERROS COMUNS**

### **❌ EVITAR:**
- Esquecer de trocar caminhos de imagem
- Deixar dados placeholder
- Event handlers inline (onMouseEnter)
- Imagens muito pesadas (>500KB)
- Metadata genérica

### **✅ GARANTIR:**
- Todas as imagens existem no caminho correto
- Metadata específica do empreendimento
- Build sem erros
- Responsividade em mobile
- SEO otimizado

---

## 📊 **MÉTRICAS DE SUCESSO**

### **Performance:**
- [ ] Build em menos de 30s
- [ ] Página carrega em menos de 3s
- [ ] Score Lighthouse > 90

### **SEO:**
- [ ] Title único e descritivo
- [ ] Meta description envolvente
- [ ] Keywords relevantes
- [ ] Alt text em todas as imagens

### **UX:**
- [ ] Navegação intuitiva
- [ ] CTAs claros e funcionais
- [ ] Informações completas
- [ ] Visual consistente com marca

---

## 🎯 **EXEMPLO PRÁTICO: JADE**

**Tempo total: ~8 minutos**

1. **Assets (3 min):** Organizar 10 imagens do Jade
2. **Código (3 min):** Copiar template e substituir dados
3. **Build (1 min):** Testar compilação
4. **Validação (1 min):** Abrir no navegador

**Resultado:** Página profissional do Jade funcionando!

---

*Guia criado para acelerar desenvolvimento - Janeiro 2025* 