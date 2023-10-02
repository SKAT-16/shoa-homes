import Typewriter from "typewriter-effect";
import About from "./about";
import Blog from "./blog";
import { CarouselComponent } from "./carousel";
import Contact from "./contact";
import Featured from "./featured";
import Location from "./location";

function Home() {
  return (
    <div>
      <h2 className="text-7xl text-center text-light-blue-900 leading-[80px] pt-20 mb-32">
        <Typewriter
          options={{
            strings: ["Opening Doors!", "Building Opportunities!"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <CarouselComponent />
      <About />
      <Featured />
      <Blog />
      <Location />
      <Contact />
    </div>
  );
}

export default Home;
