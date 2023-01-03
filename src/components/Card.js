import React from 'react'
import image1 from '../images/image1.png'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs';
import {SiLeetcode} from 'react-icons/si'
import { FaRegEnvelope } from 'react-icons/fa';
function Card() {
  return (
    <div className='w-full'>
        <div className='flex flex-col justify-center max-w-xs mx-auto bg-white shadow-2xl rounded-xl p-5'>
            <div className=''>
            <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" src={image1} alt="photo" />
            </div>
            <div className="text-center mt-5">
                             <p className='text-xl sm:text-2xl font-semibold text-gray-900'>
                             Harshit Singh
                             </p>
                             <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-4'>
                             Frontend Developer/Programmer 
                            </p>
               <div className="flex align-center justify-center mt-4">
                  <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="">
                   <FaGithub />
                 <span class="sr-only">Github</span>
                  </a>
                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-yellow-300 hover:bg-yellow-300 rounded-full hover:text-white transition-colors duration-300" href="">
                   <SiLeetcode />
                  <span class="sr-only"></span>
                 </a>
             <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="">
                   <BsLinkedin/>
                  <span class="sr-only">Linkedin</span>  
            </a> 
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="">
              <FaRegEnvelope />
              <span class="sr-only">Email</span>  
            </a>
          </div>
          </div>
          </div>
    </div>
  )
}

export default Card