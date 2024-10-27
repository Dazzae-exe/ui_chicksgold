import React from "react";
import "../../styles/FilterBar/index.css";
import { IconSword } from "@tabler/icons-react";
import CustomSelect from "../Select";
import { IconMoneybag } from "@tabler/icons-react";
import { IconFeather } from "@tabler/icons-react";

const OPTIONS = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const FILTER_OPTIONS = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

function FilterBar() {
  const handleChange = (selectedOption) => {
    console.log("Selected option:", selectedOption);
  };
  return (
    <div className="filter-bar">
      <CustomSelect
        title="Game"
        icon={<IconSword className="option-image" />}
        options={OPTIONS}
        defaultOption={OPTIONS[0]}
        onChange={handleChange}
        colStart={1}
        colEnd={2}
      />
      <input type="text" placeholder="Search" className="search-input" />
      <CustomSelect
        icon={<IconMoneybag className="option-image" />}
        options={FILTER_OPTIONS}
        defaultOption={FILTER_OPTIONS[0]}
        onChange={handleChange}
        title="Price"
      />
      <CustomSelect
        options={FILTER_OPTIONS}
        defaultOption={FILTER_OPTIONS[0]}
        onChange={handleChange}
        title="Item Type"
        icon={<IconFeather className="option-image" />}
      />
    </div>
  );
}

export default FilterBar;
