import './JournalItem.css'

export default function JournalItem(props) {

    // const formatedDate = new Intl.DateTimeFormat('ru-Ru').format(props.data)

    return (
        <>
            <h2 className="journal-item_head">{props.title}</h2>
            <h2 className="journal-item_body">
                <div className="journal-item_date">{props.date}</div>
                <div className="journal-item_text">{props.text}</div>
            </h2>
        </>
    )

}

// export default Button

// ТЯГА СТАБ VOL C30/S40/V50/C70/FRD FOCUS C-MAX/FOCUS ll/MAZ 3/5 03- ПЕР L/R


// VIN: X9FKXXEEBKBT13540
//
// Стойки стаб. 2949902 LEMFORDER
// Тяги рул.    38814   febi
// Пыльники рул.
//        рейки  36519  febi
