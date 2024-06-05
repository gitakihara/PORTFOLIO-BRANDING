import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import {FaFacebookF} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa"

const Features = () => {
  const[text] = useTypewriter({
    words: ["Web Developer.","Data Scientist.","Music Trainer.", "UI/UX Designer.","Backend Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000
  });
  return (
    <section  className='w-full  py-20  h-[800px] pb-20  items-center border-b-[1px] font-titleFont boarder-b-white'>
        <div className='w-1/2 flex flex-col gap-10' > 
            <div className='flex flex-col gap-5'>
            <h4 className='text-lg font-normal'>
              WELCOME TO MY CREATIVE WORLD
            </h4>
            <h1 className='text-6xl font-bold text-white'>
              
              Hi, I'm {""}
              <span className='text-designColor capitalize'> Gitau Kihara</span>

            </h1>
            <h2 className='text-4xl  font-bold text-white' >
              a <span>{text}</span>
              <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor='#ff014f'
            />
            </h2>
          

            <p className='text-base font-bodyFont leading-6 tracking-wide'>
              I'm Nairobi Based Data Scientist and a Software Developer with a variety
              of skills in Python, JavaScript, CSS, R and React which have become widely used 
              in the job market today.
            </p>
            
          </div>
          <div>
            <h2 className='text-base uppercase font-titleFont mb-4'>
              Find me in
            </h2>

            <div className='flex gap-4'>
              <span className='bannerIcon'>
                <FaFacebookF />
              </span>
              <span className='bannerIcon'>
                <FaGithub />
              </span>
              <span className='bannerIcon'>
                <FaLinkedinIn />
              </span>
            </div>
          </div>
          
        </div>
    </section>
  )
}

export default Features
 