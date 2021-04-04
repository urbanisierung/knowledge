# GIT

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
