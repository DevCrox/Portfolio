import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const timeline = [
  {
    year: "2023 - Present",
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    description: "Leading development of enterprise-scale applications using React, Node.js, and cloud technologies. Mentoring junior developers and driving technical decisions.",
  },
  {
    year: "2021 - 2023",
    title: "Full-Stack Developer",
    company: "Digital Agency Pro",
    location: "New York, NY",
    description: "Built and maintained 20+ client websites and applications. Specialized in React ecosystems and headless CMS integrations.",
  },
  {
    year: "2019 - 2021",
    title: "Frontend Developer",
    company: "StartupHub",
    location: "Austin, TX",
    description: "Developed responsive web applications and contributed to design systems. Collaborated closely with UX designers to implement pixel-perfect interfaces.",
  },
  {
    year: "2015 - 2019",
    title: "Computer Science Degree",
    company: "MIT",
    location: "Cambridge, MA",
    description: "Bachelor's degree in Computer Science with focus on software engineering and human-computer interaction.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">About Me</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From curiosity to expertise — here's my story of building digital experiences
            that make a difference.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="text-8xl">👨‍💻</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience
              crafting digital solutions that blend beautiful design with robust functionality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey started with a fascination for how technology shapes our daily lives.
              Today, I specialize in building scalable web applications using modern frameworks
              like React, Next.js, and Node.js.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge through tech blogs and community talks.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Problem Solver", "Team Player", "Fast Learner", "Detail-Oriented"].map((trait) => (
                <span key={trait} className="tag-pill">{trait}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">Experience & Education</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                      <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
                        <div className="flex items-center gap-2 text-primary mb-2">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm font-medium">{item.year}</span>
                        </div>
                        <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                        <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-3 w-3" />
                            {item.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {item.location}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 mt-6" />

                  {/* Empty Space for opposite side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
