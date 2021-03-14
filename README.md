# pwa-ts-template
Template of PWA and TS to clone and start with company's practices.

# Steps to use this repository
1. Copy the Repository to a desired project name that corresponds to the new git you made  
```
$ cp -R pwa-ts-template/ rtaf-hr-p1
```

2. Remove any leftover git from the project  
```
$ cd rtaf-hr-p1
$ sudo rm -r .git
```

3. Git Init the folder with the newly created git repo
```
$ echo "# rtaf-hr-p1" > README.md
$ git init
$ git add .
$ git commit -m "first commit"
$ git branch -M main
$ git remote add origin git@github.com:datability-th/rtaf-hr-p1.git
$ git push -u origin main
```
Change the remote add url and the echo markdown to the desired project you choose  

4. Done! :D
