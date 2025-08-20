import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, User, Briefcase, GraduationCap, Download, ChevronDown, ChevronRight, Play, Eye, BookOpen, Lightbulb } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'bts-projects', 'personal-projects', 'tech-watch', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const toggleProject = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const languages = ["HTML", "Java & JavaScript", "CSS", "MySQL", "Python", "PHP", "Kotlin"];
  
  const tools = [
    { name: "Blender", url: "https://www.blender.org/", icon: "🎨" },
    { name: "Adobe Photoshop", url: "https://www.adobe.com/products/photoshop.html", icon: "🎨" },
    { name: "Adobe Premiere Pro", url: "https://www.adobe.com/products/premiere.html", icon: "🎬" },
    { name: "Android Studio", url: "https://developer.android.com/studio", icon: "📱" },
    { name: "Visual Studio Code", url: "https://code.visualstudio.com/", icon: "💻" }
  ];

  const btsProjects = [
    {
      id: "confiseries",
      title: "Site Vitrine : Les Confiseries Payet",
      description: "Site vitrine bilingue (FR/EN) créé avec WordPress",
      technologies: ["WordPress", "HTML", "CSS"],
      requirements: [
        "Réaliser un site vitrine pour un client",
        "Réaliser et suivre un cahier des charges",
        "Le site doit être disponible dans deux langues (Anglais / Français)",
        "Le site ne doit pas permettre aux utilisateurs de créer des comptes ou d'effectuer des achats",
        "Suivre une cohérence avec la charte graphique établie dans le cahier des charges",
        "Absence de toute faute d'orthographe"
      ],
      links: {
        site: "https://lesconfiseriespayet.wordpress.com"
      }
    },
    {
      id: "bowling",
      title: "Site Web : Le Bowling du Front de Mer",
      description: "Site fonctionnel avec architecture MVC et programmation orientée objet",
      technologies: ["HTML", "PHP", "JavaScript", "CSS (Tailwind)", "MySQL"],
      requirements: [
        "Réaliser un site fonctionnel pour un client",
        "Respect de l'architecture MVC",
        "Diagramme de classe et cas d'utilisation",
        "La programmation doit être orientée objet sur tout ou partie du code",
        "Codage en anglais en français mais cohérence indispensable",
        "Rendu utilisateur en français",
        "Messages d'erreur en français",
        "Pluriel pour exprimer la multiplicité (tableaux, méthodes renvoyant des ensemble d'éléments)",
        "Absence de toute faute d'orthographe"
      ],
      links: {
        site: "https://bowlingdufrontdemer.alwaysdata.net/",
        github: "https://github.com/HoarauJeremy/Bowling",
        database: "https://phpmyadmin.alwaysdata.com/"
      },
      note: "Le site n'est malheureusement plus disponible."
    },
    {
      id: "chuxu-bts",
      title: "Application Android : ChÛxÙ",
      description: "Application mobile connectée à l'API Steam avec gestion utilisateurs",
      technologies: ["Kotlin", "Java", "API Steam", "MySQL"],
      requirements: [
        "Application téléphone en lien avec l'API de Steam",
        "L'utilisateur peut créer un compte",
        "L'utilisateur peut effectuer des recherches sur des jeux précis",
        "Laisser des avis / les consulter (Y compris les siens)",
        "Modifier son profil / Effacer son compte",
        "Supprimer et modifier ses avis sur le vol",
        "Trier les résultats de ses recherches par le biais de \"filtres\""
      ],
      links: {
        site: "https://chuxu.alwaysdata.net",
        github: "https://github.com/TetraSsky/Chuxu",
        database: "https://phpmyadmin.alwaysdata.com/"
      }
    }
  ];

  const personalProjects = [
    {
      id: "blender",
      title: "Animation 3D",
      description: "Créations personnelles réalisées sur Blender dans mon temps libre. J'aime créer des modèles 3D, animations, rigs et bien plus encore !",
      videos: [
        "./media/images/AMAZING.mp4",
        "./media/images/TTOF.mp4",
        "./media/images/WarmUpAnim.mp4",
        "./media/images/SuperWarmUpAnim.mp4",
        "./media/images/Background2.mp4",
        "./media/images/Background3.mp4",
        "./media/images/LugiaHq.mp4"
      ],
      github: "https://github.com/TetraSsky/BlenderModelsAndAnims"
    },
    {
      id: "chuxu-personal",
      title: "Application Android : ChÛxÙ (Version Personnelle)",
      description: "Application créée pour m'exercer au langage Kotlin et apprendre les bonnes pratiques en matière de communication avec une API. L'API de Steam ne disposant pas d'une documentation très détaillée, j'ai eu recours à la méthode du \"try and error\", ce qui m'a beaucoup exercé à la résolution de problèmes ainsi qu'aux requêtes HTTP et HTTPS !",
      site: "https://chuxu.alwaysdata.net"
    }
  ];

  const techWatchSources = {
    pull: {
      research: [
        { name: "Google Scholar", description: "Moteur de recherche spécialisé de Google pour l'éducation" }
      ],
      sites: [
        { name: "Microsoft AI Blog", description: "Le blog de Microsoft sur l'IA, proposant des articles sur les dernières recherches, les innovations et les produits liés à l'IA développés par Microsoft" },
        { name: "Google AI Blog", description: "Le blog officiel de Google consacré à ses avancées et recherches en intelligence artificielle et d'autres projets open-source" },
        { name: "NVIDIA AI Blog", description: "Le blog de NVIDIA sur l'IA, couvrant des sujets tels que les GPU pour le deep learning, les algorithmes d'apprentissage profond et les applications de l'IA" },
        { name: "OpenAI Blog", description: "Le blog officiel d'OpenAI, une organisation de recherche en IA, partageant des articles sur leurs recherches, leurs découvertes et les implications éthiques de l'IA" }
      ],
      forums: [
        { name: "Github", description: "Majoritairement les projets Communautaires", link: "https://github.com/topics/artificial-intelligence-projects" },
        { name: "Reddit", description: "Communautés", links: [
          { name: "r/MachineLearning", url: "https://www.reddit.com/r/MachineLearning/" },
          { name: "r/ArtificialIntelligence", url: "https://www.reddit.com/r/ArtificialInteligence/" },
          { name: "r/DataScience", url: "https://www.reddit.com/r/datascience/" }
        ] }
      ]
    },
    push: {
      social: [
        { name: "Twitter (X)", accounts: [
          { name: "OpenAI", url: "https://x.com/openai?lang=fr" },
          { name: "GoogleAI", url: "https://x.com/googleai?lang=fr" },
          { name: "MKBHD", url: "https://x.com/MKBHD", description: "(Youtuber Tech Anglophone)" },
          { name: "MrWhosTheBoss", url: "http://x.com/Mrwhosetheboss", description: "(Youtuber Tech Anglophone)" }
        ] }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">MS</span>
              </div>
              <div className="text-2xl font-bold text-white">
                SIMONIN Michel
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Accueil' },
                { id: 'about', label: 'À propos' },
                { id: 'bts-projects', label: 'Projets BTS' },
                { id: 'personal-projects', label: 'Projets Perso' },
                { id: 'tech-watch', label: 'Veille Tech' },
                { id: 'contact', label: 'Contact' }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`transition-colors duration-200 ${
                    activeSection === section.id 
                      ? 'text-purple-400' 
                      : 'text-white hover:text-purple-300'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <User size={48} className="text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ✨ Je suis 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              SIMONIN Michel
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionné par la programmation et les technologies web qui aime développer des programmes, 
            sites ou applications en tout genre ! Dans mon temps libre, j'aime m'épanouir dans des choses 
            comme le montage vidéo, l'animation 3D ou encore le développement Android !
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/tetrassky" target="_blank" rel="noopener noreferrer" 
               className="text-white hover:text-purple-400 transition-colors">
              <Github size={32} />
            </a>
            <a href="mailto:contact@example.com" 
               className="text-white hover:text-purple-400 transition-colors">
              <Mail size={32} />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
            >
              Découvrir mon profil
            </button>
            <a 
              href="./media/cv/cv.pdf" 
              download
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Télécharger mon CV
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">À propos</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Formation */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-purple-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-white">Formation</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span><strong>(Diplômé)</strong> BAC+2 BTS SIO — OPTION SLAM 👨‍🎓</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Baccalauréat de série Général 📜</span>
                </li>
              </ul>
            </div>

            {/* Langages */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Code className="text-purple-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-white">Langages</h3>
              </div>
              <p className="text-gray-300 mb-4">Je maîtrise les langages tels que :</p>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Programmes */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <Briefcase className="text-purple-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-white">Programmes</h3>
              </div>
              <p className="text-gray-300 mb-4">Je me suis également familiarisé avec les programmes suivants :</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <a 
                    key={index}
                    href={tool.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-200 transform hover:scale-105"
                  >
                    <span className="text-2xl mb-2">{tool.icon}</span>
                    <span className="text-xs text-gray-300 text-center">{tool.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BTS Projects Section */}
      <section id="bts-projects" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Mes Travaux en BTS SIO</h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Cette partie est dédiée à mon <strong>BTS-SIO (2022-2024)</strong><br/>
            Explorez mes travaux en lien avec mon parcours !
          </p>
          
          <div className="space-y-6">
            {btsProjects.map((project, index) => (
              <div key={project.id} className="bg-slate-800/60 backdrop-blur-sm rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleProject(project.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-800/70 transition-all duration-200"
                >
                  <div className="flex items-center">
                    {expandedProjects[project.id] ? 
                      <ChevronDown className="text-purple-400 mr-3" size={24} /> : 
                      <ChevronRight className="text-purple-400 mr-3" size={24} />
                    }
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                  </div>
                </button>
                
                {expandedProjects[project.id] && (
                  <div className="px-6 pb-6 border-t border-slate-700">
                    {project.note && (
                      <div className="mb-4 p-3 bg-yellow-500/20 border-l-4 border-yellow-500 rounded">
                        <p className="text-yellow-200 font-semibold">{project.note}</p>
                      </div>
                    )}
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Travail demandé :</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          {project.requirements.map((req, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-purple-400 mr-2 mt-1">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies utilisées :</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <h4 className="text-lg font-semibold text-white mb-3">Liens & Présentation :</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.links.site && (
                            <a href={project.links.site} target="_blank" rel="noopener noreferrer" 
                               className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                              <Eye size={16} />
                              Site
                            </a>
                          )}
                          {project.links.github && (
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" 
                               className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                              <Github size={16} />
                              GitHub
                            </a>
                          )}
                          {project.links.database && (
                            <a href={project.links.database} target="_blank" rel="noopener noreferrer" 
                               className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                              <ExternalLink size={16} />
                              Base de données
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section id="personal-projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Mes projets personnels</h2>
          
          <div className="space-y-6">
            {personalProjects.map((project, index) => (
              <div key={project.id} className="bg-slate-800/60 backdrop-blur-sm rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleProject(`personal-${project.id}`)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-800/70 transition-all duration-200"
                >
                  <div className="flex items-center">
                    {expandedProjects[`personal-${project.id}`] ? 
                      <ChevronDown className="text-purple-400 mr-3" size={24} /> : 
                      <ChevronRight className="text-purple-400 mr-3" size={24} />
                    }
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                  </div>
                </button>
                
                {expandedProjects[`personal-${project.id}`] && (
                  <div className="px-6 pb-6 border-t border-slate-700">
                    <div className="mt-6">
                      {project.videos && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-4">Vidéos de démonstration :</h4>
                          <div className="bg-slate-700/50 rounded-lg p-4">
                            <div className="flex items-center justify-center mb-4">
                              <Play className="text-purple-400" size={32} />
                              <span className="text-gray-300 ml-2">Lecteur vidéo (les vidéos seraient chargées depuis votre dossier media)</span>
                            </div>
                            <p className="text-gray-400 text-sm text-center">
                              Vidéos disponibles : {project.videos.length} animations
                            </p>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-3">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" 
                             className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                            <Github size={16} />
                            Voir le repository sur GitHub
                          </a>
                        )}
                        {project.site && (
                          <a href={project.site} target="_blank" rel="noopener noreferrer" 
                             className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                            <ExternalLink size={16} />
                            Voir le site
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Retrouvez tous mes projets sur{' '}
              <a href="https://github.com/tetrassky" target="_blank" rel="noopener noreferrer" 
                 className="text-yellow-400 hover:text-yellow-300 underline transition-colors">
                Mon GitHub !
              </a>
            </h3>
            <div className="flex justify-center mt-4">
              <Github size={48} className="text-yellow-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Watch Section */}
      <section id="tech-watch" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Ma Veille Technologique</h2>
          
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Lightbulb className="mr-3 text-yellow-400" size={28} />
              Qu'est-ce qu'une veille technologique ?
            </h3>
            <p className="text-gray-300 italic mb-6 text-lg">
              "C'est une activité qui consiste à se tenir informé sur un secteur d'activité précis de ces nouvelles innovations, 
              il se doit de prévenir, informer et alerter. Cela permet en autre de constituer une base d'informations"
            </p>
            
            <h3 className="text-2xl font-bold text-white mb-4">L'apport de l'IA dans la programmation</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                La technologie évoluant à un rythme effréné, il est important de rester informé des dernières avancées 
                pour maintenir sa pertinence et son efficacité professionnelle. Ma veille technologique se concentre sur 
                l'apport des l'intelligences artificielles dans le domaine de la programmation, explorant comment celles-ci 
                transforment non seulement la façon dont nous imaginons, concevons, mais aussi la manière dont nous abordons 
                les problèmes informatiques complexes et plus principalement au niveau du code.
              </p>
              <p>
                L'intégration de l'IA dans la programmation offre un potentiel révolutionnaire, ouvrant de nouvelles 
                perspectives et possibilités pour les développeurs et ingénieurs logiciels.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Section Pull */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Section Pull
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Recherches</h4>
                  <ul className="space-y-2">
                    {techWatchSources.pull.research.map((item, i) => (
                      <li key={i} className="text-gray-300">
                        <strong className="text-blue-300">{item.name} :</strong> {item.description}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Sites</h4>
                  <ul className="space-y-3">
                    {techWatchSources.pull.sites.map((item, i) => (
                      <li key={i} className="text-gray-300">
                        <strong className="text-blue-300">{item.name} :</strong> {item.description}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Forums</h4>
                  <ul className="space-y-3">
                    {techWatchSources.pull.forums.map((item, i) => (
                      <li key={i} className="text-gray-300">
                        <strong className="text-blue-300">{item.name} :</strong> {item.description}
                        {item.link && (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" 
                             className="text-red-400 hover:text-red-300 underline ml-2">
                            projets IA
                          </a>
                        )}
                        {item.links && (
                          <div className="ml-4 mt-1 flex flex-wrap gap-2">
                            {item.links.map((link, j) => (
                              <a key={j} href={link.url} target="_blank" rel="noopener noreferrer" 
                                 className="text-red-400 hover:text-red-300 underline text-sm">
                                {link.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Section Push */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-6 text-center bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Section Push
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Réseaux Sociaux</h4>
                  <ul className="space-y-3">
                    {techWatchSources.push.social.map((platform, i) => (
                      <li key={i} className="text-gray-300">
                        <strong className="text-green-300">{platform.name} :</strong> Des comptes comme :
                        <div className="ml-4 mt-2 space-y-1">
                          {platform.accounts.map((account, j) => (
                            <div key={j} className="flex items-center flex-wrap gap-2">
                              <a href={account.url} target="_blank" rel="noopener noreferrer" 
                                 className="text-red-400 hover:text-red-300 underline">
                                {account.name}
                              </a>
                              {account.description && (
                                <span className="text-gray-400 text-sm">{account.description}</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Contactez-moi</h2>
          <p className="text-xl text-gray-300 mb-12">
            Intéressé par une collaboration ? N'hésitez pas à me contacter !
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a 
              href="mailto:contact@example.com"
              className="flex flex-col items-center p-6 bg-slate-800/60 backdrop-blur-sm rounded-xl hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={48} className="text-purple-400 mb-4" />
              <span className="text-white font-semibold text-lg mb-2">Email</span>
              <span className="text-gray-300">contact@example.com</span>
            </a>
            
            <a 
              href="https://github.com/tetrassky"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-slate-800/60 backdrop-blur-sm rounded-xl hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105"
            >
              <Github size={48} className="text-purple-400 mb-4" />
              <span className="text-white font-semibold text-lg mb-2">GitHub</span>
              <span className="text-gray-300">TetraSsky</span>
            </a>
            
            <a 
              href="./media/cv/cv.pdf"
              download
              className="flex flex-col items-center p-6 bg-slate-800/60 backdrop-blur-sm rounded-xl hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 md:col-span-2 lg:col-span-1"
            >
              <Download size={48} className="text-purple-400 mb-4" />
              <span className="text-white font-semibold text-lg mb-2">CV</span>
              <span className="text-gray-300">Télécharger</span>
            </a>
          </div>
          
          <div className="mt-12 p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
            <p className="text-gray-300 text-lg">
              Diplômé d'un BTS SIO option SLAM, passionné par le développement web, mobile et l'animation 3D.
              Toujours à la recherche de nouveaux défis techniques !
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-lg md:text-2xl font-bold mb-4">Mon Portfolio</p>
          <p>&copy; 2025 SIMONIN Michel. Tous droits réservés.</p>
          <p className="mt-2 text-sm">
            Développé avec React, Tailwind CSS et beaucoup de passion ✨
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;