export function Testimonials({ eyebrow, title, items, variant = 'grid' }) {
  return <section className="section section--alt"><div className="container"><div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
    <div className={`testimonial-grid testimonial-grid--${variant}`}>{items.map((item) => <figure className="testimonial" key={`${item.name}-${item.initials}`}><blockquote>{item.text}</blockquote><figcaption><span>{item.initials}</span><div><strong>{item.name}</strong>{item.rating && <small aria-label={`${item.rating} de 5`}>★ {item.rating}/5</small>}</div></figcaption></figure>)}</div>
  </div></section>;
}
