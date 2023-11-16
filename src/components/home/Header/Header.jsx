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
    <>
       

        <div className={color? "header header-bg " : "header"}>

            {/* <h1 className="heading">NobleTec Innovations</h1>   */}
            <img  src={FooterBG} className="logo" alt="logo tailus" />

                <div className={color? "nav-bar navbar-bg " : "nav-bar"}>  
                    <ul className={Mobile ? "nav-links-mobile" : "nav-menu"} onClick={() => setMobile(false)}>
                        
                        <li class="block h-16 leading-[4rem] border-b-2 border-transparent hover:text-amber-500 hover:border-current">
                            <Link to="/">Home</Link>
                        </li>
                        {/* <li>
                        <Link to="/products">Products</Link>
                        </li> */}
                        <li class="block h-16 leading-[4rem] border-b-2 border-transparent hover:text-amber-500 hover:border-current">
                        <Menu as="div" className="relative inline-block text-left">
    <div >
      <Menu.Button  className="inline-flex justify-center px-4 py-2 font-medium text-2xl">
        <Link to="/products">Products</Link> 
        <ChevronDownIcon className="mt-3 -mr-2 -ml-2 h-8 w-8" aria-hidden="true" fill="#f8b328" />
      </Menu.Button>
    </div>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="origin-top-right  absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
        <div className="py-2">
          <Menu.Item>
            {({ active }) => (
              <a
                href="/products"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-lg'
                )}
              >
                MedBook
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="/products"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-lg'
                )}
              >
                Bill Book
              </a>
            )}
          </Menu.Item>
        
        {/* <div className="py-1"> */}
          <Menu.Item>
            {({ active }) => (
              <a
                href="/products"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-lg'
                )}
              >
                Poll App
              </a>
            )}
          </Menu.Item>
          </div>
          {/* <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
              >
                Move
              </a>
            )}
          </Menu.Item> */}
        {/* </div>
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
              >
                Share
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
              >
                Add to favorites
              </a>
            )}
          </Menu.Item>
        </div> */}
        {/* <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
              >
                Delete
              </a>
            )}
          </Menu.Item>
        </div> */}
      </Menu.Items>
    </Transition>
  </Menu>
                        </li>  
                        <li class="block h-16 leading-[4rem] border-b-2 border-transparent hover:text-amber-500 hover:border-current" >
                            <Link to="/service">Services </Link>     
                        </li >
                        <li class="block h-16 leading-[4rem] border-b-2 border-transparent hover:text-amber-500 hover:border-current">
                            <Link to="/about">About</Link>
                        </li>
                        <li class="block h-16 leading-[4rem] border-b-2 border-transparent hover:text-amber-500 hover:border-current">
                            <Link to="/contact">Contact</Link>
                        </li>
                        {/* <li>
                            <Link to="/technology">Technologies</Link>
                        </li> */}
                              
                    </ul>

                    <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}> 
                        {Mobile? <ImCross/> : <FaBars/>} 
                    </button>
                </div>  
        </div>
    </>
  )
}

export default Header;