import { useState } from "react";
import { Dialog } from "@headlessui/react";
//import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/Images/logo.svg";
import searchIcon from "../assets/Images/search.svg";
import calendarIcon from "../assets/Images/calendar.svg";
import clearIcon from "../assets/Images/clear.svg";
import bars3Icon from "../assets/Images/bars3.svg";
import userIcon from "../assets/Images/user.svg";

const navigation = [
  { name: "Encuentra psicólogos", href: "#" },
  { name: "Servicios", href: "#" },
  { name: "Preguntas frecuentes", href: "#" },
];

const Header = function () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className=" inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <img src={bars3Icon} alt="" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="">
            <img src={searchIcon} alt="" />
          </a>
          <a href="#" className="">
            <img src={calendarIcon} alt="" />
          </a>
          <a href="#" className="">
            <img src={userIcon} alt="" />
          </a>
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
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={logo} alt="" />
            </a>
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
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a href="#" className="">
                  <img src={searchIcon} alt="" />
                </a>
                <a href="#" className="">
                  <img src={calendarIcon} alt="" />
                </a>
                <a href="#" className="">
                  <img src={userIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
