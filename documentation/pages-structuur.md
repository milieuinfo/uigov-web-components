# Pages Structuur

## Beschrijving

Alle documentatie is in deze (https://github.com/milieuinfo/uig) monorepo te vinden in de vorm van Markdown bestanden.
Ze worden gepubliceerd op de documentatie website (https://milieuinfo.github.io/uig-pages), de structuur van die repo
staat hier beschreven.

## Structuur

```
uig-pages/
├─ build-apps/ [de sub-folders zijn de branches - mag 3.0.10 in de beta branch voorkomen of moet dat 3.0.10-beta zijn ?]
│  ├─ beta/
│  ├─ feature/
│  │  ├─ xxx/
│  ├─ main/ [sub-folders per versie - uit de root package.json van web-components]
│  │  ├─ 3.0.10/ 
│  │  │  ├─ alliance/ [volgt automatisch de versies van de web-components - is wel een aparte sub-monorepo]
│  │  │  ├─ documentation/ 
│  │  │  │  ├─ img/
│  │  │  │  ├─ web-components/
│  │  │  │  ├─ xyz.md
│  │  │  ├─ exhibit/ 
│  │  │  ├─ storybook/ 
├─ build-bamboo/ [de sub-folders zijn de branches]
│  ├─ beta/
│  ├─ feature/
│  │  ├─ xxx/
│  ├─ main/ [de sub-folders zijn de root projecten]
│  │  ├─ applications
│  │  ├─ web-components [de sub-folders zijn de build numbers - enkel de laatste 10 worden bijgehouden]
│  │  │  ├─ 46/ [hieronder wordt de inhoud van de dist folder gekopieerd]
│  │  │  │  ├─ apps/
│  │  │  │  ├─ cypress/
│  │  │  │  ├─ libs
├─ build-github/ [de folder structuur is identiek aan build-bamboo, maar de build bron is github]
├─ jekyll/
│  -> basis jekyll structuur
│  -> docs en build folders zijn hierin opgenomen via een symbolic link !!!
│  -> momenteel op basis van https://jekyllthemes.io/theme/doxy-jekyll-theme
│  -> zou de DV styling moeten volgen !!!
│  ├─ _site/
│  │  -> de gegenereerde website die gepublieerd wordt onder https://milieuinfo.github.io/uig-pages/
```
