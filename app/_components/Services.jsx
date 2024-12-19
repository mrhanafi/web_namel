'use client'
import { Blocks, Cable, CircuitBoard, GanttChartSquare, TabletSmartphone } from 'lucide-react'
import React from 'react'
import { motion } from "motion/react"

const servicesData = [
    {
        icon: <Blocks size={72} strokeWidth={1} />,
        title: 'System Web App',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia nemo non eum blanditiis quisquam laborum sunt, quia eaque. Officia delectus mollitia culpa ea quis quibusdam itaque in vitae esse!'
    },
    {
        icon: <TabletSmartphone size={72} strokeWidth={1} />,
        title: 'Mobile App Development',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia nemo non eum blanditiis quisquam laborum sunt, quia eaque. Officia delectus mollitia culpa ea quis quibusdam itaque in vitae esse!'
    },
    {
        icon: <Cable size={72} strokeWidth={1} />,
        title: 'System Integration',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia nemo non eum blanditiis quisquam laborum sunt, quia eaque. Officia delectus mollitia culpa ea quis quibusdam itaque in vitae esse!'
    },
    {
        icon: <CircuitBoard size={72} strokeWidth={1} />,
        title: 'CCTV & Network',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia nemo non eum blanditiis quisquam laborum sunt, quia eaque. Officia delectus mollitia culpa ea quis quibusdam itaque in vitae esse!'
    },
]
const Services = () => {
  return (
      <div className='py-32'>
          <div
              className='flex justify-center py-32'>
            <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">Services<span className='text-green-700'>.</span></h1>
        </div>
        <div className='flex justify-center'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10 gap-10 sm:gap-x-5'>
                {servicesData.map((item,index) => (
                    <div key={index}
                        className='group/icon bg-white p-5 border w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative '>
                    <div className='transition absolute -top-[30px] group-hover/icon:rotate-12 group-hover/icon:delay-200'>
                        <div className='bg-white text-green-700 px-5 flex justify-center items-center'>
                            {item.icon}
                        </div>
                    </div>
                        <div>
                            <h1 className='font-bold text-xl mb-5 text-center'>{item.title}</h1>
                            <p className='text-center'>
                                {item.description}
                            </p>
                        </div>    
                </div>

                ))}

            </div>
        </div>
    </div>
  )
}

export default Services