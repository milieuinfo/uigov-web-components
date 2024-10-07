import { BaseElementOfType, registerWebComponents, webComponent } from '@domg-wc/common';
import { VlColumnElement, vlElementsStyle, VlGridElement, VlH2Element } from '@domg-wc/elements';
import { VlTypography } from '../typography/vl-typography.component';
import httpErrorMessageUigStyle from './vl-http-error-message.uig-css';
import errorCodes from './error-codes';
import { render } from 'lit';

@webComponent('vl-http-error-message')
export class VlHttpErrorMessage extends BaseElementOfType(HTMLElement) {
    static {
        registerWebComponents([VlColumnElement, VlGridElement, VlH2Element, VlTypography]);
    }

    static get _observedAttributes() {
        return ['title', 'image', 'image-alt', 'error-code'];
    }

    constructor() {
        super(`
          <style>
            ${vlElementsStyle}
            ${httpErrorMessageUigStyle}
          </style>
          <div is="vl-grid" data-vl-is-stacked data-vl-align-center data-vl-v-center>
            <div is="vl-column" data-vl-size="6" data-vl-medium-size="6" data-vl-small-size="6" data-vl-extra-small-size="6" class="vl-u-hidden vl-u-visible--s">
              <div class="vl-u-display-flex vl-u-flex-align-center vl-u-flex-v-center">
                <img id="image-small"/>
              </div>
            </div>
            <div is="vl-column" data-vl-size="6" data-vl-medium-size="6" data-vl-small-size="8">
              <div is="vl-grid" data-vl-is-stacked>
                <div is="vl-column" data-vl-size="12">
                  <h2 id="title" is="vl-h2"></h2>
                  <vl-typography id="text"><slot slot="text" name="text"></slot></vl-typography>
                  <vl-typography id="error-text"></vl-typography>
                </div>
                <div id="info">
                  <table>
                    <tr>
                      <td>URL:</td>
                      <td id="url"></td>
                    </tr>
                    <tr>
                      <td>Tijd:</td>
                      <td id="time"></td>
                    </tr>
                    <tr>
                      <td>User-agent:</td>
                      <td id="user-agent"></td>
                    </tr>
                  </table>
                </div>
                <div id="actions" is="vl-column" data-vl-size="12"><div id="error-actions"><slot name="actions"></slot></div></div>
              </div>
            </div>
            <div is="vl-column" data-vl-size="6" data-vl-medium-size="6" data-vl-small-size="6" class="vl-u-hidden--s">
              <div class="vl-u-display-flex vl-u-flex-align-center vl-u-flex-v-center">
                <img id="image-normal"/>
              </div>
            </div>
          </div>
        `);
    }

    connectedCallback() {
        super.connectedCallback();

        this.__processAttributes();
        this.__setDebugInfo();
    }

    get _title() {
        return this.dataset.vlTitle || this._defaults?.title;
    }

    get _image() {
        return this.dataset.vlImage || this._defaults?.image;
    }

    get _imageAlt() {
        return this.dataset.vlImageAlt || this._defaults?.imageAlt;
    }

    get _errorCode() {
        return this.dataset.vlErrorCode || this._defaults?.errorCode;
    }

    _titleChangedCallback() {
        this.__processTitle();
    }

    _imageChangedCallback() {
        this.__processImage();
    }

    _imageAltChangedCallback() {
        this.__processImageAlt();
    }

    _errorCodeChangedCallback() {
        this.__processErrorCode();
    }

    __setImageAttribute(attribute: string, value: string) {
        this.__imageForSmallScreensElement.setAttribute(attribute, value);
        this.__imageForNormalScreensElement.setAttribute(attribute, value);
    }

    __setDebugInfo() {
        const userAgent = navigator.userAgent;
        const url = window.parent.location.href;
        const time = new Date().toISOString();

        this.__urlElement.textContent = url;
        this.__timeElement.textContent = time;
        this.__userAgentElement.textContent = userAgent;
    }

    get __titleElement() {
        return this._element.querySelector('#title');
    }

    get __textElement() {
        return this._element.querySelector('#text');
    }

    get __actionsElement() {
        return this._element.querySelector('#actions');
    }

    get __actionElement() {
        return this._element.querySelector('#actions > *');
    }

    get __imageForSmallScreensElement() {
        return this._element.querySelector('#image-small');
    }

    get __imageForNormalScreensElement() {
        return this._element.querySelector('#image-normal');
    }

    get __urlElement() {
        return this._element.querySelector('#url');
    }

    get __timeElement() {
        return this._element.querySelector('#time');
    }

    get __userAgentElement() {
        return this._element.querySelector('#user-agent');
    }

    get __errorTextElement() {
        return this._element.querySelector('#error-text');
    }

    get __errorActionsElement() {
        return this._element.querySelector('#error-actions');
    }

    __processTitle() {
        const title = this._title || errorCodes[this._errorCode]?.title;
        this.__titleElement.textContent = title;
    }

    __processImage() {
        const image = this._image || errorCodes[this._errorCode]?.image;
        this.__setImageAttribute('src', image);
    }

    __processImageAlt() {
        const imageAlt = this._imageAlt || errorCodes[this._errorCode]?.imageAlt;
        this.__setImageAttribute('alt', imageAlt);
    }

    __processErrorText() {
        const hasTextSlot = this.__hasSlot(this.__textElement, 'text');

        if (!hasTextSlot) {
            const errorText = errorCodes[this._errorCode]?.errorText;
            render(errorText, this.__errorTextElement);
        } else {
            render('', this.__errorTextElement);
        }
    }

    __processErrorActions() {
        const hasActionsSlot = this.__hasSlot(this.__actionElement, 'actions');

        if (!hasActionsSlot) {
            const errorActions = errorCodes[this._errorCode]?.errorActions;
            render(errorActions, this.__errorActionsElement);
        } else {
            render('', this.__errorActionsElement);
        }
    }

    __processAttributes() {
        this.__processTitle();
        this.__processImage();
        this.__processImageAlt();
        this.__processErrorText();
        this.__processErrorActions();
    }

    __processErrorCode() {
        this.__processAttributes();
    }

    __hasSlot(element: HTMLElement | ShadowRoot, slotName: string): boolean {
        const slotElement = element.querySelector(`slot[name=${slotName}]`) as HTMLSlotElement;
        const assignedNodes = slotElement?.assignedNodes() || [];
        return assignedNodes.length > 0;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-http-error-message': VlHttpErrorMessage;
    }
}
