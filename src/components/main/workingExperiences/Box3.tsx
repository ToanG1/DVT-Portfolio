import Image from "next/image";

export default function Box3() {
  return (
    <div className="w-full z-10 p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center bg-gradient-color bg-gradient-3 border-t-2 border-purple-5 rounded-xl transition-all duration-300 hover:border-purple-3 hover:shadow-[0_4px_25px_rgba(113,39,186,0.25)]">
      <div className="flex-shrink-0 mb-4 sm:mb-0 mr-0 sm:mr-6">
        <Image
          src="/images/portfolio/icon3.png"
          alt="Cloud & Scraping Fleet"
          width={120}
          height={120}
          className="w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 object-contain"
        />
      </div>
      <div id="fleet-devops" className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs uppercase tracking-wider text-purple-3 font-semibold">
            Infrastructure & Automation
          </span>
        </div>
        <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
          Cloud Fleet DevOps & Web Scraping
        </h3>
        <p className="text-xs md:text-sm text-gray-300 font-sans leading-relaxed mb-4">
          Automated provisioning and operations for a <strong className="text-white">3,000+ VPS fleet</strong> via Ansible and Docker. Designed stealth Playwright browser pipelines with anti-detection profiles and multi-provider failover architecture.
        </p>
        <div className="flex flex-wrap gap-1.5 font-sans">
          {["Ansible", "3,000+ VPS", "Playwright", "Docker", "Failover Mesh"].map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-purple-6/80 text-purple-200 border border-purple-5/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
