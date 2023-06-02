import { html } from 'lit-html';
import '../vl-functional-header.component';
import { Meta, StoryFn } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import functionalHeaderDoc from './vl-functional-header.stories-doc.mdx';
import { functionalHeaderArgs, functionalHeaderArgTypes } from './vl-functional-header.stories-arg';
import { filterOutClasses, formatHTML, setDefaultArgsToNothing } from '@domg-wc/common-utilities';

export default {
    title: 'Components/functional-header',
    args: functionalHeaderArgs,
    argTypes: functionalHeaderArgTypes,
    parameters: {
        docs: {
            page: functionalHeaderDoc,
            transformSource: (input: string) => formatHTML(filterOutClasses(input)),
        },
    },
} as Meta<typeof functionalHeaderArgs>;

const Template: StoryFn<typeof functionalHeaderArgs> = (args) => {
    const {
        back,
        backLink,
        disableBackLink,
        fullWidth,
        link,
        marginBottom,
        subTitle,
        title,
        actionsSlot,
        backSlot,
        backLinkSlot,
        subHeaderSlot,
        subTitleSlot,
        titleSlot,
        topLeftSlot,
        topRightSlot,
        onClickBack,
    } = setDefaultArgsToNothing(args, functionalHeaderArgs);

    return html`
        <vl-functional-header
            data-vl-back=${back}
            data-vl-back-link=${backLink}
            ?data-vl-disable-back-link=${disableBackLink}
            ?data-vl-full-width=${fullWidth}
            data-vl-link=${link}
            data-vl-margin-bottom=${marginBottom}
            data-vl-sub-title=${subTitle}
            data-vl-title=${title}
            @vl-click-back=${onClickBack}
        >
            ${unsafeHTML(actionsSlot)}${unsafeHTML(backSlot)}${unsafeHTML(backLinkSlot)}${unsafeHTML(subHeaderSlot)}
            ${unsafeHTML(subTitleSlot)}${unsafeHTML(titleSlot)}${unsafeHTML(topLeftSlot)}${unsafeHTML(topRightSlot)}
        </vl-functional-header>
    `;
};

export const FunctionalHeaderDefault = Template.bind({});
FunctionalHeaderDefault.storyName = 'vl-functional-header - default';
FunctionalHeaderDefault.args = {
    ...functionalHeaderArgs,
    subTitle: 'Voor lager, middelbaar en hoger onderwijs',
    title: 'School- en studietoelagen',
};

export const FunctionalHeaderActions = Template.bind({});
FunctionalHeaderActions.storyName = 'vl-functional-header - actions';
FunctionalHeaderActions.args = {
    ...functionalHeaderArgs,
    subTitle: 'Voor lager, middelbaar en hoger onderwijs',
    title: 'School- en studietoelagen',
    actionsSlot: `<div slot="actions">
        <a href="#">Actie 1</a>
        <a href="#">Actie 2</a>
    </div>`,
};

export const FunctionalHeaderSlots = Template.bind({});
FunctionalHeaderSlots.storyName = 'vl-functional-header - slots';
FunctionalHeaderSlots.args = {
    ...functionalHeaderArgs,
    backSlot: '<span slot="back">Terug</span>',
    backLinkSlot: '<a slot="back-link" href="#">Terug</a>',
    subHeaderSlot: '<span slot="sub-header">Sub header content</span>',
    subTitleSlot: '<span slot="sub-title">Voor lager, middelbaar en hoger onderwijs</span>',
    titleSlot: '<span slot="title">School- en studietoelagen</span>',
    topLeftSlot: '<span slot="top-left">Linkerbovenhoek content</span>',
    topRightSlot: '<span slot="top-right">Rechterbovenhoek content</span>',
};

export const FunctionalHeaderTabs: StoryFn<typeof functionalHeaderArgs> = (args) => {
    const { fullWidth, marginBottom, title, link } = setDefaultArgsToNothing(args, functionalHeaderArgs);

    return html`
        <vl-functional-header
            ?data-vl-full-width=${fullWidth}
            data-vl-link=${link}
            data-vl-margin-bottom=${marginBottom}
            data-vl-title=${title}
        >
            <vl-tabs
                slot="sub-header"
                data-vl-disable-links
                data-vl-within-functional-header
                data-vl-active-tab="trein"
                @change=${(event: CustomEvent) => action('change')(event.detail)}
            >
                <vl-tabs-pane data-vl-id="trein" data-vl-title="Trein"></vl-tabs-pane>
                <vl-tabs-pane data-vl-id="metro" data-vl-title="Metro, tram en bus"></vl-tabs-pane>
                <vl-tabs-pane data-vl-id="fiets" data-vl-title="Fiets"></vl-tabs-pane>
            </vl-tabs>
        </vl-functional-header>
    `;
};
FunctionalHeaderTabs.storyName = 'vl-functional-header - tabs';
FunctionalHeaderTabs.args = {
    ...functionalHeaderArgs,
    title: 'School- en studietoelagen',
};
