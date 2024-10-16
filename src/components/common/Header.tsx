import HeaderCart from "@components/ecommerce/HeaderCart";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="flex flex-col gap-5">
        {/* Logo and cart */}
        <div className="flex justify-between items-center">
          <Logo />
          <HeaderCart />
        </div>
        {/* End Logo */}

        {/* Start nav links */}
        <nav
          className={`flex bg-[#25292F] p-3 rounded-md text-white justify-between`}
        >
          <ul className="flex justify-start gap-12 flex-grow-[3] ">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `text-white border-b-2 transition-all duration-300 ${
                    isActive
                      ? "border-white pb-1"
                      : "border-transparent hover:border-white hover:pb-1"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `text-white border-b-2 transition-all duration-300 ${
                    isActive
                      ? "border-white pb-1"
                      : "border-transparent hover:border-white hover:pb-1"
                  }`
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  `text-white border-b-2 transition-all duration-300 ${
                    isActive
                      ? "border-white pb-1"
                      : "border-transparent hover:border-white hover:pb-1"
                  }`
                }
              >
                categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `text-white border-b-2 transition-all duration-300 ${
                    isActive
                      ? "border-white pb-1"
                      : "border-transparent hover:border-white hover:pb-1"
                  }`
                }
              >
                About-us
              </NavLink>
            </li>
          </ul>
          <ul className="flex flex-grow-[1] mr-2 justify-end gap-8 ">
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-white border-b-2 transition-all duration-300 ${
                    isActive
                      ? "border-white pb-1"
                      : "border-transparent hover:border-white hover:pb-1"
                  }`
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `text-white border-b-2 transition-all duration-300 ${
                    isActive
                      ? "border-white pb-1"
                      : "border-transparent hover:border-white hover:pb-1"
                  }`
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* End nav Links */}
      </header>
    </div>
  );
}
