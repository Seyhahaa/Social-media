import React from 'react';
import G1 from "../assets/G1.jpg";
import { AiOutlineLinkedin, AiOutlineTwitter, AiOutlineUserAdd } from 'react-icons/ai';
import { MdLocationPin, MdWork } from 'react-icons/md';


type Props = {}

export default function Profile({}: Props) {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg p-5'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                <img src={G1} alt="" className='h-10 w-10 rounded-full object-cover' />
                <div className='ml-5'>
                    <h1 className='dark:text-gray-200'>DoMM</h1>
                    <p className='text-sm'>3000 friends</p>
                </div>
            </div>
            <AiOutlineUserAdd className='text-lg' />
        </div>
        <hr className='my-5' />
        <div className='flex items-center '>
            <MdLocationPin className='text-lg' />
            <p className='ml-5'> Some Place in Cambodia</p>
        </div>
        <div className='flex items-center mt-2 '>
            <MdWork className='text-lg' />
            <p className='ml-5'>Some Degree</p>
        </div>
        <hr className='my-5' />
        <div className='flex justify-between items-center'>
            <p>Who view your profile ?</p>
            <h2>500</h2>
        </div>
        <div className='flex justify-between items-center mt-2'>
            <p>Impress from your friends</p>
            <h2>1000</h2>
        </div>
        <hr className='my-5' />
        <h2>Social Media</h2>
        <div className='flex justify-between mt-5'>
            <div className='flex items-center'>
                <AiOutlineTwitter className='text-lg' />
                <p className='ml-5 font-semibold'>Twitter</p>
            </div>
        </div>
        <div className='flex justify-between mt-5'>
            <div className='flex items-center'>
                <AiOutlineLinkedin className='text-lg' />
                <p className='ml-5 font-semibold'>Linkedin</p>
            </div>
        </div>
    </div>
  )
}