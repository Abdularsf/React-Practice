export const Todolistdup = ({ data, checked, onHandleDeleteTodo, onHandleCheckedTodo }) => {
    return (
        <li className="todo-item">
            <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
            <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
                <MdCheck />
            </button>
            <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
                <MdDeleteForever />
            </button>
        </li>
    )
}

// export const Todolistdup = ({key,data,onHandleDeleteTodo}) => {
//     return (
//         <li key={key} className="todo-item">
//             <span>{data}</span>
//             <button className="check-btn">
//                 <MdCheck />
//             </button>
//             <button className="delete-btn" onClick={(curTask) => onHandleDeleteTodo(data)}>
//                 <MdDeleteForever />
//             </button>
//         </li>
//     )
// }

// export const Todolistdup = ({data,checked,onHandleDeleteTodo,onHandleCheckedTodo}) => {
//     return (
//         <li className="todo-item">
//             <span className={checked? "checkList":"notCheckList"}>{data}</span>
//             <button className="check-btn" onClick={() =>onHandleCheckedTodo(data)}><MdCheck /></button>
//             <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}><MdDeleteForever /></button>
//         </li>
//     )
// }