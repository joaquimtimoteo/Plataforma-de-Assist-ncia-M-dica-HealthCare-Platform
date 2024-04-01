import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi';

const Testemonies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleSlideClick = (index) => {
    setActiveIndex(index);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        initialSlide={activeIndex}
        className="slide-container"
      >
        {[1, 2, 3, 4, 5].map((slide, index) => (
          <SwiperSlide key={index}  style={{ borderRadius: '15px', overflow: 'hidden' }}>
            <div className={`py-[30px] px-5 rounded-3 ${hoveredIndex === index ? 'bg-blue-500' : 'bg-transparent'}`} onClick={() => handleSlideClick(index)} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave()}>
              <div className='flex items-center gap-[13px]'>
                <img src={patientAvatar} alt='Patient Avatar' />
                <div>
                  <h4 className={`text-[18px] leading-[30px] font-semibold ${hoveredIndex === index ? 'text-white' : 'text-gray-600'}`}>
                    Joaquim Timoteo
                  </h4>
                  <div className='flex items-center gap-[2px]'>
                    <HiStar className='text-yellowColor w-[18px]  h-5' />
                    <HiStar className='text-yellowColor w-[18px]  h-5' />
                    <HiStar className='text-yellowColor w-[18px]  h-5' />
                    <HiStar className='text-yellowColor w-[18px]  h-5' />
                    <HiStar className='text-yellowColor w-[18px]  h-5' />
                  </div>
                </div>
              </div>
              <p className={`text-[16px] leading-7 mt-4 ${hoveredIndex === index ? 'text-white' : 'text-gray-600'}`}>
              Nossa plataforma permite o monitoramento contínuo de doenças crônicas
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex justify-center mt-4'>
        {[1, 2, 3].map((index) => (
          <input
            key={index}
            type='radio'
            name='slide-selector'
            checked={activeIndex === index}
            onChange={() => setActiveIndex(index)}
            className='mr-2'
          />
        ))}
      </div>
    </div>
  );
};

export default Testemonies;
