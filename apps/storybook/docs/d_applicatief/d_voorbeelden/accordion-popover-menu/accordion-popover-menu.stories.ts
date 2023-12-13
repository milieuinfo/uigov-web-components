import { html } from 'lit-html';
import { Meta } from '@storybook/web-components';
import {
    VlAccordionComponent,
    VlAnnotation,
    VlPopoverActionListComponent,
    VlPopoverComponent,
} from '@domg-wc/components';
import { VlIconElement, VlLinkElement } from '@domg-wc/elements';
import AccordionPopoverMenuDoc from './accordion-popover-menu.stories-doc.mdx';
import { registerWebComponents } from '@domg-wc/common-utilities';

registerWebComponents([
    VlAccordionComponent,
    VlAnnotation,
    VlPopoverComponent,
    VlPopoverActionListComponent,
    VlLinkElement,
    VlIconElement,
]);

export default {
    title: 'Applicatief/Voorbeelden/accordion-popover-menu',
    component: 'accordion popover menu',
    parameters: {
        docs: {
            page: AccordionPopoverMenuDoc,
            story: {
                inline: false,
                iframeHeight: 500,
            },
        },
    },
} as Meta;

const topLevelAccordionCss = `
    .vl-accordion {background-color: white border-radius: 4px;}
    .vl-accordion__content {background-color: rgb(248,249,252); padding: 0 15px; border-radius: 4px}
    .vl-accordion__button-container {padding: 15px 15px 0 15px;}
    .vl-accordion__subtitle {padding: 0 15px 0 15px;}
`;
const subAccordionCss = `
    .vl-accordion {background-color: white; border-radius: 4px;}
    .js-vl-accordion--open {background-color: rgb(248,249,252);}
    .vl-accordion__button-container {padding: 15px;}
    .js-vl-accordion--open > .vl-accordion__button-container {padding: 15px 15px 0 15px}
    .vl-accordion__subtitle {margin: 0;}
`;

export const AccordionPopoverMenu = () => html`
    <style>
        .laaginfo {
            display: flex;
        }

        .laaginfo__image {
            flex-basis: 15%;
            margin-right: 20px;
        }

        .laaginfo__table {
            display: flex;
            flex-basis: 100%;
            flex-direction: column;
        }

        .laaginfo__table--row {
            display: flex;
            justify-content: space-between;
        }

        .laaginfo__table--row div {
            flex-basis: 50%;
            padding-bottom: 10px;
        }

        .panel {
            border: 1px solid darkgray;
            border-radius: 4px;
        }

        .panel > div:not(:last-child) {
            border-bottom: 1px solid darkgray;
        }

        .panel > div:last-child {
            border-radius: 4px;
        }
    </style>
    <div class="panel">
        <div>
            <vl-accordion data-vl-toggle-text="Stedelijk woongebied" data-vl-custom-css=${topLevelAccordionCss}>
                <span class="laaginfo">
                    <div class="laaginfo__image">
                        <img is="vl-image" class="laaginfo__image" src="cat.jpeg" alt="Example image" />
                    </div>
                    <div class="laaginfo__table">
                        <div class="laaginfo__table--row">
                            <div>Laagkenmerk</div>
                            <div>Grondvlak</div>
                        </div>
                        <div class="laaginfo__table--row">
                            <div>Categorie gebiedsaanduiding</div>
                            <div>Wonen</div>
                        </div>
                        <div class="laaginfo__table--row">
                            <div>Legendecode</div>
                            <div>01109_XX</div>
                        </div>
                    </div>
                </span>
                <vl-annotation slot="subtitle">Lorem ipsum</vl-annotation>
                <span slot="menu">
                    <a is="vl-link" id="btn-acties1">
                        <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>
                    </a>
                    <vl-popover for="btn-acties1" placement="bottom-end" distance="5">
                        <vl-popover-action-list>
                            <vl-popover-action icon="search">Zoeken</vl-popover-action>
                            <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                            <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                        </vl-popover-action-list>
                    </vl-popover>
                </span>
                <div class="panel">
                    <div>
                        <vl-accordion data-vl-toggle-text="$1.1" data-vl-custom-css=${subAccordionCss}>
                            <span slot="menu">
                                <a is="vl-link" id="btn-acties2">
                                    <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>
                                </a>
                                <vl-popover for="btn-acties2" placement="bottom-end" distance="5">
                                    <vl-popover-action-list>
                                        <vl-popover-action icon="search">Zoeken</vl-popover-action>
                                        <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                                        <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                                    </vl-popover-action-list>
                                </vl-popover>
                            </span>
                            <div class="panel">
                                <div>
                                    <vl-accordion
                                        data-vl-toggle-text="Alle werken"
                                        data-vl-custom-css=${subAccordionCss}
                                    >
                                        <span slot="menu">
                                            <a is="vl-link" id="btn-acties3">
                                                <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>
                                            </a>
                                            <vl-popover for="btn-acties3" placement="bottom-end" distance="5">
                                                <vl-popover-action-list>
                                                    <vl-popover-action icon="search">Zoeken</vl-popover-action>
                                                    <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                                                    <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                                                </vl-popover-action-list>
                                            </vl-popover>
                                        </span>
                                        <span
                                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est
                                            laborum.</span
                                        >
                                    </vl-accordion>
                                </div>
                                <div>
                                    <vl-accordion
                                        data-vl-toggle-text="Alle werken"
                                        data-vl-custom-css=${subAccordionCss}
                                    >
                                        <span slot="menu">
                                            <a is="vl-link" id="btn-acties4">
                                                <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>
                                            </a>
                                            <vl-popover for="btn-acties4" placement="bottom-end" distance="5">
                                                <vl-popover-action-list>
                                                    <vl-popover-action icon="search">Zoeken</vl-popover-action>
                                                    <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                                                    <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                                                </vl-popover-action-list>
                                            </vl-popover>
                                        </span>
                                        <span
                                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est
                                            laborum.</span
                                        >
                                    </vl-accordion>
                                </div>
                            </div>
                        </vl-accordion>
                    </div>
                    <div>
                        <vl-accordion data-vl-toggle-text="$1.2" data-vl-custom-css=${subAccordionCss}>
                            <span slot="menu">
                                <a is="vl-link" id="btn-acties5">
                                    <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>
                                </a>
                                <vl-popover for="btn-acties5" placement="bottom-end" distance="5">
                                    <vl-popover-action-list>
                                        <vl-popover-action icon="search">Zoeken</vl-popover-action>
                                        <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                                        <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                                    </vl-popover-action-list>
                                </vl-popover>
                            </span>
                            <div class="panel">
                                <div>
                                    <vl-accordion
                                        data-vl-toggle-text="Alle werken"
                                        data-vl-custom-css=${subAccordionCss}
                                    >
                                        <span slot="menu">
                                            <a is="vl-link" id="btn-acties6">
                                                <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>
                                            </a>
                                            <vl-popover for="btn-acties6" placement="bottom-end" distance="5">
                                                <vl-popover-action-list>
                                                    <vl-popover-action icon="search">Zoeken</vl-popover-action>
                                                    <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                                                    <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                                                </vl-popover-action-list>
                                            </vl-popover>
                                        </span>
                                        <span
                                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est
                                            laborum.</span
                                        >
                                    </vl-accordion>
                                </div>
                                <div>
                                    <vl-accordion
                                        data-vl-toggle-text="Alle werken"
                                        data-vl-custom-css=${subAccordionCss}
                                    >
                                        <span slot="menu">
                                            <a is="vl-link" id="btn-acties7">
                                                <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>
                                            </a>
                                            <vl-popover for="btn-acties7" placement="bottom-end" distance="5">
                                                <vl-popover-action-list>
                                                    <vl-popover-action icon="search">Zoeken</vl-popover-action>
                                                    <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                                                    <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                                                </vl-popover-action-list>
                                            </vl-popover>
                                        </span>
                                        <span
                                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est
                                            laborum.</span
                                        >
                                    </vl-accordion>
                                </div>
                            </div>
                        </vl-accordion>
                    </div>
                    <div>
                        <vl-accordion data-vl-toggle-text="$1.3" data-vl-custom-css=${subAccordionCss}>
                            <span slot="menu">
                                <a is="vl-link" id="btn-acties8">
                                    <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>
                                </a>
                                <vl-popover for="btn-acties8" placement="bottom-end" distance="5">
                                    <vl-popover-action-list>
                                        <vl-popover-action icon="search">Zoeken</vl-popover-action>
                                        <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                                        <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                                    </vl-popover-action-list>
                                </vl-popover>
                            </span>
                            <div class="panel">
                                <div>
                                    <vl-accordion
                                        data-vl-toggle-text="Alle werken"
                                        data-vl-custom-css=${subAccordionCss}
                                    >
                                        <span slot="menu">
                                            <a is="vl-link" id="btn-acties9">
                                                <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>
                                            </a>
                                            <vl-popover for="btn-acties9" placement="bottom-end" distance="5">
                                                <vl-popover-action-list>
                                                    <vl-popover-action icon="search">Zoeken</vl-popover-action>
                                                    <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                                                    <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                                                </vl-popover-action-list>
                                            </vl-popover>
                                        </span>
                                        <span
                                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est
                                            laborum.</span
                                        >
                                    </vl-accordion>
                                </div>
                                <div>
                                    <vl-accordion
                                        data-vl-toggle-text="Alle werken"
                                        data-vl-custom-css=${subAccordionCss}
                                    >
                                        <span slot="menu">
                                            <a is="vl-link" id="btn-acties10">
                                                <span is="vl-icon" data-vl-icon="nav-show-more-vertical"></span>
                                            </a>
                                            <vl-popover for="btn-acties10" placement="bottom-end" distance="5">
                                                <vl-popover-action-list>
                                                    <vl-popover-action icon="search">Zoeken</vl-popover-action>
                                                    <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                                                    <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                                                </vl-popover-action-list>
                                            </vl-popover>
                                        </span>
                                        <span
                                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est
                                            laborum.</span
                                        >
                                    </vl-accordion>
                                </div>
                            </div>
                        </vl-accordion>
                    </div>
                </div>
            </vl-accordion>
        </div>
    </div>
`;
