export function Highlights({ eyebrow, title, items, variant = 'timeline' }) {
  return <section className="section highlights"><div className="container"><div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
    <ol className={`highlights__list highlights__list--${variant}`}>{items.map((item) => <li key={`${item.year}-${item.title}`}><span>{item.year}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></li>)}</ol>
  </div></section>;
}
