import { useEffect, useState } from "react";
import "./Tododup.css"
import { MdCheck, MdDeleteForever } from "react-icons/md";
import { TodoFormdup } from "./TodoFormdup";
import { Todolistdup } from "./Todolistdup";
import { TodoDatedup } from "./TodoDatedup";


export const Tododup = () => {

    const [task, setTask] = useState([]);

    const HandleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;
        if (!content) return;
        const ifTodoContentMatched = task.find((curTask) => curTask.content === content)
        if (ifTodoContentMatched) return;
        setTask((prevTask) => [...prevTask, { id, content, checked }]);
    }

    const handleDeleteTodo = (value) => {
        const updatedTask = task.filter((curTask) => curTask.content != value);
        setTask(updatedTask);
    }

    const handleCheckedTodo = (content) => {
        const updatedTask = tasks.map((curTask) => {
            if (curTask.content == content) {
                return { ...curTask, checked: !curTask.checked };
            } else {
                return curTask;
            }
        })
        setTask(updatedTask);

        return (
            <section className="todo-container">
                <header>
                    <h1>Todo List</h1>
                    <TodoDatedup />
                </header>

                <TodoFormdup onAddTodo={HandleFormSubmit} />
                <section className="myUnOrdList">
                    {
                        task.map((curTask) => {
                            return (
                                <Todolistdup
                                    key={curTask.id}
                                    data={curTask.content}
                                    checked={curTask.checked}
                                    onHandleDeleteTodo={handleDeleteTodo}
                                    onHandleCheckedTodo={handleCheckedTodo}
                                />
                            )
                        })
                    }
                </section>
            </section>
        )
    }
}

// export const Tododup = () => {

//     const [task, setTask] = useState([]);

//     const HandleFormSubmit = (inputValue) => {
//         const { id, content, checked } = inputValue;
//         if (!content) return;

//         const ifTodoContentMatched = task.find((curTask) => curTask.content === content)
//         if (ifTodoContentMatched) return;

//         setTask((prevTask) => [...prevTask, { id, content, checked }]);
//     }

//     const handleDeleteTodo = (value) => {
//         const updatedTask = task.filter((curTask) => curTask.content != value)
//         setTask(updatedTask)
//     }

//     const handleClearTodoData = () =>{
//         setTask([]);
//     }

//     return (
//         <section className="todo-container">
//             <header>
//                 <h1>Todo List</h1>
//                 <TodoDatedup/>
//             </header>
//             <TodoFormdup onAddTodo={HandleFormSubmit}/>
//             <section className="myUnOrdList">
//                 {
//                     task.map((curTask, index) => {
//                         <Todolistdup key = {curTask.id} data = {curTask.content} onHandleDeleteTodo={handleDeleteTodo}/>
//                     })
//                 }
//             </section>
//             <section>
//                 <button className="clear-btn" onClick={handleClearTodoData}>Clear All</button>
//             </section>
//         </section>
//     )
// }

// export const Tododup = () => {
//     const [inputValue, setInputValue] = useState("");
//     const [task, setTask] = useState([]);
//     const [dateTime, setDateTime] = useState();

//     const HandleInputChange = (value) => {
//         setInputValue(value);
//     }
//     const HandleFormSubmit = (event) => {
//         event.preventDefault();
//         if (!inputValue) return;
//         if (task.includes(inputValue)) {
//             setInputValue("");
//             return;
//         }
//         setTask((prevTask) => [...prevTask, inputValue]);
//         setInputValue("");

//     }
//     useEffect(() => {
//         const interval = setInterval(() => {
//             const now = new Date();
//             const formattedDate = now.toLocaleDateString();
//             const formattedTime = now.toLocaleTimeString();
//             setDateTime(`${formattedDate} - ${formattedTime}`);
//         }, 1000)

//         return () => clearInterval(interval)
//     }, [])

//     const handleDeleteTodo = (value) =>{
//         const updatedTask = task.filter((curTask) => curTask != value);
//         setTask(updatedTask);
//     }

//     const handleClearTodoData = () =>{
//         setTask([]);
//     }

//     return (
//         <section className="todo-container">
//             <header>
//                 <h1>Todo List</h1>
//                 <span>{dateTime}</span>
//             </header>

//             <section className="form">
//                 <form onSubmit={HandleFormSubmit}>
//                     <div>
//                         <input type="text" className="todo-input" autoComplete="off" value={inputValue} onChange={(e) => HandleInputChange(e.target.value)} />
//                     </div>
//                     <div>
//                         <button type="submit" className="todo-btn">
//                             Add task
//                         </button>
//                     </div>
//                 </form>
//             </section>
//             <section className="myUnOrdList">
//                 {
//                     task.map((curTask, index) => {
//                         return (
//                             <li key={index} className="todo-item">
//                                 <span>{curTask}</span>
//                                 <button className="check-btn">
//                                     <MdCheck />
//                                 </button>
//                                 <button className="delete-btn" onClick={() => handleDeleteTodo()}>
//                                     <MdDeleteForever />
//                                 </button>
//                             </li>
//                         )
//                     })
//                 }
//             </section>
//             <section>
//                 <button className="clear-btn" onClick={handleClearTodoData}>Clear All</button>
//             </section>
//         </section>
//     )
// }


