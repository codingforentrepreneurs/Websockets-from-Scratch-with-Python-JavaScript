import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
    return <div>Hello world again.</div>
}

const htmlElement = document.getElementById("app")

ReactDOM.render(<App />, htmlElement)