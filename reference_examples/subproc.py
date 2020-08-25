import subprocess

process = subprocess.Popen(['pip', 'freeze'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

stdout, stderr = process.communicate()

print(stdout.decode('utf-8'))
# print(stderr.decode('utf-8'))
