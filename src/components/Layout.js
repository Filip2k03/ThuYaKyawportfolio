import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import SEO from './SEO';

// Shared page shell: skip link, header, main landmark, footer, back-to-top.
const Layout = ({ children, title, description }) => {
  return (
    <>
      <SEO title={title} description={description} />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;
