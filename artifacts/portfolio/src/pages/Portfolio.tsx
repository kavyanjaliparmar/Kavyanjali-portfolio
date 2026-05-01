import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useScroll, useSpring } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ChevronUp,
  Brain,
  Code2,
  Database,
  Rocket,
  Layout,
  GraduationCap,
  Map,
  Fingerprint,
  Cloud,
  Cpu,
  Sparkles,
  Star,
  CheckCircle2,
  Briefcase
} from "lucide-react";
import {
  SiPython,
  SiCplusplus,
  SiNumpy,
  SiPandas,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiPytorch,
  SiMysql,
  SiMongodb,
  SiGit,
  SiJupyter,
  SiGooglecolab
} from "react-icons/si";

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

const titles = [
  "ML Engineer",
  "Deep Learning Enthusiast",
  "Open Source Contributor",
  "IIT-R National Finalist"
];

function CountUp({ end, suffix = "", duration = 1500 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [titleIndex, setTitleIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "experience", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 150;
      
      setShowScrollTop(window.scrollY > 300);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 relative overflow-hidden">
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-border/40 transition-all">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono font-bold text-lg tracking-tighter cursor-pointer flex items-center gap-2" onClick={() => scrollTo("hero")}>
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary">KP</span>.sys
          </div>
          <div className="hidden md:flex gap-1 text-sm font-medium relative">
            {["about", "skills", "experience", "projects", "education", "contact"].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item)}
                className={`relative px-4 py-2 capitalize transition-colors ${activeSection === item ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {activeSection === item && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 container mx-auto flex flex-col justify-center min-h-[100dvh]">
        {/* Background Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none opacity-20 blur-[100px] z-0 flex">
          <div className="w-96 h-96 bg-primary rounded-full mix-blend-screen animate-blob" />
          <div className="w-96 h-96 bg-accent rounded-full mix-blend-screen animate-blob animation-delay-2000 -ml-32" />
          <div className="w-96 h-96 bg-chart-3 rounded-full mix-blend-screen animate-blob animation-delay-4000 -mt-32" />
        </div>

        <motion.div initial="hidden" animate="visible" variants={STAGGER} className="max-w-4xl relative z-10">
          <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-primary/20 text-sm font-medium mb-6 shadow-sm">
            <Star className="w-4 h-4 text-primary fill-primary/20" />
            <span className="text-muted-foreground">Welcome to my digital space</span>
          </motion.div>
          <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient">Kavyanjali</span>
          </motion.h1>
          <motion.div variants={FADE_UP} className="text-2xl md:text-4xl text-muted-foreground font-medium mb-8 h-12 flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={titleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute text-transparent bg-clip-text bg-gradient-to-r from-accent to-chart-3"
              >
                {titles[titleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>
          <motion.p variants={FADE_UP} className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            A rising ML engineer passionate about machine learning, deep learning, and open-source contribution. I analyze data, build predictive models, and deploy scalable AI solutions.
          </motion.p>
          
          <motion.div variants={FADE_UP} className="flex flex-wrap gap-4 mb-16">
            <button onClick={() => scrollTo("contact")} className="px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-2xl hover:bg-primary/90 transition-colors flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40">
              <Mail className="w-5 h-5" />
              Get in Touch
            </button>
            <a href="https://github.com/kavyanjaliparmar" target="_blank" rel="noreferrer" className="px-8 py-3.5 bg-card border border-border hover:border-primary/40 font-semibold rounded-2xl transition-all flex items-center gap-2 hover:bg-card/60">
              <Github className="w-5 h-5 text-foreground" />
              <span className="text-foreground">GitHub</span>
            </a>
          </motion.div>

          <motion.div variants={FADE_UP} className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl text-sm font-medium">
              <Layout className="w-4 h-4 text-chart-3" />
              8.48 CGPA
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl text-sm font-medium">
              <Rocket className="w-4 h-4 text-primary" />
              Top 25 @ IIT-R
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl text-sm font-medium">
              <Code2 className="w-4 h-4 text-accent" />
              2+ Years Exp.
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-card/30 relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}>
            <h3 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              <Brain className="text-primary" /> 
              About Me
            </h3>
            
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-7 space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  I'm currently pursuing my B.Tech in Computer Science with a specialization in Artificial Intelligence and Machine Learning. My journey in tech is driven by a deep curiosity to understand how intelligent systems can solve complex, real-world problems.
                </p>
                <p>
                  With hands-on experience in building ML/DL models, I've worked on everything from facial emotion recognition using CNNs to satellite imagery analysis for environmental monitoring. 
                </p>
                <p>
                  Recently, I was recognized as a <strong className="text-foreground font-medium">National Finalist (Top 25) at DataForge – E-Summit '26, IIT-Roorkee</strong>.
                </p>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }} 
                  className="mt-8 p-4 bg-card border border-border rounded-2xl flex items-center gap-4 max-w-sm shadow-sm"
                >
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <div className="text-sm">
                    <span className="text-muted-foreground">Currently:</span>
                    <span className="font-medium text-foreground ml-2">Contributing @ GSSoC 2026</span>
                  </div>
                </motion.div>
              </div>

              <div className="md:col-span-5 grid grid-cols-2 gap-4">
                <motion.div variants={FADE_UP} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="p-6 bg-card border border-border rounded-2xl flex flex-col justify-center items-center text-center shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-2"><CountUp end={80} suffix="%" /></div>
                  <div className="text-sm text-muted-foreground font-medium">Model Accuracy</div>
                </motion.div>
                <motion.div variants={FADE_UP} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="p-6 bg-card border border-border rounded-2xl flex flex-col justify-center items-center text-center shadow-sm">
                  <div className="text-4xl font-bold text-accent mb-2"><CountUp end={15} suffix="K+" /></div>
                  <div className="text-sm text-muted-foreground font-medium">Images Trained</div>
                </motion.div>
                <motion.div variants={FADE_UP} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="p-6 bg-card border border-border rounded-2xl flex flex-col justify-center items-center text-center shadow-sm">
                  <div className="text-4xl font-bold text-chart-3 mb-2"><CountUp end={2} /></div>
                  <div className="text-sm text-muted-foreground font-medium">Internships</div>
                </motion.div>
                <motion.div variants={FADE_UP} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="p-6 bg-card border border-border rounded-2xl flex flex-col justify-center items-center text-center shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-2"><CountUp end={3} /></div>
                  <div className="text-sm text-muted-foreground font-medium">Featured Projects</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}>
            <h3 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              <Sparkles className="text-primary" /> 
              Technical Arsenal
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-xl font-semibold mb-6">Core Competencies</h4>
                {[
                  { name: "Python", val: 90 },
                  { name: "TensorFlow/Keras", val: 82 },
                  { name: "PyTorch", val: 75 },
                  { name: "Data Analysis (NumPy/Pandas)", val: 88 },
                  { name: "ML/DL Modeling", val: 85 },
                  { name: "SQL/Databases", val: 72 }
                ].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.val}%</span>
                    </div>
                    <div className="h-3 bg-card rounded-full overflow-hidden border border-border">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.val}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                <motion.div variants={FADE_UP} className="p-6 bg-card border border-border rounded-2xl">
                  <h4 className="text-lg font-medium mb-4 text-muted-foreground">Tools & Ecosystem</h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: "Git", icon: SiGit },
                      { name: "Jupyter", icon: SiJupyter },
                      { name: "VS Code", icon: Code2 },
                      { name: "Google Colab", icon: SiGooglecolab },
                      { name: "MongoDB", icon: SiMongodb },
                      { name: "REST APIs", icon: Database }
                    ].map((tool) => (
                      <div key={tool.name} className="flex items-center gap-2 px-3 py-2 bg-background border border-border rounded-xl text-sm shadow-sm hover:border-primary/30 transition-colors">
                        <tool.icon className="text-primary w-4 h-4" />
                        <span>{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={FADE_UP} className="p-6 bg-card border border-border rounded-2xl">
                  <h4 className="text-lg font-medium mb-4 text-muted-foreground">Concepts</h4>
                  <div className="flex flex-wrap gap-2">
                    {["OOP", "System Design", "Problem-Solving", "Data Structures", "Operating Systems", "DBMS"].map((concept) => (
                      <span key={concept} className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-semibold tracking-wide">
                        {concept}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}>
            <h3 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              <Briefcase className="text-primary" /> 
              Experience
            </h3>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-primary/50 before:via-accent/50 before:to-transparent before:rounded-full">
              
              <motion.div variants={FADE_UP} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-gradient-to-br from-primary to-accent text-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Code2 className="w-4 h-4" />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 bg-card border border-border border-l-4 border-l-primary rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col mb-4">
                    <h4 className="font-bold text-xl text-foreground">Machine Learning Intern</h4>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-primary font-medium">Future Interns</span>
                      <time className="text-xs font-mono text-muted-foreground bg-background px-2 py-1 rounded-md border border-border">Mar 2026 – Apr 2026</time>
                    </div>
                  </div>
                  <ul className="text-muted-foreground text-sm space-y-3 mb-6">
                    <li className="flex gap-3"><span className="text-primary">✦</span> Developed sales forecasting models using SARIMAX for time-series data.</li>
                    <li className="flex gap-3"><span className="text-primary">✦</span> Built an NLP-based ticket classification system and resume screening tool.</li>
                    <li className="flex gap-3"><span className="text-primary">✦</span> Utilized Python, Pandas, and statsmodels to analyze and preprocess data efficiently.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium text-muted-foreground bg-background px-2.5 py-1 rounded-md border border-border">Python</span>
                    <span className="text-xs font-medium text-muted-foreground bg-background px-2.5 py-1 rounded-md border border-border">NLP</span>
                    <span className="text-xs font-medium text-muted-foreground bg-background px-2.5 py-1 rounded-md border border-border">SARIMAX</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div variants={FADE_UP} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-gradient-to-br from-accent to-chart-3 text-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Github className="w-4 h-4" />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 bg-card border border-border border-l-4 border-l-accent rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col mb-4">
                    <h4 className="font-bold text-xl text-foreground">Contributor (AI/Agents Track)</h4>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-accent font-medium">GirlScript Summer of Code</span>
                      <time className="text-xs font-mono text-muted-foreground bg-background px-2 py-1 rounded-md border border-border">Apr 2026 – Present</time>
                    </div>
                  </div>
                  <ul className="text-muted-foreground text-sm space-y-3 mb-6">
                    <li className="flex gap-3"><span className="text-accent">✦</span> Contributing to AI/Agent automation and Natural Language Processing projects.</li>
                    <li className="flex gap-3"><span className="text-accent">✦</span> Collaborating globally with developers using Git and GitHub workflows.</li>
                    <li className="flex gap-3"><span className="text-accent">✦</span> Enhancing documentation and optimizing existing machine learning codebases.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium text-muted-foreground bg-background px-2.5 py-1 rounded-md border border-border">Open Source</span>
                    <span className="text-xs font-medium text-muted-foreground bg-background px-2.5 py-1 rounded-md border border-border">Git</span>
                    <span className="text-xs font-medium text-muted-foreground bg-background px-2.5 py-1 rounded-md border border-border">AI Agents</span>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}>
            <h3 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              <Star className="text-primary" /> 
              Featured Projects
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              
              <motion.div variants={FADE_UP} whileHover={{ y: -5 }} className="group relative bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col h-full">
                <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 relative flex items-center justify-center p-6 border-b border-border/50">
                  <Map className="w-12 h-12 text-primary" />
                </div>
                <div className="p-6 flex-1 flex flex-col bg-card">
                  <h4 className="font-bold text-xl mb-3 text-foreground">Forest Change Detection</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    Quantified 7.5% forest loss using Google Earth Engine, NDVI indexing, and Sentinel-2 satellite imagery for vegetation monitoring.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-lg">Earth Engine</span>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-lg">NDVI</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-card/95 backdrop-blur-sm p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center border border-primary/20 rounded-3xl">
                  <button className="px-6 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg flex items-center gap-2">
                    View Details
                  </button>
                </div>
              </motion.div>

              <motion.div variants={FADE_UP} whileHover={{ y: -5 }} className="group relative bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all flex flex-col h-full">
                <div className="h-32 bg-gradient-to-br from-accent/20 to-accent/5 relative flex items-center justify-center p-6 border-b border-border/50">
                  <Fingerprint className="w-12 h-12 text-accent" />
                </div>
                <div className="p-6 flex-1 flex flex-col bg-card">
                  <h4 className="font-bold text-xl mb-3 text-foreground">Facial Emotion Recognition</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    Trained a CNN on 15,000+ images from RAF-DB dataset achieving 80% accuracy. Integrated Haar Cascade for real-time video detection.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1.5 rounded-lg">TensorFlow</span>
                    <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1.5 rounded-lg">CNN</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-card/95 backdrop-blur-sm p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center border border-accent/20 rounded-3xl">
                  <button className="px-6 py-2.5 bg-accent text-accent-foreground rounded-xl font-medium shadow-lg flex items-center gap-2">
                    View Details
                  </button>
                </div>
              </motion.div>

              <motion.div variants={FADE_UP} whileHover={{ y: -5 }} className="group relative bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-chart-3/5 transition-all flex flex-col h-full">
                <div className="h-32 bg-gradient-to-br from-chart-3/20 to-chart-3/5 relative flex items-center justify-center p-6 border-b border-border/50">
                  <Brain className="w-12 h-12 text-chart-3" />
                </div>
                <div className="p-6 flex-1 flex flex-col bg-card">
                  <h4 className="font-bold text-xl mb-3 text-foreground">DataForge AI System</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    Developed a context-aware AI system with advanced prompt engineering. Secured Top 25 National Finalist spot at IIT-Roorkee E-Summit.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="text-xs font-medium text-chart-3 bg-chart-3/10 px-3 py-1.5 rounded-lg">GenAI</span>
                    <span className="text-xs font-medium text-chart-3 bg-chart-3/10 px-3 py-1.5 rounded-lg">Prompt Eng.</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-card/95 backdrop-blur-sm p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center border border-chart-3/20 rounded-3xl">
                  <button className="px-6 py-2.5 bg-chart-3 text-primary-foreground rounded-xl font-medium shadow-lg flex items-center gap-2">
                    View Details
                  </button>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="py-24 px-6 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}>
              <h3 className="text-2xl font-bold mb-10 flex items-center gap-3 text-foreground">
                <GraduationCap className="text-primary" /> 
                Education
              </h3>
              <div className="space-y-8 border-l-2 border-border ml-3 pl-8 relative">
                <motion.div variants={FADE_UP} className="relative">
                  <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[41px] top-1" />
                  <h4 className="font-bold text-lg text-foreground">B.Tech CS (AI & ML)</h4>
                  <p className="text-muted-foreground mt-1">Graphic Era Hill University</p>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-xs font-mono bg-background border border-border px-2 py-1 rounded-md text-muted-foreground">2023 - Present</span>
                    <span className="text-xs font-bold text-primary">CGPA: 8.48</span>
                  </div>
                </motion.div>

                <motion.div variants={FADE_UP} className="relative">
                  <div className="absolute w-4 h-4 bg-background border-2 border-accent rounded-full -left-[41px] top-1" />
                  <h4 className="font-bold text-lg text-foreground">ISC (Class 12)</h4>
                  <p className="text-muted-foreground mt-1">Welham Girls' School, Dehradun</p>
                  <div className="mt-3">
                    <span className="text-xs font-mono bg-background border border-border px-2 py-1 rounded-md text-muted-foreground">2023</span>
                  </div>
                </motion.div>

                <motion.div variants={FADE_UP} className="relative">
                  <div className="absolute w-4 h-4 bg-background border-2 border-muted-foreground rounded-full -left-[41px] top-1" />
                  <h4 className="font-bold text-lg text-foreground">ICSE (Class 10)</h4>
                  <p className="text-muted-foreground mt-1">Welham Girls' School, Dehradun</p>
                  <div className="mt-3">
                    <span className="text-xs font-mono bg-background border border-border px-2 py-1 rounded-md text-muted-foreground">2021</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}>
              <h3 className="text-2xl font-bold mb-10 flex items-center gap-3 text-foreground">
                <CheckCircle2 className="text-accent" /> 
                Certifications
              </h3>
              <div className="space-y-4">
                <motion.div variants={FADE_UP} whileHover={{ scale: 1.02 }} className="p-5 bg-card border border-border rounded-2xl flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-xl text-primary shrink-0">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Generative AI</h4>
                    <p className="text-sm text-muted-foreground mt-1">Coursera</p>
                  </div>
                </motion.div>
                <motion.div variants={FADE_UP} whileHover={{ scale: 1.02 }} className="p-5 bg-card border border-border rounded-2xl flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-xl text-accent shrink-0">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Cloud & ML Fundamentals</h4>
                    <p className="text-sm text-muted-foreground mt-1">AWS Skill Builder</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}>
            <motion.h3 variants={FADE_UP} className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Let's Connect
            </motion.h3>
            <motion.p variants={FADE_UP} className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
              I'm always open to discussing machine learning projects, open-source collaborations, or exciting new opportunities.
            </motion.p>

            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <a href="mailto:contact@example.com" className="relative px-8 py-4 bg-card border border-border hover:border-primary/50 font-bold rounded-2xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-foreground shadow-sm">
                  <Mail className="w-5 h-5 text-primary" />
                  Send an Email
                </a>
              </div>
              <a href="https://linkedin.com/in/kavyanjali-parmar" target="_blank" rel="noreferrer" className="px-8 py-4 bg-card border border-border hover:border-accent/50 font-bold rounded-2xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-foreground shadow-sm">
                <Linkedin className="w-5 h-5 text-accent" />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Kavyanjali Parmar. Built with React & Tailwind.</p>
      </footer>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => scrollTo("hero")}
            className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/20 flex items-center justify-center hover:bg-primary/90 transition-colors z-50"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
