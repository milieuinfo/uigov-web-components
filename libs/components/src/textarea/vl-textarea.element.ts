import { awaitUntil, BaseElementOfType, webComponentPromised } from '@domg-wc/common';
import { vlFormValidation, vlFormValidationElement } from '@domg-wc/elements';
import 'tinymce/tinymce';
import { VlLinkToolbarFactory } from './vl-link-toolbar-factory';
import { Editor, RawEditorSettings, TinyMCE } from 'tinymce';
import { defaultTinyMceToolbar } from './vl-textarea.defaults';

declare const tinyMCE: TinyMCE;

@webComponentPromised([vlFormValidation.ready()], 'vl-textarea', { extends: 'textarea' })
export class VlTextarea extends vlFormValidationElement(BaseElementOfType(HTMLTextAreaElement)) {
    static get _observedAttributes() {
        return vlFormValidation._observedAttributes().concat(['error', 'success']);
    }

    static get _observedClassAttributes() {
        return ['disabled', 'block', 'error', 'success', 'focus', 'rich', 'readonly'];
    }

    private initialised = false;
    private observers: MutationObserver[] = [];
    _editor: Editor | undefined;

    connectedCallback() {
        this.classList.add('vl-textarea');
        this._dressFormValidation();
        if (this.isRich) {
            this._configureWysiwyg();
        }
    }

    disconnectedCallback() {
        this.observers?.forEach((observer) => observer?.disconnect());
        if (this.isRich) {
            this._destroyWysiwyg();
        }
    }

    get isRich() {
        return this.hasAttribute('data-vl-rich');
    }

    get isReadonly(): boolean {
        return this.hasAttribute('data-vl-readonly');
    }

    get isDisabled(): boolean {
        return this.hasAttribute('data-vl-disabled');
    }

    get editor(): Editor | undefined {
        return this._editor;
    }

    get _classPrefix(): string {
        return 'vl-textarea--';
    }

    get _toolbar(): string {
        return this.getAttribute('toolbar');
    }

    // TODO: Fix the styling for the wysiwyg editor (content_css property)
    get _wysiwygConfig(): RawEditorSettings {
        return {
            target: this as unknown as HTMLElement,
            menubar: false,
            resize: true,
            elementpath: false,
            branding: false,
            powerpaste_word_import: 'clean',
            powerpaste_html_import: 'clean',
            content_css: 'https://cdn.omgeving.vlaanderen.be/domg/govflanders-style/14.1.0/custom/tinymce.css',
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
            toolbar: this._toolbar || defaultTinyMceToolbar,
            setup: (editor: Editor) => {
                this._registerVlLinkToolbar(editor);
                this._initWysiwyg(editor);
                const node = this as unknown as Node;
                const observer = new MutationObserver(() => {
                    const targetElm = editor.targetElm as unknown as HTMLTextAreaElement;
                    editor.setContent(targetElm.value);
                });
                this.observers.push(observer);
                observer.observe(node, { childList: true, characterData: true, subtree: true });
                editor.on('init', () => {
                    this.__disableActiveEditor(this.isDisabled);
                    this.__toggleEditorToolbar(this.isReadonly);
                    this.__toggleEditorReadonly(this.isReadonly || this.isDisabled);
                    this.initialised = true;
                });
            },
        };
    }

    _addBlockAttribute() {
        this.setAttribute('data-vl-block', '');
    }

    _configureWysiwyg() {
        this.disabled = true;
        this._addBlockAttribute();
        tinyMCE.baseURL = 'https://cdn.omgeving.vlaanderen.be/domg/tinymce/5.10.6';
        try {
            tinyMCE.init(this._wysiwygConfig);
        } catch (e) {
            console.error(e);
        }
    }

    _initWysiwyg(editor: Editor): void {
        this._editor = editor;
        this.focus = () => editor.focus();
        editor.on('focus', () => {
            if (!this.isDisabled) {
                editor.editorContainer.classList.add('focus');
                editor.getBody()?.classList.add('focus');
            }
        });
        editor.on('blur', () => {
            if (editor.editorContainer) {
                editor.editorContainer.classList.remove('focus');
            }
            if (editor.getBody) {
                editor.getBody()?.classList.remove('focus');
            }
            editor.save();
            this.dispatchEvent(new Event('change'));
        });
    }

    _destroyWysiwyg(): void {
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

    _disabledChangedCallback(oldValue: string, newValue: string) {
        const disabled = newValue !== null;
        if (this.isRich && this.initialised) {
            this.__toggleEditorReadonly(disabled);
            this.__disableActiveEditor(disabled);
        }
    }

    _readonlyChangedCallback(oldValue: string, newValue: string) {
        const readonly = newValue !== null;
        this.__toggleEditorReadonly(readonly);
        this.__toggleEditorToolbar(readonly);
    }

    /**
     * toggles disabled styling on the vl-textarea in rich-text mode
     * @param disabled
     */
    __disableActiveEditor(disabled: boolean): void {
        if (this.isRich && tinyMCE?.activeEditor) {
            const editor = tinyMCE?.activeEditor;
            const disabledClass = 'vl-textarea--disabled';
            if (disabled) {
                // toolbar disablen
                editor.ui?.disable();
                // disabled styling toevoegen
                editor.getBody()?.classList.add(disabledClass);
            } else {
                // zal enablen disablen
                editor.ui?.enable();
                // disabled styling toevoegen
                editor.getBody()?.classList.remove(disabledClass);
            }
        }
    }

    /**
     * toggles tinymce Editor's readonly mode
     * @param readonly
     */
    __toggleEditorReadonly(readonly: boolean): void {
        // null check op body is nodig omdat de editor de modus niet kan instellen zonder body
        if (tinyMCE?.activeEditor?.getBody()) {
            if (readonly) {
                tinyMCE.activeEditor?.mode?.set('readonly');
            } else {
                tinyMCE.activeEditor?.mode?.set('design');
            }
        }
    }

    /**
     * toggles visibility of tinymce Editor toolbar
     * @param readonly
     */
    __toggleEditorToolbar(readonly: boolean): void {
        if (tinyMCE) {
            if (readonly) {
                tinyMCE?.activeEditor
                    ?.getContainer()
                    .querySelector('div.tox-editor-header')
                    ?.classList.add('vl-u-hidden');
            } else {
                tinyMCE?.activeEditor
                    ?.getContainer()
                    .querySelector('div.tox-editor-header')
                    ?.classList.remove('vl-u-hidden');
            }
        }
    }

    __toggleValidationClass(value: string, clazz: string) {
        if (this.isRich) {
            awaitUntil(() => this._editor && this._editor.getContainer()).then(() => {
                if (this._editor?.getContainer()) {
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
