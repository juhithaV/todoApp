import { useState, initialState } from "react";

export default function TaskForm({onAdd}){
    const [listForm, setListForm] = useState(initialState = '');

    function handleEvent(ev){
        ev.preventDefault();
        onAdd(listForm);
        setListForm(ev.target.value);
    }
    return (
        <form onSubmit={handleEvent}>
            <input type="text" 
            value={listForm} 
            onChange={ev => setListForm(ev.target.value)}
            placeholder="Enter your next task .. .. .. "></input>
            <button>+</button>
        </form>
    )
}