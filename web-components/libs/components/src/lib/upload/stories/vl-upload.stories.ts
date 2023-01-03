import { ifDefinedString } from '@domg-wc/common-utilities';
import { html } from 'lit-html';
import '../vl-upload.component';
import { uploadArgs, uploadArgTypes } from './vl-upload.stories-args';

export default {
    title: 'Components/upload',
    args: uploadArgs,
    argTypes: uploadArgTypes,
    parameters: {
        controls: { hideNoControlsWarning: true, sort: 'requiredFirst' },
    },
};

export const uploadDefault = ({
    acceptedFiles,
    autoProcess,
    disabled,
    disallowDuplicates,
    error,
    errorMessageAcceptedFiles,
    errorMessageFilesize,
    errorMessageMaxFiles,
    fullBodyDrop,
    inputName,
    maxFiles,
    maxSize,
    subTitle,
    success,
    title,
    url,
}: typeof uploadArgs) => html`
    <vl-upload
        data-vl-url=${url}
        data-vl-sub-title="${ifDefinedString(subTitle)}"
        data-vl-title="${ifDefinedString(title)}"
        data-vl-accepted-files=${ifDefinedString(acceptedFiles)}
        ?data-vl-autoprocess=${autoProcess}
        ?data-vl-disabled=${disabled}
        ?data-vl-disallow-duplicates=${disallowDuplicates}
        ?data-vl-error=${error}
        data-vl-error-message-accepted-files=${ifDefinedString(errorMessageAcceptedFiles)}
        data-vl-error-message-filesize=${ifDefinedString(errorMessageFilesize)}
        data-vl-error-message-maxfiles=${ifDefinedString(errorMessageMaxFiles)}
        ?data-vl-full-body-drop=${fullBodyDrop}
        data-vl-input-name=${ifDefinedString(inputName)}
        data-vl-max-files=${ifDefinedString(maxFiles)}
        data-vl-max-size=${ifDefinedString(maxSize)}
        ?data-vl-success=${success}
        id="vl-upload"
    ></vl-upload>
`;
uploadDefault.storyName = 'vl-upload - default';
