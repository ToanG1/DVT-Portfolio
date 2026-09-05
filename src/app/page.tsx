import Box1 from "@/components/main/workingExperiences/Box1";
import Box2 from "@/components/main/workingExperiences/Box2";
import Box3 from "@/components/main/workingExperiences/Box3";
import Box4 from "@/components/main/workingExperiences/Box4";
import MetricsBar from "@/components/main/MetricsBar";
import EnterpriseCaseStudies from "@/components/main/EnterpriseCaseStudies";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { TbClick } from "react-icons/tb";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope, FaArrowUpRightFromSquare } from "react-icons/fa6";
import ImageSlider from "@/components/main/ImageSlider";

export default function Home() {
  return (
    <main className="bg-dark-purple text-txt-primary font-preahvihear px-6 sm:px-[8%] lg:px-[10%] py-10 md:py-[4%]">
      {/* Hero Section */}
      <div id="about-me" className="pt-4 md:pt-8">
        <div id="profile" className="flex flex-col lg:flex-row items-center w-full min-h-[26rem] gap-8 lg:gap-16 xl:gap-20">
          {/* Avatar Column */}
          <div className="bg-radial-1 h-72 md:h-96 w-full lg:w-1/3 relative flex items-center justify-center flex-shrink-0">
            <div className="flex items-center absolute top-7 sm:top-9 md:top-8 left-[58%] sm:left-[58%] lg:left-[59%] z-20 pointer-events-none">
              <Image
                src="/images/portfolio/arrow.png"
                className="w-9 sm:w-11 md:w-12 object-contain mr-1.5 -mb-2"
                alt="Pointer arrow"
                width={110}
                height={110}
              />
              <span className="text-xs sm:text-sm md:text-base font-bold text-white bg-dark-purple/90 px-3 py-1.5 rounded-lg border border-purple-5/50 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] whitespace-nowrap pointer-events-auto">
                Hello! I am <strong className="text-purple-3 font-extrabold">Van Toan</strong>
              </span>
            </div>

            <Image
              src="/images/portfolio/avatar.png"
              className="w-44 sm:w-56 md:w-64 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_10px_25px_rgba(118,60,172,0.4)]"
              alt="Dinh Van Toan Avatar"
              width={220}
              height={220}
              priority
            />
          </div>

          {/* Slogan & Pitch Column */}
          <div id="slogan" className="w-full lg:w-2/3">
            <div className="flex flex-wrap items-center gap-2 mb-3 font-sans">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-1/20 border border-purple-5/40 text-purple-3 text-xs md:text-sm font-semibold">
                Full-Stack Software Engineer · 3 YoE
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs md:text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Available in 1 Month
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-gray-300 text-xs md:text-sm">
                📍 Ho Chi Minh City · Open to Global Remote
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4">
              Engineering Intelligent{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-3 via-purple-4 to-purple-2">
                AI Systems
              </span>{" "}
              & Resilient Distributed{" "}
              <span className="text-purple-3">Infrastructure</span> at Scale.
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-gray-300 font-sans leading-relaxed max-w-2xl mb-4">
              Full-Stack Software Engineer with 3 years of experience architecting and shipping production LLM workflows, founding high-throughput microservices, and orchestrating scraping fleets across 3,000+ nodes with complete end-to-end ownership.
            </p>

            {/* Quick Credentials Info */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-300 font-sans mb-6">
              <span className="inline-flex items-center gap-1 text-purple-200">
                🎓 <strong>HCMUTE</strong> (HCMC Univ. of Technology & Education)
              </span>
              <span className="text-purple-5/40">|</span>
              <span className="inline-flex items-center gap-1 text-purple-200">
                🌐 <strong>English:</strong> Fluent / Working Proficiency
              </span>
              <span className="text-purple-5/40">|</span>
              <span className="inline-flex items-center gap-1 text-purple-200">
                🇯🇵 <strong>Japanese:</strong> Basic
              </span>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 font-sans">
              <a
                href="/CV_Software_Engineer_Dinh_Van_Toan.pdf"
                download="CV_Software_Engineer_Dinh_Van_Toan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-1 hover:bg-purple-5 text-white text-sm font-bold transition-all duration-200 shadow-[0_0_20px_rgba(113,39,186,0.5)] hover:scale-105"
              >
                <FaDownload className="text-xs" />
                <span>Download CV</span>
              </a>
              <a
                href="https://github.com/ToanG1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-white text-sm font-medium border border-white/10 transition-all duration-200"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/toang1/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-white text-sm font-medium border border-white/10 transition-all duration-200"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* About Summary */}
        <div id="about" className="w-full md:w-4/5 my-10 md:my-14 font-sans">
          <div id="work" className="mb-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-preahvihear text-white mb-2">
              About Me
            </h2>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base text-gray-300">
              <span>Software Engineer at</span>
              <a
                className="text-red-400 font-semibold inline-flex items-center gap-1.5 hover:underline"
                href="https://fabercompany.com.vn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/portfolio/faber-logo.png"
                  alt="faber logo"
                  width={100}
                  height={100}
                  className="w-4 h-4 object-contain inline"
                />
                Faber Viet Nam (Faber Company)
              </a>
            </div>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed mb-3">
            Full-stack software engineer with <strong className="text-white">3 years of experience</strong> architecting and operating production SaaS systems with complete <strong className="text-purple-3 font-semibold">end-to-end ownership</strong>. I specialize in bridging applied AI (LLM pipelines, grounding, ops automation) with robust distributed backends (Java/Spring, AWS SQS).
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
            Directly architected the automated 3,000+ VPS fleet provisioning via Ansible, and engineered deep browser process optimizations to achieve maximum concurrent throughput on constrained nodes. Graduated from Ho Chi Minh City University of Technology and Education (HCMUTE), based in Ho Chi Minh City, and open to global remote opportunities.
          </p>
        </div>
      </div>

      {/* Metrics Bar */}
      <MetricsBar />

      {/* Work Experiences / Core Pillars */}
      <div id="work-experiences" className="mt-16 md:mt-24">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-2 w-2 rounded-full bg-purple-3"></span>
          <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-purple-3 font-sans">
            Core Competencies
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold mb-6 md:mb-10 text-white tracking-tight">
          Areas of Expertise & Engineering Impact
        </h2>
        <div id="works" className="grid grid-cols-1 xl:grid-cols-2 gap-6 relative">
          <Box1 />
          <Box2 />
          <Box3 />
          <Box4 />
          <div className="hidden xl:block bg-radial-1 h-[180%] w-1/2 absolute -top-1/2 left-1/4 z-0 pointer-events-none"></div>
        </div>
      </div>

      {/* Enterprise Case Studies Section */}
      <EnterpriseCaseStudies />

      {/* Technologies & Stack */}
      <div id="technologies" className="xl:px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
            Technical Stack & Tooling
          </h2>
          <p className="text-xs md:text-base text-gray-300 font-sans">
            Proven hands-on experience designing, developing, and operating systems with modern enterprise technologies.
          </p>
        </div>

        {/* Categorized Tech Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 font-sans">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-purple-5/30 backdrop-blur-sm">
            <h4 className="text-xs uppercase tracking-wider text-purple-3 font-bold mb-2.5">
              Languages & Backend
            </h4>
            <div className="flex flex-wrap gap-1.5 text-xs text-gray-200">
              <span className="px-2.5 py-1 rounded bg-purple-6/70 border border-purple-5/40">Java 21</span>
              <span className="px-2.5 py-1 rounded bg-purple-6/70 border border-purple-5/40">Spring Boot 3</span>
              <span className="px-2.5 py-1 rounded bg-purple-6/70 border border-purple-5/40">Node.js</span>
              <span className="px-2.5 py-1 rounded bg-purple-6/70 border border-purple-5/40">TypeScript</span>
              <span className="px-2.5 py-1 rounded bg-purple-6/70 border border-purple-5/40">Next.js 16</span>
              <span className="px-2.5 py-1 rounded bg-purple-6/70 border border-purple-5/40">Python</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-purple-5/30 backdrop-blur-sm">
            <h4 className="text-xs uppercase tracking-wider text-purple-3 font-bold mb-2.5">
              AI & LLM Workflows
            </h4>
            <div className="flex flex-wrap gap-1.5 text-xs text-gray-200">
              <span className="px-2.5 py-1 rounded bg-purple-6/70 border border-purple-5/40">OpenAI (Few-Shot)</span>
              <span className="px-2.5 py-1 rounded bg-purple-6/70 border border-purple-5/40">Gemini Grounding</span>
              <span className="px-2.5 py-1 rounded bg-purple-6/70 border border-purple-5/40">Claude (AI Ops)</span>
              <span className="px-2.5 py-1 rounded bg-purple-6/70 border border-purple-5/40">Prompt Engineering</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-purple-5/30 backdrop-blur-sm">
            <h4 className="text-xs uppercase tracking-wider text-purple-3 font-bold mb-2.5">
              Distributed Data & Infra
            </h4>
            <div className="flex flex-wrap gap-1.5 text-xs text-gray-200">
              <span className="px-2.5 py-1 rounded bg-purple-6/70 border border-purple-5/40">AWS SQS</span>
              <span className="px-2.5 py-1 rounded bg-purple-6/70 border border-purple-5/40">Amazon Aurora</span>
              <span className="px-2.5 py-1 rounded bg-purple-6/70 border border-purple-5/40">MySQL</span>
              <span className="px-2.5 py-1 rounded bg-purple-6/70 border border-purple-5/40">Redis / Valkey</span>
              <span className="px-2.5 py-1 rounded bg-purple-6/70 border border-purple-5/40">Quartz Scheduler</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-purple-5/30 backdrop-blur-sm">
            <h4 className="text-xs uppercase tracking-wider text-purple-3 font-bold mb-2.5">
              DevOps & Scraping Fleet
            </h4>
            <div className="flex flex-wrap gap-1.5 text-xs text-gray-200">
              <span className="px-2.5 py-1 rounded bg-purple-6/70 border border-purple-5/40">3,000+ VPS Fleet</span>
              <span className="px-2.5 py-1 rounded bg-purple-6/70 border border-purple-5/40">Ansible</span>
              <span className="px-2.5 py-1 rounded bg-purple-6/70 border border-purple-5/40">Playwright</span>
              <span className="px-2.5 py-1 rounded bg-purple-6/70 border border-purple-5/40">Docker</span>
              <span className="px-2.5 py-1 rounded bg-purple-6/70 border border-purple-5/40">GitHub Actions</span>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-4xl mx-auto mt-6">
          <Image
            src="/images/portfolio/technologies-network.png"
            alt="Core technologies network diagram"
            width={2048}
            height={1559}
            className="w-full h-auto object-contain mx-auto opacity-95 hover:opacity-100 transition-opacity drop-shadow-[0_10px_35px_rgba(113,39,186,0.3)]"
            priority
          />
        </div>
      </div>

      {/* Personal & Open Source Projects */}
      <div id="projects" className="py-16 md:py-28">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-purple-3"></span>
            <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-purple-3 font-sans">
              Personal & Open-Source
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            Featured Side Project
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 mt-2 font-sans">
            Independent tool built for real-time team collaboration and agile estimation.
          </p>
        </div>

        {/* Sprint Planning Poker */}
        <div id="project2" className="block xl:flex xl:flex-row-reverse xl:relative">
          <div className="w-full xl:w-1/2 mt-8 xl:mt-16 xl:ml-auto">
            <div className="text-left xl:text-right xl:-ml-[40px]">
              <span className="text-purple-3 text-sm md:text-base font-bold font-sans">
                Real-Time Agile Tool
              </span>
              <h3 className="text-txt-secondary text-2xl xl:text-4xl font-bold mt-1">
                <a
                  href="https://sprint-plann.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-3 transition-colors inline-flex items-center gap-2"
                >
                  Sprint Planning Poker
                  <FaArrowUpRightFromSquare className="text-xs" />
                </a>
              </h3>
              <div className="xl:w-[110%] text-xs md:text-sm text-txt-primary border border-purple-5/40 p-6 xl:pl-14 bg-white/[.06] backdrop-blur-md rounded-xl my-4 relative z-20 font-sans leading-relaxed shadow-xl text-left">
                A real-time estimation platform built for agile development teams. Developed over a weekend to replace a paid subscription service, it allows teams to create live estimation rooms, manage backlog items, submit concurrent votes, and instantly compute consensus story points.
              </div>
              <div className="flex flex-wrap gap-2 mb-4 font-sans text-xs justify-start xl:justify-end">
                <span className="px-2.5 py-1 rounded bg-purple-6/80 text-purple-200 border border-purple-5/40">Real-Time WebSockets</span>
                <span className="px-2.5 py-1 rounded bg-purple-6/80 text-purple-200 border border-purple-5/40">Agile Estimation</span>
                <span className="px-2.5 py-1 rounded bg-purple-6/80 text-purple-200 border border-purple-5/40">Google Cloud Run</span>
                <span className="px-2.5 py-1 rounded bg-purple-6/80 text-purple-200 border border-purple-5/40">Next.js</span>
              </div>
              <div className="flex mb-6 justify-start xl:justify-end">
                <a
                  href="https://sprint-plann.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-1/30 hover:bg-purple-1/60 text-white text-xs font-sans font-semibold border border-purple-3/50 transition-all"
                >
                  <span>Launch Live Demo</span>
                  <TbClick size={18} />
                </a>
              </div>
            </div>
            <div className="w-full xl:w-1/2 relative xl:absolute top-0 left-0 h-72 md:h-[22rem]">
              <div className="hidden xl:block bg-radial-2 h-[200%] w-full absolute -top-1/2 -right-40 z-0 pointer-events-none"></div>
              <div className="bg-purple-6 h-full w-full absolute top-0 left-0 z-10 rounded-xl overflow-hidden border border-purple-5/40">
                <div className="bg-white h-full w-full mx-auto rounded-lg overflow-hidden">
                  <ImageSlider images={["/images/portfolio/spp-room.png", "/images/portfolio/spp-vote.png"]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contacts" className="w-full md:w-3/4 pt-16 pb-8 font-sans">
        <div className="rounded-2xl border border-purple-5/40 bg-gradient-to-br from-purple-6/80 to-dark-purple p-8 md:p-12 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-purple-3"></span>
            <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-purple-3">
              Get in Touch
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 font-preahvihear">
            Let&apos;s Build Something Resilient
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4 max-w-2xl">
            Interested in discussing applied AI architectures, high-throughput microservices, scraping automation, or potential collaborations? Let&apos;s connect.
          </p>

          <div className="flex flex-wrap items-center gap-2.5 text-xs text-purple-200 mb-8 font-sans">
            <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10">📍 Ho Chi Minh City, Vietnam</span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">🟢 Available in 1 Month</span>
            <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10">🌐 Open to Global Remote & Hybrid</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:Toandinh3032@gmail.com"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-purple-1 hover:bg-purple-5 text-white text-sm font-bold transition-all shadow-[0_0_25px_rgba(113,39,186,0.6)] hover:scale-105"
            >
              <FaEnvelope />
              <span>Toandinh3032@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/toang1/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white text-sm font-semibold border border-white/10 transition-all"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/ToanG1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white text-sm font-semibold border border-white/10 transition-all"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href="/CV_Software_Engineer_Dinh_Van_Toan.pdf"
              download="CV_Software_Engineer_Dinh_Van_Toan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-6/90 hover:bg-purple-6 text-purple-200 text-sm font-semibold border border-purple-5/50 transition-all"
            >
              <FaDownload />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
