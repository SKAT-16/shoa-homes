import { Link } from "react-router-dom";

const dummyList = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Bole Bulbula Site",
    price: 95000,
    size: 230,
    bedRoomCount: 3,
    bathRoomCount: 4,
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    title: "Aqaqi Kaliti Site",
    price: 92000,
    size: 120,
    bedRoomCount: 1,
    bathRoomCount: 2,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Arada Piassa Site",
    price: 125000,
    size: 410,
    bedRoomCount: 5,
    bathRoomCount: 6,
  },
];

export default function PropertyList() {
  return (
    <div className="flex flex-col gap-5">
      {dummyList.map((element, index) => (
        <PropertyElement {...element} key={index} />
      ))}
    </div>
  );
}

interface PropertyElmentProps {
  id: number,
  image: string;
  title: string;
  price: number;
  size: number;
  bedRoomCount: number;
  bathRoomCount: number;
}
function PropertyElement({
  id,
  image,
  title,
  price,
  size,
  bedRoomCount,
  bathRoomCount,
}: PropertyElmentProps) {
  return (
    <div className="w-5/6 h-[350px] rounded-3xl relative shadow-2xl border-gray-400 bg-gray-100 p-8 mx-auto flex items-stretch gap-6">
      <img
        className="flex-1 w-1/2 object-cover rounded-lg"
        src={image}
        alt="house image"
      />
      <div className="text-gray-900 flex-1 flex flex-col">
        <h1 className="text-5xl font-medium mt-5">{title},</h1>
        <h4 className="text-lg font-normal mb-6">${price}/sqm,</h4>
        <div className="grid grid-cols-3 place-items-center place-content-center">
          <h5 className="text-xl font-light">{size} sqms,</h5>
          <h5 className="text-xl font-light">{bedRoomCount} Bed rooms,</h5>
          <h5 className="text-xl font-light">
            {bathRoomCount} Bath rooms
          </h5>
          <h5 className="text-xl font-light">{size} sqms,</h5>
          <h5 className="text-xl font-light">{bedRoomCount} Bed rooms,</h5>
          <h5 className="text-xl font-light">
            {bathRoomCount} Bath rooms
          </h5>
          <h5 className="text-xl font-light">{size} sqms,</h5>
          <h5 className="text-xl font-light">{bedRoomCount} Bed rooms,</h5>
          <h5 className="text-xl font-light">
            {bathRoomCount} Bath rooms
          </h5>
        </div>
        <Link to={`/projects/${id}`} className="bg-blue-500 hover:bg-blue-700 text-lg text-white text-center font-light py-2 px-4 rounded-xl mt-auto transition-colors duration-500">
          More Details
        </Link>
      </div>
    </div>
  );
}
