import { NavLink } from "react-router-dom";

function DesktopMenu({ jwt, handleAccountExit }) {
  return (
    <>
      <NavLink
        to="/servicios"
        className="text-base text-black font-medium hover:text-[#A9A9A9]"
      >
        Servicios
      </NavLink>
      {jwt.token !== undefined ? (
        <>
          <NavLink
            to="/psicologos"
            className="text-base text-black font-medium hover:text-[#A9A9A9]"
          >
            Psicólogos
          </NavLink>
          <button
            className="text-white text-base font-medium text-center bg-Gray-dark py-4 px-6 rounded-[32px] w-[214px] hover:bg-[#4f4f4f]"
            onClick={handleAccountExit}
          >
            Cerrar Sesion
          </button>
        </>
      ) : (
        <>
          <NavLink
            to="/registro"
            className="text-base text-black font-medium hover:text-[#A9A9A9]"
          >
            Registarme
          </NavLink>
          <NavLink
            to="/login"
            className="text-white text-base font-medium text-center bg-Gray-dark py-4 px-6 rounded-[32px] w-[214px] hover:bg-[#4f4f4f]"
          >
            Iniciar sesión
          </NavLink>
        </>
      )}
    </>
  );
}

export default DesktopMenu;
