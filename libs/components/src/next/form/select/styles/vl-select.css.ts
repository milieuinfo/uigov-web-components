// Dit zijn de aangepaste vl-select styles van DV.
// DV maakt gebruik van een 'data:' attribuut om een nav-down svg op te halen van w3.org.
// Hierdoor breekt CSP tenzij we alle 'data:' attributen gaan whitelisten, wat niet de bedoeling is.
// Deze 'data:' attributen zijn in comment gezet zodat we toch CSP compliant kunnen zijn, zie comments gemarkeerd met ticketnummer UIG-2707.
// In de vl-select.uig-css.ts staan de vervangende styles voor de nav-down svg.
// Er stonden ook een aantal dubbele styles in deze file, deze zijn verwijderd.

import { css } from 'lit';
const style = css`
    :root {
        --vl-theme-primary-color: #ffe615;
        --vl-theme-primary-color-60: #fff073;
        --vl-theme-primary-color-70: #ffee5b;
        --vl-theme-primary-color-rgba-30: rgba(255, 230, 21, 0.3);
        --vl-theme-fg-color: #333332;
        --vl-theme-fg-color-60: #858584;
        --vl-theme-fg-color-70: #707070;
    }

    .vl-vi::before,
    .vl-vi::after {
        font-family: 'vlaanderen-icon' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        text-decoration: none;
        text-transform: none;
        display: inline-block;
        vertical-align: middle;
    }
    .vl-vi.vl-vi-u-180deg::before {
        display: inline-block;
        transform: rotate(180deg);
        vertical-align: middle;
    }

    .vl-vi-u-xs::before {
        font-size: 0.8rem;
    }

    .vl-vi-u-s::before {
        font-size: 1.3rem;
    }

    .vl-vi-u-m::before {
        font-size: 1.7rem;
    }

    .vl-vi-u-l::before {
        font-size: 2rem;
    }

    .vl-vi-u-xl::before {
        font-size: 2.2rem;
    }

    .vl-vi-u-90deg::before {
        display: inline-block;
        transform: rotate(90deg);
    }

    .vl-vi-u-180deg::before {
        display: inline-block;
        transform: rotate(180deg);
    }

    @font-face {
        font-family: 'vlaanderen-icon';
        src: url('https://cdn.omgeving.vlaanderen.be/domg/govflanders-font/15.0.1/iconfont/vlaanderen-icon.woff2')
                format('woff2'),
            url('https://cdn.omgeving.vlaanderen.be/domg/govflanders-font/15.0.1/iconfont/vlaanderen-icon.woff')
                format('woff');
        font-weight: normal;
        font-style: normal;
    }
    .vl-vi-add::before {
        content: '\\f101';
    }

    .vl-vi-add--after::after {
        content: '\\f101';
    }

    .vl-vi-addressbook::before {
        content: '\\f102';
    }

    .vl-vi-addressbook--after::after {
        content: '\\f102';
    }

    .vl-vi-airplane::before {
        content: '\\f103';
    }

    .vl-vi-airplane--after::after {
        content: '\\f103';
    }

    .vl-vi-alarm-silent::before {
        content: '\\f104';
    }

    .vl-vi-alarm-silent--after::after {
        content: '\\f104';
    }

    .vl-vi-alarm::before {
        content: '\\f105';
    }

    .vl-vi-alarm--after::after {
        content: '\\f105';
    }

    .vl-vi-alert-circle-filled::before {
        content: '\\f106';
    }

    .vl-vi-alert-circle-filled--after::after {
        content: '\\f106';
    }

    .vl-vi-alert-circle::before {
        content: '\\f107';
    }

    .vl-vi-alert-circle--after::after {
        content: '\\f107';
    }

    .vl-vi-alert-small::before {
        content: '\\f108';
    }

    .vl-vi-alert-small--after::after {
        content: '\\f108';
    }

    .vl-vi-alert-triangle-filled::before {
        content: '\\f109';
    }

    .vl-vi-alert-triangle-filled--after::after {
        content: '\\f109';
    }

    .vl-vi-alert-triangle::before {
        content: '\\f10a';
    }

    .vl-vi-alert-triangle--after::after {
        content: '\\f10a';
    }

    .vl-vi-align-center::before {
        content: '\\f10b';
    }

    .vl-vi-align-center--after::after {
        content: '\\f10b';
    }

    .vl-vi-align-justify::before {
        content: '\\f10c';
    }

    .vl-vi-align-justify--after::after {
        content: '\\f10c';
    }

    .vl-vi-align-left::before {
        content: '\\f10d';
    }

    .vl-vi-align-left--after::after {
        content: '\\f10d';
    }

    .vl-vi-align-right::before {
        content: '\\f10e';
    }

    .vl-vi-align-right--after::after {
        content: '\\f10e';
    }

    .vl-vi-area::before {
        content: '\\f10f';
    }

    .vl-vi-area--after::after {
        content: '\\f10f';
    }

    .vl-vi-arrange-1-to-9::before {
        content: '\\f110';
    }

    .vl-vi-arrange-1-to-9--after::after {
        content: '\\f110';
    }

    .vl-vi-arrange-9-to-1::before {
        content: '\\f111';
    }

    .vl-vi-arrange-9-to-1--after::after {
        content: '\\f111';
    }

    .vl-vi-arrange-a-to-z::before {
        content: '\\f112';
    }

    .vl-vi-arrange-a-to-z--after::after {
        content: '\\f112';
    }

    .vl-vi-arrange-amount-large-to-small::before {
        content: '\\f113';
    }

    .vl-vi-arrange-amount-large-to-small--after::after {
        content: '\\f113';
    }

    .vl-vi-arrange-amount-small-to-large::before {
        content: '\\f114';
    }

    .vl-vi-arrange-amount-small-to-large--after::after {
        content: '\\f114';
    }

    .vl-vi-arrange-z-to-a::before {
        content: '\\f115';
    }

    .vl-vi-arrange-z-to-a--after::after {
        content: '\\f115';
    }

    .vl-vi-arrow-bottom::before {
        content: '\\f116';
    }

    .vl-vi-arrow-bottom--after::after {
        content: '\\f116';
    }

    .vl-vi-arrow-down-fat::before {
        content: '\\f117';
    }

    .vl-vi-arrow-down-fat--after::after {
        content: '\\f117';
    }

    .vl-vi-arrow-down-thin::before {
        content: '\\f118';
    }

    .vl-vi-arrow-down-thin--after::after {
        content: '\\f118';
    }

    .vl-vi-arrow-down::before {
        content: '\\f119';
    }

    .vl-vi-arrow-down--after::after {
        content: '\\f119';
    }

    .vl-vi-arrow-freemove::before {
        content: '\\f11a';
    }

    .vl-vi-arrow-freemove--after::after {
        content: '\\f11a';
    }

    .vl-vi-arrow-left-fat::before {
        content: '\\f11b';
    }

    .vl-vi-arrow-left-fat--after::after {
        content: '\\f11b';
    }

    .vl-vi-arrow-left-thin::before {
        content: '\\f11c';
    }

    .vl-vi-arrow-left-thin--after::after {
        content: '\\f11c';
    }

    .vl-vi-arrow-left::before {
        content: '\\f11d';
    }

    .vl-vi-arrow-left--after::after {
        content: '\\f11d';
    }

    .vl-vi-arrow-right-fat::before {
        content: '\\f11e';
    }

    .vl-vi-arrow-right-fat--after::after {
        content: '\\f11e';
    }

    .vl-vi-arrow-right-thin::before {
        content: '\\f11f';
    }

    .vl-vi-arrow-right-thin--after::after {
        content: '\\f11f';
    }

    .vl-vi-arrow-right::before {
        content: '\\f120';
    }

    .vl-vi-arrow-right--after::after {
        content: '\\f120';
    }

    .vl-vi-arrow-thin::before {
        content: '\\f121';
    }

    .vl-vi-arrow-thin--after::after {
        content: '\\f121';
    }

    .vl-vi-arrow-up-fat::before {
        content: '\\f122';
    }

    .vl-vi-arrow-up-fat--after::after {
        content: '\\f122';
    }

    .vl-vi-arrow-up-thin::before {
        content: '\\f123';
    }

    .vl-vi-arrow-up-thin--after::after {
        content: '\\f123';
    }

    .vl-vi-arrow-up::before {
        content: '\\f124';
    }

    .vl-vi-arrow-up--after::after {
        content: '\\f124';
    }

    .vl-vi-arrow::before {
        content: '\\f125';
    }

    .vl-vi-arrow--after::after {
        content: '\\f125';
    }

    .vl-vi-asterisk::before {
        content: '\\f126';
    }

    .vl-vi-asterisk--after::after {
        content: '\\f126';
    }

    .vl-vi-audio-description::before {
        content: '\\f127';
    }

    .vl-vi-audio-description--after::after {
        content: '\\f127';
    }

    .vl-vi-back::before {
        content: '\\f128';
    }

    .vl-vi-back--after::after {
        content: '\\f128';
    }

    .vl-vi-ban::before {
        content: '\\f129';
    }

    .vl-vi-ban--after::after {
        content: '\\f129';
    }

    .vl-vi-banking-bill-euro::before {
        content: '\\f12a';
    }

    .vl-vi-banking-bill-euro--after::after {
        content: '\\f12a';
    }

    .vl-vi-battery-charging::before {
        content: '\\f12b';
    }

    .vl-vi-battery-charging--after::after {
        content: '\\f12b';
    }

    .vl-vi-bell::before {
        content: '\\f12c';
    }

    .vl-vi-bell--after::after {
        content: '\\f12c';
    }

    .vl-vi-bike-closed-criterium::before {
        content: '\\f12d';
    }

    .vl-vi-bike-closed-criterium--after::after {
        content: '\\f12d';
    }

    .vl-vi-bike-open-criterium::before {
        content: '\\f12e';
    }

    .vl-vi-bike-open-criterium--after::after {
        content: '\\f12e';
    }

    .vl-vi-bike::before {
        content: '\\f12f';
    }

    .vl-vi-bike--after::after {
        content: '\\f12f';
    }

    .vl-vi-bin::before {
        content: '\\f130';
    }

    .vl-vi-bin--after::after {
        content: '\\f130';
    }

    .vl-vi-binoculars::before {
        content: '\\f131';
    }

    .vl-vi-binoculars--after::after {
        content: '\\f131';
    }

    .vl-vi-boat-ship::before {
        content: '\\f132';
    }

    .vl-vi-boat-ship--after::after {
        content: '\\f132';
    }

    .vl-vi-bold::before {
        content: '\\f133';
    }

    .vl-vi-bold--after::after {
        content: '\\f133';
    }

    .vl-vi-book::before {
        content: '\\f134';
    }

    .vl-vi-book--after::after {
        content: '\\f134';
    }

    .vl-vi-bookmark-alt-1::before {
        content: '\\f135';
    }

    .vl-vi-bookmark-alt-1--after::after {
        content: '\\f135';
    }

    .vl-vi-bookmark-alt-2::before {
        content: '\\f136';
    }

    .vl-vi-bookmark-alt-2--after::after {
        content: '\\f136';
    }

    .vl-vi-bookmark::before {
        content: '\\f137';
    }

    .vl-vi-bookmark--after::after {
        content: '\\f137';
    }

    .vl-vi-breadcrumb-separator::before {
        content: '\\f138';
    }

    .vl-vi-breadcrumb-separator--after::after {
        content: '\\f138';
    }

    .vl-vi-briefcase::before {
        content: '\\f139';
    }

    .vl-vi-briefcase--after::after {
        content: '\\f139';
    }

    .vl-vi-building-2::before {
        content: '\\f13a';
    }

    .vl-vi-building-2--after::after {
        content: '\\f13a';
    }

    .vl-vi-building-big::before {
        content: '\\f13b';
    }

    .vl-vi-building-big--after::after {
        content: '\\f13b';
    }

    .vl-vi-building::before {
        content: '\\f13c';
    }

    .vl-vi-building--after::after {
        content: '\\f13c';
    }

    .vl-vi-bullet::before {
        content: '\\f13d';
    }

    .vl-vi-bullet--after::after {
        content: '\\f13d';
    }

    .vl-vi-burger-alt::before {
        content: '\\f13e';
    }

    .vl-vi-burger-alt--after::after {
        content: '\\f13e';
    }

    .vl-vi-burger::before {
        content: '\\f13f';
    }

    .vl-vi-burger--after::after {
        content: '\\f13f';
    }

    .vl-vi-burgerprofiel::before {
        content: '\\f140';
    }

    .vl-vi-burgerprofiel--after::after {
        content: '\\f140';
    }

    .vl-vi-bus::before {
        content: '\\f141';
    }

    .vl-vi-bus--after::after {
        content: '\\f141';
    }

    .vl-vi-business-graph-bar::before {
        content: '\\f142';
    }

    .vl-vi-business-graph-bar--after::after {
        content: '\\f142';
    }

    .vl-vi-business-graph-pie::before {
        content: '\\f143';
    }

    .vl-vi-business-graph-pie--after::after {
        content: '\\f143';
    }

    .vl-vi-cabinet::before {
        content: '\\f144';
    }

    .vl-vi-cabinet--after::after {
        content: '\\f144';
    }

    .vl-vi-cake::before {
        content: '\\f145';
    }

    .vl-vi-cake--after::after {
        content: '\\f145';
    }

    .vl-vi-calculator::before {
        content: '\\f146';
    }

    .vl-vi-calculator--after::after {
        content: '\\f146';
    }

    .vl-vi-calendar-add::before {
        content: '\\f147';
    }

    .vl-vi-calendar-add--after::after {
        content: '\\f147';
    }

    .vl-vi-calendar-check::before {
        content: '\\f148';
    }

    .vl-vi-calendar-check--after::after {
        content: '\\f148';
    }

    .vl-vi-calendar-subtract::before {
        content: '\\f149';
    }

    .vl-vi-calendar-subtract--after::after {
        content: '\\f149';
    }

    .vl-vi-calendar::before {
        content: '\\f14a';
    }

    .vl-vi-calendar--after::after {
        content: '\\f14a';
    }

    .vl-vi-calendar_check::before {
        content: '\\f14b';
    }

    .vl-vi-calendar_check--after::after {
        content: '\\f14b';
    }

    .vl-vi-calendar_date::before {
        content: '\\f14c';
    }

    .vl-vi-calendar_date--after::after {
        content: '\\f14c';
    }

    .vl-vi-camera::before {
        content: '\\f14d';
    }

    .vl-vi-camera--after::after {
        content: '\\f14d';
    }

    .vl-vi-car-wheel::before {
        content: '\\f14e';
    }

    .vl-vi-car-wheel--after::after {
        content: '\\f14e';
    }

    .vl-vi-car::before {
        content: '\\f14f';
    }

    .vl-vi-car--after::after {
        content: '\\f14f';
    }

    .vl-vi-chat-bubble-square-alert::before {
        content: '\\f150';
    }

    .vl-vi-chat-bubble-square-alert--after::after {
        content: '\\f150';
    }

    .vl-vi-chat-bubble-square-alt::before {
        content: '\\f151';
    }

    .vl-vi-chat-bubble-square-alt--after::after {
        content: '\\f151';
    }

    .vl-vi-chat-bubble-square::before {
        content: '\\f152';
    }

    .vl-vi-chat-bubble-square--after::after {
        content: '\\f152';
    }

    .vl-vi-chat-help::before {
        content: '\\f153';
    }

    .vl-vi-chat-help--after::after {
        content: '\\f153';
    }

    .vl-vi-chat::before {
        content: '\\f154';
    }

    .vl-vi-chat--after::after {
        content: '\\f154';
    }

    .vl-vi-check-circle::before {
        content: '\\f155';
    }

    .vl-vi-check-circle--after::after {
        content: '\\f155';
    }

    .vl-vi-check-filled::before {
        content: '\\f156';
    }

    .vl-vi-check-filled--after::after {
        content: '\\f156';
    }

    .vl-vi-check-naked::before {
        content: '\\f157';
    }

    .vl-vi-check-naked--after::after {
        content: '\\f157';
    }

    .vl-vi-check-small::before {
        content: '\\f158';
    }

    .vl-vi-check-small--after::after {
        content: '\\f158';
    }

    .vl-vi-check-thin::before {
        content: '\\f159';
    }

    .vl-vi-check-thin--after::after {
        content: '\\f159';
    }

    .vl-vi-check::before {
        content: '\\f15a';
    }

    .vl-vi-check--after::after {
        content: '\\f15a';
    }

    .vl-vi-child::before {
        content: '\\f15b';
    }

    .vl-vi-child--after::after {
        content: '\\f15b';
    }

    .vl-vi-clock::before {
        content: '\\f15c';
    }

    .vl-vi-clock--after::after {
        content: '\\f15c';
    }

    .vl-vi-close-filled::before {
        content: '\\f15d';
    }

    .vl-vi-close-filled--after::after {
        content: '\\f15d';
    }

    .vl-vi-close-light::before {
        content: '\\f15e';
    }

    .vl-vi-close-light--after::after {
        content: '\\f15e';
    }

    .vl-vi-close-naked::before {
        content: '\\f15f';
    }

    .vl-vi-close-naked--after::after {
        content: '\\f15f';
    }

    .vl-vi-close::before {
        content: '\\f160';
    }

    .vl-vi-close--after::after {
        content: '\\f160';
    }

    .vl-vi-cloud-download::before {
        content: '\\f161';
    }

    .vl-vi-cloud-download--after::after {
        content: '\\f161';
    }

    .vl-vi-cloud-upload::before {
        content: '\\f162';
    }

    .vl-vi-cloud-upload--after::after {
        content: '\\f162';
    }

    .vl-vi-cloud::before {
        content: '\\f163';
    }

    .vl-vi-cloud--after::after {
        content: '\\f163';
    }

    .vl-vi-code-branch::before {
        content: '\\f164';
    }

    .vl-vi-code-branch--after::after {
        content: '\\f164';
    }

    .vl-vi-coffee-cup::before {
        content: '\\f165';
    }

    .vl-vi-coffee-cup--after::after {
        content: '\\f165';
    }

    .vl-vi-cog::before {
        content: '\\f166';
    }

    .vl-vi-cog--after::after {
        content: '\\f166';
    }

    .vl-vi-coin-stack::before {
        content: '\\f167';
    }

    .vl-vi-coin-stack--after::after {
        content: '\\f167';
    }

    .vl-vi-compass::before {
        content: '\\f168';
    }

    .vl-vi-compass--after::after {
        content: '\\f168';
    }

    .vl-vi-computer-screen::before {
        content: '\\f169';
    }

    .vl-vi-computer-screen--after::after {
        content: '\\f169';
    }

    .vl-vi-confluence::before {
        content: '\\f16a';
    }

    .vl-vi-confluence--after::after {
        content: '\\f16a';
    }

    .vl-vi-construction-crane::before {
        content: '\\f16b';
    }

    .vl-vi-construction-crane--after::after {
        content: '\\f16b';
    }

    .vl-vi-construction-shack::before {
        content: '\\f16c';
    }

    .vl-vi-construction-shack--after::after {
        content: '\\f16c';
    }

    .vl-vi-contactbook::before {
        content: '\\f16d';
    }

    .vl-vi-contactbook--after::after {
        content: '\\f16d';
    }

    .vl-vi-contacts::before {
        content: '\\f16e';
    }

    .vl-vi-contacts--after::after {
        content: '\\f16e';
    }

    .vl-vi-content-book-favorite-star::before {
        content: '\\f16f';
    }

    .vl-vi-content-book-favorite-star--after::after {
        content: '\\f16f';
    }

    .vl-vi-content-book::before {
        content: '\\f170';
    }

    .vl-vi-content-book--after::after {
        content: '\\f170';
    }

    .vl-vi-content-box::before {
        content: '\\f171';
    }

    .vl-vi-content-box--after::after {
        content: '\\f171';
    }

    .vl-vi-content-filter::before {
        content: '\\f172';
    }

    .vl-vi-content-filter--after::after {
        content: '\\f172';
    }

    .vl-vi-content-layers-hide::before {
        content: '\\f173';
    }

    .vl-vi-content-layers-hide--after::after {
        content: '\\f173';
    }

    .vl-vi-content-layers-show::before {
        content: '\\f174';
    }

    .vl-vi-content-layers-show--after::after {
        content: '\\f174';
    }

    .vl-vi-content-note::before {
        content: '\\f175';
    }

    .vl-vi-content-note--after::after {
        content: '\\f175';
    }

    .vl-vi-content-view-column::before {
        content: '\\f176';
    }

    .vl-vi-content-view-column--after::after {
        content: '\\f176';
    }

    .vl-vi-content-view-module::before {
        content: '\\f177';
    }

    .vl-vi-content-view-module--after::after {
        content: '\\f177';
    }

    .vl-vi-contract::before {
        content: '\\f178';
    }

    .vl-vi-contract--after::after {
        content: '\\f178';
    }

    .vl-vi-control-cross-over::before {
        content: '\\f179';
    }

    .vl-vi-control-cross-over--after::after {
        content: '\\f179';
    }

    .vl-vi-copy-paste::before {
        content: '\\f17a';
    }

    .vl-vi-copy-paste--after::after {
        content: '\\f17a';
    }

    .vl-vi-copyright::before {
        content: '\\f17b';
    }

    .vl-vi-copyright--after::after {
        content: '\\f17b';
    }

    .vl-vi-credit-card::before {
        content: '\\f17c';
    }

    .vl-vi-credit-card--after::after {
        content: '\\f17c';
    }

    .vl-vi-crop::before {
        content: '\\f17d';
    }

    .vl-vi-crop--after::after {
        content: '\\f17d';
    }

    .vl-vi-cross-thin::before {
        content: '\\f17e';
    }

    .vl-vi-cross-thin--after::after {
        content: '\\f17e';
    }

    .vl-vi-cross::before {
        content: '\\f17f';
    }

    .vl-vi-cross--after::after {
        content: '\\f17f';
    }

    .vl-vi-cursor-arrow-big::before {
        content: '\\f180';
    }

    .vl-vi-cursor-arrow-big--after::after {
        content: '\\f180';
    }

    .vl-vi-cursor-arrow-small::before {
        content: '\\f181';
    }

    .vl-vi-cursor-arrow-small--after::after {
        content: '\\f181';
    }

    .vl-vi-cursor-finger-down::before {
        content: '\\f182';
    }

    .vl-vi-cursor-finger-down--after::after {
        content: '\\f182';
    }

    .vl-vi-cursor-finger-left::before {
        content: '\\f183';
    }

    .vl-vi-cursor-finger-left--after::after {
        content: '\\f183';
    }

    .vl-vi-cursor-finger-right::before {
        content: '\\f184';
    }

    .vl-vi-cursor-finger-right--after::after {
        content: '\\f184';
    }

    .vl-vi-cursor-finger-up::before {
        content: '\\f185';
    }

    .vl-vi-cursor-finger-up--after::after {
        content: '\\f185';
    }

    .vl-vi-cursor-hand::before {
        content: '\\f186';
    }

    .vl-vi-cursor-hand--after::after {
        content: '\\f186';
    }

    .vl-vi-cursor-hold::before {
        content: '\\f187';
    }

    .vl-vi-cursor-hold--after::after {
        content: '\\f187';
    }

    .vl-vi-dashboard::before {
        content: '\\f188';
    }

    .vl-vi-dashboard--after::after {
        content: '\\f188';
    }

    .vl-vi-data-download::before {
        content: '\\f189';
    }

    .vl-vi-data-download--after::after {
        content: '\\f189';
    }

    .vl-vi-data-transfer::before {
        content: '\\f18a';
    }

    .vl-vi-data-transfer--after::after {
        content: '\\f18a';
    }

    .vl-vi-data-upload::before {
        content: '\\f18b';
    }

    .vl-vi-data-upload--after::after {
        content: '\\f18b';
    }

    .vl-vi-demonstration::before {
        content: '\\f18c';
    }

    .vl-vi-demonstration--after::after {
        content: '\\f18c';
    }

    .vl-vi-diagram::before {
        content: '\\f18d';
    }

    .vl-vi-diagram--after::after {
        content: '\\f18d';
    }

    .vl-vi-direction-sign::before {
        content: '\\f18e';
    }

    .vl-vi-direction-sign--after::after {
        content: '\\f18e';
    }

    .vl-vi-document-small::before {
        content: '\\f18f';
    }

    .vl-vi-document-small--after::after {
        content: '\\f18f';
    }

    .vl-vi-document::before {
        content: '\\f190';
    }

    .vl-vi-document--after::after {
        content: '\\f190';
    }

    .vl-vi-double-arrow::before {
        content: '\\f191';
    }

    .vl-vi-double-arrow--after::after {
        content: '\\f191';
    }

    .vl-vi-download-harddisk::before {
        content: '\\f192';
    }

    .vl-vi-download-harddisk--after::after {
        content: '\\f192';
    }

    .vl-vi-drawer-down::before {
        content: '\\f193';
    }

    .vl-vi-drawer-down--after::after {
        content: '\\f193';
    }

    .vl-vi-drawer::before {
        content: '\\f194';
    }

    .vl-vi-drawer--after::after {
        content: '\\f194';
    }

    .vl-vi-drink-bottle::before {
        content: '\\f195';
    }

    .vl-vi-drink-bottle--after::after {
        content: '\\f195';
    }

    .vl-vi-eco-throw-trash::before {
        content: '\\f196';
    }

    .vl-vi-eco-throw-trash--after::after {
        content: '\\f196';
    }

    .vl-vi-edit::before {
        content: '\\f197';
    }

    .vl-vi-edit--after::after {
        content: '\\f197';
    }

    .vl-vi-eloket::before {
        content: '\\f198';
    }

    .vl-vi-eloket--after::after {
        content: '\\f198';
    }

    .vl-vi-email-read::before {
        content: '\\f199';
    }

    .vl-vi-email-read--after::after {
        content: '\\f199';
    }

    .vl-vi-email::before {
        content: '\\f19a';
    }

    .vl-vi-email--after::after {
        content: '\\f19a';
    }

    .vl-vi-enlarge::before {
        content: '\\f19b';
    }

    .vl-vi-enlarge--after::after {
        content: '\\f19b';
    }

    .vl-vi-envelope::before {
        content: '\\f19c';
    }

    .vl-vi-envelope--after::after {
        content: '\\f19c';
    }

    .vl-vi-expand-horizontal-alt::before {
        content: '\\f19d';
    }

    .vl-vi-expand-horizontal-alt--after::after {
        content: '\\f19d';
    }

    .vl-vi-expand-horizontal::before {
        content: '\\f19e';
    }

    .vl-vi-expand-horizontal--after::after {
        content: '\\f19e';
    }

    .vl-vi-expand-vertical::before {
        content: '\\f19f';
    }

    .vl-vi-expand-vertical--after::after {
        content: '\\f19f';
    }

    .vl-vi-expand::before {
        content: '\\f1a0';
    }

    .vl-vi-expand--after::after {
        content: '\\f1a0';
    }

    .vl-vi-external::before {
        content: '\\f1a1';
    }

    .vl-vi-external--after::after {
        content: '\\f1a1';
    }

    .vl-vi-face-id::before {
        content: '\\f1a2';
    }

    .vl-vi-face-id--after::after {
        content: '\\f1a2';
    }

    .vl-vi-facebook::before {
        content: '\\f1a3';
    }

    .vl-vi-facebook--after::after {
        content: '\\f1a3';
    }

    .vl-vi-faq::before {
        content: '\\f1a4';
    }

    .vl-vi-faq--after::after {
        content: '\\f1a4';
    }

    .vl-vi-fastback::before {
        content: '\\f1a5';
    }

    .vl-vi-fastback--after::after {
        content: '\\f1a5';
    }

    .vl-vi-fastforward::before {
        content: '\\f1a6';
    }

    .vl-vi-fastforward--after::after {
        content: '\\f1a6';
    }

    .vl-vi-fax::before {
        content: '\\f1a7';
    }

    .vl-vi-fax--after::after {
        content: '\\f1a7';
    }

    .vl-vi-field::before {
        content: '\\f1a8';
    }

    .vl-vi-field--after::after {
        content: '\\f1a8';
    }

    .vl-vi-file-audio::before {
        content: '\\f1a9';
    }

    .vl-vi-file-audio--after::after {
        content: '\\f1a9';
    }

    .vl-vi-file-copy::before {
        content: '\\f1aa';
    }

    .vl-vi-file-copy--after::after {
        content: '\\f1aa';
    }

    .vl-vi-file-download::before {
        content: '\\f1ab';
    }

    .vl-vi-file-download--after::after {
        content: '\\f1ab';
    }

    .vl-vi-file-edit::before {
        content: '\\f1ac';
    }

    .vl-vi-file-edit--after::after {
        content: '\\f1ac';
    }

    .vl-vi-file-image::before {
        content: '\\f1ad';
    }

    .vl-vi-file-image--after::after {
        content: '\\f1ad';
    }

    .vl-vi-file-new::before {
        content: '\\f1ae';
    }

    .vl-vi-file-new--after::after {
        content: '\\f1ae';
    }

    .vl-vi-file-office-doc::before {
        content: '\\f1af';
    }

    .vl-vi-file-office-doc--after::after {
        content: '\\f1af';
    }

    .vl-vi-file-office-pdf::before {
        content: '\\f1b0';
    }

    .vl-vi-file-office-pdf--after::after {
        content: '\\f1b0';
    }

    .vl-vi-file-office-ppt::before {
        content: '\\f1b1';
    }

    .vl-vi-file-office-ppt--after::after {
        content: '\\f1b1';
    }

    .vl-vi-file-office-xls::before {
        content: '\\f1b2';
    }

    .vl-vi-file-office-xls--after::after {
        content: '\\f1b2';
    }

    .vl-vi-file-swap::before {
        content: '\\f1b3';
    }

    .vl-vi-file-swap--after::after {
        content: '\\f1b3';
    }

    .vl-vi-file-tasks-check::before {
        content: '\\f1b4';
    }

    .vl-vi-file-tasks-check--after::after {
        content: '\\f1b4';
    }

    .vl-vi-file-upload::before {
        content: '\\f1b5';
    }

    .vl-vi-file-upload--after::after {
        content: '\\f1b5';
    }

    .vl-vi-file-video::before {
        content: '\\f1b6';
    }

    .vl-vi-file-video--after::after {
        content: '\\f1b6';
    }

    .vl-vi-file-zipped-new::before {
        content: '\\f1b7';
    }

    .vl-vi-file-zipped-new--after::after {
        content: '\\f1b7';
    }

    .vl-vi-file-zipped-vice::before {
        content: '\\f1b8';
    }

    .vl-vi-file-zipped-vice--after::after {
        content: '\\f1b8';
    }

    .vl-vi-file::before {
        content: '\\f1b9';
    }

    .vl-vi-file--after::after {
        content: '\\f1b9';
    }

    .vl-vi-files-coding::before {
        content: '\\f1ba';
    }

    .vl-vi-files-coding--after::after {
        content: '\\f1ba';
    }

    .vl-vi-film::before {
        content: '\\f1bb';
    }

    .vl-vi-film--after::after {
        content: '\\f1bb';
    }

    .vl-vi-fingerprint::before {
        content: '\\f1bc';
    }

    .vl-vi-fingerprint--after::after {
        content: '\\f1bc';
    }

    .vl-vi-flickr::before {
        content: '\\f1bd';
    }

    .vl-vi-flickr--after::after {
        content: '\\f1bd';
    }

    .vl-vi-focus::before {
        content: '\\f1be';
    }

    .vl-vi-focus--after::after {
        content: '\\f1be';
    }

    .vl-vi-folder::before {
        content: '\\f1bf';
    }

    .vl-vi-folder--after::after {
        content: '\\f1bf';
    }

    .vl-vi-font::before {
        content: '\\f1c0';
    }

    .vl-vi-font--after::after {
        content: '\\f1c0';
    }

    .vl-vi-food-apple::before {
        content: '\\f1c1';
    }

    .vl-vi-food-apple--after::after {
        content: '\\f1c1';
    }

    .vl-vi-food-grain::before {
        content: '\\f1c2';
    }

    .vl-vi-food-grain--after::after {
        content: '\\f1c2';
    }

    .vl-vi-gender-female-male::before {
        content: '\\f1c3';
    }

    .vl-vi-gender-female-male--after::after {
        content: '\\f1c3';
    }

    .vl-vi-gender-female::before {
        content: '\\f1c4';
    }

    .vl-vi-gender-female--after::after {
        content: '\\f1c4';
    }

    .vl-vi-gender-male::before {
        content: '\\f1c5';
    }

    .vl-vi-gender-male--after::after {
        content: '\\f1c5';
    }

    .vl-vi-gender-transgender::before {
        content: '\\f1c6';
    }

    .vl-vi-gender-transgender--after::after {
        content: '\\f1c6';
    }

    .vl-vi-globe-alt::before {
        content: '\\f1c7';
    }

    .vl-vi-globe-alt--after::after {
        content: '\\f1c7';
    }

    .vl-vi-globe::before {
        content: '\\f1c8';
    }

    .vl-vi-globe--after::after {
        content: '\\f1c8';
    }

    .vl-vi-googleplus::before {
        content: '\\f1c9';
    }

    .vl-vi-googleplus--after::after {
        content: '\\f1c9';
    }

    .vl-vi-graduate::before {
        content: '\\f1ca';
    }

    .vl-vi-graduate--after::after {
        content: '\\f1ca';
    }

    .vl-vi-graduation-hat::before {
        content: '\\f1cb';
    }

    .vl-vi-graduation-hat--after::after {
        content: '\\f1cb';
    }

    .vl-vi-hammer-anvil::before {
        content: '\\f1cc';
    }

    .vl-vi-hammer-anvil--after::after {
        content: '\\f1cc';
    }

    .vl-vi-hammer::before {
        content: '\\f1cd';
    }

    .vl-vi-hammer--after::after {
        content: '\\f1cd';
    }

    .vl-vi-hand-hint::before {
        content: '\\f1ce';
    }

    .vl-vi-hand-hint--after::after {
        content: '\\f1ce';
    }

    .vl-vi-harddisk::before {
        content: '\\f1cf';
    }

    .vl-vi-harddisk--after::after {
        content: '\\f1cf';
    }

    .vl-vi-headphone::before {
        content: '\\f1d0';
    }

    .vl-vi-headphone--after::after {
        content: '\\f1d0';
    }

    .vl-vi-health-first-aid-kit::before {
        content: '\\f1d1';
    }

    .vl-vi-health-first-aid-kit--after::after {
        content: '\\f1d1';
    }

    .vl-vi-health-heart-pulse::before {
        content: '\\f1d2';
    }

    .vl-vi-health-heart-pulse--after::after {
        content: '\\f1d2';
    }

    .vl-vi-health-hospital::before {
        content: '\\f1d3';
    }

    .vl-vi-health-hospital--after::after {
        content: '\\f1d3';
    }

    .vl-vi-hide::before {
        content: '\\f1d4';
    }

    .vl-vi-hide--after::after {
        content: '\\f1d4';
    }

    .vl-vi-hierarchy::before {
        content: '\\f1d5';
    }

    .vl-vi-hierarchy--after::after {
        content: '\\f1d5';
    }

    .vl-vi-hotel-bath-shower::before {
        content: '\\f1d6';
    }

    .vl-vi-hotel-bath-shower--after::after {
        content: '\\f1d6';
    }

    .vl-vi-hotel-bed::before {
        content: '\\f1d7';
    }

    .vl-vi-hotel-bed--after::after {
        content: '\\f1d7';
    }

    .vl-vi-hotel-fire-alarm::before {
        content: '\\f1d8';
    }

    .vl-vi-hotel-fire-alarm--after::after {
        content: '\\f1d8';
    }

    .vl-vi-hotel-shower::before {
        content: '\\f1d9';
    }

    .vl-vi-hotel-shower--after::after {
        content: '\\f1d9';
    }

    .vl-vi-hourglass::before {
        content: '\\f1da';
    }

    .vl-vi-hourglass--after::after {
        content: '\\f1da';
    }

    .vl-vi-id-card::before {
        content: '\\f1db';
    }

    .vl-vi-id-card--after::after {
        content: '\\f1db';
    }

    .vl-vi-id::before {
        content: '\\f1dc';
    }

    .vl-vi-id--after::after {
        content: '\\f1dc';
    }

    .vl-vi-images-copy::before {
        content: '\\f1dd';
    }

    .vl-vi-images-copy--after::after {
        content: '\\f1dd';
    }

    .vl-vi-images::before {
        content: '\\f1de';
    }

    .vl-vi-images--after::after {
        content: '\\f1de';
    }

    .vl-vi-inbox::before {
        content: '\\f1df';
    }

    .vl-vi-inbox--after::after {
        content: '\\f1df';
    }

    .vl-vi-indent-left::before {
        content: '\\f1e0';
    }

    .vl-vi-indent-left--after::after {
        content: '\\f1e0';
    }

    .vl-vi-indent-right::before {
        content: '\\f1e1';
    }

    .vl-vi-indent-right--after::after {
        content: '\\f1e1';
    }

    .vl-vi-info-circle::before {
        content: '\\f1e2';
    }

    .vl-vi-info-circle--after::after {
        content: '\\f1e2';
    }

    .vl-vi-info-filled::before {
        content: '\\f1e3';
    }

    .vl-vi-info-filled--after::after {
        content: '\\f1e3';
    }

    .vl-vi-info-naked::before {
        content: '\\f1e4';
    }

    .vl-vi-info-naked--after::after {
        content: '\\f1e4';
    }

    .vl-vi-info::before {
        content: '\\f1e5';
    }

    .vl-vi-info--after::after {
        content: '\\f1e5';
    }

    .vl-vi-instagram::before {
        content: '\\f1e6';
    }

    .vl-vi-instagram--after::after {
        content: '\\f1e6';
    }

    .vl-vi-ironing::before {
        content: '\\f1e7';
    }

    .vl-vi-ironing--after::after {
        content: '\\f1e7';
    }

    .vl-vi-italic::before {
        content: '\\f1e8';
    }

    .vl-vi-italic--after::after {
        content: '\\f1e8';
    }

    .vl-vi-jira::before {
        content: '\\f1e9';
    }

    .vl-vi-jira--after::after {
        content: '\\f1e9';
    }

    .vl-vi-key::before {
        content: '\\f1ea';
    }

    .vl-vi-key--after::after {
        content: '\\f1ea';
    }

    .vl-vi-keyboard::before {
        content: '\\f1eb';
    }

    .vl-vi-keyboard--after::after {
        content: '\\f1eb';
    }

    .vl-vi-laptop::before {
        content: '\\f1ec';
    }

    .vl-vi-laptop--after::after {
        content: '\\f1ec';
    }

    .vl-vi-leisure-ticket::before {
        content: '\\f1ed';
    }

    .vl-vi-leisure-ticket--after::after {
        content: '\\f1ed';
    }

    .vl-vi-lightbulb::before {
        content: '\\f1ee';
    }

    .vl-vi-lightbulb--after::after {
        content: '\\f1ee';
    }

    .vl-vi-link-broken::before {
        content: '\\f1ef';
    }

    .vl-vi-link-broken--after::after {
        content: '\\f1ef';
    }

    .vl-vi-link::before {
        content: '\\f1f0';
    }

    .vl-vi-link--after::after {
        content: '\\f1f0';
    }

    .vl-vi-linkedin::before {
        content: '\\f1f1';
    }

    .vl-vi-linkedin--after::after {
        content: '\\f1f1';
    }

    .vl-vi-list-add::before {
        content: '\\f1f2';
    }

    .vl-vi-list-add--after::after {
        content: '\\f1f2';
    }

    .vl-vi-list-bullets-alt::before {
        content: '\\f1f3';
    }

    .vl-vi-list-bullets-alt--after::after {
        content: '\\f1f3';
    }

    .vl-vi-list-bullets::before {
        content: '\\f1f4';
    }

    .vl-vi-list-bullets--after::after {
        content: '\\f1f4';
    }

    .vl-vi-list-numbers::before {
        content: '\\f1f5';
    }

    .vl-vi-list-numbers--after::after {
        content: '\\f1f5';
    }

    .vl-vi-list::before {
        content: '\\f1f6';
    }

    .vl-vi-list--after::after {
        content: '\\f1f6';
    }

    .vl-vi-loader::before {
        content: '\\f1f7';
    }

    .vl-vi-loader--after::after {
        content: '\\f1f7';
    }

    .vl-vi-location-direction-arrow::before {
        content: '\\f1f8';
    }

    .vl-vi-location-direction-arrow--after::after {
        content: '\\f1f8';
    }

    .vl-vi-location-gps::before {
        content: '\\f1f9';
    }

    .vl-vi-location-gps--after::after {
        content: '\\f1f9';
    }

    .vl-vi-location-map::before {
        content: '\\f1fa';
    }

    .vl-vi-location-map--after::after {
        content: '\\f1fa';
    }

    .vl-vi-location::before {
        content: '\\f1fb';
    }

    .vl-vi-location--after::after {
        content: '\\f1fb';
    }

    .vl-vi-lock-unlock::before {
        content: '\\f1fc';
    }

    .vl-vi-lock-unlock--after::after {
        content: '\\f1fc';
    }

    .vl-vi-lock::before {
        content: '\\f1fd';
    }

    .vl-vi-lock--after::after {
        content: '\\f1fd';
    }

    .vl-vi-login::before {
        content: '\\f1fe';
    }

    .vl-vi-login--after::after {
        content: '\\f1fe';
    }

    .vl-vi-logout::before {
        content: '\\f1ff';
    }

    .vl-vi-logout--after::after {
        content: '\\f1ff';
    }

    .vl-vi-long-arrow::before {
        content: '\\f200';
    }

    .vl-vi-long-arrow--after::after {
        content: '\\f200';
    }

    .vl-vi-magic-wand::before {
        content: '\\f201';
    }

    .vl-vi-magic-wand--after::after {
        content: '\\f201';
    }

    .vl-vi-magnifier::before {
        content: '\\f202';
    }

    .vl-vi-magnifier--after::after {
        content: '\\f202';
    }

    .vl-vi-mail::before {
        content: '\\f203';
    }

    .vl-vi-mail--after::after {
        content: '\\f203';
    }

    .vl-vi-market::before {
        content: '\\f204';
    }

    .vl-vi-market--after::after {
        content: '\\f204';
    }

    .vl-vi-menu::before {
        content: '\\f205';
    }

    .vl-vi-menu--after::after {
        content: '\\f205';
    }

    .vl-vi-messenger::before {
        content: '\\f206';
    }

    .vl-vi-messenger--after::after {
        content: '\\f206';
    }

    .vl-vi-microphone-off::before {
        content: '\\f207';
    }

    .vl-vi-microphone-off--after::after {
        content: '\\f207';
    }

    .vl-vi-microphone::before {
        content: '\\f208';
    }

    .vl-vi-microphone--after::after {
        content: '\\f208';
    }

    .vl-vi-milk-carton::before {
        content: '\\f209';
    }

    .vl-vi-milk-carton--after::after {
        content: '\\f209';
    }

    .vl-vi-minus-circle::before {
        content: '\\f20a';
    }

    .vl-vi-minus-circle--after::after {
        content: '\\f20a';
    }

    .vl-vi-minus::before {
        content: '\\f20b';
    }

    .vl-vi-minus--after::after {
        content: '\\f20b';
    }

    .vl-vi-mobile-phone::before {
        content: '\\f20c';
    }

    .vl-vi-mobile-phone--after::after {
        content: '\\f20c';
    }

    .vl-vi-money-note::before {
        content: '\\f20d';
    }

    .vl-vi-money-note--after::after {
        content: '\\f20d';
    }

    .vl-vi-move-down::before {
        content: '\\f20e';
    }

    .vl-vi-move-down--after::after {
        content: '\\f20e';
    }

    .vl-vi-move-left-right::before {
        content: '\\f20f';
    }

    .vl-vi-move-left-right--after::after {
        content: '\\f20f';
    }

    .vl-vi-move-up::before {
        content: '\\f210';
    }

    .vl-vi-move-up--after::after {
        content: '\\f210';
    }

    .vl-vi-moving-elevator::before {
        content: '\\f211';
    }

    .vl-vi-moving-elevator--after::after {
        content: '\\f211';
    }

    .vl-vi-music-note::before {
        content: '\\f212';
    }

    .vl-vi-music-note--after::after {
        content: '\\f212';
    }

    .vl-vi-nature-leaf::before {
        content: '\\f213';
    }

    .vl-vi-nature-leaf--after::after {
        content: '\\f213';
    }

    .vl-vi-nature-tree::before {
        content: '\\f214';
    }

    .vl-vi-nature-tree--after::after {
        content: '\\f214';
    }

    .vl-vi-nav-down-double::before {
        content: '\\f215';
    }

    .vl-vi-nav-down-double--after::after {
        content: '\\f215';
    }

    .vl-vi-nav-down-light::before {
        content: '\\f216';
    }

    .vl-vi-nav-down-light--after::after {
        content: '\\f216';
    }

    .vl-vi-nav-down::before {
        content: '\\f217';
    }

    .vl-vi-nav-down--after::after {
        content: '\\f217';
    }

    .vl-vi-nav-left-double::before {
        content: '\\f218';
    }

    .vl-vi-nav-left-double--after::after {
        content: '\\f218';
    }

    .vl-vi-nav-left-light::before {
        content: '\\f219';
    }

    .vl-vi-nav-left-light--after::after {
        content: '\\f219';
    }

    .vl-vi-nav-left::before {
        content: '\\f21a';
    }

    .vl-vi-nav-left--after::after {
        content: '\\f21a';
    }

    .vl-vi-nav-right-double::before {
        content: '\\f21b';
    }

    .vl-vi-nav-right-double--after::after {
        content: '\\f21b';
    }

    .vl-vi-nav-right-light::before {
        content: '\\f21c';
    }

    .vl-vi-nav-right-light--after::after {
        content: '\\f21c';
    }

    .vl-vi-nav-right::before {
        content: '\\f21d';
    }

    .vl-vi-nav-right--after::after {
        content: '\\f21d';
    }

    .vl-vi-nav-show-more-horizontal::before {
        content: '\\f21e';
    }

    .vl-vi-nav-show-more-horizontal--after::after {
        content: '\\f21e';
    }

    .vl-vi-nav-show-more-vertical::before {
        content: '\\f21f';
    }

    .vl-vi-nav-show-more-vertical--after::after {
        content: '\\f21f';
    }

    .vl-vi-nav-up-double::before {
        content: '\\f220';
    }

    .vl-vi-nav-up-double--after::after {
        content: '\\f220';
    }

    .vl-vi-nav-up-light::before {
        content: '\\f221';
    }

    .vl-vi-nav-up-light--after::after {
        content: '\\f221';
    }

    .vl-vi-nav-up::before {
        content: '\\f222';
    }

    .vl-vi-nav-up--after::after {
        content: '\\f222';
    }

    .vl-vi-news::before {
        content: '\\f223';
    }

    .vl-vi-news--after::after {
        content: '\\f223';
    }

    .vl-vi-newsletter::before {
        content: '\\f224';
    }

    .vl-vi-newsletter--after::after {
        content: '\\f224';
    }

    .vl-vi-newspaper::before {
        content: '\\f225';
    }

    .vl-vi-newspaper--after::after {
        content: '\\f225';
    }

    .vl-vi-next::before {
        content: '\\f226';
    }

    .vl-vi-next--after::after {
        content: '\\f226';
    }

    .vl-vi-organization-network::before {
        content: '\\f227';
    }

    .vl-vi-organization-network--after::after {
        content: '\\f227';
    }

    .vl-vi-other-annoyances-alt::before {
        content: '\\f228';
    }

    .vl-vi-other-annoyances-alt--after::after {
        content: '\\f228';
    }

    .vl-vi-other-annoyances::before {
        content: '\\f229';
    }

    .vl-vi-other-annoyances--after::after {
        content: '\\f229';
    }

    .vl-vi-paint-brush::before {
        content: '\\f22a';
    }

    .vl-vi-paint-brush--after::after {
        content: '\\f22a';
    }

    .vl-vi-paper::before {
        content: '\\f22b';
    }

    .vl-vi-paper--after::after {
        content: '\\f22b';
    }

    .vl-vi-paperclip::before {
        content: '\\f22c';
    }

    .vl-vi-paperclip--after::after {
        content: '\\f22c';
    }

    .vl-vi-paperplane::before {
        content: '\\f22d';
    }

    .vl-vi-paperplane--after::after {
        content: '\\f22d';
    }

    .vl-vi-paragraph::before {
        content: '\\f22e';
    }

    .vl-vi-paragraph--after::after {
        content: '\\f22e';
    }

    .vl-vi-pause::before {
        content: '\\f22f';
    }

    .vl-vi-pause--after::after {
        content: '\\f22f';
    }

    .vl-vi-pencil-ruler::before {
        content: '\\f230';
    }

    .vl-vi-pencil-ruler--after::after {
        content: '\\f230';
    }

    .vl-vi-pencil-write::before {
        content: '\\f231';
    }

    .vl-vi-pencil-write--after::after {
        content: '\\f231';
    }

    .vl-vi-pencil::before {
        content: '\\f232';
    }

    .vl-vi-pencil--after::after {
        content: '\\f232';
    }

    .vl-vi-pennants::before {
        content: '\\f233';
    }

    .vl-vi-pennants--after::after {
        content: '\\f233';
    }

    .vl-vi-phone-incoming::before {
        content: '\\f234';
    }

    .vl-vi-phone-incoming--after::after {
        content: '\\f234';
    }

    .vl-vi-phone-off::before {
        content: '\\f235';
    }

    .vl-vi-phone-off--after::after {
        content: '\\f235';
    }

    .vl-vi-phone-outgoing::before {
        content: '\\f236';
    }

    .vl-vi-phone-outgoing--after::after {
        content: '\\f236';
    }

    .vl-vi-phone-record::before {
        content: '\\f237';
    }

    .vl-vi-phone-record--after::after {
        content: '\\f237';
    }

    .vl-vi-phone-signal-low::before {
        content: '\\f238';
    }

    .vl-vi-phone-signal-low--after::after {
        content: '\\f238';
    }

    .vl-vi-phone-speaker::before {
        content: '\\f239';
    }

    .vl-vi-phone-speaker--after::after {
        content: '\\f239';
    }

    .vl-vi-phone::before {
        content: '\\f23a';
    }

    .vl-vi-phone--after::after {
        content: '\\f23a';
    }

    .vl-vi-pick-up::before {
        content: '\\f23b';
    }

    .vl-vi-pick-up--after::after {
        content: '\\f23b';
    }

    .vl-vi-pin-paper::before {
        content: '\\f23c';
    }

    .vl-vi-pin-paper--after::after {
        content: '\\f23c';
    }

    .vl-vi-pin::before {
        content: '\\f23d';
    }

    .vl-vi-pin--after::after {
        content: '\\f23d';
    }

    .vl-vi-pinterest::before {
        content: '\\f23e';
    }

    .vl-vi-pinterest--after::after {
        content: '\\f23e';
    }

    .vl-vi-places-factory::before {
        content: '\\f23f';
    }

    .vl-vi-places-factory--after::after {
        content: '\\f23f';
    }

    .vl-vi-places-home::before {
        content: '\\f240';
    }

    .vl-vi-places-home--after::after {
        content: '\\f240';
    }

    .vl-vi-play::before {
        content: '\\f241';
    }

    .vl-vi-play--after::after {
        content: '\\f241';
    }

    .vl-vi-playstreet::before {
        content: '\\f242';
    }

    .vl-vi-playstreet--after::after {
        content: '\\f242';
    }

    .vl-vi-plug::before {
        content: '\\f243';
    }

    .vl-vi-plug--after::after {
        content: '\\f243';
    }

    .vl-vi-plus-circle-filled::before {
        content: '\\f244';
    }

    .vl-vi-plus-circle-filled--after::after {
        content: '\\f244';
    }

    .vl-vi-plus-circle::before {
        content: '\\f245';
    }

    .vl-vi-plus-circle--after::after {
        content: '\\f245';
    }

    .vl-vi-plus-naked::before {
        content: '\\f246';
    }

    .vl-vi-plus-naked--after::after {
        content: '\\f246';
    }

    .vl-vi-plus::before {
        content: '\\f247';
    }

    .vl-vi-plus--after::after {
        content: '\\f247';
    }

    .vl-vi-power-button::before {
        content: '\\f248';
    }

    .vl-vi-power-button--after::after {
        content: '\\f248';
    }

    .vl-vi-printer-view::before {
        content: '\\f249';
    }

    .vl-vi-printer-view--after::after {
        content: '\\f249';
    }

    .vl-vi-printer::before {
        content: '\\f24a';
    }

    .vl-vi-printer--after::after {
        content: '\\f24a';
    }

    .vl-vi-profile-active::before {
        content: '\\f24b';
    }

    .vl-vi-profile-active--after::after {
        content: '\\f24b';
    }

    .vl-vi-programming-bug::before {
        content: '\\f24c';
    }

    .vl-vi-programming-bug--after::after {
        content: '\\f24c';
    }

    .vl-vi-programming-jigsaw::before {
        content: '\\f24d';
    }

    .vl-vi-programming-jigsaw--after::after {
        content: '\\f24d';
    }

    .vl-vi-publication::before {
        content: '\\f24e';
    }

    .vl-vi-publication--after::after {
        content: '\\f24e';
    }

    .vl-vi-question-mark-filled::before {
        content: '\\f24f';
    }

    .vl-vi-question-mark-filled--after::after {
        content: '\\f24f';
    }

    .vl-vi-question-mark-small::before {
        content: '\\f250';
    }

    .vl-vi-question-mark-small--after::after {
        content: '\\f250';
    }

    .vl-vi-question-mark::before {
        content: '\\f251';
    }

    .vl-vi-question-mark--after::after {
        content: '\\f251';
    }

    .vl-vi-question::before {
        content: '\\f252';
    }

    .vl-vi-question--after::after {
        content: '\\f252';
    }

    .vl-vi-recreation::before {
        content: '\\f253';
    }

    .vl-vi-recreation--after::after {
        content: '\\f253';
    }

    .vl-vi-reply-all::before {
        content: '\\f254';
    }

    .vl-vi-reply-all--after::after {
        content: '\\f254';
    }

    .vl-vi-reply::before {
        content: '\\f255';
    }

    .vl-vi-reply--after::after {
        content: '\\f255';
    }

    .vl-vi-rewards-certified-badge::before {
        content: '\\f256';
    }

    .vl-vi-rewards-certified-badge--after::after {
        content: '\\f256';
    }

    .vl-vi-rewards-gift::before {
        content: '\\f257';
    }

    .vl-vi-rewards-gift--after::after {
        content: '\\f257';
    }

    .vl-vi-road-block::before {
        content: '\\f258';
    }

    .vl-vi-road-block--after::after {
        content: '\\f258';
    }

    .vl-vi-road::before {
        content: '\\f259';
    }

    .vl-vi-road--after::after {
        content: '\\f259';
    }

    .vl-vi-romance-marriage-license::before {
        content: '\\f25a';
    }

    .vl-vi-romance-marriage-license--after::after {
        content: '\\f25a';
    }

    .vl-vi-ruler::before {
        content: '\\f25b';
    }

    .vl-vi-ruler--after::after {
        content: '\\f25b';
    }

    .vl-vi-safe::before {
        content: '\\f25c';
    }

    .vl-vi-safe--after::after {
        content: '\\f25c';
    }

    .vl-vi-save::before {
        content: '\\f25d';
    }

    .vl-vi-save--after::after {
        content: '\\f25d';
    }

    .vl-vi-scaffold::before {
        content: '\\f25e';
    }

    .vl-vi-scaffold--after::after {
        content: '\\f25e';
    }

    .vl-vi-scan::before {
        content: '\\f25f';
    }

    .vl-vi-scan--after::after {
        content: '\\f25f';
    }

    .vl-vi-scissors::before {
        content: '\\f260';
    }

    .vl-vi-scissors--after::after {
        content: '\\f260';
    }

    .vl-vi-search::before {
        content: '\\f261';
    }

    .vl-vi-search--after::after {
        content: '\\f261';
    }

    .vl-vi-server::before {
        content: '\\f262';
    }

    .vl-vi-server--after::after {
        content: '\\f262';
    }

    .vl-vi-settings::before {
        content: '\\f263';
    }

    .vl-vi-settings--after::after {
        content: '\\f263';
    }

    .vl-vi-share-megaphone::before {
        content: '\\f264';
    }

    .vl-vi-share-megaphone--after::after {
        content: '\\f264';
    }

    .vl-vi-share-rss-feed::before {
        content: '\\f265';
    }

    .vl-vi-share-rss-feed--after::after {
        content: '\\f265';
    }

    .vl-vi-share::before {
        content: '\\f266';
    }

    .vl-vi-share--after::after {
        content: '\\f266';
    }

    .vl-vi-shipping-truck::before {
        content: '\\f267';
    }

    .vl-vi-shipping-truck--after::after {
        content: '\\f267';
    }

    .vl-vi-shopping-basket-add::before {
        content: '\\f268';
    }

    .vl-vi-shopping-basket-add--after::after {
        content: '\\f268';
    }

    .vl-vi-shopping-basket-subtract::before {
        content: '\\f269';
    }

    .vl-vi-shopping-basket-subtract--after::after {
        content: '\\f269';
    }

    .vl-vi-shopping-basket::before {
        content: '\\f26a';
    }

    .vl-vi-shopping-basket--after::after {
        content: '\\f26a';
    }

    .vl-vi-shopping-cart::before {
        content: '\\f26b';
    }

    .vl-vi-shopping-cart--after::after {
        content: '\\f26b';
    }

    .vl-vi-shopping::before {
        content: '\\f26c';
    }

    .vl-vi-shopping--after::after {
        content: '\\f26c';
    }

    .vl-vi-shrink::before {
        content: '\\f26d';
    }

    .vl-vi-shrink--after::after {
        content: '\\f26d';
    }

    .vl-vi-sign-disable::before {
        content: '\\f26e';
    }

    .vl-vi-sign-disable--after::after {
        content: '\\f26e';
    }

    .vl-vi-sign-recycle::before {
        content: '\\f26f';
    }

    .vl-vi-sign-recycle--after::after {
        content: '\\f26f';
    }

    .vl-vi-sitemap::before {
        content: '\\f270';
    }

    .vl-vi-sitemap--after::after {
        content: '\\f270';
    }

    .vl-vi-skype::before {
        content: '\\f271';
    }

    .vl-vi-skype--after::after {
        content: '\\f271';
    }

    .vl-vi-smiley-poker-face::before {
        content: '\\f272';
    }

    .vl-vi-smiley-poker-face--after::after {
        content: '\\f272';
    }

    .vl-vi-smiley-smile::before {
        content: '\\f273';
    }

    .vl-vi-smiley-smile--after::after {
        content: '\\f273';
    }

    .vl-vi-snapchat::before {
        content: '\\f274';
    }

    .vl-vi-snapchat--after::after {
        content: '\\f274';
    }

    .vl-vi-snippet::before {
        content: '\\f275';
    }

    .vl-vi-snippet--after::after {
        content: '\\f275';
    }

    .vl-vi-sort::before {
        content: '\\f276';
    }

    .vl-vi-sort--after::after {
        content: '\\f276';
    }

    .vl-vi-speaker-volume-decrease::before {
        content: '\\f277';
    }

    .vl-vi-speaker-volume-decrease--after::after {
        content: '\\f277';
    }

    .vl-vi-speaker-volume-high::before {
        content: '\\f278';
    }

    .vl-vi-speaker-volume-high--after::after {
        content: '\\f278';
    }

    .vl-vi-speaker-volume-increase::before {
        content: '\\f279';
    }

    .vl-vi-speaker-volume-increase--after::after {
        content: '\\f279';
    }

    .vl-vi-speaker-volume-low::before {
        content: '\\f27a';
    }

    .vl-vi-speaker-volume-low--after::after {
        content: '\\f27a';
    }

    .vl-vi-speaker-volume-medium::before {
        content: '\\f27b';
    }

    .vl-vi-speaker-volume-medium--after::after {
        content: '\\f27b';
    }

    .vl-vi-speaker-volume-off::before {
        content: '\\f27c';
    }

    .vl-vi-speaker-volume-off--after::after {
        content: '\\f27c';
    }

    .vl-vi-sports-competition::before {
        content: '\\f27d';
    }

    .vl-vi-sports-competition--after::after {
        content: '\\f27d';
    }

    .vl-vi-spotify::before {
        content: '\\f27e';
    }

    .vl-vi-spotify--after::after {
        content: '\\f27e';
    }

    .vl-vi-stop::before {
        content: '\\f27f';
    }

    .vl-vi-stop--after::after {
        content: '\\f27f';
    }

    .vl-vi-subtract-filled::before {
        content: '\\f280';
    }

    .vl-vi-subtract-filled--after::after {
        content: '\\f280';
    }

    .vl-vi-subtract-naked::before {
        content: '\\f281';
    }

    .vl-vi-subtract-naked--after::after {
        content: '\\f281';
    }

    .vl-vi-subtract::before {
        content: '\\f282';
    }

    .vl-vi-subtract--after::after {
        content: '\\f282';
    }

    .vl-vi-subway::before {
        content: '\\f283';
    }

    .vl-vi-subway--after::after {
        content: '\\f283';
    }

    .vl-vi-suitcase::before {
        content: '\\f284';
    }

    .vl-vi-suitcase--after::after {
        content: '\\f284';
    }

    .vl-vi-switches::before {
        content: '\\f285';
    }

    .vl-vi-switches--after::after {
        content: '\\f285';
    }

    .vl-vi-symbol-wifi-check::before {
        content: '\\f286';
    }

    .vl-vi-symbol-wifi-check--after::after {
        content: '\\f286';
    }

    .vl-vi-symbol-wifi-close::before {
        content: '\\f287';
    }

    .vl-vi-symbol-wifi-close--after::after {
        content: '\\f287';
    }

    .vl-vi-symbol-wifi::before {
        content: '\\f288';
    }

    .vl-vi-symbol-wifi--after::after {
        content: '\\f288';
    }

    .vl-vi-synchronize-timeout::before {
        content: '\\f289';
    }

    .vl-vi-synchronize-timeout--after::after {
        content: '\\f289';
    }

    .vl-vi-synchronize::before {
        content: '\\f28a';
    }

    .vl-vi-synchronize--after::after {
        content: '\\f28a';
    }

    .vl-vi-t-shirt::before {
        content: '\\f28b';
    }

    .vl-vi-t-shirt--after::after {
        content: '\\f28b';
    }

    .vl-vi-tablet::before {
        content: '\\f28c';
    }

    .vl-vi-tablet--after::after {
        content: '\\f28c';
    }

    .vl-vi-tag-add::before {
        content: '\\f28d';
    }

    .vl-vi-tag-add--after::after {
        content: '\\f28d';
    }

    .vl-vi-tag-check::before {
        content: '\\f28e';
    }

    .vl-vi-tag-check--after::after {
        content: '\\f28e';
    }

    .vl-vi-tag-close::before {
        content: '\\f28f';
    }

    .vl-vi-tag-close--after::after {
        content: '\\f28f';
    }

    .vl-vi-tag-double::before {
        content: '\\f290';
    }

    .vl-vi-tag-double--after::after {
        content: '\\f290';
    }

    .vl-vi-tag-edit::before {
        content: '\\f291';
    }

    .vl-vi-tag-edit--after::after {
        content: '\\f291';
    }

    .vl-vi-tag-subtract::before {
        content: '\\f292';
    }

    .vl-vi-tag-subtract--after::after {
        content: '\\f292';
    }

    .vl-vi-tag-view::before {
        content: '\\f293';
    }

    .vl-vi-tag-view--after::after {
        content: '\\f293';
    }

    .vl-vi-tag::before {
        content: '\\f294';
    }

    .vl-vi-tag--after::after {
        content: '\\f294';
    }

    .vl-vi-taxi::before {
        content: '\\f295';
    }

    .vl-vi-taxi--after::after {
        content: '\\f295';
    }

    .vl-vi-television::before {
        content: '\\f296';
    }

    .vl-vi-television--after::after {
        content: '\\f296';
    }

    .vl-vi-terrace::before {
        content: '\\f297';
    }

    .vl-vi-terrace--after::after {
        content: '\\f297';
    }

    .vl-vi-text-cursor::before {
        content: '\\f298';
    }

    .vl-vi-text-cursor--after::after {
        content: '\\f298';
    }

    .vl-vi-text-eraser::before {
        content: '\\f299';
    }

    .vl-vi-text-eraser--after::after {
        content: '\\f299';
    }

    .vl-vi-text-redo::before {
        content: '\\f29a';
    }

    .vl-vi-text-redo--after::after {
        content: '\\f29a';
    }

    .vl-vi-text-undo::before {
        content: '\\f29b';
    }

    .vl-vi-text-undo--after::after {
        content: '\\f29b';
    }

    .vl-vi-timeline::before {
        content: '\\f29c';
    }

    .vl-vi-timeline--after::after {
        content: '\\f29c';
    }

    .vl-vi-tint::before {
        content: '\\f29d';
    }

    .vl-vi-tint--after::after {
        content: '\\f29d';
    }

    .vl-vi-train::before {
        content: '\\f29e';
    }

    .vl-vi-train--after::after {
        content: '\\f29e';
    }

    .vl-vi-trash::before {
        content: '\\f29f';
    }

    .vl-vi-trash--after::after {
        content: '\\f29f';
    }

    .vl-vi-trophy::before {
        content: '\\f2a0';
    }

    .vl-vi-trophy--after::after {
        content: '\\f2a0';
    }

    .vl-vi-twitter::before {
        content: '\\f2a1';
    }

    .vl-vi-twitter--after::after {
        content: '\\f2a1';
    }

    .vl-vi-underline::before {
        content: '\\f2a2';
    }

    .vl-vi-underline--after::after {
        content: '\\f2a2';
    }

    .vl-vi-university::before {
        content: '\\f2a3';
    }

    .vl-vi-university--after::after {
        content: '\\f2a3';
    }

    .vl-vi-up-down-arrows::before {
        content: '\\f2a4';
    }

    .vl-vi-up-down-arrows--after::after {
        content: '\\f2a4';
    }

    .vl-vi-upload-harddisk::before {
        content: '\\f2a5';
    }

    .vl-vi-upload-harddisk--after::after {
        content: '\\f2a5';
    }

    .vl-vi-usb::before {
        content: '\\f2a6';
    }

    .vl-vi-usb--after::after {
        content: '\\f2a6';
    }

    .vl-vi-user-alt::before {
        content: '\\f2a7';
    }

    .vl-vi-user-alt--after::after {
        content: '\\f2a7';
    }

    .vl-vi-user-box::before {
        content: '\\f2a8';
    }

    .vl-vi-user-box--after::after {
        content: '\\f2a8';
    }

    .vl-vi-user-download::before {
        content: '\\f2a9';
    }

    .vl-vi-user-download--after::after {
        content: '\\f2a9';
    }

    .vl-vi-user-email::before {
        content: '\\f2aa';
    }

    .vl-vi-user-email--after::after {
        content: '\\f2aa';
    }

    .vl-vi-user-female::before {
        content: '\\f2ab';
    }

    .vl-vi-user-female--after::after {
        content: '\\f2ab';
    }

    .vl-vi-user-group::before {
        content: '\\f2ac';
    }

    .vl-vi-user-group--after::after {
        content: '\\f2ac';
    }

    .vl-vi-user-male::before {
        content: '\\f2ad';
    }

    .vl-vi-user-male--after::after {
        content: '\\f2ad';
    }

    .vl-vi-user-reception::before {
        content: '\\f2ae';
    }

    .vl-vi-user-reception--after::after {
        content: '\\f2ae';
    }

    .vl-vi-user-redirect::before {
        content: '\\f2af';
    }

    .vl-vi-user-redirect--after::after {
        content: '\\f2af';
    }

    .vl-vi-user-remove::before {
        content: '\\f2b0';
    }

    .vl-vi-user-remove--after::after {
        content: '\\f2b0';
    }

    .vl-vi-user-setting::before {
        content: '\\f2b1';
    }

    .vl-vi-user-setting--after::after {
        content: '\\f2b1';
    }

    .vl-vi-user-signup::before {
        content: '\\f2b2';
    }

    .vl-vi-user-signup--after::after {
        content: '\\f2b2';
    }

    .vl-vi-user::before {
        content: '\\f2b3';
    }

    .vl-vi-user--after::after {
        content: '\\f2b3';
    }

    .vl-vi-vaccum-cleaner::before {
        content: '\\f2b4';
    }

    .vl-vi-vaccum-cleaner--after::after {
        content: '\\f2b4';
    }

    .vl-vi-video-subtitle::before {
        content: '\\f2b5';
    }

    .vl-vi-video-subtitle--after::after {
        content: '\\f2b5';
    }

    .vl-vi-view-add::before {
        content: '\\f2b6';
    }

    .vl-vi-view-add--after::after {
        content: '\\f2b6';
    }

    .vl-vi-view-hide::before {
        content: '\\f2b7';
    }

    .vl-vi-view-hide--after::after {
        content: '\\f2b7';
    }

    .vl-vi-vlaanderen::before {
        content: '\\f2b8';
    }

    .vl-vi-vlaanderen--after::after {
        content: '\\f2b8';
    }

    .vl-vi-vote-flag::before {
        content: '\\f2b9';
    }

    .vl-vi-vote-flag--after::after {
        content: '\\f2b9';
    }

    .vl-vi-vote-heart::before {
        content: '\\f2ba';
    }

    .vl-vi-vote-heart--after::after {
        content: '\\f2ba';
    }

    .vl-vi-vote-star-filled::before {
        content: '\\f2bb';
    }

    .vl-vi-vote-star-filled--after::after {
        content: '\\f2bb';
    }

    .vl-vi-vote-star::before {
        content: '\\f2bc';
    }

    .vl-vi-vote-star--after::after {
        content: '\\f2bc';
    }

    .vl-vi-vote-thumbs-down::before {
        content: '\\f2bd';
    }

    .vl-vi-vote-thumbs-down--after::after {
        content: '\\f2bd';
    }

    .vl-vi-vote-thumbs-up::before {
        content: '\\f2be';
    }

    .vl-vi-vote-thumbs-up--after::after {
        content: '\\f2be';
    }

    .vl-vi-voucher-check::before {
        content: '\\f2bf';
    }

    .vl-vi-voucher-check--after::after {
        content: '\\f2bf';
    }

    .vl-vi-voucher-download::before {
        content: '\\f2c0';
    }

    .vl-vi-voucher-download--after::after {
        content: '\\f2c0';
    }

    .vl-vi-voucher-scissors::before {
        content: '\\f2c1';
    }

    .vl-vi-voucher-scissors--after::after {
        content: '\\f2c1';
    }

    .vl-vi-vouchers-list::before {
        content: '\\f2c2';
    }

    .vl-vi-vouchers-list--after::after {
        content: '\\f2c2';
    }

    .vl-vi-wallet::before {
        content: '\\f2c3';
    }

    .vl-vi-wallet--after::after {
        content: '\\f2c3';
    }

    .vl-vi-warning::before {
        content: '\\f2c4';
    }

    .vl-vi-warning--after::after {
        content: '\\f2c4';
    }

    .vl-vi-whatsapp::before {
        content: '\\f2c5';
    }

    .vl-vi-whatsapp--after::after {
        content: '\\f2c5';
    }

    .vl-vi-whiskey-bottle-glass::before {
        content: '\\f2c6';
    }

    .vl-vi-whiskey-bottle-glass--after::after {
        content: '\\f2c6';
    }

    .vl-vi-window-forward::before {
        content: '\\f2c7';
    }

    .vl-vi-window-forward--after::after {
        content: '\\f2c7';
    }

    .vl-vi-wrench::before {
        content: '\\f2c8';
    }

    .vl-vi-wrench--after::after {
        content: '\\f2c8';
    }

    .vl-vi-www::before {
        content: '\\f2c9';
    }

    .vl-vi-www--after::after {
        content: '\\f2c9';
    }

    .vl-vi-youtube::before {
        content: '\\f2ca';
    }

    .vl-vi-youtube--after::after {
        content: '\\f2ca';
    }

    .vl-vi-zoom-in::before {
        content: '\\f2cb';
    }

    .vl-vi-zoom-in--after::after {
        content: '\\f2cb';
    }

    .vl-vi-zoom-out::before {
        content: '\\f2cc';
    }

    .vl-vi-zoom-out--after::after {
        content: '\\f2cc';
    }
    // UIG-2707: styles verwijderd voor CSP compliance
    // .vl-select {
    //     background-color: #fff;
    //     background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8.07' height='4.74' viewBox='0 0 8.07 4.74'%3E%3Cpolyline points='7.57 0.5 4.04 4.04 0.5 0.5' fill='none' stroke='%236d7884' stroke-linecap='round'/%3E%3C/svg%3E");
    //     background-repeat: no-repeat;
    //     background-size: 9px 5px;
    //     background-position: calc(100% - 1.5rem) 50%;
    //     appearance: none;
    //     display: inline-block;
    //     position: relative;
    //     padding: 0 4rem 0 1.5rem;
    //     max-width: 100%;
    //     height: 3.5rem;
    //     line-height: calc(3.5rem - 0.2rem);
    //     border: 1px solid #687483;
    //     border-radius: 0.3rem;
    //     text-decoration: none;
    //     color: #333332;
    //     font-family: 'Flanders Art Sans', sans-serif;
    //     font-size: 1.6rem;
    //     -webkit-appearance: none;
    // }
    .vl-select:focus::-ms-value {
        background: inherit;
        color: inherit;
    }
    .vl-select::-ms-expand {
        display: none;
    }
    .vl-select:hover:not([disabled]) {
        border: 0.2rem solid rgba(0, 85, 204, 0.65);
        padding: 0 3.9rem 0 1.4rem;
        line-height: 3.2rem;
        background-position: calc(100% - 1.4rem) 50%;
    }
    .vl-select:hover:not([disabled]).vl-select--error,
    .vl-select:hover:not([disabled]).invalid.validated {
        border-color: #d2373c;
    }
    .vl-select:hover:not([disabled]).vl-select--success,
    .vl-select:hover:not([disabled]).valid.validated {
        border-color: #009e47;
    }
    .vl-select:focus {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
        outline: transparent solid 0.2rem;
    }
    @supports (outline-offset: 2px) {
        .vl-select:focus {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }
    .vl-select[disabled],
    .vl-select--disabled {
        border-color: #8695a8;
        background-color: #f3f5f6;
        color: var(--vl-theme-fg-color-70);
    }
    // UIG-2707: styles verwijderd voor CSP compliance
    .vl-select--error,
    // .vl-select.invalid.validated {
    //     border-color: #d2373c;
    //     background-color: #fbebec;
    //     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8.07' height='4.74' viewBox='0 0 8.07 4.74'%3E%3Cpolyline points='7.57 0.5 4.04 4.04 0.5 0.5' fill='none' stroke='%23DB3434' stroke-linecap='round'/%3E%3C/svg%3E");
    // }
    // UIG-2707: styles verwijderd voor CSP compliance
    // .vl-select--success,
    // .vl-select.valid.validated {
    //     border-color: #009e47;
    //     background-color: #e6f5ed;
    //     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8.07' height='4.74' viewBox='0 0 8.07 4.74'%3E%3Cpolyline points='7.57 0.5 4.04 4.04 0.5 0.5' fill='none' stroke='%233CA854' stroke-linecap='round'/%3E%3C/svg%3E");
    // }
    .vl-select--block {
        display: block;
        width: 100%;
    }
    @media screen and (max-width: 767px) {
        .vl-select {
            height: 3.5rem;
            line-height: 3.5rem;
            font-size: 1.6rem;
        }
    }

    @media all and (min-width: 0\\0) and (min-resolution: 0.001dpcm) {
        .vl-select {
            padding-right: 0;
            background-image: none;
        }
    }
    // UIG-2707: styles verwijderd voor CSP compliance
    // .no-js [data-vl-select] {
    //     background-color: #fff;
    //     background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8.07' height='4.74' viewBox='0 0 8.07 4.74'%3E%3Cpolyline points='7.57 0.5 4.04 4.04 0.5 0.5' fill='none' stroke='%236d7884' stroke-linecap='round'/%3E%3C/svg%3E");
    //     background-repeat: no-repeat;
    //     background-size: 9px 5px;
    //     background-position: calc(100% - 1.5rem) 50%;
    //     appearance: none;
    //     display: inline-block;
    //     position: relative;
    //     padding: 0 4rem 0 1.5rem;
    //     max-width: 100%;
    //     height: 3.5rem;
    //     line-height: calc(3.5rem - 0.2rem);
    //     border: 1px solid #687483;
    //     border-radius: 0.3rem;
    //     text-decoration: none;
    //     color: #333332;
    //     font-family: 'Flanders Art Sans', sans-serif;
    //     font-size: 1.6rem;
    //     -webkit-appearance: none;
    // }
    .no-js [data-vl-select]:focus::-ms-value {
        background: inherit;
        color: inherit;
    }

    .js-vl-select {
        position: relative;
        border-radius: 0.3rem;
        z-index: 999;
    }
    .js-vl-select.is-disabled {
        border-color: #687483;
        background-color: #f3f5f6 !important;
        outline: 0;
    }
    .js-vl-select.is-disabled .vl-select__inner {
        border-color: #8695a8;
    }
    .js-vl-select.is-disabled .vl-select__item {
        color: var(--vl-theme-fg-color-70);
        cursor: default;
    }
    .js-vl-select.is-focused {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
        outline: transparent solid 0.2rem;
    }
    @supports (outline-offset: 2px) {
        .js-vl-select.is-focused {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }
    .js-vl-select.is-open {
        z-index: 1000;
    }
    .js-vl-select.is-open .vl-select__inner {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    .js-vl-select.is-open::after {
        transform: translateY(-0.75rem);
        border-color: transparent transparent #000;
    }
    .js-vl-select.is-flipped .vl-select__inner {
        border-radius: 0 0 0.3rem 0.3rem;
    }
    .js-vl-select.is-flipped .vl-select__list--dropdown {
        top: auto;
        bottom: 100%;
        transform: translateY(0.1rem);
        border-radius: 0.3rem 0.3rem 0 0;
    }
    .js-vl-select:hover:not(.is-disabled) .vl-select__inner {
        border-color: rgba(0, 85, 204, 0.65);
        box-shadow: inset 0 0 0 0.1rem rgba(0, 85, 204, 0.65);
    }
    // UIG-2707: styles verwijderd voor CSP compliance
    // .js-vl-select[data-type*='select-one'] {
    //     background-color: #fff;
    //     background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8.07' height='4.74' viewBox='0 0 8.07 4.74'%3E%3Cpolyline points='7.57 0.5 4.04 4.04 0.5 0.5' fill='none' stroke='%236d7884' stroke-linecap='round'/%3E%3C/svg%3E");
    //     background-repeat: no-repeat;
    //     background-size: 9px 5px;
    //     background-position: calc(100% - 1.5rem) 50%;
    //     appearance: none;
    // }
    .js-vl-select[data-type*='select-one'] .vl-input-field {
        display: block;
        padding: 0;
        color: #333332;
        overflow: hidden;
        white-space: nowrap;
    }
    .js-vl-select[data-type*='select-one'] .vl-select__list--dropdown .vl-input-field {
        width: calc(100% - (2 * 2rem));
        margin: 2rem;
        padding: 0 1rem;
        border: 0.1rem solid #687483;
    }
    .js-vl-select[data-type*='select-one'] .vl-select__item--selectable {
        min-height: calc(3.5rem - 1.2rem);
        height: calc(3.5rem - 1.2rem);
    }
    .js-vl-select[data-type*='select-one'] .vl-select__inner {
        height: 3.5rem;
        line-height: 3.5rem;
        padding-right: 3.5rem;
    }
    .js-vl-select[data-type*='select-one'][dir='rtl']::after {
        right: auto;
        left: 1.15rem;
    }
    .js-vl-select[data-type*='select-one'][dir='rtl'] .vl-select__button {
        right: auto;
        left: 0;
        margin-right: 0;
        margin-left: 2.5rem;
    }
    .js-vl-select[data-type*='select-one'][dir='rtl'] .vl-pill__close {
        margin-right: auto;
        margin-left: 0;
    }
    .js-vl-select[data-type*='select-one'] .vl-select__button {
        border: 0;
    }
    .js-vl-select[data-type*='select-one'] .vl-pill__close {
        border: 0;
        display: inline-flex;
        margin-left: auto;
    }
    .js-vl-select[data-type*='select-one'] .vl-pill__close::before,
    .js-vl-select[data-type*='select-one'] .vl-pill__close::after {
        font-family: 'vlaanderen-icon' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        text-decoration: none;
        text-transform: none;
    }
    .js-vl-select[data-type*='select-one'] .vl-pill__close::before {
        content: '\\f17f';
    }
    .js-vl-select[data-type*='select-one'] .vl-pill__close:hover,
    .js-vl-select[data-type*='select-one'] .vl-pill__close:focus,
    .js-vl-select[data-type*='select-one'] .vl-pill__close:active {
        color: #003bb0;
    }
    .js-vl-select[data-type*='select-one'].is-disabled .vl-pill__close,
    .js-vl-select[data-type*='select-one'] .vl-select__placeholder .vl-pill__close {
        display: none;
    }
    // UIG-2707: styles verwijderd voor CSP compliance
    // .js-vl-select[data-type*='select-multiple'] {
    //     background-color: #fff;
    //     background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8.07' height='4.74' viewBox='0 0 8.07 4.74'%3E%3Cpolyline points='7.57 0.5 4.04 4.04 0.5 0.5' fill='none' stroke='%236d7884' stroke-linecap='round'/%3E%3C/svg%3E");
    //     background-repeat: no-repeat;
    //     background-size: 9px 5px;
    //     background-position: calc(100% - 1.5rem) 50%;
    //     appearance: none;
    // }
    .js-vl-select[data-type*='select-multiple'],
    .js-vl-select[data-type*='text'] {
        background-color: #fff;
    }
    .js-vl-select[data-type*='select-multiple'] .vl-select__inner,
    .js-vl-select[data-type*='text'] .vl-select__inner {
        cursor: text;
    }
    .js-vl-select[data-type*='select-multiple'] .vl-select__button,
    .js-vl-select[data-type*='text'] .vl-select__button {
        display: inline-block;
        width: 2.2rem;
        height: 2.3rem;
        margin-left: 0.5rem;
        transform: translateY(-0.1rem);
        border-left: 0.1rem solid #687483;
        color: #666;
        text-align: center;
        text-decoration: none;
    }
    .js-vl-select[data-type*='select-multiple'] .vl-select__button::before,
    .js-vl-select[data-type*='select-multiple'] .vl-select__button::after,
    .js-vl-select[data-type*='text'] .vl-select__button::before,
    .js-vl-select[data-type*='text'] .vl-select__button::after {
        font-family: 'vlaanderen-icon' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        text-decoration: none;
        text-transform: none;
    }
    .js-vl-select[data-type*='select-multiple'] .vl-select__button::before,
    .js-vl-select[data-type*='text'] .vl-select__button::before {
        content: '\\f17f';
    }
    .js-vl-select[data-type*='select-multiple'] .vl-select__button::before,
    .js-vl-select[data-type*='text'] .vl-select__button::before {
        padding: 0 0.4rem;
        font-size: 1.1rem;
        text-indent: 0;
    }
    .js-vl-select[data-type*='select-multiple'] .vl-select__button:hover,
    .js-vl-select[data-type*='select-multiple'] .vl-select__button:focus,
    .js-vl-select[data-type*='text'] .vl-select__button:hover,
    .js-vl-select[data-type*='text'] .vl-select__button:focus {
        opacity: 1;
    }
    .js-vl-select[data-type*='select-multiple'] .vl-input-field,
    .js-vl-select[data-type*='text'] .vl-input-field {
        display: inline;
        padding: 0;
        line-height: 2.2rem;
        height: 2.4rem;
    }
    .js-vl-select[data-type*='select-multiple'] .vl-input-field:focus,
    .js-vl-select[data-type*='text'] .vl-input-field:focus {
        outline: 0;
        box-shadow: none;
    }
    .js-vl-select__group {
        padding: 0.3rem 0.5rem 0.3rem 0;
        border-top: 0.1rem solid #687483;
        text-decoration: none;
    }
    .js-vl-select .vl-select__inner {
        padding: 0.5rem 6rem 0.4rem 1rem;
        border: 0.1rem solid #687483;
        border-radius: 0.3rem;
        color: #666;
        font-family: 'Flanders Art Sans', sans-serif;
        overflow: hidden;
    }
    .is-open .js-vl-select .vl-select__inner {
        border-bottom: 0;
    }
    .js-vl-select .vl-select__list {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .js-vl-select .vl-select__list--single {
        display: inline-block;
        width: 100%;
    }
    [dir='rtl'] .js-vl-select .vl-select__list--single {
        padding-right: 0.5rem;
        padding-left: 1.5rem;
    }
    .js-vl-select .vl-select__list--multiple {
        display: inline-flex;
        align-content: center;
        max-width: 100%;
    }
    .js-vl-select .vl-select__list--multiple .vl-select__item {
        margin: 0.2rem 0.6rem 0.5rem 0;
        display: inline-flex;
    }
    .js-vl-select .vl-select__list--multiple .vl-select__item[data-deletable] {
        padding-right: 0;
    }
    [dir='rtl'] .js-vl-select .vl-select__list--multiple--multiple {
        margin-right: 0;
        margin-left: 0.375rem;
    }
    .js-vl-select .vl-select__list--multiple .vl-input-field {
        padding: 0.4rem 0 0.4rem 0.2rem;
    }
    .js-vl-select .vl-select__list--dropdown {
        display: none;
        position: absolute;
        top: 100%;
        width: 100%;
        transform: translateY(-0.1rem);
        border: 0.1rem #687483 solid;
        background-color: #fff;
        z-index: 1;
        border-bottom-left-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
    }
    .js-vl-select .vl-select__list--dropdown.is-active {
        display: block;
    }
    .js-vl-select .vl-select__list--dropdown .vl-select__list {
        position: relative;
        max-height: 35vh;
        overflow: auto;
        will-change: scroll-position;
        -webkit-overflow-scrolling: touch;
    }
    .js-vl-select .vl-select__list--dropdown .vl-input-field + .vl-select__list {
        border-top: 0.1rem solid #687483;
    }
    .js-vl-select .vl-select__list--dropdown .vl-select__item {
        width: 100%;
        min-height: 0;
        height: auto;
        padding-top: 0.8rem;
        padding-bottom: 0.8rem;
        padding-left: 3rem;
        border: 0;
        color: #000;
        font-weight: normal;
        text-decoration: none;
    }
    .js-vl-select .vl-select__list--dropdown .vl-select__item:not(:first-of-type) {
        border-top: 0.1rem #cbd2da solid;
    }
    [dir='rtl'] .js-vl-select .vl-select__list--dropdown .vl-select__item {
        text-align: right;
    }
    @media screen and (min-width: 767px) {
        .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable {
            padding-right: 10rem;
        }
        .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable::after {
            position: absolute;
            top: 50%;
            right: 1rem;
            transform: translateY(-50%);
            content: attr('data-select-text');
            opacity: 0.5;
        }
        [dir='rtl'] .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable {
            padding-right: 1rem;
            padding-left: 10rem;
            text-align: right;
        }
        [dir='rtl'] .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable::after {
            right: auto;
            left: 1rem;
        }
    }
    .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable.is-highlighted {
        position: relative;
        background-color: rgba(179, 207, 245, 0.3);
    }
    .js-vl-select .vl-select__list--dropdown .vl-select__item[aria-selected='true'] {
        background-color: rgba(179, 207, 245, 0.3);
    }
    .js-vl-select .vl-select__item {
        cursor: default;
        display: flex;
        align-items: center;
    }
    .js-vl-select .vl-select__item--disabled {
        background-color: #f3f5f6 !important;
        border-color: #8695a8;
        color: var(--vl-theme-fg-color-70) !important;
        cursor: not-allowed;
        user-select: none;
    }
    .js-vl-select .vl-select__item--disabled:hover {
        background-color: #f3f5f6;
    }
    .js-vl-select .vl-select__item span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .js-vl-select .vl-input-field {
        display: inline-block;
        max-width: 100%;
        border: 0;
        background-color: transparent;
        vertical-align: baseline;
    }
    [dir='rtl'] .js-vl-select .vl-input-field {
        padding-right: 0.2rem;
        padding-left: 0;
    }
    .js-vl-select .vl-select__placeholder {
        opacity: 0.5;
    }
    .js-vl-select .vl-select__group {
        display: block;
    }
    .js-vl-select .vl-select__group:not(:first-of-type) {
        border-top: 0.1rem solid #687483;
    }
    .js-vl-select .vl-select__group .vl-select__heading {
        padding: 0.6rem 2rem;
        color: #4d4d4b;
        font-weight: 500;
    }
    .vl-select--error .js-vl-select {
        background-color: #d2373c;
        border: 0.2rem solid #d2373c;
        box-shadow: inset 0 0 0 0.1rem #d2373c;
    }
    .vl-select--error .js-vl-select:focus {
        background-color: #fff;
    }
    .vl-select--success .js-vl-select {
        border-color: #009e47;
        background-color: #e6f5ed;
        border-width: 0.2rem;
        border-style: solid;
    }
`;
export default style;
