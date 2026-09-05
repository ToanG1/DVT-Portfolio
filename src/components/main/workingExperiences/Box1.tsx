import Image from "next/image";

export default function Box1() {
  return (
    <div className="w-full z-10 p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center bg-gradient-color bg-gradient-1 border-t-2 border-purple-5 rounded-xl transition-all duration-300 hover:border-purple-3 hover:shadow-[0_4px_25px_rgba(113,39,186,0.25)]">
      <div className="flex-shrink-0 mb-4 sm:mb-0 mr-0 sm:mr-6">
        <Image
          src="/images/portfolio/icon1.png"
          alt="AI Product Engineering"
          width={120}
          height={120}
          className="w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 object-contain"
        />
      </div>
      <div id="ai-engineering" className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs uppercase tracking-wider text-purple-3 font-semibold">
            Applied Intelligence
          </span>
        </div>
        <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
          AI Product Engineering & LLMs
        </h3>
        <p className="text-xs md:text-sm text-gray-300 font-sans leading-relaxed mb-4">
          Architected production AI pipelines leveraging OpenAI (Few-Shot API), Gemini (grounding), and Claude. Built flagship features including the AI Article Builder with grounded chat editing and AIO Report for real-time generative search tracking.
        </p>
        <div className="flex flex-wrap gap-1.5 font-sans">
          {["OpenAI API", "Gemini Grounding", "Claude", "Few-Shot Ops"].map((tag, i) => (
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
