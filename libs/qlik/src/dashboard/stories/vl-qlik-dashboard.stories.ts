import { html } from 'lit-html';
import '../vl-qlik-dashboard.component';
import { Meta } from '@storybook/web-components';
import { qlikDashboardArgs, qlikDashboardArgTypes } from './vl-qlik-dashboard.stories-arg';
import qlikDashboardDoc from './vl-qlik-dashboard.stories-doc.mdx';
import { story } from '@domg-wc/common-storybook';
import { Qlik } from '@domg/qlik-lib';
import { until } from 'lit/directives/until.js';
import filters from '../../utils/stories/demo-filters.json'; // TODO should have an assert
import viz_without_views from '../../utils/stories/demo-visuals-without-views.json'; // TODO should have an assert

export default {
    id: 'qlik-qlik-dashboard',
    title: 'qlik/qlik-dashboard',
    args: qlikDashboardArgs,
    argTypes: qlikDashboardArgTypes,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: qlikDashboardDoc,
        },
    },
} as Meta<typeof qlikDashboardArgs>;

async function render(withFilters: boolean) {
    const connection = new Qlik('omgevingsloketrapport.omgeving.vlaanderen.be', '594c04b6-f319-4cb9-962c-24b0f7aa6f5e');
    await connection.init();
    if (withFilters) {
        return html` <vl-qlik-dashboard
            .connection="${connection}"
            .visuals="${viz_without_views}"
        ></vl-qlik-dashboard>`;
    }
    return html` <vl-qlik-dashboard
        .connection="${connection}"
        .visuals="${viz_without_views}"
        .filters="${filters}"
    ></vl-qlik-dashboard>`;
}

const template = (withFilters: boolean) =>
    story(
        qlikDashboardArgs,
        () => html`${until(render(withFilters), html` <vl-loader data-vl-text>Visualisatie aan het laden</vl-loader>`)}`
    );

export const QlikDashboardWithFilters = template(false);
QlikDashboardWithFilters.storyName = 'vl-qlik-dashboard - with filters';
QlikDashboardWithFilters.args = {};

export const QlikDashboardWithoutFilters = template(true);
QlikDashboardWithoutFilters.storyName = 'vl-qlik-dashboard - without filters';
QlikDashboardWithoutFilters.args = {};
