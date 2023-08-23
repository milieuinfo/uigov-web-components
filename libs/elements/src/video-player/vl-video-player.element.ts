import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import './vl-video-player.lib.js';
import { elementStyles } from '../vl-elements.uig-css';

declare const window: any;

@elementStyles()
@webComponent('vl-video-player', { extends: 'video' })
export class VlVideoPlayerElement extends BaseElementOfType(HTMLVideoElement) {
    connectedCallback() {
        this._processStyle();
    }

    get _containerTemplate() {
        return this._template(`<div class="vl-video-player"></div>`);
    }

    get _hasContainer() {
        return this.closest('.vl-video-player') !== null;
    }

    get _isDressed() {
        return this.hasAttribute('data-vl-video-player-dressed');
    }

    _processStyle() {
        this.setAttribute('data-vl-video-player', '');
        this._addContainerElement();
        this._dress();
    }

    _dress() {
        if (!this._isDressed) {
            window.vl.videoPlayer.dress(this);
        }
    }

    _addContainerElement() {
        if (!this._hasContainer) {
            const container = this._containerTemplate.firstElementChild;
            this.parentElement.append(container);
            container.append(this);
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-video-player': VlVideoPlayerElement;
    }
}
