import React, { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import Link from "next/link";

const Footer = () => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);

  useEffect(() => {
    if (legalModalOpen || imageModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [legalModalOpen, imageModalOpen]);

  return (
    <>
      <div className='max-w-[1240px] mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-5 gap-8 text-gray-300'>
        <div>
        <h1 className="w-full font-sans font-bold text-2xl text-[#ffbf00]">
          <Link href="/" legacyBehavior>
            <a>Álvarez Derecho</a>
          </Link>
        </h1>
        <p className='py-4'>Tu servicio legal de confianza</p>
          <div className='flex justify-between md:w-[75%] my-6'>
              <a href='https://www.instagram.com/despachoalvarezz/' target='_blank' rel='noopener noreferrer'>
              <FaInstagram size={30} />
              </a>
              <a href='https://twitter.com/despachoalvare' target='_blank' rel='noopener noreferrer'>
              <FaTwitterSquare size={30} />
              </a>
              <a href='https://www.linkedin.com/company/despacho-alvarez' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin size={30} />
              </a>
          </div>

        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Indemnizaciones</h6>
            <ul>
                <li className='py-2 text-sm'>Información</li>
                <li className='py-2 text-sm'>Seguimiento</li>
                <li className='py-2 text-sm'>Negociación</li>
                <li className='py-2 text-sm'>Resolución</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Accidentes</h6>
            <ul>
                <li className='py-2 text-sm'>Evidencia</li>
                <li className='py-2 text-sm'>Orientación</li>
                <li className='py-2 text-sm'>Proceso</li>
                <li className='py-2 text-sm'>Demanda</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Propiedad Intelectual</h6>
            <ul>
                <li className='py-2 text-sm'>Derechos de autor</li>
                <li className='py-2 text-sm'>Patentes</li>
                <li className='py-2 text-sm'>Marcas Registradas</li>
                <li className='py-2 text-sm'>Protección</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Contacto</h6>
            <ul>
                <li className='py-2 text-sm'>☎ 639303038</li>
                <li className='py-2 text-sm'>✉ info@despachoalvarez.es</li>
            </ul>
            <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
                <li className='py-2 text-sm cursor-pointer' onClick={() => setLegalModalOpen(true)}>Aviso legal</li>
                <li className='py-2 text-sm cursor-pointer' onClick={() => setImageModalOpen(true)}>Uso de imagenes</li>
            </ul>
        </div>
      </div>

      {legalModalOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    Aviso Legal
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      AVISO LEGAL
                          El acceso a la presente página Web  https://despachoalvarez.es supone la
                          adquisición de la condición de usuario y la aceptación de éste del total de las
                          condiciones y disposiciones establecidas en el presente Aviso Legal.
                          Legislación
                          Las relaciones entre la presente web y el titular de la misma con los usuarios se
                          rigen por la legislación y jurisdicción españolas a todos los efectos.
                          Utilización de la web
                          Los usuarios siempre y cuando se haga con fines informativos y uso personal
                          podrán imprimir y ver los contenidos de la presente página web. Quedará
                          prohibida su utilización con fines ilícitos, antijurídicos, comerciales e inmorales.
                          Además dichos contenidos no podrán ser ni modificados ni alterados de forma
                          alguna.
                          El titular se reserva el derecho de completar, añadir, suprimir o modificar
                          cualquiera de los contenidos publicados en la presente página web sin previo
                          aviso y en cualquier momento.

                          Los usuarios deberán respetar los términos y condiciones recogidas en el
                          presente Aviso Legal, así como los establecidos en el ordenamiento jurídico en
                          vigor.
                          Asimismo, los usuarios no podrán utilizar la presente web de manera que
                          causen daños o se inutilice parcial o totalmente la misma. Tampoco podrán
                          alterar o modificar sus contenidos, código fuente o diseño, ni dañar o alterar los
                          equipos del titular de la página web o a los programas, ficheros, etc… que éste
                          pudiera tener.
                          El titular en ningún caso se responsabilizará de las opiniones realizadas por
                          usuarios y colaboradores en la presente web.
                          La dirección de correo que figura en la presente web no podrá ser utilizada con
                          fines comerciales para el envío de publicidad a no ser que ésta haya sido
                          solicitada explícitamente por el titular de la web.
                          Propiedad intelectual e industrial
                          Todos los derechos de propiedad intelectual e industrial tanto de la web
                          http://despachoalvarez.es como de sus contenidos pertenecen al titular de la
                          presente página web. Por ello queda prohibida su reproducción, distribución,
                          divulgación, copia y transformación que se pueda realizar con sus contenidos,
                          incluso citando las fuentes salvo consentimiento expreso del titular de la web.
                          Todas las marcas comerciales o signos distintivos contenidos en la presente
                          web están protegidos por ley, el acceso de los usuarios en ningún caso supone
                          la concesión de derecho alguno sobre dichos derechos de propiedad intelectual
                          e industrial.
                          Protección de datos personales
                          En cumplimiento de lo dispuesto en el Artículo 5 y 6 la Ley Orgánica 15/1999,
                          de 13 de diciembre, de Protección de Datos de Carácter Personal (LOPD) se
                          informa al usuario de la presente web que todos sus datos que nos facilite a
                          través de los formularios serán incorporados en un fichero, creado y mantenido
                          por http://despachoalvarez.es. Prestando su consentimiento expreso para la
                          recepción de comunicados de carácter comercial y servicios que pueda ofertar
                          el titular de la presente página web. La confidencialidad de sus datos
                          personales siempre será respetada.
                          Todo usuario podrá ejercer su derecho de oposición, rectificación o cancelación
                          dirigiéndose mediante instancia escrita a la dirección de correo electrónico que
                          figura.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button onClick={() => setLegalModalOpen(false)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
  Cerrar
</button>
            </div>
          </div>
        </div>
      </div>
      )}



      {imageModalOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
Atribución de derechos de las imagenes usadas para los contenidos de esta web.                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
Publicación Laboral 1      <a href="https://www.freepik.es/foto-gratis/concepto-negocio-automoviles-venta-automoviles-consumo-personas_9144933.htm#query=conductor&position=0&from_view=search&track=sph">
    Imagen de standret en Freepik
  </a>                </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button onClick={() => setImageModalOpen(false)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
  Cerrar
</button>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default Footer;
