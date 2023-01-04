import React from 'react'
import Image from 'next/image'

export default function Header() {
  return <div>
    {/*left */}

    <div className="flex items-center justify-between max-w-6xl">
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
            <Image src="/images/instagram-text-logo.png"
            fill="true"
            className="object-contain"          
            
            />
        </div>
        <div className="cursor-pointer h-10 w-10 relative  lg:hidden">
            <Image src="/images/instagram-icon.png"
            fill="true"
            className="object-contain"          
            
            />
        </div>

        <h1>Right Side </h1>
    </div>

      {/* middle */}

        {/*right */}
 </div> ;
}
