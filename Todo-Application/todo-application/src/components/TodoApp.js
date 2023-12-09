import { useState} from 'react';
import styles from './TodoApp.module.css';

function TodoApp(){
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const addTodoHandler = () => {
        if(input.trim() !== ""){
            setTodos([...todos, input.trim()])
            setInput("");
        }
    };

    const removeTodoHandler = (index) => {
        const updatedTask = todos.filter((_, i) => i !== index);
        setTodos(updatedTask);
    };



    return(
        <>
        <div className={styles.main}>
            <h1>Todo Application</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className={styles.inputField}  placeholder='Add Task Here..' /><br></br>
            <button onClick={addTodoHandler} className={styles.addTaskButton} >Add Task</button>
            <ul className={styles.list}>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}<button onClick={() => removeTodoHandler(index)}>Remove</button></li>
                ))}
            </ul>
        </div>
        </>
    )
};
export default TodoApp;