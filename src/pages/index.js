import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SkillsSection from '../components/SkillsSection';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio Website</title>
        <meta name="description" content="Welcome to my portfolio website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className={styles.home}>
        <div className={styles.homeImg}>
          <Image src="/images/codecraft.jpg" alt="CodeCraft" className={styles.roundedImg} width={300} height={300} />
        </div>
        <div className={styles.homeContent}>
          <h1>Hi, It's <span>ThuYaKyaw</span></h1>
          <h3 className={styles.typingText}>I'm a <span></span></h3>
          <p>I am a freelancer</p>
          <div className={styles.buttons}>
            <a href="./download/cv.pdf" className={styles.btn} download="cv_of_thuyakyaw">Download CV</a>
            <a href="./skills" className={styles.btn}>Skills</a>
          </div>
          <div className={styles.socialIcons}>
            <a href="https://www.linkedin.com/in/thu-ya-kyaw-5a606732b"><FaLinkedin /></a>
            <a href="https://github.com/Filip2k03"><FaGithub /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
          </div>
          <button id="contactButton" className={styles.btn}>Hire me</button>
        </div>
      </section>
      <SkillsSection />
      <Footer />
    </div>
  );
}