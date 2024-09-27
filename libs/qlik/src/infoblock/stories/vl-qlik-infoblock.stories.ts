import { html } from 'lit-html';
import { Meta } from '@storybook/web-components';
import { qlikInfoblockArgs, qlikInfoblockArgTypes } from './vl-qlik-infoblock.stories-arg';
import { story } from '@domg-wc/common-storybook';
import { Qlik } from '@domg/qlik-lib';
import { until } from 'lit/directives/until.js';
import '../vl-qlik-infoblock.component';
import qlikDashboardDoc from './vl-qlik-infoblock.stories-doc.mdx';
import viz_without_views from './visuals.json'; // TODO should have an assert

export default {
    id: 'qlik-qlik-infoblock',
    title: 'qlik/qlik-infoblock',
    args: qlikInfoblockArgs,
    argTypes: qlikInfoblockArgTypes,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: qlikDashboardDoc,
        },
    },
} as Meta<typeof qlikInfoblockArgs>;

async function render({ title, icon }) {
    const connection = new Qlik('omgevingsloketrapport.omgeving.vlaanderen.be', '594c04b6-f319-4cb9-962c-24b0f7aa6f5e');
    await connection.init();
    return html` <vl-qlik-infoblock
        title="${title}"
        icon="${icon}"
        .connection="${connection}"
        .visuals="${viz_without_views}"
    >
        <span>Do something</span>
    </vl-qlik-infoblock>`;
}

const Template = story(
    qlikInfoblockArgs,
    (args) => html`${until(render(args), html` <vl-loader data-vl-text>Visualisatie aan het laden</vl-loader>`)}`
);

export const QlikInfoblockDefault = Template.bind({});
QlikInfoblockDefault.storyName = 'vl-qlik-infoblock - default';
QlikInfoblockDefault.args = {
    title: 'Marie Jeanne',
    icon: 'airplane',
};
