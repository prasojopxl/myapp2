import Link from 'next/link'
import React from 'react'
import { FaGithubAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className="top">
                <div className="item">
                    <ul className="footmenu">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/games">Games</Link></li>
                    </ul>
                </div>                
                <div className="item">
                    <ul className="footmenu">
                        <li><Link href="/">Alex</Link></li>
                        <li><Link href="/about">Gabriel</Link></li>
                        <li><Link href="/products">Marcus</Link></li>
                    </ul>
                </div>                
            </div>
            <div className="bottom">
                <div className="item">
                    <Link href="/"><FaGithubAlt/></Link>
                    <Link href="/"><FaGithubAlt/></Link>
                    <Link href="/"><FaGithubAlt/></Link>
                </div>
                <div className="item">
                <div className="copyright">©2021 GlobalTalk. Project for GlobalTalk.</div> 
                </div>
            </div>
        </div>
    </div>
  )
}
