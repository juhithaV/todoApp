
import Checkbox from "./Checkbox";


export default function ViewTasks({name,done}) {
    
    return (
        <div className="task">
            <Checkbox check={done} />
            <label>{name}</label>
        </div>

    )

}