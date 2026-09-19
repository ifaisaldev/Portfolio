import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Server, Globe, Database, Layout, Code, Terminal, Layers, Cpu } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
                Building Scalable <span className="text-[#4FA0FC]">Backend Architectures</span> & Modern Web Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
                I am Faisal Mehmood, a Senior Full Stack Engineer. I design and develop high-performance applications using Node.js, Next.js, Python, and robust database systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/20"
                >
                  Contact Me
                </Link>
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-3 border border-white/10 text-base font-medium rounded-md text-white hover:bg-white/5 transition-all duration-200 backdrop-blur-sm"
                >
                  View Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center justify-center px-8 py-3 border border-white/10 text-base font-medium rounded-md text-white hover:bg-white/5 transition-all duration-200 backdrop-blur-sm"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-blue-500/20 shadow-2xl shadow-blue-500/20">
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
            <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">About Me</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Engineering Scalable Solutions
            </p>
          </div>
          <div className="prose prose-lg mx-auto text-gray-400">
            <p>
              I am a Senior Full Stack Engineer and Framework Architect with over 5 years of experience designing and building scalable, high-performance web applications. I architect robust backends with NestJS, Python/FastAPI, and PostgreSQL, and build dynamic, SEO-optimized frontends using Next.js and React.
            </p>
            <p className="mt-4">
              I am the lead architect of <strong>Nextly</strong>, an MIT-licensed, TypeScript-native Next.js CMS framework published on npm. My recent work includes building the backend for <strong>Rext AI</strong> (a multi-tenant SaaS on FastAPI), architecting the <strong>4RE Marketing Console</strong> (NestJS + Drizzle ORM), and engineering enterprise WordPress VIP platforms for clients like the <strong>PCI Security Standards Council</strong>.
            </p>
            <p className="mt-4">
              I value clean code, technical ownership, and delivering solutions that drive real business impact.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Career Journey</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Professional Experience
            </p>
          </div>

          <div className="space-y-12 border-l-2 border-white/5 md:border-none ml-4 md:ml-0 pl-4 md:pl-0">
            <ExperienceCard
              title="Lead Backend Engineer"
              company="Revnix, fmr. Revnix Technologies"
              period="Jan 2024 – Present"
              location="Haripur District, Khyber Pakhtunkhwa, Pakistan"
              description="Leading backend engineering and release management across multiple high-impact production systems, from multi-tenant SaaS platforms to open-source frameworks."
              highlights={[
                "Rext AI: Led backend architecture for a multi-tenant SaaS using Python, FastAPI, and PostgreSQL with async APIs and background jobs.",
                "4RE Marketing Console: Architected NestJS/Drizzle ORM backend with a sync engine ingesting external dealer and catalog XML feeds.",
                "Nextly Framework: Lead architect of an MIT-licensed Next.js CMS with multi-database adapters, custom JWT auth, and field-level RBAC.",
                "21st Century & 4 Rivers Equipment: Led team of 4 to migrate headless eCommerce platforms to Nextly CMS, cutting infra costs by 95%.",
                "Team Leadership: Managing 8 engineers across 7 production environments serving 50K+ users. Reduced production incidents by 60%."
              ]}
              tech={['NestJS', 'FastAPI', 'PostgreSQL', 'Drizzle ORM', 'Docker', 'GitHub Actions']}
            />

            <ExperienceCard
              title="Full Stack WordPress Developer"
              company="Revnix, fmr. Revnix Technologies"
              period="Feb 2022 – Jan 2024"
              location="Haripur District, Khyber Pakhtunkhwa, Pakistan"
              description="Engineered high-performance WordPress solutions for enterprise and mid-sized clients, including WordPress VIP multisite platforms."
              highlights={[
                "PCI Security Standards Council (WordPress VIP): Engineered a multi-language, multisite enterprise platform with custom Elementor widgets extending core classes.",
                "The National Pulse: Built custom WordPress theme for 100K+ monthly pageviews with Stripe, Google Pay, and Apple Pay.",
                "WP Aegis & WP Grit: Built modern Gutenberg block architecture sites and trained 3 interns on WordPress standards.",
                "Achieved 90+ Lighthouse scores across 10+ client sites using Redis caching and image optimization."
              ]}
              tech={['PHP', 'WordPress VIP', 'Gutenberg', 'REST APIs', 'Stripe', 'Performance Optimization']}
            />

            <ExperienceCard
              title="Frontend Web Developer"
              company="Revnix, fmr. Revnix Technologies"
              period="Mar 2021 – Feb 2022"
              location="Islamabad, Pakistan"
              description="Contributed to multiple user-facing platforms by building fast, responsive, and SEO-friendly interfaces."
              highlights={[
                "Developed responsive frontends using React, JavaScript, HTML, CSS, and SCSS.",
                "Integrated REST APIs to deliver smooth, dynamic user experiences across applications.",
                "Enhanced website performance by 40% and accelerated UI delivery by 30% through reusable component libraries.",
                "Improved SEO and load time across several client-facing websites."
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
            <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              What I Offer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="System Architecture"
              description="Designing scalable microservices, RESTful APIs, and data pipelines using Node.js, Nest.js, and Python."
              icon={Server}
            />
            <ServiceCard
              title="Full Stack Development"
              description="End-to-end web application development with modern frameworks like Next.js, React, and TypeScript."
              icon={Layout}
            />
            <ServiceCard
              title="Enterprise CMS Solutions"
              description="Architecting high-performance custom themes, plugins, and headless WordPress implementations."
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
            <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Skills</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Technical Expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Code className="mr-2 text-blue-400" /> Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS', 'Tailwind CSS', 'Material UI', 'Redux'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm font-medium border border-blue-500/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Terminal className="mr-2 text-green-400" /> Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Nest.js', 'Express.js', 'Python', 'FastAPI', 'PHP', 'GraphQL', 'REST APIs'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-green-500/10 text-green-300 rounded-full text-sm font-medium border border-green-500/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Database className="mr-2 text-purple-400" /> Database & CMS
              </h3>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase', 'WordPress', 'Strapi', 'Payload CMS'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm font-medium border border-purple-500/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Layers className="mr-2 text-orange-400" /> DevOps & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'AWS', 'Git', 'GitHub', 'CI/CD', 'Postman', 'Vercel', 'Figma', 'Jira'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-orange-500/10 text-orange-300 rounded-full text-sm font-medium border border-orange-500/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-lg md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Globe className="mr-2 text-pink-400" /> Industry & Domain
              </h3>
              <div className="flex flex-wrap gap-2">
                {['E-Commerce', 'FinTech', 'News & Media', 'Enterprise SaaS', 'Payment Gateways', 'Content Platforms', 'Data Pipelines'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-pink-500/10 text-pink-300 rounded-full text-sm font-medium border border-pink-500/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Projects</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Featured Work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <ProjectCard
              title="Nextly Framework"
              role="Lead Architect"
              description="An MIT-licensed, TypeScript-native Next.js CMS and app framework."
              problem="Needed a scalable, self-hostable alternative to Payload CMS and Strapi with zero vendor lock-in."
              solution="Designed a multi-database architecture (PostgreSQL, MySQL, SQLite) and a security-first custom JWT auth system with field-level RBAC."
              impact="Successfully launched 29 releases on npm, actively deployed across 7 production enterprise client sites."
              tech={['Next.js', 'TypeScript', 'Node.js', 'Drizzle ORM', 'PostgreSQL']}
            />
            <ProjectCard
              title="The National Pulse"
              role="Full Stack Developer"
              description="A high-traffic news platform requiring a robust subscription model and payment integration."
              problem="Needed a seamless way to handle subscriptions and payments for a growing user base."
              solution="Integrated Paid Memberships Pro with Stripe, Google Pay, and Apple Pay. Developed a custom theme for optimal speed."
              impact="Successfully supported a large user base with secure payment processing and fast load times."
              tech={['WordPress', 'PHP', 'Stripe', 'Paid Memberships Pro']}
            />
            <ProjectCard
              title="21st Century & 4 Rivers Equipment"
              role="Lead Backend Engineer"
              description="Comprehensive e-commerce platforms and a custom marketing console for heavy equipment dealers."
              problem="The existing systems lacked advanced filtering, real-time inventory updates, and multi-source feed synchronization."
              solution="Built headless e-commerce solutions (Next.js) and architected a new robust NestJS/Drizzle ORM backend (4RE Marketing Console) for 4 Rivers Equipment to sync external dealer and catalog feeds."
              impact="Enhanced user experience with instant filtering, unified multi-source data claims, and streamlined checkout."
              tech={['Next.js', 'NestJS', 'Drizzle ORM', 'PostgreSQL', 'Stripe']}
            />
            <ProjectCard
              title="PCI Security Standards Council"
              role="Full Stack WordPress Developer"
              description="A multi-language, multisite enterprise platform on WordPress VIP for the global payment security authority."
              problem="Required a highly scalable, multi-language platform with strict security compliance and zero third-party plugin bloat."
              solution="Engineered complex custom Elementor widgets by extending core classes and integrated secure REST APIs to populate dynamic data across multiple site languages."
              impact="Delivered a performant, enterprise-grade WordPress VIP platform serving a global audience."
              tech={['WordPress VIP', 'PHP', 'Elementor', 'REST APIs', 'Multisite']}
            />
            <ProjectCard
              title="Rext AI"
              role="Lead Backend Engineer"
              description="A multi-tenant SaaS platform."
              problem="Needed a scalable backend to orchestrate complex data flows, background jobs, and integrations."
              solution="Led backend architecture using Python, FastAPI, and SQLAlchemy. Developed robust async APIs and integrated external systems (Shopify, WordPress, LemonSqueezy)."
              impact="Delivered a highly reliable backend system to support automated workflows and complex integrations."
              tech={['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL']}
            />
            <ProjectCard
              title="Enterprise Data Pipeline"
              role="Python Backend Engineer"
              description="Core connector development for a high-volume logging and monitoring product."
              problem="The platform needed reliable, high-throughput data ingestion from various sources for error tracking."
              solution="Developed custom Airbyte connectors using Python to streamline data pipelines for the logging service."
              impact="Significantly improved data reliability and observability for enterprise clients."
              tech={['Python', 'Airbyte', 'Data Engineering', 'ETL']}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:faisalmehmooddev@gmail.com"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/20"
              >
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/faisal-mehmood-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-white/10 text-base font-medium rounded-md text-white hover:bg-white/5 transition-all duration-200 backdrop-blur-sm"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Remote · Pakistan</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
