import Box1 from "@/components/main/workingExperiences/box1";
import Box2 from "@/components/main/workingExperiences/box2";
import Box3 from "@/components/main/workingExperiences/box3";
import Box4 from "@/components/main/workingExperiences/box4";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-dark-purple font-preahvihear">
      <div id="about-me">
        <div id="profile" className="flex">
          <div className="bg-radial-1 h-96 w-[21.5rem] relative">
            <Image
              src="/images/portfolio/avatar.png"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              alt="avatar"
              width={200}
              height={200}
            />
          </div>
          <div id="slogan" className="text-txt-primary justify-center">
            <h3 className="text-2xl">A Developer who</h3>
            <h1 className="w-[30rem] leading-[5rem] text-6xl">
              Judge a book by its
              <strong className="text-purple-1"> cover </strong>...
            </h1>
            <h4>Because if the cover does not impress you what else can?</h4>
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
