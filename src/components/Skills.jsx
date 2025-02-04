// import React from 'react'
// import html from '../assets/html.png'
// import css from '../assets/css.png'
// import js from '../assets/js.png'
// import bootstrap from '../assets/bootstrap.jpeg'
// import laravel from '../assets/laravel.png'
// import react from '../assets/react.png'
// import tailwind from '../assets/tailwind.png'
// import gsap from '../assets/gsap.png'
// import mysql from '../assets/mysql.png'
// import mongodb from '../assets/mongodb.jpeg'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";




const Skills = () => {
  return (
    <>
    <div className='border border-gray-600 bg-black font-bold text-white md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center'>
        <h2 className='text-2xl md:text-4xl font-bold m-4'> My <br /> Tech <br /> Stack</h2>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <FaHtml5 className="text-6xl"/>
            <p className='mt-2'>HTML</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <FaCss3Alt className="text-6xl" />
            <p className='mt-2'>CSS</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <FaJs className="text-6xl" />
            <p className='mt-2'>JS</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <FaReact className="text-6xl" />
            <p className='mt-2'>REACT</p>
        </div>

        {/* <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <FaLaravel  className="text-6xl"/>
            <p className='mt-2'>LARAVEL</p>
        </div> */}

        {/* <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <FaBootstrap className="text-6xl" />
            <p className='mt-2'>BOOTSTRAP</p>
        </div> */}

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <RiTailwindCssFill className="text-6xl" />
            <p className='mt-2'>TAILWIND</p>
        </div>

        

        {/* <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <SiMysql className="text-6xl" />
            <p className='mt-2'>MYSQL</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <SiMongodb className="text-6xl" />
            <p className='mt-2'>MONGODB</p>
        </div> */}
    </div>
    </>
  )
}

export default Skills