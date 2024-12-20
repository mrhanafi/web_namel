'use client'
import React, { useState } from 'react'
import Spin from "../assets/spinner.svg"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {


  return (
    
    <>
    <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://namelsolutions.com/" class="hover:underline">Namel Solutions</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        {/* <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li> */}
        <li>
            <Link href="/privacy-policy" class="hover:underline me-4 md:me-6">Privacy Policy</Link>
        </li>
        {/* <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li> */}
    </ul>
</footer>
    </>
//     <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
//     <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
//         <div className="sm:flex sm:items-center sm:justify-between">
//             <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
//                 <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
//                 <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//             </a>
//             <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
//                 <li>
//                     <a href="#" className="hover:underline me-4 md:me-6">About</a>
//                 </li>
//                 <li>
//                     <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
//                 </li>
//                 <li>
//                     <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
//                 </li>
//                 <li>
//                     <a href="#" className="hover:underline">Contact</a>
//                 </li>
//             </ul>
//         </div>
//         <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
//         <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
//     </div>
// </footer>
  )
}

export default Footer