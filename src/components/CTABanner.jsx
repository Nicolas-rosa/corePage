import { Button } from './Button';

export function CTABanner({ title, description, action, variant = 'banner' }) {
  return <section className={`cta cta--${variant}`}><div className="container cta__inner"><div><h2>{title}</h2><p>{description}</p></div><Button action={action} variant="secondary-inverse" /></div></section>;
}
