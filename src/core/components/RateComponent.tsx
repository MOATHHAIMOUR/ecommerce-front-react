import { Dispatch } from "@reduxjs/toolkit";
import { SetStateAction, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

type RateComponent = { numberOfStars?: number; size: number };

export default function RateComponent({
  numberOfStars = 5,
  size = 15,
}: RateComponent) {
  const [selectedStarIndexClick, setSelectedStarIndexClick] = useState<
    number | null
  >(null);

  const [selectedStarIndexHover, setSelectedStarIndexHover] = useState<
    number | null
  >(null);

  function handleSelectionClick(index: number) {
    setSelectedStarIndexClick((cur) => (cur === index ? null : index));
  }

  function handleSelectionHover(index: number | null) {
    setSelectedStarIndexHover(index);
  }

  return (
    <div className="flex gap-2">
      {Array.from({ length: numberOfStars }, (_, index) => (
        <Star
          key={index}
          index={index}
          selectedStarIndexClick={selectedStarIndexClick}
          handleSelectionClick={handleSelectionClick}
          handleSelectionHover={handleSelectionHover}
          selectedStarIndexHover={selectedStarIndexHover}
        />
      ))}
    </div>
  );
}

type StarProps = {
  index: number;
  selectedStarIndexClick: number | null;
  selectedStarIndexHover: number | null;
  handleSelectionClick: (index: number) => void;
  handleSelectionHover: (index: number | null) => void;
};

function Star({
  index,
  selectedStarIndexClick,
  selectedStarIndexHover,
  handleSelectionClick,
  handleSelectionHover,
}: StarProps) {
  const isSelected =
    selectedStarIndexClick !== null && index <= selectedStarIndexClick;
  const isHover =
    selectedStarIndexHover !== null && index <= selectedStarIndexHover;

  return (
    <div
      className="cursor-pointer"
      onClick={() => handleSelectionClick(index)}
      onMouseEnter={() => handleSelectionHover(index)}
      onMouseLeave={() => handleSelectionHover(null)}
    >
      <FaStar
        className={
          isHover
            ? "text-yellow-500 transition ease-out hover:scale-125"
            : isSelected
              ? "scale-125 text-yellow-500"
              : "text-gray-500"
        }
      />
    </div>
  );
}
