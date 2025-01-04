import os

def run_uredis_docker() -> None:
    os.system('docker run -d -v {}:/opt/nullboard --rm --network nb_network --name nullboard -p 127.0.0.1:3001:3001 nullboard_img'.format(os.getcwd()))

if __name__ == "__main__":
    run_uredis_docker()
