import { createContext, useContext } from "react";
// export const BioContext = createContext();

import { createContext } from "react";

export const BioContext = createContext();

export const BioProvider = ({children}) =>{
    const myName = "ARSF";
    const myAge = 20;
    return(
        <BioContext.Provider value={{myName , myAge}}>{children}</BioContext.Provider>
    )
}

export const useBioContext = () =>{
    const context = useContext(BioContext);
    return context;
}


// export const BioProvider = ({children}) =>{
//     const myName = "ARSF";
//     const myAge = 20;

//     return(
//         <BioContext.Provider value={{myName,myAge}}>{children}</BioContext.Provider>
//     )
// }