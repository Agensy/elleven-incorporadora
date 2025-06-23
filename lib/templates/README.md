# 📚 BIBLIOTECA DE TEMPLATES - PÁGINAS DE EMPREENDIMENTO
## Documentação completa para desenvolvimento ágil

---

## 📋 **ÍNDICE DE DOCUMENTOS**

### 🏗️ **ESTRUTURA E PADRÕES**
- [`empreendimento-page-structure.md`](./empreendimento-page-structure.md)
  - Estrutura completa das páginas
  - Seções obrigatórias (9 seções)
  - Padrões visuais da Elleven
  - Especificações técnicas

### 🚀 **IMPLEMENTAÇÃO RÁPIDA**
- [`guia-implementacao-rapida.md`](./guia-implementacao-rapida.md)
  - Criar página em 10 minutos
  - Checklist ultra-rápido
  - Comandos úteis
  - Erros comuns

### 📄 **TEMPLATE PRONTO**
- [`empreendimento-page-template.tsx`](./empreendimento-page-template.tsx)
  - Código completo para copiar
  - Comentários de instrução
  - Placeholders organizados
  - Estrutura das 9 seções

---

## 🎯 **FLUXO DE TRABALHO**

### **1. PLANEJAMENTO** (5 min)
1. Definir nome e slug do empreendimento
2. Coletar dados básicos (preço, endereço, tipos)
3. Organizar imagens (hero, galeria, plantas)

### **2. IMPLEMENTAÇÃO** (10 min)
1. Copiar template base
2. Substituir dados placeholder
3. Configurar tipologias
4. Ajustar caminhos de imagem

### **3. VALIDAÇÃO** (5 min)
1. Build sem erros
2. Teste de responsividade
3. Verificação de SEO
4. Performance check

**TOTAL: ~20 minutos por página**

---

## 📁 **ESTRUTURA DE ARQUIVOS**

```
lib/templates/
├── README.md                              ← Este arquivo
├── empreendimento-page-structure.md       ← Documentação completa
├── guia-implementacao-rapida.md           ← Guia prático
├── empreendimento-page-template.tsx       ← Template de código
└── empreendimento-template.ts             ← Dados estruturados
```

---

## 🎨 **PADRÕES VISUAIS ELLEVEN**

### **Cores Oficiais**
```css
Primary: #1A2D54    /* Azul Elleven */
Hover: #152444      /* Azul escuro */
Neutral: #F8F9FA    /* Backgrounds */
```

### **Seções Obrigatórias**
1. **Header** com botão voltar
2. **Hero** com imagem principal
3. **Sobre** com descrição + imagem
4. **Plantas** com tipologias
5. **Galeria** com layout especial
6. **Diferenciais** (4 cards principais)
7. **Pontos** de interesse + CTA
8. **Lista** completa de diferenciais
9. **CTA Final** com 2 botões

### **Componentes Padrão**
- Cards com hover effect
- Bullets azuis para listas
- Gradientes neutros
- Tipografia consistente

---

## 🚀 **INÍCIO RÁPIDO**

### **Para criar página do JADE:**
```bash
# 1. Preparar assets
mkdir public/empreendimentos/jade/{galeria,plantas}

# 2. Copiar template
cp lib/templates/empreendimento-page-template.tsx app/jade/page.tsx

# 3. Substituir dados
# CTRL+F: NOME_EMPREENDIMENTO → Jade
# CTRL+F: NOME → jade
# CTRL+F: DESCRIÇÃO_COMPLETA → (texto real)

# 4. Testar
npm run build
npm run dev
```

### **Resultado esperado:**
- ✅ Página funcionando em 10 minutos
- ✅ SEO otimizado
- ✅ Responsiva
- ✅ Padrão visual Elleven

---

## 📊 **MÉTRICAS DE QUALIDADE**

### **Performance**
- [ ] Build < 30 segundos
- [ ] Lighthouse > 90
- [ ] Imagens otimizadas
- [ ] Carregamento < 3 segundos

### **SEO**
- [ ] Meta tags únicas
- [ ] Alt text completo
- [ ] Estrutura semântica
- [ ] Keywords relevantes

### **UX**
- [ ] Navegação intuitiva
- [ ] CTAs claros
- [ ] Mobile-first
- [ ] Acessibilidade

---

## 🔧 **MANUTENÇÃO**

### **Atualizações comuns:**
- Preços dos empreendimentos
- Novas tipologias
- Imagens da galeria
- Status de construção

### **Evolução do template:**
- Novas seções conforme necessidade
- Otimizações de performance
- Melhorias de UX
- Recursos adicionais

---

## 🎯 **CASOS DE USO**

### **Empreendimentos atuais:**
- [x] **Botanique** - Implementado
- [x] **Jade** - Dados disponíveis
- [x] **Obsidian** - Implementado
- [ ] **Outros** - Aguardando assets

### **Tipos de empreendimento:**
- **Residencial** - Apartamentos familiares
- **Compacto** - Studios e 1 dormitório
- **Luxo** - Alto padrão
- **Comercial** - Salas e lojas

---

## 💡 **DICAS IMPORTANTES**

### **✅ SEMPRE FAZER:**
- Testar responsividade
- Otimizar imagens antes de usar
- Personalizar metadata SEO
- Manter consistência visual
- Validar build antes de deploy

### **❌ NUNCA FAZER:**
- Deixar dados placeholder
- Usar event handlers inline
- Esquecer alt text
- Imagens > 500KB
- Quebrar padrão visual

---

## 📞 **SUPORTE**

### **Erros comuns:**
- **Build falha:** Verificar caminhos de imagem
- **Imagens não carregam:** Conferir pasta public
- **Metadata duplicada:** Personalizar por empreendimento
- **Layout quebrado:** Verificar classes CSS

### **Recursos adicionais:**
- Documentação do Next.js 15
- Guia do Tailwind CSS
- Biblioteca de ícones Lucide
- Componentes shadcn/ui

---

## 🏆 **RESULTADOS ESPERADOS**

Com esta documentação, você deve conseguir:

1. **Criar páginas profissionais** em 10-20 minutos
2. **Manter consistência visual** da marca Elleven
3. **Otimizar SEO** automaticamente
4. **Garantir responsividade** em todos os dispositivos
5. **Acelerar desenvolvimento** de novos empreendimentos

---

*Documentação atualizada em Janeiro 2025 - Elleven Engenharia* 