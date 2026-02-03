import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Web App", "Mobile", "Discord Bot", "Open Source"];

const projects = [
    {
    id: 1,
    title: "Restorino",
    description: "A role-based web platform connecting tourists with local restaurants in Agadir. Users can explore menus, reviews, and participate in food challenges, while restaurant owners and administrators manage content through dedicated dashboards.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
    category: "Web App",
    tech: ["HTML", "CSS", "JavaScript", "Flask", "MySQL"],
    github: "https://github.com/DevCrox/Restorino",
    demo: "",
    featured: true,
  },
  {
    id: 2,
    title: "LinkFilter",
    description: "A Discord moderation bot designed to filter messages by allowing only Tenor GIF links while blocking all other URLs. Includes configurable rules and a premium feature set focused on server safety and content control.",
    image: "https://images.unsplash.com/photo-1762278804798-dd7e493db051?w=800&h=600&fit=crop",
    category: "Discord Bot",
    tech: ["Python", "Discord.py"],
    github: "https://github.com/DevCrox/LinkFilter",
    demo: "",
    featured: false,
  },
  {
    id: 3,
    title: "Password Generator App",
    description: "An efficient lightweight password generator app.",
    image: "https://images.unsplash.com/photo-1724204400857-affda14e4927?w=800&h=600&fit=crop",
    category: "Desktop App",
    tech: ["Python"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium mb-4 block">My Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building
            exceptional digital experiences.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`group relative bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-medium transition-all duration-300 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/50 backdrop-blur-sm">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="rounded-full group">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
