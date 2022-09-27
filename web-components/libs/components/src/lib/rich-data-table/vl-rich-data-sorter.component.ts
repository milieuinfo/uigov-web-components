import '@domg-lib/elements';
import { BaseElementOfType, define } from '@domg-lib/common-utilities';
import styles from './style/vl-rich-data-table.scss';

export class VlRichDataSorter extends BaseElementOfType(HTMLElement) {
    static get DIRECTIONS() {
        return {
            descending: 'desc',
            ascending: 'asc',
        };
    }

    static get _observedAttributes() {
        return ['direction', 'priority'];
    }

    static get is() {
        return 'vl-rich-data-sorter';
    }

    constructor() {
        super(`
      <style>
        ${styles}

        div {
          display: inline;
        }

        #direction {
          vertical-align: middle;
        }

        #priority {
          font-size: x-small;
          vertical-align: super;
        }
      </style>
      <div id="container" class="vl-u-visually-hidden">
        <span id="direction" is="vl-icon"></span>
        <label id="priority"></label>
      </div>
    `);
    }

    get for() {
        return this.dataset.vlFor;
    }

    get direction() {
        return this.__direction;
    }

    set direction(direction) {
        if (this.__direction !== direction) {
            this.__direction = direction;

            const directionIcon = this._directionIcon;
            if (directionIcon) {
                this.__directionElement.setAttribute('data-vl-icon', this._directionIcon);
                this.__containerElement.classList.remove('vl-u-visually-hidden');
            } else {
                this.__containerElement.classList.add('vl-u-visually-hidden');
            }

            if (direction === undefined) {
                this.priority = undefined;
            }
        }
    }

    get _directionIcon() {
        switch (this.direction) {
            case VlRichDataSorter.DIRECTIONS.ascending:
                return 'arrow-down';
            case VlRichDataSorter.DIRECTIONS.descending:
                return 'arrow-up';
            default:
                return null;
        }
    }

    _setDirectionAndPublishEvent(direction: any) {
        if (this.direction !== direction) {
            this.direction = direction;
            this._changed();
        }
    }

    get priority() {
        return this.__priority;
    }

    set priority(priority) {
        if (this.__priority !== priority) {
            this.__priority = Number(priority) || undefined;
            this.__priorityElement.textContent = this.priority;
        }
    }

    get __directionElement() {
        return this.shadowRoot.querySelector('#direction');
    }

    get __containerElement() {
        return this.shadowRoot.querySelector('#container');
    }

    get __priorityElement() {
        return this.shadowRoot.querySelector('#priority');
    }

    nextDirection() {
        switch (this.direction) {
            case VlRichDataSorter.DIRECTIONS.descending:
                this._setDirectionAndPublishEvent(undefined);
                break;
            case VlRichDataSorter.DIRECTIONS.ascending:
                this._setDirectionAndPublishEvent(VlRichDataSorter.DIRECTIONS.descending);
                break;
            default:
                this._setDirectionAndPublishEvent(VlRichDataSorter.DIRECTIONS.ascending);
        }
    }

    _directionChangedCallback(oldValue: any, newValue: any) {
        this.direction = newValue;
    }

    _priorityChangedCallback(oldValue: any, newValue: any) {
        this.priority = newValue;
    }

    _changed() {
        this.dispatchEvent(
            new CustomEvent('change', {
                detail: {
                    direction: this.direction,
                    priority: this.priority,
                },
            })
        );
    }

    static get PRIORITY_COMPARATOR() {
        return (firstSorter: any, secondSorter: any) => {
            const firstPriority = firstSorter.priority;
            const secondPriority = secondSorter.priority;
            if (secondPriority === undefined || firstPriority < secondPriority) {
                return -1;
            } else if (firstPriority === undefined || firstPriority > secondPriority) {
                return 1;
            } else {
                return 0;
            }
        };
    }
}

define(VlRichDataSorter.is, VlRichDataSorter);
