
const Work = () => {
  return (
    <>
    <div className="max-w-[1200px] mx-auto p-5" id="work">
        <div className="pb-8">
            <p className="text-white text-center text-4xl mb-3 font-bold">Work</p>
            <p className="text-white text-center">Here is the list of my projects</p>
        </div>

        <div className="pb-8">
            <p className="text-white  text-2xl mb-3 font-bold ">Portfolio Website</p>
            <span className="text-white italic font-semibold ">Technologies used: HTML, CSS, JavaScript, React JS, Tailwind CSS</span>
            <p className="text-white mt-1.5 ">
            I built a personal portfolio website to showcase my web development skills, projects, and
            achievements. The focus was on creating a clean and intuitive user interface with a mobilefirst responsive design. I also implemented interactive elements using React JS to enhance
            the user experience. The project helped me hone my front-end development skills,
            particularly in creating responsive layouts and optimizing website performance.</p>
        </div>

        <div className="pb-8">
            <p className="text-white  text-2xl mb-3 font-bold ">Blog Website</p>
            <span className="text-white italic font-semibold ">Technologies used: PHP (Laravel), Bootstrap, MySQL </span>
            <p className="text-white mt-1.5">

            I designed and developed a fully functional blog platform that enables users to create, view,
            edit, and delete blog posts. By leveraging Laravel’s MVC architecture and MySQL for data
            storage, I ensured a smooth and scalable experience for users. This project sharpened my
            backend development skills and allowed me to implement CRUD operations efficiently.
            </p>
        </div>

        <div className="pb-8">
            <p className="text-white  text-2xl mb-3 font-bold ">Book Directory Website</p>
            <span className="text-white italic font-semibold ">Technologies used: React JS, Tailwind CSS, Context API </span>
            <p className="text-white mt-1.5">
            

            Developed a book directory website to display a collection of books. Used React Context API
            for state management to handle book data and provide a global state for the app. The project
            uses static data to simulate a real-world app but can be extended to pull data dynamically
            from an API. Worked on the UI using Tailwind CSS, though some parts of the design are still a
            work in progress for full responsiveness.</p>
        </div>





    </div>
    </>
  )
}

export default Work