import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'

// const socket = new WebSocket()

const MyWebSocket = () => {
    const [socket, setSocket] = useState(null)
    // 1. connect to the websocket server
    // 2. push & listen for messages in the websocket connection
    // 3. disconnect from websocket server

    useEffect(()=>{
        // connect to the websocket server
        if (socket === null) {
            const wsURI = 'ws://localhost:8765'
            setSocket(new WebSocket(wsURI))
        }
    }, [socket])

    return <div>
        <h1>WebSocket</h1>
        <p>{socket && socket.readyState === WebSocket.CONNECTING ? "Connecting" : "other"} </p>
    </div>
}


const App = () => {
    return <div>App

        <MyWebSocket />
            
    </div>
}

const htmlElement = document.getElementById("app")

ReactDOM.render(<App />, htmlElement)