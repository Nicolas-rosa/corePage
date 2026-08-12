# 🧩 React Design System & Website Template

> Um template React totalmente modular para criação de sites institucionais, portfólios e páginas de serviços, baseado em um **Design System reutilizável** e configurado através de um único arquivo de conteúdo.

Este projeto foi desenvolvido para acelerar a criação de novos sites sem duplicação de código. Toda a estrutura é desacoplada do conteúdo, permitindo reutilizar a mesma base para diferentes nichos apenas alterando textos, imagens, rotas e identidade visual.

---

# ✨ Funcionalidades

## 🏗 Arquitetura

* Componentes reutilizáveis e independentes
* Estrutura escalável e organizada
* Separação entre layout e conteúdo
* Zero conteúdo hardcoded
* Código de fácil manutenção

## 🎨 Customização

* Conteúdo centralizado em um único arquivo
* Sistema de rotas configurável
* Suporte a múltiplos idiomas
* Tema Claro/Escuro
* Design Tokens centralizados
* Componentes configuráveis via Props

## 📱 Experiência do Usuário

* Mobile First
* Layout totalmente responsivo
* Navegação por teclado
* Compatível com WCAG AA
* HTML semântico

## ⚡ Desenvolvimento

* React + Vite
* CSS puro
* Build otimizado
* Estrutura simples para expansão

---

# 👥 Casos de Uso

Este template pode ser utilizado para:

* Portfólios
* Empresas
* Landing Pages
* Clínicas
* Consultórios
* Advogados
* Arquitetos
* Designers
* Desenvolvedores
* Agências
* Consultores
* Prestadores de serviço
* Restaurantes
* Educação
* Saúde
* Qualquer outro segmento

---

# 📑 Índice

* Funcionalidades
* Tecnologias
* Instalação
* Estrutura do Projeto
* Fluxo da Aplicação
* Personalização
* Design Tokens
* Componentes
* Páginas
* Acessibilidade
* Roadmap
* Licença

---

# 🚀 Instalação

## Pré-requisitos

* Node.js 18+
* npm ou pnpm

## Clonar o projeto

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git

cd seu-repositorio
```

## Instalar dependências

```bash
npm install
```

## Executar em desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em:

```
http://localhost:5173
```

---

## Gerar Build

```bash
npm run build
```

Os arquivos finais serão gerados em:

```
dist/
```

---

## Visualizar Build

```bash
npm run preview
```

---

# 🛠 Tecnologias

* React
* Vite
* JavaScript
* CSS3
* Design Tokens

---

# 📁 Estrutura do Projeto

```text
src
│
├── components/           # Componentes reutilizáveis
│   ├── Button.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── AboutBlock.jsx
│   ├── ItemCards.jsx
│   ├── Highlights.jsx
│   ├── Testimonials.jsx
│   ├── ContentCard.jsx
│   ├── FAQAccordion.jsx
│   ├── ContactForm.jsx
│   ├── CTABanner.jsx
│   └── FloatingContactButton.jsx
│
├── data/
│   └── siteContent.js
│
├── pages/
│
├── tokens/
│   └── tokens.css
│
├── App.jsx
├── main.jsx
└── styles.css
```

---

# 🔄 Fluxo da Aplicação

Todo o projeto gira em torno de um único arquivo de configuração.

```text
siteContent.js
        │
        ▼
      App.jsx
        │
        ▼
      Pages
        │
        ▼
   Components
        │
        ▼
 Interface Final
```

Isso significa que praticamente todo o conteúdo do site pode ser alterado sem modificar os componentes.

---

# 🎨 Personalização

## Conteúdo

Todo o conteúdo do site está centralizado em:

```text
src/data/siteContent.js
```

Nesse arquivo é possível alterar:

* identidade
* logotipo
* textos
* imagens
* links
* serviços
* FAQ
* depoimentos
* páginas
* artigos
* SEO
* botões
* chamadas para ação

---

## Aparência

Todos os estilos globais ficam em:

```text
src/tokens/tokens.css
```

É possível alterar:

* cores
* tipografia
* espaçamentos
* bordas
* sombras
* largura máxima
* animações

---

## Rotas

As rotas também são configuráveis.

Exemplo:

```javascript
pathPages: {
    home: "",
    about: "sobre",
    items: "servicos",
    content: "blog",
    contact: "contato",
    faq: "faq",
    privacy: "privacidade"
}
```

Também é possível utilizar um prefixo:

```javascript
pathPrefix: "empresa"
```

Resultado:

```
/empresa
/empresa/sobre
/empresa/blog
```

---

## Idiomas

O template suporta múltiplos idiomas através do objeto:

```javascript
siteContent = {
    pt: {...},
    en: {...}
}
```

A troca de idioma é feita dinamicamente pela aplicação.

---

# 🎨 Design Tokens

Todos os valores visuais estão centralizados em:

```text
src/tokens/tokens.css
```

## Cores

```css
--color-bg
--color-bg-alt
--color-text-primary
--color-text-secondary
--color-accent
--color-accent-hover
--color-border
```

## Tipografia

```css
--font-heading
--font-body
--text-hero
--text-h2
--text-body
```

## Espaçamentos

```css
--space-1
--space-2
--space-3
--space-4
--space-5
--space-6
--space-7
```

Alterando esses valores todo o projeto é atualizado automaticamente.

---

# 🧩 Componentes

Todos os componentes são independentes e recebem seus dados via Props.

Exemplo:

```jsx
<Button
    action={{
        label: "Saiba mais",
        href: "/sobre"
    }}
    variant="primary"
/>
```

Outro exemplo:

```jsx
<Hero
    eyebrow="Apresentação"
    title="Seu título"
    description="Sua descrição"
    image={{
        src: "...",
        alt: "..."
    }}
    primaryAction={{
        label: "Contato",
        href: "/contato"
    }}
/>
```

Nenhum componente possui textos fixos.

---

# 📄 Páginas Disponíveis

| Página      | Descrição                               |
| ----------- | --------------------------------------- |
| Home        | Página inicial                          |
| Sobre       | Apresentação da empresa ou profissional |
| Itens       | Lista de serviços ou produtos           |
| Conteúdo    | Blog ou artigos                         |
| Post        | Página individual de conteúdo           |
| Contato     | Formulário de contato                   |
| FAQ         | Perguntas frequentes                    |
| Privacidade | Política de Privacidade                 |

---

# ♿ Acessibilidade

O template foi desenvolvido seguindo boas práticas de acessibilidade.

Inclui:

* Contraste WCAG AA
* Navegação por teclado
* Focus visível
* HTML semântico
* Alt obrigatório para imagens
* Labels apropriadas
* Estrutura compatível com leitores de tela

Para manter a acessibilidade:

* sempre utilize texto alternativo em imagens;
* mantenha contraste mínimo de 4.5:1;
* não remova indicadores de foco;
* utilize títulos em ordem hierárquica.

---

# 🚧 Roadmap

## Concluído

* Tema Claro/Escuro
* Internacionalização
* Sistema de Rotas
* Componentes reutilizáveis
* Design Tokens
* Responsividade
* Layout Mobile First
* WCAG AA

## Futuro

* Busca de conteúdo
* Storybook
* Testes automatizados
* Tema customizável em tempo real
* CMS opcional
* Animações avançadas

---

# 🤝 Contribuição

Contribuições são bem-vindas.

Caso encontre algum problema ou tenha sugestões de melhorias, abra uma *Issue* ou envie um *Pull Request*.

---

# 📄 Licença

Este projeto está disponível sob a licença **MIT**.

Sinta-se à vontade para utilizá-lo, modificá-lo e adaptá-lo para projetos pessoais ou comerciais.
