import { useState } from "react"
import "./ToggleSwitch.css"

export const ToggleSwitch = () =>{

    const [isOn,setIsOn] = useState(false);

    const handleToggleSwitch = () =>{
        setIsOn(!isOn);
    }

    const toggleBGColor = {backgroundColor : isOn ? "#4caf50" : "#f44336"} 

    const checkIsOn = isOn?"on":"off";

    return(
        <div className="toggle-switch" style={toggleBGColor} onClick={handleToggleSwitch}>
            <div className={`switch ${checkIsOn}`}>
                <span className="switch-state">{checkIsOn}</span>
            </div>
        </div>
    )
}