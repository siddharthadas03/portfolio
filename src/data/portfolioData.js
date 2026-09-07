export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const educationItems = [
  {
    degree: "Master of Computer Application",
    school: "Kalinga Institute of Industrial Technology",
    range: "2024 - 2026",
    score: "CGPA 8.58 / 10"
  },
  {
    degree: "Bachelor of Computer Application",
    school: "Bankura Unnayani Institute of Engineering",
    range: "2021 - 2024",
    score: "CGPA 8.77 / 10"
  },
  {
    degree: "Higher Secondary Education",
    school: "Kangsabati Sishu Vidyalaya",
    range: "2020 - 2021",
    score: "77.6%"
  },
  {
    degree: "Secondary Education",
    school: "Kangsabati Sishu Vidyalaya",
    range: "2018 - 2019",
    score: "62%"
  }
];

export const skillGroups = [
  {
    title: "Core Languages",
    items: ["Java", "C", "JavaScript", "Python"]
  },
  {
    title: "Frontend Systems",
    items: ["React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Material UI"]
  },
  {
    title: "Backend Engineering",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "API Design"]
  },
  {
    title: "Data Layer",
    items: ["MongoDB", "MySQL", "Schema Design", "CRUD Workflows"]
  },
  {
    title: "Developer Workflow",
    items: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA"]
  }
];

const projectAssetModules = import.meta.glob(
  [
    "../assets/Images/**/*.{png,jpg,jpeg,webp,avif,gif}",
    "../assets/Images/**/*.{mp4,webm,ogg,mov}"
  ],
  {
    eager: true,
    import: "default",
    query: "?url"
  }
);

const getProjectMedia = (folder) => {
  const entries = Object.entries(projectAssetModules)
    .filter(([path]) => path.includes(`/Images/${folder}/`))
    .sort(([firstPath], [secondPath]) =>
      firstPath.localeCompare(secondPath)
    );

  const photos = entries
    .filter(([path]) => /\.(png|jpe?g|webp|avif|gif)$/i.test(path))
    .map(([, src]) => src);

  const videos = entries
    .filter(([path]) => /\.(mp4|webm|ogg|mov)$/i.test(path))
    .map(([, src]) => src);

  return {
    photos,
    videos,
    hero: photos[0] ?? videos[0] ?? ""
  };
};

export const projects = [

  

  {
    slug: "no-plate-empty",
    title: "No Plate Empty",
    strap: "Food rescue and redistribution platform",
    status: "Featured build",
    summary:
      "A community-tech platform for collecting surplus food, matching it with NGOs, and coordinating pickups before meals go to waste.",
    details:
      "Designed around donor onboarding, NGO discovery, pickup tracking, and a clean operations dashboard that makes the redistribution flow easy to manage.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Geo Matching"],
    highlights: [
      "Donor intake and food listing workflow",
      "NGO matching and location-aware coordination",
      "Operational dashboard for requests and delivery status"
    ],
    media: getProjectMedia("noplateemplty"),
      links: {
    live: "https://no-plate-empty-web.onrender.com/",
    github: "https://github.com/siddharthadas03/No-Plate-Empty"

  },
},
  {
    slug: "intellinote",
    title: "IntelliNote",
    strap: "AI-powered collaborative notes platform",
    status: "Latest Project",
    summary:
      "An AI-powered collaborative note-taking platform built for creating, managing, and enhancing notes with intelligent assistance.",
    details:
      "Built with React, Node.js, Express.js, MongoDB Atlas, and Google Gemini API, featuring secure JWT authentication, user-based note management, and scalable RESTful APIs.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT",
      "Google Gemini API"
    ],
    highlights: [
      "Built an AI-powered collaborative notes platform with secure JWT authentication and user-based note management",
      "Implemented structured prompt templates for AI-assisted note generation and summarization using the Google Gemini API",
      "Developed RESTful APIs using Express.js with MongoDB Atlas for scalable backend services",
      "Deployed the application on Render and managed secure environment configuration using environment variables"
    ],
    media: getProjectMedia("intellinote"),
     videoFirst: true,
      links: {
    live: "https://peblo-frontend-3k1b.onrender.com/",
    github: "https://github.com/siddharthadas03/peblo-ai-notes"
  }
  },

  {
    slug: "job-portal",
    title: "Job Portal",
    strap: "Full-stack recruitment experience",
    status: "Production-style project",
    summary:
      "A MERN job platform with authentication, job posting, candidate applications, resume upload, and role-based dashboards.",
    details:
      "Built to handle structured workflows for recruiters and applicants with a focus on practical full-stack flows and backend reliability.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    highlights: [
      "Recruiter and applicant dashboard views",
      "Resume upload and application tracking",
      "Secure authentication with protected routes"
    ],
    media: getProjectMedia("job protal"),
    links: {
    github: "https://github.com/siddharthadas03/Job-Portal",
    },
  },

  {
    slug: "ce-sprint-hub",
    title: "CE-Sprint-Hub",
    strap: "Computer Science interview and exam prep platform",
    status: "Oct 2025 - Dec 2025",
    summary:
      "A student-focused web application featuring 100+ curated Computer Science MCQs for interview and exam preparation.",
    details:
      "Built with timed practice, custom quiz creation, and to-do list management to support structured study planning and faster problem solving.",
    tech: ["HTML5", "CSS3", "JavaScript", "GitHub"],
    highlights: [
      "100+ curated Computer Science MCQs",
      "Timed practice to improve speed and accuracy",
      "Custom quizzes and to-do list planning"
    ],
    media: getProjectMedia("quiz"),
    links: {
    github: "https://github.com/siddharthadas03/CE-Sprint-Hub",
    },
  }

];

export const contactDetails = [
  {
    label: "Email",
    value: "siddharthadas620@gmail.com"
  },
  {
    label: "Phone",
    value: "+91 9832996077"
  },
  {
    label: "Location",
    value: "Bankura, West Bengal, India"
  }
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/siddhartha-das-826783268"
  },
  {
    label: "GitHub",
    href: "https://github.com/siddharthadas03"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/siddharthadas03/"
  }
];
