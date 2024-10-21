import { PiDotsThreeBold } from "react-icons/pi";
import Container from "src/core/components/container";

export default function EditProduct() {
  return (
    <div className="mx-auto mt-10 max-w-[70%]">
      {/* start description */}
      <div className="flex flex-col gap-5 sm:flex-col md:flex-col md:justify-center lg:flex-row lg:items-start">
        <div className="">
          <p className="text-3xl font-semibold">Edit Product</p>
          <p className="text-[#9BA2AB]">
            The most important feature in the product editing section is the
            product adding part. When adding products here, do not ignore to
            fill in all the required fields completely and follow the product
            adding rules.
          </p>
        </div>
        <div className="flex gap-5">
          <button className="h-9 w-52 rounded border border-solid border-[#436696] text-[15px] text-[#436696] transition hover:scale-110">
            Open Documentation
          </button>

          <button className="h-9 w-28 rounded border border-solid border-[#436696] text-[15px] text-[#436696] transition hover:scale-110">
            Setup Details
          </button>
          <button className="flex h-9 w-16 items-center justify-center rounded border border-solid border-[#436696] text-[15px] text-[#436696] transition hover:scale-110">
            <PiDotsThreeBold />
          </button>
        </div>
      </div>
    </div>
  );
}
