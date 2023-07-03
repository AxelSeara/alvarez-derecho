import React from 'react';
import Road from '../assets/road.jpg';

const Specialist = () => {
  return (
    <div className='w-full py-10 px-4' id='asesoramiento'>
      <div className='max-w-[1280px] mx-auto grid md:grid-cols-2'>
      <img className="w-[400px] mx-auto my-4 rounded-md shadow-sm" src={Road} alt="/" />
      <div className='flex flex-col justify-center'>
        <h1 className="text-[#ffbf00] font-bold md:text-4xl sm:text-3xl text-2xl py-2">
          Nuestro Compromiso Legal: Ética, Experiencia, Resultados
        </h1>
            <p className='text-black'>Somos una firma legal que:</p>
              <ul className='list-disc pl-5 text-black'>
                <li>Se compromete con la ética en cada acción y decisión</li>
                <li>Está respaldada por una amplia experiencia y un historial de casos exitosos</li>
                <li>Se enfoca en soluciones personalizadas para cada caso, garantizando que tus necesidades específicas se cumplan</li>
                <li>Brinda asesoramiento claro y efectivo, asegurando que entiendas cada paso del proceso legal</li>
                <li>Te representa con integridad, luchando por tus derechos y por una compensación justa</li>
              </ul>
            <p className='text-black'>Confía en nosotros para obtener los resultados que necesitas.</p>

      </div>
    </div>
    </div>
  );
};

export default Specialist;
