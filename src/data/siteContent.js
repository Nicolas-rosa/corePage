export const siteContent = {
  identity: { name: 'Perfil', monogram: 'P', description: 'Um modelo digital claro, humano e preparado para crescer.' },
  navigation: [
    { label: 'Início', href: '/' }, { label: 'Sobre', href: '/sobre' },
    { label: 'Itens', href: '/itens' }, { label: 'Conteúdo', href: '/conteudo' },
    { label: 'Dúvidas', href: '/faq' },
  ],
  labels: {
    menu: 'Abrir menu', close: 'Fechar menu', readMore: 'Saiba mais', back: 'Voltar',
    contact: 'Entre em contato', allContent: 'Ver todos os conteúdos', send: 'Enviar mensagem',
    required: 'Campos com * são obrigatórios.', privacy: 'Política de privacidade',
    form: { name: 'Nome', email: 'E-mail', phone: 'Telefone', message: 'Mensagem' },
  },
  hero: {
    eyebrow: 'Apresentação', title: 'Clareza para dar o próximo passo.',
    description: 'Uma presença digital construída para apresentar seu trabalho de maneira simples, acolhedora e consistente.',
    primaryAction: { label: 'Conheça o perfil', href: '/sobre' },
    secondaryAction: { label: 'Ver itens', href: '/itens' },
    image: { src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85', alt: 'Ambiente de trabalho iluminado e organizado' },
  },
  about: {
    eyebrow: 'Sobre', title: 'Um espaço que respeita o seu ritmo.',
    description: 'Este bloco é pensado para apresentar uma trajetória, uma proposta e os diferenciais que ajudam cada pessoa a entender como a sua atuação pode contribuir.',
    action: { label: 'Saiba mais sobre o perfil', href: '/sobre' },
    image: { src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=85', alt: 'Pessoa trabalhando em uma mesa clara' },
    highlights: [
      { title: 'Escuta atenta', description: 'Cada conversa começa pelo que é importante para você.' },
      { title: 'Caminho possível', description: 'Informações organizadas para facilitar decisões.' },
    ],
  },
  items: [
    { icon: '01', title: 'Item principal', description: 'Uma descrição breve e objetiva sobre esta possibilidade.' },
    { icon: '02', title: 'Item complementar', description: 'Explique como este item pode apoiar diferentes necessidades.' },
    { icon: '03', title: 'Item personalizado', description: 'Apresente um formato que possa ser adaptado ao contexto.' },
  ],
  milestones: [
    { year: '01', title: 'Ponto de partida', description: 'Uma base clara para organizar o que vem a seguir.' },
    { year: '02', title: 'Construção conjunta', description: 'Etapas alinhadas com atenção e transparência.' },
    { year: '03', title: 'Continuidade', description: 'Um processo que acompanha novas necessidades.' },
  ],
  testimonials: [
    { initials: 'AC', name: 'Cliente', text: '“Encontrei uma comunicação cuidadosa e objetiva em todos os momentos.”', rating: '5' },
    { initials: 'MR', name: 'Cliente', text: '“O processo foi leve, claro e muito bem organizado.”', rating: '5' },
  ],
  content: [
    { slug: 'como-organizar-proximo-passo', category: 'Orientações', title: 'Como organizar o próximo passo com mais clareza', excerpt: 'Uma leitura breve sobre pequenos pontos que ajudam a começar.', date: '12 jun 2026', readTime: '4 min de leitura', image: { src: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85', alt: 'Caderno aberto sobre uma mesa' } },
    { slug: 'conversa-que-comeca-bem', category: 'Reflexões', title: 'O valor de uma conversa que começa bem', excerpt: 'Presença, contexto e perguntas que dão direção ao encontro.', date: '28 mai 2026', readTime: '3 min de leitura', image: { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85', alt: 'Pessoa escrevendo em um caderno' } },
    { slug: 'escolhas-com-respeito-ao-ritmo', category: 'Orientações', title: 'Escolhas com respeito ao próprio ritmo', excerpt: 'Uma perspectiva prática para tornar decisões mais conscientes.', date: '08 mai 2026', readTime: '5 min de leitura', image: { src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=85', alt: 'Mesa de trabalho perto de uma janela' } },
  ],
  faq: [
    { question: 'Como funciona o primeiro contato?', answer: 'Você pode enviar uma mensagem pelo formulário. A resposta traz as informações iniciais e os próximos passos de forma clara.' },
    { question: 'É possível adaptar o formato?', answer: 'Sim. Cada necessidade pode ser conversada para encontrar um formato compatível com o seu contexto.' },
    { question: 'Em quanto tempo recebo uma resposta?', answer: 'O prazo de retorno pode ser definido e exibido aqui conforme a operação de cada projeto.' },
  ],
  contact: { eyebrow: 'Contato', title: 'Vamos conversar?', description: 'Envie uma mensagem para receber informações iniciais.', channels: [{ label: 'Canal de contato', value: '[informação a definir]' }, { label: 'Disponibilidade', value: '[informação a definir]' }] },
  cta: { title: 'Um bom começo pode ser simples.', description: 'Escolha um canal e dê o primeiro passo no seu tempo.', action: { label: 'Fale comigo', href: '/contato' } },
  pages: {
    home: { items: { eyebrow: 'Possibilidades', title: 'Itens que se adaptam ao seu contexto.', description: 'Escolha os itens que fazem sentido para sua apresentação.' }, highlights: { eyebrow: 'Destaques', title: 'Um percurso construído com intenção.' }, testimonials: { eyebrow: 'Depoimentos', title: 'Experiências compartilhadas.' }, content: { eyebrow: 'Conteúdo', title: 'Leituras recentes.' } },
    about: { hero: { eyebrow: 'Sobre', title: 'Uma apresentação que cria proximidade.', description: 'Use este espaço para ampliar a trajetória, o modo de trabalhar e o que orienta cada escolha.' }, highlights: { eyebrow: 'Trajetória', title: 'Pontos que ajudam a conhecer o perfil.' } },
    items: { hero: { eyebrow: 'Itens', title: 'Possibilidades para diferentes momentos.', description: 'Apresente aqui o que é oferecido e como cada opção pode funcionar.' }, offered: { eyebrow: 'O que é oferecido', title: 'Escolhas explicadas com clareza.' }, audience: { eyebrow: 'Para quem', title: 'Encontre um ponto de partida.', description: 'Uma forma genérica de orientar pessoas para os itens mais adequados.', prefix: 'Para' }, faq: { eyebrow: 'FAQ', title: 'Perguntas frequentes.' } },
    content: { hero: { eyebrow: 'Conteúdo', title: 'Ideias para acompanhar seu caminho.', description: 'Textos breves e úteis, organizados para uma leitura tranquila.' }, count: 'itens disponíveis', filter: 'Filtrar por categoria', all: 'Todos', categories: ['Orientações', 'Reflexões'] },
    faq: { hero: { eyebrow: 'Dúvidas', title: 'Informações para seguir com segurança.', description: 'Respostas diretas para perguntas frequentes.' }, section: { eyebrow: 'FAQ', title: 'Perguntas frequentes.' } },
    contact: { confirmation: 'Mensagem recebida. [texto de confirmação a definir]' },
    post: { body: ['Este é um espaço de conteúdo rico, pronto para receber a redação definitiva do projeto.', 'Use parágrafos curtos, linguagem acessível e informações que ajudem quem lê a compreender o assunto com autonomia.', 'O conteúdo pode ser alimentado por um CMS ou por arquivos locais, sem alterar o componente de apresentação.'], heading: 'Um ponto para começar' },
  },
  legal: { title: 'Política de privacidade', body: ['Este é um espaço reservado para as informações de privacidade, cookies e tratamento de dados aplicáveis ao projeto.', 'Substitua este texto por uma política revisada de acordo com a operação final.'] },
};
