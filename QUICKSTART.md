# 🚀 Guia de Início Rápido

## 1. Instalação e Execução

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Visitar em http://localhost:5173
```

## 2. Primeiros Passos

### Passo 1: Editar Identidade
Abra `src/data/siteContent.js` e altere:

```javascript
identity: { 
  name: 'Seu Nome ou Marca', 
  monogram: 'SN',  // 2 letras
  description: 'Sua descrição profissional breve' 
}
```

### Passo 2: Alterar Cores
Abra `src/tokens/tokens.css` e edite:

```css
:root {
  --color-accent: #seu-cor-aqui;     /* CTA, botões */
  --color-accent-hover: #mais-escuro;
  --color-bg: #fundo-claro;
  /* ... outros tokens */
}
```

### Passo 3: Popular Conteúdo
No `src/data/siteContent.js`, preencha:

```javascript
export const siteContent = {
  // ... identity, navigation, labels ...
  
  hero: {
    eyebrow: 'Subtítulo',
    title: 'Seu título principal',
    description: 'Descrição curta e impactante',
    image: { src: 'url-da-sua-imagem', alt: 'descrição' },
    primaryAction: { label: 'Botão primário', href: '/sobre' },
  },
  
  items: [
    { icon: '01', title: 'Oferta 1', description: 'Descrição' },
    { icon: '02', title: 'Oferta 2', description: 'Descrição' },
  ],
  
  // ... faq, testimonials, etc
};
```

### Passo 4: Substituir Imagens
Localize todas as URLs `https://images.unsplash.com/...` em `siteContent.js` e substitua pelas suas próprias imagens.

### Passo 5: Revisar Textos
Procure por `[texto a definir]` em `siteContent.js` e complete com informações reais.

## 3. Estrutura Essencial

```
src/
├── data/siteContent.js        👈 EDITE AQUI (conteúdo)
├── tokens/tokens.css          👈 EDITE AQUI (cores, fontes)
├── styles.css                 (CSS global - apenas se expandir)
└── components/                (não edite, reutilize)
```

## 4. Adicionar Nova Seção

Exemplo: Adicionar seção de "Metodologia" à Home.

1. Crie dados em `siteContent.js`:
```javascript
methodology: { 
  eyebrow: 'Abordagem', 
  title: 'Como funciona', 
  items: [
    { title: 'Etapa 1', description: '...' },
    { title: 'Etapa 2', description: '...' },
  ]
}
```

2. Importe componente em `src/pages.jsx`:
```javascript
import { ItemCards } from './components/ItemCards';
```

3. Adicione à HomePage:
```javascript
export function HomePage({ content }) {
  return <>
    <Hero {...content.hero} />
    <AboutBlock {...content.about} />
    {/* NOVA SEÇÃO */}
    <ItemCards 
      eyebrow={content.methodology.eyebrow}
      title={content.methodology.title}
      items={content.methodology.items}
      columns={2}
    />
    {/* ... resto */}
  </>;
}
```

## 5. Compilar e Deploy

```bash
# Build para produção
npm run build

# Os arquivos compilados estarão em dist/
# Faça upload de dist/* para seu servidor

# Ou deploy automático (Netlify, Vercel, etc)
# Conectar seu repositório Git via GitHub/GitLab
```

## 6. Componentes Disponíveis (Use-os!)

### Header
```jsx
<Header 
  identity={content.identity} 
  navigation={content.navigation} 
  labels={content.labels} 
/>
```

### Hero
```jsx
<Hero 
  eyebrow="Subtítulo"
  title="Título Principal"
  description="Descrição"
  image={{ src, alt }}
  primaryAction={{ label, href }}
  compact={true} // Versão mini para sub-páginas
/>
```

### ItemCards (Serviços, Metodologia, etc)
```jsx
<ItemCards 
  eyebrow="Seção"
  title="Título"
  description="Opcional"
  items={[{ icon, title, description }]}
  columns={3} // 2 ou 3 colunas
/>
```

### AboutBlock (Apresentação)
```jsx
<AboutBlock 
  eyebrow="Sobre"
  title="Título"
  description="Texto longo"
  image={{ src, alt }}
  highlights={[{ title, description }]}
  imagePosition="right" // ou "left"
/>
```

### FAQAccordion
```jsx
<FAQAccordion items={[
  { question: 'P1?', answer: 'R1' },
  { question: 'P2?', answer: 'R2' },
]} />
```

### Highlights (Marcos, Destaques)
```jsx
<Highlights 
  eyebrow="Trajetória"
  title="Marcos"
  items={[
    { year: '01', title: 'Início', description: 'Texto' },
    { year: '02', title: 'Expansão', description: 'Texto' },
  ]}
/>
```

### Testimonials (Depoimentos)
```jsx
<Testimonials 
  eyebrow="Depoimentos"
  title="O que dizem"
  items={[
    { initials: 'AC', name: 'Nome', text: 'Depoimento...', rating: '5' },
  ]}
/>
```

### ContactForm
```jsx
<ContactForm 
  labels={content.labels}
  confirmation="Mensagem recebida!"
/>
```

### CTABanner (Chamada Ação)
```jsx
<CTABanner 
  title="Um bom começo"
  description="Conte conosco"
  action={{ label: 'Fale conosco', href: '/contato' }}
/>
```

### Footer
```jsx
<Footer 
  identity={content.identity}
  navigation={content.navigation}
  legalLabel="Privacidade"
  legalHref="/privacidade"
  copyright="2026"
/>
```

## 7. Troubleshooting

**Erro: `npm run dev` não funciona**
- Verifique se tem Node >= 16: `node --version`
- Limpe cache: `rm -rf node_modules && npm install`

**Imagens não aparecem**
- Verifique URL completa em `siteContent.js`
- Use HTTPS, não HTTP
- Teste a URL no navegador diretamente

**Estilos não aplicam**
- Verifique se `tokens.css` e `styles.css` são importados em `main.jsx`
- Limpe cache do navegador: Ctrl+Shift+Del

**Páginas não carregam**
- Verifique rotas em `App.jsx`
- Certifique que página está exportada em `pages.jsx`

## 8. Próximos Passos

- [ ] Substituir todas as imagens de placeholder
- [ ] Preencher textos legais (Privacidade)
- [ ] Configurar formulário de contato (integrar com email)
- [ ] Testar em dispositivos móveis
- [ ] Fazer deploy em produção
- [ ] Configurar analytics (Google Analytics, etc)
- [ ] Otimizar SEO (meta tags, etc)

---

**Dúvidas? Consulte o README.md completo ou inspecione o código fonte!**
