import ItemsList from "../common/ItemsList";
import Description from "./description";
import Header from "./header";

export default function Landing() {
  return (
    <div>
      <Header />
      <Description />
      <ItemsList
        mainText="لورم ایپسوم متن ساختگی با تولید سادگی"
        highlightedText="سادگی"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز"
      />
    </div>
  );
}
