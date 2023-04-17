"use client";
import React from 'react'
import Image from 'next/image';

interface AvatarProps{
    src : string | null | undefined,

}

const Avatar: React.FC<AvatarProps> = ({
    src
}) => {
return(
        <Image 
        className="
        rounded-full
        "
        width={10}
        height={10}
        src={src || '/images/placeholder.jpg'}
        alt='Avatar'
        />
    )
}

export default Avatar;