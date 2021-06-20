import React, { useEffect } from 'react'
import ReactDom from 'react-dom'
import './Background.css'

const portalRoot = document.getElementById("portal-root")


export default function Background({urlImage, children}){

 
  
    return ReactDom.createPortal(
        <div className="ui-background_box" style={{backgroundImage: `url("${urlImage}")` }}> 
            {children}
        </div>,
        portalRoot
    )
}