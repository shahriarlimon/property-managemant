import React from 'react';
import property1 from '../../assets/listings/property1.jpeg'
import property2 from '../../assets/listings/property2.jpeg'
import property3 from '../../assets/listings/property3.jpeg'
import property4 from '../../assets/listings/property4.jpeg'
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai'
const LatestListings = () => {
    return (
        <section className="text-black font-Roboto body-font px-5">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className=" text-3xl font-medium title-font font-Roboto  mb-2 text-black">Our Latest Listings</h1>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <div className='relative w-full h-40 mb-6'>
                                <div className='h-full w-full' style={{ backgroundImage: `url(${property1})` }}></div>
                                <div className="absolute inset-0 bg-gray-500 opacity-60 hover:bg-opacity-0 transition-all duration-300 ease-in"></div>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-3">San Francisco</h2>
                            <h3 className="tracking-widest text-black text-xs font-medium title-font">807/5 Howe Street</h3>
                            <p className="tracking-widest text-black text-xs font-medium title-font">$950 p/w</p>

                            <p className="tracking-widest text-black text-xs font-medium title-font">5 bedrooms, 3 bathroom</p>
                            <Link className='flex items-center mt-3' to="/">
                                <p className='text-black tracking-wider font-semibold font-Roboto'>More Info</p>
                                <AiOutlineArrowRight className='ml-3' size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <div className='relative w-full h-40 mb-6'>
                                <div className='h-full w-full' style={{ backgroundImage: `url(${property2})` }}></div>
                                <div className="absolute inset-0 bg-gray-500 opacity-60 hover:bg-opacity-0 transition-all duration-300 ease-in"></div>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-3">San Francisco</h2>
                            <h3 className="tracking-widest text-black text-xs font-medium title-font">807/5 Howe Street</h3>
                            <p className="tracking-widest text-black text-xs font-medium title-font">$950 p/w</p>

                            <p className="tracking-widest text-black text-xs font-medium title-font">5 bedrooms, 2 bathrooms</p>
                            <Link className='flex items-center mt-3' to="/">
                                <p className='text-black tracking-wider font-semibold font-Roboto'>More Info</p>
                                <AiOutlineArrowRight className='ml-3' size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <div className='relative w-full h-40 mb-6'>
                                <div className='h-full w-full' style={{ backgroundImage: `url(${property3})` }}></div>
                                <div className="absolute inset-0 bg-gray-500 opacity-60 hover:bg-opacity-0 transition-all duration-300 ease-in"></div>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-3">San Francisco</h2>
                            <h3 className="tracking-widest text-black text-xs font-medium title-font">807/5 Howe Street</h3>
                            <p className="tracking-widest text-black text-xs font-medium title-font">$950 p/w</p>

                            <p className="tracking-widest text-black text-xs font-medium title-font">5 bedrooms, 3 bathrooms, 3 parking</p>
                            <Link className='flex items-center mt-3' to="/">
                                <p className='text-black tracking-wider font-semibold font-Roboto'>More Info</p>
                                <AiOutlineArrowRight className='ml-3' size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <div className='relative w-full h-40 mb-6'>
                                <div className='h-full w-full' style={{ backgroundImage: `url(${property4})` }}></div>
                                <div className="absolute inset-0 bg-gray-500 opacity-60 hover:bg-opacity-0 transition-all duration-300 ease-in"></div>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-3">San Francisco</h2>
                            <h3 className="tracking-widest text-black text-xs font-medium title-font">807/5 Howe Street</h3>
                            <p className="tracking-widest text-black text-xs font-medium title-font">$950 p/w</p>

                            <p className="tracking-widest text-black text-xs font-medium title-font">5 bedrooms, 3 bathrooms, 3 parking</p>
                            <Link className='flex items-center mt-3' to="/">
                                <p className='text-black tracking-wider font-semibold font-Roboto'>More Info</p>
                                <AiOutlineArrowRight className='ml-3' size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="flex mx-auto mt-16 text-white bg-[#E73336] border-0 py-2 px-8 focus:outline-none shadow-lg hover:bg-[#d03335] rounded text-lg">See More</button>
                </div>
            </div>
        </section>
    )
}

export default LatestListings
