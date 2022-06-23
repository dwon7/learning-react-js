import { useEffect, useState } from "react";
import "./date.css"
import DateDisplay from "./DateDisplay";

const DateContainer = () => {
    const[date, setDate] = useState(Date.now()); //useState
    return (
        <>
            <input type="date" className="date-input" onChange={(e) => setDate(e.target.value)}></input>
            <DateDisplay date={date}/>
        </>
    );
}
 
export default DateContainer;