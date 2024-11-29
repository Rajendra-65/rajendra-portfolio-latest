import React from 'react'
import Link from 'next/link'

const BottomBar = () => {
    return (
        <div className='bottom-0 px-5 py-5 h-[68px] w-[100%] border bg-gray-950 z-10 fixed'>
            <div className = "flex justify-between">
                <div className=''>
                    <h1 className='text-xl'>2024 @copy alright reserved</h1>
                </div>
                <div className=''>
                    <Link 
                        href="mailto:rajendrbehera9@gmail.com" 
                        target={"_blank"}
                    >
                        <h1 className='text-xl'>Say Hello</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BottomBar