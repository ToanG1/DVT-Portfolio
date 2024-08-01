import Image from "next/image";

export default function Box2() {
  return (
    <div className="px-[10%] py-[5%] flex bg-gradient-color bg-gradient-2 border-t-2 border-purple-5 rounded-lg">
      <Image
        src="/images/portfolio/icon2.png"
        alt="Backend"
        width={130}
        height={120}
      />
    </div>
  );
}
