import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { ProjectModal } from "./ProjectModal";
import { ImageWithFallback } from "./fallback/ImageWithFallback";

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

interface ProjectsPageProps {
  onBack: () => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const allProjects: Project[] = [
  // {
  //   id: 1,
  //   title: 'E-Commerce Platform',
  //   description: 'A full-stack e-commerce solution with payment integration',
  //   image: 'https://images.unsplash.com/photo-1677469684112-5dfb3aa4d3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzY3NTYzMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  //   technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  //   link: 'https://example.com',
  //   github: 'https://github.com',
  //   details: 'A comprehensive e-commerce platform featuring user authentication, product management, shopping cart functionality, and secure payment processing. Built with modern technologies to ensure scalability and performance.',
  // },
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

  {
    id: 7,
    title: "Geometri Dash Hand Gesture",
    description:
      "Endless runner game controlled by real-time hand gestures using MediaPipe Hands and webcam ",
    image: "img/gmetri.png",
    technologies: ["Javascript", "MediaPipe", "HTML", "WebcamAPI", "CSS"],
    details: [
      "GMetri Dash – Hand Control is a browser-based endless runner game inspired by Geometry Dash, but with a twist: You control the game using real hand gestures via your webcam. Jump, dodge obstacles, and restart the game using simple hand movements powered by MediaPipe Hands.",
    ],
    link: "https://gmetri.ryanannda.my.id/",
    github: "https://github.com/ryanannda/Geometri-Dash-Hand-Gesture",
  },

  {
    id: 8,
    title: "Installing Arch Linux",
    description: "Installing Arch Linux using ArchInstall",
    image: "img/archlinux.jpg",
    technologies: ["Linux", "Operating System", "Arch Linux", "Hyprland"],
    details: [
      "Installing Arch Linux using Arch Install, and using Hyprland as the windows manager",
    ],
  },

  {
    id: 9,
    title: "Assembling a Personal Computer",
    description:
      "Assemble every part of the computer starting from installing the processor to the motherboard, installing RAM, AIO CPU Fan Cooling, GPU, PSU, and neat cable management.",
    image: "img/rakitpc1.png",
    technologies: ["Hardware Computer"],
    details: [
      "Processor: i5-12400F",
      "Motherboard: ASRock B660M Pro RS",
      "RAM: Team Create Classic 2x8GB 3200MHz",
      "GPU: Zotac RTX 4060 Ti 8GB",
      "PSU: Adata Pylon 650W 80+ Bronze",
      "SSD: M.2 NVME Team Group MP33 Gen 3x4 512GB",
      "Case: VenomRX Free Sky",
      "Fan: Segotep HB-12 120mm x7 (4 Reverse, 3 Exhaust)",
      "Fan CPU: Aigo DarkFlash 240mm",
    ],
  },
  {
    id: 10,
    title: "Certificate Course Data Analytics",
    description: "Mini Course RevoU - Intro to Data Analytics",
    image: "img/serti1.png",
    technologies: ["Microsoft Excel", "Google Sheets", "Looker Studio"],
    details: [
      "Introduction to Data Analyst roles and commonly used tools, Steps for analyzing data and presenting insights, Data cleaning and visualization using Google Sheets and Looker Studio.",
    ],
  },
  {
    id: 11,
    title: "Certificate Course Frontend Web Development",
    description: "My Skill Short Class - Frontend in Website Development",
    image: "img/serti2.png",
    technologies: ["HTML", "CSS", "JavaScript", "VSCode"],
    details: [
      "Built simple static website with forms using HTML, CSS, and JavaScript.",
    ],
  },
  {
    id: 12,
    title: "Certificate Course UI/UX Design",
    description: "My Skill Short Class - Design System in UI Design",
    image: "img/serti3.png",
    technologies: ["Figma", "Canva"],
    details: ["Designed user interface layouts for website pages."],
  },
];

export function ProjectsPage({
  onBack,
  theme,
  toggleTheme,
}: ProjectsPageProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-4">All Projects</h1>
          <p className="text-muted-foreground mb-12">
            Explore my complete portfolio of projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-green-600/10 text-green-700 dark:text-green-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-muted-foreground">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
