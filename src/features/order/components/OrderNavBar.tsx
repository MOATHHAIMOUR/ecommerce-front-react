export default function OrderNavBar() {
  return (
    <ul className="mt-8 flex gap-8 font-medium text-slate-600 transition">
      <li className="cursor-pointer duration-300 ease-out hover:scale-110 hover:text-[#032166]">
        All Orders
      </li>
      <li className="cursor-pointer duration-300 ease-out hover:scale-110 hover:text-[#032166]">
        Completed
      </li>
      <li className="cursor-pointer duration-300 ease-out hover:scale-110 hover:text-[#032166]">
        Continuing
      </li>
      <li className="cursor-pointer duration-300 ease-out hover:scale-110 hover:text-[#032166]">
        Cancelled
      </li>
      <li className="cursor-pointer duration-300 ease-out hover:scale-110 hover:text-[#032166]">
        returns
      </li>
    </ul>
  );
}
