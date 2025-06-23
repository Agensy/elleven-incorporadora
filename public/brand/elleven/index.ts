/**
 * ELLEVEN ENGENHARIA - BRAND ASSETS
 * 
 * Arquivo de índice para facilitar a importação dos assets da marca
 */

// =============================================================================
// LOGOS
// =============================================================================

export const ELLEVEN_LOGOS = {
  primary: '/brand/elleven/logos/logo-primary.png',
  secondary: '/brand/elleven/logos/logo-secondary.png',
  alternative: '/brand/elleven/logos/logo-alternative.png',
} as const

// =============================================================================
// GRAPHICS & PATTERNS
// =============================================================================

export const ELLEVEN_GRAPHICS = {
  pattern1: '/brand/elleven/graphics/pattern-1.png',
  pattern2: '/brand/elleven/graphics/pattern-2.png',
} as const

// =============================================================================
// COLORS
// =============================================================================

export const ELLEVEN_COLORS = {
  // Cores Primárias
  primary: '#1A2D54',
  primaryHover: '#152444',
  primaryLight: 'rgba(26, 45, 84, 0.1)',
  primaryDark: '#0F1A30',
  
  // Cores Neutras
  gray: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
  
  // Cores de Apoio
  success: '#059669',
  warning: '#D97706',
  error: '#DC2626',
  info: '#0284C7',
  
  // Gradientes
  gradients: {
    primary: 'linear-gradient(135deg, #1A2D54 0%, #152444 100%)',
    light: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
  }
} as const

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Retorna o caminho do logo baseado no tipo
 */
export const getEllevenLogo = (type: keyof typeof ELLEVEN_LOGOS = 'primary') => {
  return ELLEVEN_LOGOS[type]
}

/**
 * Retorna um estilo CSS com a cor primária da Elleven
 */
export const getEllevenPrimaryStyle = (hover = false) => ({
  backgroundColor: hover ? ELLEVEN_COLORS.primaryHover : ELLEVEN_COLORS.primary,
  color: 'white',
})

/**
 * Retorna o gradiente primário da Elleven
 */
export const getEllevenGradient = () => ELLEVEN_COLORS.gradients.primary

// =============================================================================
// TIPOS (para TypeScript)
// =============================================================================

export type EllevenLogoType = keyof typeof ELLEVEN_LOGOS
export type EllevenGraphicType = keyof typeof ELLEVEN_GRAPHICS
export type EllevenColorType = keyof typeof ELLEVEN_COLORS

// =============================================================================
// EXEMPLOS DE USO
// =============================================================================

/*
// React/TypeScript
import { ELLEVEN_LOGOS, ELLEVEN_COLORS, getEllevenLogo } from '@/public/brand/elleven'

// Logo
<img src={getEllevenLogo('primary')} alt="Elleven Engenharia" />

// Cor de fundo
<div style={{ backgroundColor: ELLEVEN_COLORS.primary }}>
  Conteúdo
</div>

// Gradiente
<div style={{ background: ELLEVEN_COLORS.gradients.primary }}>
  Header com gradiente
</div>

// Padrão gráfico como overlay
<div 
  style={{ 
    backgroundImage: `url(${ELLEVEN_GRAPHICS.pattern1})`,
    opacity: 0.1 
  }}
/>
*/ 