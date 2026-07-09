import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import AccentPicker from './AccentPicker';
import styles from '../styles/Header.module.css';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/skills', label: 'Skills' },
  { href: '/services', label: 'Services' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Theme icon must render only after mount to avoid SSR/client hydration mismatch
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  // Close the mobile menu on route change so it never lingers over the new page
  useEffect(() => {
    const close = () => setMenuOpen(false);
    router.events.on('routeChangeComplete', close);
    return () => router.events.off('routeChangeComplete', close);
  }, [router.events]);

  const isDark = resolvedTheme === 'dark';

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="TechyyFilip — home">
          Techyy<span>Filip</span>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`} aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={router.pathname === href ? styles.active : ''}
              aria-current={router.pathname === href ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <AccentPicker />
          <button
            className={styles.iconBtn}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={mounted && isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {mounted ? (isDark ? <FaSun /> : <FaMoon />) : <FaMoon />}
          </button>
          <button
            className={`${styles.iconBtn} ${styles.menuToggle}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
