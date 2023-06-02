import React from 'react'
import { FaInstagram, FaLinkedin } from "react-icons/fa"

function Social({size}) {
  return (
    <ul className='flex justify-end items-center gap-x-3 text-gray-400'>
      <li className='hover:text-white transition ease-out cursor-pointer'>
        <a href="https://www.instagram.com/alperryalcinn/" target="_blank" rel='noreferrer'>
          <FaInstagram size={size} />
        </a>
      </li>
      <li className='hover:text-white transition ease-out cursor-pointer'>
        <a href="https://www.linkedin.com/in/ozanalperyalcin/" target="_blank" rel='noreferrer'>
          <FaLinkedin size={size} />
        </a>
      </li>
    </ul>
  )
}

export default Social