import quality_icon from "../../assets/icons/quality.png";
import convenience_icon from "../../assets/icons/convenience.png";
import affordable_icon from "../../assets/icons/affordable.png";

export default function About() {
  return (
    <div className="p-8 mb-20">
      <h2 className="text-4xl text-center text-light-blue-900 mb-8">
        Why choose Shoa Homes?
      </h2>
      <div
        className="w-full h-[450px] p-6"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 100, 0.5), rgba(0, 0, 100, 0.5)), url(https://plus.unsplash.com/premium_photo-1675952691326-0f7f5a5a6dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <h3 className="text-3xl font-normal text-center text-white">
          We do all we can to have the best home we could possibly have to the
          best of our convenience. In Addis Ababa, this has been a major
          challengs even with a number of real estate developers.
        </h3>

        <div className="mt-16 flex items-center justify-around">
          <HighlightComponent image={quality_icon} title="Quality" />
          <HighlightComponent image={convenience_icon} title="Convenience" />
          <HighlightComponent image={affordable_icon} title="Affordable" />
        </div>
      </div>
    </div>
  );
}


interface HighlightComponentProps{
  image: string,
  title: string
}
function HighlightComponent({ image, title }: HighlightComponentProps) {
  return (
    <div className="flex flex-col items-center">
      <img className="w-24 h-24" src={image} alt="quality-icon" />
      <h3 className="text-white text-4xl">{title}</h3>
    </div>
  );
}
