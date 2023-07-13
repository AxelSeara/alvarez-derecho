function Cards() {
  return (
    <div className="w-full py-[10rem] px-4" id='servicios'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className="w-20 mx-auto mt-[-3rem] bg-whitesmoke" src="/assets/law.png" alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Texto uno</h2>
          <p className='text-center text-4xl font-bold'>algo mas</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>texto</p>
            <p className='py-2 border-b mx-8'>texto</p>
            <p className='py-2 mx-8'>texto</p>
          </div>
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
          <img className="w-20 mx-auto mt-[-3rem] bg-whitesmoke" src="/assets/car.png" alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Texto uno</h2>
          <p className='text-center text-4xl font-bold'>algo mas</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>texto</p>
            <p className='py-2 border-b mx-8'>texto</p>
            <p className='py-2 mx-8'>texto</p>
          </div>
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className="w-20 mx-auto mt-[-4rem] bg-whitesmoke" src="/assets/work.png" alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Texto uno</h2>
          <p className='text-center text-4xl font-bold'>algo mas</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>texto</p>
            <p className='py-2 border-b mx-8'>texto</p>
            <p className='py-2 mx-8'>texto</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
