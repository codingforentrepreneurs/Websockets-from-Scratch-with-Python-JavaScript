import asyncio
import websockets

async def webhook_handler(*args, **kwargs):
    print(args, kwargs)
    pass


server = websockets.serve(webhook_handler, 'localhost', 8765)

loop = asyncio.get_event_loop()
loop.run_until_complete(server)
loop.run_forever()

# asyncio.run()
