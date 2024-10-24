import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const ToDo = () => {
    const [text, setText] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const addItem = () => {
        const newItem = {
            id: uuidv4(),
            text, // ILI text: text
            isCompleted: false
        };

        setTodoList((prevState) => [...prevState, newItem]);
        setText("");
    };

    useEffect(() => {
        console.log(todoList);
    }, [todoList]);

    const handleCheckToDoItem = (itemId) => {
        const itemToCheckIndex = todoList.findIndex((item) => item.id === itemId);
        console.log(itemToCheckIndex);
        const todoListCopy = [...todoList];

        todoListCopy[itemToCheckIndex].isCompleted = true;

        setTodoList(todoListCopy);
    };

    return (
        <div>
            <h2>TODO APP</h2>
            <div className="input-wrapper">
                <input type="text" className="input" onChange={(event) => handleChange(event)} value={text} />
                <button className="add-button" onClick={addItem} disabled={!text}>+ Add</button>
            </div>
            <div>
                {todoList.map((todoItem) =>
                    <div key={todoItem.id} className={`todo-item-wrapper`}>
                        <h3 className={`${todoItem.isCompleted ? 'line-through' : ''}`}>{todoItem.text}</h3>
                        <button onClick={() => handleCheckToDoItem(todoItem.id)}>Check</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ToDo;