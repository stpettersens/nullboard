import os

# You should have first build the uredis docker image
# from the uredis project.

def run_uredis_docker() -> None:
    os.system('docker network create nb_network')
    os.system('docker run -d --rm --network nb_network --name nb_uredis -p 6379:6379 uredis_img'.format(os.getcwd()))

if __name__ == "__main__":
    run_uredis_docker()
