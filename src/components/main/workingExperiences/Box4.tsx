import Image from "next/image";

export default function Box4() {
  return (
    <div className="w-full z-10 px-[10%] py-[5%] flex items-center bg-gradient-color bg-gradient-4 border-t-2 border-purple-5 rounded-lg">
      <Image
        src="/images/portfolio/icon4.png"
        alt="Backend"
        width={115}
        height={120}
        className="w-16 h-16 md:w-24 md:h-24 xl:w-32 xl:h-32"
      />
      <div id="performance" className="ml-10">
        <h1 className="text-xl xl:text-3xl mb-4">Performance</h1>
        <h4 className="text-[10px] md:text-sm">
          By enhancing user experiences and increasing developer efficiency, it
          has provided better outcomes for both customers and developers.
        </h4>
      </div>
    </div>
  );
}
