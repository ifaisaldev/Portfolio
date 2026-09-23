import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Server, Globe, Database, Layout, Code, Terminal, Layers, Cpu, Bot, FolderOpen, ListChecks, FlaskConical } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import FlowDiagram from '@/components/FlowDiagram';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-fg">
                <span className="block text-base md:text-lg font-semibold tracking-wide text-accent mb-4">
                  Faisal Mehmood · Senior Backend Engineer
                </span>
                Building Scalable <span className="text-accent">Backend Architectures</span> & Modern Web Solutions
              </h1>
              <p className="text-xl md:text-2xl text-fg-2 mb-8 max-w-3xl">
                I build APIs, data sync engines and CMS platforms with Node.js, NestJS, Next.js, Python and WordPress.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
                >
                  Contact Me
                </Link>
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-3 border border-line text-base font-medium rounded-md text-fg hover:bg-chip transition-all duration-200 backdrop-blur-sm"
                >
                  View Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center justify-center px-8 py-3 border border-line text-base font-medium rounded-md text-fg hover:bg-chip transition-all duration-200 backdrop-blur-sm"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-blue-500/20">
                <Image
                  src="/profile.png"
                  alt="Faisal Mehmood"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-accent font-semibold tracking-wide uppercase">About Me</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-fg sm:text-4xl">
              Engineering Scalable Solutions
            </p>
          </div>
          <div className="prose prose-lg mx-auto text-muted">
            <p>
              I am a Senior Backend Engineer with over 5 years at Revnix, where I was promoted from Frontend Engineer to Lead Backend Engineer. I build backends with NestJS, Python/FastAPI and PostgreSQL, and ship full-stack features with Next.js, React and WordPress.
            </p>
            <p className="mt-4">
              I am the lead contributor to <strong>Nextly</strong>, an MIT-licensed, TypeScript-native CMS for Next.js, published on npm. My recent work includes building the backend for <strong>Rext AI</strong> (a multi-tenant SaaS on FastAPI), architecting the <strong>4RE Marketing Console</strong> (NestJS + Drizzle ORM), and engineering enterprise WordPress VIP platforms for clients like the <strong>PCI Security Standards Council</strong>.
            </p>
            <p className="mt-4">
              I work remotely and am available across all time zones.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-accent font-semibold tracking-wide uppercase">Career Journey</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-fg sm:text-4xl">
              Professional Experience
            </p>
            <p className="mt-4 text-muted">
              Three roles at Revnix (formerly Revnix Technologies), from Frontend Engineer to Lead Backend Engineer.
            </p>
          </div>

          <div className="space-y-12 border-l-2 border-line md:border-none ml-4 md:ml-0 pl-4 md:pl-0">
            <ExperienceCard
              title="Lead Backend Engineer & Release Manager"
              company="Revnix"
              period="Jan 2024 – Present"
              location="Haripur, Pakistan"
              description="Lead backend engineering and releases across production systems, from a multi-tenant SaaS to an open-source CMS."
              highlights={[
                "Rext AI: Led the backend for a multi-tenant AI content-writing SaaS on Python, FastAPI and PostgreSQL: platform and workspace RBAC, session impersonation, audit logs, subscription billing, workspace credit sharing, Redis caching, webhooks, background jobs, monitoring and CI/CD.",
                "4RE Marketing Console: Architected the NestJS/Drizzle ORM backend that replaced 4 Rivers Equipment's legacy console, live in production since June 2026, with a sync engine for dealer inventory and the John Deere catalog.",
                "Nextly CMS: Lead contributor to an open-source CMS for Next.js. Designed multi-database adapters, JWT auth with token rotation, and field-level RBAC; run release governance for every npm release.",
                "21st Century & 4 Rivers Equipment: Led team of 4 to migrate headless eCommerce platforms to Nextly CMS, cutting infra costs by 95%.",
                "Team Leadership: Managing 8 engineers across 7 production environments serving 50K+ users. Reduced production incidents by 60%."
              ]}
              tech={['NestJS', 'FastAPI', 'PostgreSQL', 'Drizzle ORM', 'Docker', 'GitHub Actions']}
            />

            <ExperienceCard
              title="Full Stack WordPress Developer"
              company="Revnix"
              period="Feb 2022 – Jan 2024"
              location="Haripur, Pakistan"
              description="Built WordPress platforms for enterprise and mid-sized clients, including WordPress VIP multisite."
              highlights={[
                "PCI Security Standards Council (WordPress VIP): Engineered a multi-language, multisite enterprise platform with custom Elementor widgets extending core classes.",
                "The National Pulse: Built custom WordPress theme for 100K+ monthly pageviews with Stripe, Google Pay, and Apple Pay.",
                "WP Aegis & WP Grit: Built modern Gutenberg block architecture sites and trained 3 interns on WordPress standards.",
                "Achieved 90+ Lighthouse scores across 10+ client sites using Redis caching and image optimization."
              ]}
              tech={['PHP', 'WordPress VIP', 'Gutenberg', 'REST APIs', 'Stripe', 'Performance Optimization']}
            />

            <ExperienceCard
              title="Frontend Engineer"
              company="Revnix"
              period="Mar 2021 – Feb 2022"
              location="Islamabad, Pakistan"
              description="Built responsive, SEO-friendly interfaces for 8+ client projects."
              highlights={[
                "Built responsive frontends with React, Next.js and SCSS, integrated with REST APIs.",
                "Cut load times by 40% (Time to Interactive from 6s to under 3.5s) with code splitting, lazy loading and component optimization.",
                "Built reusable component libraries documented in Storybook, speeding up frontend delivery by 30%."
              ]}
              tech={['React', 'JavaScript', 'SCSS', 'UI/UX', 'SEO']}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-accent font-semibold tracking-wide uppercase">Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-fg sm:text-4xl">
              What I Offer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="System Architecture"
              description="Designing modular backends, REST APIs and data sync pipelines with Node.js, NestJS and Python."
              icon={Server}
            />
            <ServiceCard
              title="Full Stack Development"
              description="End-to-end web application development with modern frameworks like Next.js, React, and TypeScript."
              icon={Layout}
            />
            <ServiceCard
              title="Enterprise CMS Solutions"
              description="Custom themes, plugins and headless WordPress builds for enterprise sites, including WordPress VIP."
              icon={Globe}
            />
            <ServiceCard
              title="WordPress Development"
              description="Custom theme development, plugin architecture, WooCommerce solutions, and performance optimization for enterprise WordPress sites."
              icon={Code}
            />
            <ServiceCard
              title="Database Management"
              description="Expertise in MongoDB, PostgreSQL, and MySQL, ensuring data integrity and optimized query performance."
              icon={Database}
            />
            <ServiceCard
              title="Performance Optimization"
              description="Improving website load times, Core Web Vitals, and overall system efficiency."
              icon={Cpu}
            />
            <ServiceCard
              title="DevOps & CI/CD"
              description="Implementing CI/CD pipelines using Docker and AWS to improve scalability and reliability."
              icon={Layers}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-accent font-semibold tracking-wide uppercase">Skills</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-fg sm:text-4xl">
              Technical Expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-bold text-fg mb-4 flex items-center">
                <Code className="mr-2 text-accent" /> Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS', 'Tailwind CSS', 'Material UI', 'Redux'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-chip text-fg-2 rounded-full text-sm font-medium border border-line">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-bold text-fg mb-4 flex items-center">
                <Terminal className="mr-2 text-accent" /> Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Nest.js', 'Express.js', 'Python', 'FastAPI', 'PHP', 'GraphQL', 'REST APIs'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-chip text-fg-2 rounded-full text-sm font-medium border border-line">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-bold text-fg mb-4 flex items-center">
                <Database className="mr-2 text-accent" /> Database & CMS
              </h3>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase', 'WordPress', 'Strapi', 'Payload CMS'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-chip text-fg-2 rounded-full text-sm font-medium border border-line">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-bold text-fg mb-4 flex items-center">
                <Layers className="mr-2 text-accent" /> DevOps & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'AWS', 'Git', 'GitHub', 'CI/CD', 'Postman', 'Vercel', 'Figma', 'Jira'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-chip text-fg-2 rounded-full text-sm font-medium border border-line">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-bold text-fg mb-4 flex items-center">
                <Bot className="mr-2 text-accent" /> AI-Assisted Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Claude Code', 'Cursor', 'Codex', 'GLM', 'CodeRabbit', 'Greptile', 'Context Engineering', 'Test-Driven Development'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-chip text-fg-2 rounded-full text-sm font-medium border border-line">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-bold text-fg mb-4 flex items-center">
                <Globe className="mr-2 text-accent" /> Industry & Domain
              </h3>
              <div className="flex flex-wrap gap-2">
                {['E-Commerce', 'FinTech', 'News & Media', 'Enterprise SaaS', 'Payment Gateways', 'Content Platforms', 'Data Pipelines'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-chip text-fg-2 rounded-full text-sm font-medium border border-line">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section id="how-i-work" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-accent font-semibold tracking-wide uppercase">How I Work</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-fg sm:text-4xl">
              AI-Assisted, Test-Driven Development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="Context First"
              description="Every project starts with a context folder: findings, plans, decisions and rules. AI agents and teammates work from the same source of truth."
              icon={FolderOpen}
            />
            <ServiceCard
              title="Planned in Phases"
              description="Work is split into phases and tasks, tracked from an overview down to each task, so every change has a clear scope and status."
              icon={ListChecks}
            />
            <ServiceCard
              title="Tests First"
              description="I follow test-driven development: tests describe the behaviour before the code exists, and a task is done when its tests pass."
              icon={FlaskConical}
            />
            <ServiceCard
              title="Guided AI Agents"
              description="Claude Code, Cursor, Codex and GLM work from the project's rules and a shared memory file. CodeRabbit and Greptile review the pull requests."
              icon={Bot}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-accent font-semibold tracking-wide uppercase">Projects</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-fg sm:text-4xl">
              Featured Work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              featured
              title="Rext AI"
              role="Lead Backend Engineer"
              status="live"
              summary="An AI writing platform that researches, writes and publishes SEO articles for agencies and site owners. I led the backend around the AI pipeline: the APIs, background jobs, billing and publishing."
              points={[
                "Multi-tenant FastAPI backend on PostgreSQL with two-level RBAC: platform roles and workspace roles",
                "Admin session impersonation and audit logs",
                "Subscription billing with LemonSqueezy, and credit sharing from workspace owners to their members",
                "Background jobs (APScheduler), Redis caching, webhooks and monitoring",
                "Publishing to WordPress and Shopify; Docker deployments with GitHub Actions CI/CD",
              ]}
              tech={['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Redis', 'APScheduler', 'LemonSqueezy', 'Docker', 'GitHub Actions']}
              links={[{ label: 'rext.ai', href: 'https://rext.ai' }]}
              image={{ src: '/projects/rext-ai.png', alt: 'Rext AI homepage' }}
            />
            <ProjectCard
              featured
              title="4RE Marketing Console"
              role="Lead Backend Engineer"
              period="2024 – present"
              status="private"
              summary="Inventory and publishing platform for 4 Rivers Equipment, a John Deere dealer. It brings the dealer's inventory feed and the John Deere catalog into one database and serves clean product data to the storefront."
              points={[
                "Sync engine that imports the dealer's XML inventory feed and the John Deere catalog on a schedule",
                "Matching rules that decide which listing owns each machine, so nothing is listed twice",
                "Materialized product data served to the Next.js storefront through an API",
              ]}
              tech={['NestJS', 'TypeScript', 'Drizzle ORM', 'PostgreSQL']}
              visual={
                <FlowDiagram
                  label="4RE Marketing Console data flow"
                  rows={[
                    [{ label: 'Dealer inventory', detail: 'XML feed' }, { label: 'John Deere catalog', detail: 'Product API' }],
                    [{ label: 'Sync engine', detail: 'Scheduled imports' }],
                    [{ label: 'Matching rules', detail: 'One machine, one listing' }],
                    [{ label: 'Product API', detail: 'Materialized products' }],
                    [{ label: 'Next.js storefront' }],
                  ]}
                />
              }
            />
            <ProjectCard
              title="Nextly CMS"
              role="Lead Contributor"
              status="open-source"
              summary="Open-source, TypeScript-native CMS for Next.js. Self-hosted, with no vendor lock-in."
              points={[
                "Database adapters for PostgreSQL, MySQL and SQLite",
                "JWT auth with token rotation, OAuth and field-level permissions",
                "Pluggable file storage (S3, R2, Vercel Blob, UploadThing)",
                "Runs in production on client sites, including 21st Century and 4 Rivers Equipment",
              ]}
              tech={['Next.js', 'TypeScript', 'Node.js', 'Drizzle ORM', 'PostgreSQL']}
              links={[
                { label: 'nextlyhq.com', href: 'https://nextlyhq.com' },
                { label: 'GitHub', href: 'https://github.com/nextlyhq/nextly' },
                { label: 'npm', href: 'https://www.npmjs.com/package/nextly' },
              ]}
              image={{ src: '/projects/nextly.png', alt: 'Nextly website homepage' }}
            />
            <ProjectCard
              title="21st Century & 4 Rivers Equipment"
              role="Lead Backend Engineer"
              status="live"
              summary="Headless e-commerce sites for two John Deere dealers, first built on headless WordPress and later moved to Nextly."
              points={[
                "Next.js storefronts with Stripe payments and filtering across 1,000+ SKUs",
                "Led a team of 4 engineers moving both sites from headless WordPress to Nextly",
                "Cut CMS infrastructure and licensing costs by about 95%",
              ]}
              tech={['Next.js', 'Nextly', 'Stripe', 'Zustand']}
              links={[
                { label: '21st Century Equipment', href: 'https://21stcenturyequipment.com' },
                { label: '4 Rivers Equipment', href: 'https://4riversequipment.com' },
              ]}
              image={{ src: '/projects/21st-century-equipment.png', alt: '21st Century Equipment homepage' }}
            />
            <ProjectCard
              title="PCI Security Standards Council"
              role="Full Stack WordPress Developer"
              status="live"
              summary="Multi-language, multisite platform on WordPress VIP for the global payment-security standards body."
              points={[
                "Custom Elementor widgets built by extending Elementor's core classes",
                "Secure REST API integrations that load dynamic data across every language site",
                "Built without third-party plugin bloat to meet strict security requirements",
              ]}
              tech={['WordPress VIP', 'PHP', 'Elementor', 'REST APIs', 'Multisite']}
              links={[{ label: 'pcisecuritystandards.org', href: 'https://www.pcisecuritystandards.org' }]}
              image={{ src: '/projects/pci-ssc.png', alt: 'PCI Security Standards Council homepage' }}
            />
            <ProjectCard
              title="The National Pulse"
              role="Full Stack WordPress Developer"
              status="live"
              summary="Custom WordPress theme and paid membership system for a news site with 100K+ monthly pageviews."
              points={[
                "Memberships with Paid Memberships Pro, Stripe, Apple Pay and Google Pay",
                "Custom theme and Gutenberg blocks tuned for Core Web Vitals, with LCP under 2 seconds",
              ]}
              tech={['WordPress', 'PHP', 'Paid Memberships Pro', 'Stripe', 'Gutenberg']}
              links={[{ label: 'thenationalpulse.com', href: 'https://thenationalpulse.com' }]}
              image={{ src: '/projects/national-pulse.png', alt: 'The National Pulse membership page' }}
            />
          </div>

          <div className="mt-16">
            <h3 className="text-lg font-semibold text-fg mb-6">More work</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Log Connectors',
                  summary: 'Python connectors built on the Airbyte framework that pull logs from source platforms and deliver them to different storage providers.',
                  tech: 'Python · Airbyte',
                  links: [],
                },
                {
                  title: 'SmartCourse AI',
                  summary: 'Course recommender that compares keyword search (TF-IDF) with semantic search (Sentence Transformers).',
                  tech: 'Python · Flask · scikit-learn',
                  links: [{ label: 'GitHub', href: 'https://github.com/ifaisaldev/smartcourse-ai' }],
                },
                {
                  title: 'WP Aegis & WP Grit',
                  summary: 'Two WordPress sites built from scratch with Gutenberg blocks and full-site editing (theme.json).',
                  tech: 'WordPress · PHP · Gutenberg',
                  links: [
                    { label: 'wpaegis.com', href: 'https://wpaegis.com' },
                    { label: 'wpgrit.com', href: 'https://www.wpgrit.com' },
                  ],
                },
              ].map((item) => (
                <div key={item.title} className="glass rounded-lg p-5 flex flex-col">
                  <h4 className="font-semibold text-fg">{item.title}</h4>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{item.summary}</p>
                  <p className="mt-3 text-xs text-muted">{item.tech}</p>
                  {item.links.length > 0 && (
                    <div className="mt-auto pt-4 flex flex-wrap gap-x-4 gap-y-1">
                      {item.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                        >
                          {link.label}
                          <ArrowUpRight className="ml-1 h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-fg sm:text-4xl mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:faisalmehmooddev@gmail.com"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
              >
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/faisal-mehmood-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-line text-base font-medium rounded-md text-fg hover:bg-chip transition-all duration-200 backdrop-blur-sm"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="mt-8 text-muted">
              <p>Remote · Available across all time zones</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
