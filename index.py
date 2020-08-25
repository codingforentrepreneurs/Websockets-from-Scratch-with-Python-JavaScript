import asyncio
import websockets
import json

async def webhook_handler(websocket, path):
    print(websocket, path)
    async for message in websocket:
        data = {}
        try:
            data = json.loads(message)
        except:
            pass
        print(data.get('data'))
        await websocket.send(json.dumps({"this": "awesome"}))
        # print(message)
    # pass


server = websockets.serve(webhook_handler, 'localhost', 8765)

loop = asyncio.get_event_loop()
loop.run_until_complete(server)
loop.run_forever()

# asyncio.run()
