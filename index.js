import React, {useState} from 'react'
import ReactDOM from 'react-dom'


const BtnLabel = (props) =>{

    return <span> - {props.count} </span>
}

const Btn = (props) =>{
    const [clickCount, setClickCount] = useState(0)
    console.log(props)
    const shouldRenderCount = props.renderCount === true ? true : false
    const renderCountLabel = shouldRenderCount === true ? <BtnLabel count={clickCount} /> : null
    const handleClick = (event) =>{
        // alert("btn in react")
        setClickCount(clickCount + 1)
    }
    return <button onClick={handleClick} className={`class-${clickCount}`}>hello react btn {renderCountLabel}</button>
}

const App = () => {
    return <div>Hello world again.
        
       <p> <Btn renderCount /></p>
       <p> <Btn /></p>
       <p> <Btn /></p>
       <p> <Btn /></p>
    </div>
}

const htmlElement = document.getElementById("app")

ReactDOM.render(<App />, htmlElement)