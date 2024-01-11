import './Button.css'
import {useState} from "react";


export default function Button({text, onClick}) {


    return (
        <button className='Btn accent' onClick={onClick}>{text}</button>
    )

}
