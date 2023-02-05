To see all branches (ξεκινάει το branch απο το main)

    git branch

Before starting change the files, we make our own local branch

    git checkout -b <my_branch>  origin/main

Let's say we have finished an issue, so we have some changes at
<my_branch> and wanted to carry the changes to
the collective branch/project (this exactly means 'contribution'),
then we press

    git add .

    git commit -m "<a-message-for-helping-other-devs-understand>" --no-verify


Note: if you want to remove the recent chnges from a file, then

    git restore <file>

(See also `git stash`, as also in the net, how you go one commit
back `git reset HEAD~` or sth like that)


    git checkout main

    git pull

    git checkout <my_branch>

    git rebase main

Here there is the occasion to have a **CONFLICT**, means another companieros
change the same file and almost the same lines of the file

### 1.If you DON'T have conflict,

then you continue as

    git checkout main

    git merge --no-ff <my_branch>

    git push --no-verify

and then if you want to return to your previous branch you worked

    git checkout <my_branch>

or even if you want to delete you local branch you worked, you can do it
as you are on local branch main

    git branch -d <my_branch>

of course **NEVER** delete the **main**


### 2. If you HAVE conflicts


    git status

to see which files are with the troubles.

Then you go to the files in webstorm editor to see which
code is yours and which is by other devs.

So after corporation you 'll solve the conflicts, then you have to continue as

    git add .

    git rebase --continue

    git checkout main

    git merge --no-ff <my_branch> /// git pull --no-ff .  <my_branch>

    git push --no-verify

and then if you want to return to your previous branch you worked

    git checkout <my_branch>


or even if you want to delete you local branch you worked, you can do it
as you are on local branch main

    git branch -d <my_branch>

of course **NEVER** delete the **main**
