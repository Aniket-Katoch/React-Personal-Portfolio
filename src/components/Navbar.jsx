import {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { motion } from "motion/react"

const Navbar = () => {

    const [nav,setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <>
    <div className='border border-gray-600 bg-black text-white h-[100px] max-w-[1200px] mx-auto flex justify-between items-center mt-2.5'>

        <h1 className='text-3xl  font-bold  ml-4 '>Aniket Katoch</h1>
        {/* Navbar links with animation */}
        <ul className='hidden md:flex'>
          <motion.li
            className='p-5 font-medium hover:text-amber-300 cursor-pointer'
            whileHover={{ scale: 1.1 }} // Hover animation
            transition={{ type: 'spring', stiffness: 200 }}
          >
            About
          </motion.li>
          <motion.li
            className='p-5 font-medium hover:text-amber-300 cursor-pointer'
            whileHover={{ scale: 1.1 }} // Hover animation
            transition={{ type: 'spring', stiffness: 200 }}
            
          >
            Work
          </motion.li>
          <motion.li
            className='p-5 font-medium hover:text-amber-300 cursor-pointer'
            whileHover={{ scale: 1.1 }} // Hover animation
            transition={{ type: 'spring', stiffness: 200 }}
          >
            Contact
          </motion.li>
        </ul>

        <div onClick={handleNav} className='block md:hidden mr-6'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>

        <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]' }>
            <h1 className='font-bold text-3xl m-4'>Aniket Katoch</h1>
            <ul className='p-8 text-2xl'>
                <motion.li className='p-2 font-medium  hover:text-amber-300 cursor-pointer' 
                whileHover={{ scale: 1.1 }} // Hover animation
                transition={{ type: 'spring', stiffness: 75 }}><a href="#about">About</a></motion.li>
                <motion.li className='p-2 font-medium  hover:text-amber-300 cursor-pointer'
                whileHover={{ scale: 1.1 }} // Hover animation
                transition={{ type: 'spring', stiffness: 75 }}><a href="#work">Work</a></motion.li>
                <motion.li className='p-2 font-medium hover:text-amber-300 cursor-pointer'
                whileHover={{ scale: 1.1 }} // Hover animation
                transition={{ type: 'spring', stiffness: 75 }}><a href="#contact">Contact</a></motion.li>

            </ul>
        </div>

        
    </div>
    </>
  )
}

export default Navbar