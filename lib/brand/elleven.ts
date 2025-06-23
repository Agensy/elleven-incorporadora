/**
 * ELLEVEN ENGENHARIA - BRAND HELPER
 * 
 * Helper functions para usar os assets da marca de forma consistente
 */

// =============================================================================
// CONSTANTS
// =============================================================================

export const ELLEVEN_BRAND = {
  name: 'Elleven Engenharia',
  slogan: 'Excelência do pequeno ao grande detalhe',
  description: 'Muito além do aço e concreto, construímos sonhos. Empreendimentos premium com inovação, qualidade e sustentabilidade.',
  
  logos: {
    primary: '/brand/elleven/logos/logo-primary.png',
    secondary: '/brand/elleven/logos/logo-secondary.png',
    alternative: '/brand/elleven/logos/logo-alternative.png',
  },
  
  colors: {
    primary: '#1A2D54',
    primaryHover: '#152444',
    primaryLight: 'rgba(26, 45, 84, 0.1)',
    white: '#FFFFFF',
    black: '#000000',
  },
  
  graphics: {
    pattern1: '/brand/elleven/graphics/pattern-1.png',
    pattern2: '/brand/elleven/graphics/pattern-2.png',
  }
} as const

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Retorna o logo apropriado baseado no contexto
 */
export function getEllevenLogo(
  context: 'header-light' | 'header-dark' | 'footer' | 'watermark' | 'primary' = 'primary'
) {
  switch (context) {
    case 'header-light':
      return ELLEVEN_BRAND.logos.secondary // Para fundos claros
    case 'header-dark':
      return ELLEVEN_BRAND.logos.primary // Para fundos escuros
    case 'footer':
      return ELLEVEN_BRAND.logos.primary
    case 'watermark':
      return ELLEVEN_BRAND.logos.alternative
    default:
      return ELLEVEN_BRAND.logos.primary
  }
}

/**
 * Retorna estilos CSS para elementos com tema Elleven
 */
export function getEllevenButtonStyle(variant: 'primary' | 'secondary' | 'outline' = 'primary') {
  const base = {
    transition: 'all 0.2s ease',
    fontWeight: '500',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
  }

  switch (variant) {
    case 'primary':
      return {
        ...base,
        backgroundColor: ELLEVEN_BRAND.colors.primary,
        color: ELLEVEN_BRAND.colors.white,
        border: 'none',
      }
    case 'secondary':
      return {
        ...base,
        backgroundColor: 'transparent',
        color: ELLEVEN_BRAND.colors.primary,
        border: `1px solid ${ELLEVEN_BRAND.colors.primary}`,
      }
    case 'outline':
      return {
        ...base,
        backgroundColor: 'transparent',
        color: ELLEVEN_BRAND.colors.white,
        border: `1px solid ${ELLEVEN_BRAND.colors.white}`,
      }
    default:
      return base
  }
}

/**
 * Configurações do componente Logo para usar em React
 */
export type EllevenLogoProps = {
  context?: Parameters<typeof getEllevenLogo>[0]
  className?: string
  alt?: string
  [key: string]: any
}

/**
 * Configurações do Watermark para usar em React
 */
export type EllevenWatermarkProps = {
  opacity?: number
  rotation?: number
  size?: 'small' | 'medium' | 'large'
  className?: string
}

/**
 * Retorna propriedades para usar em componente de watermark
 */
export function getWatermarkProps({
  opacity = 0.05,
  rotation = -12,
  size = 'large',
  className = '',
}: EllevenWatermarkProps = {}) {
  const sizes = {
    small: 'w-32 h-auto',
    medium: 'w-48 h-auto', 
    large: 'w-64 h-auto',
  }

  return {
    containerClassName: `absolute inset-0 flex items-center justify-center pointer-events-none ${className}`,
    imageProps: {
      src: getEllevenLogo('watermark'),
      alt: '',
      className: sizes[size],
      style: {
        opacity,
        transform: `rotate(${rotation}deg)`,
      }
    }
  }
}

// =============================================================================
// EXAMPLES OF USAGE
// =============================================================================

/*
// EXEMPLOS DE USO

import { getEllevenLogo, ELLEVEN_BRAND, getWatermarkProps } from '@/lib/brand/elleven'

// Logo diretamente
const logoSrc = getEllevenLogo('header-light')

// Watermark
const watermarkConfig = getWatermarkProps({ opacity: 0.03, rotation: 15, size: 'large' })

// React Component (arquivo .tsx):
// <img src={getEllevenLogo('footer')} alt="Elleven" className="h-8 w-auto" />

// Watermark em React (arquivo .tsx):
// <div className={watermarkConfig.containerClassName}>
//   <img {...watermarkConfig.imageProps} />
// </div>

// Cor da marca em CSS
// style={{ backgroundColor: ELLEVEN_BRAND.colors.primary }}
*/ 