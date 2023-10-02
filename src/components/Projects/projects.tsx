import { Option, Select } from "@material-tailwind/react";
import PropertyList from "./property_list";
import { Location, useLocation } from "react-router-dom";

function Projects() {
  const currentPage: Location = useLocation();
  
  return (
    currentPage.pathname === "/projects" &&
    <div>
      <div className="flex items-center justify-between mt-20 mb-10">
        <h2 className="text-4xl text-light-blue-900">4 Properties Found</h2>
        <div>
          <Select
            label={`Sort By`}
            color="blue"
            className="!text-blue-400 font-poppins font-bold shadow-md">
            <Option className="font-poppins">Size</Option>
            <Option className="font-poppins">Price</Option>
            <Option className="font-poppins">Bedrooms</Option>
            <Option className="font-poppins">Bathrooms</Option>
          </Select>
        </div>
      </div>

      <PropertyList />
    </div>
  );
}

export default Projects;
