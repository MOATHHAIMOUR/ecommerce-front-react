import { FaHeart } from "react-icons/fa";
import RateComponent from "src/core/components/RateComponent";

export default function ProductList() {
  return (
    <div>
      <div className="mt-8 flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold text-[#1B5A7D]">Popular products</p>
        </div>
        <div className="flex space-x-4">
          <button className="rounded-full border-2 border-blue-400 px-4 py-2 text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Cameras
          </button>
          <button className="rounded-full border-2 border-gray-300 px-4 py-2 text-gray-500 hover:border-blue-400 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Laptops
          </button>
          <button className="rounded-full border-2 border-gray-300 px-4 py-2 text-gray-500 hover:border-blue-400 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Tablets
          </button>
          <button className="rounded-full border-2 border-gray-300 px-4 py-2 text-gray-500 hover:border-blue-400 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Mouse
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}

function ProductItem() {
  return (
    <div className="mt-8 w-fit rounded-lg border border-solid border-[#1B5A7D] p-3 transition ease-out hover:scale-110">
      <div className="relative h-48 w-[220px]">
        <img
          className="h-full w-full object-contain"
          src="/src/assets/images/headphones.png"
          alt="Wireless headphones"
        />
        <div className="absolute right-[0px] top-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#1B5A7D]">
          <FaHeart size={"15px"} color="#FFFF" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-[#1B5A7D]">Wireless headphones</p>
        <p>11,70 $</p>
        <RateComponent size={10} numberOfStars={5} />
      </div>
    </div>
  );
}
