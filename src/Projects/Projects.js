import React from 'react';

// Import project images
import cfe from '../Assets/cfe.webp';
import imgTK from '../Assets/imgTK.webp';
import cmps from '../Assets/cmps.webp';
import prkng from '../Assets/prkng.webp';
import  todo  from '../Assets/todo.webp';
// import About from '../Home/About/About';
import { Link } from 'react-router-dom';

export default function Projects() {
  // Array of project objects
  const projects = [
    {
      image: cfe,
      title: 'The Cafe website',
      description: 'Experience a fully responsive UI website designed using HTML and CSS and Java Script',
      link: 'https://muznaali30.github.io/newCafe/'
    },
    {
      image: imgTK,
      title: 'Image Take Tour Website',
      description: 'Explore a front-end UI-based website crafted with HTML, Tailwind CSS, and JavaScript, ensuring seamless responsiveness across devices.',
      link: 'https://muznaali30.github.io/Image-Take-Tour/'
    },
    {
      image: todo,
      title: 'A TODO App',
      description: 'Explore your first React project, a responsive Todo App that marks the beginning of your journey into web development. This CRUD (Create, Read, Update, Delete) application not only manages tasks but also enforces sorting and prevents duplicate entries, all while synchronizing with system time for precision and efficiency.',
      link: 'https://www.loom.com/embed/d87155c8f83949e59e4c21aa9e18d6a1'
    },
    {
      image: cmps,
      title: 'Campus Website',
      description: 'Discover a full-stack CRUD (Create, Read, Update, Delete) website built on the MERN stack (MongoDB, Express.js, React.js, Node.js), complemented by HTML, Tailwind CSS, and JavaScript. This platform facilitates interactions and connections between companies and university students, offering seamless CRUD operations for managing data.',
      link: 'https://www.loom.com/embed/ec6fd2df58a44628a241bbbe5d5782d3?sid=99aec77c-043d-4cec-a320-0debff54be71'
    },
    {
      image: prkng,
      title: 'A Real Time Parking Website ',
      description: 'Get ready for the launch of a real-time CRUD (Create, Read, Update, Delete) website, currently being developed on the MERN stack (MongoDB, Express.js, React.js, Node.js), with HTML, Tailwind CSS, and TypeScript. Stay tuned for an innovative platform that will empower users to book parking spaces in real-time, offering efficient CRUD operations for managing parking availability.',
      link: ''
    }
  ];

  return (
    <>
      {/* <Header /> */}
      <section className="bg-[#cdcbd6]">
        <div className="max-w-screen-xl px-4  mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center ">
            <h2 className="text-5xl font-bold leading-tight tracking-tight sm:text-4xl text-[#d96846]">
              Discover My Projects
            </h2>
            <p className="mt-4 text-base font-normal sm:text-xl text-[#596235] mb-28">
            Explore my portfolio to see the projects I've developed, showcasing my skills and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Map through projects array */}
            {projects.map((project, index) => (
              <div key={index} className="space-y-4">
                <img src={project.image} alt={project.title} className="w-full h-auto rounded-xl" />
                <h3 className="text-2xl font-bold leading-tight text-[#d96846]">
                  {project.title}
                </h3>
                <p className="text-lg font-normal text-[#596235]">
                  {project.description}
                </p>
                <Link to={project.link} title=""
                  className="text-xl text-[#2f3020] bg-primary-700 justify-center hover:bg-[#d96846] inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button">
                  View Project
                  <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      {/* <About/> */}

      </section>
      {/* <Footer /> */}
    </>
  );
}