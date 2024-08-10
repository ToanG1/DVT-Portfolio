import Box1 from "@/components/main/workingExperiences/Box1";
import Box2 from "@/components/main/workingExperiences/Box2";
import Box3 from "@/components/main/workingExperiences/Box3";
import Box4 from "@/components/main/workingExperiences/Box4";
import Image from "next/image";

import { TbClick } from "react-icons/tb";

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
          <div id="slogan" className="w-1/2 md:w-1/2 xl:w-2/3 mt-2">
            <h3 className="text-base md:xll-base xl:text-2xl">
              A Developer who
            </h3>
            <h1 className="xl:leading-[4rem] text-base md:text-4xl xl:text-6xl mb-3 md:pb-0 xl:w-2/3">
              Judge a book by its
              <strong className="text-purple-1"> cover </strong>...
            </h1>
            <h4 className="text-xs md:text-base">
              Because if the cover does not impress you what else can?
            </h4>
          </div>
        </div>
        <div id="about" className="w-full md:w-3/4 md:my-10">
          <div id="work" className="mb-3 md:mb-5">
            <h1 className="text-xl xl:text-5xl mb-1 md:mb-2">
              I am a Software Engineer
            </h1>
            <h3 className="flex flex-wrap text-xs md:text-base">
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
          <h3 id="about-me" className="text-xs md:text-base">
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
          className="grid grid-cols-1 xl:grid-cols-2 gap-4 relative"
        >
          <Box1 />
          <Box2 />
          <Box3 />
          <Box4 />
          <div className="hidden xl:block bg-radial-1 h-[180%] w-1/2 absolute -top-1/2 left-1/4 z-0"></div>
        </div>
      </div>
      <div id="technologies" className="xl:px-10 py-24">
        <h2 className="text-xl md:text-3xl text-center mb-2">
          My enthusiasm for
          <strong className="text-purple-1"> web development </strong>
          has led me to gain extensive experience
        </h2>
        <h3 className="text-center text-xs md:text-xl">
          Mastering a wide range of technologies and methodologies.
        </h3>
        <Image
          src="/images/portfolio/technologies.png"
          alt="technologies"
          width={6400}
          height={4406}
          className="w-full hidden xl:block items-center mx-auto mt-10"
        />
        <Image
          src="/images/portfolio/technologies-mb.png"
          alt="technologies"
          width={6400}
          height={4406}
          className="w-full xl:hidden items-center mx-auto mt-10"
        />
      </div>
      <div id="projects" className=" py-10 md:py-40">
        <div id="project1" className="block md:flex xl:mx-20 md:relative">
          <div className="w-full md:w-1/2 mt-20">
            <span className="text-purple-1 text-base xl:text-xl">
              Featured Project
            </span>
            <h3 className="text-txt-secondary text-2xl xl:text-4xl">
              Hoc Voi AI
            </h3>
            <div className="md:w-[110%] text-xs xl:text-xl text-txt-primary border-2 border-black p-6 md:pr-16 bg-white/[.1] rounded-xl my-4 relative z-20">
              A web app for all users want to learn something new for any
              category or topic. Here we provide a platform for users to learn
              and share their roadmap to study something. The best part of this
              application is that it can create a roadmap for any topic that
              user require with just one click and 30 seconds.
            </div>
            <div className="flex mb-6">
              <TbClick size={30} className="mx-4" />
              <TbClick size={30} />
            </div>
          </div>
          <div className="w-full md:w-1/2 relative md:absolute top-0 right-0 h-[23rem]">
            <div className="hidden md:block bg-radial-2 h-[200%] w-full absolute -top-1/2 -left-60 z-0"></div>
            <div className="hidden md:block bg-radial-2 h-[200%] w-full absolute -top-1/2 -left-40 z-0"></div>
            <div className="hidden md:block bg-radial-2 h-[200%] w-full absolute -top-1/2 -left-20 z-0"></div>
            <div className="hidden md:block bg-radial-2 h-[200%] w-full absolute -top-1/2 -left-0 z-0"></div>
            <div className="bg-purple-6 h-full w-full absolute top-0 right-0 z-10 rounded-lg overflow-hidden">
              <div className="bg-white h-full w-full mt-[5%] ml-[5%] mx-auto rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="contacts"></div>
    </main>
  );
}
