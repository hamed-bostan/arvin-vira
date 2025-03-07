import Image from "next/image";

export default function Details() {
  return (
    <section className="bg-amber-900 text-[#FAFAFA] flex flex-col items-center pt-24">
      <HeaderSection />
      <ItemsList />
    </section>
  );
}

function HeaderSection() {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm leading-[22px] px-6 py-2 bg-[#393C3E] rounded-lg mb-1 border border-[#4a4a4a] w-fit">
        راه‌کار ‌ها
      </span>
      <p className="text-3xl leading-[57px] mb-6">
        لورم ایپسوم متن ساختگی با تولید سادگی
        <span className="bg-gradient-to-r from-[#FCB81B] to-[#FB6514] bg-clip-text text-transparent mr-2">
          سادگی
        </span>
      </p>
      <p className="leading-[32px] mb-6 text-center max-w-[796px]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
      </p>
      <div className="bg-[#FB6514] flex gap-x-2 rounded-md px-3 py-2 items-center w-fit">
        <span>مطالعه بیشتر</span>
        <Image
          src={"/icon/arrowLeftWhite.svg"}
          width={40}
          height={40}
          className="w-4 h-4"
          alt="arrow icon"
        />
      </div>
    </div>
  );
}

function ItemsList() {
  return (
    <div className="bg-[url('/images/image1.png')] bg-cover bg-center h-[296px] w-[625px] relative">
      <p className="text-lg leading-8 bg-[#8F959A1A] rounded-2xl min-w-[365px] p-3 absolute top-0 -left-32 mb-6">
        لورم ایپسوم متن ساختگی با تولید سادگی
      </p>
      <p className="text-lg leading-8 bg-[#8F959A1A] rounded-2xl min-w-[365px] p-3 absolute top-6 -left-[152px] translate-y-full">
        لورم ایپسوم متن ساختگی با تولید سادگی
      </p>
      <p className="text-lg leading-8 bg-[#8F959A1A] rounded-2xl min-w-[365px] p-3 absolute top-[104px] -left-[176px] translate-y-full">
        لورم ایپسوم متن ساختگی با تولید سادگی
      </p>
      <p className="text-lg leading-8 bg-[#8F959A1A] rounded-2xl min-w-[365px] p-3 absolute top-[184px] -left-[200px] translate-y-full">
        لورم ایپسوم متن ساختگی با تولید سادگی
      </p>
    </div>
  );
}
