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
npx sass ./libs/elements/src/lib/vl-elements.scss > ./dist/libs/elements/src/lib/vl-elements.css --load-path ./node_modules

## Nuttige links

https://www.compart.com/en/unicode/category/So


