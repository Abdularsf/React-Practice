import "./EV.css"

export const EventHandling = () => {

    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type); // "click"
        alert("Hey I am onClick Event");
    };

    return (
        <>
            <button onClick={handleButtonClick}>click Me</button>
            <br />

            {/* <button onClick={(event) => handleButtonClick(event)}>click Me 2 </button>
      <br />
      <button onClick={(event) => console.log(event)}>Inline Function</button>
      <br />
      <button onClick={() => alert("Hey I am inline evnt function")}>
        Inline Arr fun
      </button>
      <button onClick={() => handleWelcomeUser("vinod")}>click Me</button>
      <button onClick={() => handleWelcomeUser("Ram")}>click Me</button> */}
        </>
    );
}