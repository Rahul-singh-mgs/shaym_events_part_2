import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div id='about' className='w-full px-4 sm:px-10 lg:px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-base sm:text-lg font-Ovo'>
                Introduction</motion.h4>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-3xl sm:text-5xl font-Ovo'>
                About Me</motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex flex-col lg:flex-row items-center gap-10 lg:gap-20 my-10 sm:my-20'>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-48 sm:w-64 md:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_icon_me} alt='Photographer' className='w-full rounded-3xl' />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='flex-1 w-full'>
                    <p className='mb-10 max-w-full sm:max-w-xl text-sm sm:text-base font-Ovo'>
                        I am a passionate and experienced professional photographer with over a decade of experience capturing life's most cherished moments.
                        From grand wedding ceremonies to intimate tilak rituals, joyful birthday celebrations to milestone anniversaries — I specialize in preserving every smile, emotion, and memory with perfection.
                        My journey has taken me across cultures and regions of India, allowing me to artistically document vibrant traditions, heartfelt moments, and timeless celebrations.
                        With an eye for detail and a heart for storytelling, I ensure that each frame reflects the joy and beauty of your special day.
                    </p>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                        {infoList.map(({ icon, title, description }, index) => (
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                className='border-[0.5px] border-gray-400 rounded-xl p-5 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'
                                key={index}>
                                <Image src={icon} alt={title} className='w-6 sm:w-7 mt-2' />
                                <h3 className='my-3 text-sm sm:text-base font-semibold text-gray-700 '>{title}</h3>
                                <p className='text-sm text-gray-600'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.5 }}
                        className='mt-10 mb-4 text-sm sm:text-base text-gray-700 font-Ovo'>
                        Equipment & Tools I Use</motion.h4>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.6 }}
                        className='flex flex-wrap gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                className='flex items-center justify-center w-10 sm:w-12 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                                key={index}>
                                <Image src={tool} alt='Tool' className='w-5 sm:w-6' />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About
