import './JournalAddButton.css'
import CardButton from "../CardButton/CardButton.jsx";

export default function JournalAddButton({children}) {

    return (
        <CardButton className={'journal-add'}>
           + Новое воспоминание
        </CardButton>
    )

}


