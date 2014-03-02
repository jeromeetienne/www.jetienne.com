# raw makefile
# - ease repeatitive operations

all: upload

PWD		:= $(shell pwd)
DESTDIR		:= /home/jerome/webwork/www.jetienne.com.gh-pages


monitor: build
	(while inotifywait -r -e modify,attrib,create . ; do make build; done)

server:
	python -m SimpleHTTPServer

deploy: buildCss
	# assume there is something to commit
	# use "git diff --exit-code HEAD" to know if there is something to commit
	# so two lines: one if no commit, one if something to commit
	git commit -a -m "New deploy" && git push -f origin HEAD:gh-pages && git reset HEAD~

buildCss:
	(cd portfolio2d/css && make lessc_obj)
