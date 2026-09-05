import Image from "next/image";

export default function Box4() {
  return (
    <div className="w-full z-10 p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center bg-gradient-color bg-gradient-4 border-t-2 border-purple-5 rounded-xl transition-all duration-300 hover:border-purple-3 hover:shadow-[0_4px_25px_rgba(113,39,186,0.25)]">
      <div className="flex-shrink-0 mb-4 sm:mb-0 mr-0 sm:mr-6">
        <Image
          src="/images/portfolio/icon4.png"
          alt="Self-Healing Automation"
          width={115}
          height={120}
          className="w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 object-contain"
        />
      </div>
      <div id="self-healing-reliability" className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs uppercase tracking-wider text-purple-3 font-semibold">
            Ops & Reliability
          </span>
        </div>
        <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
          Self-Healing Automation & Reliability
        </h3>
        <p className="text-xs md:text-sm text-gray-300 font-sans leading-relaxed mb-4">
          Built an AI-assisted self-healing system using Claude to auto-repair broken DOM selectors with 1-click Slack human verification. Engineered dynamic proxy health throttling and full test automation with JUnit 5 and WireMock.
        </p>
        <div className="flex flex-wrap gap-1.5 font-sans">
          {["Claude AI Ops", "Slack Bot Automation", "Dynamic Throttling", "JUnit 5", "WireMock"].map((tag, i) => (
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
