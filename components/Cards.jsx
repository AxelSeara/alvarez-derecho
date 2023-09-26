function Cards() {
  return (
<div className="w-full py-20 px-4" style={{ background: 'linear-gradient(to bottom, #ffbf00, #ffffff)' }} id='servicios'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className=' bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className="w-20 mx-auto mt-[-3rem] bg-whitesmoke" src="/assets/law.png" alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Daños en el hogar, disputas con transportistas, inconvenientes bancarios.</h2>
          <p className='text-center text-4xl font-bold'>Reclamamos tu indemnización</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Información: todos los informes médicos, fotografías, testigos, facturas o
cualquier otro documento que demuestre daños y perjuicios sufridos</p>
            <p className='py-2 border-b mx-8'>Seguimiento: Te vamos informando de todos los pasos que tiene el proceso y
resolveremos cualquier duda que vaya surgiendo</p>
            <p className='py-2 mx-8'>Negociación: solicitaremos la debida indemnización por las consecuencias
sufridas y en caso negativo llevamos el caso a los tribunales.</p>
          </div>
        </div>

        <div className='bg-white w-full shadow-xl flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className="w-20 mx-auto mt-[-3rem] bg-whitesmoke" src="/assets/car.png" alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Accidentes de coche, moto, camión, barco. Accidentes en vía pública, transporte
público.</h2>
          <p className='text-center text-4xl font-bold'>Accidentes de <br />tráfico</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Evidencia: reúne toda la evidencia relevante que respalde tu reclamación, toda la
documentación que demuestre los hechos</p>
            <p className='py-2 border-b mx-8'>Proceso: nuestra experiencia nos abala, te proporcionaremos una orientación
especifica en todo momento</p>
            <p className='py-2 mx-8'>Demanda: en caso de que la negociación con la parte involucrada no fuera fructífera
tu caso avanzaría a través del sistema legal</p>
          </div>
        </div>

        <div className=' bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className="w-20 mx-auto mt-[-4rem] bg-whitesmoke" src="/assets/work.png" alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Un libro escrito por un autor, un medicamento nuevo, el logotipo de Nike</h2>
          <p className='text-center text-4xl font-bold'>Propiedad Intelectual</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Derechos de autor: protegemos obras literarias y artísticas que otorgan al autor
el control exclusivo sobre la reproducción, distribución y comunicación pública
de su obra</p>
            <p className='py-2 border-b mx-8'>Patentes: Protegemos las invenciones y nuevos desarrollos tecnológicos,
otorgando al titular el derecho exclusivo durante un periodo de tiempo
determinado</p>
            <p className='py-2 mx-8'>Marcas registradas: Protegemos los signos distintivos de productos o servicios
de una empresa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
