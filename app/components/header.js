import Image from 'next/image'
import React from 'react'
import "./style.css";
import Link from 'next/link';

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="left">
          <Image src="/images/logo.png" width={130} height={17}/>
          <ul className="mainmenu">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Textbook</Link></li>
            <li><Link href="/">Statistics</Link></li>
            <li><Link href="/">Games</Link></li>
          </ul>
        </div>
        <div className="right">
          kanan
        </div>
      </div>
    </div>
  )
}
