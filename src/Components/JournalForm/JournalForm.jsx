import styles from './JournalForm.module.css'
import Button from "../Button/Button.jsx";
import {useEffect, useReducer } from "react";
import cn from "classnames";
import {formReducer, INITIAL_STATE} from "./JournalForm.state.js";

export default function JournalForm({onSubmit}) {

    const [fotmState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
    const { isValid, isFormReadyToSubmit, values } = fotmState

    useEffect(()=>{
        let timerId
        if(!isValid.title || !isValid.text || !isValid.date){
            timerId = setTimeout(()=>{
                console.log('Timer')
                dispatchForm( { type : 'RESET_VALIDITY' } )
            },1000)
        }
        return () => {
            clearTimeout(timerId)
        }
    }, [isValid])

    useEffect(() => {
        if(isFormReadyToSubmit){
            onSubmit(values)
            dispatchForm({
                type : 'CLEAR'
            })
        }
    }, [isFormReadyToSubmit, values, onSubmit])

    const onChange = (e) => {
        dispatchForm({
            type : 'SET_VALUE',
            payload : {[e.target.name] : e.target.value}
        })
    }

    const addJournalItem = (event) => {
        event.preventDefault()
        //раскоментировать для автоматической даты:
        // formProps.data = `${new Date().toLocaleTimeString('en-US', {hour12: false})} ${new Date().toLocaleDateString()}`
        dispatchForm({type : 'SUBMIT'})

    }

    return (
        <form className={styles['journal-form']} onSubmit={addJournalItem}>

            <div>
                <input type="text" onChange={onChange} value={values.title} name='title' className={cn(styles['input-title'], {
                    [styles['invalid']]: !isValid.title,
                })}/>
            </div>

            <div className={styles['form-row']}>

                <label htmlFor='data'  className={styles['form-label']}>

                    <img width={'32px'} src="/calendar-i-gray.svg" alt="Иконка календаря"/>
                    {/*<img width={'32px'} src="/data.png" alt="Иконка календаря"/>*/}

                    <span>Дата</span>

                </label>
                
                <input type="date" onChange={onChange} id={'data'} value={values.data} name='data' className={styles['input']}/>

            </div>

            <div className={styles['form-row']}>

                <label htmlFor='tag' className={styles['form-label']}>

                    <img width={'32px'} src="/folder_folder.png" alt="Иконка папки"/>

                    <span>Метки</span>

                </label>

                <input type="text" onChange={onChange} value={values.tag} id={'tag'} name='tag' className={styles['input']}/>

            </div>

            <textarea name='text' onChange={onChange} value={values.text} cols='30' rows='10' className={cn(styles['input'], {
                [styles['invalid']]: !isValid.text,
            })}></textarea>
            <Button text='Сохранить'/>
        </form>
    )

}

