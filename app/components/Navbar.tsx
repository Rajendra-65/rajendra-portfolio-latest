import React from 'react'
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between px-5 py-5 border top-0">
                <div className="flex">
                    <ul className="flex px-2 space-x-4">
                        <li>Home</li>
                        <li>About</li>
                        <li>Web-Technology</li>
                        <li>Data Engineering / Analysis</li>
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
