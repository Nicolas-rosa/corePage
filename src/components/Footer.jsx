export function Footer({ identity, navigation, legalLabel, legalHref, copyright }) {
  return <footer className="footer"><div className="container footer__inner"><div><a className="brand" href="/"><span>{identity.monogram}</span>{identity.name}</a><p>{identity.description}</p></div><div className="footer__links">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}<a href={legalHref}>{legalLabel}</a></div></div><div className="container footer__bottom">© {new Date().getFullYear()} {identity.name}. {copyright}</div></footer>;
}
