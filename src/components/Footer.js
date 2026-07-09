import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useT } from '../context/LanguageContext';
import { identity, socials } from '../data/profile';
import styles from '../styles/Footer.module.css';

const ICONS = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: FaEnvelope,
};

const Footer = () => {
  const t = useT();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={`mono ${styles.sig}`}>
          {identity.name} <span>@{identity.alias}</span>
        </p>
        <div className={styles.socials}>
          {socials.map(({ label, href, icon }) => {
            const Icon = ICONS[icon];
            return (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                <Icon />
              </a>
            );
          })}
        </div>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} {identity.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
