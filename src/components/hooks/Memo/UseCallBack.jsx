import { useState } from "react";

const Button = ({onClick,children}) =>{
    console.log(`Rendering Button:${children}`);
    return(
        <button onClick={onClick}>{children}</button>
    )
}

export default function UseCallback(){
    const[count,setCount] = useState(0);

    const increment = () =>{
        console.log("Increment inside");
        setCount((prevCount) => prevCount+1);
    }
 
    const decrement = () =>{
        setCount((prevCount) => prevCount-1);
    }
    return(
        <div className="p-4 h-lvh text-white bg-black font-display tracking-wider flex flex-col justify-center  items-center ">
            <h1 className="mb-4">Count:{count}</h1>
            <Button onClick = {increment}>Increment</Button>
            <Button onClick = {decrement}>Decrement</Button>
        </div>
    )
}
