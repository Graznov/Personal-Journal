import './App.css'
import JournalList from "./Components/journalList/journalList.jsx";
import Header from "./Components/header/Header.jsx";
import JournalAddButton from "./Components/journalAddButton/JournalAddButton.jsx";
import LeftPanel from "./layouts/leftPanel/LeftPanel.jsx";
import Body from "./layouts/body/Body.jsx";
import {useEffect, useState} from "react";
import JournalForm from "./Components/JournalForm/JournalForm.jsx";

// const INITIAL_DATA = [
//
//     {
//         "id": 1,
//         "data": "23:22:49 04.12.2023",
//         "tag": "control text",
//         "text": "control text",
//         "title": "control title"
//     },
//     {
//         "id": 2,
//         "data": "23:22:49 05.12.2023",
//         "tag": "control_2 text_2",
//         "text": "control_2 text_2",
//         "title": "control_2 title_2"
//     }
//
// ]


function App() {


    const [items, setItems] = useState([])

    useEffect(() => {

        const data = JSON.parse(localStorage.getItem('date'))

        if (data) {
            setItems(data.map( item => ({
                ...item
                // data : new Date(item.data)
            })))
        }
    }, []);

    useEffect(() =>{
        if(items.length){
            console.log("Запись")
            localStorage.setItem('date', JSON.stringify(items))
        }
        // console.log(items)
    }, [items])

    const addItem = item => {
        setItems(oldItems => [...oldItems, {
            text: item.text,
            title: item.title,
            data: item.data,
            id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1
        }])
    }


    return (

        <div className='app'>

            <LeftPanel>
                <Header/>
                <JournalAddButton/>

                <JournalList items={items}/>

            </LeftPanel>

            <Body>

                <JournalForm onSubmit={addItem}/>

            </Body>


        </div>
    )
}

export default App
