import React from "react"
import "./Display.css"

export default function Display(props){
    return(
        <div>
            <input type="text" className="display" value={props.value} readOnly/>
        </div>
    )
}