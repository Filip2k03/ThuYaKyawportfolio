import Reveal from './Reveal';
import { useCountUp } from '../hooks/useCountUp';
import { identity, skills, services, projects } from '../data/profile';
import styles from '../styles/StatsSection.module.css';

// Counts are derived from the data layer so they can never go stale.
const STATS = [
  { label: 'Companies led as CTO', value: identity.positions.length },
  { label: 'Projects shipped', value: projects.length },
  { label: 'Technologies mastered', value: skills.length },
  { label: 'Services offered', value: services.length },
];

const StatItem = ({ label, value, delay }) => {
  const [ref, count] = useCountUp(value);
  return (
    <Reveal delay={delay}>
      <div ref={ref} className={`glass-card ${styles.stat}`}>
        <span className={`mono ${styles.value}`}>{count}+</span>
        <span className={styles.label}>{label}</span>
      </div>
    </Reveal>
  );
};

const StatsSection = () => {
  return (
    <section className={styles.stats} aria-label="Career statistics">
      <div className={`container ${styles.grid}`}>
        {STATS.map((stat, index) => (
          <StatItem key={stat.label} {...stat} delay={index * 80} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
