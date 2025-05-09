"use client";

function MainComponent() {
  const [activeSection, setActiveSection] = useState("about");
  const [activeTag, setActiveTag] = useState("all");
  const [pubTag, setPubTag] = useState("all");
  const [expandedPosters, setExpandedPosters] = useState({});
  const projects = [
    {
      title: "Biophysically Detailed Model of Rat Hippocampus CA1 Region",
      description:
        "Developed and maintained in-silico models of detailed neurons in 3D rat atlas, validated by in-vivo and in-vitro experiments and provides insights into hippocampal function from its structure, physiology and connectivity.",
      tags: ["Python", "neuroscience", "HPC", "graph-theory"],
      image:
        "https://ucarecdn.com/c98fb837-ec9c-4c58-bace-fe820b3e7b62/-/format/auto/",
      github: "https://github.com/BlueBrain/rat_ca1_model_code",
    },
    {
      title: "Embedding Citation Graphs in VR",
      description: "A 3D force graph visualization in VR using WebXR and Neo4j",
      tags: ["Neo4j", "HTML", "VR"],
      image:
        "https://raw.githubusercontent.com/BlueBrain/citation-graph/main/images/force_3d_graph.png",
      github: "https://github.com/BlueBrain/citation-graph",
    },
    {
      title:
        "Neuroagent: A multiagentic LLM for simulating and analyzing digital brains",
      description:
        "Explore Literature and extract information to generate and simulate your own neuron models using our ChatGPT like interface, embedded into pay-as-you-go platform.",
      tags: ["Python", "LLM", "AI-agents", "RAG", "neuroscience", "AWS"],
      image:
        "https://raw.githubusercontent.com/KeremKurban/portfolio/main/resumes/neuroagent.jpeg",
      github: "https://github.com/BlueBrain/neuroagent",
    },
    {
      title: "Sonata to Neo4j",
      description:
        "Convert Biophysical Neuron Models and Simulations into Neo4j Graph and create fact sheets.",
      tags: ["Python", "Neo4j", "neuroscience"],
      image:
        "https://raw.githubusercontent.com/KeremKurban/portfolio/main/resumes/sonata2neo1.jpg",
      github: "https://github.com/KeremKurban/sonata-neo4j-loader",
    },
    {
      title: "Chat with Brain",
      description: "Talk to Brain Models with Large Language Models",
      tags: ["Python", "Neo4j", "neuroscience", "RAG"],
      image:
        "https://raw.githubusercontent.com/KeremKurban/portfolio/main/resumes/dalle_twg.jpeg",
      github: "https://github.com/KeremKurban/chat-with-brain",
    },
    {
      title: "Sortify",
      description:
        "Sortify is a web application that allows users to sort their favorite Spotify album tracks based on their preferences.",
      tags: ["Python", "HTML/CSS"],
      image:
        "https://ucarecdn.com/75964e7c-82e3-4707-9b9c-458a4565dd8f/-/format/auto/",
      github: "https://github.com/KeremKurban/Sortify",
    },
    {
      title: "Scholarag",
      description:
        "A Retrieval Augmented Generation (RAG) API meant for scientific literature, which includes data management utilities and relevant endpoints for efficiently showcasing papers to your users.",
      tags: ["RAG", "Python", "AWS", "Docker", "API"],
      image:
        "https://ucarecdn.com/254ccaba-750e-4c8d-a887-a1461521c092/-/format/auto/",
      github: "https://github.com/BlueBrain/scholarag",
    },
    {
      title: "Hypnosis Simulator",
      description:
        "An interactive web application featuring various hypnotic visualizations and audio stimulations for relaxation and meditation. Includes multiple visualization types like Spiral Induction, Pulsing Light, and 3D Lorenz patterns, with customizable controls and audio accompaniment.",
      tags: ["JavaScript", "Three.js", "WebGL", "Interactive", "Vite", "HTML5", "CSS3"],
      image:
        "https://raw.githubusercontent.com/KeremKurban/portfolio/main/resumes/app_hypnosis.PNG",
      github: "https://github.com/KeremKurban/hypnosis-simulator",
      live: "https://keremkurban.github.io/hypnosis-simulator/"
    },
  ];
  const publications = [
    {
      title:
        'Machine and deep learning approaches for the study "Effects of early anesthesia exposure on human brain development using multimodal neuroimaging"',
      authors: "Kurban K., Budur E.",
      year: "2018",
      type: "Poster",
      venue: "16th National Neuroscience Congress in Turkey",
      tags: ["machine-learning", "fMRI", "neuroscience"],
      image:
        "https://ucarecdn.com/a76fda91-529e-4804-bba1-582183f00ac1/-/format/auto/",
    },
    {
      title:
        "Characterizing subtypes of projecting axons in mice using topological data analysis and machine learning",
      authors: "Kurban K., Kanari L.",
      year: "2024",
      type: "Poster",
      venue: "Society for Neuroscience, San Diego, CA, USA",
      tags: ["machine-learning", "neuroscience"],
      image:
        "https://ucarecdn.com/723e5f11-4cc6-4e30-9092-1ecabccc1487/-/format/auto/",
    },
    {
      title:
        "A connectome manipulation framework for the systematic and reproducible study of structure–function relationships through simulations",
      authors:
        "Pokorny, C., Awile, O., Isbister, J. B., Kurban, K., Wolf, M., & Reimann, M. W.",
      year: "2024",
      type: "Journal",
      venue: "bioRxiv",
      doi: "10.1101/2024.05.24.593860",
      tags: ["simulation", "neuroscience"],
    },
    {
      title: "A deep dive into CA1 network: Insights from Network Science",
      authors: "Kurban K, Romani A., Markram H.",
      year: "2023",
      type: "Poster",
      venue: "32th Computational Neuroscience Society",
      tags: ["hippocampus", "neuroscience", "graph-heory"],
      image:
        "https://ucarecdn.com/c35e14c6-6d31-44e6-aca7-7e615c0ecb2a/-/format/auto/",
    },
    {
      title:
        "Community-based Reconstruction and Simulation of a Full-scale Model of Region CA1 of Rat Hippocampus",
      authors: "Romani, A., et al.",
      year: "2023",
      type: "Preprint",
      venue: "Cold Spring Harbor Laboratory",
      doi: "10.1101/2023.05.17.541167",
      tags: ["simulation", "neuroscience", "hippocampus"],
    },
    {
      title:
        "Topological properties of full-scale model of rat hippocampus CA1 and their functional implications",
      authors: "Kurban K, Pokorny C., Romani A.",
      year: "2022",
      type: "Poster",
      venue: "Society for Neuroscience, San Diego, CA, USA",
      tags: ["hippocampus", "neuroscience", "graph-heory"],
      image:
        "https://ucarecdn.com/a1a2fe0f-0888-4d72-8dbc-6dbb6a6295fa/-/format/auto/",
    },
    {
      title:
        "Resting-state network dysconnectivity in ADHD: A system-neuroscience-based meta-analysis",
      authors:
        "Sutcubasi B, Metin B, Kurban MK, Metin ZE, Beser B, Sonuga-Barke E",
      year: "2020",
      type: "Journal",
      venue: "World J Biol Psychiatry",
      doi: "10.1080/15622975.2020.1775889",
      tags: ["meta-analysis", "neuroscience", "fMRI", "ADHD"],
    },
  ];
  const filteredProjects =
    activeTag === "all"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));
  const filteredPubs =
    pubTag === "all"
      ? publications
      : publications.filter((p) => p.tags.includes(pubTag));
  const pubTags = ["all", ...new Set(publications.flatMap((p) => p.tags))];
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href =
      "https://raw.githubusercontent.com/KeremKurban/portfolio/ce739fc3c31505ca1df19a80a375ed9f2492429d/resumes/CV_8_3_2025.pdf";
    link.setAttribute("download", "Kerem_Kurban_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleDownloadPublications = () => {
    const link = document.createElement("a");
    link.href =
      "https://raw.githubusercontent.com/KeremKurban/portfolio/main/resumes/Publications_10_2024.pdf";
    link.setAttribute("download", "Publications_10_2024.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-roboto">
      <nav className="fixed w-full bg-[#121212] p-2 md:p-4 z-50">
        <div className="max-w-6xl mx-auto">
          {/* Desktop Nav - Hidden on mobile */}
          <div className="hidden md:flex md:flex-row justify-between items-center">
            <h1 className="text-2xl font-bold">
              Machine Learning Engineer | MLOps & LLM Specialist
            </h1>
            <div className="flex gap-6">
              <button
                onClick={() => setActiveSection("about")}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  activeSection === "about"
                    ? "bg-[#64ffda] text-[#112240]"
                    : "bg-[#112240] hover:bg-opacity-80"
                }`}
              >
                About
              </button>
              <button
                onClick={() => setActiveSection("projects")}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  activeSection === "projects"
                    ? "bg-[#64ffda] text-[#112240]"
                    : "bg-[#112240] hover:bg-opacity-80"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveSection("publications")}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  activeSection === "publications"
                    ? "bg-[#64ffda] text-[#112240]"
                    : "bg-[#112240] hover:bg-opacity-80"
                }`}
              >
                Publications
              </button>
              <button
                onClick={() => setActiveSection("contact")}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  activeSection === "contact"
                    ? "bg-[#64ffda] text-[#112240]"
                    : "bg-[#112240] hover:bg-opacity-80"
                }`}
              >
                Contact
              </button>
              <button
                onClick={handleDownloadCV}
                className="bg-[#4fd1b5] text-[#112240] px-4 py-2 rounded-md transition-all duration-200 hover:bg-[#3da190]"
              >
                Download CV
              </button>
            </div>
          </div>

          {/* Mobile Nav - Hidden on desktop */}
          <div className="flex md:hidden flex-col items-center">
            <h1 className="text-xl font-bold mb-2 text-center">
              Machine Learning Engineer | MLOps & LLM Specialist
            </h1>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveSection("about")}
                className={`px-3 py-1 rounded-md transition-all duration-200 ${
                  activeSection === "about"
                    ? "bg-[#64ffda] text-[#112240]"
                    : "bg-[#112240] hover:bg-opacity-80"
                }`}
              >
                About
              </button>
              <button
                onClick={() => setActiveSection("projects")}
                className={`px-3 py-1 rounded-md transition-all duration-200 ${
                  activeSection === "projects"
                    ? "bg-[#64ffda] text-[#112240]"
                    : "bg-[#112240] hover:bg-opacity-80"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveSection("publications")}
                className={`px-3 py-1 rounded-md transition-all duration-200 ${
                  activeSection === "publications"
                    ? "bg-[#64ffda] text-[#112240]"
                    : "bg-[#112240] hover:bg-opacity-80"
                }`}
              >
                Publications
              </button>
              <button
                onClick={() => setActiveSection("contact")}
                className={`px-3 py-1 rounded-md transition-all duration-200 ${
                  activeSection === "contact"
                    ? "bg-[#64ffda] text-[#112240]"
                    : "bg-[#112240] hover:bg-opacity-80"
                }`}
              >
                Contact
              </button>
              <button
                onClick={handleDownloadCV}
                className="bg-[#4fd1b5] text-[#112240] px-3 py-1 rounded-md transition-all duration-200 hover:bg-[#3da190]"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto pt-32 px-4">
        <section
          className={`${activeSection === "about" ? "block" : "hidden"}`}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-5xl font-bold mb-12 mt-12 bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text section-header">
                Hi, I'm Kerem
              </h2>
              <p className="text-[#8892b0] mb-4">
                Machine Learning Engineer at EPFL Blue Brain Project,
                specializing in MLOps and LLM development. I bridge the gap
                between artificial intelligence and neuroscience.
              </p>
              <div className="flex flex-wrap gap-3 my-6">
                <span className="px-3 py-1 bg-[#112240] rounded-full">
                  Multi-Agentic LLMs
                </span>
                <span className="px-3 py-1 bg-[#112240] rounded-full">
                  Neo4j
                </span>
                <span className="px-3 py-1 bg-[#112240] rounded-full">
                  Python
                </span>
                <span className="px-3 py-1 bg-[#112240] rounded-full">
                  GraphRAG
                </span>
                <span className="px-3 py-1 bg-[#112240] rounded-full">
                  MLOps
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://ucarecdn.com/fb725b0a-aac9-4b8e-bece-1366d27e6df1/-/format/auto/"
                alt="Profile photo of Kerem Kurban"
                className="w-[300px] h-[300px] rounded-full object-cover"
              />
            </div>
          </div>
          <div className="mb-12">
            <h3 className="text-5xl font-bold mb-12 mt-12 bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text section-header">
              Experience
            </h3>
            <div className="space-y-8">
              <div className="bg-[#112240] p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Machine Learning Engineer
                    </h3>
                    <p className="text-[#64ffda]">EPFL Blue Brain Project</p>
                  </div>
                  <span className="text-[#8892b0]">04/2024 - 01/2025</span>
                </div>
                <ul className="list-disc list-inside text-[#8892b0] space-y-2">
                  <li>
                    Led projects on semantic analysis of databases using Neo4j
                    and Python
                  </li>
                  <li>
                    Maintained and productionized AI software projects including
                    LLM agents and GraphRAG
                  </li>
                  <li>
                    Productionized AI chatbots with GraphRAG for unstructured
                    data and graph databases
                  </li>
                  <li>Deployed AI software suite on Kubernetes and AWS</li>
                  <li>
                    Developed front-end applications for chat interfaces using
                    React
                  </li>
                </ul>
              </div>

              <div className="bg-[#112240] p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Scientific Software Developer
                    </h3>
                    <p className="text-[#64ffda]">EPFL Blue Brain Project</p>
                  </div>
                  <span className="text-[#8892b0]">04/2021 - 04/2024</span>
                </div>
                <ul className="list-disc list-inside text-[#8892b0] space-y-2">
                  <li>
                    Lead projects on building and analyzing large-scale brain
                    region models
                  </li>
                  <li>
                    Published research papers on Spiking Neural Networks and
                    Graph Theory
                  </li>
                  <li>
                    Maintained and productionized software using CI/CD pipelines
                  </li>
                </ul>
              </div>

              <div className="bg-[#112240] p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Student Ambassador in AI
                    </h3>
                    <p className="text-[#64ffda]">Intel Nervana</p>
                  </div>
                  <span className="text-[#8892b0]">2018</span>
                </div>
                <ul className="list-disc list-inside text-[#8892b0] space-y-2">
                  <li>
                    Designed machine learning models for analyzing fMRI data
                  </li>
                  <li>
                    Showcased neuroscience research on Intel's AI platform
                  </li>
                </ul>
              </div>

              <div className="bg-[#112240] p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Software Engineer Intern
                    </h3>
                    <p className="text-[#64ffda]">Neurolize</p>
                  </div>
                  <span className="text-[#8892b0]">06/2016 - 09/2016</span>
                </div>
                <ul className="list-disc list-inside text-[#8892b0] space-y-2">
                  <li>
                    Performed marketing research using EEG and eye tracking
                  </li>
                  <li>
                    Analyzed online shopping interactions using classification
                    techniques
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-5xl font-bold mb-12 mt-12 bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text section-header">
              Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#112240] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">
                  Neo4j Certified Professional
                </h3>
                <p className="text-[#8892b0]">Neo4j GraphAcademy</p>
                <p className="text-[#64ffda] mt-2">2024</p>
              </div>
              <div className="bg-[#112240] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">LLMOps</h3>
                <p className="text-[#8892b0]">Deeplearning.ai</p>
                <p className="text-[#64ffda] mt-2">2024</p>
              </div>
              <div className="bg-[#112240] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">
                  AI Agents in LangGraph
                </h3>
                <p className="text-[#8892b0]">Deeplearning.ai</p>
                <p className="text-[#64ffda] mt-2">2024</p>
              </div>
              <div className="bg-[#112240] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">
                  Fine Tuning Large Language Models
                </h3>
                <p className="text-[#8892b0]">Deeplearning.ai</p>
                <p className="text-[#64ffda] mt-2">2024</p>
              </div>
              <div className="bg-[#112240] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">
                  Quantization Fundamentals in Hugging Face
                </h3>
                <p className="text-[#8892b0]">Deeplearning.ai</p>
                <p className="text-[#64ffda] mt-2">2024</p>
              </div>
              <div className="bg-[#112240] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">AWS Foundations</h3>
                <p className="text-[#8892b0]">Amazon Web Services</p>
                <p className="text-[#64ffda] mt-2">2024</p>
              </div>
              <div className="bg-[#112240] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">AWS Bedrock</h3>
                <p className="text-[#8892b0]">Amazon Web Services</p>
                <p className="text-[#64ffda] mt-2">2024</p>
              </div>
              <div className="bg-[#112240] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">
                  Infrastructure as Code in Google Cloud Platform
                </h3>
                <p className="text-[#8892b0]">LinkedIn Learning</p>
                <p className="text-[#64ffda] mt-2">2024</p>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${
            activeSection === "certifications" ? "block" : "hidden"
          }`}
        >
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#112240] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                AWS Machine Learning Specialty
              </h3>
              <p className="text-[#8892b0]">Amazon Web Services</p>
              <p className="text-[#64ffda] mt-2">2023</p>
            </div>
            <div className="bg-[#112240] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                Neo4j Certified Professional
              </h3>
              <p className="text-[#8892b0]">Neo4j GraphAcademy</p>
              <p className="text-[#64ffda] mt-2">2023</p>
            </div>
            <div className="bg-[#112240] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                Deep Learning Specialization
              </h3>
              <p className="text-[#8892b0]">Coursera</p>
              <p className="text-[#64ffda] mt-2">2022</p>
            </div>
            <div className="bg-[#112240] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">LLMOps</h3>
              <p className="text-[#8892b0]">deeplearning.ai</p>
              <p className="text-[#64ffda] mt-2">2024</p>
            </div>
            <div className="bg-[#112240] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                Fine Tuning Large Language Models
              </h3>
              <p className="text-[#8892b0]">deeplearning.ai</p>
              <p className="text-[#64ffda] mt-2">2024</p>
            </div>
            <div className="bg-[#112240] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                Quantization Fundamentals with Hugging Face
              </h3>
              <p className="text-[#8892b0]">deeplearning.ai</p>
              <p className="text-[#64ffda] mt-2">2024</p>
            </div>
            <div className="bg-[#112240] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                Infrastructure as Code in Google Cloud Platform
              </h3>
              <p className="text-[#8892b0]">LinkedIn Learning</p>
              <p className="text-[#64ffda] mt-2">2024</p>
            </div>
          </div>
        </section>

        <section
          className={`${activeSection === "projects" ? "block" : "hidden"}`}
        >
          <h2 className="text-5xl font-bold mb-12 mt-12 bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text section-header">
            Featured Projects
          </h2>
          <div className="flex gap-4 mb-8 flex-wrap">
            <button
              onClick={() => setActiveTag("all")}
              className={`px-4 py-2 rounded ${
                activeTag === "all"
                  ? "bg-[#64ffda] text-[#112240]"
                  : "bg-[#112240]"
              }`}
            >
              All
            </button>
            {[
              "Neo4j",
              "LLM",
              "AI-agents",
              "RAG",
              "neuroscience",
              "Python",
              "AWS",
              "HTML/CSS",
              "Docker",
              "API",
              "Vite",
              "Three.js"
            ].map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded ${
                  activeTag === tag
                    ? "bg-[#64ffda] text-[#112240]"
                    : "bg-[#112240]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-[#112240] p-8 rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleProjectClick(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-[#8892b0] mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#1a1a1a] rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section
          className={`${activeSection === "publications" ? "block" : "hidden"}`}
        >
          <h2 className="text-5xl font-bold mb-12 mt-12 bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text section-header">
            Publications
          </h2>
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={handleDownloadPublications}
              className="bg-[#64ffda] text-[#112240] px-4 py-2 rounded hover:bg-[#4fd1b5]"
            >
              Download All Publications
            </button>
            {pubTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setPubTag(tag)}
                className={`px-4 py-2 rounded ${
                  pubTag === tag
                    ? "bg-[#64ffda] text-[#112240]"
                    : "bg-[#112240]"
                }`}
              >
                {tag === "all" ? "All" : tag}
              </button>
            ))}
          </div>
          <div className="space-y-6">
            {filteredPubs.map((pub, index) => (
              <div key={index} className="bg-[#112240] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
                <p className="text-[#8892b0] mb-2">{pub.authors}</p>
                <p className="text-[#8892b0] mb-4">
                  {pub.type} - {pub.venue}, {pub.year}
                </p>
                {pub.image && (
                  <div>
                    <button
                      onClick={() =>
                        setExpandedPosters((prev) => ({
                          ...prev,
                          [index]: !prev[index],
                        }))
                      }
                      className="bg-[#64ffda] text-[#112240] px-4 py-2 rounded mb-4 hover:bg-[#4fd1b5]"
                    >
                      {expandedPosters[index] ? "Hide Poster" : "See Poster"}
                    </button>
                    {expandedPosters[index] && (
                      <img
                        src={pub.image}
                        alt={`Poster for ${pub.title}`}
                        className="w-full rounded-lg mb-4"
                      />
                    )}
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#1a1a1a] rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#64ffda] hover:underline"
                  >
                    Read Paper
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section
          className={`${activeSection === "contact" ? "block" : "hidden"}`}
        >
          <h2 className="text-5xl font-bold mb-12 mt-12 bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text section-header">
            Get in Touch
          </h2>
          <div className="bg-[#112240] p-8 rounded-lg max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <i className="fas fa-envelope text-[#64ffda]"></i>
                    <a
                      href="mailto:keremkurban@hotmail.com"
                      className="text-[#8892b0] hover:text-[#64ffda]"
                    >
                      keremkurban@hotmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fas fa-map-marker-alt text-[#64ffda]"></i>
                    <span className="text-[#8892b0]">Geneve, Switzerland</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Social Links</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <i className="fab fa-github text-[#64ffda]"></i>
                    <a
                      href="https://github.com/KeremKurban"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8892b0] hover:text-[#64ffda]"
                    >
                      GitHub Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fab fa-linkedin text-[#64ffda]"></i>
                    <a
                      href="https://linkedin.com/in/kerem-kurban-5a40a1117"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8892b0] hover:text-[#64ffda]"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-[#112240] p-8 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                <button
                  onClick={closeModal}
                  className="text-[#8892b0] hover:text-[#64ffda]"
                >
                  <i className="fas fa-times text-2xl"></i>
                </button>
              </div>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-[400px] object-cover rounded-lg mb-6"
              />
              <p className="text-[#8892b0] mb-6">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#1a1a1a] rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#64ffda] text-[#112240] px-4 py-2 rounded hover:bg-[#4fd1b5] flex items-center gap-2"
                >
                  <i className="fab fa-github"></i>
                  View on GitHub
                </a>
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#64ffda] text-[#112240] px-4 py-2 rounded hover:bg-[#4fd1b5] flex items-center gap-2"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    View Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
      <style jsx global>{`
        @keyframes textShadowPulse {
          0% {
            text-shadow: 0 0 8px rgba(103, 232, 249, 0.1);
          }
          50% {
            text-shadow: 0 0 16px rgba(103, 232, 249, 0.3);
          }
          100% {
            text-shadow: 0 0 8px rgba(103, 232, 249, 0.1);
          }
        }
        .section-header {
          animation: textShadowPulse 3s ease-in-out infinite;
          position: relative;
        }
        .section-header::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 0;
          width: 60px;
          height: 4px;
          background: #67e8f9;
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
}


