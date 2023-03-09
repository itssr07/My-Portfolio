import React from "react";

function About() {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black h-full sm:h-screen dark:text-gray-100">
      <section>
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                <h3 className="text-3xl font-semibold">Qualification</h3>
                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
                  Details
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Haldia Institute of Technology{" "}
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                    Dec 2020-Present, Haldia
                  </time>
                  <p className="mt-3">
                    B.TECH Hons. | IT Undergrad | Member of Association For
                    Computing & Machinery
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    D.A.V. Public School
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                    Jul 2016-May 2018, Bokaro Steel City
                  </time>
                  <p className="mt-3">
                    Completed my Intermediate, 79.06% <br />
                    Physics | Chemistry | Mathematics | English | Painting |
                    Physical Education.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    D.A.V. Public School
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                    March 2006-May 2016, Samastipur
                  </time>
                  <p className="mt-3">
                   Completed my Matriculation, 10 cgpa
                  </p>
                </div>
              </div>
            </div>
           
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                <h3 className="text-3xl font-semibold">Work Experience</h3>
                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
                  
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Green Canvas | Web Developer Intern{" "}
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                    June 2022-September 2022
                  </time>
                  <p className="mt-3">
                    Built Website and Landing Pages from Scratch, Deployed.<br/>
                    Added multiple features to the website & improve it.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Silop Smart Automation Technologies | Web Developer Intern
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                    February 2022-May 2022
                  </time>
                  <p className="mt-3">
                    Collect and Analyse data from different stages of production.<br/>
                    Improved interface of their existing websites. <br/>
                    Built landing pages for various products.
                  </p>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
