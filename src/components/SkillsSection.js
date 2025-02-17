import React from 'react';
import Skill from './Skill';
import styles from '../styles/SkillsSection.module.css';

const skills = [
    { skillName: 'Web Development', proficiency: 90, imageUrl: '/images/web-development.png' },
    { skillName: 'HTML', proficiency: 95, imageUrl: '/images/html.png' },
    { skillName: 'CSS', proficiency: 90, imageUrl: '/images/css.png' },
    { skillName: 'JavaScript', proficiency: 85, imageUrl: '/images/javascript.png' },
    { skillName: 'React', proficiency: 80, imageUrl: '/images/react.png' },
    { skillName: 'Python + Django', proficiency: 75, imageUrl: '/images/python-django.png' },
    { skillName: 'PHP + Laravel', proficiency: 70, imageUrl: '/images/php-laravel.png' },
];

const SkillsSection = () => {
    return (
        <section className={styles.skillsSection}>
            <h2>My Skills</h2>
            <div className={styles.skillsContainer}>
                {skills.map((skill, index) => (
                    <Skill
                        key={index}
                        skillName={skill.skillName}
                        proficiency={skill.proficiency}
                        imageUrl={skill.imageUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;