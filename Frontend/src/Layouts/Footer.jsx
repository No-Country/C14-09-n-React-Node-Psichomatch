const Footer = function () {
  return (
    <footer className="bg-[#383838] text-white p-10 text-xs row-start-3 row-end-4 col-start-1 col-end-6">
      <div className="flex justify-center items-top gap-36">
        <div>
          <h3 className="font-semibold">Contacto</h3>
          <p className="mt-2">Email: contacto@psycomatch.com</p>
        </div>
        <div>
          <h3 className="font-semibold">Pacientes</h3>
          <p className="mt-2">Especialistas</p>
          <p>Clinicas</p>
          <p>Preguntas Frecuentes</p>
        </div>
        <div>
          <h3 className="font-semibold">Profesionales</h3>
          <p className="mt-2">Planes y precios</p>
          <p>Para especialistas</p>
          <p>Recursos</p>
        </div>
        <div>
          <h3 className="font-semibold">Cuenta</h3>
          <p className="mt-2">Tu Usuario</p>
        </div>
        <div>
          <h3 className="font-semibold">Políticas y Soporte</h3>
          <p className="mt-2">Términos y Condiciones</p>
          <p>Política de privacidad</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
