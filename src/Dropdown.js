import { useState } from "react";
import CircleUp from "./images/CircleUp";
import CircleDown from "./images/CircleDown";

const Dropdown = ({ data }) => {
  const [isOpen, setOpen] = useState(false);
  const [items] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(data[id]);
    toggleDropdown();
  };

  return (
    <div className='bg-white border-2 border-black drop-shadow-md w-96 mx-auto rounded-md'>
      <div className={`p-4 flex justify-between align-center hover:cursor-pointer text-center ${!selectedItem && "opacity-40"}`} onClick={toggleDropdown}>
        {selectedItem ? items.find((item) => item == selectedItem) : "Choose an animal"}
        {isOpen && <CircleUp className='h-4 w-4' aria-hidden='true' />}
        {!isOpen && <CircleDown className={`${!isOpen && "hidden"} h-4 w-4"`} aria-hidden='true' />}
      </div>
      <ul className={`border-t-2 border-black ${!isOpen && "hidden"} ${isOpen && "block"}`}>
        {data.map((item, index) => (
          <li
            key={index}
            className={`p-3 px-4 border border-1 border-black hover:bg-yellow hover:cursor-pointer ${item == selectedItem && "bg-yellow-400"}`}
            onClick={(e) => handleItemClick(e.target.id)}
            id={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
