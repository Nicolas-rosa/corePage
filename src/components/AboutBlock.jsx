import { Button } from './Button';

export function AboutBlock({ eyebrow, title, description, image, highlights, action, imagePosition = 'right' }) {
  return <section className={`section about about--image-${imagePosition}`}>
    <div className="container about__layout">
      <div className="about__image"><img src={image.src} alt={image.alt} /></div>
      <div className="about__copy"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p className="lead">{description}</p>
        <div className="feature-list">{highlights.map((item) => <div key={item.title}><h3>{item.title}</h3><p>{item.description}</p></div>)}</div>
        <Button action={action} variant="text" />
      </div>
    </div>
  </section>;
}
