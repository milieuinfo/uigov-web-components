# Workspace Setup Commands

Dit document beschrijft (in grote lijnen) de stappen utgevoerd om de UIG repo op te bouwen

## Root Setup

- npx create-nx-workspace@latest
    * [applications | web-components] / apps [an empty workspace with no plugins with a layout that works best for building apps]
    * no distributed caching

## Setup - applications

- npm install -D @nrwl/web
- npx nx g @nrwl/web:application alliance

## Setup - web-components

- npx create-nx-workspace@latest
    * [applications | web-components] / apps [an empty workspace with no plugins with a layout that works best for building apps]
    * no distributed caching
- npm install -D @nrwl/web
- npx nx g @nrwl/web:lib common/utilities --buildable --importPath=@domg-wc/common-utilities
- npx nx g @nrwl/web:lib elements --buildable --publishable --importPath=@domg-wc/elements
- npx nx g @nrwl/web:lib components --buildable --publishable --importPath=@domg-wc/components
- npx nx g @nrwl/web:lib sections --buildable --publishable --importPath=@domg-wc/sections
- npx nx g @nrwl/web:lib support/test-support --buildable --publishable --importPath=@domg-wc/test-support
- npx nx g @nrwl/web:lib map --buildable --publishable --importPath=@domg-wc/map
- npx nx g @nrwl/web:application playground
- npx nx g @nrwl/web:application storybook

## Storybook

Nx ondersteund Storybook maar niet voor Web Componenten, enkel voor Angular of React.
De volgende stappen zijn gedaan om Storybook te installeren:

-   npx nx g @nrwl/web:application storybook\
    -> dit maakt een default web app 'storybook' en 'storybook-e2e'
-   npx storybook init\
    -> in de apps/storybook folder\
    -> dit doet een initialisatie van storybook\
    -> de manuele 'web components' keuze gemaakt
-   onder apps/storybook is er dan een package.json (+lock en node_modules)\
    -> de devDependencies verplaatst naar het root niveau
    -> de package.json, package-lock.json en node_modules verwijderd
