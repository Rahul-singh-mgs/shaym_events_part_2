'use client'

import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I Offer
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Photography Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I’m a professional photographer with over a decade of experience in capturing the joy and emotion of life’s
        most beautiful moments — from weddings and tilak ceremonies to birthdays and anniversaries and much more.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-auto lg:grid-cols-3 gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500"
          >
            {/* ✅ Icon replaced with image as background */}
            <div
              className="w-14 h-14 mb-4 bg-center bg-cover rounded-full"
              style={{ backgroundImage: `url(${typeof icon === 'string' ? icon : icon?.src})` }}
            />

            <h3 className="text-lg my-2 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>

            {typeof assets?.right_arrow === 'string' && assets.right_arrow.trim() !== '' && (
              <a href={link} className="flex items-center gap-2 text-sm mt-5">
                Read more
                <img
                  src={assets.right_arrow}
                  alt="arrow"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                />
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
