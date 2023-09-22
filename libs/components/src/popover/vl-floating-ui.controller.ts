import { LitElement, ReactiveController } from 'lit';
import { computePosition, arrow, flip, shift, offset, type Placement, Middleware } from '@floating-ui/dom';

type FloatingControllerOptions = {
    reference: string;
    trigger: string;
    placement: Placement;
    distance: number;
    showDelay: number;
    hideDelay: number;
};

interface FloatingElement extends LitElement {
    open: boolean;
    hide: () => void;
    show: () => void;
    toggle: () => void;
}

export default class FloatingController implements ReactiveController {
    private host: FloatingElement;
    private hoverTimeout = 0;
    private options!: FloatingControllerOptions;

    constructor(host: FloatingElement, options: FloatingControllerOptions) {
        this.setOptions(options);
        (this.host = host).addController(this);
    }

    hostConnected(): void {
        this.addEventListeners();
    }

    hostDisconnected(): void {
        this.removeEventListeners();
    }

    get referenceElement(): HTMLElement {
        return document.querySelector(`#${this.options.reference}`)!;
    }

    get floatingElement(): HTMLElement {
        return this.host;
    }

    get arrowElement(): HTMLElement {
        return this.host.shadowRoot!.querySelector('i#popover-arrow')!;
    }

    get middlewares(): Middleware[] {
        return [
            // https://floating-ui.com/docs/offset
            // offset() should generally be placed at the beginning of your middleware array.
            offset(this.options.distance),
            // https://floating-ui.com/docs/flip
            flip(),
            // https://floating-ui.com/docs/shift
            shift(),
            // https://floating-ui.com/docs/arrow
            // arrow() should generally be placed toward the end of your middleware array, after shift().
            arrow({ element: this.arrowElement, padding: 8 }),
        ];
    }

    async updatePosition(): Promise<void> {
        const { x, y, strategy, placement, middlewareData } = await computePosition(
            this.referenceElement,
            this.floatingElement,
            {
                placement: this.options.placement,
                middleware: this.middlewares,
            }
        );

        Object.assign(this.floatingElement.style, {
            position: strategy,
            left: `${x}px`,
            top: `${y}px`,
        });

        const staticSide = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' }[placement.split('-')[0]];

        if (middlewareData.arrow && this.arrowElement) {
            const { x, y } = middlewareData.arrow;
            Object.assign(this.arrowElement.style, {
                left: x != null ? `${x}px` : '',
                top: y != null ? `${y}px` : '',
                [staticSide!]: `${-this.arrowElement.offsetWidth / 2}px`,
            });
        }
    }

    setOptions(options: FloatingControllerOptions): unknown {
        this.options = options;
        return this;
    }

    addEventListeners(): void {
        this.referenceElement.addEventListener('keydown', this.handleKeyDown);

        if (this.hasTrigger('click')) {
            this.referenceElement.addEventListener('click', this.handleClick);
            document.addEventListener('click', this.handleClickOutside, true);
        }

        if (this.hasTrigger('hover')) {
            this.referenceElement.addEventListener('mouseover', this.handleMouseOver);
            this.referenceElement.addEventListener('mouseout', this.handleMouseOut);
        }

        if (this.hasTrigger('focus')) {
            this.referenceElement.addEventListener('focusin', this.handleFocusIn, true);
            this.referenceElement.addEventListener('focusout', this.handleFocusOut, true);
        }

        window.addEventListener('resize', this.handleResize);
    }

    removeEventListeners(): void {
        this.referenceElement?.removeEventListener('keydown', this.handleKeyDown);

        if (this.hasTrigger('click')) {
            this.referenceElement?.removeEventListener('click', this.handleClick);
            document.removeEventListener('click', this.handleClickOutside, true);
        }

        if (this.hasTrigger('hover')) {
            this.referenceElement?.removeEventListener('mouseover', this.handleMouseOver);
            this.referenceElement?.removeEventListener('mouseout', this.handleMouseOut);
        }

        if (this.hasTrigger('focus')) {
            this.referenceElement?.removeEventListener('focusin', this.handleFocusIn, true);
            this.referenceElement?.removeEventListener('focusout', this.handleFocusOut, true);
        }

        window.removeEventListener('resize', this.handleResize);
    }

    hasTrigger(trigger: string): boolean {
        return this.options.trigger.split(' ').includes(trigger);
    }

    handleClick = (): void => {
        this.host.toggle();
    };

    handleMouseOver = (): void => {
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = window.setTimeout(() => this.host.show(), this.options.showDelay);
    };

    handleMouseOut = (): void => {
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = window.setTimeout(() => this.host.hide(), this.options.hideDelay);
    };

    handleFocusIn = (): void => {
        this.host.show();
    };

    handleFocusOut = (): void => {
        this.host.hide();
    };

    handleClickOutside = (event: MouseEvent): void => {
        const target = event.target as HTMLElement;
        if (!this.floatingElement.contains(target) && !this.referenceElement.contains(target) && event.button === 0) {
            this.host.hide();
        }
    };

    handleKeyDown = (event: KeyboardEvent): void => {
        if (this.host.open && event.key === 'Escape') {
            event.stopPropagation();
            this.host.hide();
        }
    };

    handleResize = (): void => {
        if (this.host.open) {
            this.host.hide();
        }
    };
}
