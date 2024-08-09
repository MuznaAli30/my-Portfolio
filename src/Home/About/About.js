import React from 'react'
import Projects from '../../Projects/Projects'
// import my6 from '../../Assets/p2.webp'


export default function About() {
  return (
    <div className='bg-[#cdcbd6]'>
        {/* <Header/> */}
        <section className="text-white body-font">
  <div className="container mx-auto flex flex-col px-5 shaddow-2xl justify-center items-center">
    {/* <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded shaddow-2xl" alt="hero" src={my6}/> */}
    <div className="w-full md:w-2/3 flex flex-col items-center text-center m-8">
      <h1 className="title-font sm:text-4xl text-3xl font-bold text-[#d96846]">About</h1>
      </div>
    </div>
</section>
      <section className="text-[#596235] body-font">
  <div className="container px-5 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <p className="leading-relaxed text-xl">Hello! I’m Muzna Ali, a MERN stack developer and Software Engineering student. I love creating websites that are easy to use and work well. I enjoy finding solutions to problems and working with teams to build projects that make a difference. I'm always ready to learn new things and grow my skills. I'm excited about the chance to work on interesting projects and contribute to something meaningful. Every project I undertake is an opportunity to learn, grow, and expand my skill set, and I am always eager to embrace new technologies and methodologies that can enhance my work.

</p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
    </div>
  </div>
  <Projects/>
</section>
{/* <Footer/> */}
    </div>
  )
}