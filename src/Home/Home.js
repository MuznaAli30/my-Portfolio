import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Projects from '../Projects/Projects';
import Hero from '../Assets/hero.webp';

export default function Home() {

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  }

  return (
    <div className='bg-[#cdcbd6] h-full flex flex-col items-center'>
      <section className="mt-28 max-lg:m-0 max-sm:mb-28 max-sm:mt-12 space-y-28">
        <div className="grid max-w-screen-xl px-4 mx-auto gap-8 lg:py-16 lg:grid-cols-2 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="mb-4 text-4xl font-extrabold md:text-5xl xl:text-6xl max-sm:text-3xl text-[#d96846]">
              Hi! I am Muzna Ali
            </h1>
            <span className='font-extrabold md:text-5xl xl:text-6xl max-sm:text-3xl sm:text-3xl text-[#596235]'>
              <Typewriter
                words={['Software Engineer', 'Web Developer']}
                loop={5}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
              />
            </span>
          </div>
          <div className="flex justify-center">
            <img
              className="m-auto rounded-full w-[70%] h-[70%] max-sm:w-[50%] max-sm:h-[50%]"
              src={Hero}
              alt="mockup"
            />
          </div>
        </div>
        <Projects />
      </section>
    </div>
  );
}
