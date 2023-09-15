import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import OlStyleFill from 'ol/style/Fill';
import OlStyleStroke from 'ol/style/Stroke';
import OlStyle from 'ol/style/Style';
import OlStyleText from 'ol/style/Text';

/**
 * VlMapLayerStyle
 * @class
 * @classdesc De kaart laag style klasse.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {string} [data-vl-color=rgba(2, 85, 204, 0.8)] - Attribuut wordt gebruikt om aan te geven wat de kleur is van de kaartlaagstijl.
 * @property {string} [data-vl-border-color=rgba(2, 85, 204, 1)] - Attribuut wordt gebruikt om aan te geven wat de kleur van de rand is van de kaartlaagstijl.
 * @property {number} [data-vl-border-size=1] - Attribuut wordt gebruikt om aan te geven wat de grootte van de rand is van de kaartlaagstijl.
 * @property {string} [data-vl-text-background-color=rgba(0, 0, 0, 0)] - Attribuut wordt gebruikt om aan te geven wat de kleur is van de achtergrond van de tekst.
 * @property {string} [data-vl-text-border-color=rgba(255, 255, 255, 0)] - Attribuut wordt gebruikt om aan te geven wat de kleur is van de rand van de tekst.
 * @property {number} [data-vl-text-border-size=1] - Attribuut wordt gebruikt om aan te geven wat de grootte is van de rand van de tekst.
 * @property {string} [data-vl-text-color=#FFF] - Attribuut wordt gebruikt om aan te geven wat de kleur is van de tekst.
 * @property {string} [data-vl-text-feature-attribute-name=] - Attribuut wordt gebruikt om aan te geven wat de naam van het attribuut van de feature van de stijl is, die gebruikt wordt om de tekst te tonen.
 * @property {number} [data-vl-text-offset-x=0] - Attribuut wordt gebruikt om aan te geven wat de offset op de x-as is van de tekst.
 * @property {number} [data-vl-text-offset-y=0] - Attribuut wordt gebruikt om aan te geven wat de offset op de y-as is van de tekst.
 * @property {string} [data-vl-text-size=10px] - Attribuut wordt gebruikt om aan te geven wat de grootte is van de tekst in CSS font-size eenheden (medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|initial|inherit).
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-layer-style.html|Demo}
 */
@webComponent('vl-map-layer-style')
export class VlMapLayerStyle extends BaseElementOfType(HTMLElement) {
    connectedCallback() {
        super.connectedCallback();

        this._setStyleOnParent();
    }

    /**
     * Geeft de name van de stijl terug.
     *
     * @Return {string}
     */
    get name() {
        return this.getAttribute('data-vl-name');
    }

    /**
     * Geeft de color van de stijl terug.
     *
     * @Return {string}
     */
    get color() {
        return this.getAttribute('color') || 'rgba(2, 85, 204, 0.8)';
    }

    /**
     * Geeft de randkleur terug.
     *
     * @Return {string}
     */
    get borderColor() {
        return this.getAttribute('border-color') || 'rgba(2, 85, 204, 1)';
    }

    /**
     * Geeft de size van de rand van de stijl terug.
     *
     * @Return {number}
     */
    get borderSize() {
        return this.getAttribute('border-size') || 1;
    }

    /**
     * Geeft de tekstkleur van de stijl terug.
     *
     * @Return {string}
     */
    get textColor() {
        return this.getAttribute('text-color') || '#FFF';
    }

    /**
     * Geeft de kleur van de achtergrond van de tekst terug.
     *
     * @Return {string}
     */
    get textBackgroundColor() {
        return this.getAttribute('text-background-color') || 'rgba(0, 0, 0, 0)';
    }

    /**
     * Geeft de tekstkleur van de rand van de stijl terug.
     *
     * @Return {string}
     */
    get textBorderColor() {
        return this.getAttribute('text-border-color') || 'rgba(255, 255, 255, 0)';
    }

    /**
     * Geeft de grootte van de rand van de tekst van de stijl terug.
     *
     * @Return {number}
     */
    get textBorderSize() {
        return Number(this.getAttribute('text-border-size') || 1);
    }

    /**
     * Geeft de grootte van de tekst van de stijl terug.
     *
     * @Return {string}
     */
    get textSize() {
        return this.getAttribute('text-size') || '10px';
    }

    /**
     * Geeft de naam van het attribuut van de feature van de stijl terug, die gebruikt wordt om de tekst te tonen.
     *
     * @Return {string}
     */
    get textFeatureAttributeName() {
        return this.getAttribute('text-feature-attribute-name') || null;
    }

    /**
     * Geeft de offset op de x-as van de tekst terug.
     *
     * @Return {number}
     */
    get textOffsetX() {
        return this.getAttribute('text-offset-x') || 0;
    }

    /**
     * Geeft de offset op de y-as van de tekst terug.
     *
     * @Return {number}
     */
    get textOffsetY() {
        return this.getAttribute('text-offset-y') || 0;
    }

    /**
     * Geeft de stijl terug.
     *
     * @Return {Function} Een stijl functie die zorgt voor de stijl op een {VlMapLayer}
     */
    get style() {
        return (feature, resolution) => {
            if (!this.appliesTo(feature)) {
                return null;
            }
            return this._styleFunction(feature, resolution);
        };
    }

    get _styleFunction() {
        return (feature, resolution) => {
            const styleConfig = {
                fill: new OlStyleFill({
                    color: this.color,
                }),
                stroke: new OlStyleStroke({
                    color: this.borderColor,
                    width: this.borderSize,
                }),
                text: undefined,
            };
            styleConfig.text = this._getTextStyle(feature);
            return new OlStyle(styleConfig);
        };
    }

    _getTextStyle(feature, textColor?) {
        return new OlStyleText({
            font: `${this.textSize} "Flanders Art Sans",sans-serif`,
            text: this.featureLabelFunction(feature),
            fill: new OlStyleFill({
                color: textColor || this.textColor,
            }),
            stroke: new OlStyleStroke({
                color: this.textBorderColor,
                width: this.textBorderSize,
            }),
            backgroundFill: new OlStyleFill({
                color: this.textBackgroundColor,
            }),
            offsetX: this.textOffsetX,
            offsetY: this.textOffsetY,
        });
    }

    /**
     * Geeft terug of de stijl geldig is voor een welbepaalde feature. Default true.
     *
     * @param {Object} feature Openlayers feature
     *
     * @Return {boolean} true als de stijl geldig is op basis van een feature, indien false, zal de stijl niet gemaakt worden
     */
    appliesTo(feature) {
        return true;
    }

    /**
     * Geeft de feature label functie terug.
     *
     * @Return {Function|null} de functie die gebruikt wordt om de label te maken op basis van een feature
     */
    get featureLabelFunction() {
        return this.textFeatureAttributeName ? (feature) => feature.get(this.textFeatureAttributeName) : () => '';
    }

    _featureZIndex(feature) {
        return feature && feature.get ? feature.get('zIndex') : 0;
    }

    _hasUniqueStyles(features) {
        const styles = this._getStyles(features);
        return styles && this._containsObject(styles) && this._areIdentical(styles);
    }

    _containsStyle(features) {
        return this._containsObject(features.map((feature) => feature.getStyle()));
    }

    _getStyles(features) {
        return features.map((feature) => feature.getStyle());
    }

    _containsObject(objects) {
        return objects.some((object) => !!object);
    }

    _areIdentical(objects) {
        return objects.every((object, i, objects) => object == objects[0]);
    }

    _setStyleOnParent() {
        if (this.parentElement) {
            customElements.whenDefined(this.parentElement.tagName.toLowerCase()).then(() => {
                this.parentElement.style = this;
            });
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-layer-style': VlMapLayerStyle;
    }
}
