import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Database,
  Layout,
  Network,
  Briefcase,
  Sparkles,
  Monitor,
  User,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  GraduationCap,
} from "lucide-react";
import { Navbar } from "./components/Navbar";
import { ProjectsPage } from "./components/ProjectsPage";
import { ProjectModal } from "./components/ProjectModal";
import { ImageWithFallback } from "./components/fallback/ImageWithFallback";
import { Button } from "./components/ui/button";
import TypingText from "./components/TypingText";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  details: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Fullstack Website CMS",
    description:
      "A modern full stack Blog Content Management System built with React, TypeScript, Node.js, Express, and PostgreSQL.",
    image: "img/blog.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
    details: [
      "Full-stack blog application with role-based access (Admin & User)",
      "Admin panel for creating, editing, deleting, and managing blog posts",
      "Public blog page with article listing, search, and sorting (newest & oldest)",
      "Detailed article view with image parsing and fullscreen image preview modal",
      "Nested comment system with replies and role-based permissions",
      "Users can add, edit, and reply to their own comments",
      "Admin can edit and delete any comment",
      "Comment sorting based on newest and oldest while keeping reply structure",
      "Responsive UI optimized for desktop and mobile devices",
      "Modern and clean interface built with reusable UI components",
    ],
    link: "https://youtu.be/W3swJP6qcIA",
    github: "https://github.com/ryanannda/Blog",
  },

  {
    id: 2,
    title: "Template React & TailwindCSS",
    description:
      "React + Tailwind CSS starter template for building modern and responsive web applications",
    image: "img/template.png",
    technologies: ["TypeScript", "React", "TailwindCSS", "Frontend"],
    details: [
      "Template React TailwindCSS is a modern and scalable frontend starter template built with React and Tailwind CSS. This project is designed to help developers quickly bootstrap clean, responsive, and maintainable user interfaces without worrying about initial setup and architecture",
      "The template follows a modular component-based structure, making it easy to extend, customize, and reuse UI elements across different projects. It includes a collection of pre-built sections such as navigation bars, hero sections, typography showcases, tables, forms, and footers—allowing developers to focus more on product logic and user experience rather than repetitive UI work",
      "Styling is handled using Tailwind CSS, enabling rapid design iteration with utility-first classes while maintaining consistency through shared theme variables. The project also implements a Theme Context using React Context API, providing a clean foundation for theme management (such as light/dark mode or custom color schemes)",
    ],
    github: "https://github.com/ryanannda/Template-React-TailwindCSS",
  },

  {
    id: 3,
    title: "Cleanova Home Care Website",
    description: "Website Global Cargo & Logistics Solutions",
    image: "img/cleanova.png",
    technologies: [
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "JavaScript",
      "Responsive Web Design",
      "Frontend Development",
    ],
    details: [
      "Professional home and office cleaning service website for Cleanova Home Care.",
      "Features service listings, pricing plans, team profiles, customer testimonials, and contact form.",
      "Designed to help customers easily explore services and request cleaning appointments.",
      "Focused on clean UI, trust-building layout, and mobile-responsive experience.",
    ],
    link: "https://ryanannda.github.io/Cleanova-Home-Cleaner/",
    github: "https://github.com/ryanannda/Cleanova-Home-Cleaner",
  },

  {
    id: 4,
    title: "Website Global Cargo",
    description: "Modern Responsive Website Cargo",
    image: "img/web_cargo.png",
    technologies: ["TypeScript", "React", "TailwindCSS", "Frontend"],
    details: [
      "Professional cargo, freight forwarding, and export-import logistics services. Air, sea, and land freight with worldwide coverage, real-time tracking, and competitive rates.",
    ],
    link: "https://global-freight-hub.vercel.app/",
  },

  {
    id: 5,
    title: "Coffe Website",
    description: "Responsive Desing Coffe Website (frontend-only)",
    image: "img/coffee.png",
    technologies: [
      "React Vite",
      "Typescript",
      "TailwindCSS",
      "Javascript",
      "Responsive Web Design",
      "Frontend Development",
    ],
    details: [
      "Professional and responsive design Coffe Website",
      "Features Story, Menu, Gallery, Cutomer Testimonials, Location, and Contact",
      "Created to help with online ordering without any hassle",
      "Focused on clean UI, trust-building layout, and mobile-responsive experience.",
    ],
    link: "https://coffeewebsite-topaz.vercel.app/",
    github: "https://github.com/ryanannda/Responsivecoffeewebsite",
  },

  {
    id: 6,
    title: "Mobile E-commerce Design UI/UX",
    description: "Mobile E-commerce Design UI/UX",
    image: "img/UiUx.png",
    technologies: ["Figma", "Canva", "Photoshop"],
    details: [
      "Mobile E-commerce Design UI/UX using Figma, Canva, and Photoshop",
    ],
    link: "https://www.figma.com/design/7EBDhEwRRAsPvplOo5DUSR/E-commercec?node-id=0-1&t=aoSmh6aPqEcQnmIy-1",
  },
];

const skills = [
  { name: "Web Development", icon: Layout, level: 90 },
  { name: "Hardware & Software Computer", icon: Monitor, level: 95 },
  { name: "Network", icon: Network, level: 80 },
  { name: "Office", icon: Database, level: 85 },
];

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [showProjectsPage, setShowProjectsPage] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  if (showProjectsPage) {
    return (
      <ProjectsPage
        onBack={() => setShowProjectsPage(false)}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl mb-6">
                Hi, I'm{" "}
                <span className="text-green-600 dark:text-green-400">
                  Riyan Ananda Pradipta
                </span>
              </h1>
              <h2 className="mb-4 text-foreground/80">
                <TypingText />
              </h2>
              <p className="text-muted-foreground mb-8">
                I have expertise in building technology-based digital solutions
                with experience in more than 10+ projects, with a focus on
                efficiency, scalability, and continuous improvement.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  View Projects
                </Button>

                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/cv/CV_Riyan Ananda P_IT.pdf";
                    link.download = "CV_Riyan Ananda P_IT.pdf";
                    link.click();
                  }}
                  className="px-4 py-1 rounded-sm border font-semibold transition text-sm
                  border-green-600 text-green-600 hover:text-green-800
                  hover:bg-green-600/10"
                >
                  Download CV
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute
                  w-[380px] h-[380px] md:w-[410px] md:h-[410px]
                  rounded-full bg-primary/55 blur-3xl
                  animate-soft-glow
                  top-1/2 left-1/2
                  -translate-x-1/2 -translate-y-1/2
                  z-0"
                ></div>

                <div
                  className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-full 
                                border-[6px] border-primary shadow-xl overflow-hidden z-10"
                >
                  <img
                    src="/img/pfp.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover transform scale-x-[-1]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-center">About Me</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <ImageWithFallback
                  src="https://i.pinimg.com/736x/7c/71/b2/7c71b2306e6992c222bfe80c9a835a31.jpg"
                  alt="About me"
                  className="rounded-lg w-full h-96 object-cover"
                />
              </div>
              <div>
                <h3 className="mb-4">Personal Details</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-green-600 dark:text-green-400">
                      Name:
                    </span>
                    <span className="text-foreground">
                      Riyan Ananda Pradipta
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-600 dark:text-green-400">
                      Date of Birth:
                    </span>
                    <span className="text-foreground">September 15, 2002</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-600 dark:text-green-400">
                      Email:
                    </span>
                    <span className="text-foreground">ryanannda@gmail.com</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-600 dark:text-green-400">
                      Address:
                    </span>
                    <span className="text-foreground">Depok, West Java</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-600 dark:text-green-400">
                      Education:
                    </span>
                    <span className="text-foreground">
                      Indrapsta PGRI University (UNINDRA), East Jakarta -
                      Indonesia
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-600 dark:text-green-400">
                      Major:
                    </span>
                    <span className="text-foreground">
                      B.S. Computer Science, Informatics Engineering
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground mt-6 leading-relaxed">
                  A Computer Engineering graduate with skills in Web Development
                  and advanced knowledge of computer systems, Experienced in
                  developing web applications, managing databases, and utilizing
                  Microsoft Office. Highly adaptable to new technologies with a
                  strong enthusiasm for continuous learning.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600/10 rounded-full mb-4">
                  <Briefcase className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-green-600 dark:text-green-400 mb-2">10+</h2>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600/10 rounded-full mb-4">
                  <User className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-green-600 dark:text-green-400 mb-2">5+</h2>
                <p className="text-muted-foreground">Client</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600/10 rounded-full mb-4">
                  <Sparkles className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-green-600 dark:text-green-400 mb-2">1+</h2>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600/10 rounded-full mb-4">
                  <GraduationCap className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-green-600 dark:text-green-400 mb-2">5+</h2>
                <p className="text-muted-foreground">Course Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-center">My Experience</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-12"></div>

            <div className="space-y-6 max-w-5xl mx-auto">
              {/* Experience 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-background border border-border rounded-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="font-semibold">
                      Personal Project Website – Portfolio
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Personal Project
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                    Nov 2025 – Present
                  </span>
                </div>

                <h4 className="mb-2 text-green-600 dark:text-green-400 font-medium">
                  Key Responsibilities
                </h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    Designed and developed a personal portfolio website to
                    showcase projects, skills, and experience
                  </li>
                  <li>
                    Built the application using React with Vite for fast and
                    optimized development
                  </li>
                  <li>
                    Implemented responsive and modern UI using Tailwind CSS
                  </li>
                  <li>
                    Utilized Node.js for project setup, tooling, and development
                    workflow
                  </li>
                  <li>
                    Managed source code using Git for version control and
                    collaborative best practices
                  </li>
                  <li>
                    Deployed the portfolio website to a production environment
                    and handled continuous updates
                  </li>
                </ul>
              </motion.div>

              {/* Experience 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-background border border-border rounded-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="font-semibold">
                      Computer IT Support – Freelance
                    </h3>
                    <p className="text-muted-foreground text-sm">Client</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                    Jun 2025 - Sept 2025
                  </span>
                </div>

                <h4 className="mb-2 text-green-600 dark:text-green-400 font-medium">
                  Key Responsibilities
                </h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    Provides computer installation, configuration, and
                    maintenance services for several clients.{" "}
                  </li>
                  <li>
                    Troubleshoots hardware and software (Windows OS, drivers,
                    applications, and peripherals).
                  </li>
                  <li>
                    Performs operating system reinstallation, software
                    configuration, and device performance optimization.
                  </li>
                  <li>Assembles and upgrades PCs according to user needs.</li>
                  <li>
                    Ensures all devices are functioning stably and ready for
                    use.
                  </li>
                </ul>
              </motion.div>

              {/* Experience 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-background border border-border rounded-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="font-semibold">IT Support – Intern</h3>
                    <p className="text-muted-foreground text-sm">
                      Yayasan Indonesia Sejahtera Amanah
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                    Feb 2025 – Apr 2024
                  </span>
                </div>

                <h4 className="mb-2 text-green-600 dark:text-green-400 font-medium">
                  Key Responsibilities
                </h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    Identify and resolve network, server, and computer system
                    issues.
                  </li>
                  <li>
                    Perform technical troubleshooting and system repairs to
                    ensure smooth operations.
                  </li>
                  <li>
                    Perform system repairs and adjustments based on internal
                    user needs.
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-center">My Skills</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background p-6 rounded-lg border border-border"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-green-600/10 rounded-lg">
                      <skill.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1">{skill.name}</h3>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full bg-green-600"
                          />
                        </div>
                        <span className="text-green-600 dark:text-green-400">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="mb-6 text-center">Technologies I Work With</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "React",
                  "Node.js",
                  "Next.js",
                  "Tailwind CSS",
                  "MySQL",
                  "PostgreSQL",
                  "Git",
                  "Figma",
                  "Canva/Photoshop",
                  "Operating Systems",
                  "Hardware Troubleshooting",
                  "Windows/Linux",
                  "LAN",
                  "DNS/VPN",
                  "Router Config",
                  "Microsoft Word",
                  "Microsoft Excel",
                  "Microsoft PowerPoint",
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-green-600/10 text-green-700 dark:text-green-400 rounded-full"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-center">Featured Projects</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-green-600/10 text-green-700 dark:text-green-400 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button
                onClick={() => setShowProjectsPage(true)}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                View More Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-center">Contact Me</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-12"></div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-background rounded-lg border border-border"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600/10 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="mb-2">Email</h3>
                <a
                  href="mailto:ryanannda@gmail.com"
                  className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  ryanannda@gmail.com
                </a>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-background rounded-lg border border-border"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600/10 rounded-full mb-4">
                  <Phone className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="mb-2">Phone/WhatsApp</h3>
                <a
                  href="https://wa.me/6281398340849?text=Hello%2C%20I%20hope%20this%20message%20finds%20you%20well.%0AI%20came%20across%20your%20profile%20and%20would%20love%20to%20discuss%20a%20potential%20collaboration%20or%20work%20opportunity.%0APlease%20let%20me%20know%20if%20you%20are%20available.%20Thank%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  (+62) 81398340849
                </a>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-background rounded-lg border border-border"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600/10 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="mb-2">Location</h3>
                <p className="text-muted-foreground">
                  Depok, West Java, Indonesia
                </p>
              </motion.div>
            </div>

            <div className="flex justify-center gap-6 mt-12">
              <a
                href="https://github.com/ryanannda"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-600/10 rounded-full hover:bg-green-600 hover:text-white text-green-600 dark:text-green-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ryanannda/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-600/10 rounded-full hover:bg-green-600 hover:text-white text-green-600 dark:text-green-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8  bg-muted/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Riyan Ananda Pradipta. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
