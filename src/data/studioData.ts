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
  linkedin?: string;
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
  
  // Contact Placeholders (easily replaceable)
  contact: {
    email: 'hello@nextframe.studio',
    whatsapp: '+1 (000) 000-0000',
    whatsappClean: '10000000000',
    freelancerUrl: 'https://www.freelancer.com/u/nextframe',
    linkedinUrl: 'https://www.linkedin.com/company/nextframe-studio',
    githubUrl: 'https://github.com/nextframe-studio',
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
    detail: 'Code, 3D, Motion & Logic',
  },
  {
    label: 'Open for Projects',
    detail: 'Websites, Apps, 3D & Games',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'aquatrack',
    title: 'AQUATRACK',
    category: 'Web Development / UI Design',
    categoryLabel: 'Web & Interface Design',
    status: 'Personal Project',
    year: '2025',
    summary:
      'A water-awareness platform designed to help users understand and track water consumption through an interactive digital experience.',
    description:
      'AquaTrack was conceptualized as a clean, civic-utility digital platform. It transforms abstract water consumption metrics into practical everyday telemetry—such as shower durations, domestic leak evaluations, and conservation benchmarks—paired with intuitive visual meters.',
    tags: ['Web Development', 'UI Design', 'React', 'Data Visualizer', 'Clean UI'],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Interactive Charts'],
    keyFeatures: [
      'Interactive domestic water usage calculator and estimation engine',
      'Daily and monthly consumption visual benchmarking graphs',
      'Diagnostic quiz for household fixtures and potential water leaks',
      'Responsive, high-contrast interface designed for quick mobile tracking',
    ],
    technicalOverview:
      'Architected with clean React state management and lightweight visual components. Employs SVG gauges and responsive CSS layout systems for instant client-side calculations with zero lag.',
    role: 'Frontend Engineering, UI Architecture & Interface Design',
    previewColor: {
      accent: '#0066FF',
      bg: '#f0f7ff',
      badge: '#dbeafe',
    },
  },
  {
    id: 'game-development',
    title: 'GAME DEVELOPMENT',
    category: 'Unity / C# / 2D & 3D',
    categoryLabel: 'Interactive Game Prototype',
    status: 'In Development',
    year: '2025',
    summary:
      'Interactive game experiences developed with gameplay systems, creative mechanics, and custom visual assets.',
    description:
      'Prototyping responsive gameplay systems in Unity with C#, focusing on tight character controls, physics interactions, modular game states, and custom low-poly visual assets crafted in Blender.',
    tags: ['Unity', 'C#', '2D & 3D', 'Physics Systems', 'Custom Assets'],
    tools: ['Unity Engine', 'C#', 'Blender', 'ProBuilder', 'Visual Studio'],
    keyFeatures: [
      'Responsive kinematic player controller with multi-directional physics movement',
      'Modular state-machine architecture for game loops and enemy awareness',
      'Custom 3D environmental props and lighting setups built from scratch',
      'Interactive UI HUD with smooth health, stamina, and objective tracking',
    ],
    technicalOverview:
      'Written in clean, decoupled C# scripts adhering to component-based architecture and ScriptableObject data containers for easy parameter tuning.',
    role: 'Gameplay Programming, Systems Logic & 3D Asset Integration',
    previewColor: {
      accent: '#10b981',
      bg: '#f0fdf4',
      badge: '#dcfce7',
    },
  },
  {
    id: 'web-experiences',
    title: 'WEB EXPERIENCES',
    category: 'Frontend / Full-Stack Development',
    categoryLabel: 'Interactive Web Platforms',
    status: 'Personal Project',
    year: '2024 - 2025',
    summary:
      'Modern responsive websites and web experiences focused on clean interfaces and smooth interactions.',
    description:
      'A collection of crafted frontend web solutions exploring modern layouts, kinetic typographic hierarchy, interactive canvas math, and responsive design systems that load instantly across all devices.',
    tags: ['Frontend', 'Full-Stack', 'TypeScript', 'Responsive', 'Performance'],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5 Canvas', 'REST APIs'],
    keyFeatures: [
      'Fluid, mathematical grid layouts responsive from mobile screens to 4K displays',
      'Subtle, hardware-accelerated interactive canvas visuals responding to user input',
      'Accessible semantic structure with zero layout shifts or unnecessary bloat',
      'High-contrast typography tuned for effortless readability and scanning',
    ],
    technicalOverview:
      'Built using modern Vite and TypeScript toolchains with modular component structures, optimized asset bundling, and clean separation of concerns.',
    role: 'Creative Frontend Development, UI/UX Engineering & Performance',
    previewColor: {
      accent: '#6366f1',
      bg: '#f5f3ff',
      badge: '#ede9fe',
    },
  },
  {
    id: '3d-motion',
    title: '3D & MOTION',
    category: 'Blender / Photoshop / Video Editing',
    categoryLabel: 'Visual Assets & Video',
    status: 'Selected Work',
    year: '2024 - 2025',
    summary:
      '3D assets, motion visuals, edited videos, and creative digital content.',
    description:
      'Visual production work spanning hard-surface 3D models, clean product compositions, dynamic video edits with precise rhythm and pacing, and high-impact digital graphics.',
    tags: ['Blender', 'Photoshop', 'Video Editing', 'Motion Graphics', 'Visual Design'],
    tools: ['Blender', 'Adobe Photoshop', 'Premiere Pro', 'After Effects'],
    keyFeatures: [
      'Hard-surface 3D geometric modeling with clean topology and studio lighting',
      'Custom procedural shaders for realistic surface finishes and metallic reflections',
      'Dynamic video cutting, pace alignment, and synchronized sound design',
      'Sharp promotional graphic compositions and digital asset exports',
    ],
    technicalOverview:
      'Rendered in Blender Cycles and EEVEE with optimized light paths; video assets edited in Premiere Pro with customized color curves and audio mastering.',
    role: '3D Modeling, Texturing, Lighting, Video Editing & Motion Graphics',
    previewColor: {
      accent: '#8b5cf6',
      bg: '#faf5ff',
      badge: '#f3e8ff',
    },
  },
];

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
    title: 'Video Editing',
    tagline: 'Clean video editing, creative cuts, and visual storytelling.',
    description:
      'Engaging video production focused on clean pacing, creative transitions, rhythmic audio synchronization, and visual storytelling that commands attention.',
    deliverables: [
      'Product & Showcase Video Reels',
      'YouTube & Social Media Content Editing',
      'Audio Synchronization & Sound Design',
      'Color Correction & Final Export Delivery',
    ],
    techStack: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Audition'],
  },
  {
    number: '05',
    title: '3D & 2D Design',
    tagline: 'Digital assets, 3D elements, compositions, and design work.',
    description:
      'Crafting custom 3D models, digital props, graphic compositions, and 2D design elements that give your brand and digital products an authentic, distinctive visual edge.',
    deliverables: [
      'Custom 3D Models & Props',
      'Realistic Studio Lighting & Materials',
      '2D Graphic Compositions & Banners',
      'Optimized Assets for Web & Games',
    ],
    techStack: ['Blender', 'Adobe Photoshop', 'Illustrator', 'glTF/GLB'],
  },
  {
    number: '06',
    title: 'Game Development',
    tagline: '2D and 3D interactive experiences using Unity and C#.',
    description:
      'Building playable game prototypes and interactive experiences in Unity with robust gameplay mechanics, responsive character controllers, physics, and custom assets.',
    deliverables: [
      'Core Gameplay Systems & Logic',
      'Kinematic Character Controllers',
      'Physics Interactions & Mechanics',
      'In-Game UI, HUDs & Audio Hooks',
    ],
    techStack: ['Unity Engine', 'C#', 'Blender', 'ProBuilder'],
  },
  {
    number: '07',
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
      'Web Developer · Full-Stack Developer · App Developer · Video Editor · 3D/2D Designer · Game Developer',
    disciplines: [
      'Web Development',
      'Full-Stack',
      'App Development',
      'Video Editing',
      '3D/2D Design',
      'Game Development',
    ],
    shortBio:
      'Engineering student and developer combining full-stack programming with 3D design, mobile apps, and video editing.',
    fullBio:
      'Ranjan is an engineering student and versatile developer who builds across web, mobile, and digital media. He focuses on clean code structure, modern web platforms, app interfaces, custom 3D elements, and video editing. Passionate about solving technical challenges while maintaining high visual standards.',
    avatarInitials: 'R',
    coreTools: ['React', 'TypeScript', 'Node.js', 'Unity', 'C#', 'Blender', 'Premiere Pro', 'Photoshop'],
    keyStrengths: [
      'Full-Stack Web & App Architecture',
      'Clean Code & Component Modularity',
      '3D Prop Modeling & Lighting',
      'Video Rhythm & Visual Storytelling',
    ],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    freelancer: 'https://freelancer.com',
  },
  {
    id: 'mohmed-sami',
    name: 'Mohmed Sami',
    rolesDisplay:
      'Web Developer · Video Editor · 3D/2D Designer · Game Developer',
    disciplines: [
      'Web Development',
      'Video Editing',
      '3D/2D Design',
      'Game Development',
    ],
    shortBio:
      'Engineering student and creator focused on responsive web development, Unity game mechanics, and motion content.',
    fullBio:
      'Mohmed Sami is an engineering student with a strong focus on interactive web experiences, Unity gameplay programming, and creative multimedia. He brings technical curiosity to game development with C#, frontend web engineering, and motion design.',
    avatarInitials: 'MS',
    coreTools: ['React', 'TypeScript', 'Tailwind CSS', 'Unity', 'C#', 'Blender', 'Photoshop', 'After Effects'],
    keyStrengths: [
      'Frontend Interaction Engineering',
      'Unity C# Gameplay Mechanics',
      'Visual Asset Creation & 3D Layout',
      'Motion Design & Creative Video Cuts',
    ],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
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
