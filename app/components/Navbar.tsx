import React from 'react'
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between px-5 py-5 border top-0 bg-gray-950 z-10">
                <div className="flex">
                    <ul className="flex px-2 space-x-4">
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/about"}>About</Link></li>
                        <li><Link href={"/web"}>Web-Technology</Link></li>
                        <li><Link href={"de"}>Data Engineering / Analysis</Link></li>
                    </ul>
                </div>
                <div className="flex">
                    <ul className="flex px-2 space-x-4">
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
