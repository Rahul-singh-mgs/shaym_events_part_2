'use client'

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="mt-4 px-4">
      <div className="text-center">
        <Image
          src={assets.shyam_logo}
          alt="Shyam Events Logo"
          className="w-44 sm:w-56 mx-auto mb-4"
        />

        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-2 text-sm">
          <div className="flex items-center gap-2">
            <Image src={assets.mail_icon} alt="Email Icon" className="w-5 sm:w-6" />
            <span>gopal.mgs.gc@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-2 text-sm">
          <div className="flex items-center gap-2">
            <Image src={assets.whatsapp} alt="WhatsApp Icon" className="w-5 sm:w-6" />
            <span>+91 7007181810</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-2 text-sm">
          <div className="flex items-center gap-2">
            <Image src={assets.calling} alt="Phone Icon" className="w-5 sm:w-6" />
            <span>+91 7052480780</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Image src={assets.address} alt="Location Icon" className="w-5 sm:w-6" />
            <span className="text-center sm:text-left">
              Hinauli Modh, Mughalsarai, Chandauli, Uttar-Pradesh
            </span>
          </div>
        </div>
      </div>

      <div className="text-center sm:flex sm:items-center sm:justify-between border-t border-gray-300 mx-auto max-w-5xl mt-10 py-5 text-sm">
        <p className="mb-4 sm:mb-0">© 2025 Shyam Events. All rights reserved.</p>
        <ul className="flex flex-wrap items-center gap-6 justify-center">
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">Instagram</a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">Facebook</a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/">YouTube</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
