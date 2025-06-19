'use client'

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-2">
      <div className="text-center">
        <Image
          src={ assets.shyam_logo}
          alt="Shyam Events Logo"
          className="w-56 mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto mb-2">
          <Image
            src={ assets.mail_icon}
            alt="Email Icon"
            className="w-6"
          />
          <span>shayamevents.mgs@gmail.com</span>
        </div>

        {/* ✅ Mobile Number */}
        <div className="w-max flex items-center gap-2 mx-auto ">
          <Image
            src={assets.whatsapp} // make sure you have this icon
            alt="Phone Icon"
            className="w-6"
          />
          <span>+91 7007181810</span>
        </div>
        <div className="w-max flex items-center gap-2 mx-auto ">
          <Image
            src={assets.calling} // make sure you have this icon
            alt="Phone Icon"
            className="w-6"
          />
          <span>+91 7052480780</span>
        </div>

        {/* ✅ Address */}
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={assets.address} // make sure you have this icon
            alt="Location Icon"
            className="w-6"
          />
          <span>Hinauli Modh, Mughalsarai, Chandauli, Uttar-Pradesh</span>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Shyam Events. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" rel="noopener noreferrer" href="">
              Instagram
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="">
              Facebook
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="">
              YouTube
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
