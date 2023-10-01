import { Carousel, IconButton } from "@material-tailwind/react";
import available_icon from "../../assets/images/on-sale-bg.png";

const dummyList = [
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Bole Bulbula Site",
    price: 95000,
    size: 230,
    bedRoomCount: 3,
    bathRoomCount: 4,
  },
  {
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    title: "Aqaqi Kaliti Site",
    price: 92000,
    size: 120,
    bedRoomCount: 1,
    bathRoomCount: 2,
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Arada Piassa Site",
    price: 125000,
    size: 410,
    bedRoomCount: 5,
    bathRoomCount: 6,
  },
];

export function CarouselComponent() {
  return (
    <Carousel
      className="rounded-xl pb-24 mb-20"
      loop={true}
      transition={{
        type: "spring",
        bounce: .2
      }}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-blue-500" : "w-4 bg-blue-gray-300"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="blue-gray"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="blue-gray"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}>
      {dummyList.map((element, index) => (
        <CarouselElement {...element} key={index} />
      ))}
    </Carousel>
  );
}

interface CarouselElmentProps {
  image: string;
  title: string;
  price: number;
  size: number;
  bedRoomCount: number;
  bathRoomCount: number;
}
function CarouselElement({
  image,
  title,
  price,
  size,
  bedRoomCount,
  bathRoomCount,
}: CarouselElmentProps) {
  return (
    <div className="w-3/4 h-[400px] rounded-3xl relative shadow-2xl border-gray-200 bg-gray-50 p-8 mx-auto flex items-stretch gap-6">
      <img
        className="flex-1 w-1/2 object-cover rounded-lg"
        src={image}
        alt="house image"
      />
      <div className="flex-1 flex flex-col p-4">
        <h1 className="text-5xl font-medium mt-4 mb-4">{title},</h1>
        <h4 className="text-2xl font-normal">${price}/sqm,</h4>
        <h5 className="text-xl font-extralight">{size} sqms,</h5>
        <h5 className="text-xl font-extralight">{bedRoomCount} Bed rooms,</h5>
        <h5 className="text-xl font-extralight mb-4">
          {bathRoomCount} Bath rooms
        </h5>
        <button className="bg-blue-500 hover:bg-blue-700 text-xl text-white font-light py-3 px-4 rounded-xl mt-auto transition-colors duration-500">
          More Details
        </button>
      </div>

      <div
        className="absolute top-0 right-6 px-5 py-2 flex items-center"
        style={{
          backgroundImage: `url(${available_icon})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <h3 className="font-light text-xl text-white mb-4">
          ON
          <br />
          SALE
        </h3>
      </div>
    </div>
  );
}
