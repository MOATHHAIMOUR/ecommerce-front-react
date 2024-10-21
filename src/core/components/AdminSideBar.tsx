import { useEffect, useRef, useState } from "react";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { useMediaQuery } from "react-responsive";

export default function AdminSideBar() {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 1279 });

  return (
    <>
      {isDesktop && (
        <div>
          <AdminSideBarDesktop>
            <NavBarContent />
          </AdminSideBarDesktop>
        </div>
      )}
      {isMobile && (
        <div>
          <AdminSideBarMobile>
            <NavBarContent />
          </AdminSideBarMobile>
        </div>
      )}
    </>
  );
}

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const AdminSideBarDesktop = ({ children }: Props) => {
  return (
    <div className="sticky top-0 h-screen w-64 bg-gray-800 p-4 text-white">
      {children}
    </div>
  );
};

function AdminSideBarMobile({ children }: Props) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {
        <div className="sticky top-0 z-50 h-screen">
          <div
            className={`absolute top-0 z-40 h-screen transition-all duration-500 ease-out ${isMenuOpen ? "w-[300px]" : "w-0"} bg-[#1F2937]`}
          >
            {isMenuOpen && children}
          </div>
        </div>
      }
      <BiSolidRightArrowCircle
        onClick={() => setMenuOpen((c) => !c)}
        className={`absolute ${isMenuOpen ? "left-[310px] top-[10px] rotate-180" : "left-[20px] top-[10px]"} z-30 cursor-pointer text-[35px] text-[#1F2937] transition-all duration-500 ease-out`}
      />
    </>
  );
}

function NavBarContent() {
  const [isMenuOpened, setMenuOpened] = useState(true);
  const [isSubMenuOpened, setSubMenuOpened] = useState(false);

  const Menus = [
    { title: "Dashboard" },
    { title: "Pages" },
    { title: "Media", spacing: true },
    {
      title: "Projects",
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },
    { title: "Analytics" },
    { title: "Inbox" },
    { title: "Profile", spacing: true },
    { title: "Setting" },
    { title: "Logout" },
  ];

  const [height, setHeight] = useState(0);
  const ulRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (ulRef.current && isSubMenuOpened && isMenuOpened) {
      setHeight(ulRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isSubMenuOpened, isMenuOpened]);

  return (
    <>
      {/* start profile  */}
      <div className="flex items-center gap-4 p-3">
        <div className="h-12 w-12 flex-shrink-0">
          <img
            className="h-full w-full rounded-full bg-contain"
            src="/src/assets/images/profile.jpg"
          />
        </div>
        <div className={`${isMenuOpened ? "block" : "hidden"} flex-shrink-0`}>
          <p className="font-semibold text-white">Moath haimour</p>
          <p className="text-[#A8ADB5]">Sales Manager</p>
        </div>
      </div>
      {/* End profile  */}
      {/* start nav links */}
      <ul className="scrollbar-none h-[90%] overflow-y-auto pt-8">
        {Menus.map((menu) => (
          <>
            <li
              className={`my-3 flex ${!isMenuOpened && "w-fit"} items-center gap-5 rounded-lg px-3 py-[10px] text-white hover:bg-slate-500`}
            >
              <span>
                <LuLayoutDashboard className="text-[30px]" />
              </span>
              {isMenuOpened && <span className="flex-1"> {menu.title}</span>}
              {menu.submenu && isMenuOpened && (
                <IoMdArrowDropdown
                  onClick={() => setSubMenuOpened((cur) => !cur)}
                  className={`cursor-pointer text-[20px] ${isSubMenuOpened && "rotate-180"} transition-transform duration-300`}
                />
              )}
            </li>

            {menu.submenu && (
              <ul
                ref={ulRef}
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out`}
                style={{
                  maxHeight:
                    isMenuOpened && isSubMenuOpened ? `${height}px` : "0px",
                }}
              >
                {menu.submenuItems.map((sub, subIndex) => (
                  <li
                    key={subIndex}
                    className="flex items-center rounded-lg px-6 py-2 text-[14px] text-white hover:bg-slate-500"
                  >
                    {sub.title}
                  </li>
                ))}
              </ul>
            )}
          </>
        ))}
      </ul>
    </>
  );
}
