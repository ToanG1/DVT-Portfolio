import Box1 from "@/components/main/workingExperiences/Box1";
import Box2 from "@/components/main/workingExperiences/Box2";
import Box3 from "@/components/main/workingExperiences/Box3";
import Box4 from "@/components/main/workingExperiences/Box4";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-dark-purple font-preahvihear px-2 sm:px-[10%] md:py-[5%]">
      <div id="about-me">
        <div
          id="profile"
          className="flex items-center w-full h-96 text-txt-primary"
        >
          <div className="bg-radial-1 h-[70%] md:h-full w-[40%] md:w-2/3 lg:w-1/2 xl:w-1/4 relative">
            <div className="flex absolute -right-44 md:-right-32 xl:-right-44 top-10 md:top-2 xl:top-10 2xl:top-4">
              <Image
                src="/images/portfolio/arrow.png"
                className="w-1/4 md:w-1/3 mt-2 md:mt-3 mr-1 md:mr-2"
                alt="Who am I ?"
                width={110}
                height={110}
              />
              <span className="text-xs xl:text-xl md:text-base">
                Hello! I am <strong className="text-purple-1">Van Toan</strong>
              </span>
            </div>

            <Image
              src="/images/portfolio/avatar.png"
              className="w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              alt="avatar"
              width={200}
              height={200}
            />
          </div>
          <div id="slogan" className="w-1/3 md:w-1/2 xl:w-2/3 mt-2">
            <h3 className="text-[10p] md:xll-base xl:text-2xl">
              A Developer who
            </h3>
            <h1 className="xl:leading-[4rem] text-base md:text-4xl xl:text-6xl mb-3 md:pb-0 xl:w-2/3">
              Judge a book by its
              <strong className="text-purple-1"> cover </strong>...
            </h1>
            <h4 className="text-[8px] md:text-xs">
              Because if the cover does not impress you what else can?
            </h4>
          </div>
        </div>
        <div id="about"></div>
      </div>
      <div id="work-experiences">
        <Box1 />
        <Box2 />
        <Box3 />
        <Box4 />
      </div>
      <div id="technologies"></div>
      <div id="projects"></div>
      <div id="contacts"></div>
      <div className="bg-radial-1 h-96 w-60 "></div>
    </main>
  );
}
