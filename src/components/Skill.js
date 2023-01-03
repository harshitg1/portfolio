import React from 'react'
import {FaReact} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai'

function Skill() {
  return (
    <div className='max-w-4xl mx-auto justify-center py-12' id="tech">
         <p className="text-2xl text-black  md:text-3xl font-bold text-center pt-4">
          Tech I Use 
        </p>
    <div className = "flex flex-wrap justify-center pt-2">
             <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
             <FaReact color="#2196f3" className="mx-auto text-4xl" />
              <p className="mt-6 text-xl font-semibold text-center">
               React
              </p>
            </div>
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
             <AiFillHtml5 color="#FDA766" className="mx-auto text-4xl" />
              <p className="mt-6 text-xl font-semibold text-center">
               Html
              </p>
            </div>
          
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
             <SiJavascript color="#f7df1e" className="mx-auto text-4xl" />
              <p className="mt-6 text-xl font-semibold text-center">
               Javascript
              </p>
            </div>
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
             <SiTailwindcss color="#2196f3" className="mx-auto text-4xl" />
              <p className="mt-6 text-xl font-semibold text-center">
               tailwindcss
              </p>
            </div>


    </div>


     
    </div>
  )
}

export default Skill