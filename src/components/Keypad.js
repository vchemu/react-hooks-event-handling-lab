// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <label htmlFor="Password">Password</label>
            <input type="password" 
            onChange={() => console.log("Entering password...")}
            />
        </div>
    )
}

export default Keypad;