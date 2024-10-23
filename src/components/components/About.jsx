import React from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import {styles} from '../../styles';
import {services} from '../../constants';
import {fadeIn,textVariant} from '../../utils/motion';
import { SectionWrapper } from '../../hoc';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full cursor-pointer'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
      <motion.div
       variants={textVariant()}
       className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >

      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={`${styles.sectionHeadText} mt-4`}>Overview.</h2>

    </motion.div>

    <motion.p
      variants={fadeIn("","", 0.1,1)}
      className='mt-6 text-justify'
    >
      My Name is DEEPAK KUMAR CHOUHAN. I am from Dhanbad, Jharkhand.I have done B.Tech (CSE) 
      2019 form University College of Engineering & Technology,Vinoba Bhave University,
      Hazaribagh.I am Full Stack Developer with Nextjs,Ts experience.I possess Web Development,
       ReactJS ,NextJS, MERN Stack ,Python & Django and AWS.

    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
        {
          services.map((service,index)=>(
            <ServiceCard key={service.title} index={index} {...service}/>
          ))
        }
    </div>
    </>
  )
}

export default SectionWrapper(About, "about");