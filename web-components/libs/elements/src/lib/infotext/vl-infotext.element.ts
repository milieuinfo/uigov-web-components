import { define, BaseElementOfType } from '@domg-lib/common-utilities';
import '@govflanders-v14/vl-ui-util/dist/js/util.js';
import '@govflanders-v14/vl-ui-infotext/dist/js/infotext.js';

declare const vl: any;

// TODO gertjame: Change any types to the correct type.

export class VlInfotextElement extends BaseElementOfType(HTMLDivElement) {
    static get _observedAttributes() {
        return ['data-vl-badge'];
    }

    connectedCallback() {
        if (this.__hasOneChild()) {
            this.classList.add('vl-infotext-wrapper');
            this.__setupChildClasses();
            this._badgeChangedCallback(null, this.getAttribute('data-vl-badge'));
            this._childObserver = this.__observeChildElement((records: any) =>
                this.__processChildElementChange(records)
            );
            this._childResizeObserver = this.__observeChildElementResize(() => this.__processChildElementResize());
        } else {
            console.warn('De infotext component mag slechts 1 child hebben (<div> of <a>)');
        }
    }

    disconnectedCallback() {
        if (this._childObserver) {
            this._childObserver.disconnect();
        }

        if (this._childResizeObserver) {
            this._childResizeObserver.disconnect();
        }
    }

    __setupChildClasses() {
        if (this.firstElementChild) {
            this.firstElementChild.classList.add('vl-infotext');
        }

        if (this.__valueElement) {
            this.__valueElement.classList.add('vl-infotext__value');
            this.__valueElement.setAttribute('data-vl-infotext-value', '');
            this.__valueElement.setAttribute('data-vl-js-dress', 'false');
        }

        if (this.__textElement) {
            this.__textElement.classList.add('vl-infotext__text');
            this.__textElement.setAttribute('data-vl-js-dress', 'false');
        }
    }

    __hasOneChild() {
        return this.children.length == 1;
    }

    get __valueElement() {
        return this.querySelector('[data-vl-value]');
    }

    get __textElement() {
        return this.querySelector('[data-vl-text]');
    }

    _badgeChangedCallback(oldValue: string | null, newValue: string | null) {
        if (this.firstElementChild) {
            this._toggleClass(this.firstElementChild, newValue, 'vl-infotext--badge');
        }
    }

    __observeChildElement(callback: MutationCallback) {
        const observer = new MutationObserver(callback);
        observer.observe(this.firstElementChild, { childList: true, subtree: true });
        return observer;
    }

    __observeChildElementResize(callback: ResizeObserverCallback) {
        const observer = new ResizeObserver(callback);
        observer.observe(this.firstElementChild);
        return observer;
    }

    __processChildElementChange(records: any) {
        records.forEach((record: any) => {
            if (
                VlInfotextElement.__isMutationRecordOfTypeChildList(record) &&
                VlInfotextElement.__isMutationRecordTextContentChanged(record)
            ) {
                this.__dress();
            }
        });
    }

    __processChildElementResize() {
        this.__dress();
    }

    __dress() {
        vl.infotext.dress(this.__valueElement);
        vl.infotext.dress(this.__textElement);
    }

    static __isMutationRecordOfTypeChildList(record: any) {
        return record.type == 'childList';
    }

    static __hasMutationRecordOneChangedNode(record: any) {
        const hasOneAddedNode = record.addedNodes && record.addedNodes.length == 1;
        const hasOneRemovedNode = record.removedNodes && record.removedNodes.length == 1;
        return hasOneAddedNode && hasOneRemovedNode;
    }

    static __isMutationRecordTextContentChanged(record: any) {
        return (
            this.__hasMutationRecordOneChangedNode(record) &&
            record.addedNodes[0].textContent != record.removedNodes[0].textContent
        );
    }
}

define('vl-infotext', VlInfotextElement, { extends: 'div' });
