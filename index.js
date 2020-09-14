import React, {useState} from 'react'
import ReactDOM from 'react-dom'


const Btn = () =>{
    const [clickCount, setClickCount] = useState(0)

    const handleClick = (event) =>{
        // alert("btn in react")
        setClickCount(clickCount + 1)
    }
    return <button onClick={handleClick} className={`class-${clickCount}`}>hello react btn</button>
}

const App = () => {
    return <div>Hello world again.<Btn /></div>
}

const htmlElement = document.getElementById("app")

ReactDOM.render(<App />, htmlElement)