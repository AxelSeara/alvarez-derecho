import React, { useState } from 'react';

const Hero = () => {
  const [opacity, setOpacity] = useState(1);

  const handleClick = () => {
    setOpacity(0.7);
    setTimeout(() => {
      setOpacity(1);
      const contactoDiv = document.getElementById('contacto');
      if (contactoDiv) {
        contactoDiv.scrollIntoView({ behavior: 'smooth' });
      }
    }, 90);
  };

  return (
    <div className='text-black m-2' id='principal'>
      <div className='max-w-[800px]  mt-[-0px] w-auto h-screen mx-auto text-center flex flex-col justify-center'>
        <h2 className='text-[#ffbf00] md:text-6xl sm:text-5xl text-4xl font-sans font-bold my-2'>Luchamos por una justa indemnización en tus casos legales</h2>
        <p className='font-bold my-2'>Expertos en accidentes de tráfico y reclamaciones</p>

        <div className='flex justify-center md:col-2 col-1 m-2 items-center'>
            <button
            className="bg-[#ffbf00] w-[200px] rounded-md font-medium my-2 py-3 text-white"
            onClick={handleClick}
            style={{ opacity }}
            >
            Consultanso ya
            </button>

          <p className= "text-left p-2" >Te respaldamos en cada paso</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
