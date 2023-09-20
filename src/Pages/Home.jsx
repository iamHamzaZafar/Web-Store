import React from 'react'
import { useEffect, useState } from 'react'



const Home = () => {

    const [products, SetProducts] = useState([])




    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        const response = await fetch("https://dummyjson.com/products")
        const data = await response.json();
        // console.log(data.products)

        SetProducts(data.products);
        // console.log(data)
    }



    return (
        <div className=' lg:w-[70vw] m-auto grid  grid-cols-1 lg:grid-cols-3 gap-10 justify-center items-center mb-10'>

            {

                products.map((product) => {
                    return (



                        <div className='bg-gray-100  mx-auto w-[80vw] lg:w-[20vw] rounded-md overflow-hidden shadow-md'>
                            <img src={product.thumbnail} className='rounded-md hover:scale-105 transition-all w-full h-[200px] ' alt="" />
                            <div className=' p-2'>

                                <h2 className='font-bold uppercase text-gray-800 '>{product.title}</h2>
                                <p className=' text-sm'>{product.description}</p>
                                <div className=' flex justify-between items-center my-3'>

                                    <span className=' font-bold text-gray-800'>Price ${product.price}</span>
                                    <button className='bg-gray-700 font-bold text-white px-3 rounded-md text hover:bg-white hover:text-black border-2 border-transparent hover:border-black ' >Buy</button>
                                </div>

                            </div>
                        </div>


                    )
                })


            }



        </div>
    )
}

export default Home