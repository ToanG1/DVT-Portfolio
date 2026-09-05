"use client";

import React, { useState } from "react";
import { FaBrain, FaServer, FaRobot, FaMagnifyingGlassChart, FaChartLine } from "react-icons/fa6";
import { HiOutlineLightBulb, HiOutlineCpuChip, HiOutlineCheckCircle } from "react-icons/hi2";

interface CaseStudy {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  role: string;
  icon: React.ReactNode;
  headline: string;
  challenge: string;
  solution: string;
  impact: string;
  technologies: string[];
  metricsTag?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "serp-api",
    title: "High-Throughput SERP Pipeline & Microservice (serp-api)",
    shortTitle: "SERP Microservice (3,000+ VPS)",
    category: "Distributed Systems & Big Data",
    role: "End-to-End Architecture & Core Engineering",
    icon: <FaServer className="text-xl" />,
    headline: "Engineered a distributed scraping microservice across 3,000+ VPS nodes, processing 500k+ keywords/day (num=50).",
    challenge: "Extracting deep Google SERP rankings at massive volume (500,000 keywords daily with top 50 results = 25M ranking records/day) under aggressive bot-detection, proxy degradation, and tight scheduling windows.",
    solution: "Directly architected and founded the standalone microservice end-to-end. Designed the automated Ansible orchestration pipeline for 3,000+ VPS instances, engineered deep browser process optimization for high concurrency on ultra-constrained compute/memory nodes, and integrated an asynchronous AWS SQS pipeline with resilient multi-provider failover.",
    impact: "Unified disparate scraping logic into a high-availability backbone powering the platform's core ranking engine with resilient uptime and multi-provider failover.",
    technologies: ["Java 21", "Node.js", "Playwright", "AWS SQS", "AWS S3", "Ansible", "Aurora MySQL", "Multi-Provider Failover"],
    metricsTag: "500k Keywords/Day · 3,000+ VPS Fleet",
  },
  {
    id: "ai-article",
    title: "AI-Powered Article Generation Platform",
    shortTitle: "AI Article Builder",
    category: "Applied AI & LLM Systems",
    role: "End-to-End Delivery & AI Architecture",
    icon: <FaBrain className="text-xl" />,
    headline: "Persona-driven long-form content generation with grounding-enabled interactive chat.",
    challenge: "Enterprise marketers required on-brand, SEO-optimized long-form articles tailored to specific target personas, eliminating generic LLM tone and factual hallucinations.",
    solution: "Delivered end-to-end from system design to production: built a multi-stage LLM pipeline leveraging OpenAI's Few-Shot API (persona synthesis, outline drafting, article section expansion, asset management) combined with Gemini grounding and an interactive chat interface for iterative human-in-the-loop editing.",
    impact: "Delivered as a flagship production capability, empowering users to produce structured, authoritative, publication-ready SEO content with deep customization.",
    technologies: ["OpenAI API", "Few-Shot Prompting", "Gemini Grounding", "Next.js", "TypeScript", "Spring Boot"],
    metricsTag: "Flagship AI Initiative",
  },
  {
    id: "self-healing",
    title: "AI-Assisted Self-Healing System for Web Scrapers",
    shortTitle: "AI Self-Healing Scrapers",
    category: "LLM Ops & Automation",
    role: "End-to-End Design & Implementation",
    icon: <FaRobot className="text-xl" />,
    headline: "Autonomous scraper selector repair powered by Claude LLM and 1-click Slack human approval.",
    challenge: "Frequent search engine HTML structure updates silently break web scraper selectors, creating urgent on-call incidents and operational toil across thousands of scraping nodes.",
    solution: "Engineered end-to-end: built a database-backed dynamic selector repository paired with an automated LLM repair tool (Claude). When selector extraction fails, the system parses and sanitizes the target DOM context, formulates verified replacement selectors, and posts an interactive Slack card for 1-click human verification before hot-reloading.",
    impact: "Drastically reduced manual on-call triage and downtime across 3,000+ fleet nodes, serving as a standout example of applied LLMs in infrastructure operations.",
    technologies: ["Claude LLM", "Slack Bot API", "Java", "Redis", "MySQL", "Playwright"],
    metricsTag: "Zero-Downtime Hot-Reload",
  },
  {
    id: "aio-report",
    title: "AIO Report — AI Overview Search Intelligence",
    shortTitle: "AI Overview Intelligence",
    category: "Search Intelligence",
    role: "End-to-End Feature Ownership",
    icon: <FaMagnifyingGlassChart className="text-xl" />,
    headline: "Automated tracking of brand citations and reference sources across Google AI Overviews.",
    challenge: "The emergence of Google AI Overviews fundamentally changed organic search click-throughs, leaving brands without visibility into whether they were cited or source-linked in AI answers.",
    solution: "Architected an extraction pipeline capable of parsing generative AI Overview panels, extracting reference URLs, anchor texts, and brand mentions, feeding into an analytics reporting dashboard.",
    impact: "Provided a first-to-market intelligence capability, giving clients real-time visibility into their brand authority in generative search results.",
    technologies: ["Playwright", "Java", "AWS S3", "Next.js", "TypeScript"],
    metricsTag: "First-to-Market Search Intelligence",
  },
  {
    id: "ranking-scale",
    title: "Ranking Engine — Adaptive Proxy Health & Concurrency Scale",
    shortTitle: "Adaptive Ranking Engine",
    category: "High-Scale Performance",
    role: "Core Reliability & Scaling Contributor",
    icon: <FaChartLine className="text-xl" />,
    headline: "Dynamic thread throttling and 8x concurrent site scaling under high proxy pressure.",
    challenge: "Executing deep concurrent keyword ranking scans across hundreds of domains without overwhelming proxy infrastructure, triggering anti-bot IP bans, or degrading latency.",
    solution: "Implemented an adaptive concurrency controller that monitors real-time proxy latency and success rates, dynamically throttling thread pools and scaling concurrent target site evaluation up to 8.",
    impact: "Significantly stabilized proxy pool health, prevented cascading crawler failures, and maximized daily data collection throughput.",
    technologies: ["Java", "Distributed Queues", "Concurrency Control", "Proxy Mesh", "Valkey / Redis"],
    metricsTag: "8x Concurrent Processing",
  },
];

export default function EnterpriseCaseStudies() {
  const [activeTab, setActiveTab] = useState(caseStudies[0].id);
  const activeStudy = caseStudies.find((s) => s.id === activeTab) || caseStudies[0];

  return (
    <div id="case-studies" className="py-16 md:py-24 relative z-10">
      <div className="flex flex-col mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-2 w-2 rounded-full bg-purple-3 animate-pulse"></span>
          <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-purple-3">
            Production Engineering
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Enterprise Systems & Case Studies
        </h2>
        <p className="text-sm md:text-base text-gray-300 mt-2 max-w-3xl font-sans">
          Key production initiatives delivered at Faber Company — architecting high-throughput scraping microservices, applied LLM product features, and resilient cloud infrastructure.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-8 border-b border-purple-5/30 pb-4">
        {caseStudies.map((study) => {
          const isActive = study.id === activeTab;
          return (
            <button
              key={study.id}
              onClick={() => setActiveTab(study.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-purple-1 text-white shadow-[0_0_20px_rgba(113,39,186,0.6)] border border-purple-3"
                  : "bg-white/[0.04] text-gray-300 hover:bg-white/[0.08] hover:text-white border border-white/5"
              }`}
            >
              <span className={isActive ? "text-white" : "text-purple-3"}>{study.icon}</span>
              <span>{study.shortTitle}</span>
            </button>
          );
        })}
      </div>

      {/* Active Case Study Detail Box */}
      <div className="relative overflow-hidden rounded-2xl border border-purple-5/40 bg-gradient-to-br from-purple-6/90 via-[#18092f]/80 to-dark-purple p-6 md:p-10 backdrop-blur-xl shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-1/30 text-purple-3 border border-purple-5/50">
              {activeStudy.category}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/[0.06] text-purple-200 border border-white/10">
              🎯 {activeStudy.role}
            </span>
          </div>
          {activeStudy.metricsTag && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
              ⚡ {activeStudy.metricsTag}
            </span>
          )}
        </div>

        <h3 className="text-xl md:text-3xl font-bold text-white mb-2">
          {activeStudy.title}
        </h3>
        <p className="text-sm md:text-lg text-txt-secondary font-sans mb-8">
          {activeStudy.headline}
        </p>

        {/* 3 Pillars: Challenge, Solution, Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 font-sans">
          {/* Challenge */}
          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-5 flex flex-col justify-between hover:border-purple-5/40 transition-colors">
            <div>
              <div className="flex items-center gap-2 mb-3 text-amber-300 font-bold text-sm tracking-wide">
                <HiOutlineLightBulb className="text-lg" />
                <span>THE CHALLENGE</span>
              </div>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                {activeStudy.challenge}
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-5 flex flex-col justify-between hover:border-purple-5/40 transition-colors">
            <div>
              <div className="flex items-center gap-2 mb-3 text-cyan-300 font-bold text-sm tracking-wide">
                <HiOutlineCpuChip className="text-lg" />
                <span>ARCHITECTURE & SOLUTION</span>
              </div>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                {activeStudy.solution}
              </p>
            </div>
          </div>

          {/* Impact */}
          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-5 flex flex-col justify-between hover:border-purple-5/40 transition-colors">
            <div>
              <div className="flex items-center gap-2 mb-3 text-emerald-300 font-bold text-sm tracking-wide">
                <HiOutlineCheckCircle className="text-lg" />
                <span>MEASURABLE IMPACT</span>
              </div>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                {activeStudy.impact}
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div>
          <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-3">
            Core Technologies & Infrastructure
          </span>
          <div className="flex flex-wrap gap-2">
            {activeStudy.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-purple-6/90 text-purple-200 border border-purple-5/40 hover:border-purple-3 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
