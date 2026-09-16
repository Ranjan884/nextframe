export interface Project {
  id: string;
  title: string;
  category: string;
  categoryLabel?: string;
  status?: string;
  year?: string;
  summary?: string;
  description: string;
  tags?: string[];
  tools?: string[];
  technologies?: string[];
  keyFeatures?: string[];
  technicalOverview?: string;
  role?: string;
  imageUrl?: string;
  image?: string;
  videoUrl?: string;
  video?: string;
  projectLink?: string;
  previewColor?: {
    accent: string;
    bg: string;
    badge: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  rolesDisplay: string;
  disciplines: string[];
  shortBio: string;
  fullBio: string;
  avatarInitials: string;
  photoUrl?: string;
  coreTools: string[];
  keyStrengths: string[];
  github?: string;
  freelancer?: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
}

export interface WhyUsPoint {
  number: string;
  title: string;
  description: string;
}

export const STUDIO_INFO = {
  name: 'Nextframe',
  label: 'CREATIVE TECHNOLOGY STUDIO',
  tagline: 'WE BUILD DIGITAL EXPERIENCES.',
  heroDescription:
    'Nextframe is a two-person creative technology studio creating websites, applications, games, and visual content.',
  aboutHeadline: 'TECHNOLOGY MEETS CREATIVE THINKING.',
  aboutContent:
    'Nextframe is a two-member creative technology studio built by engineering students who enjoy turning ideas into digital experiences.\n\nOur work combines development, design, motion, and interactive media. We focus on learning, building, and delivering work that is functional, visually engaging, and thoughtfully created.',
  status: 'Open for Freelance Projects',
  location: 'Remote Studio · Available Worldwide',
  
  // Contact Channels
  contact: {
    email: 'r40993674@gmail.com',
    githubUrl: 'https://github.com/boby-raj',
    freelancerUrl: 'https://www.freelancer.com/u/nextframe',
    instagramUrl: 'https://instagram.com/nextframe.studio',
  },
};

export const STUDIO_FACTS = [
  {
    label: '2 Creative Minds',
    detail: 'Ranjan & Mohmed Sami',
  },
  {
    label: 'Development + Design',
    detail: 'Code, UI/UX, Interface & Logic',
  },
  {
    label: 'Open for Projects',
    detail: 'Websites, Apps, APIs & Games',
  },
];

export const PROJECTS: Project[] = [];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Website Development',
    tagline: 'Modern, responsive websites and frontend experiences.',
    description:
      'We build clean, fast, and responsive websites using modern frontend standards. Every page is planned with clear typography, intuitive navigation, and reliable performance across desktop and mobile.',
    deliverables: [
      'Responsive Website Development',
      'Modern Interactive Frontend',
      'Cross-Browser & Mobile Optimization',
      'Clean Semantic Code & Fast Load Times',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5/CSS3'],
  },
  {
    number: '02',
    title: 'Full-Stack Development',
    tagline: 'Functional web applications with frontend and backend development.',
    description:
      'End-to-end web applications connecting clean, responsive user interfaces with structured backend logic, APIs, and data storage for complete, working digital solutions.',
    deliverables: [
      'Full-Stack Application Architecture',
      'RESTful API Development & Integration',
      'Database Schema & Data Persistence',
      'Secure Form Handling & User Flows',
    ],
    techStack: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL / MongoDB', 'REST APIs'],
  },
  {
    number: '03',
    title: 'App Development',
    tagline: 'User-focused mobile and application interfaces.',
    description:
      'Designing and developing mobile and cross-platform app interfaces focused on intuitive navigation, ergonomic touch targets, and clear user journeys.',
    deliverables: [
      'Mobile Application UI & Logic',
      'Cross-Platform App Prototyping',
      'Touch Gesture & Transition Polish',
      'Design System Implementation',
    ],
    techStack: ['React Native', 'Flutter', 'TypeScript', 'Figma'],
  },
  {
    number: '04',
    title: 'API & Cloud Architecture',
    tagline: 'Scalable serverless backends, secure APIs, and cloud services.',
    description:
      'Connecting intuitive user interfaces with robust backend APIs, cloud databases, structured data handling, and third-party services.',
    deliverables: [
      'REST API Endpoints & Architecture',
      'Database Modeling & Cloud Storage',
      'Cloud Deployment & Environment Config',
      'Third-Party API & Webhook Integrations',
    ],
    techStack: ['Node.js', 'Express', 'TypeScript', 'Cloud Databases'],
  },
  {
    number: '05',
    title: 'Game Development',
    tagline: '2D and 3D interactive experiences using Unity and C#.',
    description:
      'Building playable game prototypes and interactive experiences in Unity with robust gameplay mechanics, responsive character controllers, physics, and custom state loops.',
    deliverables: [
      'Core Gameplay Systems & Logic',
      'Kinematic Character Controllers',
      'Physics Interactions & Mechanics',
      'In-Game UI, HUDs & Audio Hooks',
    ],
    techStack: ['Unity Engine', 'C#', 'ProBuilder', 'Visual Studio'],
  },
  {
    number: '06',
    title: 'UI/UX Design',
    tagline: 'Clean, practical, and visually engaging user interfaces.',
    description:
      'Designing clean, practical digital interfaces centered around user convenience, clear visual hierarchy, accessible color contrast, and seamless user journeys.',
    deliverables: [
      'Wireframing & Information Architecture',
      'High-Fidelity Interface Prototypes',
      'Design Systems & Component Libraries',
      'Design-to-Code Translation Specs',
    ],
    techStack: ['Figma', 'UI Architecture', 'Prototyping', 'Design Tokens'],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'ranjan',
    name: 'Ranjan',
    rolesDisplay:
      'Web Developer · Full-Stack Developer · App Developer · Game Developer',
    disciplines: [
      'Web Development',
      'Full-Stack',
      'App Development',
      'Game Development',
    ],
    shortBio:
      'Engineering student and developer combining full-stack programming with responsive interfaces, mobile apps, and game systems.',
    fullBio:
      'Ranjan is an engineering student and versatile developer who builds across web, mobile, and interactive systems. He focuses on clean code structure, modern web platforms, app interfaces, and game mechanics. Passionate about solving technical challenges while maintaining high visual standards.',
    avatarInitials: 'R',
    coreTools: ['React', 'TypeScript', 'Node.js', 'Unity', 'C#', 'Tailwind CSS'],
    keyStrengths: [
      'Full-Stack Web & App Architecture',
      'Clean Code & Component Modularity',
      'Unity Gameplay Mechanics',
      'API & Cloud Integrations',
    ],
    github: 'https://github.com/boby-raj',
    freelancer: 'https://freelancer.com',
  },
  {
    id: 'mohmed-sami',
    name: 'Mohmed Sami',
    rolesDisplay:
      'UI/UX Designer · Creative Director · Frontend Systems',
    disciplines: [
      'UI/UX Design',
      'Creative Direction',
      'Design Systems',
      'Web Development',
    ],
    shortBio:
      'Engineering student and creator focused on UI/UX design systems, responsive web development, and intuitive interfaces.',
    fullBio:
      'Mohmed Sami is an engineering student with a strong focus on interactive user experiences, frontend web engineering, and digital interfaces. He brings aesthetic precision to design systems, user flows, and typography.',
    avatarInitials: 'MS',
    coreTools: ['Figma', 'React', 'TypeScript', 'Tailwind CSS'],
    keyStrengths: [
      'Frontend Interaction Engineering',
      'UI/UX Design Systems & Layout',
      'User Flows & Information Architecture',
      'Visual Consistency & Brand Identity',
    ],
    github: 'https://github.com/boby-raj',
    freelancer: 'https://freelancer.com',
  },
];

export const WHY_US_POINTS: WhyUsPoint[] = [
  {
    number: '01',
    title: 'Clear communication',
    description:
      'We communicate openly, listen carefully to your goals, and ensure expectations are aligned before and during development.',
  },
  {
    number: '02',
    title: 'Creative and technical approach',
    description:
      'We combine software engineering discipline with creative design, delivering work that looks great and functions reliably.',
  },
  {
    number: '03',
    title: 'Attention to detail',
    description:
      'From pixel-perfect spacing and typography to error handling and performance, we care about the small details that make a product polished.',
  },
  {
    number: '04',
    title: 'Responsive and modern design',
    description:
      'Every web layout and digital interface is engineered to look sharp and work smoothly across phones, tablets, and large displays.',
  },
  {
    number: '05',
    title: 'Regular project updates',
    description:
      'You will never be left guessing. We share progress milestones, live staging previews, and work logs consistently.',
  },
  {
    number: '06',
    title: 'Willingness to learn and adapt',
    description:
      'As passionate engineering students, we embrace new tools, respect client feedback, and adapt quickly to specific project requirements.',
  },
  {
    number: '07',
    title: 'Focus on functional deliverables',
    description:
      'We prioritize real, tested, working results—clean code and production-ready assets you can immediately use and build upon.',
  },
];
