import Image from 'next/image';
import Layout from '../components/Layout';
import Reveal from '../components/Reveal';
import { services } from '../data/profile';
import styles from '../styles/Services.module.css';

const Services = () => {
  return (
    <Layout
      title="Services"
      description="Services by Thu Ya Kyaw (TechyyFilip): full stack development, UI/UX design, WordPress, CMS, hosting, POS systems and online programming courses."
    >
      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <Reveal>
            <span className="section-eyebrow">services --list</span>
            <h1 id="services-heading" className="section-title">
              My <span>Services</span>
            </h1>
            <p className="section-lead">
              From first sketch to production deploy — everything you need to ship something great.
            </p>
          </Reveal>
          <div className={styles.serviceGrid}>
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 60}>
                <article className={`glass-card ${styles.serviceCard}`}>
                  <div className={styles.serviceImage}>
                    <Image src={service.image} alt="" width={400} height={220} />
                  </div>
                  <div className={styles.serviceBody}>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
