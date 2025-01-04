PYTHON=$(shell ./detect_py)

make:
	npm run app

dev:
	npm run dev

test:
	npm test

uredis:
	$(PYTHON) run_uredis_container.py

docker:
	$(PYTHON) build_docker_image.py

run:
	$(PYTHON) run_docker_container.py

