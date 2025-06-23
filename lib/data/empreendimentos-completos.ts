export interface EmpreendimentoCompleto {
  id: string;
  nome: string;
  status: 'Concluído' | 'Em Construção' | 'Parceria';
  tipo: 'Residencial' | 'Comercial';
  localizacao: {
    endereco: string;
    cidade: string;
    estado: string;
  };
  conclusao: string;
  arquiteto: string;
  area: string;
  descricao: string;
  destaques: string[];
  caracteristicas: string[];
  unidades?: number;
  torres?: number;
  dormitorios?: string;
  imagens: {
    vitrine: string;
    galeria: string[];
    plantas?: string[];
  };
  logo?: string;
}

export const empreendimentosCompletos: EmpreendimentoCompleto[] = [
  {
    id: 'botanique',
    nome: 'Botanique',
    status: 'Concluído',
    tipo: 'Residencial',
    localizacao: {
      endereco: 'Estr. Ribeirão, 550 - Chácara Roselândia',
      cidade: 'Cotia',
      estado: 'São Paulo'
    },
    conclusao: 'Concluído em Outubro 2013',
    arquiteto: 'Studio Gemini',
    area: '10.500m²',
    descricao: 'Um condomínio clube cuidadosamente projetado pensando na qualidade de vida de sua família. Localizado em Cotia, o Botanique possui uma extensa área verde preservada de 4.500m², que propicia um agradável contato com a natureza.',
    destaques: [
      '150 Unidades',
      '5 Torres',
      '2 e 3 Dormitórios',
      'Área verde de 4.500m²'
    ],
    caracteristicas: [
      'Condomínio com 5 torres e 150 unidades',
      'Apartamentos de 2 e 3 dormitórios',
      'Área verde preservada de 4.500m²',
      'Piscina com deck e cascata',
      'Playground completo para crianças',
      'Churrasqueiras com área gourmet',
      'Salão de festas com espaço para TV e jantar',
      'Segurança 24 horas',
      'Estacionamento com vagas demarcadas',
      'Paisagismo elaborado em toda a área comum',
      'Localização privilegiada em Cotia',
      'Fácil acesso às principais vias da região'
    ],
    unidades: 150,
    torres: 5,
    dormitorios: '2 e 3 Dormitórios',
    imagens: {
      vitrine: '/empreendimentos/_SITE ELLEVEN/BOTANIQUE/1 - VITRINE_BOTANIQUE.jpg',
      galeria: [
        '/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_1_FACHADA.jpg',
        '/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_2_VISTA AÉREA FACHADA .jpg',
        '/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_3_SALÃO DE FESTAS.jpg',
        '/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_4_ESPAÇO GRILL.jpg',
        '/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_5_PLAYGROUND.jpg',
        '/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_6_VISTA AÉREA.jpg',
        '/empreendimentos/_SITE ELLEVEN/BOTANIQUE/BOTANIQUE_8_PISCINA.jpg'
      ],
      plantas: [
        '/empreendimentos/_SITE ELLEVEN/BOTANIQUE/Planta 2 dormi.jpg',
        '/empreendimentos/_SITE ELLEVEN/BOTANIQUE/Planta 3 dormi.jpg',
        '/empreendimentos/_SITE ELLEVEN/BOTANIQUE/Planta 3 dormi 2.jpg',
        '/empreendimentos/_SITE ELLEVEN/BOTANIQUE/cobertura duplex 1 piso.jpg',
        '/empreendimentos/_SITE ELLEVEN/BOTANIQUE/cobertura duplex 1 piso 2.jpg',
        '/empreendimentos/_SITE ELLEVEN/BOTANIQUE/cobertura duplex 1 piso 3.jpg',
        '/empreendimentos/_SITE ELLEVEN/BOTANIQUE/cobertura duplex 2 piso.jpg',
        '/empreendimentos/_SITE ELLEVEN/BOTANIQUE/cobertura duplex 2 piso 2.jpg',
        '/empreendimentos/_SITE ELLEVEN/BOTANIQUE/cobertura duplex 2 piso 3.jpg'
      ]
    },
    logo: '/empreendimentos/_SITE ELLEVEN/Logotipo Empreendimentos/LOGO_BOTANIQUE.png'
  },
  {
    id: 'grand-club-cotia',
    nome: 'Grand Club Cotia',
    status: 'Concluído',
    tipo: 'Residencial',
    localizacao: {
      endereco: 'R. Geraldo Otaviano de Almeida, 1025, Bairro Nakamura Park',
      cidade: 'Cotia',
      estado: 'SP'
    },
    conclusao: 'Concluído em Maio 2019',
    arquiteto: 'Studio Gemini',
    area: '22.000m²',
    descricao: 'O GRAND CLUB COTIA foi projetado para proporcionar um estilo de vida único, onde a flexibilidade e o conforto são prioridades. Suas plantas inteligentes foram pensadas para otimizar a distribuição e funcionalidade dos espaços.',
    destaques: [
      '198 unidades',
      '8 Torres',
      '1 e 2 Dormitórios',
      'Lazer completo'
    ],
    caracteristicas: [
      'Condomínio com 8 torres e 198 unidades',
      'Apartamentos de 1 e 2 dormitórios',
      'Piscina com deck e área de descanso',
      'Salão de festas com decoração contemporânea',
      'Espaço fitness ao ar livre integrado à natureza',
      'Churrasqueiras com área gourmet',
      'Playground completo para crianças',
      'Mini campo de golfe',
      'Praças de convivência entre os edifícios',
      'Paisagismo com espécies nativas e frutíferas',
      'Segurança 24 horas com controle de acesso',
      'Localização privilegiada em Cotia com fácil acesso ao Rodoanel'
    ],
    unidades: 198,
    torres: 8,
    dormitorios: '1 e 2 Dormitórios',
    imagens: {
      vitrine: '/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/1 - VITRINE_GRANDCLUB.jpg',
      galeria: [
        '/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_FACHADA.jpg',
        '/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_PISCINA.jpg',
        '/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_PISCINA DECK.jpg',
        '/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLU_SALÃO DE FESTAS.jpg',
        '/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_CHURRASQUEIRA.jpg',
        '/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_PLAYGROUND.jpg',
        '/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_FITNESS.jpg',
        '/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_GOLFE.jpg',
        '/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_ÁREA DE CONVIVÊNCIA.jpg',
        '/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_BOSQUE.jpg',
        '/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/GRANDCLUB_QUADRA.jpg'
      ],
      plantas: [
        '/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/planta-1dorm_tipo2.jpg',
        '/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/planta-2dorms_tipo1.jpg',
        '/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/planta-2dorms_tipo2.jpg',
        '/empreendimentos/_SITE ELLEVEN/GRANDCLUB COTIA/planta-2dorms_giardino.jpg'
      ]
    },
    logo: '/empreendimentos/_SITE ELLEVEN/Logotipo Empreendimentos/LOGO_GRAND CLUB COTIA.png'
  },
  {
    id: 'icarai-parque-clube',
    nome: 'Icaraí Parque Clube',
    status: 'Em Construção',
    tipo: 'Residencial',
    localizacao: {
      endereco: 'Avenida Brasília, 739, Jardim D\'Icaraí',
      cidade: 'Salto',
      estado: 'São Paulo'
    },
    conclusao: 'Conclusão prevista: Novembro 2026',
    arquiteto: 'Studio Gemini',
    area: '55.000m²',
    descricao: 'Um lugar onde o equilíbrio entre qualidade de vida e o encanto da natureza cria o cenário perfeito para o seu novo lar. Com 55 mil metros quadrados, o Icaraí Parque Clube oferece uma experiência completa de moradia com infraestrutura de clube e a tranquilidade de um parque. Suas torres modernas com fachada contemporânea abrigam apartamentos funcionais e bem planejados, enquanto as áreas comuns proporcionam lazer e bem-estar para toda a família.',
    destaques: [
      '408 unidades',
      '4 Torres',
      '2 e 3 Dormitórios',
      'Lazer completo'
    ],
    caracteristicas: [
      'Condomínio com 4 torres e 408 unidades',
      'Apartamentos de 2 e 3 dormitórios',
      'Piscina com raias para natação e área de lazer',
      'Pool bar com mesas e cadeiras para convivência',
      'Quadra de beach tennis profissional',
      'Quadra de tênis oficial',
      'Quadra poliesportiva',
      'Bicicletário moderno com suportes verticais',
      'Playground colorido com equipamentos modernos',
      'Praça de convivência com fogueira central',
      'Segurança 24 horas com portaria elegante',
      'Ampla área verde com paisagismo tropical'
    ],
    unidades: 408,
    torres: 4,
    dormitorios: '2 e 3 Dormitórios',
    imagens: {
      vitrine: '/empreendimentos/_SITE ELLEVEN/ICARAÍ/1 - VITRINE_ICARAÍ.jpg',
      galeria: [
        '/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_TORRES DO ICARAI - FACHADA.jpg',
        '/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_ACADEMIA.jpg',
        '/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_ÁREA DA PISCINA.jpg',
        '/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_BAR PISCINA.jpg',
        '/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_BEACH TENIS.jpg',
        '/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_BICICLETARIO.jpg',
        '/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_BRINQUEDOTECA.jpg',
        '/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_CHURRASQUEIRA.jpg',
        '/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_ESPAÇO GOURMET.jpg',
        '/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_PISCINA.jpg',
        '/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_PLAYGROUND.jpg',
        '/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_PORTARIA.jpg',
        '/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_PRAÇA DE CONVIVÊNCIA.jpg',
        '/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_PRAÇA EXTERNA.jpg',
        '/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_QUADRA DE TENNIS.jpg',
        '/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_QUADRA POLIESPORTIVA.jpg',
        '/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_SALÃO DE FESTAS.jpg'
      ],
      plantas: [
        '/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_Z 38-icarai-planta-tipo-a-r02-alta-75m-b612e3e6b3d5a2124b835d983f60e0771f4a3b4e.jpg',
        '/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_Z 38-icarai-planta-tipo-b-r03-alta-66m-270ef9e269db6fd88396e0ba56f02f2b0c970d4f.jpg',
        '/empreendimentos/_SITE ELLEVEN/ICARAÍ/ICARAÍ_Z 42-icarai-planta-cobertura-f-baixa-02-sem-cotas-9d4610d224a86ec44533b8665e919bc65b7213d3.jpg'
      ]
    },
    logo: '/empreendimentos/_SITE ELLEVEN/Logotipo Empreendimentos/LOGO_ICARAI.png'
  },
  {
    id: 'le-mont',
    nome: 'Le Mont',
    status: 'Concluído',
    tipo: 'Residencial',
    localizacao: {
      endereco: 'Estrada Morro Grande, 3400, Jardim Ísis',
      cidade: 'Cotia',
      estado: 'São Paulo'
    },
    conclusao: 'Concluído em Outubro 2016',
    arquiteto: 'Studio Gemini',
    area: '18.000m²',
    descricao: 'O Condomínio Le Mont foi cuidadosamente projetado para proporcionar qualidade de vida à sua família, com segurança 24 horas, contando com uma extensa área verde preservada e uma variedade de opções de lazer.',
    destaques: [
      '150 unidades',
      '5 Torres',
      '1 e 2 Dormitórios',
      'Unidades Garden'
    ],
    caracteristicas: [
      'Condomínio com 5 torres e 150 unidades',
      'Apartamentos de 1 e 2 dormitórios',
      'Unidades garden com acesso exclusivo ao jardim',
      'Piscina adulto e infantil',
      'Quadra poliesportiva',
      'Salão de festas com espaço gourmet',
      'Playground completo',
      'Churrasqueiras',
      'Segurança 24 horas',
      'Paisagismo elaborado',
      'Localização privilegiada em Cotia',
      'Fácil acesso às principais vias da região'
    ],
    unidades: 150,
    torres: 5,
    dormitorios: '1 e 2 Dormitórios',
    imagens: {
      vitrine: '/empreendimentos/_SITE ELLEVEN/LE MONT/1 - VITRINE_LE MONT 1.jpg',
      galeria: [
        '/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_FACHADAS.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_PISCINA.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_SALÃO DE FESTAS.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_CHURRASQUEIRA.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_PLAYGROUND.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_QUADRA.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_PORTARIA.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT/LEMONT 1_TERRAÇO.jpg'
      ],
      plantas: [
        '/empreendimentos/_SITE ELLEVEN/LE MONT/Vinocur_Lemont_Ap Meio_F3_HR.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT/Vinocur_Lemont_Ap Meio_F6_HR.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT/Vinocur_Lemont_Ap Ponta_F1_HR.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT/Vinocur_Lemont_Ap Ponta_F2_HR.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT/Vinocur_Lemont_Dup Inf Meio F2_HR.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT/Vinocur_Lemont_Dup Inf Meio F3_HR.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT/Vinocur_Lemont_Dup Inf Meio F6_HR.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT/Vinocur_Lemont_Dup Inf Ponta F1_HR.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT/Vinocur_Lemont_Dup Sup Meio F3_HR.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT/Vinocur_Lemont_Dup Sup Meio F6_HR.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT/Vinocur_Lemont_Dup Sup Ponta F1_HR.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT/Vinocur_Lemont_Dup Sup Ponta F2_HR.jpg'
      ]
    },
    logo: '/empreendimentos/_SITE ELLEVEN/Logotipo Empreendimentos/LOGO_LE MONT 1.png'
  },
  {
    id: 'le-mont-2',
    nome: 'Le Mont 2',
    status: 'Concluído',
    tipo: 'Residencial',
    localizacao: {
      endereco: 'Estrada Morro Grande, 3502, Jardim Ísis',
      cidade: 'Cotia',
      estado: 'São Paulo'
    },
    conclusao: 'Concluído em Março 2017',
    arquiteto: 'Studio Gemini',
    area: '15.000m²',
    descricao: 'O Condomínio Le Mont 2 foi planejado com atenção aos detalhes, focado na qualidade de vida de sua família. Com uma vasta área verde preservada e um ambiente que propicia o contato constante com a natureza.',
    destaques: [
      '120 unidades',
      '4 Torres',
      '1, 2 e 3 Dormitórios',
      'Área de lazer completa'
    ],
    caracteristicas: [
      'Condomínio com 4 torres e 120 unidades',
      'Apartamentos de 1, 2 e 3 dormitórios',
      'Piscina adulto e infantil',
      'Salão de festas com espaço gourmet',
      'Churrasqueiras',
      'Playground',
      'Fitness',
      'Segurança 24 horas',
      'Paisagismo elaborado',
      'Localização privilegiada em Cotia',
      'Fácil acesso às principais vias da região',
      'Próximo a comércios e serviços'
    ],
    unidades: 120,
    torres: 4,
    dormitorios: '1, 2 e 3 Dormitórios',
    imagens: {
      vitrine: '/empreendimentos/_SITE ELLEVEN/LE MONT 2/1 - VITRINE_LE MONT 2.jpg',
      galeria: [
        '/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_FACHADA.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_PISCINA.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_SALÃO DE FESTAS.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_CHURRAQUEIRA.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_PLAYGROUND.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_QUADRA.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_PORTARIA.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT 2/LEMONT 2_IMPLANTACAO.jpg'
      ],
      plantas: [
        '/empreendimentos/_SITE ELLEVEN/LE MONT 2/VINO_2 dorm.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT 2/VINO_3 dorm.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT 2/VINO_dorm - inf.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT 2/VINO_dorm - sup.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT 2/VINOCUR_LE_MONT_COB_INF_FINAL_02_HR.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT 2/VINOCUR_LE_MONT_COB_INF_FINAL_06_HR.jpg',
        '/empreendimentos/_SITE ELLEVEN/LE MONT 2/VINOCUR_LE_MONT_COB_SUP_FINAL_02_HR.jpg'
      ]
    },
    logo: '/empreendimentos/_SITE ELLEVEN/Logotipo Empreendimentos/LOGO_LE MONT 2.png'
  }
];

// Função helper para buscar empreendimento por ID
export const getEmpreendimentoById = (id: string): EmpreendimentoCompleto | undefined => {
  return empreendimentosCompletos.find(emp => emp.id === id);
};

// Função helper para buscar empreendimentos por status
export const getEmpreendimentosByStatus = (status: EmpreendimentoCompleto['status']): EmpreendimentoCompleto[] => {
  return empreendimentosCompletos.filter(emp => emp.status === status);
};

// Função helper para buscar empreendimentos por tipo
export const getEmpreendimentosByTipo = (tipo: EmpreendimentoCompleto['tipo']): EmpreendimentoCompleto[] => {
  return empreendimentosCompletos.filter(emp => emp.tipo === tipo);
}; 