import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import {VlMap} from "../../vl-map";

@webComponent('vl-map-action')
export class VlMapAction extends BaseElementOfType(HTMLElement) {
    constructor() {
        super();
        this._active = false;
        this._controlledActive = false;
    }

    connectedCallback() {
        this.__defineLayer();
    }

    static isVlMapAction() {
        return true;
    }

    /**
     * Gives the vl-mapactions map action.
     * */
    get action() {
        return this._action;
    }

    get _mapElement(): VlMap {
        return this.closest('vl-map');
    }

    get _defaultActive() {
        return this.hasAttribute('data-vl-default-active');
    }

    get _callback() {
        return (...args) => (this.__callback ? this.__callback(...args) : null);
    }

    get active() {
        return this._controlledActive;
    }

    set active(value) {
        this._controlledActive = value;
        if (value) {
            this.activate();
        } else {
            this.deactivate();
        }
    }

    activate() {
        // Do not activate action if its layer is invisible
        if (this.action && this.action.layer.get('visible')) {
            this._mapElement.changeActiveAction(this.action);
        }
    }

    deactivate() {
        // Only deactivate if this action is currently active
        if (this.action && this.action === this._mapElement.activeAction) {
            const actionIsNotDefault = this.action !== this._mapElement.defaultAction;
            const layerIsVisible =
                this._mapElement.defaultAction && this._mapElement.defaultAction.layer.get('visible');
            this._mapElement.changeActiveAction(actionIsNotDefault && layerIsVisible && this._mapElement.defaultAction);
        }
    }

    _createAction(layer?) {
        console.warn('_createAction implementation is missing');
    }

    _processAction() {
        if (this.action) {
            this.action.element = this; //TODO: nodig ???
            this._mapElement.addAction(this.action);

            // Activate the action when
            // - the action is the default active action and no other action has yet been activated
            // - the controlled active state of the action is true
            if ((this._defaultActive && !this._mapElement.activeAction) || this.active) {
                this.activate();
            }
        }
    }

    __defineLayer() {
        if (this._layerElement) {
            this.layer = this._layerElement.layer;
        }
    }

    reset() {
        this._active = false;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-action': VlMapAction;
    }
}
