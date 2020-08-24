import time
import asyncio # Python 3.5 +

iteration_times = [1, 3, 2, 4]
start = time.time()
total_time = 0
real_time = 0
async def sleeper(iteration, seconds): # coroutine
    global total_time
    global real_time
    func_start = time.time()
    print(f"{iteration}: {seconds}s")
    await asyncio.sleep(seconds)
    func_end = time.time() - func_start
    total_time += func_end
    real_time = func_end

async def run():
    results = []
    for iteration, second in enumerate(iteration_times):
        results.append(
            asyncio.create_task(
                sleeper(iteration, second)
            )
        )
    await asyncio.gather(*results)

asyncio.run(run())
print(f"Took {total_time} seconds in compute time")
print(f"Tooke {real_time} seconds in real time")