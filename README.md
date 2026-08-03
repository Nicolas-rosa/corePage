# 🧩 Design System & Template de Site — Perfil Profissional/Institucional

Um **sistema de componentes reutilizável**, genérico e neutro em relação a tema/nicho, pronto para criar sites institucionais e de prestação de serviço de forma modular e consistente.

---

## ✨ Características

- ✅ **Totalmente modular** — Componentes isolados com props editáveis
- ✅ **Zero conteúdo hardcoded** — Tudo configurável via `siteContent.js`
- ✅ **Design tokens centralizados** — Cores, tipografia, e espaçamento em `tokens.css`
- ✅ **Responsivo mobile-first** — Funciona em qualquer dispositivo
- ✅ **Acessibilidade WCAG AA** — Contraste apropriado, foco visível, alt text obrigatório
- ✅ **Agnóstico de nicho** — Funciona para qualquer segmento (educação, saúde, consultoria, etc.)
- ✅ **8+ páginas prontas** — Home, Sobre, Itens, Conteúdo, Post, Contato, FAQ, Privacidade

---

## 🚀 Como roddar

### Pré-requisitos
- Node.js 16+ instalado
- npm ou pnpm

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Os arquivos compilados estarão em `dist/`

### Preview do Build

```bash
npm run preview
```

---

## 📁 Estrutura de Pastas

```
src/
├── App.jsx                    # App principal e roteador
├── main.jsx                   # Entrada e renderização
├── pages.jsx                  # Definição de páginas
├── styles.css                 # Estilos globais
│
├── components/                # Componentes reutilizáveis
│   ├── Header.jsx             # Navegação e breadcrumb
│   ├── Hero.jsx               # Seção de abertura
│   ├── AboutBlock.jsx         # Bloco de apresentação
│   ├── ItemCards.jsx          # Grid de serviços/itens
│   ├── Highlights.jsx         # Lista de destaques/marcos
│   ├── Testimonials.jsx       # Depoimentos/prova social
│   ├── ContentCard.jsx        # Card genérico de conteúdo
│   ├── FAQAccordion.jsx       # Accordeon de perguntas
│   ├── ContactForm.jsx        # Formulário de contato
│   ├── CTABanner.jsx          # Chamada para ação
│   ├── FloatingContactButton.jsx # Botão flutuante
│   ├── Button.jsx             # Componente botão base
│   └── Footer.jsx             # Rodapé
│
├── data/
│   └── siteContent.js         # Toda copy, textos e configurações
│
└── tokens/
    └── tokens.css             # Design tokens (cores, fontes, espaçamento)
```

---

## 🎨 Design Tokens

Todos os tokens visuais estão centralizados em `src/tokens/tokens.css`:

### Cores
| Token | Uso | Valor |
|---|---|---|
| `--color-bg` | Fundo principal | `#f7f0e8` |
| `--color-bg-alt` | Fundo alternado | `#ffffff` |
| `--color-text-primary` | Texto principal | `#2b2620` |
| `--color-text-secondary` | Texto de apoio | `#6b6459` |
| `--color-accent` | CTA, destaque | `#8a7a5c` |
| `--color-accent-hover` | Hover do accent | `#6f6149` |
| `--color-border` | Divisores, cards | `#e4dacb` |

### Tipografia
| Token | Uso | Fonte |
|---|---|---|
| `--font-heading` | Títulos | Fraunces, Georgia |
| `--font-body` | Corpo | DM Sans, Arial |
| `--text-hero` | H1 | clamp(2.7rem, 5vw, 4rem) |
| `--text-h2` | H2 | clamp(2rem, 3.5vw, 2.8rem) |
| `--text-body` | Parágrafo | 1.0625rem |

### Espaçamento
- `--space-1` até `--space-7` (de 0.5rem a 6rem)
- Container máx: 75rem (1200px)
- Radius padrão: 1rem (cards), 999px (buttons)

---

## 📝 Configurar Conteúdo

**Tudo que aparece no site é definido em `src/data/siteContent.js`.**

Estrutura principal:

```javascript
export const siteContent = {
  identity: { name, monogram, description },
  navigation: [...],
  labels: { menu, close, contact, ... },
  hero: { eyebrow, title, description, image, primaryAction, ... },
  about: { eyebrow, title, description, image, highlights, ...},
  items: [...],                    // Serviços/possibilidades
  milestones: [...],               // Destaques/marcos
  testimonials: [...],             // Depoimentos
  content: [...],                  // Posts/artigos
  faq: [...],                      // Perguntas frequentes
  contact: { eyebrow, title, ... },
  cta: {...},                      // Chamada para ação
  pages: { home, about, items, content, faq, contact, post }, // Textos das páginas
  legal: { title, body }           // Política de privacidade
};
```

### Exemplo: Alterar Cores

Em `src/tokens/tokens.css`:

```css
:root {
  --color-accent: #d4af37;  /* Mudou de #8a7a5c para dourado */
  --color-accent-hover: #b8941c;
  /* ... resto dos tokens */
}
```

### Exemplo: Adicionar um Novo Item/Serviço

Em `src/data/siteContent.js`:

```javascript
items: [
  { icon: '01', title: 'Serviço A', description: 'Descrição breve' },
  { icon: '02', title: 'Serviço B', description: 'Descrição breve' },
  // Adicionar novo:
  { icon: '03', title: 'Serviço C', description: 'Descrição breve' },
]
```

---

## 🏗️ Componentes

### Button
```jsx
<Button 
  action={{ label: 'Saiba mais', href: '/sobre' }} 
  variant="primary" // 'primary' | 'secondary' | 'text'
/>
```

### Hero
```jsx
<Hero 
  eyebrow="Apresentação"
  title="Clareza para dar o próximo passo"
  description="Uma presença digital..."
  image={{ src: 'url', alt: 'descrição' }}
  primaryAction={{ label: 'Ação', href: '/' }}
/>
```

### ItemCards
```jsx
<ItemCards 
  eyebrow="Possibilidades"
  title="Seus itens"
  items={content.items}
  columns={3}
/>
```

### FAQAccordion
```jsx
<FAQAccordion items={content.faq} />
```

Todos os componentes são **100% configuráveis via props** — nenhum valor hardcoded.

---

## 📄 Páginas Implementadas

| Página | Rota | Descrição |
|---|---|---|
| Home | `/` | Apresentação completa, com Hero, Sobre, Itens, Destaques, Depoimentos, Conteúdo e CTA |
| Sobre | `/sobre` | Apresentação expandida com trajetória e destaques |
| Itens | `/itens` | Catálogo completo de serviços/possibilidades |
| Conteúdo | `/conteudo` | Grid de posts/artigos com filtro por categoria |
| Post | `/conteudo/[slug]` | Artigo individual com related content |
| Contato | `/contato` | Formulário de contato com informações diretas |
| FAQ | `/faq` | Perguntas frequentes dedicadas |
| Privacidade | `/privacidade` | Política de privacidade |

---


## 🔧 Tecnologia

- **React 18** — Framework UI
- **Vite** — Build tool rápida e moderna
- **CSS 3** — Estilos nativos (sem pré-processadores)
- **Design Tokens** — Sistema de design centralizado

---

## ♿ Acessibilidade

O template foi construído com acessibilidade em mente:

- ✅ Contraste WCAG AA mínimo em todos os textos
- ✅ Foco visível em interativos (`outline-offset: 4px`)
- ✅ Alt text obrigatório em imagens
- ✅ Semântica HTML apropriada (header, nav, main, article, footer)
- ✅ Navegação por teclado completa
- ✅ Aria labels onde necessário

Para manter acessibilidade:
- Sempre forneça `alt` em imagens
- Mantenha contraste min. 4.5:1 para texto pequeno
- Não remova focus indicators

---


