export default function BuildingDetails({ imagePath, text }) {
  return (
    <div
      className="bg-cover bg-center h-[296px] w-[625px] relative text-lg leading-8 text-[#FAFAFA]"
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <p className="bg-[#8F959A1A] rounded-2xl min-w-[365px] p-3 absolute top-0 -left-32 mb-6">
        {text}
      </p>
      <p className="bg-[#8F959A1A] rounded-2xl min-w-[365px] p-3 absolute top-6 -left-[152px] translate-y-full">
        {text}
      </p>
      <p className="bg-[#8F959A1A] rounded-2xl min-w-[365px] p-3 absolute top-[104px] -left-[176px] translate-y-full">
        {text}
      </p>
      <p className="bg-[#8F959A1A] rounded-2xl min-w-[365px] p-3 absolute top-[184px] -left-[200px] translate-y-full">
        {text}
      </p>
    </div>
  );
}
