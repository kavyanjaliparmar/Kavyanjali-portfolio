import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Terminal, Brain, Code2, Database, Rocket, Layout, GraduationCap, Map, Fingerprint, Cloud, Cpu } from "lucide-react";
import { SiPython, SiCplusplus, SiNumpy, SiPandas, SiTensorflow, SiKeras, SiScikitlearn, SiPytorch, SiMysql, SiMongodb, SiGit, SiJupyter, SiGooglecolab, SiGoogleearthengine } from "react-icons/si";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "experience", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono font-bold text-lg tracking-tighter">
            <span className="text-primary">KP</span>.sys
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            {["about", "skills", "experience", "projects", "education", "contact"].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item)}
                className={`capitalize transition-colors hover:text-primary ${activeSection === item ? "text-primary" : "text-muted-foreground"}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 container mx-auto flex flex-col justify-center min-h-[90vh]">
        <motion.div initial="hidden" animate="visible" variants={STAGGER} className="max-w-4xl">
          <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono mb-6">
            <Terminal className="w-3 h-3" />
            <span>System.init("Kavyanjali Parmar")</span>
          </motion.div>
          <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Kavyanjali</span>.
          </motion.h1>
          <motion.h2 variants={FADE_UP} className="text-2xl md:text-4xl text-muted-foreground font-medium mb-8">
            Computer Science (AI & ML) Undergraduate.
            <br className="hidden md:block"/> Designing intelligent systems & training models.
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-lg text-muted-foreground/80 max-w-2xl mb-10 leading-relaxed">
            A rising ML engineer passionate about machine learning, deep learning, and open-source contribution. I analyze data, build predictive models, and deploy scalable AI solutions.
          </motion.p>
          <motion.div variants={FADE_UP} className="flex flex-wrap gap-4">
            <button onClick={() => scrollTo("contact")} className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Get in Touch
            </button>
            <a href="https://github.com/kavyanjaliparmar" target="_blank" rel="noreferrer" className="px-6 py-3 bg-card border border-border hover:border-primary/50 font-semibold rounded-lg transition-colors flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/kavyanjali-parmar" target="_blank" rel="noreferrer" className="px-6 py-3 bg-card border border-border hover:border-primary/50 font-semibold rounded-lg transition-colors flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP}>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Brain className="text-primary" /> 
              About Me
            </h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  I'm currently pursuing my B.Tech in Computer Science with a specialization in Artificial Intelligence and Machine Learning. My journey in tech is driven by a deep curiosity to understand how intelligent systems can solve complex, real-world problems.
                </p>
                <p>
                  With hands-on experience in building ML/DL models, I've worked on everything from facial emotion recognition using CNNs to satellite imagery analysis for environmental monitoring. 
                </p>
                <p>
                  Recently, I was recognized as a <strong className="text-foreground">National Finalist (Top 25) at DataForge – E-Summit '26, IIT-Roorkee</strong>. I also actively contribute to open-source projects, currently focusing on the AI/Agents track at GirlScript Summer of Code.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="p-6 bg-background border border-border rounded-xl flex flex-col justify-center items-center text-center gap-3 cursor-default">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-xl">Top 25</div>
                    <div className="text-sm text-muted-foreground">National Finalist IIT-R</div>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="p-6 bg-background border border-border rounded-xl flex flex-col justify-center items-center text-center gap-3 cursor-default">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-xl">ML Intern</div>
                    <div className="text-sm text-muted-foreground">Future Interns</div>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="p-6 bg-background border border-border rounded-xl flex flex-col justify-center items-center text-center gap-3 cursor-default">
                  <div className="w-12 h-12 rounded-full bg-chart-3/10 flex items-center justify-center text-chart-3">
                    <Layout className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-xl">8.48</div>
                    <div className="text-sm text-muted-foreground">CGPA</div>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="p-6 bg-background border border-border rounded-xl flex flex-col justify-center items-center text-center gap-3 cursor-default">
                  <div className="w-12 h-12 rounded-full bg-chart-4/10 flex items-center justify-center text-chart-4">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-xl">Contributor</div>
                    <div className="text-sm text-muted-foreground">GSSoC</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}>
            <h3 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <Cpu className="text-primary" /> 
              Technical Arsenal
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Programming & Frameworks */}
              <motion.div variants={FADE_UP} whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
                <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">Languages & Libraries</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Python", icon: SiPython },
                    { name: "C++", icon: SiCplusplus },
                    { name: "NumPy", icon: SiNumpy },
                    { name: "Pandas", icon: SiPandas },
                    { name: "TensorFlow", icon: SiTensorflow },
                    { name: "Keras", icon: SiKeras },
                    { name: "PyTorch", icon: SiPytorch },
                    { name: "Scikit-Learn", icon: SiScikitlearn }
                  ].map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 px-3 py-2 bg-background border border-border rounded-lg text-sm">
                      <skill.icon className="text-primary" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Tools & DBs */}
              <motion.div variants={FADE_UP} whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
                <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">Tools & Databases</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "MySQL", icon: SiMysql },
                    { name: "MongoDB", icon: SiMongodb },
                    { name: "Git", icon: SiGit },
                    { name: "Jupyter", icon: SiJupyter },
                    { name: "Google Colab", icon: SiGooglecolab },
                    { name: "REST APIs", icon: Database }
                  ].map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 px-3 py-2 bg-background border border-border rounded-lg text-sm">
                      <skill.icon className="text-accent" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Concepts */}
              <motion.div variants={FADE_UP} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="p-6 bg-card border border-border rounded-xl md:col-span-2 hover:border-primary/30 transition-colors">
                <h4 className="text-xl font-semibold mb-6">Core Concepts</h4>
                <div className="flex flex-wrap gap-2">
                  {["OOP", "System Design", "Problem-Solving", "Data Structures", "Operating Systems", "DBMS"].map((concept) => (
                    <span key={concept} className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium">
                      {concept}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}>
            <h3 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <Terminal className="text-primary" /> 
              Experience
            </h3>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              
              <motion.div variants={FADE_UP} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <BriefcaseIcon className="w-4 h-4" />
                </div>
                <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-card border border-border rounded-xl shadow hover:border-primary/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h4 className="font-bold text-lg text-primary">Machine Learning Intern</h4>
                    <time className="text-sm font-mono text-muted-foreground">Mar 2026 – Apr 2026</time>
                  </div>
                  <div className="text-sm font-medium text-accent mb-4">Future Interns • Remote</div>
                  <ul className="text-muted-foreground text-sm space-y-2 list-disc pl-4 marker:text-primary">
                    <li>Developed sales forecasting models using SARIMAX for time-series data.</li>
                    <li>Built an NLP-based ticket classification system and resume screening tool.</li>
                    <li>Utilized Python, Pandas, and statsmodels to analyze and preprocess data efficiently.</li>
                  </ul>
                </motion.div>
              </motion.div>

              <motion.div variants={FADE_UP} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent text-accent-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Github className="w-4 h-4" />
                </div>
                <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-card border border-border rounded-xl shadow hover:border-accent/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h4 className="font-bold text-lg text-accent">Contributor (AI/Agents Track)</h4>
                    <time className="text-sm font-mono text-muted-foreground">Apr 2026 – Present</time>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground mb-4">GirlScript Summer of Code • Open Source</div>
                  <ul className="text-muted-foreground text-sm space-y-2 list-disc pl-4 marker:text-accent">
                    <li>Contributing to AI/Agent automation and Natural Language Processing projects.</li>
                    <li>Collaborating globally with developers using Git and GitHub workflows.</li>
                    <li>Enhancing documentation and optimizing existing machine learning codebases.</li>
                  </ul>
                </motion.div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}>
            <h3 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <Database className="text-primary" /> 
              Featured Projects
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <motion.div variants={FADE_UP} whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all shadow-lg hover:shadow-primary/10">
                <div className="h-48 bg-background relative overflow-hidden flex items-center justify-center border-b border-border/50">
                  <Map className="w-16 h-16 text-primary/20 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Forest Change Detection</h4>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    Quantified 7.5% forest loss using Google Earth Engine, NDVI indexing, and Sentinel-2 satellite imagery for vegetation monitoring.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">Earth Engine</span>
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">NDVI</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={FADE_UP} whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all shadow-lg hover:shadow-accent/10">
                <div className="h-48 bg-background relative overflow-hidden flex items-center justify-center border-b border-border/50">
                  <Fingerprint className="w-16 h-16 text-accent/20 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">Facial Emotion Recognition</h4>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    Trained a CNN on 15,000+ images from RAF-DB dataset achieving 80% accuracy. Integrated Haar Cascade for real-time video detection.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                    <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">TensorFlow/Keras</span>
                    <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">CNN</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={FADE_UP} whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-chart-3/50 transition-all shadow-lg hover:shadow-chart-3/10">
                <div className="h-48 bg-background relative overflow-hidden flex items-center justify-center border-b border-border/50">
                  <Rocket className="w-16 h-16 text-chart-3/20 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-chart-3 transition-colors">DataForge AI System</h4>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    Developed a context-aware AI system with advanced prompt engineering. Secured Top 25 National Finalist spot at IIT-Roorkee E-Summit.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                    <span className="text-xs font-mono text-chart-3 bg-chart-3/10 px-2 py-1 rounded">GenAI</span>
                    <span className="text-xs font-mono text-chart-3 bg-chart-3/10 px-2 py-1 rounded">Prompt Eng.</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20 px-6 bg-card/30 border-y border-border/50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="text-primary" /> 
                Education
              </h3>
              <div className="space-y-6">
                <motion.div variants={FADE_UP} whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="p-5 border border-border rounded-xl bg-background hover:border-primary/30 transition-colors">
                  <h4 className="font-bold text-lg">B.Tech CS (AI & ML)</h4>
                  <p className="text-muted-foreground">Graphic Era Hill University • 2023 - Present</p>
                  <div className="mt-2 text-sm font-mono text-primary">CGPA: 8.48</div>
                </motion.div>
                <motion.div variants={FADE_UP} whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="p-5 border border-border rounded-xl bg-background hover:border-primary/30 transition-colors">
                  <h4 className="font-bold text-lg">ISC (Class 12)</h4>
                  <p className="text-muted-foreground">Welham Girls' School, Dehradun • 2023</p>
                </motion.div>
                <motion.div variants={FADE_UP} whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="p-5 border border-border rounded-xl bg-background hover:border-primary/30 transition-colors">
                  <h4 className="font-bold text-lg">ICSE (Class 10)</h4>
                  <p className="text-muted-foreground">Welham Girls' School, Dehradun • 2021</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Code2 className="text-accent" /> 
                Certifications
              </h3>
              <div className="space-y-4">
                <motion.div variants={FADE_UP} whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="flex items-center gap-4 p-5 border border-border rounded-xl bg-background hover:border-accent/30 transition-colors">
                  <div className="w-12 h-12 bg-accent/10 text-accent flex items-center justify-center rounded-full shrink-0">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Generative AI</h4>
                    <p className="text-sm text-muted-foreground">Coursera</p>
                  </div>
                </motion.div>
                <motion.div variants={FADE_UP} whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="flex items-center gap-4 p-5 border border-border rounded-xl bg-background hover:border-accent/30 transition-colors">
                  <div className="w-12 h-12 bg-accent/10 text-accent flex items-center justify-center rounded-full shrink-0">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Cloud & ML Fundamentals</h4>
                    <p className="text-sm text-muted-foreground">AWS Skill Builder</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER}>
            <motion.h3 variants={FADE_UP} className="text-3xl md:text-5xl font-bold mb-6">Let's build something.</motion.h3>
            <motion.p variants={FADE_UP} className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              I'm always open to discussing machine learning projects, open-source collaborations, or new career opportunities.
            </motion.p>
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a href="mailto:parmarkavyanjali@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-3 shadow-lg shadow-primary/20">
                <Mail className="w-5 h-5" />
                parmarkavyanjali@gmail.com
              </a>
              <a href="tel:+919027105472" className="w-full sm:w-auto px-8 py-4 bg-card border border-border hover:border-primary/50 font-bold rounded-lg transition-colors flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                +91-9027105472
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 text-center text-muted-foreground text-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Kavyanjali Parmar. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/kavyanjaliparmar" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/kavyanjali-parmar" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

// Helper component for the briefcase icon
function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}

export default Portfolio;
