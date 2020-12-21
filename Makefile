.PHONY: _list
_list:
	@echo "Type make then a space then hit tab to see available commands"

build:
	cp -u .env.dist .env
	docker-compose --file docker/docker-compose.yml up -d --force-recreate --no-deps --build
	# docker-compose --file docker/docker-compose.yml up -d --force-recreate --no-deps --build node_app
	# docker-compose --file docker/docker-compose.yml up --force-recreate --no-deps --build node_app

run_app_new:
	docker-compose --file docker/docker-compose.yml up --force-recreate --no-deps --build node_app
	# docker-compose --file docker/docker-compose.yml up --force-recreate --no-deps node_app

test_curl:
	docker exec -it express_app curl http://localhost:8080 && echo ".."

up:
	docker-compose --file docker/docker-compose.yml up

recreate_all:
	docker-compose --file docker/docker-compose.yml up -d --force-recreate --no-deps --build mysqldb
	docker-compose --file docker/docker-compose.yml up -d --force-recreate --no-deps --build mongodb
	# docker-compose --file docker/docker-compose.yml up -d --force-recreate --no-deps --build node_app

run_all:
	docker container start mysqldb || true
	docker container start mongodb || true
	docker container start node_app || true
	sleep 2
	google-chrome http://localhost

stop_all:
	docker container stop mysqldb || true
	docker container stop mongodb || true
	docker container stop node_app || true

refresh_app:
	docker-compose --file docker/docker-compose.yml up --force-recreate --no-deps node_app

bash_app:
	docker exec -it node_app /bin/bash
