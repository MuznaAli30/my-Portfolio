import React from 'react';
import cfe from '../Assets/cfe.webp';
import imgTK from '../Assets/imgTK.webp';
import cmps from '../Assets/cmps.webp';
import  todo  from '../Assets/todo.webp';
import { Link } from 'react-router-dom';
import parking1 from '../Assets/parking1.webp';

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
      image: parking1,
      title: 'A Real Time Parking Website ',
      description: 'Explore a real-time CRUD (Create, Read, Update, Delete) website built on the MERN stack (MongoDB, Express.js, React.js, Node.js), with HTML, Tailwind CSS, and TypeScript. This innovative platform allows users to book parking spaces in real-time, offering efficient CRUD operations for managing parking availability.',
      link: 'https://www.loom.com/embed/e8f18d471c7e4f869f9388d10921932b?sid=444c6b25-ed3c-4fd7-a252-c193a30721dd'
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
              <div key={index} className="m-auto space-y-7">
                <img src={project.image} alt={project.title} className="shaddow-2xl w-full h-[40%] rounded-xl" />
                <h3 className="text-2xl font-bold leading-tight text-[#d96846]">
                  {project.title}
                </h3>
                <p className="text-lg font-normal text-[#596235]">
                  {project.description}
                </p>
                <Link to={project.link} title=""
                  className="text-xl text-[#2f3020] bg-primary-700 justify-center hover:bg-[#d96846] inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button">
                  View Project<i class="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}