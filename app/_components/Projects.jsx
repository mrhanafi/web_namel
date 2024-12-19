'use client'
import React, { useEffect, useState } from 'react'
import ActiveSlider from './ActiveSlider';
import ProjectSlider from './ProjectSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import {ChevronRight} from 'lucide-react'

import { FreeMode, Pagination } from 'swiper/modules';
import { ServiceData } from '../constants';
import Image from 'next/image';
import { RxArrowTopRight } from 'react-icons/rx';
import bg from '../assets/janabila.png'
import { motion } from "motion/react"



const Projects = () => {
  const [active, setActive] = useState(0);
  const [project, setProject] = useState(ServiceData);
  const [data, setData] = useState({});
 
  useEffect(() => {
    setData(project[0])
  },[])

  const showData = (index) => {
    setData(project[index])
  }
  return (
    <div>
      <div
        className='flex justify-center py-32'>
            <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">Projects<span className='text-green-700'>.</span></h1>
      </div>
      <div className='w-auto grid grid-cols-1 lg:grid-cols-3 mb-20'>
        <div className='px-20 pb-20'>
          <motion.h1
            animate={true}
            whileInView={{ opacity:1,x:0 }}
                initial={{ opacity:0,x:-100 }}
                transition={{ duration:1 }}
            className='text-2xl font-bold'>{data.title}</motion.h1>
          <motion.hr
            whileInView={{ opacity:1,x:0 }}
                initial={{ opacity:0,x:-100 }}
                transition={{ duration:1.5 }}
            className="my-5 w-14 h-1 border-t-0 bg-green-700 dark:bg-white/10" />
          <motion.p
          whileInView={{ opacity:1,x:0 }}
                initial={{ opacity:0,x:-100 }}
                transition={{ duration:2 }}
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, nam iure eius voluptatem odit veniam quo sequi similique iusto labore blanditiis corrupti reiciendis id commodi doloremque dolor fugiat cumque natus?</motion.p>
        </div>
        <div className='col-span-2'>
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
            style={{ 
              '--swiper-pagination-color' : 'rgb(21 128 61)'
             }}
                    >
            {ServiceData.map((item,index) => (
              <SwiperSlide key={item.title} onClick={() => showData(index)}>
                <div className='flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-10 h-[200px] lg:h-[350px] overflow-hidden cursor-pointer'>
                  <Image src={item.backgroundImage} alt='images' width={300} height={300} className='absolute rounded-xl inset-0 flex w-auto' />  
                  <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50 rounded-xl' />
                  <div className='relative flex flex-col gap-3'>
                    <item.icon className='text-green-600 group-hover:text-green-400 w-[32px] h-[32px]' />
                    {/* <h1 className='text-xl lg:text-2xl'>{item.title}</h1>
                    <p className='lg:text-[18px]'>{item.content}</p> */}
                  </div>
                  <RxArrowTopRight className='absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-green-500 group-hover:rotate-45 duration-100' />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        </div>
      </div>
       
    </div>
  )
}

export default Projects