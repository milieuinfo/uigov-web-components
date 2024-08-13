import { buttonArgTypes } from '@domg-wc/components/next/button/stories/vl-button.stories-arg';
import { cascaderItemArgTypes } from '@domg-wc/components/next/cascader/stories/vl-cascader-item.stories-arg';
import { cascaderArgTypes } from '@domg-wc/components/next/cascader/stories/vl-cascader.stories-arg';
import { doormatArgTypes } from '@domg-wc/components/next/doormat/stories/vl-doormat.stories-arg';
import { iconArgTypes } from '@domg-wc/components/next/icon/stories/vl-icon.stories-arg';
import { infotextArgTypes } from '@domg-wc/components/next/infotext/stories/vl-infotext.stories-arg';
import { linkArgTypes } from '@domg-wc/components/next/link/stories/vl-link.stories-arg';
import { propertiesArgTypes } from '@domg-wc/components/next/properties/stories/vl-properties.stories-arg';
import { stepArgTypes } from '@domg-wc/components/next/steps/stories/vl-step.stories-arg';
import { stepsArgTypes } from '@domg-wc/components/next/steps/stories/vl-steps.stories-arg';
import { titleArgTypes } from '@domg-wc/components/next/title/stories/vl-title.stories-arg';
import { accordionListArgTypes } from '../../../libs/components/src/accordion-list/stories/vl-accordion-list.stories-arg';
import { accordionArgTypes } from '../../../libs/components/src/accordion/stories/vl-accordion.stories-arg';
import { alertArgTypes } from '../../../libs/components/src/alert/stories/vl-alert.stories-arg';
import { annotationArgTypes } from '../../../libs/components/src/annotation/stories/vl-annotation.stories-arg';
import { autocompleteArgTypes } from '../../../libs/components/src/autocomplete/stories/vl-autocomplete.stories-arg';
import { breadcrumbItemArgTypes } from '../../../libs/components/src/breadcrumb/stories/vl-breadcrumb-item.stories-arg';
import { checkboxArgTypes } from '../../../libs/components/src/checkbox/stories/vl-checkbox.stories-arg';
import { contentHeaderArgTypes } from '../../../libs/components/src/content-header/stories/vl-content-header.stories-arg';
import { datepickerArgTypes } from '../../../libs/components/src/datepicker/stories/vl-datepicker.stories-arg';
import { descriptionDataItemArgTypes } from '../../../libs/components/src/description-data/stories/vl-description-data-item.stories-arg';
import { descriptionDataArgTypes } from '../../../libs/components/src/description-data/stories/vl-description-data.stories-arg';
import { documentArgTypes } from '../../../libs/components/src/document/stories/vl-document.stories-arg';
import { functionalHeaderArgTypes } from '../../../libs/components/src/functional-header/stories/vl-functional-header.stories-arg';
import { httpErrorMessageArgTypes } from '../../../libs/components/src/http-error-message/stories/vl-http-error-message.stories-arg';
import { infoTileArgTypes } from '../../../libs/components/src/info-tile/stories/vl-info-tile.stories-arg';
import { infoblockArgTypes } from '../../../libs/components/src/infoblock/stories/vl-infoblock.stories-arg';
import { inputSliderArgTypes } from '../../../libs/components/src/input-slider/stories/vl-input-slider.stories-arg';
import { loaderArgTypes } from '../../../libs/components/src/loader/stories/vl-loader.stories-arg';
import { modalArgTypes } from '../../../libs/components/src/modal/stories/vl-modal.stories-arg';
import { pagerArgTypes } from '../../../libs/components/src/pager/stories/vl-pager.stories-arg';
import { buttonPillArgTypes } from '../../../libs/components/src/pill/stories/vl-button-pill.stories-arg';
import { pillArgTypes } from '../../../libs/components/src/pill/stories/vl-pill.stories-arg';
import { popoverArgTypes } from '../../../libs/components/src/popover/stories/vl-popover.stories-arg';
import { progressBarArgTypes } from '../../../libs/components/src/progress-bar/stories/vl-progress-bar.stories-arg';
import { prozaMessagePreloaderArgTypes } from '../../../libs/components/src/proza-message/stories/vl-proza-message-preloader.stories-arg';
import { prozaMessageArgTypes } from '../../../libs/components/src/proza-message/stories/vl-proza-message.stories-arg';
import { radioArgTypes } from '../../../libs/components/src/radio/stories/vl-radio.stories-arg';
import { richDataTableArgTypes } from '../../../libs/components/src/rich-data-table/stories/vl-rich-data-table.stories-arg';
import { richDataArgTypes } from '../../../libs/components/src/rich-data/stories/vl-rich-data.stories-arg';
import { shareButtonArgTypes } from '../../../libs/components/src/share-buttons/stories/vl-share-button.stories-arg';
import { shareButtonsArgTypes } from '../../../libs/components/src/share-buttons/stories/vl-share-buttons.stories-arg';
import { sideSheetArgTypes } from '../../../libs/components/src/side-sheet/stories/vl-side-sheet.stories-arg';
import { spotlightArgTypes } from '../../../libs/components/src/spotlight/stories/vl-spotlight.stories-arg';
import { tabsPaneArgTypes } from '../../../libs/components/src/tabs/stories/vl-tabs-pane.stories-arg';
import { tabsArgTypes } from '../../../libs/components/src/tabs/stories/vl-tabs.stories-arg';
import { templateArgTypes } from '../../../libs/components/src/template/stories/vl-template.stories-arg';
import { textareaArgTypes } from '../../../libs/components/src/textarea/stories/vl-textarea.stories-arg';
import { toasterArgTypes } from '../../../libs/components/src/toaster/stories/vl-toaster.stories-arg';
import { toggleButtonArgTypes } from '../../../libs/components/src/toggle-button/stories/vl-toggle-button.stories-arg';
import { tooltipArgTypes } from '../../../libs/components/src/tooltip/stories/vl-tooltip.stories-arg';
import { typographyArgTypes } from '../../../libs/components/src/typography/stories/vl-typography.stories-arg';
import { uploadArgTypes } from '../../../libs/components/src/upload/stories/vl-upload.stories-args';
import { wizardPaneArgTypes } from '../../../libs/components/src/wizard/stories/vl-wizard-pane.stories-arg';
import { wizardArgTypes } from '../../../libs/components/src/wizard/stories/vl-wizard.stories-arg';
import { WTComponentList } from '../web-types.model';
import { addWebTypes } from './util.web-types';

export const componentsWebTypes: WTComponentList = [
    addWebTypes(
        'vl-accordion',
        accordionArgTypes,
        '../../libs/components/src/accordion/stories/vl-accordion.stories-doc.mdx',
        '/docs/components-accordion--documentatie'
    ),
    addWebTypes(
        'vl-accordion-list',
        accordionListArgTypes,
        '../../libs/components/src/accordion-list/stories/vl-accordion-list.stories-doc.mdx',
        '/docs/components-accordion-list--documentatie'
    ),
    addWebTypes(
        'vl-alert',
        alertArgTypes,
        '../../libs/components/src/alert/stories/vl-alert.stories-doc.mdx',
        '/docs/components-alert--documentatie'
    ),
    addWebTypes('vl-annotation', annotationArgTypes, null, '/docs/components-annotation--documentatie'),
    addWebTypes(
        'vl-autocomplete',
        autocompleteArgTypes,
        '../../libs/components/src/autocomplete/stories/vl-autocomplete.stories-doc.mdx',
        '/docs/components-autocomplete--documentatie'
    ),
    addWebTypes(
        'vl-breadcrumb',
        null,
        '../../libs/components/src/breadcrumb/stories/vl-breadcrumb.stories-doc.mdx',
        '/docs/components-breadcrumb--documentatie'
    ),
    addWebTypes('vl-breadcrumb-item', breadcrumbItemArgTypes, null, '/docs/components-breadcrumb--documentatie'),
    addWebTypes(
        'vl-checkbox',
        checkboxArgTypes,
        '../../libs/components/src/checkbox/stories/vl-checkbox.stories-doc.mdx',
        '/docs/components-checkbox--documentatie'
    ),
    addWebTypes('vl-code-preview', null, null, '/docs/components-code-preview--documentatie'),
    addWebTypes('vl-contact-card', null, null, '/docs/components-contact-card--documentatie'),
    addWebTypes(
        'vl-content-header',
        contentHeaderArgTypes,
        '../../libs/components/src/content-header/stories/vl-content-header.stories-doc.mdx',
        '/docs/components-content-header--documentatie'
    ),
    addWebTypes(
        'vl-datepicker',
        datepickerArgTypes,
        '../../libs/components/src/datepicker/stories/vl-datepicker.stories-doc.mdx',
        '/docs/components-datepicker--documentatie'
    ),
    addWebTypes(
        'vl-description-data',
        descriptionDataArgTypes,
        null,
        '/docs/components-description-data-description-data--documentatie'
    ),
    addWebTypes(
        'vl-description-data-item',
        descriptionDataItemArgTypes,
        null,
        '/docs/components-description-data-description-data-item--documentatie'
    ),
    addWebTypes(
        'vl-document',
        documentArgTypes,
        '../../libs/components/src/document/stories/vl-document.stories-doc.mdx',
        '/docs/components-document--documentatie'
    ),
    addWebTypes(
        'vl-functional-header',
        functionalHeaderArgTypes,
        '../../libs/components/src/functional-header/stories/vl-functional-header.stories-doc.mdx',
        '/docs/components-functional-header--documentatie'
    ),
    addWebTypes(
        'vl-http-error-message',
        httpErrorMessageArgTypes,
        '../../libs/components/src/http-error-message/stories/vl-http-error-message.stories-doc.mdx',
        '/docs/components-http-error-message--documentatie'
    ),
    addWebTypes(
        'vl-info-tile',
        infoTileArgTypes,
        '../../libs/components/src/info-tile/stories/vl-info-tile.stories-doc.mdx',
        '/docs/components-info-tile--documentatie'
    ),
    addWebTypes('vl-infoblock', infoblockArgTypes, null, '/docs/components-infoblock--documentatie'),
    addWebTypes(
        'vl-input-slider',
        inputSliderArgTypes,
        '../../libs/components/src/input-slider/stories/vl-input-slider.stories-doc.mdx',
        '/docs/components-input-slider--documentatie'
    ),
    addWebTypes('vl-loader', loaderArgTypes, null, '/docs/components-loader--documentatie'),
    addWebTypes('vl-modal', modalArgTypes, null, '/docs/components-modal--documentatie'),
    addWebTypes(
        'vl-button-next',
        buttonArgTypes,
        '../../libs/components/src/next/button/stories/vl-button.stories-doc.mdx',
        '/docs/components-next-button--documentatie'
    ),
    addWebTypes(
        'vl-cascader',
        cascaderArgTypes,
        '../../libs/components/src/next/cascader/stories/vl-cascader.stories-doc.mdx',
        '/docs/components-next-cascader-cascader--documentatie'
    ),
    addWebTypes(
        'vl-cascader-item',
        cascaderItemArgTypes,
        null,
        '/docs/components-next-cascader-cascader-item--documentatie'
    ),
    addWebTypes(
        'vl-doormat-next',
        doormatArgTypes,
        '../../libs/components/src/next/doormat/stories/vl-doormat.stories-doc.mdx',
        '/docs/components-next-doormat--documentatie'
    ),
    addWebTypes(
        'vl-icon-next',
        iconArgTypes,
        '../../libs/components/src/next/icon/stories/vl-icon.stories-doc.mdx',
        '/docs/components-next-icon--documentatie'
    ),
    addWebTypes(
        'vl-infotext-next',
        infotextArgTypes,
        '../../libs/components/src/next/infotext/stories/vl-infotext.stories-doc.mdx',
        '/docs/components-next-infotext--documentatie'
    ),
    addWebTypes(
        'vl-link-next',
        linkArgTypes,
        '../../libs/components/src/next/link/stories/vl-link.stories-doc.mdx',
        '/docs/components-next-link--documentatie'
    ),
    addWebTypes(
        'vl-properties-next',
        propertiesArgTypes,
        '../../libs/components/src/next/properties/stories/vl-properties.stories-doc.mdx',
        '/docs/components-next-properties--documentatie'
    ),
    addWebTypes(
        'vl-steps-next',
        stepsArgTypes,
        '../../libs/components/src/next/steps/stories/vl-steps.stories-doc.mdx',
        '/docs/components-next-steps-steps--documentatie'
    ),
    addWebTypes('vl-step-next', stepArgTypes, null, '/docs/components-next-steps-step--documentatie'),
    addWebTypes('vl-duration-step-next', null, null, '/docs/components-next-steps-steps--documentatie'),
    addWebTypes(
        'vl-title-next',
        titleArgTypes,
        '../../libs/components/src/next/title/stories/vl-title.stories-doc.mdx',
        '/docs/components-next-title--documentatie'
    ),
    addWebTypes('vl-pager', pagerArgTypes, null, '/docs/components-pager--documentatie'),
    addWebTypes('vl-pill', pillArgTypes, null, '/docs/components-pill-pill--documentatie'),
    addWebTypes('vl-button-pill', buttonPillArgTypes, null, '/docs/components-pill-button-pill--documentatie'),
    addWebTypes(
        'vl-popover',
        popoverArgTypes,
        '../../libs/components/src/popover/stories/vl-popover.stories-doc.mdx',
        '/docs/components-popover--documentatie'
    ),
    addWebTypes('vl-popover-action', null, null, '/docs/components-popover--documentatie'),
    addWebTypes('vl-popover-action-list', null, null, '/docs/components-popover--documentatie'),
    addWebTypes(
        'vl-progress-bar',
        progressBarArgTypes,
        '../../libs/components/src/progress-bar/stories/vl-progress-bar.stories-doc.mdx',
        '/docs/components-progress-bar--documentatie'
    ),
    addWebTypes(
        'vl-proza-message',
        prozaMessageArgTypes,
        '../../libs/components/src/proza-message/stories/vl-proza-message.stories-doc.mdx',
        '/docs/components-proza-message--documentatie'
    ),
    addWebTypes(
        'vl-proza-message-preloader',
        prozaMessagePreloaderArgTypes,
        '../../libs/components/src/proza-message/stories/vl-proza-message-preloader.stories-doc.mdx',
        '/docs/components-proza-message-preloader--documentatie'
    ),
    addWebTypes(
        'vl-radio',
        radioArgTypes,
        '../../libs/components/src/radio/stories/vl-radio.stories-doc.mdx',
        '/docs/components-radio--documentatie'
    ),
    addWebTypes('vl-radio-group', null, null, '/docs/components-radio--documentatie'),
    addWebTypes('vl-rich-data', richDataArgTypes, null, '/docs/components-rich-data--documentatie'),
    addWebTypes(
        'vl-rich-data-table',
        richDataTableArgTypes,
        '../../libs/components/src/rich-data-table/stories/vl-rich-data-table.stories-doc.mdx',
        '/docs/components-rich-data-table--documentatie'
    ),
    addWebTypes('vl-rich-data-field', null, null, '/docs/components-rich-data-table--documentatie'),
    addWebTypes('vl-rich-data-sorter', null, null, '/docs/components-rich-data-table--documentatie'),
    addWebTypes('vl-search', null, null, '/docs/components-search--documentatie'),
    addWebTypes('vl-share-button', shareButtonArgTypes, null, '/docs/components-share-buttons-button--documentatie'),
    addWebTypes('vl-share-buttons', shareButtonsArgTypes, null, '/docs/components-share-buttons-buttons--documentatie'),
    addWebTypes(
        'vl-side-sheet',
        sideSheetArgTypes,
        '../../libs/components/src/side-sheet/stories/vl-side-sheet.stories-doc.mdx',
        '/docs/components-side-sheet--documentatie'
    ),
    addWebTypes('vl-spotlight', spotlightArgTypes, null, '/docs/components-spotlight--documentatie'),
    addWebTypes(
        'vl-steps',
        stepsArgTypes,
        '../../libs/components/src/steps/stories/vl-steps.stories-doc.mdx',
        '/docs/components-steps--documentatie'
    ),
    addWebTypes('vl-step', null, null, '/docs/components-steps--documentatie'),
    addWebTypes('vl-duration-step', null, null, '/docs/components-steps--documentatie'),
    addWebTypes(
        'vl-tabs',
        tabsArgTypes,
        '../../libs/components/src/tabs/stories/vl-tabs.stories-doc.mdx',
        '/docs/components-tabs--documentatie'
    ),
    addWebTypes('vl-tabs-pane', tabsPaneArgTypes, null, '/docs/components-tabs--documentatie'),
    addWebTypes('vl-tab', null, null, '/docs/components-tabs--documentatie'),
    addWebTypes('vl-tab-section', null, null, '/docs/components-tabs--documentatie'),
    addWebTypes('vl-template', templateArgTypes, null, '/docs/components-template--documentatie'),
    addWebTypes(
        'vl-textarea',
        textareaArgTypes,
        '../../libs/components/src/textarea/stories/vl-textarea.stories-doc.mdx',
        '/docs/components-textarea--documentatie'
    ),
    addWebTypes('vl-textarea-modal', null, null, '/docs/components-textarea--documentatie'),
    addWebTypes('vl-toaster', toasterArgTypes, null, '/docs/components-toaster--documentatie'),
    addWebTypes('vl-toggle-button', toggleButtonArgTypes, null, '/docs/components-toggle-button--documentatie'),
    addWebTypes(
        'vl-tooltip',
        tooltipArgTypes,
        '../../libs/components/src/tooltip/stories/vl-tooltip.stories-doc.mdx',
        '/docs/components-tooltip--documentatie'
    ),
    addWebTypes('vl-typography', typographyArgTypes, null, '/docs/components-typography--documentatie'),
    addWebTypes(
        'vl-upload',
        uploadArgTypes,
        '../../libs/components/src/upload/stories/vl-upload.stories-doc.mdx',
        '/docs/components-upload--documentatie'
    ),
    addWebTypes(
        'vl-wizard',
        wizardArgTypes,
        '../../libs/components/src/wizard/stories/vl-wizard.stories-doc.mdx',
        '/docs/components-wizard-wizard--documentatie'
    ),
    addWebTypes(
        'vl-wizard-pane',
        wizardPaneArgTypes,
        '../../libs/components/src/wizard/stories/vl-wizard-pane.stories-doc.mdx',
        '/docs/components-wizard-wizard-pane--documentatie'
    ),
];
