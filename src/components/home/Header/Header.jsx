import React, { useState } from 'react';
import "./Header.css";
import Logo from "../../../assets/NobleNavpng.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import FooterBG  from "../../../assets/NobleTecVector4.png"
import { FaBars } from 'react-icons/fa';
import {ImCross} from 'react-icons/im'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Header = () => {
    
   // const [sidebar, setSidebar] = useState(false)

    const [color, setcolor] = useState (false);
    const changeColor = () => {
        if (window.scrollY >= 1) {
            setcolor(true);
        } else {
            setcolor (false);
        }
    };
    
    const [Mobile, setMobile] = useState(false)

    window.addEventListener("scroll", changeColor);

  return (
        <div className={color? "header header-bg " : "header"}>
            <img  src={FooterBG} className="logo" alt="logo tailus" />
                <div className={color? "nav-bar navbar-bg " : "nav-bar"}>  
                    <ul className={Mobile ? "nav-links-mobile" : "nav-menu"} onClick={() => setMobile(false)}>
                        
                        <li class="block h-16 leading-[4rem] border-b-2 border-transparent hover:text-amber-500 hover:border-current">
                            <Link to="/">Home</Link>
                        </li>
                        <li class="block h-16 leading-[4rem] border-b-2 border-transparent hover:text-amber-500 hover:border-current" >
                            <Link to="/products">Products </Link>     
                        </li >
                        <li class="block h-16 leading-[4rem] border-b-2 border-transparent hover:text-amber-500 hover:border-current" >
                            <Link to="/service">Services </Link>     
                        </li >
                        <li class="block h-16 leading-[4rem] border-b-2 border-transparent hover:text-amber-500 hover:border-current">
                            <Link to="/about">About</Link>
                        </li>
                        <li class="block h-16 leading-[4rem] border-b-2 border-transparent hover:text-amber-500 hover:border-current">
                            <Link to="/contact">Contact</Link>
                        </li>    
                    </ul>

                    <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}> 
                        {Mobile? <ImCross/> : <FaBars/>} 
                    </button>
                </div>  
        </div>
  )
}

export default Header;