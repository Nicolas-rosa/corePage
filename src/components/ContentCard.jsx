export function ContentCard({ item, variant = 'grid' }) {
  return <article className={`content-card content-card--${variant}`}><a href={`/conteudo/${item.slug}`} className="content-card__image"><img src={item.image.src} alt={item.image.alt} /></a><div className="content-card__copy"><p className="eyebrow">{item.category}</p><h3><a href={`/conteudo/${item.slug}`}>{item.title}</a></h3><p>{item.excerpt}</p><div className="content-card__meta"><time>{item.date}</time><span>{item.readTime}</span></div></div></article>;
}
