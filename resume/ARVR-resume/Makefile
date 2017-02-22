watch: build
	# fswatch is available at https://github.com/emcrisostomo/fswatch
	fswatch index.md | xargs -n1 make build

build:
	# md2resume is from https://github.com/c0bra/markdown-resume-js
	md2resume index.md
