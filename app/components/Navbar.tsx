'use client'
import React,{useRef} from 'react'
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

const Navbar = () => {
    const ulRef = useRef()
    const ulRef1 = useRef()
    useGSAP(()=>{
        // @ts-expect-error it is in test
        gsap.from(ulRef.current.children,{
            y:-25,
            duration:1,
            opacity:0,
            delay:1,
            stagger:0.3
        })
    })
    useGSAP(()=>{
        // @ts-expect-error it is in test
        gsap.from(ulRef1.current.children,{
            y:25,
            duration:1,
            opacity:0,
            delay:2,
            stagger:0.3
        })
    })
    return (
        <>
            <div className="flex justify-between px-5 py-5 border top-0 bg-gray-950 z-10">
                <div className="flex">
                    <ul ref={ulRef} className="flex px-2 space-x-4">
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/about"}>About</Link></li>
                        <li><Link href={"/web"}>Web-Technology</Link></li>
                        <li><Link href={"de"}>Data Engineering / Analysis</Link></li>
                    </ul>
                </div>
                <div className="flex">
                    <ul ref={ulRef1} className="flex px-2 space-x-4">
                        <li className="cursor-pointer">
                            <Link className="underline" href={"https://github.com/Rajendra-65"}>
                                <FaGithub className="text-2xl" />
                            </Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link
                                className="underline"
                                href={"https://www.linkedin.com/in/rajendrbehera/"}
                            >
                                <FaLinkedin className="text-2xl" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
