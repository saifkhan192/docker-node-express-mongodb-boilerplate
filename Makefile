.PHONY: _list
_list:
	@echo "Type make then a space then hit tab to see available commands"

build:
	cp -u .env.dist .env
	docker-compose --file docker/docker-compose.yml up -d --build
	@sleep 1

run_app:
	@google-chrome http://localhost:8080/
	@docker logs --follow express_app

run:
	make build
	make run_app

bash_app:
	docker exec -it express_app /bin/bash

recreate_app:
	docker-compose --file docker/docker-compose.yml up -d --force-recreate --no-deps --build express_app
	docker logs --follow express_app

run_all:
	docker container start postgresdb || true
	docker container start mongodb || true
	docker container start express_app || true
	@google-chrome http://localhost:8080/

stop_all:
	docker container stop postgresdb || true
	docker container stop mongodb || true
	docker container stop express_app || true

refresh_app:
	docker-compose --file docker/docker-compose.yml up --force-recreate --no-deps express_app

bash_db:
	docker exec -it postgresdb bash
	
psql_console:
	docker exec -it postgresdb psql -U user -d postgres

run_db_sql:
	@docker cp ./docker/db-init.sql postgresdb:/init-file.sql || true
	@docker exec postgresdb psql postgres user -a -c 'DROP DATABASE IF EXISTS "demo-db";'
	@docker exec postgresdb psql postgres user -a -c 'CREATE DATABASE "demo-db";'
	@docker exec postgresdb psql demo-db user -a -f /init-file.sql || true

update_npm_packages:
	docker exec -it express_app npm i npm-check-updates
	docker exec -it express_app ncu -u
	docker exec -it express_app npm install

test_curl:
	docker exec -it express_app curl http://localhost:8080 && echo ""

run_tests:
	# docker exec -t express_app npm run test
	docker exec -t express_app bash -c "export NODE_ENV=test && tape src/tests/test-*.js"

run_linting:
	docker exec -t express_app npm run eslint

run_fix_linting:
	docker exec -t express_app npm run eslint:fix --silent
