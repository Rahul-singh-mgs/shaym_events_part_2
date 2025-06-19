'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const mediaData = [
  { type: 'image', src: '/image_1.jpg' },
  { type: 'image', src: '/image_2.jpg' },
  { type: 'video', src: '/videoplayback (1).mp4' },
  { type: 'image', src: '/image_4.jpg' },
  { type: 'image', src: '/image_3.jpg' },
  { type: 'video', src: '/videoplayback (7).mp4' },
  { type: 'video', src: '/videoplayback (2).mp4' },
  { type: 'video', src: '/videoplayback (9).mp4' },
  { type: 'video', src: '/videoplayback (8).mp4' },
  { type: 'image', src: '/image_6.jpg' },
  { type: 'video', src: '/videoplayback (4).mp4' },
  { type: 'image', src: '/image_2.jpg' },
  { type: 'video', src: '/videoplayback (5).mp4' },
  { type: 'image', src: '/image_5.jpg' },
  { type: 'video', src: '/videoplayback (6).mp4' },
]

const Work = () => {
  const videoRefs = useRef({})

  const toggleMute = (index) => {
    const video = videoRefs.current[index]
    if (video) {
      video.muted = !video.muted
      if (video.paused) {
        video.play()
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        My portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        Captured Moments
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        With over a decade of experience, I specialize in preserving joyful
        memories from Indian weddings, tilaks, birthdays, anniversaries, and
        other heartwarming celebrations. Explore my recent shoots and timeless
        frames.
      </motion.p>

      <div className='w-11/12 mx-auto py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {mediaData.map((item, index) =>
            item.src ? (
              <motion.div
                key={index}
                className='cursor-pointer overflow-hidden rounded-lg shadow-md relative group'
                whileHover={{ scale: 1.03 }}
                onClick={() => {
                  if (item.type === 'video') toggleMute(index)
                }}
              >
                {item.type === 'image' ? (
                  <Image
                    src={item.src}
                    alt={`image-${index}`}
                    width={300}
                    height={300}
                    className='object-cover w-full h-[400px]'
                    unoptimized
                    // OR fallback: src={item.src || '/fallback.jpg'}
                  />
                ) : (
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={item.src}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className='w-full h-[400px] object-cover rounded-md'
                  />
                )}
              </motion.div>
            ) : null
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Work
