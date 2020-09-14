import asyncio
import websockets
import json


async def call_cli_command(cmd):
    '''
    python client.py '{"cell_data": "print(\"hello world\")"}'
    python client.py '{"cell_data": "print(134243 * 234234)"}'
    python client.py '{"cell_data": "!pip freeze"}'
    '''
    command_args = ['python', '-c', cmd] # ['python', '-c', 'print("hello world")'] 
    if cmd.startswith("!"): # !pip install fastapi
        command_args = cmd[1:].split()
    proc = await asyncio.create_subprocess_exec(
        *command_args,
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE,
    )
    stdout, stderr = await proc.communicate()
    return stdout.decode("utf-8"), stderr.decode("utf-8")


async def websocket_handler(websocket, path):
    # print(websocket, path)
    async for message in websocket:
        data = {}
        try:
            data = json.loads(message)
        except:
            pass
        # print(data.get('cell_data'))
        cell_data = data.get("cell_data")
        if cell_data != None:
            stdout, stderr = await call_cli_command(cell_data)
            print(stdout, stderr)
            await websocket.send(json.dumps({"result": stdout, "error": stderr}))
        # await websocket.send(json.dumps({"this": "awesome"}))
        # print(message)
    # pass


server = websockets.serve(websocket_handler, 'localhost', 8765)

loop = asyncio.get_event_loop()
loop.run_until_complete(server)
loop.run_forever()

# asyncio.run()
