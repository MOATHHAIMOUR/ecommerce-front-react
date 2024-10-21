import AdminSideBar from "src/core/components/AdminSideBar";
import OrderManagements from "src/features/order/pages/OrderManagements";

export default function AdminLayout() {
  return (
    <div className="flex">
      <AdminSideBar />
      <OrderManagements />
    </div>
  );
}
