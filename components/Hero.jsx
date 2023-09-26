import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [opacity, setOpacity] = useState(1);
  const [textoAnimado, setTextoAnimado] = useState('');
  const texto = "  Te respaldamos en cada paso.";

  useEffect(() => {
    let indice = 0;
    const intervalId = setInterval(() => {
      setTextoAnimado((prev) => prev + texto.charAt(indice));
      indice++;
      if (indice === texto.length) {
        clearInterval(intervalId);
      }
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  const handleClick = () => {
    setOpacity(0.7);
    setTimeout(() => {
      setOpacity(1);
      const contactoDiv = document.getElementById('contacto');
      if (contactoDiv) {
        const elementRect = contactoDiv.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.scrollY;
        const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
        window.scrollTo({ top: middle, behavior: 'smooth' });
      }
    }, 90);
  };

  return (
    <div className='text-black mx-2' id='principal'>
    <div className='flex flex-col md:flex-row md:space-x-4 max-w-[1000px] mt-[10vh] md:mt-[120px] mx-auto text-center justify-center'>
      <div className='md:w-2/3'>
        <h2 className='text-[#ffbf00] md:text-6xl sm:text-5xl text-4xl font-sans font-bold my-10'>
          Luchamos por una justa indemnización en tus casos legales
        </h2>
        <p className='font-bold my-4'>
          Expertos en accidentes de tráfico y litigios, comprometidos a lograr los mejores resultados para ti
        </p>
          <div className='flex justify-center md:col-2 col-1 m-2 items-center'>
            <div>
              <button
                onClick={handleClick}
                style={{ opacity }}
                className="bg-[#ffbf00] w-[200px] rounded-md font-medium my-2 py-3 text-white transition duration-150 ease-in-out hover:shadow-lg focus:outline-none active:shadow"
              >
                Consultanos ya
              </button>
            </div>
            <div className="text-left p-2" id="animated-text">{textoAnimado}</div>
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
