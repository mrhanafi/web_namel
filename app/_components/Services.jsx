import { Blocks, Cable, CircuitBoard, GanttChartSquare, TabletSmartphone } from 'lucide-react'
import React from 'react'

const servicesData = [
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Web Design & Development',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia nemo non eum blanditiis quisquam laborum sunt, quia eaque. Officia delectus mollitia culpa ea quis quibusdam itaque in vitae esse!'
    },
    {
        icon: <TabletSmartphone size={72} strokeWidth={0.8} />,
        title: 'App Development',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia nemo non eum blanditiis quisquam laborum sunt, quia eaque. Officia delectus mollitia culpa ea quis quibusdam itaque in vitae esse!'
    },
    {
        icon: <Cable size={72} strokeWidth={0.8} />,
        title: 'Mobile App',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia nemo non eum blanditiis quisquam laborum sunt, quia eaque. Officia delectus mollitia culpa ea quis quibusdam itaque in vitae esse!'
    },
    {
        icon: <CircuitBoard size={72} strokeWidth={0.8} />,
        title: 'Mobile App',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia nemo non eum blanditiis quisquam laborum sunt, quia eaque. Officia delectus mollitia culpa ea quis quibusdam itaque in vitae esse!'
    },
]
const Services = () => {
  return (
    <div className='py-20'>
        <div className='flex justify-center mb-32'>
            <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">Services</h1>
        </div>
        <div className='flex justify-center'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10 gap-10 sm:gap-x-5'>
                {servicesData.map((item,index) => (
                <div className='bg-white p-5 border w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'>
                    <div className='absolute -top-[30px]'>
                        <div className='bg-white text-green-700 px-5 flex justify-center items-center'>
                            {item.icon}
                        </div>
                    </div>
                    <p>
                        {item.description}
                    </p>
                </div>

                ))}

            </div>
        </div>
    </div>
  )
}

export default Services