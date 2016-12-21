TARGET=main
all: $(TARGET)

main: index.md proposals.md
	git commit -am "updated website"
	git push
