const Compn = ({edad}) =>{

    const name = "David";
    const age = edad;

    return(
        <div>
            <h1>Hola {name}</h1>
            <p>Tu edad es {edad}</p>
            <p>The next year you will be {age+1}</p>
            {(edad => 18) && <p>You are old enough to vote</p>}
            {(edad < 18) && <p>You are not old enough to vote</p>}
        </div>
    )
}

export default Compn;