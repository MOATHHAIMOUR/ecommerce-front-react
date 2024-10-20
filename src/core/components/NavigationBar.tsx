import DownArrowSvg from "@assets/svg/downArrowSvg";
import TopArrowSvg from "@assets/svg/topSvg";
import { useState } from "react";
import CustomLink from "./CustomLink";
import Container from "./container";

export default function NavigationBar() {
  return (
    <div className="w-full bg-[#F4F4F4]">
      <Container>
        <div className="flex h-full w-full items-center justify-between">
          <div className="flex items-center gap-6">
            <CategoriesDropdown />
            <ul className="flex gap-5">
              <CustomLink to="/Home" title="Home" />
              <CustomLink to="/orders" title="Orders" />
              <CustomLink to="/Locations" title="Locations" />
              <CustomLink to="/about-us" title="About-us" />
            </ul>
          </div>

          <p className="font-semibold">30 Days Free Return</p>
        </div>
      </Container>
    </div>
  );
}

const CategoriesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];

  return (
    <div
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
      className="relative inline-block text-left"
    >
      {/* Button to toggle the dropdown */}
      <button className="flex h-[50px] w-full items-center justify-between bg-[#EDA415] px-4 font-bold text-white focus:outline-none">
        <span className="pr-7">Browse categories</span>
        {isOpen ? <TopArrowSvg /> : <DownArrowSvg />}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <ul className="absolute left-0 z-40 w-full rounded-md bg-white py-2 shadow-lg">
          {categories.map((category, index) => (
            <li key={index} className="hover:bg-gray-100">
              <button
                className="block w-full px-4 py-2 text-left text-gray-700"
                onClick={() => console.log(`${category} selected`)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
