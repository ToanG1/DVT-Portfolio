import Image from "next/image";

export default function Box2() {
  return (
    <div className="w-full z-10 p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center bg-gradient-color bg-gradient-2 border-t-2 border-purple-5 rounded-xl transition-all duration-300 hover:border-purple-3 hover:shadow-[0_4px_25px_rgba(113,39,186,0.25)]">
      <div className="flex-shrink-0 mb-4 sm:mb-0 mr-0 sm:mr-6">
        <Image
          src="/images/portfolio/icon2.png"
          alt="Distributed Systems"
          width={130}
          height={120}
          className="w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 object-contain"
        />
      </div>
      <div id="distributed-systems" className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs uppercase tracking-wider text-purple-3 font-semibold">
            Scale & Throughput
          </span>
        </div>
        <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
          High-Throughput Distributed Systems
        </h3>
        <p className="text-xs md:text-sm text-gray-300 font-sans leading-relaxed mb-4">
          Founded and architected the standalone <strong className="text-white">serp-api</strong> microservice. Engineered asynchronous event-driven pipelines on AWS SQS and Quartz scheduling to ingest and analyze <strong className="text-purple-3">500,000+ keywords daily (num=50)</strong>.
        </p>
        <div className="flex flex-wrap gap-1.5 font-sans">
          {["Java 21", "Spring Boot 3", "AWS SQS", "Aurora MySQL", "Redis/Valkey"].map((tag, i) => (
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
