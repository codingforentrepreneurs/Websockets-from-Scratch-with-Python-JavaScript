import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'


const Timer = (props) =>{
    const [count, setCount] = useState(-1)
    console.log(count, props)
    useEffect(()=>{
        // lookup to api service
    }, [])

    useEffect(()=>{
        // console.log("mounted")
        // setCount(count+1)
        let myTimer;
        if (count > 10) {
            myTimer = setTimeout(()=>{
                setCount(count + 1)
            }, 1000)
        }

        return () => {
            clearTimeout(myTimer)
        }
    }, [count])

    const handleClick = _ => {
        setCount(count + 1)
    }

    return <div>

        <h1>Timer - {count}</h1>
        <button onClick={handleClick}>Reset</button>
    </div>
}

const App = () => {
    return <div>Hello world again.
            <Timer className='my-timer' />
    </div>
}

const htmlElement = document.getElementById("app")

ReactDOM.render(<App />, htmlElement)