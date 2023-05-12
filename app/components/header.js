import Image from 'next/image'
import React from 'react'
import "./style.css";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <Image src="/images/logo.png" width={130} height={17}/>
      </div>
    </div>
  )
}
