'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import {createRoot} from 'react-dom/client'
import remarkGfm from 'remark-gfm'

const Page = () => {
  const [data,setData] = useState({});
  const markdown = `Just a link: www.nasa.gov.`

  const getData = async () => {

    const datapp = await axios.get('https://sitebe.namelsolutions.com/api/privacy-policy');
    // console.log(datapp);
    setData(datapp?.data?.data)
  }

  useEffect(() => {
    getData();
  },[])
  return (
    <div>
      <div className='p-20 '>
        <h1 className='font-bold text-3xl'>Privacy Policy</h1>
        {/* <p>{data?.privacy_policy}</p> */}
        {/* <Markdown remarkPlugins={[remarkGfm]}>{data?.privacy_policy}</Markdown> */}
        <div className='py-10'>
          <p>[J A Nabila & Co.] ("we", "us", "our") values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our mobile application (the "App"). By accessing and using the App, you agree to the practices outlined in this policy.</p>
        </div>
        <div>
          <h1 className='font-bold text-2xl pb-5'>1. Information We Collect</h1>
          <p className='pb-5'>We may collect the following types of information when you use the App:</p>
        </div>
        <div className='pb-5'>
          <h1 className='font-bold text-xl pb-5'>1.1 Personal Information</h1>
          <ul>
            <li>•	<span className='font-bold'>Account Information</span>: Name, email address, phone number, and any other personal details provided when you register an account or engage with our services.</li>
            <li>•	<span className='font-bold'>Location Data</span>: If you enable location services, we may collect your geographical location to provide location-based services, such as property searches or legal guidance.</li>
            <li>•	<span className='font-bold'>Payment Information</span>: If applicable, we may collect payment details for processing fees related to legal services or consultations.</li>
          </ul>
        </div>
        <div className='pb-5'>
          <h1 className='font-bold text-xl pb-5'>1.2 Usage Data</h1>
          <ul>
            <li>	<span className='font-bold'>•	App Usage Information</span>: We may collect data regarding your use of the App, such as how you navigate the App, the features you use, and your interactions with content.</li>
            <li>	<span className='font-bold'>•	Device Information</span>: Information about the device you use to access the App, including device type, operating system version, device identifiers, and mobile network information.</li>
          </ul>
        </div>
        <div className='pb-5'>
          <h1 className='font-bold text-xl pb-5'>1.3 Communication Data</h1>
          <ul>
            <li>	<span className='font-bold'>•	Messages and Inquiries</span>: We may collect data from any communication you send to us through the App, including inquiries regarding property-related legal matters.</li>
          </ul>
        </div>

        <div className='pb-5'>
          <h1 className='font-bold text-2xl pb-5'>2. How We Use Your Information</h1>
          <p className='pb-5'>We use the collected information for various purpose, including:</p>
          <ul>
            <li>	<span className='font-bold'>•	Providing Services</span>: To deliver property-related legal services, such as consultations, document preparation, and other related tasks.</li>
            <li>	<span className='font-bold'>•	Communication</span>: To respond to inquiries, provide updates on the progress of your legal matters, and notify you about changes to the App or our services.</li>
            <li>	<span className='font-bold'>•	Improvement of the App</span>: To enhance and personalize your experience with the App by understanding how it is used and identifying areas for improvement.</li>
            <li>	<span className='font-bold'>•	Legal and Compliance</span>: To comply with legal obligations, including regulatory requirements and to protect our rights, property, or safety.</li>
          </ul>
        </div>

        <div className='pb-5'>
          <h1 className='font-bold text-2xl pb-5'>3. Data Retention</h1>
          <p className='pb-5'>We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Once the information is no longer needed, it will be securely deleted or anonymized.</p>
        </div>

        <div className='pb-5'>
          <h1 className='font-bold text-2xl pb-5'>4. Data Sharing and Disclosure</h1>
          <p className='pb-5'>We do not sell, rent, or trade your personal information. However, we may share your information in the following cases:</p>
          <ul>
            <li>	<span className='font-bold'>•	Service Providers</span>: We may share data with trusted third-party vendors or service providers who assist us in operating the App and delivering our services, such as hosting or payment processing.</li>
            <li>	<span className='font-bold'>•	Legal Requirements</span>: We may disclose your information to comply with legal obligations or in response to lawful requests by public authorities, such as a court order or government agency.</li>
            <li>	<span className='font-bold'>•	Business Transfers</span>: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
          </ul>
        </div>

        <div className='pb-5'>
          <h1 className='font-bold text-2xl pb-5'>5. Security of Your Data</h1>
          <p className='pb-5'>We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no security measure is completely secure, and we cannot guarantee the absolute security of your data.</p>
        </div>

        <div className='pb-5'>
          <h1 className='font-bold text-2xl pb-5'>6. Your Rights and Choices</h1>
          <p className='pb-5'>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
          <ul>
            <li>	<span className='font-bold'>•	Access and Correction</span>: You may request access to the personal data we hold about you and ask for it to be corrected or updated.</li>
            <li>	<span className='font-bold'>•	Data Deletion</span>: You can request that we delete your personal data, subject to legal obligations or retention requirements.</li>
            <li>	<span className='font-bold'>•	Opt-Out of Marketing Communications</span>: If we send marketing communications, you can opt out at any time by following the unsubscribe instructions included in those communications or by contacting us directly.</li>
          </ul>
        </div>

        <div className='pb-5'>
          <h1 className='font-bold text-2xl pb-5'>7. Cookies and Tracking Technologies</h1>
          <p className='pb-5'>We may use cookies, web beacons, and other tracking technologies to enhance the functionality of the App and improve your user experience. These technologies collect information such as device type, usage patterns, and location. You can control your cookie preferences through your device settings.</p>
        </div>

        <div className='pb-5'>
          <h1 className='font-bold text-2xl pb-5'>8. Children's Privacy</h1>
          <p className='pb-5'>The App is not intended for use by children under the age of 13, and we do not knowingly collect personal information from children. If you believe that we have inadvertently collected such data, please contact us, and we will take steps to delete it.</p>
        </div>

        <div className='pb-5'>
          <h1 className='font-bold text-2xl pb-5'>9. Changes to This Privacy Policy</h1>
          <p className='pb-5'>We may update this Privacy Policy from time to time. If we make significant changes, we will notify you through the App or by email. Please review this policy periodically to stay informed about how we are protecting your information.</p>
        </div>

        <div className='pb-5'>
          <h1 className='font-bold text-2xl pb-5'>10. Contact Us</h1>
          <p className='pb-5'>If you have any questions or concerns about this Privacy Policy or the way we handle your data, please contact us at:</p>
          <p>J A Nabila & Co.</p>
          <p>No. 180-1 & 180-2, Jalan Damai Raya 2,</p>
          <p>Alam Damai,</p>
          <p>56000 Kuala Lumpur</p>
          <p>+603 8966 3090</p>
          <p>janabila.co@gmail.com </p>
        </div>
      </div>
    </div>
  )
}

export default Page
