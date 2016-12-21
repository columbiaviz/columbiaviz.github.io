TARGET=main
all: $(TARGET)

main: README.md proposals.md
	#python build.py
	git commit -am "updated website"
	git push
	#ssh eugenewu@athena.dialup.mit.edu "cd www; git pull"
	#ssh ewu@clic.cs.columbia.edu 'cd ~/html/; git checkout .; git pull; chmod -R 775 *.html images include files ducao latexsnapshots'

build: index.html
	python build.py
