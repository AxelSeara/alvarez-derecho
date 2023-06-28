import React from 'react';
import Road from '../assets/road.jpg';

const Specialist = () => {
  return (
    <div className='w-full py-10 px-4' id='servicios'>
      <div className='max-w-[1280px] mx-auto grid md:grid-cols-2'>
      <img className="w-[400px] mx-auto my-4 rounded-md shadow-sm" src={Road} alt="/" />
      <div className='flex flex-col justify-center'>
        <h1 className="text-[#ffbf00] font-bold md:text-4xl sm:text-3xl text-2xl py-2">
          Nuestro Compromiso Legal: Ética, Experiencia, Resultados
        </h1>
        <p className='text-black'>
          Somos una firma legal comprometida con la ética, respaldada por una amplia experiencia y un historial exitoso. Nos enfocamos en soluciones personalizadas para cada caso, brindando asesoramiento claro y efectivo. Confía en nosotros para representarte con integridad y obtener los resultados que necesitas.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Specialist;
