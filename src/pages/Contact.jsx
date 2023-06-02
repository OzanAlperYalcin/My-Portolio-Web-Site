import { FaCode, FaAddressCard, FaEnvelope } from "react-icons/fa"
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <div className='container mx-auto bg-third/1 border border-third/20 rounded-lg p-6 lg:p-10'>
      <h1 className='text-lg lg:text-3xl font-bold'>Contact.</h1>
      <div className='grid items-center grid-cols-2 gap-5'>
        <div className='flex justify-center order-2 md:order-1 col-span-2 sm:col-span-1'>
          <div className="font-light">
            <h1 className="text-3xl font-light text-brand-secondary">Ozan Alper Yalçın </h1>
            <div className="flex items-center gap-x-2 text-third justify-end">
              <FaCode />
              <span>Frontend Developer</span>
            </div>
            <div className="flex items-center gap-x-2">
              <FaEnvelope />
              <span>Email: info@alperyalcin.com.tr</span>
            </div>
            <div className="flex items-center gap-x-2">
              <FaAddressCard />
              <span>Location: Istanbul / TURKEY</span>
            </div>
            <div>
            </div>
          </div>
        </div>
        <div className='flex justify-center order-1 md:order-2 col-span-2 sm:col-span-1'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact