'use client'

import React from "react";


interface ContainerProps {
children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return(
    <div className="
    max-w-[2520px]
    mx-auto
    xl:px-20 
    md:px-10
    sm:px-2
    px-4
    ">
      {children}
    </div>
    )
}

export default Container;


// by default all the files in the app folder are the server side files, but here the container is gonna be a client file and this can create a hydration problem if i didn't mention that this is a client file