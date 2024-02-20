import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlPopoverActionListComponent, VlPopoverComponent } from '@domg-wc/components';
import { html } from 'lit-html';
import { Meta } from '@storybook/web-components';
import PopoverMenuDoc from './popover-menu.stories-doc.mdx';

registerWebComponents([VlPopoverComponent, VlPopoverActionListComponent]);

export default {
    title: 'Ontwerp/Popover/Menu',
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: PopoverMenuDoc,
            story: {
                inline: false,
                iframeHeight: 175,
            },
        },
    },
} as Meta;

const PopoverMenu = (icon: string) => () =>
    html`
        <span slot="menu">
            <a is="vl-link" id="btn-acties-${icon}">
                <span is="vl-icon" class="vl-icon--large" data-vl-icon=${icon}></span>
            </a>
            <vl-popover for="btn-acties-${icon}" placement="bottom-end" distance="5">
                <vl-popover-action-list>
                    <vl-popover-action icon="search">Zoeken</vl-popover-action>
                    <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                    <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                </vl-popover-action-list>
            </vl-popover>
        </span>
    `;

export const HamburgerMenu = PopoverMenu('menu');

export const KebabMenu = PopoverMenu('nav-show-more-vertical');

export const MeatballMenu = PopoverMenu('nav-show-more-horizontal');
