.PHONY: eslint watch start-dev start-prod

eslint:
	./node_modules/.bin/eslint .

start-dev:
	nodemon server/entry.js --watch server

start-prod:
	node server/entry.js

watch:
	./node_modules/.bin/webpack-dev-server --progress --colors -d
