import react, {useState} from 'react'

const TextInput = () => {
    const [inputValue, setInputValue] = useState ('');

    const handleChange = (event) => {
        setInputValue(event.target.value)
    };
    
    return (
        <>
        <div>
            <label htmlFor="textInput"></label>
            <input type="text" id="textInput" value={inputValue} onChange={handleChange} />
            <p>Valore attuale : {inputValue}</p>
        </div>
        </>
    )

}

export default TextInput 