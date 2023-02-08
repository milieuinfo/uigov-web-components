# [1.1.0](https://github.com/milieuinfo/uigov-web-components/compare/v1.0.1...v1.1.0) (2023-02-08)


### Bug Fixes

* in de TinyMCE configuratie van vl-textarea de referentie naar vl-elements.scss verwijderd ([48c8783](https://github.com/milieuinfo/uigov-web-components/commit/48c8783aa541a3c4ebd9ab176cf4b31883f240d2))
* UIG-2297 - fix webComponent decorator voor VlPropertiesComponent ([11acbff](https://github.com/milieuinfo/uigov-web-components/commit/11acbffdd3d54c7d34c998087ba136d379f0cffa))
* UIG-2302 - vl-map met meerdere WMS layers wordt niet goed gerendered ([6b6cbad](https://github.com/milieuinfo/uigov-web-components/commit/6b6cbadee0f5c9423f92f705bedf218254668e1e))


### Features

* KBOMG-27 - vl-map-click-action component ([0a1f9e4](https://github.com/milieuinfo/uigov-web-components/commit/0a1f9e4e09f8b6cfd758424a11c2327c92c91725))
* optimalisatie mbt github-actions caching ([064a73a](https://github.com/milieuinfo/uigov-web-components/commit/064a73a047e4a9d77e8eed9276e5c041374e60c7))
* UIG-1497 - functional header verbeteringen ([8610928](https://github.com/milieuinfo/uigov-web-components/commit/861092844105cff96cd918f14a51c62560f9e928))
* UIG-2178 / UIG-2260 - header en footer ([6dc84f0](https://github.com/milieuinfo/uigov-web-components/commit/6dc84f0778fa78459d0fff55006f9bdff4709695))
* UIG-2263 - vervangen van Gegevensbeschermingsautoriteit door Vlaamse Toezichtscommissie ([c7ccdfe](https://github.com/milieuinfo/uigov-web-components/commit/c7ccdfe8a0ce7f5397c4a5de8dcb3eadf2c90190))
* UIG-2280 - toevoegen van inzage cookie consent configuratie aan analytics.utils.ts (37, 38, 27, 28, 62) ([0c97421](https://github.com/milieuinfo/uigov-web-components/commit/0c9742180bbbfc5ce02f192be224b6aeb57ebefb))
* UIG-2287 - richtlijn Storybook en Cypress  ([31fba0c](https://github.com/milieuinfo/uigov-web-components/commit/31fba0c7ac638748c2a97c429640d78dbe21de5c))
* UIG-2301 - vl-header uitgebreid met simple mode ([fbdbf02](https://github.com/milieuinfo/uigov-web-components/commit/fbdbf02905e3392581c5840a95add2b65cd7f48c))

## [1.0.1](https://github.com/milieuinfo/uigov-web-components/compare/v1.0.0...v1.0.1) (2023-01-31)


### Bug Fixes

* aanmaak van map files vermijden bij scss omzetting ([0b3084c](https://github.com/milieuinfo/uigov-web-components/commit/0b3084c99c171e910604cfa78736d7e2747c6beb))

# 1.0.0 (2023-01-31)


### Bug Fixes

* aanpassingen mbt release v1.0.0 ([16aea5d](https://github.com/milieuinfo/uigov-web-components/commit/16aea5ddf5ee94b22ed3624115ba7ee1c578716b))
* ci-applications mag enkel publiceren naar github-pages voor een build van de main of 1 van de beta branches ([3e07136](https://github.com/milieuinfo/uigov-web-components/commit/3e0713602695563a81e40cac3d8d39d49879af9d))
* de .js.map bestanden zijn ongeldig (refereren naar .ts bestanden die niet in de artefact zitten) - verwijderd (moet opgelost worden in de webpack build) ([a98632b](https://github.com/milieuinfo/uigov-web-components/commit/a98632b9f05e260bf91f47be3f3d7334e066ec9e))
* geen source-map's meer genereren ([8274d4c](https://github.com/milieuinfo/uigov-web-components/commit/8274d4c09c3135080313ca122c9420ddd77b43bc))
* lit als een expliciete dependency opgenomen voor components / map / sections ([5077134](https://github.com/milieuinfo/uigov-web-components/commit/5077134a3bd34c7d77a3ddfba7a219c296888bb1))
* onder Safari werkten build-in custom elements niet ([bcbc622](https://github.com/milieuinfo/uigov-web-components/commit/bcbc622fa6a534becc9b05d67007c7233da1b7a2))
* ook de .css.map bestanden zijn ongeldig ([b3f2949](https://github.com/milieuinfo/uigov-web-components/commit/b3f29499dbac2167f6ba267187a4c160827e0853))
* UIG-1287 - toelaten om keyboard te disablen voor vl-map component ([81b6035](https://github.com/milieuinfo/uigov-web-components/commit/81b6035076e3453cf718f7c3354e5ed29cd6aa39))
* UIG-2133 - vl-pill checkable state is nog aanpasbaar indien disabled ([37cb7a6](https://github.com/milieuinfo/uigov-web-components/commit/37cb7a6ed540b74c2eb261bad1a4edd85b697b97))
* UIG-2248 - value objects in een apart model.ts bestand ([1f5ef3d](https://github.com/milieuinfo/uigov-web-components/commit/1f5ef3dba3c96dde0e859c41d97cc4c1eddad6aa))
* UIG-2249 - TYPE van vl-pill ([6a82a0c](https://github.com/milieuinfo/uigov-web-components/commit/6a82a0ce8d4c9b2b7b10b1d20726f5faf1b235d8))
* UIG-2251 - missende attributen toegevoegd ([c0308e8](https://github.com/milieuinfo/uigov-web-components/commit/c0308e8d7d2a0acd9e5b48647345c57e4ff53f94))
* UIG-2278 - vl-side-navigation.lib.js ([105d726](https://github.com/milieuinfo/uigov-web-components/commit/105d726ac88a233ae30adb85cbaa9e14deedede4))
* UIG-2283 - pill icon is fout ([16f3220](https://github.com/milieuinfo/uigov-web-components/commit/16f32208604d0447b96e4865652036b4811052d7))
* UIG-2288 - vl-side-navigation-reference voegt extra blanco pagina's toe tijdens printen in Chrome ([3667d78](https://github.com/milieuinfo/uigov-web-components/commit/3667d7810035a7a5e90b43173de3f9e78b9242e2))
* vl-proza-message-preloader.component toegevoegd in de barrel file van de components ([18b9556](https://github.com/milieuinfo/uigov-web-components/commit/18b95562259f0e5b1d776c57c4d0f6902836e9e0))


### Features

* [@domg-wc](https://github.com/domg-wc) als scope voor de web-component packages ipv [@domg-lib](https://github.com/domg-lib) ([e6a8485](https://github.com/milieuinfo/uigov-web-components/commit/e6a84852022cb6bf4bcb5df0a61b536a0562da6c))
* @semantic-release/github configuratie ([7d9f3ce](https://github.com/milieuinfo/uigov-web-components/commit/7d9f3ce94b23b4e65c58edfafc9f6477844a6f6a))
* algemene scss aanbieden vanuit common-utilities ([f663f13](https://github.com/milieuinfo/uigov-web-components/commit/f663f13e14d175ad6e16a7889f2e2784cb8d5197))
* algemene verbeteringen ([e4a7a88](https://github.com/milieuinfo/uigov-web-components/commit/e4a7a88b9f5eb9b006671420a2478ffdfdf63a1a))
* consistente prettier regels ([31891c5](https://github.com/milieuinfo/uigov-web-components/commit/31891c58cffcbb641b873e760d882dc328fcedec))
* in de artefact '@dom-lib/elements' naast 'vl-elements.css' ook een 'vl-elements.css.js' aanbieden ([2b36041](https://github.com/milieuinfo/uigov-web-components/commit/2b360411daee03845132b1590cb3644e119bd5a0))
* nieuwe opzet ([b72c045](https://github.com/milieuinfo/uigov-web-components/commit/b72c04521625a64f19fd120409dc8da8dff1dff3))
* starten met een beta versie ([af43e0b](https://github.com/milieuinfo/uigov-web-components/commit/af43e0bae787013bd48fc65af0c4d6bad31658d9))
* UIG-2251 - storybook docs verbetering - vl-progress-bar voorbeeld ([03a2594](https://github.com/milieuinfo/uigov-web-components/commit/03a259448b6b49bc3cae88d988cda9be08385b75))
* UIG-2265 - map omgezet naar typescript ([66e8fc6](https://github.com/milieuinfo/uigov-web-components/commit/66e8fc6c0c48ded1783bea0cd1c6f998ed228964))
* UIG-2275 / UIG-2276 - aanpassingen aan de testers ([a32cb04](https://github.com/milieuinfo/uigov-web-components/commit/a32cb042bebff8ff9c29811c1be4bfb626e9cf30))
* UIG-2284 - ondersteuning voor named imports ([1e56ef8](https://github.com/milieuinfo/uigov-web-components/commit/1e56ef81279e77528db908831d9bcabd195e6c8e))
* UIG-2295 - develop branches ipv beta branches - de beta suffix blijft behouden ([09e1794](https://github.com/milieuinfo/uigov-web-components/commit/09e17945422f5be3da9080404fbe06a0860f7ad4))
* UIG-2295 - opsplitsen monorepo - aanpassingen ([18d9e18](https://github.com/milieuinfo/uigov-web-components/commit/18d9e182f9eda2bbb11ae19c94994a2e1e8b067b))
* UIG-2295 - opsplitsen monorepo - opkuis en hernoeming ([636dc67](https://github.com/milieuinfo/uigov-web-components/commit/636dc67b1063e41eeb6939eb745d23226997c36d))
* UIG-2295 - opsplitsen monorepo - web-components subfolder verwijderd ([b707f8b](https://github.com/milieuinfo/uigov-web-components/commit/b707f8b5d99383a92ec457f09adbad04b5eb4016))
* vl-map verbeteringen ([41e16f1](https://github.com/milieuinfo/uigov-web-components/commit/41e16f1eb69c1866a2f1d55bcac42b01cb998981))
