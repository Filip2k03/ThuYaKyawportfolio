import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import Layout from '../components/Layout';
import SkillsSection from '../components/SkillsSection';
import StatsSection from '../components/StatsSection';
import Reveal from '../components/Reveal';
import { useTypewriter } from '../hooks/useTypewriter';
import { useTilt } from '../hooks/useTilt';
import { identity, socials, projects } from '../data/profile';
import styles from '../styles/Home.module.css';

const ICONS = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: FaEnvelope,
};

const FLOAT_CHIPS = ['React', 'Next.js', 'PHP', 'Python'];

export default function Home() {
  const typedRole = useTypewriter(identity.roles);
  const tiltRef = useTilt(8);

  return (
    <Layout>
      <section className={styles.hero} aria-labelledby="hero-heading">
        {/* Ambient floating orbs — pure decoration, hidden from AT */}
        <div className={styles.orbs} aria-hidden="true">
          <span className={styles.orbA} />
          <span className={styles.orbB} />
        </div>
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
            <p className={`mono ${styles.heroPositions}`}>
              {identity.positions.map((p) => `${p.role} @ ${p.company}`).join(' · ')}
            </p>

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
            <div ref={tiltRef} className={styles.avatarWrap}>
              <Image
                src={identity.avatar}
                alt={`Portrait of ${identity.name} (${identity.alias})`}
                width={340}
                height={340}
                priority
                className={styles.avatar}
              />
              {FLOAT_CHIPS.map((chip, index) => (
                <span
                  key={chip}
                  className={`mono ${styles.floatChip}`}
                  data-pos={index}
                  aria-hidden="true"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      <SkillsSection />

      <section className="section" aria-labelledby="projects-heading">
        <div className="container">
          <Reveal variant="fly">
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
              <Reveal
                key={project.title}
                delay={index * 140}
                variant={index % 2 === 0 ? 'left' : 'right'}
              >
                <article className={`glass-card ${styles.projectCard}`}>
                  <div
                    className={`${styles.projectImage} ${project.fit === 'contain' ? styles.projectImageContain : ''}`}
                  >
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
