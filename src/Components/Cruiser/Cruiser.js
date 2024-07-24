import React from 'react';
import cruiser from "../../assets/cruiser.jpg";

const Cruiser = () => {
  return (
    <div className='cruiser container mx-auto'>
      <div className='hidden md:flex md:flex-row items-center justify-center'>
        <div className='md:w-1/2 md:mr-8'>
          <h2 className='text-2xl font-bold mb-4'>Şık Cruiser Araçlar</h2>
          <p className='text-lg'> Klasik tasarımın özüne bir yolculuk yapın, şık cruiser araç koleksiyonumuzla. Her bir araç, modern mühendislikle klasik estetiği harmanlayarak nostaljik ve güvenilir bir sürüş sunuyor. Sahil yollarında keyifli bir yolculuk yaparken ya da şehir içi sokaklarda ilerlerken, cruiser araçlarımız eşsiz konfor ve performans vaat ediyor.</p>
        </div>
        <div className='md:w-1/2 md:ml-8'>
          <img src={cruiser} alt="Information" className='max-w-full h-auto rounded-lg' />
        </div>
      </div>
      <div className='md:hidden flex flex-col items-center justify-center'>
        <img src={cruiser} alt="Information" className='max-w-full h-auto rounded-lg mb-4' />
        <div className='w-full'>
          <h2 className='text-2xl font-bold mb-4'>Şık Cruiser Araçlar</h2>
          <p className='text-lg'> Klasik tasarımın özüne bir yolculuk yapın, şık cruiser araç koleksiyonumuzla. Her bir araç, modern mühendislikle klasik estetiği harmanlayarak nostaljik ve güvenilir bir sürüş sunuyor. Sahil yollarında keyifli bir yolculuk yaparken ya da şehir içi sokaklarda ilerlerken, cruiser araçlarımız eşsiz konfor ve performans vaat ediyor.</p>
        </div>
      </div>
    </div>
  );
};

export default Cruiser;
