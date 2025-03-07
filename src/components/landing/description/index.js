import Image from "next/image";

export default function Description() {
  return (
    <section className="flex gap-x-12 px-64 bg-[#4f4f4f88] pt-6">
      <Image
        src={"/images/Device.png"}
        alt="device image"
        width={200}
        height={200}
        className="w-[241px] h-[464px]"
      />
      <div className="text-[#FAFAFA]">
        <Image
          src={"icon/buildings.svg"}
          width={40}
          height={40}
          alt="building icon"
          className="w-6 h-6 bg-[#393C3E] rounded-lg box-content p-3 mb-3"
        />
        <h2 className="font-semibold text-2xl leading-[68px] mb-6">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </h2>
        <p className="leading-[26px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
        </p>
      </div>
    </section>
  );
}
