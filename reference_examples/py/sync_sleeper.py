import time

iteration_times = [1, 3, 2, 4]
start = time.time()
total_time = 0
def sleeper(iteration, seconds):
    global total_time
    func_start = time.time()
    print(f"{iteration}: {seconds}s")
    time.sleep(seconds)
    func_end = time.time() - func_start
    total_time += func_end

def run():
    for iteration, second in enumerate(iteration_times):
        sleeper(iteration, second)

run()
print(f"Took {total_time} seconds")