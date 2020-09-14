import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'

// const socket = new WebSocket()

const MyWebSocket = () => {
    const [socket, setSocket] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
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


    useEffect(()=>{
        // connect to the websocket server
        if (socket) {
            socket.onopen = () => {
                console.log("open")
                setIsOpen(true)
            }
            socket.onclose = () => {
                setIsOpen(false)
            }
        }
    }, [socket])

    return <div>
        <h1>WebSocket</h1>
        <div>{isOpen && <p>Open Socket</p>} </div>
    </div>
}


const App = () => {
    return <div>App

        <MyWebSocket />
            
    </div>
}

const htmlElement = document.getElementById("app")

ReactDOM.render(<App />, htmlElement)