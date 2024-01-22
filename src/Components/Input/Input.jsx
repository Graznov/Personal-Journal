import styles from './Input.module.css'
import cn from "classnames";
import classNames from "classnames";
import {forwardRef} from "react";

const Input = forwardRef(function Input({ classNames, isValid=true, appearence, ...props }, ref ) {

    return (
        <input { ...props } ref={ref} className={cn(classNames, styles['input'], {
            [styles['invalid']] : !isValid,
            [styles['input-title']] : appearence === 'title'
        })}/>
    )

})


export default Input