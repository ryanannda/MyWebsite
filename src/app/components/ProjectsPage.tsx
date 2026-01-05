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
    title: 'Task Management App',
    description: 'Collaborative task management tool for teams',
    image: 'https://images.unsplash.com/photo-1631093441315-a06b9bcbe63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3Njc1NjkxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    link: 'https://example.com',
    details: 'Real-time collaborative task management application with drag-and-drop functionality, team workspaces, and progress tracking. Designed to enhance team productivity and project visibility.',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather tracking with data visualization',
    image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY3NTUyMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React', 'Chart.js', 'OpenWeather API'],
    github: 'https://github.com',
    details: 'Interactive weather dashboard featuring hourly and weekly forecasts, temperature trends, and severe weather alerts. Integrates with multiple weather APIs for accurate data.',
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'Analytics platform for social media insights',
    image: 'https://images.unsplash.com/photo-1707528041466-83a325f01a3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY3NTEzMTk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Next.js', 'PostgreSQL', 'Recharts'],
    link: 'https://example.com',
    details: 'Comprehensive analytics platform for tracking social media performance across multiple platforms. Features include engagement metrics, audience insights, and automated reporting.',
  },
  {
    id: 5,
    title: 'Portfolio CMS',
    description: 'Content management system for portfolios',
    image: 'https://images.unsplash.com/photo-1615220367990-1940567341f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njc1MzQ1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React', 'Sanity', 'TypeScript'],
    github: 'https://github.com',
    details: 'Flexible CMS for managing portfolio content with drag-and-drop page builder, asset management, and customizable templates. Perfect for creatives and agencies.',
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'Mobile-first fitness tracking application',
    image: 'https://images.unsplash.com/photo-1677469684112-5dfb3aa4d3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzY3NTYzMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React Native', 'Redux', 'SQLite'],
    link: 'https://example.com',
    details: 'Cross-platform fitness tracking app with workout logging, nutrition tracking, and progress visualization. Includes social features for motivation and accountability.',
  },
  {
    id: 7,
    title: 'AI Chatbot Platform',
    description: 'Conversational AI platform for customer service',
    image: 'https://images.unsplash.com/photo-1631093441315-a06b9bcbe63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3Njc1NjkxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Python', 'TensorFlow', 'React', 'WebSocket'],
    github: 'https://github.com',
    details: 'Intelligent chatbot platform powered by machine learning for automated customer support. Features natural language processing, sentiment analysis, and conversation analytics.',
  },
  {
    id: 8,
    title: 'Recipe Sharing Community',
    description: 'Social platform for sharing and discovering recipes',
    image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY3NTUyMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Angular', 'Express', 'MongoDB', 'AWS S3'],
    link: 'https://example.com',
    details: 'Community-driven recipe platform with photo sharing, ratings, comments, and ingredient-based search. Users can save favorites and create meal plans.',
  },
  {
    id: 9,
    title: 'Online Learning Platform',
    description: 'E-learning platform with video courses',
    image: 'https://images.unsplash.com/photo-1707528041466-83a325f01a3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY3NTEzMTk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Vimeo API'],
    github: 'https://github.com',
    details: 'Comprehensive e-learning platform with video hosting, quizzes, progress tracking, and certificates. Supports both live and recorded courses with interactive elements.',
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
