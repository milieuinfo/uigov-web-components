import { story } from '@domg-wc/common-storybook';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { VlPopoverActionListComponent } from '../vl-popover-action-list.component';
import { VlPopoverActionComponent } from '../vl-popover-action.component';
import { VlPopoverComponent } from '../vl-popover.component';
import { popoverArgTypes, popoverDefaultArgs } from './vl-popover.stories-arg';
import popoverDoc from './vl-popover.stories-doc.mdx';

registerWebComponents([VlPopoverComponent, VlPopoverActionComponent, VlPopoverActionListComponent]);

export default {
    title: 'Components/popover',
    tags: ['autodocs'],
    args: popoverDefaultArgs,
    argTypes: popoverArgTypes,
    parameters: {
        docs: {
            page: popoverDoc,
        },
    },
} as Meta<typeof popoverDefaultArgs>;

export const PopoverDefault = story(
    popoverDefaultArgs,
    ({ trigger, contentPadding, open, placement, hideArrow, hideOnClick, distance }) => {
        return html`
            <a is="vl-link" id="btn-acties">Acties</a>
            <vl-popover
                for="btn-acties"
                open="${open}"
                placement=${placement}
                trigger=${trigger}
                hide-arrow=${hideArrow}
                hide-on-click="${hideOnClick}"
                distance=${distance}
                content-padding=${contentPadding}
            >
                <vl-popover-action-list
                    @click=${(event: CustomEvent) => {
                        const actionElement = event.target as VlPopoverActionComponent;
                        action('click')('vl-popover-action clicked > ' + actionElement.action);
                    }}
                >
                    <vl-popover-action icon="search" .action=${'search'}>Zoeken</vl-popover-action>
                    <vl-popover-action icon="bell" .action=${'report'}>Rapportenoverzicht</vl-popover-action>
                    <vl-popover-action icon="pin" .action=${'locate'}>Vind locatie</vl-popover-action>
                </vl-popover-action-list>
            </vl-popover>
        `;
    }
);
PopoverDefault.storyName = 'vl-popover - default';
PopoverDefault.args = {
    placement: 'bottom-start',
};

export const PopoverHover = story(
    popoverDefaultArgs,
    ({ trigger, open, contentPadding, placement, hideArrow, hideOnClick, distance }) => {
        return html`
            <button id="btn-close" aria-describedby="tooltip" is="vl-button">Hover over me</button>
            <vl-popover
                for="btn-close"
                open=${open}
                placement=${placement}
                trigger=${trigger}
                hide-arrow=${hideArrow}
                hide-on-click=${hideOnClick}
                distance=${distance}
                content-padding=${contentPadding}
            >
                Een boodschap die context geeft.
            </vl-popover>
        `;
    }
);
PopoverHover.storyName = 'vl-popover - hover';
PopoverHover.args = {
    trigger: 'focus hover',
};
PopoverHover.parameters = {
    layout: 'centered',
    contentPadding: 'medium',
};
