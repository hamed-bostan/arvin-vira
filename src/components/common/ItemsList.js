export default function ItemsList({ imagePath, header, description }) {
  return (
    <div
      className="bg-cover bg-center h-[296px] w-[625px] relative"
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <h2 className="text-3xl leading-[57px] mb-6">{header}</h2>
      <p className="leading-[32px] mb-6 text-center max-w-[796px]">
        {description}
      </p>
    </div>
  );
}
