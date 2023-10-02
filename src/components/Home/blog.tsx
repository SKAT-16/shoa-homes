import React from "react";

const dummyList = [
  {
    image:
      "https://images.unsplash.com/photo-1557176497-f90da5d105ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Housing Prices",
    description:
      "Housing prices are on the rise, making it increasingly challenging for many people to afford their dream homes.",
    date: new Date(),
  },
  {
    image:
      "https://images.unsplash.com/photo-1557176497-f90da5d105ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Inflation and Real State owners",
    description:
      "Inflation is impacting real estate owners as rising costs affect property maintenance and rental income, requiring strategic planning.",
    date: new Date(),
  },
  {
    image:
      "https://images.unsplash.com/photo-1557176497-f90da5d105ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "What's new at Shoa Real State listings",
    description:
      "Shoa Real Estate Listings introduces fresh properties, emphasizing modern amenities and competitive pricing to cater to evolving market demands.",
    date: new Date(),
  },
];

export default function Blog() {
  return (
    <div className="p-8 mb-20">
      <h2 className="text-4xl text-center text-light-blue-900 mb-8">Blog</h2>
      <div className="flex items-center justify-center gap-10">
        {dummyList.map((element, index) => (
          <BlogComponent {...element} key={index} />
        ))}
      </div>
    </div>
  );
}

interface BlogComponentsProps {
  image: string;
  title: string;
  description: string;
  date: Date;
}

function BlogComponent({
  image,
  title,
  description,
  date,
}: BlogComponentsProps) {
  return (
    <div className="bg-gray-50 rounded-lg shadow-lg h-[450px] p-8 flex flex-col flex-1 cursor-pointer hover:scale-110 active:scale-75 transition-transform duration-300">
      <img src={image} alt="blog image" className="h-1/3 object-cover mb-3" />
      <h4 className="text-2xl font-bold">{title}</h4>
      <p className="text-lg my-5">{description}</p>
      <p className="text-sm self-end mt-auto italic">{date.toDateString()}</p>
    </div>
  );
}
