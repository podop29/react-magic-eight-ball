import {useState} from 'react'
import "./EightBall.css"
const EightBall = ({answers}) =>{
    const randomIdx = () => Math.floor(Math.random() * answers.length)

    const setMsgAndColor = (randIdx) =>{
        setCurrColor(answers[randIdx].color)
        setCurrMsg(answers[randIdx].msg)
    }

    const [currColor, setCurrColor] = useState("black")
    const [currMsg, setCurrMsg] = useState("Think of a Question")
        
    return(
        <>
        <span onClick={() => setMsgAndColor(randomIdx())} style={{backgroundColor:currColor}} className="ball">
            <h1 className="ball-text">{currMsg}</h1>
        </span>


        </>
    )
}

export default EightBall