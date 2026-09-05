import React from "react";
import { FaServer, FaBrain, FaAward, FaBolt } from "react-icons/fa6";

interface MetricItem {
  number: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const metrics: MetricItem[] = [
  {
    number: "3+",
    label: "Years Experience",
    description: "Building production SaaS & AI systems",
    icon: <FaBrain className="text-purple-3 text-xl md:text-2xl" />,
  },
  {
    number: "3,000+",
    label: "VPS Fleet Scaled",
    description: "Automated provisioning via Ansible",
    icon: <FaServer className="text-purple-3 text-xl md:text-2xl" />,
  },
  {
    number: "500k+",
    label: "Daily Keywords Scraped",
    description: "High-throughput SERP pipeline (num=50)",
    icon: <FaBolt className="text-purple-3 text-xl md:text-2xl" />,
  },
  {
    number: "2,200+",
    label: "Peer Kudos Received",
    description: "For code quality, ownership & review",
    icon: <FaAward className="text-purple-3 text-xl md:text-2xl" />,
  },
];

export default function MetricsBar() {
  return (
    <div className="w-full my-12 relative z-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-xl border border-purple-5/30 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-5 md:p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-3/60 hover:shadow-[0_8px_30px_rgba(113,39,186,0.25)]"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-white group-hover:text-purple-3 transition-colors">
                {metric.number}
              </span>
              <div className="p-2.5 rounded-lg bg-purple-6/80 border border-purple-5/40">
                {metric.icon}
              </div>
            </div>
            <h4 className="text-sm md:text-base font-bold text-txt-secondary mb-1">
              {metric.label}
            </h4>
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
