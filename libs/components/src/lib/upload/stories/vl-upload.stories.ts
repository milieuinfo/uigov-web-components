import { html } from 'lit-html';
import '../vl-upload.component';
import { uploadArgs, uploadArgTypes } from './vl-upload.stories-args';
import uploadDoc from './vl-upload.stories-doc.mdx';
import { nothing } from 'lit';
import { Meta, StoryFn } from '@storybook/web-components';
import addDuplicateWarning from './vl-upload.stories-util';

export default {
    title: 'Components/upload',
    args: uploadArgs,
    argTypes: uploadArgTypes,
    parameters: {
        controls: { hideNoControlsWarning: true, sort: 'requiredFirst' },
        docs: { page: uploadDoc },
    },
} as Meta<typeof uploadArgs>;

export const UploadDefault: StoryFn<typeof uploadArgs> = ({
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
        <vl-upload
            data-vl-url=${url}
            data-vl-sub-title=${subTitle || nothing}
            data-vl-title=${title || nothing}
            data-vl-accepted-files=${acceptedFiles || nothing}
            ?data-vl-autoprocess=${autoProcess}
            ?data-vl-disabled=${disabled}
            ?data-vl-disallow-duplicates=${disallowDuplicates}
            ?data-vl-error=${error}
            data-vl-error-message-accepted-files=${errorMessageAcceptedFiles || nothing}
            data-vl-error-message-filesize=${errorMessageFilesize || nothing}
            data-vl-error-message-maxfiles=${errorMessageMaxFiles || nothing}
            ?data-vl-full-body-drop=${fullBodyDrop}
            data-vl-input-name=${inputName || nothing}
            data-vl-max-files=${maxFiles || nothing}
            data-vl-max-size=${maxSize || nothing}
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
};
UploadDefault.storyName = 'vl-upload - default';

export const UploadInForm: StoryFn<typeof uploadArgs> = ({
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
}: typeof uploadArgs) => {
    return html`
        <form is="vl-form" data-vl-validate data-validate-form>
            <div is="vl-form-grid" data-vl-is-stacked id="grid">
                <div is="vl-form-column" data-vl-size="12" id="upload-column">
                    <section is="vl-region" id="upload-region">
                        <vl-upload
                            data-vl-input-name="bestand"
                            data-vl-error-placeholder="upload-error"
                            data-vl-url=${url}
                            data-vl-sub-title=${subTitle || nothing}
                            data-vl-title=${title || nothing}
                            data-vl-accepted-files=${acceptedFiles || nothing}
                            ?data-vl-autoprocess=${autoProcess}
                            ?data-vl-disabled=${disabled}
                            ?data-vl-disallow-duplicates=${disallowDuplicates}
                            ?data-vl-error=${error}
                            data-vl-error-message-accepted-files=${errorMessageAcceptedFiles || nothing}
                            data-vl-error-message-filesize=${errorMessageFilesize || nothing}
                            data-vl-error-message-maxfiles=${errorMessageMaxFiles || nothing}
                            ?data-vl-full-body-drop=${fullBodyDrop}
                            data-vl-input-name=${inputName || nothing}
                            data-vl-max-files=${maxFiles || nothing}
                            data-vl-max-size=${maxSize || nothing}
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
};
UploadInForm.storyName = 'vl-upload - in form';
UploadInForm.args = {
    resetFormOnClear: true,
};
