import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { ProjectModal } from './ProjectModal';
import { ImageWithFallback } from './fallback/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  details: string;
}

interface ProjectsPageProps {
  onBack: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const allProjects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration',
    image: 'https://images.unsplash.com/photo-1677469684112-5dfb3aa4d3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzY3NTYzMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://example.com',
    github: 'https://github.com',
    details: 'A comprehensive e-commerce platform featuring user authentication, product management, shopping cart functionality, and secure payment processing. Built with modern technologies to ensure scalability and performance.',
  },
  {
    id: 2,
    title: 'Certificate Course Data Analytics',
    description: 'Mini Course RevoU - Intro to Data Analytics',
    image: 'img/serti1.png',
    technologies: ['Microsoft Excel','Google Sheets', 'Looker Studio',],
    details: 'Introduction to Data Analyst roles and commonly used tools, Steps for analyzing data and presenting insights, Data cleaning and visualization using Google Sheets and Looker Studio.',
  },
  {
    id: 3,
    title: 'Certificate Course Frontend Web Development',
    description: 'My Skill Short Class - Frontend in Website Development',
    image: 'img/serti2.png',
    technologies: ['HTML', 'CSS','JavaScript', 'VSCode'],
    details: 'Built simple static website with forms using HTML, CSS, and JavaScript.',
  },
  {
    id: 4,
    title: 'Certificate Course UI/UX Design',
    description: 'My Skill Short Class - Design System in UI Design',
    image: 'img/serti3.png',
    technologies: ['Figma', 'Canva'],
    details: 'Designed user interface layouts for website pages.',
  },
];

export function ProjectsPage({ onBack, theme, toggleTheme }: ProjectsPageProps) {
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
                  <p className="text-muted-foreground mb-4">{project.description}</p>
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
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
