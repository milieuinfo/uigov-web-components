import {html} from 'lit-html';
import '../vl-qlik-dashboard-page.component';
import {Meta} from '@storybook/web-components';
import {qlikDashboardPageArgs, qlikDashboardPageArgTypes} from './vl-qlik-dashboard-page.stories-arg';
import qlikDashboardDoc from './vl-qlik-dashboard-page.stories-doc.mdx';
import {story, storyArgs, storyArgTypes} from '@domg-wc/common-storybook';
import {VlQlikDashboardPageComponent} from "../vl-qlik-dashboard-page.component";

import filters from '../../../utils/stories/filters.js';
import viz_without_views from '../../../utils/stories/visuals-without-views.json' assert {type: 'json'}
import viz_with_views from '../../../utils/stories/visuals-with-views.json' assert {type: 'json'}

export default {
    title: 'qlik/qlik-dashboard-page',
    args: storyArgs(qlikDashboardPageArgs),
    argTypes: storyArgTypes(qlikDashboardPageArgTypes),
    parameters: {
        docs: {
            page: qlikDashboardDoc,
        },
    },
} as Meta<typeof qlikDashboardPageArgs>;

const Template = story(
    qlikDashboardPageArgs,
    ({
         title,
         appId,
         url,
        exportId,
        filters,
        views
     }) => html`
        <vl-qlik-dashboard-page
                title="${title}"
                app-id="${appId}"
                url="${url}"
                export-id="${exportId}"
                .filters="${filters}"
                .views="${views}">
            <span slot="introduction">
                Introduction
            </span>
        </vl-qlik-dashboard-page>`
);

const QlikDashboardPageWithoutViews = Template.bind({});
QlikDashboardPageWithoutViews.storyName = 'vl-qlik-dashboard-page - without views';
QlikDashboardPageWithoutViews.args = {
    title: "Dashboard page without views",
    appId: "594c04b6-f319-4cb9-962c-24b0f7aa6f5e",
    url: "omgevingsloketrapport.omgeving.vlaanderen.be",
    views: viz_without_views,
    filters: filters
};

const QlikDashboardPageWithViews = Template.bind({});
QlikDashboardPageWithViews.storyName = 'vl-qlik-dashboard-page - with views';
QlikDashboardPageWithViews.args = {
    title: "Dashboard page with views",
    appId: "594c04b6-f319-4cb9-962c-24b0f7aa6f5e",
    url: "omgevingsloketrapport.omgeving.vlaanderen.be",
    views: viz_with_views,
    filters: filters
};

const QlikDashboardPageWithoutFilters = Template.bind({});
QlikDashboardPageWithoutFilters.storyName = 'vl-qlik-dashboard-page - without filters';
QlikDashboardPageWithoutFilters.args = {
    title: "Dashboard page without filters",
    appId: "594c04b6-f319-4cb9-962c-24b0f7aa6f5e",
    url: "omgevingsloketrapport.omgeving.vlaanderen.be",
    views: viz_with_views,
};

const QlikDashboardPageWithExportId = Template.bind({});
QlikDashboardPageWithExportId.storyName = 'vl-qlik-dashboard-page - with export';
QlikDashboardPageWithExportId.args = {
    title: "Dashboard page with exportId",
    appId: "594c04b6-f319-4cb9-962c-24b0f7aa6f5e",
    url: "omgevingsloketrapport.omgeving.vlaanderen.be",
    views: viz_with_views,
    filters: filters,
    exportId: 'cTTaQLd'
};

export {QlikDashboardPageWithoutViews, QlikDashboardPageWithViews, QlikDashboardPageWithoutFilters, QlikDashboardPageWithExportId};
