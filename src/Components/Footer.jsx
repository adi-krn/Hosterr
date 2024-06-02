import React from 'react'

const Footer = () => {
  return (
    <div className='md:flex md:justify-between md:items-center'>
      <ul className="flex font-lato gap-5 text-gray-600 pb-8 lg:px-20">
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href=""> Instagram </a>
        </li>
        <li>
          <a href="">Twitter </a>{" "}
        </li>
      </ul>

    <div className='flex gap-4 pb-5 lg:px-10'>
      <img src="../assets/Help-Avatar.svg" alt="help" />
      <div>
        <p className='font-playfair font-semibold'>Have any questions?</p>
        <a className='font-lato font-bold' href="#">Talk to a Specialist</a>
      </div>

    </div>

    </div>
  );
}

export default Footer