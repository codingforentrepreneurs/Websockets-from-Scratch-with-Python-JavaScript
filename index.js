import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'

// const socket = new WebSocket()

const MyWebSocket = () => {
    const wsURI = 'ws://localhost:8765'
    const [socket, setSocket] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [cellData, setCellData] = useState("") // type=text, textarea
    const [result, setResult] = useState({})
    // 1. connect to the websocket server
    // 2. push & listen for messages in the websocket connection
    // 3. disconnect from websocket server

    useEffect(()=>{
        // connect to the websocket server
        if (socket === null) {
            
            setSocket(new WebSocket(wsURI))
        }
    }, [socket])


    useEffect(()=>{
        // connect to the websocket server
        if (socket) {
            socket.onopen = () => {
                setIsOpen(true)
            }
            socket.onclose = () => {
                setIsOpen(false)
            }

            socket.onmessage = (event) => {
                const {data} = event
                const msgData = JSON.parse(data)
                setResult(msgData)
            }
        }
        return () => {
            if (socket) {
                socket.close(1000, "Disconnected by dismount")
            }
        }
    }, [socket])

    const performClose = _ => {
        if (socket && socket.readyState == WebSocket.OPEN) {
            socket.close(1000, "Disconnected by user")
        }
    }

    const performOpen = _ => {
        if (socket && socket.readyState == WebSocket.CLOSED) {
            setSocket(new WebSocket(wsURI))
        }
    }

    const performSend = _ => {
        if (socket && socket.readyState == WebSocket.OPEN) {
            const myData = {cell_data: cellData}
            socket.send(JSON.stringify(myData))
            setCellData("")
        } else {
            alert("Your websocket session has closed")
        }
    }

    const handleInputChange = (event) => {
        const val = event.target.value
        setCellData(val)
    } 

    return <div>
        <h1>WebSocket</h1>
        <div>
            <button onClick={performClose}>Close</button>
            <button onClick={performOpen}>Open</button>
        </div>
        <div>{isOpen && 
            <React.Fragment>
                <textarea placeholder='Your cell data' value={cellData} name='cellData' onChange={handleInputChange} />
                {result.result && <div>{result.result}</div>}
                {result.error && <div className='text-error'>{result.error}</div>}

            </React.Fragment>
        
        } </div>

        <button onClick={performSend}>Send</button>
    </div>
}


const App = () => {
    return <div>App

        <MyWebSocket />
            
    </div>
}

const htmlElement = document.getElementById("app")

ReactDOM.render(<App />, htmlElement)