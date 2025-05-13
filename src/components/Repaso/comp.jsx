import {useState} from 'react';

const Comp = function({saludos}){
    const [text, setText] = useState();
    const [update, setUpdate] = useState();
    const textOnChange = (event) => {
        setText(event.target.value);
    }

    const updateOnClick = (event) => {
        setUpdate(text);
    }

return(
    <div className='App'>
        <h1 className='h1'>{saludos}</h1>
        <input className='input' type="text" value={text} onChange={textOnChange} />
        <button className='button' onClick={updateOnClick}>Actualizar</button>
        <p className='p'>input: {text}</p>
        <p className='p'>Actalizado: {update}</p>
    </div>
)
}

export default Comp;