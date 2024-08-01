import Image from "next/image";

export default function Box4() {
  return (
    <div className="px-[10%] py-[5%] flex bg-gradient-color bg-gradient-4 border-t-2 border-purple-5 rounded-lg">
      <Image
        src="/images/portfolio/icon4.png"
        alt="Backend"
        width={120}
        height={120}
      />
    </div>
  );
}
