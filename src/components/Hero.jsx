import React, { useState } from 'react';

const Hero = () => {
  const [opacity, setOpacity] = useState(1);

  const handleClick = () => {
    setOpacity(0.7);
    setTimeout(() => {
      setOpacity(1);
    }, 90);
  };
  return (
    <div className='text-black' id='principal'>
      <div className='max-w-[800px]  mt-[-200px] w-auto h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#ffbf00] font-bold'>Expertos en accidentes de tráfico y reclamaciones legales.</p>
        <h2 className='md:text-6xl sm:text-5xl text-4xl font-sans font-bold my-2'>Compensación justa para tus reclamaciones.</h2>
        <p className='font-serif italic my-2'>Protege tus derechos y brinda tranquilidad en momentos de urgencia.</p>
        <div className='flex justify-center'>
          <button
            className='bg-[#ffbf00] w-[200px] rounded-md font-medium my-2 py-3 text-white'
            onClick={handleClick}
            style={{ opacity }}
          >
            Contactanos
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
