import { useState } from "react";

export const TodoFormdup = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState({});

    const HandleInputChange = (value) => {
        setInputValue({ id: value, content: value, checked: false });
    }

    const HandleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({ id: "", content: "", checked: false });
    }

    return (
        <section className="form">
            <form onSubmit={HandleFormSubmit}>
                <div>
                    <input type="text"
                        className="todo-input"
                        autoComplete="off"
                        value={inputValue.content}
                        onChange={(e) => HandleInputChange(e.target.value)} />
                </div>
                <div>
                    <button type="submit" className="todo-btn">
                        Add task
                    </button>
                </div>
            </form>
        </section>
    )

}

// export const TodoFormdup = ({onAddTodo}) => {

//     const [inputValue, setInputValue] = useState("");

//     const HandleInputChange = (value) => {
//         setInputValue({ id: value, content: value, checked: false });
//     }

//     const HandleFormSubmit = (e) =>{
//         e.preventDefault();
//         onAddTodo(inputValue);
//         setInputValue({ id: "", content: "", checked: false });
//     }

//     return (
//         <section className="form">
//             <form onSubmit={HandleFormSubmit}>
//                 <div>
//                     <input 
//                         type="text" 
//                         className="todo-input" 
//                         autoComplete="off" 
//                         value={inputValue.content} 
//                         onChange={(e) => HandleInputChange(e.target.value)} />
//                 </div>
//                 <div>
//                     <button type="submit">
//                         Add Task
//                     </button>
//                 </div>
//             </form>
//         </section>
//     )
// }

// export const TodoFormdup = ({onAddTodo}) => {
//     const [inputValue, setInputValue] = useState({});

//     const handleInputChange = (value) => {
//         setInputValue({id:value,content:value,checked:false});
//     }

//     const handleFormSubmit = (e) =>{
//         e.preventDefault();
//         onAddTodo(inputValue);
//         setInputValue({id:"",content:"",checked:false});
//     }

//     return (
//         <section className="form">
//             <form onSubmit={handleFormSubmit}>
//                 <div>
//                     <input
//                         type="text"
//                         className="todo-input"
//                         autoComplete="off"
//                         value={inputValue.content}
//                         onChange={(e) => handleInputChange(e.target.value)} />
//                 </div>
//                 <div>
//                     <button type="submit" className="todo-btn">Add Task</button>
//                 </div>
//             </form>
//         </section>
//     )
// }