export const contact = {
  email: 'pennanagatejaswi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/penna-nagatejaswi-74633a344',
  github: 'https://share.google/McjMhFEcprY6X3h0k',
  location: 'Kanchikacherla',
}

export const personal = {
  name: 'PN.',
  title: 'Final-Year Computer Science Student',
  tagline: 'CODE | LEARN | BUILD | GROW',
  intro:
    'Passionate about building intelligent solutions with AI and modern web technologies. Eager to contribute, learn, and create real-world impact.',
  description:
    'I am a final-year Computer Science student with a strong interest in Artificial Intelligence, Full-Stack Development, and Data Analytics. I enjoy building solutions that solve real-world problems, analyzing data to discover meaningful insights, and continuously learning new technologies. My goal is to contribute to innovative projects, grow as a developer and data professional, and work effectively in a dynamic team.',
  location: contact.location,
  email: contact.email,
  linkedin: contact.linkedin,
  github: contact.github,
  quote: 'Discipline today creates the opportunities tomorrow.',
}

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks = [
  { label: 'LinkedIn', href: contact.linkedin, icon: 'linkedin' },
  { label: 'GitHub', href: contact.github, icon: 'github' },
  { label: 'Email', href: `mailto:${contact.email}`, icon: 'email' },
  { label: 'Portfolio', href: '#home', icon: 'portfolio' },
]

export const infoCards = [
  {
    title: 'Education',
    value: 'B.Tech in Computer Science and Engineering',
    icon: 'education',
  },
  { title: 'Location', value: 'Kanchikacherla', icon: 'location' },
  {
    title: 'Interests',
    value: 'AI, Web Development, Data Analytics, Problem Solving, Technology for Good',
    icon: 'interests',
  },
  { title: 'Goal', value: 'To build impactful solutions\nand grow in a dynamic team.', icon: 'goal' },
]

export const skillGroups = [
  {
    title: 'Programming Languages',
    icon: 'programming',
    skills: ['C', 'Python'],
  },
  {
    title: 'Web Development',
    icon: 'web',
    skills: ['HTML', 'CSS'],
  },
  {
    title: 'Databases',
    icon: 'database',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Tools & Others',
    icon: 'tools',
    skills: ['GitHub', 'VS Code', 'Jupyter Notebook', 'Eclipse'],
  },
  {
    title: 'Data Analytics',
    icon: 'analytics',
    skills: ['Power BI', 'Tableau'],
  },
  {
    title: 'Core Concepts',
    icon: 'concepts',
    skills: ['Data Structures', 'Database Management System (DBMS)'],
  },
]

export const projects = [
  {
    id: 1,
    year: '2026',
    category: 'MERN Stack',
    title: 'Placement Assessment Analysis Portal',
    description:
      'Developed a web-based Placement Assessment Analysis Portal to streamline student assessment management and performance analysis.',
    summary:
      'Web-based placement assessment platform for managing student assessments, tracking progress, and analyzing historical performance through interactive dashboards.',
    features: [
      'Secure role-based authentication',
      'OTP-based email login for students and administrators',
      'Assessment score submission',
      'Student progress tracking',
      'Historical performance analysis',
      'Interactive dashboards',
      'Responsive interface',
      'Centralized placement data management',
      'Deployed on the college server for centralized access',
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    image: '/projects/placement.png',
    video: '',
    liveDemo: 'https://assessmentanalysis.mictech.dpdns.org/',
    github: '',
  },
  {
    id: 2,
    year: '2026',
    category: 'Data Analytics / Machine Learning',
    title: 'AI-Powered Career Path Recommendation System',
    description:
      "Developed an AI-powered recommendation system to suggest personalized career paths based on users' skills, interests, and academic profiles.",
    summary:
      'AI-powered recommendation system that analyzes user skills, interests, and academic profiles to generate personalized career path recommendations.',
    features: [
      'Personalized career recommendations',
      'User skill analysis',
      'Interest-based recommendations',
      'Academic profile analysis',
      'Data preprocessing',
      'Predictive analysis',
      'Machine learning recommendation model',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Machine Learning', 'Data Analytics'],
    image: '/projects/ai%20career.png',
    video: '',
    liveDemo: null,
    github: 'https://github.com/Naga-Tejaswi/AI-Powered-Career-Path-Recommendation-System.git',
    hideDemoPlaceholder: true,
  },
  {
    id: 3,
    year: '2025',
    category: 'Power BI',
    title: 'Amazon Sales Dashboard',
    description:
      'Developed an interactive Power BI dashboard to analyze Amazon sales data and generate actionable business insights.',
    summary:
      'Interactive Power BI dashboard for analyzing Amazon sales data, monitoring KPIs, and generating data-driven business insights.',
    features: [
      'Created dynamic visualizations and KPIs to track sales, revenue, profit, and product performance',
      'Performed data cleaning and transformation using Power Query',
      'Interactive filters',
      'Analytical views to identify important sales trends and support data-driven decision making',
    ],
    technologies: ['Power BI', 'Power Query', 'Data Visualization', 'Dashboard Development'],
    image: '/projects/amazon-sales-dashboard.png',
    video: '/projects/amazon-sales-dashboard.mp4',
    demoVideo: '/projects/amazon-sales-dashboard.mp4',
    liveDemo: '',
    github: '',
  },
  {
    id: 4,
    year: '2025',
    category: 'Python',
    title: 'Calculator',
    description:
      'Developed a professional command-line calculator using Python with modular functions for basic arithmetic operations, input validation, error handling, and a user-friendly menu for repeated calculations.',
    summary:
      'Developed a professional command-line calculator using Python with modular functions for basic arithmetic operations, input validation, error handling, and a user-friendly menu for repeated calculations.',
    features: [
      'Addition',
      'Subtraction',
      'Multiplication',
      'Division',
      'Input validation',
      'Error handling',
      'Loop-based menu for repeated calculations',
      'Modular Python functions',
    ],
    technologies: ['Python'],
    image: '/projects/cal.png',
    video: '',
    liveDemo: '',
    github: 'https://github.com/Naga-Tejaswi/Calculator',
    hideDemoPlaceholder: true,
  },
]

export const experiences = [
  {
    year: '2025',
    period: 'May 2025 – July 2025',
    role: 'Java Full Stack Developer Intern',
    company: 'BlackBucks',
    certificate: '/certificates/blackbucks-java-full-stack.pdf',
    responsibilities: [
      'Developed web applications using HTML, CSS, JSP, Servlets, and SQL.',
      'Implemented CRUD operations and integrated SQL databases.',
      'Built backend functionality with form handling and input validation.',
      'Tested and debugged applications to ensure reliable performance.',
    ],
    technologies: ['Java', 'HTML', 'CSS', 'JSP', 'Servlets', 'SQL'],
  },
  {
    year: '2026',
    period: 'May 2026 – July 2026',
    role: 'Data Analytics Intern',
    company: 'APSSDC',
    certificate: '/certificates/apssdc-data-analytics.pdf',
    responsibilities: [
      'Developed an AI-Powered Career Path Recommendation System using Python.',
      'Performed data preprocessing and exploratory data analysis using Pandas and NumPy.',
      'Built a recommendation model using Scikit-learn and visualized insights with Matplotlib.',
      'Generated personalized career recommendations based on user data and analytical models.',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Data Analytics', 'Machine Learning'],
  },
]

export const achievements = [
  {
    title: 'Second Prize — Poster Presentation',
    event: 'National Mathematics Day',
    organization: 'DVR & Dr. HS MIC College of Technology',
    icon: 'medal',
    featured: true,
  },
  {
    title: 'Second Prize — Poster Presentation',
    event: 'LAKSHYA 2026',
    organization: 'LBRCE',
    detail: 'Topic: Quantum Computing',
    year: '2026',
    icon: 'medal',
    featured: true,
  },
  {
    title: 'National-Level Technical Symposium Participant',
    event: 'JIGNASA 2025',
    organization: 'PSCMR College of Engineering & Technology',
    year: '2025',
    icon: 'trophy',
  },
  {
    title: 'Technical Events, Project Expos & Coding Competitions',
    detail: 'Participated in technical events, project expos, and coding competitions organized by various colleges.',
    icon: 'award',
  },
]

export const leadership = [
  'Project Team Leader — Academic Software Projects',
  'Coordinator — MIC Fest 2026',
]

export const certifications = [
  { name: 'Project Management in C', issuer: 'Infosys Springboard', certificateUrl: '' },
  { name: 'Data Structures & Algorithms', issuer: 'EXCELR', certificateUrl: '' },
  { name: 'HTML5 – The Language', issuer: 'Infosys Springboard', certificateUrl: '' },
  { name: 'SQL Certification', issuer: 'HackerRank', certificateUrl: '' },
  { name: 'Power BI', issuer: 'OfficeMaster', certificateUrl: '' },
  { name: 'Industrial 4.0 & IoT', issuer: 'NPTEL', certificateUrl: '' },
  { name: 'Yuva AI for All', issuer: 'Skill India', certificateUrl: '' },
  { name: 'Data Analytics Job Simulation', issuer: 'Deloitte', certificateUrl: '' },
]

export const workshops = [
  {
    title: 'Power BI Workshop',
    description: 'Data Visualization and Dashboard Development',
    icon: 'chart',
  },
  {
    title: 'Artificial Intelligence Tools Workshop',
    description: 'Exploring Modern AI Applications',
    icon: 'ai',
  },
  {
    title: 'SQL Workshop',
    organization: 'Codegnan',
    icon: 'database',
  },
  {
    title: 'Quantitative Aptitude Workshop',
    organization: 'Codegnan',
    icon: 'calculator',
  },
]

export const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] 
