import React from "react";


function Portfolio() {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            MY PROJECTS
          </h1>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
            <a href="https://song-cjpv.onrender.com/">
          <div
              class="flex items-end overflow-hidden shadow-orange-500 shadow-md hover:scale-105 duration-500 bg-cover rounded-lg h-96"
              style={{ backgroundImage:
                "url('https://serving.photos.photobox.com/42094905ef00e4ac5174c14db687d21bbcb4e275a9fa21d5b18e4e97162f14c6e7cbd7d6.jpg')",
              }
              }
              
            > 
            
              <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                  SongList Using Shazam Api
                </h2>
                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                  <a href="https://github.com/itssr07/SongList">Demo & Code</a>
                </p>
              </div>
            </div></a>

            <div
              class="flex items-end overflow-hidden shadow-orange-500 shadow-md hover:scale-105 duration-500 bg-cover rounded-lg h-96"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')",
              }}
            >
              <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                  Not Implemented
                </h2>
                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                  .......
                </p>
              </div>
            </div>

            <div
              class="flex items-end overflow-hidden shadow-orange-500 shadow-md hover:scale-105 duration-500 bg-cover rounded-lg h-96"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
              }}
            >
              <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                Not Implemented
                </h2>
                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                .......
                </p>
              </div>
            </div>

            <div
              class="flex items-end overflow-hidden shadow-orange-500 shadow-md hover:scale-105 duration-500 bg-cover rounded-lg h-96"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
              }}
            >
              <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                Not Implemented
                </h2>
                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                .......
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
