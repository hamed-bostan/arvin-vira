import Image from "next/image";

export default function ItemsList({ mainText, highlightedText, description }) {
  return (
    <div className="flex flex-col items-center bg-amber-900 text-[#FAFAFA] pt-24">
      <span className="text-sm leading-[22px] px-6 py-2 bg-[#393C3E] rounded-lg mb-1 border border-[#4a4a4a] w-fit">
        راه‌کار ‌ها
      </span>
      <p className="text-3xl leading-[57px] mb-6">
        {mainText}
        <span className="bg-gradient-to-r from-[#FCB81B] to-[#FB6514] bg-clip-text text-transparent mr-2">
          {highlightedText}
        </span>
      </p>
      <p className="leading-[32px] mb-6 text-center max-w-[796px]">
        {description}
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
