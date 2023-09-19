# Nx Commando's

<sub>Opstarten van Playground (de demo toepassing)</sub>

```
npx nx serve playground
```

<sub>Opstarten van Lit Playground</sub>

```
npx nx serve playground-lit
```

<sub>Opstarten van Native Playground</sub>

```
npx nx serve playground-native
```

<sub>Opstarten van React Playground</sub>

```
npx nx serve playground-react
```

<sub>Opstarten van Storybook</sub>

```
npx nx storybook storybook
```

<sub>e2e testen in ontwikkel modus laten lopen t.o.v. Storybook (die moet gestart zijn)</sub>

```
npx nx e2e storybook-e2e --watch
```

<sub>e2e testen eenmalig laten lopen t.o.v. Storybook (die moet gestart zijn)</sub>

```
npx nx e2e storybook-e2e
```

<sub>Builden van Storybook - maken van een distributable artefact</sub>

```
npx nx build-storybook storybook
```

<sub>Een volledige build</sub>

```
npx nx build
```

<sub>Alle Jest testen expliciet en in parallel laten lopen</sub>

```
npx nx run-many --all --target=test --parallel --maxParallel=4 --skip-nx-cache
```
