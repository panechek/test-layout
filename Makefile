install:
	npm install

lint:
	
	npx stylelint ./app/scss/**/*.scss
	pug-lint ./app/pages/*.pug

push:
	npx gulp
	git add .
	git commit -m '$(message)'
	git push

server:
	npx gulp
	npx gulp server
