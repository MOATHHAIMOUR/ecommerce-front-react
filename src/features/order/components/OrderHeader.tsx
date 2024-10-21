import { PiDotsThreeBold } from "react-icons/pi";

export default function OrderHeader() {
  return (
    <div className="flex flex-col gap-5 sm:flex-col md:flex-col md:justify-center lg:flex-row lg:items-start">
      <div className="">
        <p className="mb-4 text-3xl font-semibold">Order Details</p>
        <p className="text-[#9BA2AB]">
          In the order details section, you can review and manage all orders
          with their details. You can view and edit many information such as IDs
          of all orders, ordered product, order date, price and order status.
          Access to this area is limited. Only administrators and team leaders
          can reach. The changes you make will be approved after they are
          checked.
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
  );
}
