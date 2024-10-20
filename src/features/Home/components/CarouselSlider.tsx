import LeftArrowSvg from "@assets/svg/LeftArrowSvg";
import RightArrowSvg from "@assets/svg/RightArrowSvg";
import { useEffect, useState } from "react";

type slice = { imagePath: string; title: string; price: number }[];
const Slices: slice = [
  { imagePath: "/src/assets/images/camera.png", title: "Camera", price: 299 },
  {
    imagePath: "/src/assets/images/xbox1.jpg",
    title: "Xbox Controller",
    price: 499,
  },
  { imagePath: "/src/assets/images/camera.png", title: "Camera", price: 299 },
  { imagePath: "/src/assets/images/xbox1.jpg", title: "Xbox", price: 499 },
];

export default function CarouselSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  function HandleNextStep() {
    setCurrentSlideIndex((cur) => (cur === Slices.length - 1 ? 0 : cur + 1));
  }

  function HandlePrevStepStep() {
    setCurrentSlideIndex((cur) => (cur === 0 ? Slices.length - 1 : cur - 1));
  }

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlideIndex((cur) => (cur === Slices.length - 1 ? 0 : cur + 1));
    }, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto flex w-[90%] overflow-hidden">
      {Slices.map((slice) => (
        // begin slice
        <div
          className="z-10 mt-8 flex w-full flex-shrink-0 items-center justify-between transition duration-1000"
          style={{
            transform: `translateX(-${currentSlideIndex * 100}%)`,
          }}
        >
          <div className="mx-auto flex w-[80%] items-center justify-between">
            {/* slice info text */}
            <div className="flex flex-col gap-20">
              <p className="text-4xl text-[#1B5A7D]">{slice.title}</p>
              <div className="flex gap-8">
                <button className="transform rounded-full bg-[#EDA415] px-4 py-2 text-white transition ease-out hover:scale-125">
                  Buy Now
                </button>
                <button className="transform rounded-full border border-solid border-[#1B5A7D] px-4 py-2 text-[#1B5A7D] transition ease-out hover:scale-125">
                  View More
                </button>
              </div>
            </div>
            {/* slice info image */}
            <div className="h-[300px] w-[300px]">
              <img className="h-full w-full bg-contain" src={slice.imagePath} />
            </div>
          </div>
        </div>
        //
      ))}
      <div className="absolute bottom-0 left-[10px] right-[10px] top-0 flex items-center justify-between">
        <button
          onClick={HandlePrevStepStep}
          className="z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 p-2 transition ease-out hover:scale-125"
        >
          <LeftArrowSvg />
        </button>
        <button
          onClick={HandleNextStep}
          className="z-[20] flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 p-2 transition ease-out hover:scale-125"
        >
          <RightArrowSvg />
        </button>
      </div>
    </div>
  );
}
