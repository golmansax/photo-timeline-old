.PHONY: eslint watch start-dev start-prod shrinkwrap

build:
	./node_modules/.bin/webpack --config webpack/entry.js --colors -p

eslint:
	./node_modules/.bin/eslint .

shrinkwrap:
	npm shrinkwrap --dev

start-dev:
	./node_modules/.bin/nodemon server/entry.js --watch server

start-prod:
	node server/entry.js

watch:
	./node_modules/.bin/webpack-dev-server --config webpack/entry.js --progress --colors -d
