export type RouteKey = 'home' | 'projetos' | 'servicos' | 'estudio'

export interface ProjectCase {
  id: string
  slug: string
  name: string
  services: string
  resultHighlight?: string
  category: 'Branding' | 'Ecossistema Digital' | 'Estratégia' | 'Conteúdo'
  year: string
  image: string
  tagline: string
  clientContext: string
  investigation: string
  basicDoneWell: string
  ecosystemDelivered: string[]
  impactMetrics: { value: string; label: string }[]
  quote: { text: string; author: string; role: string }
}

export interface ServicePillar {
  index: string
  name: string
  summary: string
  philosophyNote: string
  capabilities: string[]
  featuredCaseSlug: string
  image: string
}

export interface BrandValue {
  index: string
  title: string
  text: string
}

export const BRAND = {
  name: 'avanza',
  descriptor: 'soluções de mercado',
  signature: './AV\n©2024—\n2026',
  taglineLines: ['Ecossistema de', 'Marketing—Natural', 'para Crescer'],
  city: 'São Paulo',
  timezone: 'America/Sao_Paulo',
  bookingLabel: 'Agendar conversa',
  bookingAvailability: '2 vagas para este mês',
  pitchdeckTitle: 'Manifesto & Deck',
  pitchdeckSubtitle: 'Solicitar apresentação',
  socials: [
    {
      label: 'Instagram',
      short: 'Ig',
      href: 'https://www.instagram.com/avanza.brasil',
    },
    { label: 'LinkedIn', short: 'In', href: 'https://linkedin.com' },
    { label: 'Behance', short: 'Be', href: 'https://behance.net' },
  ],
  copyright:
    '© Copyright 2024 — 2026 avanza — soluções de mercado. Todos os direitos reservados.\nEcossistema de marketing natural construído sobre fundamentos sólidos.',
}

export const HOME_CONTENT = {
  statement: {
    eyebrow: 'Ecossistema',
    lead: 'A revolução criativa começa com o básico bem feito — quando a marca escuta antes de falar e cresce de forma natural.',
    paragraphs: [
      'Na avanza, construímos ecossistemas de marketing natural para empresas se desenvolverem com solidez. Antes de desenhar uma campanha ou um sistema visual, investigamos o que move de verdade quem está do outro lado — porque marcas memoráveis não empurram vendas; despertam o desejo genuíno de escolher.',
      'Acreditamos menos em artifícios barulhentos e mais na excelência dos fundamentos: escuta ativa, clareza estratégica, estética elegante e consistência diária. É o domínio meticuloso dos detalhes essenciais que transforma potencial latente em crescimento real e duradouro.',
    ],
  },
  closing: {
    eyebrow: 'Contato',
    text: 'Atenção é fácil de comprar e difícil de merecer. Unimos investigação, estética e verdade humana para transformar interesse em confiança e resultado real.',
    ctaLabel: 'Como podemos ajudar',
    ctaRoute: 'servicos' as RouteKey,
    word: 'AV.',
    image: '/images/closing-editorial.jpg',
  },
}

export const PROJECTS: ProjectCase[] = [
  {
    id: '01',
    slug: 'loja-z8',
    name: 'Loja Z8',
    services: 'Tráfego Pago, Conteúdo & Ecossistema Digital',
    resultHighlight: '+160% em 3 meses · ROI 7× em tráfego pago',
    category: 'Ecossistema Digital',
    year: '2026',
    image: '/images/case-z8.jpg',
    tagline:
      'Mobilidade elétrica com posicionamento autoral, aquisição previsível e retorno real sobre mídia.',
    clientContext:
      'Referência em mobilidade elétrica com linha de motos e bicicletas elétricas, a Loja Z8 precisava transformar o interesse crescente do público em demanda qualificada e constante — unindo presença digital à altura dos veículos com campanhas de tráfego pago orientadas a vendas reais.',
    investigation:
      'Mapeamos a jornada de quem pesquisa mobilidade elétrica antes de visitar a loja: o comprador não busca apenas ficha técnica, mas confiança visual, demonstração real no uso urbano e facilidade para tirar dúvidas e agendar o test-drive sem atrito.',
    basicDoneWell:
      'Estruturamos um ecossistema integrado de aquisição e percepção de valor: gestão cirúrgica de tráfego pago no Google e Meta Ads, fotografia editorial dos modelos, produção de Reels cinematográficos, gestão estratégica de Instagram e página de conversão focada em vendas.',
    ecosystemDelivered: [
      'Gestão estratégica de tráfego pago (Google & Meta Ads)',
      'Fotografia editorial de veículos e produção de Reels',
      'Gestão de posicionamento e conteúdo no Instagram',
      'Landing page de vendas e agendamento de test-drive',
    ],
    impactMetrics: [
      { value: '+160%', label: 'crescimento relatado nos últimos 3 meses' },
      { value: '7×', label: 'ROI no investimento de tráfego pago' },
      { value: '90 dias', label: 'de tração contínua em aquisição e vendas' },
    ],
    quote: {
      text: 'Nos últimos 3 meses registramos 160% de crescimento e um ROI de 7× sobre o investimento em tráfego pago. A avanza alinhou posicionamento, conteúdo e mídia com foco total em resultado real.',
      author: 'Loja Z8',
      role: 'Cliente avanza · Mobilidade Elétrica',
    },
  },
  {
    id: '02',
    slug: 'lumina-arquitetura',
    name: 'Lúmina Arquitetura',
    services: 'Posicionamento, Ecossistema Digital',
    category: 'Ecossistema Digital',
    year: '2025',
    image: '/images/case-lumina.jpg',
    tagline: 'Quando a clareza espacial encontra a conversa consultiva.',
    clientContext:
      'Um escritório de arquitetura autoral com obras premiadas, mas cuja presença digital falava apenas de prêmios internos — deixando futuros clientes sem entender como um projeto se traduzia em qualidade de vida e valorização patrimonial.',
    investigation:
      'Ao ouvir 18 clientes e incorporadores antes de redesenhar uma única linha, descobrimos a implicação oculta: o silêncio técnico gerava insegurança sobre prazo e orçamento, travando reuniões qualificadas mesmo diante de um portfólio impecável.',
    basicDoneWell:
      'Substituímos o monólogo institucional por um ecossistema de diálogo claro: arquitetura de informação guiada pelas dúvidas reais de quem constrói, narrativa visual serena e jornada de diagnóstico inicial sem atrito.',
    ecosystemDelivered: [
      'Diagnóstico de percepção & entrevista com clientes',
      'Plataforma web editorial de alta performance',
      'Narrativa orientada a valor real (Benefício Tipo B)',
      'Fluxo consultivo de qualificação & CRM',
    ],
    impactMetrics: [
      { value: '+148%', label: 'reuniões consultivas qualificadas' },
      { value: '3,4×', label: 'tempo médio de leitura dos projetos' },
      { value: '-41%', label: 'ciclo até assinatura de proposta' },
    ],
    quote: {
      text: 'Pela primeira vez nosso site conversa com o cliente do jeito que conversamos na mesa de projeto: com calma, precisão e respeito.',
      author: 'Henrique Valadares',
      role: 'Sócio-diretor, Lúmina Arquitetura',
    },
  },
  {
    id: '03',
    slug: 'kora-movimento',
    name: 'Kora Movimento',
    services: 'Branding, Identidade & Comunidade',
    category: 'Branding',
    year: '2026',
    image: '/images/case-kora.jpg',
    tagline: 'Identidade de precisão construída para pessoas que vivem o esporte com propósito.',
    clientContext:
      'Uma marca contemporânea de vestuário técnico e clubes de bem-estar precisava nascer fora do clichê agressivo do mercado fitness, criando pertencimento autêntico desde o primeiro toque físico até o ambiente digital.',
    investigation:
      'Mapeamos o comportamento da comunidade praticante: ninguém desejava mais promessas gritantes de performance extrema, e sim rituais consistentes, conforto honesto e uma estética que transitasse da quadra à cidade.',
    basicDoneWell:
      'Desenhamos um sistema visual geométrico e atemporal, ancorado em uma linguagem acolhedora que celebra pequenas evoluções diárias — tornando cada peça e cada encontro um convite orgânico à comunidade.',
    ecosystemDelivered: [
      'Estratégia de marca & arquitetura verbal',
      'Sistema de identidade visual & direção de arte',
      'Design de coleções cápsula & sinalização',
      'Motor de comunidade & lançamentos orgânicos',
    ],
    impactMetrics: [
      { value: '68%', label: 'aquisição via indicação natural' },
      { value: '4,8×', label: 'recompra nos primeiros 6 meses' },
      { value: '12 mil', label: 'membros ativos em rituais mensais' },
    ],
    quote: {
      text: 'A avanza provou que não precisávamos gritar para sermos notados. O básico bem pensado nos deu uma identidade impossível de ignorar.',
      author: 'Camila Salles',
      role: 'Fundadora, Kora Movimento',
    },
  },
  {
    id: '04',
    slug: 'visao-precisa-tecnica',
    name: 'Visão Precisa & Técnica',
    services: 'Direção de Arte, Fotografia & Audiovisual',
    category: 'Conteúdo',
    year: '2025',
    image: '/images/case-visao.jpg',
    tagline:
      'A verdade visual contada com rigor óptico, luz estratégica e zero ruído.',
    clientContext:
      'Empresas tecnicamente impecáveis no mundo físico frequentemente perdem autoridade no digital por dependerem de imagens genéricas — desalinhadas do nível real de entrega que oferecem aos seus clientes.',
    investigation:
      'Ao diagnosticar pontos de contato de marcas em expansão, identificamos a implicação direta: antes mesmo de ler a primeira linha da proposta, o mercado julga a competência pela precisão da imagem. Quando a estética falha, o preço vira a única conversa.',
    basicDoneWell:
      'Unimos direção de arte estrita, domínio de luz chiaroscuro e captação cinematográfica de campo para traduzir inteligência de negócio em presença visual inquestionável — sem excessos, sem personagens artificiais.',
    ecosystemDelivered: [
      'Direção de arte & consultoria de imagem de marca',
      'Ensaios editoriais e fotografia comercial em chiaroscuro',
      'Filmes institucionais e narrativas audiovisuais',
      'Padrão visual replicável para site, deck e social',
    ],
    impactMetrics: [
      { value: '+190%', label: 'elevação na percepção de valor da marca' },
      { value: '3,6×', label: 'retenção visual em páginas de apresentação' },
      { value: '100%', label: 'coerência entre imagem digital e entrega real' },
    ],
    quote: {
      text: 'O verdadeiro profissionalismo não grita. Quando a imagem atinge o mesmo nível técnico do produto, a autoridade se estabelece em segundos.',
      author: 'William Del Barrio',
      role: 'Fundador · Direção de Arte & Imagem, avanza',
    },
  },
  {
    id: '05',
    slug: 'norte-capital',
    name: 'Norte Capital',
    services: 'Estratégia Digital, Plataforma Web & CRM',
    category: 'Estratégia',
    year: '2026',
    image: '/images/case-norte.jpg',
    tagline: 'Confiança patrimonial construída com transparência, investigação e rigor visual.',
    clientContext:
      'Uma gestora independente de patrimônio atendendo empresários precisava modernizar sua presença sem cair no espetáculo financeiro das redes sociais, alinhando marketing e atendimento consultivo em uma única engrenagem.',
    investigation:
      'Conduzimos entrevistas em profundidade com sócios e investidores. A dor não era falta de produtos financeiros, mas o cansaço diante de promessas fáceis e a necessidade de um parceiro que escutasse o momento de vida antes de sugerir alocação.',
    basicDoneWell:
      'Criamos uma plataforma sóbria de precisão suíça, cartas trimestrais de leitura prazerosa e uma integração de CRM que prepara o consultor com o contexto real de cada família antes da primeira ligação.',
    ecosystemDelivered: [
      'Estratégia digital B2B & arquitetura de confiança',
      'Website institucional & portal de cartas',
      'Integração de CRM & inteligência de jornada',
      'Sistema editorial para sócios e porta-vozes',
    ],
    impactMetrics: [
      { value: '+84%', label: 'originação orgânica de novas contas' },
      { value: '2,7×', label: 'taxa de conversão da primeira conversa' },
      { value: '100%', label: 'alinhamento entre marketing e mesa' },
    ],
    quote: {
      text: 'Eles entenderam o que poucas agências compreendem: em negócios de alto valor, vender menos é o que gera mais confiança.',
      author: 'Eduardo Monteiro',
      role: 'Managing Partner, Norte Capital',
    },
  },
  {
    id: '06',
    slug: 'versatilidade-adaptabilidade',
    name: 'Versatilidade & Adaptabilidade',
    services: 'Estúdio Integrado, Ecossistema & Execução',
    category: 'Ecossistema Digital',
    year: '2026',
    image: '/images/case-versatilidade.jpg',
    tagline:
      'Um estúdio moldável que se adapta ao ritmo, ao setor e à maturidade de cada empresa.',
    clientContext:
      'Negócios em fases diferentes não cabem em pacotes engessados de agência. Uma indústria B2B, uma marca autoral ou uma operação de serviços exigem estruturas vivas que evoluem conforme o mercado responde.',
    investigation:
      'Ao acompanhar empresas que sofriam com soluções padronizadas, mapeamos o custo oculto da rigidez: tempo perdido em aprovações lentas e desconexão entre estúdio, estratégia comercial e campo.',
    basicDoneWell:
      'Estruturamos a avanza como um estúdio ágil e multidisciplinar: ajustamos luz, linguagem, canais e cadência ao momento real de cada parceiro — mantendo sempre o mesmo rigor nos fundamentos.',
    ecosystemDelivered: [
      'Arquitetura de estúdio flexível sob demanda',
      'Integração entre estratégia, imagem, web e aquisição',
      'Adaptação ágil para mercados B2B e B2C',
      'Evolução contínua orientada por escuta e dados',
    ],
    impactMetrics: [
      { value: '06', label: 'frentes integradas sob o mesmo comando' },
      { value: '2,8×', label: 'agilidade da concepção à entrada no ar' },
      { value: '94%', label: 'continuidade de parceiros ao longo do ano' },
    ],
    quote: {
      text: 'Não forçamos sua empresa a caber em um molde pronto. Desenhamos o estúdio e o ecossistema ao redor do que o seu negócio realmente precisa.',
      author: 'Higor Freitas',
      role: 'Diretor · Audiovisual & Execução, avanza',
    },
  },
]

export const SERVICES_CONTENT = {
  eyebrow: 'Serviços',
  heroLead:
    'Um ecossistema integrado para fazer sua marca ser notada — e transformar atenção em crescimento natural.',
  heroWord: 'SERVIÇOS.',
  pillars: [
    {
      index: '01',
      name: 'Diagnóstico & Estratégia',
      summary:
        'Começamos ouvindo. Investigamos o cenário real, as implicações invisíveis e o que seus clientes realmente valorizam antes de definir o que construir e em qual ordem.',
      philosophyNote: 'Investigação antes da prescrição.',
      capabilities: [
        'Auditoria de ecossistema & jornadas',
        'Entrevistas com clientes e liderança',
        'Arquitetura de posicionamento',
        'Plano de prioridades e metas reais',
        'Integração entre marketing e vendas',
        'Métricas de negócio & clareza de KPIs',
      ],
      featuredCaseSlug: 'norte-capital',
      image: '/images/case-norte.jpg',
    },
    {
      index: '02',
      name: 'Branding & Identidade',
      summary:
        'Identidades claras, contemporâneas e elegantes — desenhadas para sustentar coerência em cada ponto de contato, do logotipo à embalagem, sem depender de tendências passageiras.',
      philosophyNote: 'Estética a serviço da verdade.',
      capabilities: [
        'Estratégia e território de marca',
        'Identidade visual e sistemas gráficos',
        'Design de marca e tipografia',
        'Brand book e guias práticos de uso',
        'Branding digital e direção de arte',
        'Desdobramento editorial e físico',
      ],
      featuredCaseSlug: 'kora-movimento',
      image: '/images/case-kora.jpg',
    },
    {
      index: '03',
      name: 'Ecossistema Digital & Web',
      summary:
        'Sites, plataformas e lojas sólidas, velozes e pensadas ao redor de quem decide — fáceis de operar no dia a dia e construídas para evoluir junto com a empresa.',
      philosophyNote: 'Fundamentos técnicos impeccáveis.',
      capabilities: [
        'Websites institucionais e editoriais',
        'E-commerce orientado à clareza',
        'Landing pages de diagnóstico',
        'Design de interface (UI) & experiência (UX)',
        'Performance, SEO técnico e acessibilidade',
        'Evolução contínua e suporte dedicado',
      ],
      featuredCaseSlug: 'lumina-arquitetura',
      image: '/images/case-lumina.jpg',
    },
    {
      index: '04',
      name: 'Marketing Natural & Aquisição',
      summary:
        'Colocamos no mundo o que construímos com precisão: orgânico forte, campanhas medidas e presença no lugar certo, na hora certa — atraindo interesse genuíno em vez de interromper.',
      philosophyNote: 'Atração sustentável, zero ruído.',
      capabilities: [
        'Estratégia de marketing orgânico e SEO',
        'Mídia paga orientada a demanda real',
        'Distribuição em canais proprietários',
        'Arquitetura de conteúdo perene',
        'Testes controlados e otimização de funil',
        'Relatórios claros e decisões baseadas em fatos',
      ],
      featuredCaseSlug: 'loja-z8',
      image: '/images/case-z8.jpg',
    },
    {
      index: '05',
      name: 'Narrativa, Copy & Conteúdo',
      summary:
        'A mensagem certa, com voz humana e profundidade autoral, para que sua empresa deixe de falar apenas de si mesma e passe a ser compreendida, lembrada e recomendada.',
      philosophyNote: 'Dramatizar a verdade com elegância.',
      capabilities: [
        'Voz de marca e copywriting autoral',
        'Manifestos, apresentações e pitch decks',
        'Direção de fotografia e vídeo editorial',
        'Cartas, newsletters e conteúdo de autoridade',
        'Roteiros de vendas consultivas',
        'Comunicação institucional e lançamentos',
      ],
      featuredCaseSlug: 'visao-precisa-tecnica',
      image: '/images/case-visao.jpg',
    },
    {
      index: '06',
      name: 'Relacionamento & Conversão',
      summary:
        'Nosso papel não termina no clique. Estruturamos nutrição, CRM e jornadas consultivas para abrir relacionamentos duradouros e elevar o valor percebido em cada conversa.',
      philosophyNote: 'Abrir relações, não forçar fechamentos.',
      capabilities: [
        'Arquitetura de CRM e automação humana',
        'Réguas de onboarding e retenção',
        'Playbooks consultivos de qualificação',
        'Programas de comunidade e indicação',
        'Pós-compra e ampliação de LTV',
        'Acompanhamento de conversão ponta a ponta',
      ],
      featuredCaseSlug: 'norte-capital',
      image: '/images/case-norte.jpg',
    },
  ] as ServicePillar[],
  closing: {
    eyebrow: 'Contato',
    text: 'Um pilar específico ou o ecossistema completo? Conte o momento da sua empresa e desenhamos juntos o caminho mais inteligente.',
    ctaLabel: 'Iniciar uma conversa',
    word: 'AV.',
    image: '/images/closing-editorial.jpg',
  },
}

export const STUDIO_CONTENT = {
  eyebrow: 'Estúdio',
  heroLead:
    'Acreditamos em escuta genuína, elegância funcional e na disciplina silenciosa do básico extraordinariamente bem feito.',
  heroWord: 'ESTÚDIO',
  foundedYear: '2024',
  figures: [
    { value: '06', label: 'disciplinas integradas' },
    { value: '42', label: 'ecossistemas construídos' },
    { value: '94%', label: 'parceiros de longo prazo' },
  ],
  founders: [
    {
      name: 'William Del Barrio',
      role: 'Fundador · Direção de Arte, Imagem & Estratégia',
      handle: '@william.delbarrio',
      instagram: 'https://www.instagram.com/william.delbarrio/',
      website: 'https://williamdelbarrio.com/',
      photo: '/images/founder-william.jpg',
      bio: 'Fundador da avanza. Especialista em fotografia conceitual, direção de arte e posicionamento visual de marca. Guiado pela estética da competência e pela luz precisa do chiaroscuro, remove o ruído digital para colocar foco absoluto na essência de cada empresa.',
    },
    {
      name: 'Higor Freitas',
      role: 'Diretor · Audiovisual, Estratégia & Execução',
      handle: '@freitas.hgr',
      instagram: 'https://www.instagram.com/freitas.hgr',
      website: '',
      photo: '/images/founder-higor.jpg',
      bio: 'Diretor da avanza. Orientado por disciplina, ritmo e constância, une precisão de campo e narrativa audiovisual cinematográfica para transformar estratégia de marca em presença viva e resultado mensurável.',
    },
    {
      name: 'Clara Tuetto',
      role: 'Diretora · Estratégia & Direção Criativa',
      handle: '',
      instagram: '',
      website: '',
      photo: '/images/director-clara.jpg',
      bio: 'Diretora da avanza. Conduz a escuta estratégica, a direção criativa e a coerência entre identidade, narrativa e experiência — assegurando que cada marca se comunique com clareza, elegância e verdade.',
    },
    {
      name: 'Christian Hideyuki',
      role: 'Diretor · Ecossistema & Performance',
      handle: '',
      instagram: '',
      website: '',
      photo: '/images/director-christian.jpg',
      bio: 'Diretor da avanza. Atua na arquitetura operacional, gestão de performance e evolução dos ecossistemas digitais, conectando planejamento estratégico a crescimento previsível e mensurável.',
    },
  ],
  manifestoNote: {
    label: 'Nossa tese',
    text: 'Em um mercado hipnotizado por atalhos e fórmulas ruidosas, fazer o fundamental com profundidade, empatia e rigor estético tornou-se o ato mais revolucionário que uma marca pode escolher.',
  },
  values: [
    {
      index: '01',
      title: 'O básico bem feito revoluciona',
      text: 'Mais do que pirotecnia criativa, são os fundamentos impecáveis — clareza, coerência, velocidade e constância — que constroem marcas admiradas por décadas.',
    },
    {
      index: '02',
      title: 'Investigar antes de prescrever',
      text: 'Nunca chegamos com respostas prontas. Mapeamos o cenário, o problema central e as implicações reais para que cada real investido responda a uma necessidade explícita.',
    },
    {
      index: '03',
      title: 'Interesse genuíno gera influência',
      text: 'Pessoas não querem sentir que estão sendo convencidas; elas adoram escolher marcas que as compreendem. Falamos a partir do mundo do seu cliente, nunca do ego da agência.',
    },
    {
      index: '04',
      title: 'Valor real acima de artifícios',
      text: 'Dispensamos recursos vazios e jargões de palco. Cada entrega existe para resolver uma dor concreta, simplificar a decisão e gerar retorno mensurável.',
    },
    {
      index: '05',
      title: 'Consistência gera entelequia',
      text: 'Potencial só se transforma em realidade por meio de prática deliberada. Acompanhamos cada detalhe para que o marketing da sua empresa cresça como um organismo vivo e natural.',
    },
  ] as BrandValue[],
  closing: {
    eyebrow: 'Projetos',
    text: 'Atuar em mercados diversos expande nossa escuta e alimenta soluções originais — sempre ancoradas na simplicidade que funciona.',
    ctaLabel: 'Explorar casos',
    word: '©26',
    image: '/images/hero-editorial.jpg',
  },
}
