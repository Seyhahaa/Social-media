import React from 'react'
import Cellcard from '../assets/Cellcard.jpeg';

type Props = {}

function Sponser({}: Props) {
  return (
    <div className='bg-white dark:bg-gray-800 p-5 rounded-lg '>
        <h2>Sponsor</h2>
        <img src={Cellcard} className='h-40 object-cover rounded-lg mt-2' />
        <p className='mt-2 font-semibold'>Cellcard Play</p>
        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, tenetur atque reiciendis error dolorem excepturi vero animi quisquam consequuntur voluptas?</p>
    </div>
  )
}

export default Sponser