import { BaseElementOfType, webComponentConditional } from '@domg-wc/common-utilities';
import '../modal/vl-modal.component';

@webComponentConditional('vl-modal', 'vl-textarea-modal')
export class VlTextareaModal extends BaseElementOfType(HTMLElement) {
    constructor() {
        super(`
      <vl-modal id="modal-cl" data-vl-title="Link toevoegen">
        <form is="vl-form" id="link-form" slot="content" data-vl-validate>
          <div is="vl-form-grid" is-stacked>
            <div is="vl-form-column" size="12">
              <label is="vl-form-label" for="text" data-vl-block>Tekst</label>
              <input id="text" is="vl-input-field" placeholder="Link" data-vl-block data-required="true" data-vl-error-message="Gelieve een tekst in te vullen" data-vl-error-placeholder="text-error" name="link">
              <p is="vl-form-validation-message" data-vl-error data-vl-error-id="text-error"></p>
            </div>
            <div is="vl-form-column" data-vl-size="12">
              <label is="vl-form-label" for="url" data-vl-block>URL</label>
              <input id="url" is="vl-input-field" placeholder="https://vlaanderen.be" data-vl-block data-required="true" data-vl-error-message="Gelieve een URL in te vullen" data-vl-error-placeholder="url-error" name="url">
              <p is="vl-form-validation-message" data-vl-error data-vl-error-id="url-error"></p>
            </div>
          </div>
        </form>
        <button is="vl-button" slot="button" type="submit" form="link-form">Bewaar</button>
      </vl-modal>
    `);
    }

    connectedCallback() {
        this._modal.on('close', () => setTimeout(() => this.clear()));
    }

    get text() {
        return this._textInputField.value;
    }

    set text(value: string) {
        this._textInputField.value = value;
    }

    get url() {
        return this._urlInputField.value;
    }

    set url(value) {
        this._urlInputField.value = value;
    }

    focusUrl() {
        this._urlInputField.setAttribute('autofocus', '');
    }

    get _textInputField() {
        return this.shadowRoot.querySelector(`input#text`);
    }

    get _urlInputField() {
        return this.shadowRoot.querySelector(`input#url`);
    }

    get _form() {
        return this.shadowRoot.querySelector('form');
    }

    get _submitButton() {
        return this.shadowRoot.querySelector('button');
    }

    get _modal() {
        return this.shadowRoot.querySelector('vl-modal');
    }

    open() {
        this._modal.open();
    }

    close() {
        this._modal.close();
    }

    clear() {
        this._textInputField.value = '';
        this._urlInputField.value = '';
        this._textInputField.removeAttribute('autofocus');
        this._urlInputField.removeAttribute('autofocus');
    }

    onSubmit(callback: any) {
        this._submitButton.addEventListener('click', (event: Event) => event.stopPropagation());
        this._form.addEventListener(
            'submit',
            (event: any) => {
                if (event.target.checkValidity()) {
                    this.close();
                    callback(event);
                }
            },
            {
                once: true,
            }
        );
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-textarea-modal': VlTextareaModal;
    }
}
