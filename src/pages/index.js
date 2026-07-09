import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import Layout from '../components/Layout';
import SkillsSection from '../components/SkillsSection';
import Reveal from '../components/Reveal';
import { useTypewriter } from '../hooks/useTypewriter';
import { identity, socials, projects } from '../data/profile';
import styles from '../styles/Home.module.css';

const ICONS = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: FaEnvelope,
};

export default function Home() {
  const typedRole = useTypewriter(identity.roles);

  return (
    <Layout>
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <span className="section-eyebrow">whoami</span>
            <h1 id="hero-heading" className={styles.heroTitle}>
              Hi, I&apos;m <span>{identity.name}</span>
            </h1>
            <p className={`mono ${styles.heroRole}`} aria-label={`Roles: ${identity.roles.join(', ')}`}>
              {typedRole}
              <span className="cursor-block" aria-hidden="true" />
            </p>
            <p className={styles.heroTagline}>{identity.tagline}</p>

            <div className={styles.heroButtons}>
              <a href={identity.cvPath} className="btn" download>
                <FaDownload aria-hidden="true" /> Download CV
              </a>
              <Link href="/contact" className="btn btn--ghost">
                Hire Me
              </Link>
            </div>

            <div className={styles.heroSocials}>
              {socials.map(({ label, href, icon }) => {
                const Icon = ICONS[icon];
                return (
                  <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div className={styles.heroImage}>
            <Image
              src={identity.avatar}
              alt={`Portrait of ${identity.name} (${identity.alias})`}
              width={340}
              height={340}
              priority
              className={styles.avatar}
            />
          </div>
        </div>
      </section>

      <SkillsSection />

      <section className="section" aria-labelledby="projects-heading">
        <div className="container">
          <Reveal>
            <span className="section-eyebrow">projects --featured</span>
            <h2 id="projects-heading" className="section-title">
              Featured <span>Projects</span>
            </h2>
            <p className="section-lead">
              A few things I&apos;ve designed, built and shipped.
            </p>
          </Reveal>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 80}>
                <article className={`glass-card ${styles.projectCard}`}>
                  <div className={styles.projectImage}>
                    <Image src={project.image} alt="" width={480} height={280} />
                  </div>
                  <div className={styles.projectBody}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className={styles.projectTags} aria-label="Technologies">
                      {project.tags.map((tag) => (
                        <li key={tag} className="mono">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={project.href}
                      className={styles.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit project <FaExternalLinkAlt aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
