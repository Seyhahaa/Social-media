import React, { useEffect, useState } from 'react'
import { AiFillMessage } from 'react-icons/ai';
import { BsSearch,BsFillMoonFill, BsFillQuestionCircleFill,BsFillSunFill } from "react-icons/bs";
import { MdNotificationsActive } from 'react-icons/md';

interface Props  {

}

function Header({}: Props) {

    const [currentTheme,setCurrentTheme] = useState("")

    useEffect(()=>{
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
    },[]);

    const changeTheme = (theme:string) => {
        if(theme=="light") {
            localStorage.theme="light";
            document.documentElement.classList.remove('dark')
            setCurrentTheme("light");
        }else{
            localStorage.theme="dark";
            document.documentElement.classList.add('dark')
            setCurrentTheme("dark");
        }
    }

  return (
    <div className='bg-white fixed left-0 top-0 w-full'>
        <div className="container mx-auto h-[10vh] flex justify-between">
            <div className='flex items-center'>
                <h1 className='text-lg font-bold lg:text-2xl text-cyan-400'>MyMedia</h1>
                <div className='flex items-center'>
                    <input 
                    type="text" placeholder='Search...'
                    className='bg-gray-200 ml-5 rounded-lg px-4 py-1 hidden md:block' />
                    <BsSearch className='ml-5 md:-ml-7 text-lg' />
                </div>
            </div>
            <ul className='flex items-center'>
                <li className='ml-2 md:ml-5'>
                    {
                        currentTheme === "dark" ? (
                            <BsFillSunFill onClick={()=> changeTheme("light")} 
                            className='cursor-pointer text-lg hover:text-black hover:scale-110 transition-all dark:text-gray-200' />
                        ) : (
                            <BsFillMoonFill onClick={()=> changeTheme("dark")} 
                            className='cursor-pointer text-lg hover:text-black hover:scale-110 transition-all dark:text-gray-200' />
                        )
                    }
                </li>
                <li className='ml-2 md:ml-5'>
                    <AiFillMessage className='cursor-pointer text-lg hover:text-black hover:scale-110 transition-all dark:text-gray-200' />
                </li>
                <li className='ml-2 md:ml-5'>
                    <MdNotificationsActive className='cursor-pointer text-lg hover:text-black hover:scale-110 transition-all dark:text-gray-200' />
                </li>
                <li className='ml-2 md:ml-5'>
                    <BsFillQuestionCircleFill className='cursor-pointer text-lg hover:text-black hover:scale-110 transition-all dark:text-gray-200' />
                </li>
                <li className='ml-2 md:ml-5'>
                    <button>DoMM</button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header;