import OrderHeader from "../components/OrderHeader";
import OrderNavBar from "../components/OrderNavBar";
import OrdersTable from "../components/OrdersTable";
import SearchBar from "../components/SearchBar";

export default function OrderManagements() {
  return (
    <div className="mx-auto mt-10 max-w-[70%]">
      <OrderHeader />
      <OrderNavBar />
      <div className="mt-1 h-[.1px] w-full bg-slate-600"></div>
      <SearchBar />
      <OrdersTable />
    </div>
  );
}
