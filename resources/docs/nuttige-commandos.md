# Nuttige Commands

## Git

### Aanpassen Git User Name

Als je de naam / email van historische commits wil aanpassen.
zie: https://mhagemann.medium.com/how-to-change-the-user-for-all-your-git-commits-ffefbacf2652

```
git filter-branch --env-filter '
OLD_EMAIL="kris@bladerbeeld.be"
NEW_NAME="Kris Speltincx"
NEW_EMAIL="kris.speltincx@vlaanderen.be"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
export GIT_COMMITTER_NAME="$NEW_NAME"
export GIT_COMMITTER_EMAIL="$NEW_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
export GIT_AUTHOR_NAME="$NEW_NAME"
export GIT_AUTHOR_EMAIL="$NEW_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
```

### Opkuisen Git - dangling commits

```
git reflog expire --expire-unreachable=now --all
git gc --prune=now
du -sh .git 
```

### Opkuisen Git - old tags

Show all tags
`git tag`
`git tag -l "v1.24.*-develop*"`
`git ls-remote --tags origin -l "v1.24.*-develop*"`

Delete all local tags
`git tag -d $(git tag -l)`

Fetch all tags
`git fetch --all --tags --force`

Delete local tags
`git tag -d $(git tag -l "v1.24.*-develop*")`

Delete remote tags
`git push origin --delete $(git tag -l "v1.24.*-develop*")`


### Semantic Release

notes fetchen
```
git fetch origin refs/notes/semantic-release:refs/notes/semantic-release
```
notes tonen
```
git notes --ref semantic-release show 2231b72
```

na een historiek herschrijving een tag opnieuw leggen + de notes toevoegen 
```
git push --delete origin v1.34.0-develop.2
git tag -d v1.34.0-develop.2
git tag v1.34.0-develop.2 6d26f683
git push origin v1.34.0-develop.2

git notes --ref semantic-release add -f -m '{"channels":["develop"]}' v1.34.0-develop.2
git push --force origin refs/notes/semantic-release
```


## Bash

<sub>Welk process draait op welke poort, inclusief details.</sub>
```
sudo lsof -i:4600
```

<sub>Welk process draait op welke poort, enkel de PID.</sub>
```
sudo lsof -ti:4600
```

<sub>de dist folder statisch serven</sub>
```
npx http-server ./dist -p9090 --cors
```

## SCSS verwerking

uit te voeren vanuit de folder waar de scss staan, de node_modules folder moet relatief kloppen !!!
npx sass vl-elements.scss > vl-elements.css --load-path ../../../../node_modules
npx sass ./libs/elements/src/vl-elements.scss > ./dist/libs/elements/src/lib/vl-elements.css --load-path ./node_modules

## Nuttige links

https://www.compart.com/en/unicode/category/So

## Bash

aantal Cypress testen voor de map 
find . -type f -name "*map*.cy.ts" | wc -l 
