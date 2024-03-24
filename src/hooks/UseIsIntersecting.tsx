'use client'

import { useEffect, useRef, useState } from "react";

interface PropsHook{
    
        root: Element | Document | null | undefined,
        rootMargin: string,
        threshold: number
    
}

export function UseUsIntersectingObserver(options:PropsHook){
    const ref = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() =>{
        const observer = new IntersectionObserver( ([entry]) =>{
            setIsIntersecting(entry.isIntersecting);
        }, options);

        if(ref.current){
            observer.observe(ref.current)
        }

        return () => {
            if(ref.current){
                observer.unobserve(ref.current)
            }
        }
    },[ref, options])

    return [ref, isIntersecting]
}