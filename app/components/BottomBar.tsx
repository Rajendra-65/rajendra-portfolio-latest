'use client'
import { useRef } from 'react'
import React from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const BottomBar = () => {
    const headingRef1 = useRef()
    const headingRef2 = useRef()
    useGSAP(()=>{
        // @ts-expect-error it is in test
        gsap.from(headingRef1.current,{
            y:50,
            delay:1,
            duration:1,
            opacity:0
        })
    })
    useGSAP(()=>{
        // @ts-expect-error it is in test
        gsap.from(headingRef2.current,{
            y:-20,
            delay:2,
            duration:1,
            opacity:0
        })
    })
    return (
        <div className='bottom-0 px-5 py-5 h-[68px] w-[100%] border bg-gray-950 z-10 fixed'>
            <div className = "flex justify-between">
                <div className=''>
                    <h1 ref={headingRef1} className='text-xl'>2024 @copy alright reserved</h1>
                </div>
                <div className=''>
                    <Link 
                        href="mailto:rajendrbehera9@gmail.com" 
                        target={"_blank"}
                    >
                        <h1 ref={headingRef2} className='text-xl'>Say Hello</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BottomBar