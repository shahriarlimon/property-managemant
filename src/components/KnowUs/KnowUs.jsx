import React from 'react'

const KnowUs = () => {
    return (
        <div className="container max-w-[1200px] mx-auto px-4 my-16">
            <h2 className="text-3xl font-Roboto font-bold mb-4 text-center mt-12">Get to Know Us</h2>
            <div className='flex items-center justify-center'>
                <div className="flex items-center justify-center">
                    <div className="w-1/2 p-4">
                        <h2 className='text-sm tracking-wide font-semibold font-Roboto'>No Fees</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, consequuntur.</p>
                    </div>
                    <div className="w-1/2 p-4">
                        <h2 className='text-sm tracking-wide font-semibold font-Roboto'>Community Involvement</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, eius.</p>
                    </div>
                </div>
            </div>
            <div>
                <button className="flex mx-auto mt-16 text-white bg-[#E73336] border-0 py-2 shadow-lg px-8 focus:outline-none hover:bg-[#c42528] rounded text-lg">Contact Us</button>
            </div>
        </div>
    )
}

export default KnowUs
