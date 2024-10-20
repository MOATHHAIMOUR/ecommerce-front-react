import Logo from "./Logo";
import CustomLink from "./CustomLink";
import UserSvg from "@assets/svg/UserSvg";
import HeartSvg from "@assets/svg/heartSvg";
import CartSvg from "@assets/svg/cartSvg";
import Container from "./container";

export default function MiddleBar() {
  return (
    <div className="w-full bg-[#003F62]">
      <Container>
        <div className="flex h-[60px] w-full items-center justify-between">
          <ul className="flex items-center gap-5">
            <Logo />
            <SearchBar />
          </ul>
          <ul className="flex items-center gap-14">
            <CustomLink
              to="/signIn"
              title="Sign in"
              svg={<UserSvg color="#FFFFFF" />}
              textColor="#FFFFFF"
            />
            <div className="relative">
              <CustomLink
                to="/wishlist"
                title="wishlist"
                textColor="#FFFFFF"
                svg={<HeartSvg color="#FFFFFF" height="25px" width="25px" />}
              />
              <div className="absolute right-[-25px] top-[-10px] flex h-5 w-5 items-center justify-center rounded-full bg-[#EDA415] p-2 text-white">
                0
              </div>
            </div>

            <div className="relative">
              <CustomLink
                to="/wishlist"
                title="Cart"
                textColor="#FFFFFF"
                svg={<CartSvg color="#FFFFFF" height="25px" width="25px" />}
              />
              <div className="absolute right-[-25px] top-[-10px] flex h-5 w-5 items-center justify-center rounded-full bg-[#EDA415] p-2 text-white">
                0
              </div>
            </div>
          </ul>
        </div>
      </Container>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="relative">
      <div className="absolute bottom-0 right-0 top-0 w-[100px] cursor-pointer rounded-xl bg-[#EDA415] py-1 text-center text-white">
        search
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="w-80 rounded-xl border border-gray-300 py-1 pl-2 pr-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
