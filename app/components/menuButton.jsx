import React from 'react'

const menuButton = () => {
  return (
    <div className='font-mono flex justify-center items-center mt-8'>
      <div className='flex flex-row justify-between space-x-4 p-4'></div>
        <ul className='flex justify-between space-x-4'>
         <li className='flex'>
          <p>Time :</p>
          <span><b>60</b>s</span>
         </li>
         <li className='flex'>
          <p>WPM:</p>
          <span>0</span>
         </li>
         <li className='flex'>
          <p>CPM:</p>
          <span>0</span>
         </li>
        </ul>
        <button className='btn border-2 border-primaryColor text-textDark ml-4 hover:bg-primaryColor'>Try Again</button>
    </div>
  )
}

export default menuButton
