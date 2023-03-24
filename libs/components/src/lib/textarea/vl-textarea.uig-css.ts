import { css, CSSResult } from 'lit';

// deze css is gegenereerd uit de oude custom
// deze css is specifiek voor de content_css configuratie van wysiwygConfig()
const styles: CSSResult = css`
    .tox.tox-tinymce {
        border-radius: 0.3rem !important;
        border: 0.1rem solid #687483 !important;
    }
    .tox.tox-tinymce:hover {
        border: 0.1rem solid rgba(0, 85, 204, 0.65) !important;
        box-shadow: 0px 0px 0px 0.1rem rgba(0, 85, 204, 0.65);
    }
    .tox.tox-tinymce:hover .tox-toolbar__primary {
        box-shadow: inset 0px -0.1rem 0px 0px rgba(0, 85, 204, 0.65);
    }
    .tox.tox-tinymce:hover .tox-toolbar__primary .tox-toolbar__group {
        border-color: rgba(0, 85, 204, 0.65) !important;
    }
    .tox.tox-tinymce.focus {
        outline: none !important;
        border: 0.1rem solid #687483 !important;
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65) !important;
        background-color: #fff !important;
    }
    .tox.tox-tinymce.focus iframe {
        background-color: white !important;
    }
    .tox.tox-tinymce.focus .tox-toolbar__primary {
        box-shadow: inset 0px -1px 0px 0px #687483 !important;
    }
    .tox.tox-tinymce.focus .tox-toolbar__primary .tox-toolbar__group {
        border-color: #687483 !important;
    }
    .tox.tox-tinymce.error {
        border-color: #d2373c !important;
        background-color: #fbebec;
    }
    .tox.tox-tinymce.error:hover {
        box-shadow: 0 0 0 0.1rem #d2373c;
    }
    .tox.tox-tinymce.error iframe {
        background-color: #fbebec;
    }
    .tox.tox-tinymce.error .tox-toolbar__primary {
        box-shadow: inset 0px -1px 0px 0px #d2373c;
    }
    .tox.tox-tinymce.error .tox-toolbar__primary .tox-toolbar__group {
        border-color: #d2373c !important;
    }
    .tox.tox-tinymce.success {
        border-color: #009e47 !important;
        background-color: #e6f5ed;
    }
    .tox.tox-tinymce.success:hover {
        box-shadow: 0 0 0 0.1rem #009e47;
    }
    .tox.tox-tinymce.success iframe {
        background-color: #e6f5ed;
    }
    .tox.tox-tinymce.success .tox-toolbar__primary {
        box-shadow: inset 0px -1px 0px 0px #009e47;
    }
    .tox.tox-tinymce.success .tox-toolbar__primary .tox-toolbar__group {
        border-color: #009e47 !important;
    }
    .tox .tox-toolbar__group {
        border-color: #687483 !important;
    }
    .tox .tox-toolbar__primary {
        background: none !important;
        box-shadow: inset 0px -1px 0px 0px #687483;
    }
    .tox .tox-statusbar {
        position: absolute !important;
        bottom: 0px !important;
        right: 0px !important;
        border-top: none !important;
        background: transparent !important;
    }
    .tox iframe {
        padding: 0rem 1rem !important;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
    }

    .mce-content-body.error {
        background-color: #fbebec;
    }
    .mce-content-body.success {
        background-color: #e6f5ed;
    }
    .mce-content-body.focus {
        background-color: white;
    }
`;
export default styles;
