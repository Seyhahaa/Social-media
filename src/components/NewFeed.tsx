import React from 'react'
import GirlAvatar from '../assets/G2.jpg';
import { AiFillHeart, AiOutlineComment, AiOutlineUserAdd } from 'react-icons/ai';
import { GiRapidshareArrow } from 'react-icons/gi';
type Props = {}

const NewFeed = (props: Props) => {
  return (
    <div className='bg-white dark:bg-gray-800 p-5 rounded-lg mt-5'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                <img src={GirlAvatar} alt=""
                className='h-10 w-10 object-cover rounded-full' />
                <div className='ml-5'>
                    <h2 className='dark:text-gray-200 text-gray-800'>DoMM</h2>
                    <p className='text-sm'>10min ago</p>
                </div>
            </div>
            <AiOutlineUserAdd className='text-3xl text-cyan-800 bg-cyan-200 p-2 rounded-full cursor-pointer' />

        </div>
        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, officiis quidem adipisci est voluptatibus eius consectetur! Magni, ipsa? Ratione, minus.</p>
        <img src={GirlAvatar} className='mt-2 rounded-lg b-[25rem] w-full object-cover' alt="" />
        <div className='flex mt-5 items-center '>
            <AiFillHeart className='cursor-pointer hover:scale-110 transition-all text-lg text-red-500' />
            <AiOutlineComment className='cursor-pointer hover:scale-110 transition-all text-lg ml-2' />
            <GiRapidshareArrow className='cursor-pointer hover:scale-110 transition-all text-lg ml-2' />
        </div>
    </div>
  )
}

export default NewFeed