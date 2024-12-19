'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import {ChevronRight} from 'lucide-react'

import { FreeMode, Pagination } from 'swiper/modules';
import { ServiceData } from '../constants';
import Image from 'next/image';
import { RxArrowTopRight } from 'react-icons/rx';


const ActiveSlider = () => {
  return (
      <div className='flex items-center justify-center flex-col h-screen bg-red-200'>
          <Swiper
              breakpoints={{ 
                  340: {
                      slidesPerView: 2,
                      spaceBetween: 15
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
              className='max-w-[90%] lg:max-w-[80%]'
          >
              {ServiceData.map((item) => (
                  <SwiperSlide key={item.title}>
                      <div className='flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[250px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer'>
                        <div className=''> <Image src={item.backgroundImage} alt="mockup" width={350} height={400} className='rounded-xl absolute inset-0 bg-cover bg-center' /> </div> 
                        <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50 rounded-xl'/>
                          <div className='relative flex flex-col gap-3'>
                              <item.icon className='text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]' />
                              <h1 className='text-xl lg:text-2xl'>{item.title}</h1>
                              <p className='lg:text-[18px]'>{item.content}</p>
                          </div>
                          <RxArrowTopRight className='absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100' />
                      </div>
                  </SwiperSlide>
              ))}
          </Swiper>
    </div>
  )
}

export default ActiveSlider