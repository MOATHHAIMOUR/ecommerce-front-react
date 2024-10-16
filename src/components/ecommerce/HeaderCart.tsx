import Cart from "@assets/svg/cart.svg?react";

function HeaderCart() {
  return (
    <div className="relative cursor-pointer">
      <div className="mr-2">
        <Cart />
      </div>
      <div className="text-white absolute w-6 h-6 top-[-10px] right-[-10px] flex  justify-center items-center rounded-full bg-blue-400">
        <p>1</p>
      </div>
    </div>
  );
}

export default HeaderCart;
