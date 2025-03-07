import Image from "next/image";

export default function Header() {
  return (
    <header className="h-[30rem] text-[#FAFAFA] flex flex-col items-center justify-center">
      <HeadingSection />
      <DescriptionSection />
      <ActionButtons />
    </header>
  );
}

function HeadingSection() {
  return (
    <>
      <h2 className="text-lg leading-[40px] mb-1">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
      </h2>
      <h1 className="font-semibold leading-[92px] text-[56px] mb-6">
        لورم ایپسوم متن ساختگی با تولید سادگی
      </h1>
    </>
  );
}

function DescriptionSection() {
  return (
    <section className="relative flex mb-6">
      <p className="bg-gradient-to-l from-[#FE8B20] via-[#AECE3B] to-[#119389] text-transparent bg-clip-text text-2xl leading-[40px]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
      </p>
      <Image
        width={50}
        height={50}
        src={"/icon/arrow.svg"}
        alt="arrow icon"
        className="w-[117px] h-[43px] absolute -left-2 bottom-0 translate-y-1/2 -translate-x-full"
      />
      <span className="px-6 py-0.5 rounded-3xl bg-[#FB65141A] font-semibold text-sm leading-[32px] absolute -left-32 -translate-x-full top-2 shadow-[0_4px_6px_0_#FB65141A]">
        ساده و کاربردی
      </span>
    </section>
  );
}

function ActionButtons() {
  return (
    <div className="flex gap-x-7 font-semibold text-sm items-center">
      <span className="bg-[#FB6514] rounded-xl px-6 py-3 cursor-pointer">
        درخواست دمو
      </span>
      <div className="flex gap-x-2 items-center cursor-pointer">
        <span className="text-[#FB6514]">مشاوره رایگان</span>
        <Image
          src={"/icon/arrowLeftOrange.svg"}
          alt="arrow icon"
          width={30}
          height={30}
          className="w-6 h-6"
        />
      </div>
    </div>
  );
}
