import { useState, initialState } from "react";

export default function TaskForm(){
    const [listForm, setListForm] = useState(initialState = '');
    return (
        <form>
            <input type="text" 
            value={listForm} 
            onChange={ev => setListForm(ev.target.value)}
            placeholder="Enter your next task .. .. .. "></input>
            <button>+</button>
        </form>
    )
}