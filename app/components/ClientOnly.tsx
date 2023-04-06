"use Client";
import React, { useEffect, useState } from "react";

interface ClientOnlyProps{
children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
}) => {
 const [hasMounted, setHasMounted] = useState(false)

useEffect(() => {

setHasMounted(true)

},[])
if(!hasMounted) {
    return null
}

 return(
    <>
 {children}
    </>
)
}

export default ClientOnly;

// this component will reslove the hydration issue, we just need to wrap the client component, this will work for both the production and development;