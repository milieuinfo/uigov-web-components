import { actionGroupArgTypes } from '../../../libs/elements/src/action-group/stories/vl-action-group.stories-arg';
import { buttonArgTypes } from '../../../libs/elements/src/button/stories/vl-button.stories-arg';
import { dataTableArgTypes } from '../../../libs/elements/src/data-table/stories/vl-data-table.stories-arg';
import { doormatArgTypes } from '../../../libs/elements/src/doormat/stories/vl-doormat.stories-arg';
import { formLabelArgTypes } from '../../../libs/elements/src/form-message/stories/vl-form-label.stories-arg';
import { formValidationMessageArgTypes } from '../../../libs/elements/src/form-message/stories/vl-form-validation-message.stories-arg';
import { formArgTypes } from '../../../libs/elements/src/form/stories/vl-form.stories-arg';
import { gridColumnArgTypes } from '../../../libs/elements/src/grid/stories/vl-grid-column.stories-arg';
import { gridRegionArgTypes } from '../../../libs/elements/src/grid/stories/vl-grid-region.stories-arg';
import { gridDefaultArgTypes } from '../../../libs/elements/src/grid/stories/vl-grid.stories-arg';
import { iconArgTypes } from '../../../libs/elements/src/icon/stories/vl-icon.stories-arg';
import { inputFieldArgTypes } from '../../../libs/elements/src/input-field/stories/vl-input-field.stories-arg';
import { linkListArgTypes } from '../../../libs/elements/src/link-list/stories/vl-link-list.stories-arg';
import { linkBaseArgTypes, linkDefaultArgTypes } from '../../../libs/elements/src/link/stories/vl-link.stories-arg';
import { multiselectArgTypes } from '../../../libs/elements/src/multiselect/stories/vl-multiselect.stories-arg';
import { propertiesArgTypes } from '../../../libs/elements/src/properties/stories/vl-properties.stories-arg';
import { searchFilterArgTypes } from '../../../libs/elements/src/search-filter/stories/vl-search-filter.stories-arg';
import { selectArgTypes } from '../../../libs/elements/src/select/stories/vl-select.stories-arg';
import { textArgTypes } from '../../../libs/elements/src/text/stories/vl-text.stories-arg';
import { titleArgTypes } from '../../../libs/elements/src/title/stories/vl-title.stories-arg';
import { WTConfigArray } from '../web-types.model';
import { buildWTConfig } from './utils.wt-config';

export const buildWTConfigElements: WTConfigArray = [
    buildWTConfig('vl-action-group', actionGroupArgTypes, null, '/docs/elements-action-group--documentatie'),
    buildWTConfig('vl-body', null, null, '/docs/elements-body--documentatie'),
    buildWTConfig('vl-button', buttonArgTypes, null, '/docs/elements-button-button--documentatie'),
    buildWTConfig('vl-link-button', buttonArgTypes, null, '/docs/elements-button-link-button--documentatie'),
    buildWTConfig(
        'vl-data-table',
        dataTableArgTypes,
        '../../libs/elements/src/data-table/stories/vl-data-table.stories-doc.mdx',
        '/docs/elements-data-table--documentatie'
    ),
    buildWTConfig('vl-doormat', doormatArgTypes, null, '/docs/elements-doormat-doormat--documentatie'),
    buildWTConfig('vl-doormat-content', null, null, '/docs/elements-doormat-doormat--documentatie'),
    buildWTConfig('vl-doormat-graphic-wrapper', null, null, '/docs/elements-doormat-doormat--documentatie'),
    buildWTConfig('vl-doormat-image', null, null, '/docs/elements-doormat-doormat-image--documentatie'),
    buildWTConfig('vl-doormat-text', null, null, '/docs/elements-doormat-doormat--documentatie'),
    buildWTConfig('vl-doormat-title', null, null, '/docs/elements-doormat-doormat--documentatie'),
    buildWTConfig(
        'vl-form',
        formArgTypes,
        '../../libs/elements/src/form/stories/vl-form.stories-doc.mdx',
        '/docs/elements-form--documentatie'
    ),
    buildWTConfig('vl-form-group', null, null, '/docs/elements-form--documentatie'),
    buildWTConfig('vl-form-grid', null, null, '/docs/elements-form-grid-form-grid--documentatie'),
    buildWTConfig('vl-form-column', null, null, '/docs/elements-form-grid-form-column--documentatie'),
    buildWTConfig('vl-form-annotation', null, null, '/docs/elements-form-message-form-annotation--documentatie'),
    buildWTConfig('vl-form-annotation-span', null, null, '/docs/elements-form-message-form-annotation--documentatie'),
    buildWTConfig('vl-form-label', formLabelArgTypes, null, '/docs/elements-form-message-form-label--documentatie'),
    buildWTConfig(
        'vl-form-validation-message',
        formValidationMessageArgTypes,
        null,
        '/docs/elements-form-message-form-validation-message--documentatie'
    ),
    buildWTConfig('vl-column', gridColumnArgTypes, null, '/docs/elements-grid-grid-column--documentatie'),
    buildWTConfig('vl-grid', gridDefaultArgTypes, null, '/docs/elements-grid-grid--documentatie'),
    buildWTConfig('vl-layout', null, null, '/docs/elements-grid-grid-layout--documentatie'),
    buildWTConfig('vl-region', gridRegionArgTypes, null, '/docs/elements-grid-grid-region--documentatie'),
    buildWTConfig('vl-icon', iconArgTypes, null, '/docs/elements-icon-icon--documentatie'),
    buildWTConfig('vl-icon-wrapper', null, null, '/docs/elements-icon-icon--documentatie'),
    buildWTConfig('vl-image', null, null, '/docs/elements-image--documentatie'),
    buildWTConfig('vl-infotext', null, null, '/docs/elements-infotext--documentatie'),
    buildWTConfig('vl-input-addon', null, null, '/docs/elements-input-addon-input-addon--documentatie'),
    buildWTConfig('vl-button-input-addon', null, null, '/docs/elements-input-addon-button-input-addon--documentatie'),
    buildWTConfig(
        'vl-input-field',
        inputFieldArgTypes,
        '../../libs/elements/src/input-field/stories/vl-input-field.stories-doc.mdx',
        '/docs/elements-input-field--documentatie'
    ),
    buildWTConfig('vl-input-group', null, null, '/docs/elements-input-group--documentatie'),
    buildWTConfig('vl-introduction', null, null, '/docs/elements-introduction--documentatie'),
    buildWTConfig(
        'vl-link',
        { ...linkBaseArgTypes, ...linkDefaultArgTypes },
        null,
        '/docs/elements-link-link--documentatie'
    ),
    buildWTConfig('vl-button-link', linkBaseArgTypes, null, '/docs/elements-link-button-link--documentatie'),
    buildWTConfig('vl-link-list', linkListArgTypes, null, '/docs/elements-link-list--documentatie'),
    buildWTConfig('vl-link-list-item', null, null, '/docs/elements-link-list--documentatie'),
    buildWTConfig(
        'vl-multiselect',
        multiselectArgTypes,
        '../../libs/elements/src/multiselect/stories/vl-multiselect.stories-doc.mdx',
        '/docs/elements-multiselect--documentatie'
    ),
    buildWTConfig(
        'vl-properties',
        propertiesArgTypes,
        '../../libs/elements/src/properties/stories/vl-properties.stories-doc.mdx',
        '/docs/elements-properties--documentatie'
    ),
    buildWTConfig('vl-properties-column', null, null, '/docs/elements-properties--documentatie'),
    buildWTConfig('vl-properties-list', null, null, '/docs/elements-properties--documentatie'),
    buildWTConfig('vl-property-term', null, null, '/docs/elements-properties--documentatie'),
    buildWTConfig('vl-property-value', null, null, '/docs/elements-properties--documentatie'),
    buildWTConfig('vl-search-filter', searchFilterArgTypes, null, '/docs/elements-search-filter--documentatie'),
    buildWTConfig('vl-search-result', null, null, '/docs/elements-search-results-search-result--documentatie'),
    buildWTConfig('vl-search-results', null, null, '/docs/elements-search-results-search-results--documentatie'),
    buildWTConfig(
        'vl-select',
        selectArgTypes,
        '../../libs/elements/src/select/stories/vl-select.stories-doc.mdx',
        '/docs/elements-select--documentatie'
    ),
    buildWTConfig(
        'vl-side-navigation',
        null,
        '../../libs/elements/src/side-navigation/stories/vl-side-navigation.stories-doc.mdx',
        '/docs/elements-side-navigation--documentatie'
    ),
    buildWTConfig('vl-side-navigation-content', null, null, '/docs/elements-side-navigation--documentatie'),
    buildWTConfig('vl-side-navigation-group', null, null, '/docs/elements-side-navigation--documentatie'),
    buildWTConfig('vl-side-navigation-item', null, null, '/docs/elements-side-navigation--documentatie'),
    buildWTConfig('vl-side-navigation-reference', null, null, '/docs/elements-side-navigation--documentatie'),
    buildWTConfig('vl-side-navigation-h1', null, null, '/docs/elements-side-navigation--documentatie'),
    buildWTConfig('vl-side-navigation-h2', null, null, '/docs/elements-side-navigation--documentatie'),
    buildWTConfig('vl-side-navigation-h3', null, null, '/docs/elements-side-navigation--documentatie'),
    buildWTConfig('vl-side-navigation-h4', null, null, '/docs/elements-side-navigation--documentatie'),
    buildWTConfig('vl-side-navigation-h5', null, null, '/docs/elements-side-navigation--documentatie'),
    buildWTConfig('vl-side-navigation-h6', null, null, '/docs/elements-side-navigation--documentatie'),
    buildWTConfig('vl-side-navigation-toggle', null, null, '/docs/elements-side-navigation--documentatie'),
    buildWTConfig('vl-text', textArgTypes, null, '/docs/elements-text--documentatie'),
    buildWTConfig('vl-h1', titleArgTypes, null, '/docs/elements-title-h1--documentatie'),
    buildWTConfig('vl-h2', titleArgTypes, null, '/docs/elements-title-h2--documentatie'),
    buildWTConfig('vl-h3', titleArgTypes, null, '/docs/elements-title-h3--documentatie'),
    buildWTConfig('vl-h4', titleArgTypes, null, '/docs/elements-title-h4--documentatie'),
    buildWTConfig('vl-h5', titleArgTypes, null, '/docs/elements-title-h5--documentatie'),
    buildWTConfig('vl-h6', titleArgTypes, null, '/docs/elements-title-h6--documentatie'),
    buildWTConfig('vl-video-player', null, null, '/docs/elements-video-player--documentatie'),
];
