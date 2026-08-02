import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingContactButton } from './components/FloatingContactButton';
import { siteContent } from './data/siteContent';
import { AboutPage, ContactPage, ContentPage, FAQPage, HomePage, ItemsPage, PostPage, PrivacyPage } from './pages';

function route(pathname, content) {
  if (pathname.startsWith('/conteudo/')) return <PostPage content={content} slug={pathname.split('/').pop()} />;
  const pages = { '/': HomePage, '/sobre': AboutPage, '/itens': ItemsPage, '/conteudo': ContentPage, '/contato': ContactPage, '/faq': FAQPage, '/privacidade': PrivacyPage };
  const Page = pages[pathname] || HomePage;
  return <Page content={content} />;
}

export default function App() {
  const content = siteContent;
  return <><Header identity={content.identity} navigation={content.navigation} labels={content.labels} action={{ label: content.labels.contact, href: '/contato' }} /><main>{route(window.location.pathname, content)}</main><Footer identity={content.identity} navigation={content.navigation} legalLabel={content.labels.privacy} legalHref="/privacidade" copyright="[texto a definir]" /><FloatingContactButton action={{ label: content.labels.contact, href: '/contato' }} label={content.labels.contact} /></>;
}
