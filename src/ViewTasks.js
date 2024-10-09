
import Checkbox from "./Checkbox";


export default function ViewTasks() {
    checked = false
    return (
        <div class="task">
            <Checkbox  checked = {checked}/>
            <label>Task</label>
        </div>

    )

}