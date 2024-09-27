import { story } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import '../vl-upload.component';
import { uploadArgs, uploadArgTypes } from './vl-upload.stories-args';
import uploadDoc from './vl-upload.stories-doc.mdx';
import addDuplicateWarning from './vl-upload.stories-util';

export default {
    id: 'components-upload',
    title: 'Components/upload',
    tags: ['autodocs'],
    args: uploadArgs,
    argTypes: uploadArgTypes,
    parameters: {
        docs: {
            page: uploadDoc,
        },
        controls: {
            hideNoControlsWarning: true,
            sort: 'requiredFirst',
        },
    },
} as Meta<typeof uploadArgs>;

export const UploadDefault = story(
    uploadArgs,
    ({
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
        resetFormOnClear,
        url,
        onChange,
        onDuplicateRemoved,
    }) => {
        return html`
            <vl-upload
                data-vl-url=${url}
                data-vl-sub-title=${subTitle}
                data-vl-title=${title}
                data-vl-accepted-files=${acceptedFiles}
                ?data-vl-autoprocess=${autoProcess}
                ?data-vl-disabled=${disabled}
                ?data-vl-disallow-duplicates=${disallowDuplicates}
                ?data-vl-error=${error}
                data-vl-error-message-accepted-files=${errorMessageAcceptedFiles}
                data-vl-error-message-filesize=${errorMessageFilesize}
                data-vl-error-message-maxfiles=${errorMessageMaxFiles}
                ?data-vl-full-body-drop=${fullBodyDrop}
                data-vl-input-name=${inputName}
                data-vl-max-files=${maxFiles}
                data-vl-max-size=${maxSize}
                ?data-vl-success=${success}
                ?data-vl-reset-form-on-clear=${resetFormOnClear}
                @change=${(event: CustomEvent) => onChange(event.detail)}
                @duplicateRemoved=${(event: CustomEvent) => {
                    addDuplicateWarning();
                    onDuplicateRemoved(event.detail);
                }}
                id="vl-upload"
            ></vl-upload>
        `;
    }
);
UploadDefault.storyName = 'vl-upload - default';
UploadDefault.args = {
    inputName: 'file',
    maxSize: 2000000,
    subTitle: '',
    success: false,
    title: '',
    url: 'http://httpbin.org/post',
};

export const UploadInForm = story(
    uploadArgs,
    ({
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
        resetFormOnClear,
        onChange,
        onDuplicateRemoved,
    }) => {
        return html`
            <form is="vl-form" data-vl-validate data-validate-form>
                <div is="vl-form-grid" data-vl-is-stacked id="grid">
                    <div is="vl-form-column" data-vl-size="12" id="upload-column">
                        <section is="vl-region" id="upload-region">
                            <vl-upload
                                data-vl-input-name="bestand"
                                data-vl-error-placeholder="upload-error"
                                data-vl-url=${url}
                                data-vl-sub-title=${subTitle}
                                data-vl-title=${title}
                                data-vl-accepted-files=${acceptedFiles}
                                ?data-vl-autoprocess=${autoProcess}
                                ?data-vl-disabled=${disabled}
                                ?data-vl-disallow-duplicates=${disallowDuplicates}
                                ?data-vl-error=${error}
                                data-vl-error-message-accepted-files=${errorMessageAcceptedFiles}
                                data-vl-error-message-filesize=${errorMessageFilesize}
                                data-vl-error-message-maxfiles=${errorMessageMaxFiles}
                                ?data-vl-full-body-drop=${fullBodyDrop}
                                data-vl-input-name=${inputName}
                                data-vl-max-files=${maxFiles}
                                data-vl-max-size=${maxSize}
                                ?data-vl-success=${success}
                                ?data-vl-reset-form-on-clear=${resetFormOnClear}
                                @change=${(event: CustomEvent) => onChange(event.detail)}
                                @duplicateRemoved=${(event: CustomEvent) => {
                                    addDuplicateWarning();
                                    onDuplicateRemoved(event.detail);
                                }}
                                id="vl-upload"
                            ></vl-upload>
                            <p
                                is="vl-form-validation-message"
                                id="upload-error-message"
                                data-vl-error
                                data-vl-error-id="upload-error"
                                hidden
                            >
                                Kies een bestand.
                            </p>
                        </section>
                    </div>
                </div>
            </form>
        `;
    }
);
UploadInForm.storyName = 'vl-upload - in form';
UploadInForm.args = {
    resetFormOnClear: true,
    title: 'upload binnen een form',
};
