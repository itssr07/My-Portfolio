import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div>
      <div className="bg-gradient-to-b from-gray-800 to-black h-screen">
        <section class="">
          <div class="text-center  text-purple-900 py-24 px-6">
            <h1 class="text-5xl md:text-6xl  xl:text-7xl font-bold tracking-tight mb-12">
              Hello I'm Shitanshu Ranjan <br />
              <span class="text-purple-900 text-5xl">
                @ MERN Stack Developer
              </span>
            </h1>
            <a
              class="inline-block px-3 py-3 mr-4 bg-blue-600 rounded-full text-white font-medium text-base leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              href="#!"
              role="button"
            >
              <FaFacebook />
            </a>
            <a
              class="inline-block px-3 py-3 mr-4 bg-gray-300 rounded-full text-black font-medium text-base leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              href="#!"
              role="button"
            >
              <FaGithub />
            </a>
            <a
              class="inline-block px-3 py-3 mr-4 bg-pink-600 text-white rounded-full font-medium text-base leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              href="#!"
              role="button"
            >
              <FaInstagram />
            </a>
            <a
              class="inline-block px-3 py-3  bg-blue-600 rounded-full text-white font-medium text-base leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              href="#!"
              role="button"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="">
            <img
              src="/shit.png"
              className="w-96  mx-auto rounded-full opacity-60 hover:bg-orange-600 bg-gray-600 h-96"
            />
          </div>
        </section>
      </div>
      
    </div>
  );
}

export default Home;
