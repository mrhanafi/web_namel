"use client"
import Image from 'next/image'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className=" dark:bg-gray-900 pt-40">
        <div className="max-w-screen-4xl px-20 py-8 flex flex-col flex-wrap items-center justify-center text-center">
              <div className="">
                  <h1 className="max-w-3xl mb-4 text-4xl font-extrabold tracking-tight md:text-4xl xl:text-5xl dark:text-white">
                      We {' '}
                      <span className='text-green-700'>
                        <TypeAnimation 
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Plan.',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Design.',
                                1000,
                                'Implement.',
                                1000,
                                'Test.',
                                1000,
                                'Deploy.',
                                1000
                            ]}
                            wrapper="span"
                            speed={10}
                            // style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                            />
                          
                      </span>
                  </h1>
              </div>
                <div>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Simplifying technology with solutions that drive efficiency, security and business growth</p>
                  
              </div>
          </div>
        
    </section>
  )
}

export default Hero