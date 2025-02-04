// import React from 'react'
import { TypeAnimation } from "react-type-animation"
import personal_pic from '../assets/personal_pic.jpg'

const Hero = () => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px]
    mx-auto py-8 bg-black md:h-[70vh]">
        <div className="my-auto mx-aut w-[250px] h-auto lg:w-[400px]">

                <img className="rounded-xl" src={personal_pic} alt="hero image"/>
        </div>

        <div className="col-span-2 px-5">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
            <span>I'm a</span> <br />
            <TypeAnimation sequence={[
                "Frontend Dev",
                1000,
                "Webdesigner",
                1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            ></TypeAnimation>
            </h1>

            <p className="text-white sm:text-lg my-6 lg:text-xl">My name is Aniket Katoch and I’m a passionate web development enthusiast, eager to dive into the world of frontend development. Although I’m just starting my journey, I’ve been honing my skills in HTML, CSS, and JavaScript, and I’m excited to build meaningful and interactive web experiences. I’m always learning and looking forward to growing in the tech industry.</p>

            <div className="my-8">
            <a href="/" className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-amber-600 text-white hover:border-none">
            Download CV</a>
                <a href="#contact" className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-amber-600 text-white hover:border-none">
                Contact</a>
            </div>

        </div>

    </div>
    </>
  )
}

export default Hero