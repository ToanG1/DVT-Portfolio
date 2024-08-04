import Image from "next/image";

export default function Box2() {
  return (
    <div className="w-full z-10 px-[10%] py-[5%] flex items-center bg-gradient-color bg-gradient-2 border-t-2 border-purple-5 rounded-lg">
      <Image
        src="/images/portfolio/icon2.png"
        alt="Backend"
        width={130}
        height={120}
        className="w-16 h-16 md:w-24 md:h-24 xl:w-32 xl:h-32"
      />
      <div id="testing" className="ml-10">
        <h1 className="text-xl xl:text-3xl mb-4">Testing</h1>
        <h4 className="text-[10px] md:text-sm">
          JUnit 5 for testing Java applications. Additionally, I am well-versed
          in Testcontainers, Mockito, and WireMock.
        </h4>
      </div>
    </div>
  );
}
