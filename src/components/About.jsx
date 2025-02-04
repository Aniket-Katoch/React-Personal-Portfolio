import aboutme from '../assets/aboutme.png'


const About = () => {
  return (
    <>
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
        <div className="md:grid md:grid-cols-2 sm:py-16">
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
                <div className="my-auto mx-6">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                    As a passionate and motivated web development enthusiast, I am eager to apply my knowledge of HTML, CSS, JavaScript, React JS, and other web technologies to build dynamic and responsive web applications. I am looking for an opportunity to grow as a web developer and contribute my skills to a team in a professional setting.
                    </p>
                </div>
            </div>

            <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutme} alt="" />

        </div>

    </div>
    </>
  )
}

export default About