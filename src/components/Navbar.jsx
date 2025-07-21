import { useState, useEffect } from "react";
import { IoClose, IoHomeSharp, IoSettingsSharp } from "react-icons/io5";
import { CgProfile, CgWebsite } from "react-icons/cg";
import { FaSearch, FaUserFriends } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaHand, FaHouseChimney, FaRegEnvelope } from "react-icons/fa6";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { GrMoney } from "react-icons/gr";
import { GoSignOut, GoVideo } from "react-icons/go";
// import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-green-950">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        <div className="flex items-center justify-start gap-8">
          <div className="flex items-center gap-2">
            <IoMenu
              onClick={() => setShowMobileMenu(true)}
              className="lg:hidden cursor-pointer text-white text-2xl"
            />
            <h3 className="text-green-300 font-bold text-3xl cursor-pointer">
              Orgyworld
            </h3>
          </div>
          {/* DESKTOP VIEW */}
          <div className="hidden lg:flex gap-7 items-center justify-start">
            <Link className="font-semibold cursor-pointer text-white hover:text-gray-400 text-lg">
              Home
            </Link>

            <Link
              to={"/"}
              className="font-semibold cursor-pointer text-white hover:text-gray-400 text-lg"
            >
              Orgyworld
            </Link>

            <Link
              to={"/houses"}
              className="font-semibold cursor-pointer text-white hover:text-gray-400 text-lg"
            >
              Houses
            </Link>

            <Link
              to={"/category"}
              className="font-semibold cursor-pointer text-white hover:text-gray-400 text-lg"
            >
              Category
            </Link>
          </div>
        </div>
        {/* END OF DESKTOP VIEW */}
        <div className="flex items-center gap-3">
          <Link to={"/search-page"}>
            <FaSearch className=" cursor-pointer text-white text-xl" />
          </Link>
          <FaRegEnvelope className=" cursor-pointer text-white text-2xl" />

          <div className="cursor-pointer">
            <Menu>
              <MenuButton className="inline-flex items-center gap-2 rounded-md px-1 py-1.5 text-sm/6 font-semibold text-white  focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-700 data-open:bg-gray-700 cursor-pointer">
                <CgProfile className=" cursor-pointer text-white text-2xl" />
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="w-52 origin-top-right pt-3 rounded-xl border border-white/5 bg-green-900 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
              >
                <Link to={"/profile"}>
                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10 cursor-pointer">
                      <CgProfile className="mr-2 text-xl" />
                      Profile
                    </button>
                  </MenuItem>
                </Link>
                <div className="my-1 h-px bg-white/5" />
                <Link to={"/houses"}>
                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 rounded-lg cursor-pointer px-3 py-1.5 data-focus:bg-white/10">
                      <FaHouseChimney className="mr-2 text-xl" />
                      Houses
                    </button>
                  </MenuItem>
                </Link>
                <div className="my-1 h-px bg-white/5" />
                <Link to={"/"}>
                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 cursor-pointer rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                      <FaUserFriends className="mr-2 text-xl" /> Send Friend
                      Request
                    </button>
                  </MenuItem>
                </Link>
                <div className="my-1 h-px bg-white/5" />
                <Link to={"/profile"}>
                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 cursor-pointer rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                      <GoVideo className="mr-2 text-xl" />
                      Naughty Videos
                    </button>
                  </MenuItem>
                </Link>
                <div className="my-1 h-px bg-white/5" />
                <Link to={"/menu"}>
                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 cursor-pointer rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                      <IoSettingsSharp className="mr-2 text-xl" />
                      Account Settings
                    </button>
                  </MenuItem>
                </Link>
                <div className="my-1 h-px bg-white/5" />
                <Link to={"/"}>
                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 cursor-pointer rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                      <GrMoney className="mr-2 text-xl" />
                      Billing and Payments
                    </button>
                  </MenuItem>
                </Link>
                <div className="my-1 h-px bg-white/5" />
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                    <FaHand className="mr-2 text-xl" />
                    Block
                  </button>
                </MenuItem>
                <div className="my-1 h-px bg-white/5" />
                <Link to={"/sign"}>
                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 cursor-pointer rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                      <GoSignOut className="mr-2 text-xl" />
                      Sign Out
                    </button>
                  </MenuItem>
                </Link>
                <div className="my-1 h-px bg-white/5" />
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
      {/* MOBILE VIEW */}
      <div
        className={`lg:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-gray-900 transition-all`}
      >
        <div className="flex justify-start p-6 cursor-pointer flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-green-300 font-bold text-3xl cursor-pointer">
              Orgyworld
            </h3>
            <IoClose
              onClick={() => setShowMobileMenu(false)}
              className="text-4xl text-white"
            />
          </div>
          <div className="flex flex-col items-start gap-5 mt-8 py-1 text-xl font-medium">
            <Link
              onClick={() => setShowMobileMenu(false)}
              className="font-semibold cursor-pointer text-white hover:text-gray-400 capitalize py-3 border-b w-full"
            >
              Home
            </Link>

            <Link
              onClick={() => setShowMobileMenu(false)}
              to={"/"}
              className="font-semibold cursor-pointer text-white hover:text-gray-400 capitalize py-3 border-b w-full"
            >
              Orgyworld
            </Link>

            <Link
              onClick={() => setShowMobileMenu(false)}
              to={"/houses"}
              className="font-semibold cursor-pointer text-white hover:text-gray-400 capitalize py-3 border-b w-full"
            >
              Houses
            </Link>

            <Link
              onClick={() => setShowMobileMenu(false)}
              to={"/category"}
              className="font-semibold cursor-pointer text-white hover:text-gray-400 capitalize py-3 border-b w-full"
            >
              Category
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
