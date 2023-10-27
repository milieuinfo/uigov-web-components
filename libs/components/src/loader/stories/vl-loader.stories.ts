import { html } from 'lit-html';
import '../vl-loader.component';
import { loaderArgs, loaderArgTypes } from './vl-loader.stories-arg';
import { storyArgs, storyArgTypes } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';

export default {
    title: 'Components/loader',
    tags: ['autodocs'],
    args: storyArgs(loaderArgs),
    argTypes: storyArgTypes(loaderArgTypes),
} as Meta<typeof storyArgs>;

export const loaderDefault = ({ light, text, single }: typeof loaderArgs) => html`
    <vl-loader ?data-vl-light=${light} data-vl-text=${text} ?data-vl-single=${single} data-cy="loader"></vl-loader>
`;
loaderDefault.storyName = 'vl-loader - default';

export const loaderLightWithoutText = ({ light, text, single }: typeof loaderArgs) => html`
    <div class="vl-region" style="background: #b7b7b7">
        <vl-loader
            ?data-vl-light=${light}
            data-vl-text=${text}
            ?data-vl-single=${single}
            data-cy="loader-light-without-text"
        ></vl-loader>
    </div>
`;
loaderLightWithoutText.storyName = 'vl-loader - light without text';
loaderLightWithoutText.args = {
    light: true,
    single: true,
};

export const loaderWithCustomContent = ({ light, single }: typeof loaderArgs) => html`
    <vl-loader ?data-vl-light=${light} ?data-vl-single=${single} data-cy="loader-with-custom-content">
        <span><strong>Informatie</strong> is aan het laden</span>
    </vl-loader>
`;
loaderWithCustomContent.storyName = 'vl-loader - with custom content';
loaderWithCustomContent.argTypes = {
    text: {
        control: {
            disable: true,
        },
    },
};
