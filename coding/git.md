# GIT

## General

Clone private repo with GitHub Token:

```bash
git clone https://username:password@github.com/username/repo_name.git
```

## Default Branch

Change local branch name for new inits:

```bash
git config --global init.defaultBranch main
```

Update after remote renaming:

```bash
git branch -m master main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
```

## Remove Git history

Remove all history(make sure you have the backup) using:

```bash
cat .git/config  # note <github-url>
rm -rf .git
```

Reconstruct the git repo with the current content:

```bash
git init
git add .
git commit -m ":tada:"
```

Push the commit to github

```bash
git remote add origin <github-url>
git push -u --force origin master
```
