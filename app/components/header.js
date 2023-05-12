import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div>
      <Image src="/images/cover.png" width={200} height={200}/>
      {/* <img src="/cover.png" width={100} height={100}/> */}
    </div>
  )
}
