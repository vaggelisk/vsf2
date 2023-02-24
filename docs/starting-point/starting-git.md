# Tools

# git

## Register at GitHub

Register/signup at [https://github.com/signup](https://www.jetbrains.com/webstorm/)


## Generate a token

It needs to generate a token (it's like a password) that bash/terminal ''ll request from you at `git push` or `git pull` (you ll see later). Follow the instructions here     and save the  token to a plain txt file. Somewhere you ll remember, because very often is going to copy-paste the token.



# some useful commands

After you download the collective project (setup the project locally) via
(is better to be at `WebstormProjects` folder)

> git clone https://github.com/vaggelisk/vsf2.git

> cd vsf2

you are on branch `main`.

You can see your status by

> git status

If you have modified even a space of a file, then the file it ll be displayed after the command `git status`.

To see which are exactly the differences of the files, you have to run

> git diff

Before we go to the safe commands for contributing to the collective project, it's worth to see two commands.

First when you need to save your changes and clean your branch from changes, you could run

> git stash

And to bring back the saved changes

> git stash pop

but the best on these commands is that in reality you move your changes from one branch to another.

This could do with `git checkout ` between the two commands. You will see details later.
