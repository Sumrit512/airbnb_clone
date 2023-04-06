'use client';
import React from 'react'
import Image from 'next/image';

const Avatar = () => {
return(
<Image 
className="
rounded-full
"
width={10}
height={10}
src='/images/placeholder.jpg'
alt='Avatar'
/>
    )
}

export default Avatar;