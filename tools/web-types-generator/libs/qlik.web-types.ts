import { qlikDashboardPageArgTypes } from '../../../libs/qlik/src/dashboard-page/stories/vl-qlik-dashboard-page.stories-arg';
import { qlikDashboardArgTypes } from '../../../libs/qlik/src/dashboard/stories/vl-qlik-dashboard.stories-arg';
import { qlikInfoblockArgTypes } from '../../../libs/qlik/src/infoblock/stories/vl-qlik-infoblock.stories-arg';
import { qlikVisualArgTypes } from '../../../libs/qlik/src/visual/stories/vl-qlik-visual.stories-arg';
import { addWebTypes } from './util.web-types';

export const qlikWebTypes = [
    addWebTypes(
        'vl-qlik-dashboard',
        qlikDashboardArgTypes,
        '../../libs/qlik/src/dashboard/stories/vl-qlik-dashboard.stories-doc.mdx',
        '/docs/qlik-qlik-dashboard--documentatie'
    ),
    addWebTypes(
        'vl-qlik-dashboard-page',
        qlikDashboardPageArgTypes,
        '../../libs/qlik/src/dashboard-page/stories/vl-qlik-dashboard-page.stories-doc.mdx',
        '/docs/qlik-qlik-dashboard-page--documentatie'
    ),
    addWebTypes(
        'vl-qlik-infoblock',
        qlikInfoblockArgTypes,
        '../../libs/qlik/src/infoblock/stories/vl-qlik-infoblock.stories-doc.mdx',
        '/docs/qlik-qlik-infoblock--documentatie'
    ),
    // addWebTypes(
    //     'vl-qlik-visual',
    //     qlikVisualArgTypes,
    //     '../../libs/qlik/src/visual/stories/vl-qlik-visual.stories-doc.mdx',
    //     '/docs/qlik-qlik-visual--documentatie'
    // ),
];
