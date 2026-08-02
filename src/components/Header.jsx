import { useState } from 'react';
import { Button } from './Button';

export function Header({ identity, navigation, action, labels, transparent = false }) {
  const [isOpen, setIsOpen] = useState(false);
  return <header className={`header ${transparent ? 'header--transparent' : ''}`}>
    <div className="container header__inner">
      <a className="brand" href="/" aria-label={identity.name}><span>{identity.monogram}</span>{identity.name}</a>
      <button className="menu-toggle" type="button" aria-expanded={isOpen} aria-label={isOpen ? labels.close : labels.menu} onClick={() => setIsOpen(!isOpen)}><i /><i /></button>
      <nav className={`nav ${isOpen ? 'nav--open' : ''}`} aria-label="Navegação principal">
        {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>{item.label}</a>)}
        <Button action={action} variant="secondary" />
      </nav>
    </div>
  </header>;
}
