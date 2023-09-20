import React from 'react'

const Navbar = () => {


    return (
        <nav className='flex justify-evenly items-center shadow-md py-4 mb-5'>
            <h3 className='font-extrabold text-2xl'>Project1</h3>
            <div>
                <input

                    className='outline-none border-2 px-3 py-1 rounded-md w-[40vw] hover:border-purple-300'
                    type="search" name="" id="" placeholder='Search Here...' />
                <button

                    className='px-3 py-1 text-white bg-gray-500 rounded-md ml-2  hover:bg-purple-300'>Search</button>
            </div>
            <ul className='flex gap-5 text-xl font-bold cursor-pointer'>
                <li>Home</li>

                <li>Cart</li>
            </ul>
        </nav>
    )
}

export default Navbar