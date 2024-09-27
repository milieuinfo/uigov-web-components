import { html } from 'lit-html';
import { Meta } from '@storybook/web-components';
import { qlikVisualArgs, qlikVisualArgTypes } from './vl-qlik-visual.stories-arg';
import { story } from '@domg-wc/common-storybook';
import { Qlik, STARDUST } from '@domg/qlik-lib';
import { until } from 'lit/directives/until.js';
import '../vl-qlik-visual.component';
import qlikVisualDoc from './vl-qlik-visual.stories-doc.mdx';

export default {
    id: 'qlik-qlik-visual',
    title: 'qlik/qlik-visual',
    args: qlikVisualArgs,
    argTypes: qlikVisualArgTypes,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: qlikVisualDoc,
        },
    },
} as Meta<typeof qlikVisualArgs>;

async function render({ qlikId, type, height, width, selectConstraint }) {
    const connection = new Qlik('omgevingsloketrapport.omgeving.vlaanderen.be', '594c04b6-f319-4cb9-962c-24b0f7aa6f5e');
    await connection.init();
    const stardust = await STARDUST(connection.app, null, { select: selectConstraint });
    return html`
        <vl-qlik-visual qlik-id="${qlikId}" type="${type}" height="${height}" width="${width}" .stardust="${stardust}">
        </vl-qlik-visual>
    `;
}

const Template = (withoutInteraction = false) =>
    story(
        qlikVisualArgs,
        (args) =>
            html`${until(
                render({ ...args, selectConstraint: withoutInteraction }),
                html` <vl-loader data-vl-text>Visualisatie aan het laden</vl-loader>`
            )}`
    );

export const QlikVisualDefault = Template().bind({});
QlikVisualDefault.storyName = 'vl-qlik-visual - default';
QlikVisualDefault.args = {
    qlikId: 'RXjdD',
    type: 'kpi',
    height: '200px',
    width: '200px',
};

export const QlikVisualWithInteraction = Template().bind({});
QlikVisualWithInteraction.storyName = 'vl-qlik-visual - with interaction';
QlikVisualWithInteraction.args = {
    qlikId: 'fARUNP',
    type: 'barchart',
    height: '200px',
};

export const QlikVisualWithoutInteraction = Template(true).bind({});
QlikVisualWithoutInteraction.storyName = 'vl-qlik-visual - without interaction';
QlikVisualWithoutInteraction.args = {
    qlikId: 'fARUNP',
    type: 'barchart',
    height: '200px',
};
