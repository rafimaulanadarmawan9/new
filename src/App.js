import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Download,
  Menu,
  X,
  Code2,
  Camera,
  Palette,
  Mail,
  MapPin,
  ExternalLink,
  Sparkles,
  Moon,
  Sun,
} from "lucide-react";

import "./App.css";



/* =========================================================
   EXPERIENCE
========================================================= */

const experiences = [
  {
    id: "01",
    year: "2026",
    type: "INTERNSHIP",
    title: "DPRD PROV JABAR",
    place: "Jl. Dipenogoro Kota Bandung",
    "short":
     "Experience providing IT support for the Gerindra Party Fraction at the West Java Regional House of Representatives (DPRD Provinsi Jabar), strengthening technical troubleshooting, network maintenance, and hardware/software assistance.",
  "detail": "An IT support internship/role within the Gerindra Party Fraction at the West Java DPRD, focusing on maintaining operational technology, troubleshooting hardware and software issues, supporting digital administration, and ensuring smooth technical workflows for office staff.",
  "responsibilities": [
    "Providing technical support and troubleshooting for office computers, printers, and peripherals.",
    "Assisting with network maintenance, internet connectivity, and basic IT infrastructure support.",
    "Helping staff with software installation, updates, and digital document management.",
    "Maintaining accuracy and attention to detail while handling technical support tickets or requests.",
    "Developing professional communication skills while assisting members and staff with IT-related issues."
    ],
  },
  {
    id: "02",
    year: "2024 — 2025",
    type: "ORGANIZATION",
    title: "Ketua Umum",
    place: "Himpunan Mahasiswa Islam Komisariat Teknik UNIKOM",
    "short": 
    "Led the organization, following a previous tenure in the Department of Science Studies where I actively organized academic and non-academic discussion forums.",
  "detail": "Served as General Chairperson of the Himpunan Mahasiswa Islam Komisariat Teknik UNIKOM. Prior to holding the presidency, I served in the Department of Science Studies, where I was highly active in organizing and facilitating academic and non-academic discussion forums, intellectual dialogues, and student capability-building programs.",
  "responsibilities": [
    "Leading the overall strategic direction, decision-making, administration, and execution of organizational policies.",
    "Supervising all division work plans, member development initiatives, and association programs.",
    "Coordinating internal departments and fostering strong synergy among executive board members.",
    "Representing the organization in external relations, institutional communications, and official forums.",
    "Overseeing organizational governance, financial planning, and accountability reports.",
    "Spearheading and organizing academic and non-academic study forums during my previous tenure in the Science Studies Department."
    ],
  },
  {
    id: "03",
    year: "2023 — 2024",
    type: "ORGANIZATION",
    title: "Ketua Fraksi Fakultas Teknik & Anggota Komisi IV",
    place: "Majelis Permusyawaratan Mahasiswa & Dewan Perwakilan Mahasiswa",
   "short": 
   "Oversaw supervisory functions aligned with ministry portfolios under the Coordinating Ministry for Political, Legal, and Security Affairs, enforcing regulations and resolving financial irregularities.",
  "detail": "Served as a student representative and member of Commission IV, taking charge of regulatory compliance, monitoring executive operations equivalent to ministries under the Coordinating Ministry for Political, Legal, and Security Affairs, and proactively investigating and resolving cases of fund misappropriation and policy violations.",
  "responsibilities": [
    "Conducting legislative oversight and monitoring compliance with organizational regulations and standard procedures.",
    "Investigating and resolving issues related to financial irregularities, fund misuse, and budget accountability within supervised entities.",
    "Enforcing strict adherence to rules, governance standards, and ethical guidelines.",
    "Reviewing administrative and financial reports to detect discrepancies and ensure transparent fund utilization.",
    "Coordinating with internal factions and relevant stakeholders to resolve policy violations and disciplinary issues.",
    "Formulating recommendations and resolutions to address operational and financial discrepancies effectively."
    ],
  },
  {
    id: "04",
    year: "2023 — 2024",
    type: "ORGANIZATION",
    title: "Angkatan Muda KWU",
    place: "Himpunan Mahasiswa Informatika",
   "short": 
   "Contributed to entrepreneurial programs and business initiatives as a Junior Member of the Entrepreneurship Division in the Informatics Student Association.",
  "detail": "Active involvement as a junior member of the entrepreneurship division within the Informatics Student Association, building practical skills in teamwork, creative business project execution, event planning, and small-scale commercial operations.",
  "responsibilities": [
    "Assisting with the planning and execution of student entrepreneurship programs and bazaars.",
    "Supporting product marketing, promotion, and sales operations for association merchandise or ventures.",
    "Collaborating with team members to brainstorm innovative business ideas and fundraising activities.",
    "Helping manage inventory, financial records, and operational logistics for entrepreneurial events.",
    "Developing teamwork, communication, and basic commercial management skills within an active student organization."
    ],
  },
];

/* =========================================================
   DIGITAL PROJECTS
========================================================= */

const digitalProjects = [
  {
    id: "01",
    category: "WEB / UI UX",
    title:
      "Sistem Informasi Administrasi & Kaderisasi HMI",
    description:
      "Perancangan UI/UX dan konsep sistem informasi administrasi serta kaderisasi berbasis web dengan pendekatan User-Centered Design.",
    stack: ["UI/UX", "Web", "UCD"],
  },
  {
    id: "02",
    category: "FRONTEND",
    title: "Modern Web Experience",
    description:
      "Eksplorasi website modern dengan responsive layout, interactive interface, clean typography, dan visual storytelling.",
    stack: ["React", "CSS", "JavaScript"],
  },
  {
    id: "03",
    category: "UI / UX",
    title: "Administrative Dashboard",
    description:
      "Perancangan dashboard yang berfokus pada hierarchy informasi, usability, navigasi, dan pengalaman pengguna.",
    stack: ["Figma", "UI/UX", "Dashboard"],
  },
  {
    id: "04",
    category: "WEB DEVELOPMENT",
    title: "Responsive Organization Website",
    description:
      "Konsep website organisasi dengan fokus pada responsive layout, struktur informasi, dan visual identity.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "05",
    category: "INTERFACE",
    title: "Digital Administration Interface",
    description:
      "Eksplorasi interface untuk kebutuhan administrasi digital dengan struktur navigasi yang sederhana dan modern.",
    stack: ["UI", "UX", "Prototype"],
  },
  {
    id: "06",
    category: "WEB CONCEPT",
    title: "Creative Portfolio Website",
    description:
      "Eksplorasi website portfolio kreatif dengan pendekatan minimal, editorial, modern, dan interactive.",
    stack: ["React", "Design", "Frontend"],
  },
];

/* =========================================================
   CREATIVE PROJECTS
========================================================= */

const creativeProjects = [
  {
    id: "01",
    category: "GRAPHIC DESIGN",
    title: "Event Visual Identity",
    description:
      "Eksplorasi identitas visual event mulai dari entrance gate, banner, backdrop hingga visual branding.",
    stack: ["Design", "Branding", "Event"],
  },
  {
    id: "02",
    category: "PHOTOGRAPHY",
    title: "Photography Series",
    description:
      "Eksplorasi photography dengan fokus terhadap composition, framing, lighting, dan visual storytelling.",
    stack: ["Photo", "Lighting", "Story"],
  },
  {
    id: "03",
    category: "VISUAL EDITING",
    title: "Creative Editing",
    description:
      "Eksplorasi editing dan manipulasi visual untuk menghasilkan karya yang memiliki karakter dan visual impact.",
    stack: ["Editing", "Retouch", "Visual"],
  },
  {
    id: "04",
    category: "EVENT DESIGN",
    title: "Entrance Gate Design",
    description:
      "Pengembangan konsep visual entrance gate dengan permainan geometry, lighting, typography, material, dan branding.",
    stack: ["3D", "Event", "Visual"],
  },
  {
    id: "05",
    category: "SOCIAL MEDIA",
    title: "Digital Campaign Visual",
    description:
      "Eksplorasi visual campaign untuk kebutuhan digital dengan fokus pada hierarchy, consistency, dan visual impact.",
    stack: ["Campaign", "Design", "Content"],
  },
  {
    id: "06",
    category: "PHOTO EDITING",
    title: "Portrait Visual Treatment",
    description:
      "Eksplorasi pengolahan portrait dengan perhatian pada lighting, tone, composition, dan finishing.",
    stack: ["Portrait", "Editing", "Color"],
  },
];

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, creative = false }) {
  return (
    <article className="project-card reveal">
      <div className="project-card-top">
        <span>{project.id}</span>
        <ArrowUpRight size={18} />
      </div>

      <div className="project-visual">
        {creative ? (
          <div className="creative-visual">
            <div className="creative-glow" />
            <Camera size={55} />

            <span>
              LIGHT
              <br />
              / FRAME
              <br />
              / STORY
            </span>
          </div>
        ) : (
          <>
            <div className="screen-glow" />

            <div className="fake-browser">
              <div className="browser-top">
                <span />
                <span />
                <span />
              </div>

              <div className="browser-content">
                <div className="browser-sidebar">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>

                <div className="browser-main">
                  <div className="fake-heading" />

                  <div className="fake-blocks">
                    <i />
                    <i />
                    <i />
                  </div>

                  <div className="fake-chart">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="project-card-body">
        <span className="project-category">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tech-list">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <button className="project-view">
        View Concept
        <ExternalLink size={15} />
      </button>
    </article>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  const [activeTab, setActiveTab] = useState("digital");
  const [menuOpen, setMenuOpen] = useState(false);
  const [nightMode, setNightMode] = useState(false);

  const [currentView, setCurrentView] =
    useState("home");

  const [selectedExperience, setSelectedExperience] =
    useState(null);

  const [scrollProgress, setScrollProgress] =
    useState(0);

  /* =======================================================
     SCROLL
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setScrollProgress(progress);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  useEffect(() => {
    const elements =
      document.querySelectorAll(".reveal");

    if (!elements.length) {
      return;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(
                "reveal-visible"
              );

              observer.unobserve(
                entry.target
              );
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin:
            "0px 0px -50px 0px",
        }
      );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [currentView, activeTab]);

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const goHome = () => {
    setCurrentView("home");
    setSelectedExperience(null);
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToSection = (id) => {
    setCurrentView("home");
    setSelectedExperience(null);
    setMenuOpen(false);

    setTimeout(() => {
      const element =
        document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);
  };

  const openExperience = (experience) => {
    setSelectedExperience(experience);
    setCurrentView(
      "experience-detail"
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openArchive = (type) => {
    setCurrentView(
      type === "digital"
        ? "digital-archive"
        : "creative-archive"
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const backHome = () => {
    setCurrentView("home");
    setSelectedExperience(null);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 20);
  };

  /* =======================================================
     EXPERIENCE DETAIL
  ======================================================= */

  const renderExperienceDetail = () => {
    if (!selectedExperience) {
      return null;
    }

    return (
      <main className="detail-page">
        <div className="detail-container">
          <button
            className="back-orbit"
            onClick={backHome}
          >
            ← BACK TO UNIVERSE
          </button>

          <div className="detail-hero reveal">
            <span className="mini-label">
              {selectedExperience.type}
            </span>

            <div className="detail-number">
              {selectedExperience.id}
            </div>

            <h1>
              {selectedExperience.title}
              <br />
              <em>
                {selectedExperience.year}
              </em>
            </h1>

            <p className="detail-place">
              {selectedExperience.place}
            </p>
          </div>

          <div className="detail-grid">
            <div className="detail-main reveal">
              <span className="detail-label">
                OVERVIEW
              </span>

              <h2>
                Experience that shaped how
                I work.
              </h2>

              <p>
                {selectedExperience.detail}
              </p>
            </div>

            <div className="detail-side reveal">
              <span className="detail-label">
                KEY RESPONSIBILITIES
              </span>

              <div className="responsibility-list">
                {selectedExperience.responsibilities.map(
                  (item, index) => (
                    <div
                      className="responsibility"
                      key={item}
                    >
                      <span>
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </span>

                      <p>{item}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="detail-footer reveal">
            <div>
              <span>EXPERIENCE</span>

              <strong>
                {selectedExperience.year}
              </strong>
            </div>

            <div>
              <span>FIELD</span>

              <strong>
                {selectedExperience.type}
              </strong>
            </div>

            <button onClick={backHome}>
              BACK TO EXPERIENCE
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </main>
    );
  };

  /* =======================================================
     ARCHIVE
  ======================================================= */

  const renderArchive = (
    creative = false
  ) => {
    const items = creative
      ? creativeProjects
      : digitalProjects;

    return (
      <main className="archive-page">
        <div className="archive-container">
          <button
            className="back-orbit"
            onClick={backHome}
          >
            ← BACK TO UNIVERSE
          </button>

          <div className="archive-heading reveal">
            <span className="mini-label">
              PROJECT ARCHIVE
            </span>

            <h1>
              {creative ? (
                <>
                  EDITING &
                  <br />
                  <em>PHOTOGRAPHY.</em>
                </>
              ) : (
                <>
                  INFORMATICS &
                  <br />
                  <em>WEB.</em>
                </>
              )}
            </h1>

            <p>
              {creative
                ? "A collection of visual experiments, photography, editing, branding, and creative direction."
                : "A collection of web development, UI/UX, frontend, dashboard, and digital interface explorations."}
            </p>
          </div>

          <div className="archive-filter">
            <div>
              <span>ARCHIVE</span>
              <strong>{items.length}</strong>
            </div>

            <div>
              <span>MODE</span>
              <strong>
                {creative
                  ? "CREATIVE"
                  : "DIGITAL"}
              </strong>
            </div>
          </div>

          <div className="archive-grid">
            {items.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                creative={creative}
              />
            ))}
          </div>

          <div className="archive-back reveal">
            <button onClick={backHome}>
              <ArrowUpRight size={17} />
              BACK TO MAIN PORTFOLIO
            </button>
          </div>
        </div>
      </main>
    );
  };

  /* =======================================================
     HOME
  ======================================================= */

  const renderHome = () => {
    return (
      <main>
        {/* ================= HERO ================= */}

        <section
          id="home"
          className="hero section-space"
        >
          <div className="hero-container">
            <div className="hero-content reveal">
              <div className="system-status">
                <span className="status-dot" />

                SYSTEM ONLINE

                <span className="status-separator">
                  /
                </span>

                PORTFOLIO 2026
              </div>

              <div className="hero-title-wrap">
                <div className="hero-small-title">
                  WELCOME TO MY
                </div>

                <h1>
                  CREATIVE
                  <br />
                  <span>UNIVERSE</span>
                  <b>.</b>
                </h1>
              </div>

              <p className="hero-description">
                I'm{" "}
                <strong>
                  Rafi Maulana Darmawan
                </strong>{" "}
                — a student exploring the
                intersection of{" "}
                <span>technology</span>,{" "}
                <span>design</span>, and{" "}
                <span>
                  visual creativity
                </span>
                .
              </p>

              <div className="hero-buttons">
                <button
                  className="primary-button"
                  onClick={() =>
                    goToSection(
                      "projects"
                    )
                  }
                >
                  Explore Projects
                  <ArrowUpRight size={18} />
                </button>

                <a
                  className="secondary-button"
                  href="/cv-rafi-maulana-darmawan.pdf"
                  download
                >
                  <Download size={17} />
                  Download CV
                </a>
              </div>

              <div className="hero-meta">
                <div>
                  <span>BASED IN</span>
                  <strong>INDONESIA</strong>
                </div>

                <div>
                  <span>FOCUS</span>
                  <strong>
                    TECH × CREATIVE
                  </strong>
                </div>

                <div>
                  <span>STATUS</span>
                  <strong className="available">
                    STUDENT
                  </strong>
                </div>
              </div>
            </div>

            {/* ================= 3D PROFILE ================= */}

            <div className="hero-object reveal">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />

              <div className="planet-glow" />

              <div className="profile-platform">
                <div className="profile-header">
                  <span>
                    PROFILE_001
                  </span>

                  <span>ONLINE</span>
                </div>

                <div className="profile-image-container">
                  <img
                    src="/profile.jpg"
                    alt="Rafi Maulana Darmawan"
                    className="profile-image"
                    onError={(event) => {
                      event.currentTarget.style.display =
                        "none";

                      event.currentTarget.parentElement.classList.add(
                        "image-fallback"
                      );
                    }}
                  />

                  <div className="profile-fallback-content">
                    <span></span>

                    <strong></strong>

                    <small>
                      
                    </small>
                  </div>
                </div>

                <div className="profile-footer">
                  <div>
                    <span>SUBJECT</span>

                    <strong>
                      RAFI
                    </strong>
                  </div>

                  <div>
                    <span>LEVEL</span>

                    <strong>
                      CREATIVE
                    </strong>
                  </div>
                </div>
              </div>

              <div className="floating-orbit-card card-top">
                <Sparkles size={14} />

                <div>
                  <small>
                    CREATIVE MODE
                  </small>

                  <strong>ON</strong>
                </div>
              </div>

              <div className="floating-orbit-card card-bottom">
                <Code2 size={15} />

                <div>
                  <small>BUILDING</small>

                  <strong>
                    DIGITAL WORLDS
                  </strong>
                </div>
              </div>

              <div className="coordinate">
                <span>
                  LAT 06.9175° S
                </span>

                <span>
                  LON 107.6191° E
                </span>
              </div>
            </div>
          </div>

          <button
            className="hero-scroll"
            onClick={() =>
              goToSection("about")
            }
          >
            <span>
              SCROLL TO EXPLORE
            </span>

            <ChevronDown size={15} />
          </button>
        </section>

        {/* ================= MARQUEE ================= */}

        <section className="cosmic-marquee">
          <div className="marquee-inner">
            <span>
              WEB DEVELOPMENT
            </span>
            <i>✦</i>

            <span>
              UI / UX DESIGN
            </span>
            <i>✦</i>

            <span>
              PHOTOGRAPHY
            </span>
            <i>✦</i>

            <span>
              CREATIVE EDITING
            </span>
            <i>✦</i>

            <span>
              VISUAL STORYTELLING
            </span>
            <i>✦</i>

            <span>
              WEB DEVELOPMENT
            </span>
            <i>✦</i>

            <span>
              UI / UX DESIGN
            </span>
            <i>✦</i>

            <span>
              PHOTOGRAPHY
            </span>
            <i>✦</i>
          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section
          id="about"
          className="content-section section-space"
        >
          <div className="section-head reveal">
            <div>
              <span className="section-code">
                01
              </span>

              <span className="section-name">
                ABOUT
              </span>
            </div>

            <div className="section-line" />
          </div>

          <div className="about-layout">
            <div className="big-statement reveal">
              <span>NOT JUST</span>
              <em>CODE.</em>
            </div>

            <div className="about-copy reveal">
              <p className="highlight-copy">
                I enjoy turning ideas into digital
                and visual experiences that feel
                purposeful, modern, and memorable.
              </p>

              <p>
                My background in Software
                Engineering has shaped the way I
                approach technology, logical
                thinking, problem solving, and
                digital product development.
              </p>

              <p>
                Alongside technology, I have a
                strong interest in UI/UX,
                creative editing, graphic design,
                photography, and visual
                storytelling.
              </p>

              <div className="stat-grid">
                <div className="stat-card">
                  <strong>RPL</strong>
                  <span>
                    SOFTWARE ENGINEERING
                  </span>
                </div>

                <div className="stat-card">
                  <strong>
                    UNIKOM
                  </strong>
                  <span>
                    CURRENTLY STUDYING
                  </span>
                </div>

                <div className="stat-card">
                  <strong>∞</strong>
                  <span>
                    CURIOSITY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}

        <section
          id="experience"
          className="content-section section-space"
        >
          <div className="section-head reveal">
            <div>
              <span className="section-code">
                02
              </span>

              <span className="section-name">
                EXPERIENCE
              </span>
            </div>

            <div className="section-line" />
          </div>

          <div className="timeline">
            {experiences.map(
              (experience, index) => (
                <article
                  className="timeline-item reveal"
                  key={experience.id}
                  style={{
                    transitionDelay: `${index * 80}ms`,
                  }}
                >
                  <div className="timeline-date">
                    {experience.year}
                  </div>

                  <div className="timeline-dot" />

                  <div className="timeline-content">
                    <span>
                      {experience.type}
                    </span>

                    <h3>
                      {experience.title}
                    </h3>

                    <h4>
                      {experience.place}
                    </h4>

                    <p>
                      {experience.short}
                    </p>

                    <button
                      className="experience-more"
                      onClick={() =>
                        openExperience(
                          experience
                        )
                      }
                    >
                      Lihat Selengkapnya
                      <ArrowUpRight
                        size={15}
                      />
                    </button>
                  </div>

                  <ArrowUpRight className="timeline-arrow" />
                </article>
              )
            )}
          </div>
        </section>

        {/* ================= EDUCATION ================= */}

        <section
          id="education"
          className="education-section section-space"
        >
          <div className="section-head reveal">
            <div>
              <span className="section-code">
                03
              </span>

              <span className="section-name">
                EDUCATION
              </span>
            </div>

            <div className="section-line" />
          </div>

          <div className="education-list">
            {/* SMK */}

            <article className="education-item reveal">
              <div className="education-number">
                01
              </div>

              <div className="education-info">
                <span className="education-status">
                  VOCATIONAL HIGH SCHOOL
                </span>

                <h2>
                  SMK Bakti Nusantara 666
                </h2>

                <p className="education-major">
                  Rekayasa Perangkat Lunak

                  <span>
                    RPL
                  </span>
                </p>

                <p className="education-description">
                  Vocational education with a
                  focus on software development,
                  programming, information
                  technology, and digital
                  problem solving.
                </p>
              </div>

              <div className="education-meta">
                <span>
                  FINAL GRADE
                </span>

                <strong>—</strong>

                <small>
                  To be filled later
                </small>
              </div>
            </article>

            {/* UNIKOM */}

            <article className="education-item education-current reveal">
              <div className="education-number">
                02
              </div>

              <div className="education-info">
                <span className="education-status current">
                  CURRENTLY STUDYING
                </span>

                <h2>
                  Universitas Komputer
                  <br />
                  Indonesia
                </h2>

                <p className="education-major">
                  Sarjana / S1

                  <span>
                    UNIKOM
                  </span>
                </p>

                <p className="education-description">
                  Currently pursuing higher
                  education while developing
                  interests and skills in
                  technology, software development,
                  digital products, design, and
                  creative projects.
                </p>
              </div>

              <div className="education-meta">
                <span>
                  STATUS
                </span>

                <strong className="active-study">
                  ACTIVE
                </strong>

                <small>
                  Final grade not available yet
                </small>
              </div>
            </article>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}

        <section
          id="projects"
          className="content-section section-space"
        >
          <div className="section-head reveal">
            <div>
              <span className="section-code">
                04
              </span>

              <span className="section-name">
                PROJECTS
              </span>
            </div>

            <div className="section-line" />
          </div>

          <div className="projects-intro reveal">
            <div>
              <span className="mini-label">
                SELECTED WORK
              </span>

              <h2>
                FROM CODE
                <br />

                <em>
                  TO CREATIVE.
                </em>
              </h2>
            </div>

            <p>
              Two worlds. One portfolio.
              Technology on one side, visual
              creativity on the other.
            </p>
          </div>

          <div className="project-switcher reveal">
            <button
              className={
                activeTab === "digital"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("digital")
              }
            >
              <Code2 size={17} />

              Informatics & Web
            </button>

            <button
              className={
                activeTab === "creative"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("creative")
              }
            >
              <Camera size={17} />

              Editing & Photography
            </button>
          </div>

          <div className="project-grid">
            {(activeTab === "digital"
              ? digitalProjects.slice(0, 3)
              : creativeProjects.slice(0, 3)
            ).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                creative={
                  activeTab === "creative"
                }
              />
            ))}
          </div>

          <div className="archive-button-wrap reveal">
            <button
              className="archive-button"
              onClick={() =>
                openArchive(activeTab)
              }
            >
              Lihat Arsip Lain

              <ArrowUpRight size={17} />
            </button>
          </div>
        </section>

        {/* ================= SKILLS ================= */}

        <section className="content-section section-space">
          <div className="section-head reveal">
            <div>
              <span className="section-code">
                05
              </span>

              <span className="section-name">
                SKILLS
              </span>
            </div>

            <div className="section-line" />
          </div>

          <div className="skills-grid">
            <div className="skill-box reveal">
              <div className="skill-icon">
                <Code2 />
              </div>

              <span>DIGITAL</span>

              <h3>
                Technology
              </h3>

              <div className="skill-tags">
                <i>HTML</i>
                <i>CSS</i>
                <i>JavaScript</i>
                <i>React.js</i>
                <i>UI/UX</i>
                <i>
                  Responsive Design
                </i>
              </div>
            </div>

            <div className="skill-box reveal">
              <div className="skill-icon">
                <Palette />
              </div>

              <span>CREATIVE</span>

              <h3>
                Visual Design
              </h3>

              <div className="skill-tags">
                <i>Graphic Design</i>
                <i>Photo Editing</i>
                <i>Branding</i>
                <i>Visual Design</i>
                <i>Event Design</i>
              </div>
            </div>

            <div className="skill-box reveal">
              <div className="skill-icon">
                <Camera />
              </div>

              <span>PERSONAL</span>

              <h3>
                Human Skills
              </h3>

              <div className="skill-tags">
                <i>Leadership</i>
                <i>Communication</i>
                <i>Teamwork</i>
                <i>Problem Solving</i>
                <i>
                  Attention to Detail
                </i>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="contact-section"
        >
          <div className="contact-stars" />

          <div className="contact-container">
            <span className="mini-label">
              FINAL TRANSMISSION
            </span>

            <h2>
              LET'S BUILD
              <br />
              <em>
                SOMETHING.
              </em>
            </h2>

            <p>
              Have a project, opportunity,
              collaboration, or simply want to
              say hello? Open the channel.
            </p>

            <a
              href="mailto:rafimaulanadarmawan09@gmail.com"
              className="email-link"
            >
              <Mail size={19} />

              rafimaulanadarmawan09@gmail.com

              <ArrowUpRight size={19} />
            </a>

            <div className="contact-info-grid">
              <div>
                <MapPin size={16} />
                <span>
                  Bandung,Jawa Barat
                </span>
              </div>

              <div>
                <Sparkles size={16} />
                <span>
                  CREATIVE / DIGITAL
                </span>
              </div>
            </div>

            <div className="social-grid">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-symbol">
                  IG
                </span>

                Instagram
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-symbol">
                  IN
                </span>

                LinkedIn
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-symbol">
                  GH
                </span>

                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  };

  /* =======================================================
     FINAL RENDER
  ======================================================= */

  return (
    <div
      className={`portfolio ${
        nightMode
          ? "night-mode"
          : ""
      }`}
    >
      <div
        className="scroll-progress"
        style={{
          width: `${scrollProgress}%`,
        }}
      />

      {/* SPACE BACKGROUND */}

      <div className="space-background">
        <div className="stars stars-one" />
        <div className="stars stars-two" />
        <div className="stars stars-three" />

        <div className="nebula nebula-one" />
        <div className="nebula nebula-two" />

        <div className="space-grid" />
      </div>

      {/* NAVBAR */}

      <header className="navbar">
        <div className="nav-container">
          <button
            className="brand"
            onClick={goHome}
            aria-label="Go to home"
          >
            <span className="brand-symbol">
              R
            </span>

            <span className="brand-text">
              RAFI<span>.</span>
            </span>
          </button>

          <nav
            className={`nav-menu ${
              menuOpen
                ? "show"
                : ""
            }`}
          >
            <button
              onClick={() =>
                goToSection("home")
              }
            >
              Home
            </button>

            <button
              onClick={() =>
                goToSection("about")
              }
            >
              About
            </button>

            <button
              onClick={() =>
                goToSection("experience")
              }
            >
              Experience
            </button>

            <button
              onClick={() =>
                goToSection("education")
              }
            >
              Education
            </button>

            <button
              onClick={() =>
                goToSection("projects")
              }
            >
              Projects
            </button>

            <button
              onClick={() =>
                goToSection("contact")
              }
            >
              Contact
            </button>
          </nav>

          <div className="nav-actions">
            <button
              className="mode-button"
              onClick={() =>
                setNightMode(
                  !nightMode
                )
              }
              aria-label="Toggle visual mode"
            >
              {nightMode ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )}
            </button>

            <button
              className="talk-button"
              onClick={() =>
                goToSection(
                  "contact"
                )
              }
            >
              Let's Talk
              <ArrowUpRight size={15} />
            </button>

            <button
              className="mobile-menu-button"
              onClick={() =>
                setMenuOpen(
                  !menuOpen
                )
              }
              aria-label="Toggle navigation"
            >
              {menuOpen ? (
                <X />
              ) : (
                <Menu />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* PAGE */}

      {currentView === "home" &&
        renderHome()}

      {currentView ===
        "experience-detail" &&
        renderExperienceDetail()}

      {currentView ===
        "digital-archive" &&
        renderArchive(false)}

      {currentView ===
        "creative-archive" &&
        renderArchive(true)}

      {/* FOOTER */}
<footer className="footer">
  <div className="footer-left">
    <div className="footer-brand">
      <span className="footer-brand-mark">R</span>

      <div>
        <strong>RAFI<span>.</span></strong>
        <small>CREATIVE DEVELOPER</small>
      </div>
    </div>
  </div>

  <div className="footer-center">
    <div className="footer-system">
      <span className="footer-status-dot"></span>
      SYSTEM ACTIVE
    </div>

    <div className="footer-line">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <p>
      © 2026 Rafi Maulana Darmawan
    </p>
  </div>

  <button
    className="footer-top"
    onClick={goHome}
  >
    <span>BACK TO ORBIT</span>
    <ArrowUpRight size={15} />
  </button>
</footer>
    </div>
  );
}

export default App;