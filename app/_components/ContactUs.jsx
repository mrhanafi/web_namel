'use client'
import React, { useState } from 'react'
import Spin from "../assets/spinner.svg"
import Image from 'next/image'

const ContactUs = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(false);

    const sendEmail = async () => {
        setLoading(true);
        // e.preventDefault();
    
        const response = await fetch('/api/emails',{
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            email:email,
            subject:subject,
            message:message
          })
        }).then((response) => {
          if(response.status === 200){
            console.log(response.json())
            setEmail('');
            setSubject('');
            setMessage('');
            setResult(true);
          }
        });
        setLoading(false);
      }
  return (
    <div>
      <section className="">
  <div className="py-8 px-4 mx-auto max-w-screen-md pb-[250px]">
          <div
            className='flex justify-center py-20'>
            <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">Contact Us<span className='text-green-700'>.</span></h1>
          </div>
          <p
            className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
          
          {result && (
         <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400" role="alert">
            <span className="font-medium">You have successfully sent a message! </span>We will get in touch soon as possible
          </div>

          )}
          {/* <form
            onSubmit={sendEmail} className="space-y-8"> */}
          <div className='space-y-8'>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@me.com" required/>
            </div>
            <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" rows="6" value={message} onChange={(e) => setMessage(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message..."></textarea>
            </div>
            
              <button type="submit" className="py-3 w-40 bg-green-700 text-white px-3 rounded-md hover:bg-green-600 flex justify-center" onClick={sendEmail}>{loading ? (
                <>
                  <Image src={Spin} alt='loading' className='fill-blue-500' />
                </>
              ): (
                  <>
                  Send Message
                  </>  
              ) }</button>

          </div>
      {/* </form> */}
  </div>
</section>
    </div>
  )
}

export default ContactUs