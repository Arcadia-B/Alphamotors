import React from 'react';
import info from "../../assets/info.jpg";

const Sports = () => {
  return (
    <div className='container mx-auto flex flex-col md:flex-row items-center justify-center py-24'>
      <div className='md:w-1/2 md:mr-8'>
        <img src={info} alt="Information" className='max-w-full h-auto rounded-lg' />
      </div>
      <div className='md:w-1/2 md:ml-8'>
        <h2 className='text-2xl font-bold mb-4'>Heyecan Dolu Spor Motorlar</h2>
        <p className='text-lg'>Hız tutkunları için tasarlanmış sportif motorlarımızla sınırları zorlayın. Her bir detayı performansa odaklanarak üretilen bu motorlar, yüksek hız ve dinamizmle sizlere unutulmaz bir sürüş deneyimi sunuyor. Modern teknoloji ve aerodinamik tasarımın mükemmel uyumuyla sport motorlarımız, yol tutuşuyla da öne çıkıyor.</p>
      </div>
    </div>
  );
}

export default Sports;
