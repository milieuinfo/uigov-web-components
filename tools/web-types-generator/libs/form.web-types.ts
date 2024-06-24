import { checkboxArgTypes } from '@domg-wc/form/next/checkbox/stories/vl-checkbox.stories-arg';
import { datepickerArgTypes } from '@domg-wc/form/next/datepicker/stories/vl-datepicker.stories-arg';
import { errorMessageArgTypes } from '@domg-wc/form/next/error-message/stories/vl-error-message.stories-arg';
import { formLabelArgTypes } from '@domg-wc/form/next/form-label/stories/vl-form-label.stories-arg';
import { inputFieldMaskedArgTypes } from '@domg-wc/form/next/input-field-masked/stories/vl-input-field-masked.stories-arg';
import { inputFieldArgTypes } from '@domg-wc/form/next/input-field/stories/vl-input-field.stories-arg';
import { radioGroupArgTypes } from '@domg-wc/form/next/radio-group/stories/vl-radio-group.stories-arg';
import { radioArgTypes } from '@domg-wc/form/next/radio-group/stories/vl-radio.stories-arg';
import { selectRichArgTypes } from '@domg-wc/form/next/select-rich/stories/vl-select-rich.stories-arg';
import { selectArgTypes } from '@domg-wc/form/next/select/stories/vl-select.stories-arg';
import { textareaRichArgTypes } from '@domg-wc/form/next/textarea-rich/stories/vl-textarea-rich.stories-arg';
import { textareaArgTypes } from '@domg-wc/form/next/textarea/stories/vl-textarea.stories-arg';
import { uploadArgTypes } from '@domg-wc/form/next/upload/stories/vl-upload.stories-arg';
import { WTComponentList } from '../web-types.model';
import { addWebTypes } from './util.web-types';

export const formWebTypes: WTComponentList = [
    addWebTypes(
        'vl-checkbox-next',
        checkboxArgTypes,
        '../../libs/form/src/next/checkbox/stories/vl-checkbox.stories-doc.mdx',
        '/docs/form-next-checkbox--documentatie'
    ),
    addWebTypes(
        'vl-datepicker-next',
        datepickerArgTypes,
        '../../libs/form/src/next/datepicker/stories/vl-datepicker.stories-doc.mdx',
        '/docs/form-next-datepicker--documentatie'
    ),
    addWebTypes(
        'vl-error-message-next',
        errorMessageArgTypes,
        '../../libs/form/src/next/error-message/stories/vl-error-message.stories-doc.mdx',
        '/docs/form-next-error-message--documentatie'
    ),
    addWebTypes(
        'vl-form-label-next',
        formLabelArgTypes,
        '../../libs/form/src/next/form-label/stories/vl-form-label.stories-doc.mdx',
        '/docs/form-next-form-label--documentatie'
    ),
    addWebTypes(
        'vl-input-field-next',
        inputFieldArgTypes,
        '../../libs/form/src/next/input-field/stories/vl-input-field.stories-doc.mdx',
        '/docs/form-next-input-field--documentatie'
    ),
    addWebTypes(
        'vl-input-field-masked-next',
        inputFieldMaskedArgTypes,
        '../../libs/form/src/next/input-field-masked/stories/vl-input-field-masked.stories-doc.mdx',
        '/docs/form-next-input-field-masked--documentatie'
    ),
    addWebTypes('vl-radio-next', radioArgTypes, null, '/docs/form-next-radio-group--documentatie'),
    addWebTypes(
        'vl-radio-group-next',
        radioGroupArgTypes,
        '../../libs/form/src/next/radio-group/stories/vl-radio-group.stories-doc.mdx',
        '/docs/form-next-radio-group--documentatie'
    ),
    addWebTypes(
        'vl-select-next',
        selectArgTypes,
        '../../libs/form/src/next/select/stories/vl-select.stories-doc.mdx',
        '/docs/form-next-select--documentatie'
    ),
    addWebTypes(
        'vl-select-rich-next',
        selectRichArgTypes,
        '../../libs/form/src/next/select-rich/stories/vl-select-rich.stories-doc.mdx',
        '/docs/form-next-select-rich--documentatie'
    ),
    addWebTypes(
        'vl-textarea-next',
        textareaArgTypes,
        '../../libs/form/src/next/textarea/stories/vl-textarea.stories-doc.mdx',
        '/docs/form-next-textarea--documentatie'
    ),
    addWebTypes(
        'vl-textarea-rich-next',
        textareaRichArgTypes,
        '../../libs/form/src/next/textarea-rich/stories/vl-textarea-rich.stories-doc.mdx',
        '/docs/form-next-textarea-rich--documentatie'
    ),
    addWebTypes(
        'vl-upload-next',
        uploadArgTypes,
        '../../libs/form/src/next/upload/stories/vl-upload.stories-doc.mdx',
        '/docs/form-next-upload--documentatie'
    ),
];
