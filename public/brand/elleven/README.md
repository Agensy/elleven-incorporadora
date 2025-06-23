# 🏢 Brand Assets - Elleven Engenharia

Esta pasta contém todos os assets oficiais da marca Elleven Engenharia organizados para fácil uso e manutenção.

## 📁 Estrutura de Pastas

### `/logos/`
Variações do logotipo da Elleven para diferentes usos:
- `logo-primary.png` - Logo principal (uso geral)
- `logo-secondary.png` - Logo secundário (variação)
- `logo-alternative.png` - Logo alternativo (usos especiais)

### `/backgrounds/`
Imagens de fundo e texturas da marca:
- *Espaço reservado para backgrounds oficiais*

### `/graphics/`
Elementos gráficos e padrões da marca:
- `pattern-1.png` - Grafismo padrão 1
- `pattern-2.png` - Grafismo padrão 2

### `/icons/`
Ícones personalizados da marca:
- *Espaço reservado para ícones customizados*

### `/fonts/`
Fontes tipográficas da marca:
- *Espaço reservado para fontes oficiais*

## 🎨 Identidade Visual

### Cor Primária Oficial
- **Azul Elleven:** `#1A2D54`
- **Hover/Escuro:** `#152444`

### Uso Recomendado
- Use sempre o logo principal (`logo-primary.png`) como primeira opção
- Mantenha sempre a proporção original dos logos
- Respeite o espaço mínimo ao redor do logo
- Use a cor oficial `#1A2D54` para manter consistência

## 📝 Como Usar

### No código:
```tsx
// Logo principal
<img src="/brand/elleven/logos/logo-primary.png" alt="Elleven Engenharia" />

// Grafismos como overlay
<div 
  style={{ backgroundImage: 'url(/brand/elleven/graphics/pattern-1.png)' }}
  className="opacity-10"
/>

// Cor oficial
<div className="text-white" style={{ backgroundColor: "#1A2D54" }}>
  Texto com cor da marca
</div>
```

## 🔄 Atualizações

Sempre que novos assets da marca forem criados:
1. Adicione na pasta correspondente
2. Use nomes descritivos e consistentes
3. Atualize este README
4. Mantenha a qualidade original dos arquivos

---

**Última atualização:** $(date)
**Responsável:** Equipe de Desenvolvimento 