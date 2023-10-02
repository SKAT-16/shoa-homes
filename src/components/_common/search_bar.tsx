import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";

export default function SearchBar() {
  return (
    <div className="w-3/4 mt-10 mx-auto mb-10">
      <div className="w-full">
        <Input
          variant="outlined"
          label="Find your Home"
          color="white"
          className="!font-poppins"
          icon={<i className="fas fa-search !text-white" />}
        />
      </div>

      <div className="mt-10 flex items-center justify-between gap-5">
        <SelectDefault
          title="Select Location"
          options={["Arada", "Gulele", "Bole", "Aqaqi"]}
        />
        <SelectDefault
          title="Select Property Status"
          options={["Arada", "Gulele", "Bole", "Aqaqi"]}
        />
        <SelectDefault
          title="Select Property Type"
          options={["Arada", "Gulele", "Bole", "Aqaqi"]}
        />
        <SelectDefault
          title="Select Keyword"
          options={["Arada", "Gulele", "Bole", "Aqaqi"]}
        />
      </div>
    </div>
  );
}

interface SelectDefaultProps {
  title: string;
  options: string[];
}

function SelectDefault({ title, options }: SelectDefaultProps) {
  return (
      <Select
        label={`${title}`}
        color="blue"
        className="!text-white font-poppins"
        labelProps={{style : {color : '#DDDDDD'} }}>
        {options.map((item, index) => (
          <Option key={index} className="font-poppins">
            {item}
          </Option>
        ))}
      </Select>
  );
}
