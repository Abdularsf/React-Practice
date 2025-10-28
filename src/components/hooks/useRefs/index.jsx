import { useRef } from "react"
import "./index.css"


export const UseRef = () =>{

    const username = useRef(null);
    const password = useRef(null);

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        console.log(username.current, password.current);
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" id="usename" ref={username} />
            <br />
            <input type="text" id="password" ref={password}/>
            <br />
            <button type="submit">submit</button>
        </form>
    )
}