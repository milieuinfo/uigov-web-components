import { story } from '@domg-wc/common-storybook';
import { uploadArgTypes, uploadArgs } from './vl-upload.stories-arg';
import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import uploadDocs from './vl-upload.stories-doc.mdx';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlUploadComponent } from '../vl-upload.component';

registerWebComponents([VlUploadComponent]);

export default {
    title: 'Form-next/upload',
    tags: ['autodocs'],
    args: uploadArgs,
    argTypes: uploadArgTypes,
    parameters: {
        docs: {
            page: uploadDocs,
        },
    },
} as Meta<typeof uploadArgs>;

export const UploadDefault = story(
    uploadArgs,
    ({
        id,
        name,
        label,
        required,
        disabled,
        error,
        success,
        url,
        disallowDuplicates,
        maxSize,
        maxFiles,
        autoProcess,
        acceptedFiles,
        subTitle,
        mainTitle,
        errorMessageMaxFiles,
        errorMessageFilesize,
        errorMessageAcceptedFiles,
        onVlInput,
        onVlValid,
        onVlError,
    }) => {
        return html`
            <vl-upload-next
                id=${id}
                name=${name}
                label=${label}
                ?required=${required}
                ?disabled=${disabled}
                ?error=${error}
                ?success=${success}
                ?disallow-duplicates=${disallowDuplicates}
                ?auto-process=${autoProcess}
                accepted-files=${acceptedFiles}
                max-size=${maxSize}
                max-files=${maxFiles}
                url=${url}
                sub-title=${subTitle}
                main-title=${mainTitle}
                error-message-max-files=${errorMessageMaxFiles}
                error-message-filesize=${errorMessageFilesize}
                error-message-accepted-files=${errorMessageAcceptedFiles}
                @vl-input=${onVlInput}
                @vl-valid=${onVlValid}
                @vl-error=${onVlError}
            >
            </vl-upload-next>
        `;
    }
);
UploadDefault.storyName = 'vl-upload-next - default';
UploadDefault.args = {
    url: 'http://httpbin.org/post',
};
