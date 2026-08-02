export function ItemCards({ eyebrow, title, description, items, columns = 3 }) {
  return <section className="section section--alt">
    <div className="container"><div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{description && <p>{description}</p>}</div>
      <div className={`item-grid item-grid--${columns}`}>{items.map((item) => <article className="item-card" key={item.title}><span className="item-card__icon" aria-hidden="true">{item.icon}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
    </div>
  </section>;
}
