import React from "react"
import { useRef } from "react"

const UncontrolledInput = () => {

    const inputRef = useRef(null)

    const handleClick = () => {
        alert(`valore inserito:${inputRef.current.value}`)
    }

    return (
        <div>
            <label htmlFor="myInput"></label>
            <input type="text" name="myInput" id="myInput" ref={inputRef} />
            <button onClick={handleClick}> Mostra valore</button>
        </div>
    )

}


export default UncontrolledInput