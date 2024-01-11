import './journalList.css'
import CardButton from "../CardButton/CardButton.jsx";
import JournalItem from "../journalItem/JournalItem.jsx";

export default function JournalList({items}) {

    if (items.length === 0) {
        return <p>Записей нет, добавьте первую</p>
    }

    const sortItems = (a, b) => {
        if (a.data < b.data) {
            return 1
        } else {
            return -1
        }
    }

    return <>
        {items.sort(sortItems).map(elem =>
            <CardButton key={elem.id}>
                <JournalItem
                    title={elem.title}
                    text={elem.text}
                    date={elem.data}
                />
            </CardButton>
        )}
    </>

}


