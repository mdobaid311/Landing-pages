import Image from "next/image";
import "./Navbar.scss";
import { BsGridFill, BsSearch } from "react-icons/bs";
import { SlHandbag } from "react-icons/sl";

const Navbar = () => {
  const listItems = ["Home", "Shop", "Man", "Woman", "Kids"];
  return (
    <div className="absolute top-0 w-full flex justify-between items-center text-white px-5 py-2 border-b-[1px]  border-gray-400 p-4">
      <Image
        src="https://www.pngmart.com/files/23/White-Nike-Logo-PNG.png"
        alt="nike"
        width={100}
        height={100}
        className="cursor-pointer h-[40px] object-contain "
      />
      <ul className="flex justify-center items-center gap-6">
        {listItems.map((item, index) => {
          return (
            <li
              key={index}
              className="
            text-xl cursor-pointer hover:text-blue-950 transition duration-300 ease-in-out
            "
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center items-center gap-2">
        <div className="px-2 cursor-pointer">
          <BsSearch className=" text-xl cursor-pointer hover:text-blue-950 transition duration-300 ease-in-out mx-2 " />
        </div>
        <div className="border-l-[1px] border-gray-400 px-2 cursor-pointer">
          <SlHandbag className=" text-xl cursor-pointer hover:text-blue-950 transition duration-300 ease-in-out mx-2 " />
        </div>
        <div className="border-l-[1px] border-gray-400 px-2 cursor-pointer">
          <BsGridFill className=" text-xl cursor-pointer hover:text-blue-950 transition duration-300 ease-in-out mx-2 " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
