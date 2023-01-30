import { html } from 'lit-html';
import '../vl-functional-header.component';
import { functionalHeaderArgs, functionalHeaderArgTypes } from './vl-functional-header.stories-arg';

export default {
    title: 'Components/functional-header',
    args: functionalHeaderArgs,
    argTypes: functionalHeaderArgTypes,
};

export const functionalHeaderDefault = ({ title, subTitle, link, backLink, back }: typeof functionalHeaderArgs) =>
    html` <vl-functional-header
        data-vl-back=${back}
        data-vl-back-link=${backLink}
        data-vl-title=${title}
        data-vl-sub-title=${subTitle}
        data-vl-link=${link}
        data-cy="functional-header"
    ></vl-functional-header>`;
functionalHeaderDefault.storyName = 'vl-functional-header - default';

export const functionalHeaderWithSlotElements = ({
    title,
    subTitle,
    link,
    backLink,
    back,
}: typeof functionalHeaderArgs) =>
    html` <vl-functional-header
        data-vl-link=${link}
        data-vl-back-link=${backLink}
        data-vl-back=${back}
        data-cy="functional-header-with-slot-elements"
    >
        <span slot="title">${title}</span>
        <span slot="sub-title">${subTitle}</span>
        <span slot="back">${back}</span>
    </vl-functional-header>`;
functionalHeaderWithSlotElements.storyName = 'vl-functional-header - with slot elements';
functionalHeaderWithSlotElements.argTypes = {
    title: {
        name: 'title (slot)',
    },
    subTitle: {
        name: 'sub-title (slot)',
    },
    back: {
        name: 'back (slot)',
    },
};

// TODO eens bedenken hoe die 'any' beter kan - de interface aanpak vind ik te omslachtig
export const functionalHeaderWithUserInteraction = ({ title, subTitle, link, backLink, back, content }: any) => html`
    <vl-functional-header
        data-vl-link=${link}
        data-vl-back-link=${backLink}
        data-vl-back=${back}
        data-cy="functional-header-with-user-interaction"
    >
        <span slot="title">${title}</span>
        <span slot="sub-title">${subTitle}</span>
        <span slot="back">${back}</span>
        <div slot="actions">
            <a href="#">${content}</a>
        </div>
    </vl-functional-header>
`;
functionalHeaderWithUserInteraction.storyName = 'vl-functional-header - with user interaction';
functionalHeaderWithUserInteraction.args = {
    content: 'Koen Peeters',
};
functionalHeaderWithUserInteraction.argTypes = {
    content: {
        name: 'actions (slot)',
        type: 'string',
    },
    title: {
        name: 'title (slot)',
    },
    subTitle: {
        name: 'sub-title (slot)',
    },
    back: {
        name: 'back (slot)',
    },
};

export const functionalHeaderInzage = ({ title, topLeft, topRight, subHeader }: any) => html`
    <vl-functional-header>
        <span slot="top-left" class="super-title">${topLeft}</span>
        <span slot="title">${title}</span>
        <div slot="top-right">${topRight}</div>
        <span slot="sub-header">${subHeader}</span>
    </vl-functional-header>
`;
functionalHeaderInzage.storyName = 'vl-functional-header - inzage';
functionalHeaderInzage.args = {
    title: 'Project overzicht',
    topLeft: html`<h2 class="vl-title vl-title--h2">
        <span>2458963498</span>
        <span class="vl-annotation vl-annotation--small">(MILIEUBEDRIJF)</span>
    </h2>`,
    topRight: html`<p><span>Toestand: In beroepsperiode tot 01.02.2023</span></p>`,
    subHeader: html` <div class="sub-header">
        <a id="back-link" is="vl-link" href="${document.referrer}" tabindex="0">
            <span is="vl-icon" data-vl-icon="arrow-left-fat" data-vl-before></span>
            <span id="back-link-text">Eén stap terug</span>
        </a>
    </div>`,
};
functionalHeaderInzage.argTypes = {
    title: {
        name: 'title (slot)',
    },
    topLeft: {
        name: 'top-left (slot)',
    },
    topRight: {
        name: 'top-right (slot)',
    },
    subHeader: {
        name: 'sub-header (slot)',
    },
};
