
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Cloud,
  Database,
  ShieldCheck,
  Workflow,
  Server,
  Code2,
  GitBranch,
} from "lucide-react";

const technologies = [
  "AWS",
  "Docker",
  "GitHub Actions",
  "Amazon ECS",
  "Amazon ECR",
  "PostgreSQL",
  "CloudFront",
  "Route 53",
  "S3",
  "Application Load Balancer",
  "IAM",
  "Secrets Manager",
];

const architecture = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "AWS VPC, Azure-Devops, public and private subnets, availability zones, security groups and network routing.",
  },
  {
    icon: Workflow,
    title: "CI/CD Automation",
    description:
      "GitHub Actions workflow for application validation, Docker image building and deployment automation.",
  },
  {
    icon: Server,
    title: "Application Hosting",
    description:
      "Container-based application deployment using Amazon ECS and Amazon ECR.",
  },
  {
    icon: Database,
    title: "Database Layer",
    description:
      "PostgreSQL database hosted on Amazon RDS within a private network.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "IAM permissions, security groups, encrypted connections and Secrets Manager for sensitive configuration.",
  },
  {
    icon: GitBranch,
    title: "Delivery Workflow",
    description:
      "Version-controlled source code, automated checks and controlled software releases.",
  },
];

export default function ERecruitmentPage() {
  return (
    <main className="case-study-page">
      <div className="case-study-container">
        <Link href="/" className="back-link">
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>

        <section className="case-study-hero">
          <div className="eyebrow">
            <span className="status-dot" />
            CLOUD & DEVOPS ENGINEERING
          </div>

          <h1>
            E-Recruitment
            <br />
            <span>& Resume Portal</span>
          </h1>

          <p className="case-study-intro">
            A cloud-oriented recruitment platform demonstrating modern
            application delivery, containerization, AWS infrastructure
            architecture and DevOps automation.
          </p>

          <div className="case-study-actions">
            <a
              href="https://github.com/shemavalentin"
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              GitHub Profile <ArrowUpRight size={17} />
            </a>

            <a href="#architecture" className="secondary-button">
              Explore Architecture
            </a>
          </div>
        </section>

        <section className="project-overview">
          <div>
            <span className="section-label">01 / OVERVIEW</span>
            <h2>Project Overview</h2>

          </div>
          <p>
            The E-Recruitment & Resume Portal is a digital recruitment
            solution designed to support online job applications and
            candidate information management. This case study focuses on
            the infrastructure, deployment and operational engineering
            aspects of delivering the application.
            </p>
            
        </section>

        {/* ARCHITECTURE FLOW */}
        <section className="architecture-flow-section">
          <span className="section-label">ARCHITECTURE / TRAFFIC FLOW</span>
          <h2>How the platform works</h2>
          <p className="architecture-flow-description">
            From candidate access to application processing and data
            storage, traffic flows through a secured and structured
            cloud infrastructure.
          </p>

          
          
          <div className="architecture-flow">
            {/* OUTSIDE AWS VPC: INTERNET / EDGE ENTRY */}
            <div className="flow-entry-row">
              <div className="flow-node">
                <span className="flow-node-label">01 / ENTRY</span>
                <h3>Users</h3>
                <p>Candidates & Recruiters</p>
              </div>

              <div className="flow-connector">
                <span>HTTPS</span>
              </div>

              <div className="flow-node">
                <span className="flow-node-label">02 / DNS</span>
                <h3>Route 53</h3>
                <p>Domain resolution</p>
              </div>

              <div className="flow-connector">
                <span>DNS</span>
              </div>

              <div className="flow-node">
                <span className="flow-node-label">03 / EDGE</span>
                <h3>CloudFront</h3>
                <p>HTTPS · Content delivery</p>
              </div>
            </div>

            {/* CONNECTION INTO THE VPC */}
            <div className="flow-vpc-entry">
              <span>Origin traffic</span>
              <div className="flow-vpc-entry-line" />
            </div>

            {/* AWS VPC NETWORK BOUNDARY */}
            <div className="flow-vpc">
              <div className="flow-vpc-header">
                <span className="flow-node-label">04 / AWS NETWORK</span>
                <h3>Amazon VPC</h3>
                <p>Application infrastructure across Availability Zones</p>
              </div>

              <div className="flow-subnets">
                {/* Public subnet */}
                <div className="flow-subnet flow-subnet-public">
                  <span className="flow-subnet-label">PUBLIC SUBNETS</span>
                 
                  <div className="flow-node flow-node-highlight">
                    <span className="flow-node-label">INGRESS</span>
                    <h3>Application Load Balancer</h3>
                    <p>HTTPS listener · Port 443</p>
                  </div>

                  <div className="flow-target-group">
                    <span className="flow-target-arrow">↓</span>
                    <div className="flow-target-box">
                      <span className="flow-node-label">TARGET GROUP</span>
                      <h4>ECS Target Group</h4>
                      <p>Forward traffic · Health checks</p>
                      <span className="flow-port">Application port : 3000</span>
                    </div>
                  </div>

                </div>

                <div className="flow-subnet-connector">
                  <span>Forward traffic</span>
                  <div className="flow-subnet-line" />
                </div>

                {/* Private application subnet */}
                <div className="flow-subnet flow-subnet-private">
                  <span className="flow-subnet-label">PRIVATE APP SUBNETS</span>

                  <div className="flow-node">
                    <span className="flow-node-label">COMPUTE</span>
                    <h3>Amazon ECS Service</h3>
                    <p>Manages desired task count and deployment</p>
                  </div>
                </div>

                <div className="flow-subnet-connector">
                  <span>Application queries</span>
                  <div className="flow-subnet-line" />
                </div>

                {/* Private database subnet */}
                <div className="flow-subnet flow-subnet-data">
                  <span className="flow-subnet-label">PRIVATE DATA SUBNETS</span>

                  <div className="flow-node">
                    <span className="flow-node-label">DATA</span>
                    <h3>Amazon RDS</h3>
                    <p>PostgreSQL · Managed database</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


  

        <section id="architecture" className="architecture-section">
          <div className="section-heading">
            <div>
              <span className="section-label">02 / SYSTEM DESIGN</span>
              <h2>Cloud & DevOps Architecture</h2>
            </div>
            <p>
              An overview of the infrastructure and delivery capabilities
              used in the project.
            </p>
          </div>

          <div className="architecture-grid">
            {architecture.map((item) => {
              const Icon = item.icon;

              return (
                <article className="architecture-card" key={item.title}>
                  <div className="architecture-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="technology-section">
          <span className="section-label">03 / TECHNOLOGY STACK</span>
          <h2>Technologies & Tools</h2>

          <div className="technology-list">
            {technologies.map((technology) => (
              <span className="technology-chip" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="engineering-section">
          <span className="section-label">04 / ENGINEERING APPROACH</span>
          <h2>Engineering Priorities</h2>

          <div className="engineering-grid">
            <article>
              <Code2 size={23} />
              <h3>Application Delivery</h3>
              <p>
                Structure application delivery around version control,
                repeatable builds and automated validation.
              </p>
            </article>

            <article>
              <Cloud size={23} />
              <h3>Cloud Reliability</h3>
              <p>
                Design infrastructure with network isolation, availability
                considerations and managed cloud services.
              </p>
            </article>

            <article>
              <ShieldCheck size={23} />
              <h3>Security by Design</h3>
              <p>
                Apply least-privilege access, secure configuration
                management and network-level controls.
              </p>
            </article>
          </div>
        </section>

        <section className="case-study-next">
          <span className="section-label">CONTINUOUS IMPROVEMENT</span>
          <h2>Building reliable software delivery.</h2>
          <p>
            This case study will continue to evolve with architecture
            diagrams, implementation evidence, CI/CD workflows and
            deployment documentation.
          </p>

          <Link href="/" className="secondary-button">
            Return to homepage <ArrowUpRight size={17} />
          </Link>
        </section>
      </div>
    </main>
  );
}
