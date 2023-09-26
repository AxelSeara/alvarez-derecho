import React, { useState } from 'react';
import Image from 'next/image'; // Importa el componente Image de Next.js

const Hero = () => {
  const [opacity, setOpacity] = useState(1);

  const handleClick = () => {
    setOpacity(0.7);
    setTimeout(() => {
      setOpacity(1);
      const contactoDiv = document.getElementById('contacto');
      if (contactoDiv) {
        const elementRect = contactoDiv.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
        window.scrollTo({ top: middle, behavior: 'smooth' });
      }
    }, 90);
  };

  return (
    <div className='text-black mx-2' id='principal'>
      <div className='flex flex-col md:flex-row md:space-x-4 max-w-[1000px] mt-[120px] mx-auto text-center justify-center'>
        <div className='md:w-2/3'>
          <h2 className='text-[#ffbf00] md:text-6xl sm:text-5xl text-4xl font-sans font-bold my-10'>
            Luchamos por una justa indemnización en tus casos legales
          </h2>
          <p className='font-bold my-4'>
            Expertos en accidentes de tráfico y litigios, comprometidos a lograr los mejores resultados para ti
          </p>
          <div className='flex justify-center md:col-2 col-1 m-2 items-center'>
          <button
  onClick={handleClick}
  style={{ opacity }}
  className="bg-[#ffbf00] w-[200px] rounded-md font-medium my-2 py-3 text-white transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] shadow-[0_4px_9px_-4px_#3b71ca] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
>
  Consultanso ya
</button>

            <p className="text-left p-2">Te respaldamos en cada paso</p>
          </div>
        </div>
        <div className='md:w-1/3'>
        <Image src='/assets/hero.png' alt='Hero Image' width={500} height={300} layout='intrinsic' className='mx-auto md:mx-0' />
        </div>
      </div>
    </div>
  );
}

export default Hero;
