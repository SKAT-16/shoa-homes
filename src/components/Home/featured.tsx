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
];

export default function Featured() {
  return (
    <div className="mb-20">
      <h2 className="text-4xl text-center text-light-blue-900 mb-8">
        Featured Properties
      </h2>

      <div className="flex justify-center gap-10">
      {dummyList.map((element, index) => (
        <CarouselElement {...element} key={index} />
      ))}
      </div>
    </div>
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
    <div className="w-3/4 h-[300px] rounded-3xl relative shadow-2xl border-gray-200 bg-gray-50 p-5 mx-auto flex items-stretch gap-6 cursor-pointer hover:scale-110 active:scale-75 transition-transform duration-300">
      <img
        className="flex-1 w-1/2 object-cover rounded-lg"
        src={image}
        alt="house image"
      />
      <div className="flex-1 flex flex-col p-4">
        <h1 className="text-3xl font-medium mt-4 mb-4">{title},</h1>
        <h4 className="text-xl font-normal">${price}/sqm,</h4>
        <h5 className="text-lg font-extralight">{size} sqms,</h5>
        <h5 className="text-lg font-extralight">{bedRoomCount} Bed rooms,</h5>
        <h5 className="text-lg font-extralight mb-4">
          {bathRoomCount} Bath rooms
        </h5>
      </div>

      <div
        className="absolute top-0 right-5 px-2 flex items-center justify-center bg-yellow-600" >
        <h3 className="font-light text-lg text-white text-center pb-2">
          Holiday Discount
        </h3>
      </div>
    </div>
  );
}
