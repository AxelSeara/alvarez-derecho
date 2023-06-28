import React from 'react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+34649538759';
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink);
  };

  const handleContactClick = () => {
    const email = 'tudireccion@gmail.com';
    const subject = encodeURIComponent('Asunto de contacto');
    const body = encodeURIComponent('Descripción del mensaje');

    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.open(mailtoLink);
  };

  return (
    <div className='bg-black w-full py-16 text-white px-4' id='contacto'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Necesitas asesoramiento, contáctanos
          </h1>
          <p>
            Algún texto interesante aquí...
          </p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <button
              className='bg-[#25D366] rounded-md font-medium w-full mx-3 my-2 py-2 px-5 text-white focus:outline-none focus:ring-2 focus:ring-white'
              onClick={handleWhatsAppClick}
            >
              WhatsApp
            </button>
            <button
              className='bg-[#ffbf00] rounded-md font-medium w-full mx-3 my-2 py-2 px-5 text-white focus:outline-none focus:ring-2 focus:ring-white'
              onClick={handleContactClick}
            >
              Contactar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
