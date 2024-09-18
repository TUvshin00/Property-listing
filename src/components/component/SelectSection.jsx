"use client";
import { useState } from "react";
import SearchIcon from "../svg/SearchIcon";

export default function SelectSection() {
  const [searchValue, setSearchValue] = useState("");
  const names = ["Los Angeles", "New York"];
  const filteredName = names.filter((name) =>
    name.toLowerCase().includes(searchValue)
  );

  const handelInputChange = (e) => {
    const searchStrig = e.target.value;
    setSearchValue(searchStrig.trim().toLowerCase());
  };
  return (
    <div className="flex ">
      <div className="flex items-center ">
        <div className="flex flex-row">
          <select class="select border-gray-400 rounded-none rounded-l-lg  w-[83px] h-[62px]">
            <option disabled selected>
              Pick your favorite Simpson
            </option>
            <option>Homer</option>
            <option>Marge</option>
          </select>
          <input
            onChange={handelInputChange}
            className="border border-gray-400 h-[62px] flex flex-row w-[484px]"
            type="text"
          />
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}
