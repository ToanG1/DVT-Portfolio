import Image from "next/image";

export default function Box1() {
  return (
    <div className="w-full z-10 px-[10%] py-[5%] flex items-center bg-gradient-color bg-gradient-1 border-t-2 border-purple-5 rounded-lg">
      <Image
        src="/images/portfolio/icon1.png"
        alt="Backend"
        width={120}
        height={120}
        className="w-16 h-16 md:w-24 md:h-24 xl:w-32 xl:h-32"
      />
      <div id="backend" className="ml-10">
        <h1 className="text-xl xl:text-3xl mb-4">Backend</h1>
        <h4 className="text-[10px] md:text-sm">
          I have experience in backend development, with a primary focus on Java
          in my current role. Additionally, I am familiar with Node.js and
          Python.
        </h4>
      </div>
    </div>
  );
}
