'use client';
// I no longer have to define the components in the components, i can define them whereever i want to,
// just because this structure is familiar, we are gonna use the traditional way.

import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu"
import Search from "./Search";

const Navbar = () => {
    return( 
        <div className="
        fixed w-full bg-white z-10 shadow-sm   ">
            <div className="
      py-4 
      border-b-[1px]
            ">
                 <Container>
                   <div 
                   className="
                   flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
                   ">
                         <Logo/>
                         <Search /> 
                         <UserMenu />
                   </div>
                 </Container>
            </div>
         
        </div>
    )
}

export default Navbar;