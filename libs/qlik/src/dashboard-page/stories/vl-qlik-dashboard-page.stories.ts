import { html } from 'lit-html';
import { Meta } from '@storybook/web-components';
import { qlikDashboardPageArgs, qlikDashboardPageArgTypes } from './vl-qlik-dashboard-page.stories-arg';
import { story } from '@domg-wc/common-storybook';
import '../vl-qlik-dashboard-page.component';
import qlikDashboardDoc from './vl-qlik-dashboard-page.stories-doc.mdx';
import filters from '../../utils/stories/demo-filters.json'; // TODO should have an assert
import viz_without_views from '../../utils/stories/demo-visuals-without-views.json'; // TODO should have an assert
import viz_with_views from '../../utils/stories/demo-visuals-with-views.json'; // TODO should have an assert

export default {
    id: 'qlik-qlik-dashboard-page',
    title: 'qlik/qlik-dashboard-page',
    args: qlikDashboardPageArgs,
    argTypes: qlikDashboardPageArgTypes,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: qlikDashboardDoc,
        },
    },
} as Meta<typeof qlikDashboardPageArgs>;

const Template = story(
    qlikDashboardPageArgs,
    ({ title, appId, url, exportId, filters, views }) => html` <vl-qlik-dashboard-page
        title="${title}"
        app-id="${appId}"
        url="${url}"
        export-id="${exportId}"
        .filters="${filters}"
        .views="${views}"
    >
        <span slot="introduction"> Introduction </span>
    </vl-qlik-dashboard-page>`
);

export const QlikDashboardPageWithoutViews = Template.bind({});
QlikDashboardPageWithoutViews.storyName = 'vl-qlik-dashboard-page - without views';
QlikDashboardPageWithoutViews.args = {
    title: 'Dashboard page without views',
    appId: '594c04b6-f319-4cb9-962c-24b0f7aa6f5e',
    url: 'omgevingsloketrapport.omgeving.vlaanderen.be',
    views: viz_without_views,
    filters: filters,
};

export const QlikDashboardPageWithViews = Template.bind({});
QlikDashboardPageWithViews.storyName = 'vl-qlik-dashboard-page - with views';
QlikDashboardPageWithViews.args = {
    title: 'Dashboard page with views',
    appId: '594c04b6-f319-4cb9-962c-24b0f7aa6f5e',
    url: 'omgevingsloketrapport.omgeving.vlaanderen.be',
    views: viz_with_views,
    filters: filters,
};

export const QlikDashboardPageWithoutFilters = Template.bind({});
QlikDashboardPageWithoutFilters.storyName = 'vl-qlik-dashboard-page - without filters';
QlikDashboardPageWithoutFilters.args = {
    title: 'Dashboard page without filters',
    appId: '594c04b6-f319-4cb9-962c-24b0f7aa6f5e',
    url: 'omgevingsloketrapport.omgeving.vlaanderen.be',
    views: viz_with_views,
};

export const QlikDashboardPageWithExportId = Template.bind({});
QlikDashboardPageWithExportId.storyName = 'vl-qlik-dashboard-page - with export';
QlikDashboardPageWithExportId.args = {
    title: 'Dashboard page with exportId',
    appId: '594c04b6-f319-4cb9-962c-24b0f7aa6f5e',
    url: 'omgevingsloketrapport.omgeving.vlaanderen.be',
    views: viz_with_views,
    filters: filters,
    exportId: 'cTTaQLd',
};
