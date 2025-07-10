import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Mail, Github, Linkedin, ExternalLink, ArrowRight, Sparkles, Rocket, Eye } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hoveredProject, setHoveredProject] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    setTimeout(() => setIsLoaded(true), 500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const projects = [
    {
      title: "Starbucks Clone Website",
      description: "A fully responsive Starbucks website clone built from scratch using HTML, Tailwind CSS, and Vanilla JavaScript. This project recreates the sleek and modern feel of the official Starbucks homepage with smooth animations, a responsive layout, and interactive elements.",
      tech: ["Vanilla JS", "HTML", "Tailwind CSS"],
      color: "from-green-500 via-teal-500 to-blue-500",
      bgColor: "from-purple-900/20 to-pink-900/20",
      img: "../../assets/img/starbucks.png",
      link: "https://starbucks-clone-theta-rosy.vercel.app/"
    },
    {
      title: "TechCare Medical Website",
      description: "A responsive and interactive web app for visualizing patient data. It fetches secure patient information from a protected API, filters the data using JavaScript, and presents it through a clean, user-friendly UI with dynamic chart visualizations.",
      tech: ["Vanilla JS", "HTML", "Chart.js", "Tailwind CSS"],
      color: "from-blue-500 via-cyan-500 to-teal-500",
      bgColor: "from-blue-900/20 to-cyan-900/20",
      img: "../../assets/img/techcare.png",
      link: "https://techcare-three.vercel.app/"
    },
    {
      title: "ParkCinema Clone Website",
      description: " Park Cinema An interactive movie ticket booking web app where users can browse movies, view details, and book their seats online.",
      tech: ["Vanilla JS", "HTML", "Tailwind CSS"],
      color: "from-red-500 via-pink-500 to-blue-500",
      bgColor: "from-green-900/20 to-emerald-900/20",
      img: "../../assets/img/parkcinema.png",
      link: "https://park-cinema-nine.vercel.app/"
    },
    {
      title: "Pizza App",
      description: "PizzaApp is a responsive web application built with React and Vite that allows users to browse a pizza menu, select sizes, and simulate an order. It features smooth navigation, dynamic pricing, and a clean UI using Bootstrap.",
      tech: ["React.js", "HTML", "React Bootstrap"],
      color: "from-yellow-500 via-orange-500 to-red-500",
      bgColor: "from-yellow-900/20 to-orange-900/20",
      img: "../../assets/img/pizza.png",
      link: "https://omarzahidli.github.io/PizzaApp/#/menu"
    },
    {
      title: "Docmed Medical Website Template",
      description: "Responsive healthcare website template built with HTML5, CSS3, and Bootstrap. Features include service highlights, department cards, doctor profiles, appointment booking, and emergency contact options. Ideal for clinics and hospitals to showcase services with a modern, user-friendly design.",
      tech: ["HTML", "Bootstrap", "CSS"],
      color: "from-blue-500 via-teal-500 to-blue-200",
      bgColor: "from-purple-900/20 to-pink-900/20",
      img: "../../assets/img/docmed.png",
      link: "https://docmed-html-css-bootstrap.vercel.app/"
    },
    {
      title: "Todo App",
      description: "A simple and elegant Todo App built using React and Redux Toolkit. Manage your tasks efficiently with features like adding, deleting, and filtering todos.",
      tech: ["React.js", "HTML", "Tailwind CSS"],
      color: "from-red-500 via-pink-500 to-blue-500",
      bgColor: "from-blue-900/20 to-cyan-900/20",
      img: "../../assets/img/todo.png",
      link: "https://omarzahidli.github.io/TodoApp/"
    },
    {
      title: "Employee Management System",
      description: "A simple and functional employee dashboard built with React and Tailwind CSS. The user can add employees and view all employees in a list.",
      tech: ["React.js", "HTML", "Tailwind CSS"],
      color: "from-violet-500 via-red-500 to-purple-500",
      bgColor: "from-blue-900/20 to-cyan-900/20",
      img: "../../assets/img/ems.png",
      link: "https://omarzahidli.github.io/IsciIdareEtmeSistemi/"
    },
    {
      title: "Polo360 Website Template",
      description: "My First Webstite Template.",
      tech: ["HTML", "CSS"],
      color: "from-blue-500 via-cyan-500 to-teal-500",
      bgColor: "from-blue-900/20 to-cyan-900/20",
      img: "../../assets/img/polo.png",
      link: "https://polo360-website-template-using-display-float.vercel.app/"
    },
  ];

  const skills = [
    { name: "HTML5, CSS3", level: 100, icon: "../../assets/img/html&css.png", color: "from-purple-500 to-pink-500" },
    { name: "Bootstrap, Tailwind, MUI", level: 100, icon: "../../assets/img/csslib.png", color: "from-yellow-500 to-orange-500" },
    { name: "JavaScript, jQuery", level: 90, icon: "../../assets/img/js.png", color: "from-green-500 to-teal-500" },
    { name: "React.js, Redux", level: 88, icon: "../../assets/img/react&redux.png", color: "from-blue-500 to-cyan-500" }
  ];

  const FloatingOrb = ({ size, delay, duration, color }) => (
    <div
      className={`absolute rounded-full opacity-20 animate-pulse`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        transform: `translate(${Math.sin(Date.now() * 0.001 + delay) * 20}px, ${Math.cos(Date.now() * 0.001 + delay) * 20}px)`
      }}
    />
  );

  const TimeWave = () => (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"
           style={{
             transform: `translateX(${Math.sin(currentTime.getSeconds() * 0.1) * 100}px)`,
             transition: 'transform 0.3s ease-out'
           }} />
    </div>
  );

  const GlitchText = ({ children, className }) => (
    <div className={`relative ${className}`}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 text-white">
        {children}
      </span>
    </div>
  );
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-black" />
        {[...Array(15)].map((_, i) => (
          <FloatingOrb
            key={i}
            size={`${20 + Math.random() * 60}px`}
            delay={i * 0.5}
            duration={3 + Math.random() * 4}
            color={`hsl(${Math.random() * 360}, 70%, 50%)`}
          />
        ))}
        <TimeWave />
        <div
          className="fixed w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-screen"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            transform: `scale(${isLoaded ? 1 : 0})`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#about" title="Home">
              <GlitchText className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                OMAR ZAHIDLI
              </GlitchText>
            </a>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-white/80 hover:text-white transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-sm transition-opacity" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white relative pe-4">
              <div className="relative">
                <span className={`absolute block w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`} />
                <span className={`absolute block w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute block w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`} />
              </div>
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-white/80 hover:text-white transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
      <section id="about" className="pt-24 relative min-h-screen flex items-center justify-center" ref={heroRef}>
        <div className="text-center z-10 max-w-6xl mx-auto px-6">
          <div className="mb-12 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full blur-3xl opacity-20 animate-pulse" />
            <GlitchText className="text-6xl md:text-9xl font-black mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Hi, I'm Omar Zahidli
            </GlitchText>
            <div className="text-4xl md:text-6xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                FullStack-Developer
              </span>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-ping" />
            </div>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              I am passionate about building responsive and interactive web applications. Skilled in React, Tailwind CSS, JavaScript, and UI design.
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/60" />
            <div className="w-0.5 h-8 bg-gradient-to-b from-white/60 to-transparent" />
          </div>
        </div>
      </section>
      <section id="skills" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <GlitchText className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Skills
            </GlitchText>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Languages & Frameworks:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:rotate-1 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${skill.color} mr-4`}>
                      <img className='max-w-[80px]' src={skill.icon} alt={skill.name} />
                    </div>
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-white/10 rounded-full h-3 mb-4 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 delay-300 relative`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-white/60">Mastery Level</span>
                      <span className="font-bold text-white">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <GlitchText className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Projects
            </GlitchText>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-700 hover:scale-105 cursor-pointer"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10 p-10">
                  <div className="text-8xl mb-8 transform group-hover:scale-110transition-transform duration-500 group-hover:animate-pulse ">
                    <img className='rounded-2xl' src={project.img} alt={project.name} />
                  </div>
                  <h3 className="text-3xl font-black mb-6 text-white group-hover:text-white transition-colors duration-300">
                    <span className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                      {project.title}
                    </span>
                  </h3>
                  <p className="text-white/70 mb-8 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white/10 rounded-2xl text-sm font-medium text-white/80 hover:bg-white/20 transition-colors duration-300"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a a href={project.link} target='_blank' className="group/btn flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300 font-medium">
                    <span>Visit Website</span>
                    <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-transform duration-300" />
                  </a>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <GlitchText className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contact
          </GlitchText>
          <p className="text-center text-xl text-white/80 mb-16 max-w-3xl mx-auto leading-relaxed">
            Let’s build something together!
            <br />
            📍 Location: Baku, Azerbaijan
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
            <button className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-full font-bold text-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 overflow-hidden">
              <a href="mailto:zahidliomer@gmail.com" className="relative z-10 flex items-center gap-4">
                <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  E-MAIL ME
                <Sparkles className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
              </a>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </button>
            <div className="flex gap-6">
              {[
                { icon: Github, color: "from-gray-500 to-gray-700", link: "https://github.com/omarzahidli" },
                { icon: Linkedin, color: "from-blue-500 to-blue-700", link: "https://www.linkedin.com/in/omar-zahidli/" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target='_blank'
                  className="group relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-12 overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />
                  <social.icon className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer className="relative z-10 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6">
            <a href="#about" title="Home">
              <GlitchText className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                OMAR ZAHIDLI
              </GlitchText>
            </a>
          </div>
          <p className="text-white/60 mb-4">
            &copy; Copyright {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;