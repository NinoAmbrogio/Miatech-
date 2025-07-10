import React from "react";
import { useNavigate } from 'react-router-dom';


const About = () =>{

const navigate = useNavigate();

const goHome = () => {
    navigate('/')
}

return(
    <div>
        <h1>About</h1>
        <p>ciao</p>
        <button onClick={goHome}>Vai in home</button>
    </div>
)

}
export default About