import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
      <h1 className="w-full font-sans font-bold text-2xl text-[#ffbf00]">Alvarez Derecho</h1>
        <p className='py-4'>Tu servicio legal de confianza, aqui podria ir algun tipo de texto legal tambien, seas imagenes de abajo podemos eliminarlas conservar laguna si tienes link</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Aqui</h6>
        <ul>
            <li className='py-2 text-sm'>texto</li>
            <li className='py-2 text-sm'>texto</li>
            <li className='py-2 text-sm'>texto</li>
            <li className='py-2 text-sm'>texto</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>lo que quieras</h6>
        <ul>
            <li className='py-2 text-sm'>texto</li>
            <li className='py-2 text-sm'>texto</li>
            <li className='py-2 text-sm'>texto</li>
            <li className='py-2 text-sm'>texto</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>tambien</h6>
        <ul>
            <li className='py-2 text-sm'>texto</li>
            <li className='py-2 text-sm'>texto</li>
            <li className='py-2 text-sm'>texto</li>
            <li className='py-2 text-sm'>texto</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
