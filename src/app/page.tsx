import Box1 from "@/components/main/workingExperiences/Box1";
import Box2 from "@/components/main/workingExperiences/Box2";
import Box3 from "@/components/main/workingExperiences/Box3";
import Box4 from "@/components/main/workingExperiences/Box4";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-dark-purple text-txt-primary font-preahvihear px-10 sm:px-[10%] md:py-[5%]">
      <div id="about-me">
        <div id="profile" className="flex items-center w-full h-96">
          <div className="bg-radial-1 h-[70%] md:h-full w-[50%] md:w-2/3 lg:w-1/2 xl:w-1/4 relative">
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
            <h3 className="text-[10px] md:xll-base xl:text-2xl">
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
        <div id="about" className="w-full md:w-3/4 xl:w-1/2 md:my-10">
          <div id="work" className="mb-3 md:mb-5">
            <h1 className="text-xl xl:text-5xl mb-1 md:mb-2">
              I am a Software Engineer
            </h1>
            <h3 className="flex text-[10px] md:text-base">
              Currently, I am web developer at
              <a
                className="text-red-600 flex"
                href="https://fabercompany.com.vn/"
                target="_blank"
              >
                <Image
                  src="/images/portfolio/faber-logo.png"
                  alt="faber"
                  width={100}
                  height={100}
                  className="mx-1 w-[10px] md:w-[16px]"
                />
                Faber Viet Nam
              </a>
              .
            </h3>
          </div>
          <h3 id="about-me" className="text-[10px] md:text-base">
            A self-taught Software Developer, functioning in the industry for 1+
            years now. I make meaningful and delightful products that create an
            equilibrium between user needs and business goals.
          </h3>
        </div>
      </div>
      <div id="work-experiences" className="mt-20 md:mt-40">
        <h1 className="text-xl md:text-4xl mb-5 md:mb-10">Work Experience</h1>
        <div
          id="works"
          className="grid grid-rows-4 md:grid-rows-2 grid-flow-col gap-4"
        >
          <Box1 />
          <Box2 />
          <Box3 />
          <Box4 />
        </div>
      </div>
      <div id="technologies"></div>
      <div id="projects"></div>
      <div id="contacts"></div>
      <div className="bg-radial-1 h-96 w-60"></div>
    </main>
  );
}
