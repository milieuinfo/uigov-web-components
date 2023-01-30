import { html } from 'lit-html';
import { spotlightArgs, spotlightArgTypes } from './vl-spotlight.stories-arg';
import { SIZE } from '../vl-spotlight.model';
import '../vl-spotlight.component';

export default {
    title: 'components/spotlight',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: spotlightArgs,
    argTypes: spotlightArgTypes,
};

const spotlightTemplate = ({
    link,
    alt,
    size,
    imgSrc,
    imgAlt,
    title,
    subtitle,
    text,
    content,
}: typeof spotlightArgs) => html`
    <vl-spotlight
        data-vl-link=${link}
        ?data-vl-alt=${alt}
        data-vl-size=${size}
        data-vl-img-src=${imgSrc}
        data-vl-img-alt=${imgAlt}
    >
        ${title ? html`<span slot="title"> ${title} </span>` : ``}
        ${subtitle ? html`<span slot="subtitle"> ${subtitle} </span>` : ``}
        ${text ? html`<span slot="text"> ${text} </span>` : ``}
        ${content ? html`<span slot="content"> ${content} </span>` : ``}
    </vl-spotlight>
`;
export const spotLightDefault: any = spotlightTemplate.bind({});
spotLightDefault.storyName = 'vl-spotlight - default';

export const spotlightWithLink = () => html`
    <vl-spotlight data-vl-link="http://www.google.com">
        <span slot="title">
            Premies voor renovatie
            <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>
            <span class="vl-u-visually-hidden">Opent in nieuw venster</span>
        </span>
    </vl-spotlight>
`;
spotlightWithLink.storyName = 'vl-spotlight - with link';

export const spotlightNoLink = () => html`
    <vl-spotlight>
        <span slot="title"> Premies voor renovatie </span>
    </vl-spotlight>
`;
spotlightNoLink.storyName = 'vl-spotlight - no link';

export const spotlightWithContent = () => html`
    <vl-spotlight data-vl-link="https://google.be" data-vl-alt data-vl-size="${SIZE.S}">
        <span slot="title">
            Verslag bestuursvergadering
            <br />
            <br />
            <br />
            <br />
        </span>
        <vl-document slot="content">
            <span slot="type">DOCX</span>
            <span slot="title">document</span>
            <span slot="metadata">DOCX-112kb</span>
        </vl-document>
    </vl-spotlight>
`;
spotlightWithContent.storyName = 'vl-spotlight - with content';

export const spotlightWithText = () => html`
    <vl-spotlight data-vl-link="https://google.be">
        <span slot="title">
            Premies voor renovatie
            <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>
            <span class="vl-u-visually-hidden">Opent in nieuw venster</span>
        </span>
        <span slot="text"
            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw
            energiefactuur.</span
        >
    </vl-spotlight>
`;
spotlightWithText.storyName = 'vl-spotlight - with text';

export const spotlightWithImage = () => html`
    <vl-spotlight
        data-vl-img-src="//d201gzvprbtpxy.cloudfront.net/sites/default/files/styles/medium/public/images/vla_themateaser_350_dakisolatie.jpg?itok=cKDE21Pe"
        data-vl-img-alt="spotlight image"
    >
        <span slot="title"> Premies voor renovatie </span>
        <span slot="text"
            >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw
            energiefactuur.</span
        >
    </vl-spotlight>
`;
spotlightWithImage.storyName = 'vl-spotlight - with image';

export const spotlightWithSubtitle = () => html`
    <vl-spotlight data-vl-link="https://google.be">
        <span slot="title">Communicatiespecialist te Willebroek - contract 1 jaar</span>
        <span slot="subtitle">Niveau A (universitair diploma)</span>
        <span slot="text">
            <ul class="vl-icon-list">
                <li class="vl-icon-list__item">Waterwegen en Zeekanaal NV in Brussel</li>
                <li class="vl-icon-list__item">Natuur en bos</li>
                <li class="vl-icon-list__item"></li>
            </ul>
        </span>
    </vl-spotlight>
`;
spotlightWithSubtitle.storyName = 'vl-spotlight - with subtitle';
