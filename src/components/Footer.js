import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className='bg-slate-200'>
      <div className='container mx-auto p-4'>
        <div className='flex justify-center gap-10 pb-5'>
          <FaFacebookSquare style={{ fontSize: '30px' }}/>
          <FaInstagram style={{ fontSize: '30px' }}/>
          <BsTwitterX style={{ fontSize: '30px' }}/>
        </div>
      
       <p className='text-center' title="Youtube Channel">JRASolutions.com © 2024 - 2024 Todos los derechos reservados</p>
      </div>
    </footer>
  )
}

export default Footer