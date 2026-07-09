import { ThemeProvider } from 'next-themes';
import { Poppins, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';

// next/font: self-hosted, zero layout shift (replaces the old Google Fonts @import)
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-body',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-mono',
});

function MyApp({ Component, pageProps }) {
  return (
    // attribute must match the [data-theme] selectors in globals.css
    <ThemeProvider attribute="data-theme" defaultTheme="dark">
      <div className={`${poppins.variable} ${jetbrainsMono.variable}`}>
        <Component {...pageProps} />
        <div className="crt-overlay" aria-hidden="true" />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
