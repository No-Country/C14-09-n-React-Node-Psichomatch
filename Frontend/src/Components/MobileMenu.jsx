import { NavLink, Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import logoIcon from "../assets/Images/logoIcon.svg";
import clearIcon from "../assets/Icons/clear.svg";

function MobileMenu({
  jwt,
  mobileMenuOpen,
  setMobileMenuOpen,
  handleAccountExit,
}) {
  return (
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
            <img src={clearIcon} alt="" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <NavLink
                to="/servicios"
                className="-mx-3 block rounded-lg px-3 py-2 hover:font-bold text-base font-semibold leading-7 text-black hover:bg-gray-50"
              >
                Servicios
              </NavLink>
              {jwt.token !== undefined ? (
                <>
                  <NavLink
                    to="/psicologos"
                    className="-mx-3 block rounded-lg px-3 py-2 hover:font-bold text-base font-semibold leading-7 text-black hover:bg-gray-50"
                  >
                    Psicólogos
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="/registro"
                    className="-mx-3 block rounded-lg px-3 py-2 hover:font-bold text-base font-semibold leading-7 text-black hover:bg-gray-50"
                  >
                    Registarme
                  </NavLink>
                </>
              )}
            </div>
            <div className="py-6 gap-4 flex flex-col items-start">
              {jwt.token !== undefined ? (
                <>
                  <button
                    onClick={handleAccountExit}
                    className="text-white text-base font-medium text-center bg-Gray-dark py-4 px-6 rounded-[32px] w-[214px] hover:bg-[#4f4f4f]"
                  >
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="text-white text-base font-medium text-center bg-Gray-dark py-4 px-6 rounded-[32px] w-[214px] hover:bg-[#4f4f4f]"
                  >
                    Iniciar sesión
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

export default MobileMenu;
