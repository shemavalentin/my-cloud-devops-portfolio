
import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  Cloud,
  Terminal,
  Boxes,
  GitBranch,
  ShieldCheck,
  Server,
  Workflow,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const technologies = [
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
  "GitHub Actions",
  "Linux",
  "Python",
  "Node.js",
  "Next.js",
  "PostgreSQL",
];

const projects = [
  {
    number: "01",
    category: "CLOUD INFRASTRUCTURE",
    title: "AWS High Availability Architecture",
    description:
      "Designing resilient AWS environments with networking, load balancing, private subnets, managed databases and secure infrastructure.",
    stack: ["AWS", "VPC", "RDS", "ALB", "Terraform"],
  },
  {
    number: "02",
    category: "DEVOPS & AUTOMATION",
    title: "CI/CD Automation Platform",
    description:
      "Building automated delivery workflows that test, build, package and deploy applications using modern CI/CD practices.",
    stack: ["GitHub Actions", "Docker", "ECR", "AWS"],
  },
  {
    number: "03",
    category: "CONTAINER ORCHESTRATION",
    title: "Kubernetes Container Platform",
    description:
      "Exploring container orchestration, declarative deployments, service discovery, scaling and platform observability.",
    stack: ["Kubernetes", "Docker", "Helm", "Prometheus"],
  },
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <header className="navbar">
        <Link href="#home" className="logo">
          VS<span>.</span>
          <span className="logo-label">ENGINEERING</span>
        </Link>

        <nav className="nav-links">
          <Link href="#about">About</Link>
          <Link href="#technologies">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <Link href="#contact" className="nav-cta">
          Get in Touch <ArrowRight size={15} />
        </Link>
      </header>

      {/* Hero */}
      <section className="hero container" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            CLOUD · DEVOPS · SOFTWARE ENGINEERING
          </div>

          <p className="eyebrow">HELLO, I'M VALENTIN SHEMA</p>

          <h1>
            Cloud Infrastructure
            <span>&amp; Automation</span>
            <span className="hero-white-line">Engineer.</span>
          </h1>

          <p className="hero-description">
            Building secure cloud environments, automating delivery pipelines,
            and engineering reliable systems that help businesses move forward.
          </p>

          <div className="hero-actions">
            <Link href="#projects" className="primary-button">
              View Projects <ArrowRight size={17} />
            </Link>

            <Link href="#contact" className="secondary-button">
              Contact Me
            </Link>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/shemavalentin"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={19} />
            </a>
            <a
              href="https://www.linkedin.com/in/valentin-niwebasa-678a3013a/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={19} />
            </a>
          </div>
        </div>

        {/* Cloud Infrastructure Illustration */}
        <div className="hero-visual">
          <div className="cloud-scene">
            <div className="scene-glow" />

            <div className="architecture-label">
              <span className="architecture-label-dot" />
              CLOUD ARCHITECTURE
            </div>

            <div className="architecture-card">
              <div className="architecture-top">
                <div className="architecture-icon">
                  <Cloud size={25} />
                </div>
                <div>
                  <strong>Cloud Infrastructure</strong>
                  <span>Scalable · Resilient · Secure</span>
                </div>
              </div>

              <div className="architecture-flow">
                <div className="flow-node">
                  <Workflow size={19} />
                  <span>CI/CD</span>
                </div>

                <div className="flow-line">
                  <span />
                </div>

                <div className="flow-node active-node">
                  <Boxes size={19} />
                  <span>Containers</span>
                </div>

                <div className="flow-line">
                  <span />
                </div>

                <div className="flow-node">
                  <Server size={19} />
                  <span>Cloud</span>
                </div>
              </div>

              <div className="architecture-bottom">
                <span><ShieldCheck size={14} /> Security</span>
                <span><GitBranch size={14} /> Automation</span>
              </div>
            </div>

            <div className="floating-card floating-card-top">
              <span className="floating-icon"><Terminal size={17} /></span>
              <div>
                <strong>Infrastructure as Code</strong>
                <span>Automated provisioning</span>
              </div>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="floating-icon green-icon"><ShieldCheck size={17} /></span>
              <div>
                <strong>Reliable by design</strong>
                <span>Secure · Monitored · Resilient</span>
              </div>
            </div>
          </div>
        </div>

        <a href="#technologies" className="scroll-indicator">
          <ArrowDown size={15} /> Explore
        </a>
      </section>

      {/* Engineering Focus */}
      <section className="focus-section">
        <div className="container focus-grid">
          <div className="focus-item">
            <Cloud size={23} />
            <div>
              <strong>Cloud Engineering</strong>
              <span>Infrastructure &amp; Architecture</span>
            </div>
          </div>

          <div className="focus-item">
            <Workflow size={23} />
            <div>
              <strong>DevOps Automation</strong>
              <span>CI/CD &amp; Delivery</span>
            </div>
          </div>

          <div className="focus-item">
            <Boxes size={23} />
            <div>
              <strong>Container Platforms</strong>
              <span>Docker &amp; Kubernetes</span>
            </div>
          </div>

          <div className="focus-item">
            <ShieldCheck size={23} />
            <div>
              <strong>Reliability &amp; Security</strong>
              <span>Observability &amp; Best Practices</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="technology-section" id="technologies">
        <div className="container">
          <p className="section-label">TECHNOLOGIES &amp; TOOLS</p>
          <div className="technology-list">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="content-section container" id="about">
        <p className="section-label">ABOUT ME</p>
        <h2>Engineering systems.<br />Solving real problems.</h2>
        <p className="section-description">
          I am a software engineer growing into cloud and DevOps engineering,
          combining application development experience with infrastructure,
          automation, and modern deployment practices. My focus is on building
          systems that are maintainable, secure, scalable and meaningful.
        </p>
      </section>

      {/* Projects */}
      <section className="content-section container" id="projects">
        <p className="section-label">SELECTED WORK</p>
        <h2>Projects &amp; implementations.</h2>
        <p className="section-description">
          Practical engineering work, cloud labs and implementation projects
          demonstrating how I approach infrastructure, automation and delivery.
        </p>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <ArrowRight size={17} />
              </div>
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-stack">
                {project.stack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <span className="project-status">LAB / CASE STUDY</span>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section container" id="contact">
        <p className="section-label">LET'S CONNECT</p>
        <h2>Let's build something<br />reliable together.</h2>
        <p>
          Open to engineering opportunities, meaningful collaborations
          and challenging cloud &amp; DevOps projects.
        </p>
        <a href="mailto:your-email@example.com" className="primary-button">
          Get in Touch <ArrowRight size={17} />
        </a>
      </section>

      <footer className="footer">
        <p>© 2026 Valentin Shema <span>·</span> Cloud &amp; DevOps Engineering</p>
      </footer>
    </main>
  );
}
