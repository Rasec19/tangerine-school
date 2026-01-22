
import { HomePage } from './home/pages/HomePage'
import { Footer, Navbar } from './ui/index'
import { Helmet, HelmetProvider } from 'react-helmet-async';

export const TangerineApp = () => {
  return (
    <>
      <Navbar />
      <HelmetProvider>
        <Helmet>
          <title>Tangerine School</title>
          <meta
            name="description"
            content="Somos una escuela de ingles en línea con clases 100% en vivo, en donde utilizamos un enfoque practico y conversacional"
          />
          <meta name="keywords" content="educación, aprendedr ingles, ingles, Tangerine School, escuela de ingles" />
          <meta property="og:title" content="Tangerine School" />
          <meta property="og:description" content="Somos una escuela de ingles en línea con clases 100% en vivo." />
          <meta property="og:url" content="https://tangerineschool.com" />
          <meta name="author" content="Tangerine School" />
          <meta name="robots" content="index, follow" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://tangerineschool.com/assets/LOGO-tangerine.svg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Tangerine School" />
        </Helmet>
        <HomePage />
      </HelmetProvider>
      <Footer />
    </>
  )
}


export default TangerineApp
