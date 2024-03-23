'use client'

import { useEffect, useRef, useState } from "react";


export default function IntersectionComponent({ children }:any){
    const ref = useRef(null);
    const [isIntersection, setIsIntersection] = useState(false);

    
    function onScroling(){
        const observer = new IntersectionObserver( ( entries ) =>{
            entries.forEach( ( entry ) =>{
              if( entry.isIntersecting ){
                setIsIntersection(entry.isIntersecting)
              }
            });
          });
          
          if(ref.current){
            observer.observe( ref.current )
            console.log(ref.current, 'DIV ATUAL')
          }
        
          return () => {
            if(ref.current) {
              observer.unobserve( ref.current )
            }
          };
    }
    
    useEffect(() => {
        onScroling()
      },[]);



    return(
        <div
            style={ isIntersection ? { filter: 'blur(0px)'} : {filter: 'blur(15px)'} } 
            ref={ref}
        >
            { children }
        </div>
    );
}

