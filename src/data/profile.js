// Single source of truth for all site content — edit here, never in components.
export const identity = {
  name: 'Thu Ya Kyaw',
  alias: 'TechyyFilip',
  tagline: 'I craft fast, accessible, beautifully engineered web experiences.',
  roles: [
    'Chief Technology Officer',
    'Full Stack Developer',
    'UI/UX Designer',
    'System Engineer',
    'Tech Artist',
  ],
  positions: [
    { role: 'CTO', company: 'Reiwasakura' },
    { role: 'CTO', company: 'New Earth Company Limited' },
  ],
  location: 'Global / Remote',
  email: 'stephanfilip7@gmail.com',
  phone: '+959954480806',
  siteUrl: 'https://techyyfilip.vercel.app',
  avatar: '/images/codecraft.jpg',
  cvPath: '/download/cv.pdf',
};

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thu-ya-kyaw-5a606732b', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/Filip2k03', icon: 'github' },
  { label: 'Email', href: 'mailto:stephanfilip7@gmail.com', icon: 'email' },
];

// Online presence — rendered on the contact page and available to the terminal.
export const profiles = [
  { label: 'GitHub', href: 'https://github.com/Filip2k03', desc: 'Code & open source' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thu-ya-kyaw-5a606732b',
    desc: 'Professional profile',
  },
  { label: 'Reiwasakura', href: 'https://reiwasakura.tech', desc: 'My company — CTO' },
  { label: 'PaiCafes', href: 'https://paicafes.com', desc: 'Production cafe platform' },
  {
    label: 'Digital Marketplace MM',
    href: 'https://digitalmarketplacemm.com',
    desc: 'Marketplace I engineered',
  },
];

export const skills = [
  { name: 'HTML5', level: 95, icon: 'html' },
  { name: 'CSS3', level: 90, icon: 'css' },
  { name: 'JavaScript', level: 85, icon: 'js' },
  { name: 'TypeScript', level: 80, icon: 'typescript' },
  { name: 'React', level: 85, icon: 'react' },
  { name: 'Next.js', level: 82, icon: 'nextjs' },
  { name: 'Node.js', level: 78, icon: 'node' },
  { name: 'Tailwind CSS', level: 85, icon: 'tailwind' },
  { name: 'Bootstrap', level: 90, icon: 'bootstrap' },
  { name: 'Python + Django', level: 75, icon: 'python' },
  { name: 'PHP + Laravel', level: 70, icon: 'php' },
  { name: 'MySQL', level: 80, icon: 'mysql' },
  { name: 'WordPress', level: 85, icon: 'wordpress' },
  { name: 'Docker', level: 70, icon: 'docker' },
  { name: 'Git & GitHub', level: 90, icon: 'git' },
  { name: 'Figma / UI Design', level: 85, icon: 'figma' },
];

export const services = [
  {
    title: 'Front-End Development',
    description:
      'Visually appealing, user-friendly interfaces built with modern frameworks and pixel-level care.',
    image: '/images/front.avif',
  },
  {
    title: 'Full Stack Development',
    description:
      'End-to-end web applications — robust back-ends, polished front-ends, scalable architecture.',
    image: '/images/full.png',
  },
  {
    title: 'UI/UX Design',
    description:
      'Intuitive, engaging interfaces and experiences that keep users coming back.',
    image: '/images/uiux.webp',
  },
  {
    title: 'WordPress Development',
    description:
      'Custom WordPress sites tailored to your brand with seamless, responsive design.',
    image: '/images/wordpress.png',
  },
  {
    title: 'CMS Systems',
    description:
      'Content management systems that make organizing and publishing effortless.',
    image: '/images/cms.jpeg',
  },
  {
    title: 'Online Programming Courses',
    description:
      'Hands-on tutorials and courses to level up your coding skills, from basics to production.',
    image: '/images/online.jpeg',
  },
  {
    title: 'Web Hosting & Domains',
    description:
      'Reliable hosting, domain purchase and management to establish your online presence.',
    image: '/images/host.png',
  },
  {
    title: 'POS Systems',
    description:
      'Efficient point-of-sale systems that streamline sales and improve customer experience.',
    image: '/images/pos.svg',
  },
];

export const projects = [
  {
    title: 'Reiwasakura',
    description:
      'Company platform of Reiwasakura, where I lead technology as CTO — engineering strategy, product and delivery at reiwasakura.tech.',
    href: 'https://reiwasakura.tech',
    tags: ['CTO', 'Company', 'Platform'],
    image: '/images/reiwasakura-logo.png',
    fit: 'contain',
  },
  {
    title: 'PaiCafes',
    description:
      'A production cafe platform — discovery, ordering and management for cafes, live at paicafes.com.',
    href: 'https://paicafes.com',
    tags: ['Full Stack', 'Production', 'Platform'],
    image: '/images/paicafes.svg',
  },
  {
    title: 'Digital Marketplace MM',
    description:
      'A real-world digital marketplace for Myanmar — products, sellers and secure transactions at digitalmarketplacemm.com.',
    href: 'https://digitalmarketplacemm.com',
    tags: ['E-commerce', 'Marketplace', 'Production'],
    image: '/images/digitalmarketplacemm.svg',
  },
  {
    title: 'Digizens Alliance',
    description:
      'Designed and developed the full UI/UX for the Digizens Alliance website, ensuring optimal user experience and seamless functionality.',
    href: 'https://digizensalliance.org/',
    tags: ['UI/UX', 'Web Design', 'React'],
    image: '/images/uiux.webp',
  },
  {
    title: 'ChatApp',
    description:
      'A private chat application allowing users to communicate securely in real time.',
    href: 'https://chatapp.talkprivate.au.tempcloudsite.com/',
    tags: ['Full Stack', 'Real-time', 'Security'],
    image: '/images/full.png',
  },
  {
    title: 'Portfolio v2',
    description:
      'This site — a premium dark-mode portfolio built with Next.js, focused on performance, accessibility and SEO.',
    href: 'https://techyyfilip.vercel.app',
    tags: ['Next.js', 'SEO', 'Design System'],
    image: '/images/portfolio.jpg',
  },
];

export const experience = [
  {
    title: 'Leadership',
    items: [
      'Chief Technology Officer at Reiwasakura — leading engineering strategy, architecture and delivery.',
      'Chief Technology Officer at New Earth Company Limited — driving product engineering and technical direction.',
      'Shipped real-world production platforms including paicafes.com and digitalmarketplacemm.com.',
    ],
  },
  {
    title: 'Key Achievements',
    items: [
      'Designed and developed UI/UX for two websites, including Digizens Alliance (digizensalliance.org), ensuring optimal user experience and seamless functionality.',
      'Collaborated on a second website project, delivering a comprehensive interface end-to-end.',
      'Built dynamic, interactive components with React, styled with Tailwind CSS and Bootstrap.',
      'Developed secure, scalable back-end systems with PHP and MySQL, including user authentication and data management.',
    ],
  },
  {
    title: 'React Experience',
    items: [
      'Developed multiple single-page applications (SPAs) using React.js.',
      'Implemented state management with Redux and the Context API.',
      'Created reusable components and hooks to streamline development.',
      'Integrated RESTful APIs to fetch and display data dynamically.',
    ],
  },
  {
    title: 'Professional Experience',
    items: [
      'Completed two seaman contracts as a cadet, building teamwork, discipline and execution under pressure.',
      'Deep understanding of logistics, operational processes and problem-solving in fast-paced conditions.',
    ],
  },
  {
    title: 'Education',
    items: [
      'Diploma in Business Information Technology — IT principles, web development and business systems.',
      'Diploma in Human Resources and Project Management — project coordination, collaboration and operations.',
    ],
  },
];
