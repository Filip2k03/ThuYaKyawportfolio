import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import Layout from '../components/Layout';
import Reveal from '../components/Reveal';
import { identity, socials, profiles } from '../data/profile';
import styles from '../styles/Contact.module.css';

const ICONS = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: FaEnvelope,
};

const Contact = () => {
  // Compose the mailto in JS on submit — a literal mailto: form action
  // triggers a mixed-content warning on HTTPS and can't prefill a body.
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get('name')}`);
    const body = encodeURIComponent(
      `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`
    );
    window.location.href = `mailto:${identity.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Layout
      title="Contact"
      description={`Get in touch with ${identity.name} (${identity.alias}) for freelance projects, collaborations and full stack development work.`}
    >
      <section className="section" aria-labelledby="contact-heading">
        <div className={`container ${styles.wrap}`}>
          <Reveal className={styles.intro} variant="fly">
            <span className="section-eyebrow">contact --init</span>
            <h1 id="contact-heading" className="section-title">
              Let&apos;s <span>Talk</span>
            </h1>
            <p className="section-lead">
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>

            <div className={styles.channels}>
              <a href={`mailto:${identity.email}`} className={`glass-card ${styles.channel}`}>
                <FaEnvelope aria-hidden="true" />
                <span>{identity.email}</span>
              </a>
              <a href={`tel:${identity.phone}`} className={`glass-card ${styles.channel}`}>
                <FaPhone aria-hidden="true" />
                <span>{identity.phone}</span>
              </a>
            </div>

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
          </Reveal>

          <Reveal className={styles.formWrap} delay={120}>
            <form className={`glass-card ${styles.form}`} onSubmit={onSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" autoComplete="name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" autoComplete="email" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required />

              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </Reveal>
        </div>

        <div className="container">
          <Reveal className={styles.profilesBlock}>
            <span className="section-eyebrow">profiles --all</span>
            <h2 className="section-title">
              Find Me <span>Online</span>
            </h2>
            <div className={styles.profilesGrid}>
              {profiles.map((profile) => (
                <a
                  key={profile.label}
                  href={profile.href}
                  className={`glass-card ${styles.profileCard}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.profileLabel}>{profile.label}</span>
                  <span className={styles.profileDesc}>{profile.desc}</span>
                  <span className={`mono ${styles.profileUrl}`}>
                    {profile.href.replace('https://', '').replace(/\/$/, '')}
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
