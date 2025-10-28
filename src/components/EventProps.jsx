// export const EventProps = () => {
//     const HandleWelcomeUser = (user) => {
//         alert(`hey ${user}`)
//     }
//     const handleHover = () => {
//         alert(`hovering`)
//     }
//     return (
//         <>
//             <Welcome onClick={() => HandleWelcomeUser("ARSF")} onMouseEnter={handleHover} />
//         </>
//     )
// }

// const Welcome = (props) => {

//     const handleGreeting = () =>{
//         console.log(`hey user welcome`);
//         props.onClick();
//     }
//     return (
//         <>
//             <button onClick={props.onClick}>Click</button>
//             <button onMouseEnter={props.onMouseEnter}>Hover me</button>
//             <button onClick={handleGreeting}>greeting</button>
//         </>
//     )
// }

export const EventProps = () => {

    const HandleWelcomeUser = (user) => {
        alert(`hey ${user}`)
    }
    const handleHover = () => {
        alert(`hovering`)
    }

    <WelcomeUser onClick={() => HandleWelcomeUser("ARSF")} onMouseEnter={handleHover} />
}

const WelcomeUser = (props) => {
    const handleGreeting = () => {
        console.log(`hey user welcome`);
        props.onClick();
    }
    return (
        <>
            <button onClick={props.onClick}>Click</button>
            <button onMouseEnter={props.onMouseEnter}>Hover me</button>
            <button onClick={handleGreeting}>greeting</button>
        </>
    )
}
