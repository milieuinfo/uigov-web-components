import Control from 'ol/control/Control';

export const VlMapControl = (superClass) => {
    class VlMapControlElement extends superClass {
        connectedCallback() {
            super.connectedCallback();
            this._mapElement = this.closest('vl-map');
            this.map = this._mapElement.map;
            this.controlElement.isInMap = true;
            this.control = new Control(<any>{
                element: this.controlElement,
                target: this,
            });
            this.control.set('element', this);
            this.map.addControl(this.control);
        }

        disconnectedCallback() {
            super.disconnectedCallback();
            this.map.removeControl(this.control);
        }

        createRenderRoot() {
            return this;
        }
    }

    return VlMapControlElement;
};
