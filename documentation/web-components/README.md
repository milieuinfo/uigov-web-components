# UIG Web Components - Nx

## Inhoudstafel

- 🚀 [Project](#project)
- 🛠 [Opzet](#opzet)
- 📒 [Project Structuur](#project-structuur)
- ⚗ [Web Componenten Bibliotheek](#web-componenten-bibliotheek)
    - ⚛ [Elements Bibliotheek](#elements-bibliotheek)
    - ⚙ [Components Bibliotheek](#components-bibliotheek)
- 👥 [Ontwikkel Team](#ontwikkel-team)

## Project

Deze __monorepo__ bevat de ontwikkeling die gebeurd door het __UIG-team__ (User Interface Governance Team)
van [Departement Omgeving](https://omgeving.vlaanderen.be/), onderdeel van
de [Vlaamse Overheid](https://www.vlaanderen.be/).

De basis wordt gevormd door een [Web Componenten](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
bibliotheek, die verder bouwt op het [Webuniversum v3](https://overheid.vlaanderen.be/webuniversum/v3/) ontwikkeld
door [Digitaal Vlaanderen](https://www.vlaanderen.be/digitaal-vlaanderen) (onderdeel van de VO).

<sup>_[WIP - aan te vullen met links naar de code of de draaiende toepassing]_</sup>\
Het gebruik van de bibliotheek wordt toegepast in de __Exhibit__ toepassing.

## Opzet

Dit project is opgezet met [Nx](https://nx.dev/), bij opzet werd er [documentatie](resources/markdown/nx-nrwl.md) gegenereerd.
Nx (wat staat voor Nrwl Extensions) is een 'Smart, Fast and Extensible Build System' dat open-source ontwikkeld wordt
door [Nrwl](https://github.com/nrwl), een start-up die groeide uit Google.

De huidige setup werd opgebouwd m.b.v. [nx commando's](resources/markdown/nx-setup.md).

## Project Structuur

- apps <sup>_[de toepassingen]_</sup>
    - exhibit <sup>_[de demo toepassing]_</sup>
    - exhibit-e2e <sup>_[de Cypress testen tegenover Exhibit]_</sup>
    - storybook <sup>_[Storybook]_</sup>
    - storybook-e2e <sup>_[de Cypress testen tegenover Storybook]_</sup>
- libs <sup>_[de bibliotheken]_</sup>
    - common <sup>_[de gedeelde code]_</sup>
        - utilities
    - components <sup>_[web componenten geïmplementeerd met Lit]_</sup>
    - elements <sup>_[web componenten geïmplementeerd als native HTMLElement]_</sup>
    - testers <sup>_[deprecated - Javascript code met test helpers - legacy gebruikt door andere OMG ontwikkel teams]_</sup>

## Web Componenten Bibliotheek

De ⚗ <sup>web componenten</sup> zitten opgesplitst in 2 sub-bibliotheken: __elements__ en __components__.

> De bibliotheek wordt momenteel gemigreerd, in het analyse document
> (numbers) [UIG - componenten bibliotheek](docs/numbers/UIG%20-%20componenten%20bibliotheek.numbers) staat de
> vooruitgang.

### Elements Bibliotheek

De ⚛ <sup>elementen</sup> zijn in de repo te vinden onder __'/libs/elements'__ en worden gepubliceerd onder __@uig/elements__

Een __element__ is geïmplementeerd als een native html-element en heeft technisch volgende eigenschappen:
- extends steeds van een sub-klasse van HTMLElement (bvb. HTMLButtonElement)
  - dus steeds te gebruiken met 'is='
  - bvb. `<button is="vl-button"></button>`
- heeft __geen__ shadow DOM
- de styling wordt globaal gedefinieerd
  - 1 sccs (vl-elements.scss) die de css van alle elementen bevat
  - de bulk van de styling komt van DV (Digitaal Vlaanderen)
  - afnemers dienen expliciet deze css eenmalig (vanuit index.html) te refereren

### Components Bibliotheek

De ⚙ <sup>componenten</sup> zijn in de repo te vinden onder __'/libs/components'__ en worden gepubliceerd onder __@uig/components__

Een __component__ is geïmplementeerd als een [LitElement](https://lit.dev/docs/api/LitElement/) en heeft technisch volgende eigenschappen:
- extends steeds van LitElement
  - dus steeds te gebruiken als custom tag
  - bvb. `<vl-breadcrumb></vl-breadcrumb>`
- heeft __steeds een__ shadow DOM
- de styling komt mee binnen met de component
  - ook de element styling is voorzien in de shadow DOM
  - geneste elementen worden dus steeds correct gestyled
  - afnemers moeten niets doen m.b.t. styling

<hr>

## Ontwikkel Team

| Gert-Jan Meire                                                            | Kris Speltincx                                                             |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------|
| ![Gert-Jan Meire](https://avatars.githubusercontent.com/u/30627591?s=160) | ![Kris Speltincx](https://avatars.githubusercontent.com/u/110020569?s=160) |
| [meirege](https://github.com/meirege)                                     | [kspeltix](https://github.com/kspeltix)                                    |

