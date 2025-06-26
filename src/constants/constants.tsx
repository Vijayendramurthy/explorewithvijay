export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Food Delivery Web Application',
    desc: 'Built a full-stack food delivery website using the MERN stack, enabling users to browse menus, place orders, and track deliveries.',
    subdesc: 'Implemented responsive UI with React.js, RESTful APIs with Node.js and Express.js, and integrated MongoDB for efficient data management and CRUD operations.',
    href: '#',
    logo: '/assets/fooddelivery.png',
    logoStyle: {
      backgroundColor: '#1D3557',
      border: '0.2px solid #1D3557',
      boxShadow: '0px 0px 60px 0px #1D35577D',
    },
    spotlight: '/assets/spotlight3.png',
    background: '/assets/01.svg',
    tags: [
      { id: 1, name: 'MongoDB', path: '/assets/icons/mongodb.svg' },
      { id: 2, name: 'Express.js', path: '/assets/icons/icons8-express-js.svg' },
      { id: 3, name: 'React.js', path: '/assets/react.svg' },
      { id: 4, name: 'Node.js', path: '/assets/icons/icons8-node-js.svg' },
    ],
  },
  {
    title: "Waiter Tips Prediction",
    desc: 'A regression-based machine learning project to predict tips using Python and Jupyter.',
    subdesc: 'Integrated linear and non-linear models with feature engineering, preprocessing, and hyperparameter tuning.',
    href: '#',
    logo: '/assets/tips.png',
    logoStyle: {
      backgroundColor: '#2B2D42',
      border: '0.2px solid #2B2D42',
      boxShadow: '0px 0px 60px 0px #2B2D427D',
    },
    spotlight: '/assets/spotlight2.png',
    background: '/assets/02.svg',
    tags: [
      { id: 1, name: 'Python', path: '/assets/icons/icons8-python.svg' },
      { id: 2, name: 'Jupyter', path: '/assets/icons/jupyter.svg' },
    ],
  },
  {
    title: 'College Management Website',
    desc: 'A MERN-based web application to streamline college administration and student management.',
    subdesc: 'Features include student registration, event tracking, academic performance monitoring, and announcements.',
    href: '#',
    logo: '/assets/college.png',
    logoStyle: {
      backgroundColor: '#264653',
      border: '0.2px solid #264653',
      boxShadow: '0px 0px 60px 0px #2646537D',
    },
    spotlight: '/assets/spotlight1.png',
    background: '/assets/03.svg',
    tags: [
      { id: 1, name: 'MongoDB', path: '/assets/icons/mongodb.svg' },
      { id: 2, name: 'Express.js', path: '/assets/icons/icons8-express-js.svg' },
      { id: 3, name: 'React.js', path: '/assets/react.svg' },
      { id: 4, name: 'Node.js', path: '/assets/icons/icons8-node-js.svg' },
    ],
  },
];

export const education = [
  {
    id: 1,
    name: 'SRKR Engineering College, Bhimavaram',
    pos: 'Bachelor of Technology, Computer Science & Engineering',
    duration: '2022 - 2026',
    title:
      'Currently pursuing B.Tech in Computer Science and Engineering with 8.9 CGPA, focusing on Software Development, Web Technologies, and Machine Learning.',
    icon: '/assets/srkrlogo.png',
  },
  {
    id: 2,
    name: 'Tirumala Junior College, Bhimavaram',
    pos: 'Intermediate, MPC',
    duration: '2020 - 2022',
    title:
      'Completed Intermediate with 95.4%, focusing on core science subjects including Mathematics, Physics, and Chemistry.',
    icon: '/assets/tirumala.png',
  },
  {
    id: 3,
    name: 'Sri Chaitanya Techno School, Bhimavaram',
    pos: 'High School, State Board',
    duration: '2019 - 2020',
    title:
      'Graduated with 10 CGPA, building a strong academic foundation in mathematics and science.',
    icon: '/assets/srichaitanya.png',
  },
];

export const Texts = [
  'Full-Stack Developer',
  'UI/UX Designer',
  'Tech Enthusiast',
  'Web Developer',
  'AI/ML Enthusiast',
  'Tech Explorer',
];
