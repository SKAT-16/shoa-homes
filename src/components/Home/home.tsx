import About from "./about";
import { CarouselComponent } from "./carousel";

function Home() {
  return (
    <div>
      <h2 className="text-7xl text-center text-light-blue-900 leading-[80px] pt-20 mb-20">
        Opening Doors, <br /> Building Opportunities!
      </h2>
      <CarouselComponent />
      <About />
    </div>
  );
}

export default Home;
