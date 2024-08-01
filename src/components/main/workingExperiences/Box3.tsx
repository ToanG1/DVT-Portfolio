import Image from "next/image";

export default function Box3() {
  return (
    <div className="px-[10%] py-[5%] flex bg-gradient-color bg-gradient-3 border-t-2 border-purple-5 rounded-lg">
      <Image
        src="/images/portfolio/icon3.png"
        alt="Backend"
        width={120}
        height={120}
      />
    </div>
  );
}
