import { awaitUntil, BaseElementOfType, webComponentPromised } from '@domg-wc/common-utilities';
import { vlFormValidation, vlFormValidationElement } from '@domg-wc/elements';
import 'tinymce/tinymce';
import { VlLinkToolbarFactory } from './vl-link-toolbar-factory';

declare const tinyMCE: any;

@webComponentPromised([vlFormValidation.ready()], 'vl-textarea', { extends:  'textarea'})
export class VlTextarea extends vlFormValidationElement(BaseElementOfType(HTMLTextAreaElement)) {
    static get _observedAttributes() {
        return vlFormValidation._observedAttributes().concat(['error', 'success']);
    }

    static get _observedClassAttributes() {
        return ['disabled', 'block', 'error', 'success', 'focus', 'rich'];
    }

    connectedCallback() {
        this.classList.add('vl-textarea');
        this._dressFormValidation();
        if (this.isRich) {
            this._configureWysiwyg();
        }
    }

    disconnectedCallback() {
        if (this.isRich) {
            this._destroyWysiwyg();
        }
    }

    get isRich() {
        return this.hasAttribute('data-vl-rich');
    }

    get editor() {
        return this._editor;
    }

    get _classPrefix() {
        return 'vl-textarea--';
    }

    get _toolbar() {
        return this.getAttribute('toolbar');
    }

    // TODO: Fix the styling for the wysiwyg editor (content_css property)
    get _wysiwygConfig(): any {
        return {
            target: this,
            menubar: false,
            resize: true,
            elementpath: false,
            branding: false,
            powerpaste_word_import: 'clean',
            powerpaste_html_import: 'clean',
            content_css: '/libs/elements/src/lib/vl-elements.scss',
            verify_html: false,
            forced_root_block: 'p',
            body_class: 'vl-typography',
            plugins: 'hr lists advlist paste',
            formats: {
                bold: { inline: 'b' },
                italic: { inline: 'i' },
                underline: { inline: 'u' },
                strikethrough: { inline: 's' },
            },
            toolbar: this._toolbar || 'undo redo | bold italic underline strikethrough',
            setup: (editor: any) => {
                this._registerVlLinkToolbar(editor);
                this._initWysiwyg(editor);
                const node = this as unknown as Node;
                const observer = new MutationObserver(() => editor.setContent(editor.targetElm.value));
                observer.observe(node, { childList: true, characterData: true, subtree: true });
            },
        };
    }

    _addBlockAttribute() {
        this.setAttribute('data-vl-block', '');
    }

    _configureWysiwyg() {
        this.disabled = true;
        this._addBlockAttribute();
        // opmerking: afnemers moeten zorgen dat icons, plugins, skins en themes
        // van tinymce statisch beschikbaar zijn onder '/node_modules/tinymce'
        tinyMCE.baseURL = '/node_modules/tinymce';
        try {
            tinyMCE.init(this._wysiwygConfig);
        } catch (e) {
            console.error(e);
        }
    }

    _initWysiwyg(editor: any) {
        this._editor = editor;
        this.focus = () => editor.focus();
        editor.on('focus', () => {
            editor.editorContainer.classList.add('focus');
            editor.getBody().classList.add('focus');
        });
        editor.on('blur', () => {
            if (editor.editorContainer) {
                editor.editorContainer.classList.remove('focus');
            }
            if (editor.getBody) {
                editor.getBody().classList.remove('focus');
            }
            editor.save();
            this.dispatchEvent(new Event('change'));
        });
    }

    _destroyWysiwyg() {
        if (this._editor) {
            this.disabled = false;
            this._editor.destroy();
        }
    }

    _registerVlLinkToolbar(editor: any) {
        editor.ui.registry.addButton('vlLink', new VlLinkToolbarFactory().create(editor));
    }

    _errorChangedCallback(oldValue: string, newValue: string) {
        this.__toggleValidationClass(newValue, 'error');
    }

    _successChangedCallback(oldValue: string, newValue: string) {
        this.__toggleValidationClass(newValue, 'success');
    }

    _richChangedCallback(oldValue: string, newValue: string) {
        if (newValue !== null) {
            if (this.isConnected) {
                this._configureWysiwyg();
            }
        } else {
            this._destroyWysiwyg();
        }
    }

    __toggleValidationClass(value: string, clazz: string) {
        if (this.isRich) {
            awaitUntil(() => this._editor && this._editor.getContainer()).then(() => {
                if (this._editor.getContainer()) {
                    this._toggleClass(this._editor.getContainer(), value, clazz);
                    this._toggleClass(this._editor.getBody(), value, clazz);
                }
            });
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-textarea': VlTextarea;
    }
}
