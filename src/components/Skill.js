import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPython, FaPhp, FaWordpress } from 'react-icons/fa';
import { SiTailwindcss, SiMysql } from 'react-icons/si';
import styles from '../styles/SkillsSection.module.css';

const ICONS = {
  html: FaHtml5,
  css: FaCss3Alt,
  js: FaJs,
  react: FaReact,
  tailwind: SiTailwindcss,
  bootstrap: FaBootstrap,
  python: FaPython,
  php: FaPhp,
  mysql: SiMysql,
  wordpress: FaWordpress,
};

const Skill = ({ name, level, icon }) => {
  const Icon = ICONS[icon] || FaJs;
  return (
    <div className={`glass-card ${styles.skill}`}>
      <div className={styles.skillHead}>
        <Icon className={styles.skillIcon} aria-hidden="true" />
        <span className={styles.skillName}>{name}</span>
        <span className={`mono ${styles.skillLevel}`}>{level}%</span>
      </div>
      <div
        className={styles.progressBar}
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency`}
      >
        <div className={styles.progress} style={{ width: `${level}%` }} />
      </div>
    </div>
  );
};

export default Skill;
