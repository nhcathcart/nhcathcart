import React, { useEffect } from "react";
import Vivus, { EASE_IN } from "vivus"
export function Logo() {
  
  useEffect(()=>{
    new Vivus('logo', {duration: 600 , file: '/media/logo.svg'})
  }, [])
  return (
    <div id={"logo"}/>
  );
}
