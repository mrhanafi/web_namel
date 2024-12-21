'use client'
import { Blocks, Cable, CircuitBoard, GanttChartSquare, TabletSmartphone } from 'lucide-react'
import React from 'react'
import { motion } from "motion/react"

const servicesData = [
    {
        icon: <Blocks size={72} strokeWidth={1} />,
        title: 'Website & Web Application',
        description: 'We create custom web applications designed to meet your unique business needs. From intuitive user interfaces to secure back-end systems, our web apps are built for scalability, performance, and seamless integration. Whether you need a customer portal, e-commerce platform, or enterprise solution, we deliver web applications that streamline operations and enhance user experience.'
    },
    {
        icon: <TabletSmartphone size={72} strokeWidth={1} />,
        title: 'Mobile App Development',
        description: 'We design and develop mobile applications that provide seamless experiences on both iOS and Android. Our mobile solutions help businesses connect with their customers on the go, whether through consumer-facing apps or internal business tools. With a focus on usability and performance, we ensure your app stands out in a crowded market.'
    },
    {
        icon: <Cable size={72} strokeWidth={1} />,
        title: 'System Integration',
        description: 'Our system integration services ensure your diverse technologies work together smoothly. Whether integrating legacy systems with modern platforms or connecting various software tools across your business, we create seamless workflows that improve efficiency, reduce manual processes, and eliminate data silos.'
    },
    {
        icon: <CircuitBoard size={72} strokeWidth={1} />,
        title: 'Network Solutions',
        description: 'Our network services ensure your business stays connected and secure. We design, implement, and maintain high-performance network infrastructures tailored to your needs, from local area networks (LAN) to wide area networks (WAN). Whether you’re a small business or a large enterprise, we ensure your network is fast, reliable, and protected.'
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

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mx-10 gap-16 sm:gap-x-5'>
                {servicesData.map((item,index) => (
                    <div key={index}
                        className='group/icon bg-white p-5 border w-full max-w-[424px] h-auto flex flex-col pt-16 pb-10 justify-center items-center relative '>
                    <div className='transition absolute -top-[30px] group-hover/icon:rotate-12 group-hover/icon:delay-200'>
                        <div className='bg-white text-green-700 px-5 flex justify-center items-center'>
                            {item.icon}
                        </div>
                    </div>
                        <div>
                            <h1 className='font-bold text-xl mb-5 mt-5 text-center'>{item.title}</h1>
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