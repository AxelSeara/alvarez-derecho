import React from 'react';
import Road from '../assets/road.jpg';

const Specialist = () => {
  return (
    <div className='w-full py-10 px-4' id='asesoramiento'>
      <div className='max-w-[1280px] mx-auto grid md:grid-cols-2'>
      <img className="w-[400px] mx-auto my-4 rounded-md shadow-sm" src={Road} alt="/" />
      <div className='flex flex-col justify-center'>
        <h1 className="text-[#ffbf00] font-bold md:text-4xl sm:text-3xl text-2xl py-2">
        Necesitas asesoramiento, contáctenos.
        </h1>
            <p className='text-black'>Somos una firma legal que:</p>
              <ul className='list-disc pl-5 text-black'>
                <li>Destacamos por nuestra profesionalidad, adoptando un enfoque serio y ético en cada caso que manejamos.</li>
                <li>Nos esforzamos por mantener altos estándares de calidad y éxito en todos nuestros esfuerzos legales.</li>
                <li>Poseemos un profundo conocimiento en nuestras áreas de especialización.</li>
                <li>Nos mantenemos constantemente actualizados en cuanto a regulaciones y leyes.</li>
                <li>Contamos con habilidades analíticas y estratégicas excepcionales que nos permiten llevar a cabo nuestro trabajo de manera efectiva.</li>
              </ul>
            <p className='text-black'>Confía en nosotros para obtener los resultados que necesitas.</p>

      </div>
    </div>
    </div>
  );
};

export default Specialist;
