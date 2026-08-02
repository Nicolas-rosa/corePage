import { AboutBlock } from './components/AboutBlock';
import { ContactForm } from './components/ContactForm';
import { ContentCard } from './components/ContentCard';
import { CTABanner } from './components/CTABanner';
import { FAQAccordion } from './components/FAQAccordion';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { ItemCards } from './components/ItemCards';
import { Testimonials } from './components/Testimonials';

export function HomePage({ content }) {
  return <><Hero {...content.hero} /><AboutBlock {...content.about} /><ItemCards eyebrow="Possibilidades" title="Itens que se adaptam ao seu contexto." description="Escolha os itens que fazem sentido para sua apresentação." items={content.items} /><Highlights eyebrow="Destaques" title="Um percurso construído com intenção." items={content.milestones} /><Testimonials eyebrow="Depoimentos" title="Experiências compartilhadas." items={content.testimonials} /><ContentPreview items={content.content} label={content.labels.allContent} /><CTABanner {...content.cta} /></>;
}

export function AboutPage({ content }) {
  return <><Hero eyebrow="Sobre" title="Uma apresentação que cria proximidade." description="Use este espaço para ampliar a trajetória, o modo de trabalhar e o que orienta cada escolha." compact /><AboutBlock {...content.about} imagePosition="left" /><Highlights eyebrow="Trajetória" title="Pontos que ajudam a conhecer o perfil." items={content.milestones} /><CTABanner {...content.cta} /></>;
}

export function ItemsPage({ content }) {
  const audience = content.items.map((item, index) => ({ ...item, icon: `0${index + 1}`, title: `Para ${item.title.toLowerCase()}` }));
  return <><Hero eyebrow="Itens" title="Possibilidades para diferentes momentos." description="Apresente aqui o que é oferecido e como cada opção pode funcionar." compact /><ItemCards eyebrow="O que é oferecido" title="Escolhas explicadas com clareza." items={content.items} columns={3} /><ItemCards eyebrow="Para quem" title="Encontre um ponto de partida." description="Uma forma genérica de orientar pessoas para os itens mais adequados." items={audience} columns={3} /><FAQSection items={content.faq} /><CTABanner {...content.cta} /></>;
}

export function ContentPage({ content }) {
  return <><Hero eyebrow="Conteúdo" title="Ideias para acompanhar seu caminho." description="Textos breves e úteis, organizados para uma leitura tranquila." compact /><section className="section"><div className="container"><div className="content-toolbar"><p>{content.content.length} itens disponíveis</p><label>Filtrar por categoria<select aria-label="Filtrar por categoria"><option>Todos</option><option>Orientações</option><option>Reflexões</option></select></label></div><div className="content-grid">{content.content.map((item) => <ContentCard key={item.slug} item={item} />)}</div></div></section></>;
}

export function PostPage({ content, slug }) {
  const item = content.content.find((entry) => entry.slug === slug) || content.content[0];
  return <><article className="post"><header className="container post__header"><p className="eyebrow">{item.category}</p><h1>{item.title}</h1><p className="post__meta"><time>{item.date}</time><span>{item.readTime}</span></p></header><div className="container post__cover"><img src={item.image.src} alt={item.image.alt} /></div><div className="post__body"><p>{item.excerpt} Este é um espaço de conteúdo rico, pronto para receber a redação definitiva do projeto.</p><h2>Um ponto para começar</h2><p>Use parágrafos curtos, linguagem acessível e informações que ajudem quem lê a compreender o assunto com autonomia.</p><p>O conteúdo pode ser alimentado por um CMS ou por arquivos locais, sem alterar o componente de apresentação.</p></div></article><ContentPreview items={content.content.filter((entry) => entry.slug !== item.slug).slice(0, 2)} label={content.labels.allContent} /><CTABanner {...content.cta} /></>;
}

export function ContactPage({ content }) {
  return <><Hero {...content.contact} compact /><section className="section"><div className="container contact-layout"><ContactForm labels={content.labels} confirmation="Mensagem recebida. [texto de confirmação a definir]" /><aside className="contact-details">{content.contact.channels.map((channel) => <div key={channel.label}><p className="eyebrow">{channel.label}</p><p>{channel.value}</p></div>)}</aside></div></section></>;
}

export function FAQPage({ content }) { return <><Hero eyebrow="Dúvidas" title="Informações para seguir com segurança." description="Respostas diretas para perguntas frequentes." compact /><FAQSection items={content.faq} /><CTABanner {...content.cta} /></>; }

export function PrivacyPage({ content }) { return <section className="section legal"><div className="container"><p className="eyebrow">Informações</p><h1>{content.legal.title}</h1>{content.legal.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>; }

function FAQSection({ items }) { return <section className="section faq-section"><div className="container"><div className="section-heading"><p className="eyebrow">FAQ</p><h2>Perguntas frequentes.</h2></div><FAQAccordion items={items} /></div></section>; }
function ContentPreview({ items, label }) { return <section className="section"><div className="container"><div className="section-heading section-heading--row"><div><p className="eyebrow">Conteúdo</p><h2>Leituras recentes.</h2></div><a className="button button--text" href="/conteudo">{label}</a></div><div className="content-grid">{items.map((item) => <ContentCard key={item.slug} item={item} />)}</div></div></section>; }
