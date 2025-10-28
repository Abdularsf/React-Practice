export const LiftingState = () => {
    return (
        <>
            <InputComponent />
            <DisplayComponent />
        </>
    )
    const InputComponent = () => {
        return (
            <>
                <input
                    type="text"
                    placeholder="enter your name"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                ></input>
            </>
        );
    };
}