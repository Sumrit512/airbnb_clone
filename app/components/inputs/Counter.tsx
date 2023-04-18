'use client';
import { Value } from "@prisma/client/runtime";
import React, { useCallback } from "react";

interface CounterProps {
    title: string;
    subtitle: string;
    value: number;
    onChange: (Value: number) => void
}


const Counter: React.FC<CounterProps>= ({
    title,
    subtitle,
    value,
    onChange
}) => {


const onAdd = useCallback(() => {
onChange(value + 1)
}, [value, onChange]
)

const onReduce = useCallback(() => {
onChange(value - 1)

}, [value, onChange])

return(
        <div>
                
        </div>
)
}

export default Counter;