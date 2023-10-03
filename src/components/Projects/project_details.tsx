import { useParams } from "react-router-dom";
import available_icon from "../../assets/on-sale-bg.png";
import apartment_ico from "../../assets/icons/apartment.png";
import bath_ico from "../../assets/icons/bath.png";
import bed_ico from "../../assets/icons/bed.png";
import sellable_ico from "../../assets/icons/sellable.png";
import size_ico from "../../assets/icons/size.png";
import location_ico from "../../assets/icons/location.png";
import floor_img from "../../assets/floor.png";
import { Avatar } from "@material-tailwind/react";
import call_ico from "../../assets/icons/call.png";

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

export default function ProjectDetails() {
  let params = useParams();

  return (
    <div>
      <div
        className="relative rounded-lg shadow-lg w-full h-[500px] p-6 mt-20"
        style={{
          backgroundImage: `url(${dummyList[params.projectId].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
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

      <div>
        <h1 className="mt-10 text-3xl">{dummyList[params.projectId].title}</h1>
        <h3 className="text-xl text-blue-400">
          ${dummyList[params.projectId].price}/sqm
        </h3>
        <div
          className="rounded-lg shadow-lg mx-auto h-[150px] px-10 mt-5 grid grid-cols-3 place-content-center gap-5"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 100, 0.5), rgba(0, 0, 100, 0.5)), url(${
              dummyList[params.projectId].image
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="flex items-center">
            <img src={size_ico} alt="size-icon" />
            <h3 className="text-white text-xl ml-5">125 sqm</h3>
          </div>
          <div className="flex items-center">
            <img src={apartment_ico} alt="size-icon" />
            <h3 className="text-white text-xl ml-5">Semi Finished</h3>
          </div>
          <div className="flex items-center">
            <img src={sellable_ico} alt="size-icon" />
            <h3 className="text-white text-xl ml-5">For Sale</h3>
          </div>
          <div className="flex items-center">
            <img src={bed_ico} alt="size-icon" />
            <h3 className="text-white text-xl ml-5">
              {dummyList[params.projectId].bedRoomCount} Bed Rooms
            </h3>
          </div>
          <div className="flex items-center">
            <img src={bath_ico} alt="size-icon" />
            <h3 className="text-white text-xl ml-5">
              {dummyList[params.projectId].bathRoomCount} Bath Rooms
            </h3>
          </div>
          <div className="flex items-center">
            <img src={location_ico} alt="size-icon" />
            <h3 className="text-white text-xl ml-5">Addis Ababa</h3>
          </div>
        </div>

        <h1 className="mt-10 text-3xl">Description</h1>
        <h3 className="mt-2 text-xl text-gray-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos autem
          laudantium vero repellat debitis officia culpa provident! Placeat
          quam, ipsam eaque sapiente asperiores natus temporibus? Sapiente
          eveniet suscipit dolorum quae. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Exercitationem asperiores delectus sequi ullam
          architecto ipsam nobis neque amet, dicta magnam possimus,
          consequuntur, odit placeat optio ea blanditiis fuga facilis quas!
        </h3>

        <h1 className="mt-10 text-3xl">Floor Plans</h1>
        <div className="mx-auto w-3/4 grid grid-cols-2 place-content-center gap-5">
          <img src={floor_img} alt="floor-img" />
          <img src={floor_img} alt="floor-img" />
          <img src={floor_img} alt="floor-img" />
          <img src={floor_img} alt="floor-img" />
        </div>

        <h1 className="mt-10 mb-3 text-3xl">Location</h1>
        <div className="flex gap-10 h-[400px]">
          <div className="w-4/6 mx-auto shadow-lg">
            <img
              src="https://i.insider.com/5d72b1af2e22af194b75c008?width=1000&format=jpeg&auto=webp"
              alt="location-image"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 bg-pointer-color shadow-lg rounded-xl px-6 pt-10 flex flex-col">
            <div className="flex items-center justify-start">
              <Avatar
                src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="avatar"
                variant="rounded"
                size="xl"
              />
              <h1 className="m-2">
                <span className="text-2xl text-white">Henok Tsegaye</span> <br /> <span className="text-gray-200">Agent</span>
              </h1>
            </div>
            <div className="mt-5 flex items-center gap-5">
              <img src={call_ico} alt="email-icon" />
              <h5 className="text-white">+251-11561997</h5>
            </div>
            <div className="mt-5 flex items-center gap-5">
              <img src={call_ico} alt="email-icon" />
              <h5 className="text-white">+251-11561997</h5>
            </div>
            <div className="mt-5 flex items-center gap-5">
              <img src={location_ico} alt="email-icon" />
              <h5 className="text-white">Bole, Addis Ababa</h5>
            </div>
            <button className="bg-blue-700 rounded-md w-full p-3 mt-auto mb-4 text-white text-xl cursor-pointer hover:bg-cyan-900 active:scale-90 transition-all duration-200 ease-in-out">Call Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
