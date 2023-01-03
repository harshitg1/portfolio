import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs';
import {SiLeetcode} from 'react-icons/si'
import { FaRegEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <div className="py-5 border-t-3/2">
          <div className="flex align-center justify-center mt-4">
                  <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/harshitg1">
                   <FaGithub />
                 <span class="sr-only">Github</span>
                  </a>
                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-yellow-300 hover:bg-yellow-300 rounded-full hover:text-white transition-colors duration-300" href="https://leetcode.com/harshit04/">
                   <SiLeetcode />
                  <span class="sr-only"></span>
                 </a>
             <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/harshit-singh-6985701ba">
                   <BsLinkedin/>
                  <span class="sr-only">Linkedin</span>  
            </a> 
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="">
              <FaRegEnvelope />
              <span class="sr-only">Email</span>  
            </a>
          </div>
    <div className="flex align-center justify-center mt-4">
      <p className="text-black mb-4">
          Made with <span className = "mr-2" role="img" aria-label="heart">❤️</span>by<a className="text-green-900 hover:underline" href=""> Harshit Singh</a>
      </p>
      </div>
</div>
  )
}

export default Footer