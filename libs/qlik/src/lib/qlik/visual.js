import {css, define, html, LitElement, queryById} from "../common/commons.js";
import {vlElementsStyle} from "@domg-wc/elements";
import {unsafeCSS} from "lit";

class QlikVisual extends LitElement {

  static get styles() {
    // truken van de foor om styling van sn-kpi goed te krijgen
    let elements = Array.from(document.getElementsByTagName('style')).filter(e => e.innerText.includes(".sn-kpi"));
    return [vlElementsStyle, ...elements.map(e => css`${unsafeCSS(e.innerText)}`)]
  }

  static get properties() {
    return {
      type: {type: String},
      id: {type: String},
      height: {type: String},
      additionalStyle: {type: String},
      properties: {type: Object},
      stardust: {type: Object}
    }
  }

  constructor() {
    super();
    this.properties = {};
    this.additionalStyle = '';
  }

  async updated(changedProperties) {
    if (this.viz) {
      this.viz.destroy();
    }
    this.viz = await this.stardust.render({
      element: queryById(this)(`visual-${this.id}`),
      id: this.id,
      type: this.type,
      properties: this.properties
    });
    this.viz.model.on('changed', ((e) => {
      this.dispatchEvent(new CustomEvent("visual-changed"));
    }).bind(this))

    if (this.type === 'distributionplot') {
      // experimental api
      await this.viz.__DO_NOT_USE__.applyProperties({
        dataPoint: {
          bubbleScales: this.properties.dataPoint.bubbleScales,
        }
      });
    }
  }

  render() {
    let style = css`${unsafeCSS(`${this.additionalStyle};height: ${this.height};`)}`;
    return html`
      <div id="visual-${this.id}" style="${style}"></div>
    `;
  }

  disconnectedCallback() {
    if (this.viz) {
      this.viz.destroy();
    }
  }

}

define('qlik-visual', QlikVisual, {})