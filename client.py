import asyncio
import websockets
import sys

websocket_endpoint = 'ws://localhost:8765' # url / uro

async def connect_to_ws(msg):
    async with websockets.connect(websocket_endpoint) as ws:
        await ws.send(msg)

if __name__=="__main__":
    msg = 'nothing here'
    try:
        msg = sys.argv[1]
    except:
        pass
    loop = asyncio.get_event_loop()
    loop.run_until_complete(connect_to_ws(msg))