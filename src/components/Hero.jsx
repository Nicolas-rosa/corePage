import { Button } from './Button';

export function Hero({ eyebrow, title, description, image, primaryAction, secondaryAction, variant = 'split', compact = false }) {
  return <section className={`hero hero--${variant} ${compact ? 'hero--compact' : ''}`}>
    <div className="container hero__layout">
      <div className="hero__copy">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {description && <p className="lead">{description}</p>}
        {(primaryAction || secondaryAction) && <div className="actions"><Button action={primaryAction} /><Button action={secondaryAction} variant="secondary" /></div>}
      </div>
      {image && <div className="hero__image"><img src={image.src} alt={image.alt} /></div>}
    </div>
  </section>;
}
