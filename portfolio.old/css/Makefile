
all:

#################################################################################
# makefile rules for lesscss.org

LESSC_SRC	= $(wildcard *.less)
LESSC_OBJ	= $(LESSC_SRC:.less=.css)

lessc_obj: $(LESSC_OBJ)

.SUFFIXES: .less .css

.less.css:
	lessc $< > $@