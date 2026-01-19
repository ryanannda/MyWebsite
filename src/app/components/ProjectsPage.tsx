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
    id: 2,
    title: "Installing Arch Linux",
    description: "Installing Arch Linux using ArchInstall",
    image: "img/archlinux.jpg",
    technologies: ["Linux", "Operating System", "Arch Linux", "Hyprland"],
    details: [
      "Installing Arch Linux using Arch Install, and using Hyprland as the windows manager",
    ],
  },

  {
    id: 3,
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
