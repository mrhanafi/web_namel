'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import {ChevronRight} from 'lucide-react'

import { FreeMode, Pagination } from 'swiper/modules';
import { ServiceData } from '../constants';
import Image from 'next/image';
import { RxArrowTopRight } from 'react-icons/rx';


const ProjectSlider = () => {
    const [active, setActive] = useState(0);
  return (
      <div className=''>
          <Swiper
              breakpoints={{ 
                300: {
                    slidesPerView: 1,
                    spaceBetween: 5
                },
                700: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            
            freeMode={true}
            pagination={{ 
                clickable: true
            }}
            modules={[FreeMode, Pagination]}
              className='max-w-[80%] md:max-w-[100%]'
              onSwiper={(swiper) => console.log(swiper)}
          >
              {ServiceData.map((item) => (
                  <SwiperSlide key={item.title} onClick={() => setActive(item.id)}>
                      <div className='flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 overflow-hidden cursor-pointer'>
                          <div className='absolute inset-0'>
                              <Image src={item.backgroundImage} alt="mockup" width={1000} height={1000} className='rounded-xl  bg-cover bg-center' />
                          </div> 
                        <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50 rounded-xl'/>
                          <div className='relative flex flex-col gap-3'>
                              <item.icon className='text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]' />
                              <h1 className='text-xl lg:text-2xl'>{item.title}</h1>
                              <p className='lg:text-[18px]'>{item.content}</p>
                          </div>
                          <RxArrowTopRight className='absolute top-5 right-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100' />
                      </div>
                  </SwiperSlide>
              ))}
          </Swiper>
    </div>
  )
}

export default ProjectSlider