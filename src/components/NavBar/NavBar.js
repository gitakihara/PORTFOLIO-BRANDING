import React from 'react'
import logo4 from "../../assets/images/logo4.png"
import "./NavBar.css"
import navLinksData from '../../constants/index'
import {Link} from "react-scroll"

const NavBar = () => {
  return (
    <div className='w-full h-24 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
      <div>
        <img src={logo4} alt="logo" className='logo2'/>
      </div>
      <div>
        <ul className='flex items-center gap-10'>
            {
                navLinksData.map(({_id, title, link})=>(
                    <li className=" text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" key={_id}>
                        <Link
                          activeClass= "active"
                          to= {link}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >{title}</Link>
                    </li>
                ))
            }
        </ul>
      </div>
    </div>
  )
}

export default NavBar
