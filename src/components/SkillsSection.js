import Skill from './Skill';
import Reveal from './Reveal';
import { skills } from '../data/profile';
import styles from '../styles/SkillsSection.module.css';

const SkillsSection = () => {
  return (
    <section className={`section ${styles.skillsSection}`} aria-labelledby="skills-heading">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">skills --list</span>
          <h2 id="skills-heading" className="section-title">
            My <span>Skills</span>
          </h2>
          <p className="section-lead">
            The tools I reach for daily — front-end craft, back-end muscle, and everything between.
          </p>
        </Reveal>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 60}>
              <Skill {...skill} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
