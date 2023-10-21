import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Images/logo.svg";
import searchIcon from "../assets/Icons/search.svg";
import clearIcon from "../assets/Icons/clear.svg";
import bars3Icon from "../assets/Icons/bars3.svg";
import logoIcon from "../assets/Images/logoIcon.svg";

const navigation = [
  { name: "Psicólogos", to: "/psicologos" },
  { name: "Servicios", to: "/servicios" },
  { name: "Registrarme", to: "/registro" },
];

const Header = function () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="border-2 border-[#e9e9e9]">
      <nav
        className="flex items-center justify-between p-4 md:px-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="ml-4">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <img src={bars3Icon} alt="" />
          </button>
        </div>
        <div className="hidden lg:flex justify-center items-center lg:gap-6 lg:flex-1 lg:justify-end">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className="text-base text-black font-medium"
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink to="/" className="">
            <img src={searchIcon} alt="" />
          </NavLink>
          <NavLink
            to="/login"
            className="text-white text-base font-medium text-center bg-Gray-dark py-4 px-6 rounded-[32px] w-[214px] hover:bg-[#4f4f4f]"
          >
            Iniciar sesión
          </NavLink>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <img className="" src={logoIcon} alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <img src={clearIcon} alt="" />{" "}
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="py-6 gap-4 flex flex-col items-start">
                <NavLink to="/" className="">
                  <img src={searchIcon} alt="" />
                </NavLink>
                <NavLink
                  to="/login"
                  className="text-white text-base font-medium text-center bg-Gray-dark py-4 px-6 rounded-[32px] w-[214px] hover:bg-[#4f4f4f]"
                >
                  Iniciar sesión
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
