import { html } from 'lit-html';
import { popoverDefaultArgs, popoverArgTypes } from './vl-popover.stories-arg';
import { story, storyArgs, storyArgTypes } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';
import popoverDoc from './vl-popover.stories-doc.mdx';
import '../vl-popover.component';

export default {
    title: 'Components/popover',
    args: storyArgs(popoverDefaultArgs),
    argTypes: storyArgTypes(popoverArgTypes),
    parameters: {
        docs: {
            page: popoverDoc,
        },
    },
} as Meta<typeof popoverDefaultArgs>;

export const PopoverDefault = story(popoverDefaultArgs, ({ trigger, open, placement, arrow, distance }) => {
    return html`
        <a is="vl-link" id="btn-acties">Acties</a>
        <vl-popover
            data-vl-for="btn-acties"
            data-vl-open=${open}
            data-vl-placement=${placement}
            data-vl-trigger=${trigger}
            data-vl-arrow=${arrow}
            data-vl-distance=${distance}
        >
            <ul is="vl-link-list">
                <li is="vl-link-list-item">
                    <a is="vl-link">Voeg gebruiker toe.</a>
                </li>
                <li is="vl-link-list-item">
                    <a is="vl-link">Voeg adres toe.</a>
                </li>
            </ul>
        </vl-popover>
    `;
});
PopoverDefault.storyName = 'vl-popover - default';
PopoverDefault.args = {
    placement: 'bottom-start',
};

export const PopoverHover = story(popoverDefaultArgs, ({ trigger, open, placement, arrow, distance }) => {
    return html`
        <button id="btn-close" aria-describedby="tooltip" is="vl-button">Hover over me</button>
        <vl-popover
            data-vl-for="btn-close"
            data-vl-open=${open}
            data-vl-placement=${placement}
            data-vl-trigger=${trigger}
            data-vl-arrow=${arrow}
            data-vl-distance=${distance}
        >
            Een boodschap die context geeft.
        </vl-popover>
    `;
});
PopoverHover.storyName = 'vl-popover - hover';
PopoverHover.args = {
    trigger: 'focus hover',
};
PopoverHover.parameters = {
    layout: 'centered',
};
