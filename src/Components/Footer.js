import React from 'react';
import mylogo from '../Assets/mylogo.webp';

export default function Footer() {
  return (
    <div>
      <nav className=" bottom-0 left-0 z-50 w-full h-16 bg-[#d96846] border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={mylogo} className="h-8" alt="portfolio Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white hover:text-[#2f3020]">
              Portfolio
            </span>
            <ul className="flex flex-wrap items-center font-medium space-x-4 text-white sm:mt-0 text-xl">
              <li>
                <a href="https://www.linkedin.com/login" className="hover:underline">
                  <i className="fa-brands fa-linkedin hover:text-[#2f3020]"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/MuznaAli30?tab=repositories" className="hover:underline">
                  <i className="fa-brands fa-github hover:text-[#2f3020]"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
