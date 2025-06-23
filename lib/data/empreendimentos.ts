import { Empreendimento, OpcoesFilter } from "@/lib/types/empreendimento"

// =============================================================================
// DADOS DOS EMPREENDIMENTOS
// =============================================================================

/**
 * Array principal com todos os empreendimentos
 * Atualmente vazio - adicione novos empreendimentos aqui
 */
export const empreendimentos: Empreendimento[] = [
  {
    // Identificação
    id: 1,
    nome: "Jade",
    slug: "jade",
    subtitulo: "BREVE LANÇAMENTO",
    slogan: "Onde Sofisticação e Exclusividade Se Encontram.",
  
    // Localização
    localizacao: "Bela Vista, São Paulo - SP",
    bairro: "Bela Vista",
    endereco: {
      rua: "Rua Maestro Cardim",
      numero: "1028",
      bairro: "Bela Vista",
      cidade: "São Paulo",
      estado: "SP",
      cep: "01323-001"
    },
    coordenadas: {
      lat: -23.5558,
      lng: -46.6396
    },
    pontos_interesse: [
      { nome: "Hospital Beneficência Portuguesa", distancia: "190m", tipo: "saude" },
      { nome: "Shopping Pátio Paulista", distancia: "280m", tipo: "shopping" },
      { nome: "Estação Brigadeiro (Linha Verde)", distancia: "650m", tipo: "transporte" },
      { nome: "Avenida Paulista", distancia: "700m", tipo: "comercio" },
      { nome: "Estação Vergueiro (Linha Azul)", distancia: "1km", tipo: "transporte" },
      { nome: "Estação Paraíso (Linhas Azul/Verde)", distancia: "1.2km", tipo: "transporte" }
    ],
    
    // Características básicas
    tipo: "Studio",
    status: "Breve lançamento",
    area: "25 a 40m²",
    quartos: 0,
    banheiros: 1,
    vagas: 0,
    
    // Preço e entrega
    preco: 390000,
    precoFormatado: "A partir de R$ 390.000",
    entrega: "2025",
    
    // Conteúdo
    descricao: "No coração da Bela Vista (SP), em São Paulo, é um endereço privilegiado que combina sofisticação, tradição e conveniência. Este bairro, conhecido por sua rica vida cultural e excelente infraestrutura, oferece ótima proximidade com importantes pontos da cidade, como a Avenida Paulista, o Parque Trianon e os centros comerciais e gastronômicos de renomadas regiões como Vila Madalena e Itaim Bibi.",
    destaque: "LOCALIZAÇÃO PRIVILEGIADA",
    diferenciais: [
      "Localização privilegiada próxima à Av. Paulista (800m)",
      "Rooftop com piscina e vista panorâmica da cidade",
      "Design sofisticado com acabamentos premium",
      "Studios de alto padrão com aproveitamento inteligente",
      "Infraestrutura completa de lazer e comodidades",
      "Sistema de segurança completo e acesso inteligente",
      "Próximo a hospitais, metrô e shopping centers",
      "Investimento valorizado em bairro nobre de São Paulo"
    ],
    
    // Mídia
    imagem: "/empreendimentos/jade/fachada-jade.webp",
    imagemDestaque: "/empreendimentos/jade/fachada-jade.webp",
    galeria: [
      "/empreendimentos/jade/fachada-jade.webp",
      "/empreendimentos/jade/background-jade.webp",
      "/empreendimentos/jade/logo-jade.png"
    ],
    
    // Identidade visual
    identidadeVisual: {
      logo: "/empreendimentos/jade/logo-jade.png",
      corPrimaria: "#c09b65", // Tom dourado suave
      corSecundaria: "#1F2937", // Cinza escuro sofisticado
      imagemBackground: "/empreendimentos/jade/background-jade.webp"
    },
    
    // Dados técnicos
    plantas: [
      {
        id: 1,
        tipo: "Studio 26m²",
        area: "26m²",
        quartos: 0,
        banheiros: 1,
        vagas: 0,
        imagem: "/empreendimentos/jade/plantas/studio-26m2.jpg",
        preco: "A partir de R$ 390.000",
        descricao: "Studio de alto padrão com ampla sala de estar e jantar, cozinha integrada, varanda e banheiro completo.",
        destaque: true
      }
    ],
    especificacoes: {
      unidades: "48 unidades",
      andares: "12 andares",
      elevadores: "2 elevadores",
      entrega: "2025"
    },
    
    // Metadados
    destacado: true,
    ativo: true,
    tags: ["Studio", "Alto padrão", "Rooftop", "Piscina", "Bela Vista", "Próximo Paulista"],
    categoria: ["Residencial", "Lançamento", "Premium", "Centro"]
  },

  {
    // Identificação
    id: 2,
    nome: "Obsidian",
    slug: "obsidian",
    subtitulo: "BREVE LANÇAMENTO",
    slogan: "Viva a Exclusividade.",
  
    // Localização
    localizacao: "Pinheiros, São Paulo - SP",
    bairro: "Pinheiros",
    endereco: {
      rua: "Rua Oscar Freire",
      numero: "40",
      bairro: "Pinheiros",
      cidade: "São Paulo",
      estado: "SP",
      cep: "05404-020"
    },
    coordenadas: {
      lat: -23.5625,
      lng: -46.6969
    },
    pontos_interesse: [
      { nome: "Rua Oscar Freire", distancia: "40m", tipo: "comercio" },
      { nome: "Estação de Metrô Oscar Freire", distancia: "100m", tipo: "transporte" },
      { nome: "Hospital das Clínicas", distancia: "900m", tipo: "saude" },
      { nome: "Rua dos Pinheiros", distancia: "800m", tipo: "comercio" },
      { nome: "Instituto Tomie Ohtake", distancia: "700m", tipo: "comercio" }
    ],
    
    // Características básicas
    tipo: "1 dormitório",
    status: "Breve lançamento",
    area: "26 a 32m²",
    quartos: 1,
    banheiros: 1,
    vagas: 1,
    
    // Preço e entrega
    preco: 699000,
    precoFormatado: "A partir de R$ 699.000",
    entrega: "2025",
    
    // Conteúdo
    descricao: "Localizado em Pinheiros-SP. Uma das regiões mais nobres e valorizadas da cidade, o OBSIDIAN de alto padrão é o empreendimento perfeito para quem busca um estilo de vida sofisticado, design, moderno e prático. Com projeto arquitetônico inovador, o imóvel foi desenvolvido para oferecer a máxima excelência em qualidade, conforto e funcionalidade. Com fácil acesso a centros comerciais e opções de lazer. É a opção ideal para quem busca conforto, sofisticação e praticidade.",
    destaque: "LOCALIZAÇÃO PREMIUM",
    diferenciais: [
      "Localização Premium a 40m da Oscar Freire",
      "Apartamentos de Alto Padrão com design contemporâneo",
      "Sistema de segurança avançado com portaria 24h",
      "Controle de acesso biométrico e fechaduras inteligentes", 
      "Sistema de monitoramento digital completo",
      "Wi-Fi nas áreas comuns",
      "Alta demanda para locação de curta temporada",
      "Materiais e acabamentos premium em todos os ambientes",
      "Design inteligente com aproveitamento máximo do espaço",
      "Iluminação natural com amplas janelas",
      "Investimento com valorização constante",
      "41 unidades exclusivas em região nobre"
    ],
    
    // Mídia
    imagem: "/empreendimentos/obsidian/fachada-obsidian.png",
    imagemDestaque: "/empreendimentos/obsidian/fachada-obsidian.png",
    galeria: [
      "/empreendimentos/obsidian/fachada-obsidian.png",
      "/empreendimentos/obsidian/background-obsidian.png",
      "/empreendimentos/obsidian/logo-obsidian.png"
    ],
    
    // Identidade visual
    identidadeVisual: {
      logo: "/empreendimentos/obsidian/logo-obsidian.png",
      corPrimaria: "#D8AF88", // Tom bronze sofisticado
      corSecundaria: "#2D2D2D", // Cinza escuro obsidiana
      imagemBackground: "/empreendimentos/obsidian/background-obsidian.png"
    },
    
    // Dados técnicos
    plantas: [
      {
        id: 1,
        tipo: "Studio de Luxo",
        area: "26 a 32m²",
        quartos: 1,
        banheiros: 1,
        vagas: 1,
        imagem: "/empreendimentos/obsidian/plantas/studio-26m2.jpg",
        preco: "A partir de R$ 699.000",
        descricao: "Apartamento compacto com aproveitamento inteligente de espaço, ampla sala de estar e jantar, cozinha integrada, varanda e banheiro completo.",
        destaque: true
      }
    ],
    especificacoes: {
      unidades: "41 unidades",
      andares: "A definir",
      elevadores: "A definir",
      entrega: "2025"
    },
    
    // Metadados
    destacado: true,
    ativo: true,
    tags: ["Studio", "Alto padrão", "Rooftop", "Tecnologia", "Pinheiros", "Oscar Freire"],
    categoria: ["Residencial", "Lançamento", "Premium", "Pinheiros"]
  },

  {
    // Identificação
    id: 3,
    nome: "Botanique",
    slug: "botanique",
    subtitulo: ":aqui vai subtítulo/status",
    slogan: ":aqui vai slogan principal",
  
    // Localização
    localizacao: ":aqui vai localização completa",
    bairro: ":aqui vai bairro",
    endereco: {
      rua: ":aqui vai rua",
      numero: ":aqui vai número",
      bairro: ":aqui vai bairro",
      cidade: "São Paulo",
      estado: "SP",
      cep: ":aqui vai CEP"
    },
    coordenadas: {
      lat: -23.5558, // placeholder
      lng: -46.6396  // placeholder
    },
    pontos_interesse: [
      { nome: ":aqui vai ponto de interesse 1", distancia: ":aqui vai distância", tipo: "transporte" },
      { nome: ":aqui vai ponto de interesse 2", distancia: ":aqui vai distância", tipo: "comercio" },
      { nome: ":aqui vai ponto de interesse 3", distancia: ":aqui vai distância", tipo: "saude" },
      { nome: ":aqui vai ponto de interesse 4", distancia: ":aqui vai distância", tipo: "educacao" }
    ],
    
    // Características básicas
    tipo: "2 dormitórios", // :aqui vai tipo principal
    status: "Lançamento", // :aqui vai status
    area: ":aqui vai área",
    quartos: 0, // placeholder
    banheiros: 0, // placeholder
    vagas: 0, // placeholder
    
    // Preço e entrega
    preco: 500000, // placeholder
    precoFormatado: ":aqui vai preço formatado",
    entrega: ":aqui vai data entrega",
    
    // Conteúdo
    descricao: ":aqui vai descrição completa do empreendimento",
    destaque: ":aqui vai destaque principal",
    diferenciais: [
      ":aqui vai diferencial 1",
      ":aqui vai diferencial 2",
      ":aqui vai diferencial 3",
      ":aqui vai diferencial 4",
      ":aqui vai diferencial 5",
      ":aqui vai diferencial 6"
    ],
    
    // Mídia
    imagem: "/empreendimentos/botanique/BOTANIQUE_1_FACHADA.jpg",
    imagemDestaque: "/empreendimentos/botanique/1 - VITRINE_BOTANIQUE.jpg",
    galeria: [
      "/empreendimentos/botanique/BOTANIQUE_1_FACHADA.jpg",
      "/empreendimentos/botanique/BOTANIQUE_2_VISTA AÉREA FACHADA .jpg", 
      "/empreendimentos/botanique/galeria/BOTANIQUE_3_SALÃO DE FESTAS.jpg",
      "/empreendimentos/botanique/galeria/BOTANIQUE_4_ESPAÇO GRILL.jpg",
      "/empreendimentos/botanique/galeria/BOTANIQUE_5_PLAYGROUND.jpg",
      "/empreendimentos/botanique/galeria/BOTANIQUE_6_VISTA AÉREA.jpg", 
      "/empreendimentos/botanique/galeria/BOTANIQUE_8_PISCINA.jpg"
    ],
    
    // Identidade visual
    identidadeVisual: {
      logo: ":aqui vai logo se houver",
      corPrimaria: ":aqui vai cor primária hex",
      corSecundaria: ":aqui vai cor secundária hex",
      imagemBackground: "/empreendimentos/botanique/1 - VITRINE_BOTANIQUE.jpg"
    },
    
    // Dados técnicos
    plantas: [
      {
        id: 1,
        tipo: ":aqui vai nome da tipologia 1",
        area: ":aqui vai área",
        quartos: 0, // placeholder
        banheiros: 0, // placeholder  
        vagas: 0, // placeholder
        imagem: "/empreendimentos/botanique/plantas/Planta 2 dormi.jpg",
        preco: ":aqui vai preço",
        descricao: ":aqui vai descrição da planta",
        destaque: true
      }
    ],
    especificacoes: {
      unidades: ":aqui vai número de unidades",
      andares: ":aqui vai número de andares",
      elevadores: ":aqui vai número de elevadores",
      entrega: ":aqui vai data de entrega"
    },
    
    // Metadados
    destacado: false,
    ativo: true,
    tags: [":aqui vai tag 1", ":aqui vai tag 2", ":aqui vai tag 3", ":aqui vai tag 4"],
    categoria: ["Residencial", ":aqui vai categoria 2", ":aqui vai categoria 3"]
  },

  {
    // Identificação
    id: 4,
    nome: "Icaraí Parque Clube",
    slug: "icarai-parque-clube",
    subtitulo: "EM CONSTRUÇÃO",
    slogan: "Onde Natureza e Qualidade de Vida se Encontram.",
  
    // Localização
    localizacao: "Salto, São Paulo - SP",
    bairro: "Jardim D'Icaraí",
    endereco: {
      rua: "Avenida Brasília",
      numero: "739",
      bairro: "Jardim D'Icaraí",
      cidade: "Salto",
      estado: "SP",
      cep: "13320-000"
    },
    coordenadas: {
      lat: -23.2064,
      lng: -47.2896
    },
    pontos_interesse: [
      { nome: "Centro de Salto", distancia: "2km", tipo: "comercio" },
      { nome: "Rodovia Castello Branco", distancia: "5km", tipo: "transporte" },
      { nome: "Shopping Itu Plaza", distancia: "15km", tipo: "shopping" },
      { nome: "Hospital Municipal de Salto", distancia: "3km", tipo: "saude" },
      { nome: "Estação Ferroviária de Salto", distancia: "4km", tipo: "transporte" }
    ],
    
    // Características básicas
    tipo: "3 dormitórios",
    status: "Lançamento",
    area: "55.000m²",
    quartos: 3,
    banheiros: 2,
    vagas: 1,
    
    // Preço e entrega
    preco: 480000,
    precoFormatado: "A partir de R$ 480.000",
    entrega: "Novembro 2026",
    
    // Conteúdo
    descricao: "Um lugar onde o equilíbrio entre qualidade de vida e o encanto da natureza cria o cenário perfeito para o seu novo lar. Com 55 mil metros quadrados, o Icaraí Parque Clube oferece uma experiência completa de moradia com infraestrutura de clube e a tranquilidade de um parque. Suas torres modernas com fachada contemporânea abrigam apartamentos funcionais e bem planejados, enquanto as áreas comuns proporcionam lazer e bem-estar para toda a família.",
    destaque: "INFRAESTRUTURA DE CLUBE",
    diferenciais: [
      "55.000m² de área total com muito verde",
      "408 unidades distribuídas em 4 torres modernas",
      "Piscina com raias para natação e área de lazer",
      "Pool bar com mesas e cadeiras para convivência",
      "Quadra de beach tennis profissional",
      "Quadra de tênis oficial",
      "Quadra poliesportiva completa",
      "Bicicletário moderno com suportes verticais",
      "Playground colorido com equipamentos modernos",
      "Praça de convivência com fogueira central",
      "Segurança 24 horas com portaria elegante",
      "Ampla área verde com paisagismo tropical"
    ],
    
    // Mídia
    imagem: "/empreendimentos/_SITE ELLEVEN/ICARAÍ/1 - VITRINE_ICARAÍ.jpg",
    imagemDestaque: "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_TORRES DO ICARAI - FACHADA.jpg",
    galeria: [
      "/empreendimentos/_SITE ELLEVEN/ICARAÍ/1 - VITRINE_ICARAÍ.jpg",
      "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_TORRES DO ICARAI - FACHADA.jpg",
      "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_ÁREA DA PISCINA.jpg",
      "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_BEACH TENIS.jpg",
      "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_QUADRA DE TENNIS.jpg",
      "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_ESPAÇO GOURMET.jpg",
      "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_PLAYGROUND.jpg",
      "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_PORTARIA.jpg",
      "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_PISCINA.jpg",
      "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_ACADEMIA.jpg"
    ],
    
    // Identidade visual
    identidadeVisual: {
      logo: "",
      corPrimaria: "#16A085", // Verde água
      corSecundaria: "#0E6B5C", // Verde escuro
      imagemBackground: "/empreendimentos/_SITE ELLEVEN/ICARAÍ/1 - VITRINE_ICARAÍ.jpg"
    },
    
    // Dados técnicos
    plantas: [
      {
        id: 1,
        tipo: "Apartamento 2 dormitórios",
        area: "58m²",
        quartos: 2,
        banheiros: 2,
        vagas: 1,
        imagem: "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_Z 38-icarai-planta-tipo-b-r03-alta-66m-270ef9e269db6fd88396e0ba56f02f2b0c970d4f.jpg",
        preco: "A partir de R$ 480.000",
        descricao: "Apartamento com 2 dormitórios, sala ampla, cozinha integrada, área de serviço e varanda.",
        destaque: false
      },
      {
        id: 2,
        tipo: "Apartamento 3 dormitórios",
        area: "68m²",
        quartos: 3,
        banheiros: 2,
        vagas: 1,
        imagem: "/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_Z 38-icarai-planta-tipo-a-r02-alta-75m-b612e3e6b3d5a2124b835d983f60e0771f4a3b4e.jpg",
        preco: "A partir de R$ 580.000",
        descricao: "Apartamento com 3 dormitórios, sendo 1 suíte, sala ampla, cozinha gourmet e varanda.",
        destaque: true
      }
    ],
    especificacoes: {
      unidades: "408 unidades",
      andares: "4 torres",
      elevadores: "8 elevadores",
      entrega: "Novembro 2026"
    },
    
    // Metadados
    destacado: true,
    ativo: true,
    tags: ["Parque", "Clube", "Beach Tennis", "Salto", "SP", "Área Verde"],
    categoria: ["Residencial", "Em Construção", "Clube", "Natureza"]
  },

  {
    // Identificação
    id: 5,
    nome: "Botanique",
    slug: "botanique",
    subtitulo: "CONCLUÍDO",
    slogan: "Vida em Harmonia com a Natureza.",
  
    // Localização
    localizacao: "Cotia, São Paulo - SP",
    bairro: "Cotia",
    endereco: {
      rua: "Estr. Ribeirão",
      numero: "550",
      bairro: "Chácara Roselândia",
      cidade: "Cotia",
      estado: "SP",
      cep: "06709-015"
    },
    coordenadas: {
      lat: -23.6064,
      lng: -46.9196
    },
    pontos_interesse: [
      { nome: "Shopping Granja Vianna", distancia: "3km", tipo: "shopping" },
      { nome: "Rodoanel Mário Covas", distancia: "5km", tipo: "transporte" },
      { nome: "Centro de Cotia", distancia: "8km", tipo: "comercio" },
      { nome: "Universidade São Judas", distancia: "10km", tipo: "educacao" },
      { nome: "Hospital Regional de Cotia", distancia: "12km", tipo: "saude" }
    ],
    
    // Características básicas
    tipo: "2 dormitórios",
    status: "Pronto",
    area: "50 a 85m²",
    quartos: 2,
    banheiros: 2,
    vagas: 1,
    
    // Preço e entrega
    preco: 450000,
    precoFormatado: "A partir de R$ 450.000",
    entrega: "2013",
    
    // Conteúdo
    descricao: "Um condomínio clube cuidadosamente projetado pensando na qualidade de vida de sua família. Localizado em Cotia, o Botanique possui uma extensa área verde preservada de 4.500m², que propicia um agradável contato com a natureza.",
    destaque: "ÁREA VERDE PRESERVADA",
    diferenciais: [
      "Área verde preservada de 4.500m²",
      "Piscina com deck e cascata",
      "Playground completo para crianças",
      "Churrasqueiras com área gourmet",
      "Salão de festas com espaço para TV",
      "Segurança 24 horas",
      "Paisagismo elaborado",
      "Localização privilegiada em Cotia"
    ],
    
    // Mídia
    imagem: "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/1 - VITRINE_BOTANIQUE.jpg",
    imagemDestaque: "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_1_FACHADA.jpg",
    galeria: [
      "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/1 - VITRINE_BOTANIQUE.jpg",
      "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_1_FACHADA.jpg",
      "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_8_PISCINA.jpg",
      "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_5_PLAYGROUND.jpg",
      "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_4_ESPAÇO GRILL.jpg",
      "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_3_SALÃO DE FESTAS.jpg"
    ],
    
    // Identidade visual
    identidadeVisual: {
      logo: "/empreendimentos/_SITE ELLEVEN/Logotipo Empreendimentos/LOGO_BOTANIQUE.png",
      corPrimaria: "#2E7D32", // Verde natureza
      corSecundaria: "#1B5E20", // Verde escuro
      imagemBackground: "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/1 - VITRINE_BOTANIQUE.jpg"
    },
    
    // Dados técnicos
    plantas: [
      {
        id: 1,
        tipo: "Apartamento 2 dormitórios",
        area: "50m²",
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        imagem: "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/Planta 2 dormi.jpg",
        preco: "A partir de R$ 450.000",
        descricao: "Apartamento com 2 dormitórios, sala, cozinha e área de serviço.",
        destaque: false
      },
      {
        id: 2,
        tipo: "Apartamento 3 dormitórios",
        area: "85m²",
        quartos: 3,
        banheiros: 2,
        vagas: 1,
        imagem: "/empreendimentos/_SITE ELLEVEN/BOTANIQUE/Planta 3 dormi.jpg",
        preco: "A partir de R$ 620.000",
        descricao: "Apartamento com 3 dormitórios, sendo 1 suíte, sala ampla e cozinha.",
        destaque: true
      }
    ],
    especificacoes: {
      unidades: "150 unidades",
      andares: "15 andares",
      elevadores: "5 elevadores",
      entrega: "2013"
    },
    
    // Metadados
    destacado: false,
    ativo: true,
    tags: ["Área verde", "Natureza", "Família", "Cotia"],
    categoria: ["Residencial", "Concluído", "Clube"]
  },

  {
    // Identificação
    id: 6,
    nome: "Grand Club Cotia",
    slug: "grand-club-cotia",
    subtitulo: "CONCLUÍDO",
    slogan: "Estilo de Vida Único.",
  
    // Localização
    localizacao: "Cotia, São Paulo - SP",
    bairro: "Cotia",
    endereco: {
      rua: "R. Geraldo Otaviano de Almeida",
      numero: "1025",
      bairro: "Bairro Nakamura Park",
      cidade: "Cotia",
      estado: "SP",
      cep: "06717-140"
    },
    coordenadas: {
      lat: -23.6204,
      lng: -46.9108
    },
    pontos_interesse: [
      { nome: "Rodoanel Mário Covas", distancia: "2km", tipo: "transporte" },
      { nome: "Shopping Granja Vianna", distancia: "4km", tipo: "shopping" },
      { nome: "Centro de Cotia", distancia: "6km", tipo: "comercio" },
      { nome: "Hospital Regional de Cotia", distancia: "8km", tipo: "saude" }
    ],
    
    // Características básicas
    tipo: "1 dormitório",
    status: "Pronto",
    area: "35 a 65m²",
    quartos: 1,
    banheiros: 1,
    vagas: 1,
    
    // Preço e entrega
    preco: 320000,
    precoFormatado: "A partir de R$ 320.000",
    entrega: "2019",
    
    // Conteúdo
    descricao: "O GRAND CLUB COTIA foi projetado para proporcionar um estilo de vida único, onde a flexibilidade e o conforto são prioridades. Suas plantas inteligentes foram pensadas para otimizar a distribuição e funcionalidade dos espaços.",
    destaque: "PLANTAS INTELIGENTES",
    diferenciais: [
      "Piscina com deck e área de descanso",
      "Salão de festas com decoração contemporânea",
      "Espaço fitness ao ar livre integrado à natureza",
      "Churrasqueiras com área gourmet",
      "Playground completo para crianças",
      "Mini campo de golfe",
      "Praças de convivência entre os edifícios",
      "Paisagismo com espécies nativas",
      "Segurança 24 horas com controle de acesso"
    ],
    
    // Mídia
    imagem: "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/1 - VITRINE_GRANDCLUB.jpg",
    imagemDestaque: "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_FACHADA.jpg",
    galeria: [
      "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/1 - VITRINE_GRANDCLUB.jpg",
      "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_PISCINA.jpg",
      "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_GOLFE.jpg",
      "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_FITNESS.jpg",
      "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_PLAYGROUND.jpg"
    ],
    
    // Identidade visual
    identidadeVisual: {
      logo: "/empreendimentos/_SITE ELLEVEN/Logotipo Empreendimentos/LOGO_GRAND CLUB COTIA.png",
      corPrimaria: "#7B1FA2", // Roxo elegante
      corSecundaria: "#4A148C", // Roxo escuro
      imagemBackground: "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/1 - VITRINE_GRANDCLUB.jpg"
    },
    
    // Dados técnicos
    plantas: [
      {
        id: 1,
        tipo: "Apartamento 1 dormitório",
        area: "35m²",
        quartos: 1,
        banheiros: 1,
        vagas: 1,
        imagem: "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/planta-1dorm_tipo2.jpg",
        preco: "A partir de R$ 320.000",
        descricao: "Apartamento compacto com 1 dormitório, sala e cozinha integradas.",
        destaque: false
      },
      {
        id: 2,
        tipo: "Apartamento 2 dormitórios",
        area: "65m²",
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        imagem: "/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/planta-2dorms_tipo1.jpg",
        preco: "A partir de R$ 450.000",
        descricao: "Apartamento com 2 dormitórios, sala ampla e cozinha.",
        destaque: true
      }
    ],
    especificacoes: {
      unidades: "198 unidades",
      andares: "16 andares",
      elevadores: "8 elevadores",
      entrega: "2019"
    },
    
    // Metadados
    destacado: false,
    ativo: true,
    tags: ["Mini golfe", "Fitness", "Cotia", "Clube"],
    categoria: ["Residencial", "Concluído", "Clube"]
  },

  {
    // Identificação
    id: 7,
    nome: "Le Mont",
    slug: "le-mont",
    subtitulo: "CONCLUÍDO",
    slogan: "Qualidade de Vida na Montanha.",
  
    // Localização
    localizacao: "Cotia, São Paulo - SP",
    bairro: "Cotia",
    endereco: {
      rua: "Estrada Morro Grande",
      numero: "3400",
      bairro: "Jardim Ísis",
      cidade: "Cotia",
      estado: "SP",
      cep: "06709-240"
    },
    coordenadas: {
      lat: -23.5892,
      lng: -46.9345
    },
    pontos_interesse: [
      { nome: "Centro de Cotia", distancia: "5km", tipo: "comercio" },
      { nome: "Shopping Granja Vianna", distancia: "8km", tipo: "shopping" },
      { nome: "Rodoanel Mário Covas", distancia: "10km", tipo: "transporte" }
    ],
    
    // Características básicas
    tipo: "1 dormitório",
    status: "Pronto",
    area: "40 a 70m²",
    quartos: 1,
    banheiros: 1,
    vagas: 1,
    
    // Preço e entrega
    preco: 380000,
    precoFormatado: "A partir de R$ 380.000",
    entrega: "2016",
    
    // Conteúdo
    descricao: "O Condomínio Le Mont foi cuidadosamente projetado para proporcionar qualidade de vida à sua família, com segurança 24 horas, contando com uma extensa área verde preservada e uma variedade de opções de lazer.",
    destaque: "UNIDADES GARDEN",
    diferenciais: [
      "Unidades garden com acesso exclusivo ao jardim",
      "Piscina adulto e infantil",
      "Quadra poliesportiva",
      "Salão de festas com espaço gourmet",
      "Playground completo",
      "Churrasqueiras",
      "Segurança 24 horas",
      "Paisagismo elaborado"
    ],
    
    // Mídia
    imagem: "/empreendimentos/_SITE ELLEVEN/LE MONT/1 - VITRINE_LE MONT 1.jpg",
    imagemDestaque: "/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_FACHADAS.jpg",
    galeria: [
      "/empreendimentos/_SITE ELLEVEN/LE MONT/1 - VITRINE_LE MONT 1.jpg",
      "/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_PISCINA.jpg",
      "/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_PLAYGROUND.jpg",
      "/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_SALÃO DE FESTAS.jpg"
    ],
    
    // Identidade visual
    identidadeVisual: {
      logo: "/empreendimentos/_SITE ELLEVEN/Logotipo Empreendimentos/LOGO_LE MONT 1.png",
      corPrimaria: "#FF6F00", // Laranja montanha
      corSecundaria: "#E65100", // Laranja escuro
      imagemBackground: "/empreendimentos/_SITE ELLEVEN/LE MONT/1 - VITRINE_LE MONT 1.jpg"
    },
    
    // Dados técnicos
    plantas: [
      {
        id: 1,
        tipo: "Apartamento 1 dormitório",
        area: "40m²",
        quartos: 1,
        banheiros: 1,
        vagas: 1,
        imagem: "/empreendimentos/_SITE ELLEVEN/LE MONT/Vinocur_Lemont_Ap Meio_F3_HR.jpg",
        preco: "A partir de R$ 380.000",
        descricao: "Apartamento com 1 dormitório, sala e cozinha.",
        destaque: false
      },
      {
        id: 2,
        tipo: "Apartamento 2 dormitórios",
        area: "70m²",
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        imagem: "/empreendimentos/_SITE ELLEVEN/LE MONT/Vinocur_Lemont_Ap Ponta_F1_HR.jpg",
        preco: "A partir de R$ 520.000",
        descricao: "Apartamento com 2 dormitórios, sala ampla e cozinha.",
        destaque: true
      }
    ],
    especificacoes: {
      unidades: "150 unidades",
      andares: "12 andares",
      elevadores: "5 elevadores",
      entrega: "2016"
    },
    
    // Metadados
    destacado: false,
    ativo: true,
    tags: ["Garden", "Área verde", "Cotia", "Montanha"],
    categoria: ["Residencial", "Concluído"]
  },

  {
    // Identificação
    id: 8,
    nome: "Le Mont 2",
    slug: "le-mont-2",
    subtitulo: "CONCLUÍDO",
    slogan: "Atenção aos Detalhes.",
  
    // Localização
    localizacao: "Cotia, São Paulo - SP",
    bairro: "Cotia",
    endereco: {
      rua: "Estrada Morro Grande",
      numero: "3502",
      bairro: "Jardim Ísis",
      cidade: "Cotia",
      estado: "SP",
      cep: "06709-240"
    },
    coordenadas: {
      lat: -23.5901,
      lng: -46.9352
    },
    pontos_interesse: [
      { nome: "Centro de Cotia", distancia: "5km", tipo: "comercio" },
      { nome: "Shopping Granja Vianna", distancia: "8km", tipo: "shopping" },
      { nome: "Rodoanel Mário Covas", distancia: "10km", tipo: "transporte" }
    ],
    
    // Características básicas
    tipo: "2 dormitórios",
    status: "Pronto",
    area: "50 a 90m²",
    quartos: 2,
    banheiros: 2,
    vagas: 1,
    
    // Preço e entrega
    preco: 420000,
    precoFormatado: "A partir de R$ 420.000",
    entrega: "2017",
    
    // Conteúdo
    descricao: "O Condomínio Le Mont 2 foi planejado com atenção aos detalhes, focado na qualidade de vida de sua família. Com uma vasta área verde preservada e um ambiente que propicia o contato constante com a natureza.",
    destaque: "CONTATO COM A NATUREZA",
    diferenciais: [
      "Apartamentos de 1, 2 e 3 dormitórios",
      "Piscina adulto e infantil",
      "Salão de festas com espaço gourmet",
      "Churrasqueiras",
      "Playground",
      "Fitness",
      "Segurança 24 horas",
      "Paisagismo elaborado",
      "Próximo a comércios e serviços"
    ],
    
    // Mídia
    imagem: "/empreendimentos/_SITE ELLEVEN/LE MONT 2/1 - VITRINE_LE MONT 2.jpg",
    imagemDestaque: "/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_FACHADA.jpg",
    galeria: [
      "/empreendimentos/_SITE ELLEVEN/LE MONT 2/1 - VITRINE_LE MONT 2.jpg",
      "/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_PISCINA.jpg",
      "/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_PLAYGROUND.jpg",
      "/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_SALÃO DE FESTAS.jpg"
    ],
    
    // Identidade visual
    identidadeVisual: {
      logo: "/empreendimentos/_SITE ELLEVEN/Logotipo Empreendimentos/LOGO_LE MONT 2.png",
      corPrimaria: "#00796B", // Verde teal
      corSecundaria: "#004D40", // Verde teal escuro
      imagemBackground: "/empreendimentos/_SITE ELLEVEN/LE MONT 2/1 - VITRINE_LE MONT 2.jpg"
    },
    
    // Dados técnicos
    plantas: [
      {
        id: 1,
        tipo: "Apartamento 2 dormitórios",
        area: "50m²",
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        imagem: "/empreendimentos/_SITE ELLEVEN/LE MONT 2/VINO_2 dorm.jpg",
        preco: "A partir de R$ 420.000",
        descricao: "Apartamento com 2 dormitórios, sala e cozinha.",
        destaque: false
      },
      {
        id: 2,
        tipo: "Apartamento 3 dormitórios",
        area: "90m²",
        quartos: 3,
        banheiros: 2,
        vagas: 1,
        imagem: "/empreendimentos/_SITE ELLEVEN/LE MONT 2/VINO_3 dorm.jpg",
        preco: "A partir de R$ 580.000",
        descricao: "Apartamento com 3 dormitórios, sendo 1 suíte, sala ampla e cozinha.",
        destaque: true
      }
    ],
    especificacoes: {
      unidades: "120 unidades",
      andares: "10 andares",
      elevadores: "4 elevadores",
      entrega: "2017"
    },
    
    // Metadados
    destacado: false,
    ativo: true,
    tags: ["Área verde", "Fitness", "Cotia", "Natureza"],
    categoria: ["Residencial", "Concluído"]
  }
]

// =============================================================================
// CONFIGURAÇÕES DE FILTROS
// =============================================================================

/**
 * Opções disponíveis para os filtros de busca
 * Customize conforme necessário
 */
export const opcoesFiltros: OpcoesFilter = {
  tipos: ["Studio", "1 dormitório", "2 dormitórios", "3 dormitórios", "Cobertura"],
  status: ["Breve lançamento", "Lançamento", "Em Obras", "Pronto"],
  bairros: ["Bela Vista", "Pinheiros", "Vila Olímpia", "Jardins", "Morumbi", "Vila Madalena", "Icaraí", "Cotia"],
  faixas: [
    { label: "Até R$ 300.000", min: 0, max: 300000 },
    { label: "R$ 300.000 - R$ 500.000", min: 300000, max: 500000 },
    { label: "R$ 500.000 - R$ 800.000", min: 500000, max: 800000 },
    { label: "R$ 800.000 - R$ 1.200.000", min: 800000, max: 1200000 },
    { label: "R$ 1.200.000 - R$ 2.000.000", min: 1200000, max: 2000000 },
    { label: "Acima de R$ 2.000.000", min: 2000000, max: Infinity }
  ]
}

// =============================================================================
// FUNÇÕES HELPER
// =============================================================================

/**
 * Busca um empreendimento pelo slug
 */
export function buscarEmpreendimentoPorSlug(slug: string): Empreendimento | undefined {
  return empreendimentos.find(emp => emp.slug === slug)
}

/**
 * Retorna apenas empreendimentos ativos
 */
export function buscarEmpreendimentosAtivos(): Empreendimento[] {
  return empreendimentos.filter(emp => emp.ativo)
}

/**
 * Retorna empreendimentos marcados como destaque
 */
export function buscarEmpreendimentosDestaque(): Empreendimento[] {
  return empreendimentos.filter(emp => emp.ativo && emp.destacado)
}

/**
 * Gera um slug URL-friendly a partir do nome
 */
export function gerarSlug(nome: string): string {
  return nome
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Remove hífens duplicados
    .trim()
} 