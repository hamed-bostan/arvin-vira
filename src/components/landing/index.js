import BuildingDetails from "../common/BuildingDetails";
import ItemsList from "../common/ItemsList";
import Description from "./description";
import Header from "./header";

export default function Landing() {
  return (
    <div>
      <Header />
      <Description />
      <div className="flex flex-col items-center bg-amber-900 text-[#FAFAFA] pt-24">
        <ItemsList
          mainText="لورم ایپسوم متن ساختگی با تولید سادگی"
          highlightedText="سادگی"
          description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز"
        />
        <BuildingDetails
          imagePath="/images/image1.png"
          text="لورم ایپسوم متن ساختگی با تولید سادگی"
        />
      </div>
      <div className="flex flex-col items-center bg-amber-900 text-[#FAFAFA] pt-24">
        <ItemsList
          mainText="لورم ایپسوم متن ساختگی با تولید سادگی"
          highlightedText="سادگی"
          description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز"
        />
        <BuildingDetails
          imagePath="/images/image2.png"
          text="لورم ایپسوم متن ساختگی با تولید سادگی"
        />
      </div>
    </div>
  );
}
