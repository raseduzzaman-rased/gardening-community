import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import bgimg1 from '../../assets/banner1.png';
import bgimg2 from '../../assets/banner2.png';
import bgimg3 from '../../assets/banner3.png';

const Banner = () => {
  return (
    <section className="w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="h-[500px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-[500px] w-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${bgimg1})` }}
          >
            <div className="bg-black/50 w-full h-full flex flex-col text-center justify-center px-10">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                Join Our Gardening Family
              </h1>
              <p className="text-lg text-white mb-6">
                Learn tips, tricks and share your garden journey with us.
              </p>
              <button className="bg-[#73B21A] hover:bg-green-700 text-white py-2 px-4 rounded mx-auto w-32">
                Join Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-[500px] w-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${bgimg2})` }}
          >
            <div className="bg-black/50 w-full h-full flex flex-col lg:text-end text-center justify-center px-6 lg:px-20">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                Discover Seasonal Plants
              </h1>
              <p className="text-lg text-white mb-6">
                Know what to plant and when — grow smarter, not harder.
              </p>
              <button className="bg-[#73B21A] hover:bg-green-700 text-white py-2 px-4 rounded mx-auto lg:mx-0 lg:ml-auto w-32">
                View Guide
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-[500px] w-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${bgimg3})` }}
          >
            <div className="bg-black/50 w-full h-full flex flex-col lg:text-end text-center justify-center px-6 lg:px-20">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                Attend Gardening Events
              </h1>
              <p className="text-lg text-white mb-6">
                Join local workshops and meet fellow plant lovers!
              </p>
              <button className="bg-[#73B21A] hover:bg-green-700 text-white py-2 px-4 rounded mx-auto lg:mx-0 lg:ml-auto w-32">
                Find Events
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
