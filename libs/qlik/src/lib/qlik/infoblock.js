import {html, LitElement, define, renderStack, css} from "../common/commons.js";
import {STARDUST} from "@domg/qlik-lib";

import "@domg-wc/components/infoblock"
import {vlElementsStyle} from "@domg-wc/elements";

class QlikInfoBlock extends LitElement {


  static get styles() {
    return [
        vlElementsStyle
    ]
  }

  static get properties() {
    return {
      title: {type: String},
      icon: {type: String},
      visuals: {type: Array},
      connection: {type: Object},
      connected: {type: Boolean}
    }
  }

  async connectedCallback() {
    super.connectedCallback();
    this.stardust = await STARDUST(this.connection.app);
    this.connected = true;
  }

  render() {
    if(!this.connected) {
      return html``;
    }
    return html`
      <style>
        ${Array.from({length: 13}, (x, i) => i)
        .flatMap(i => Array.from({length: 13}, (y, j) => css`
          .vl-col--${i}-${j} {
            flex-basis: ${(i / j) * 100}%;
            max-width: ${(i / j) * 100}%;
            min-width: ${(i / j) * 100}%;
          }
        `))}
      </style>
      <vl-infoblock data-vl-title="${this.title}"
                    data-vl-icon="${this.icon}">
        <slot></slot>
        ${this.__renderVisualisations()}
      </vl-infoblock>
    `;
  }

  __renderVisualisations() {
    return renderStack(...this.visuals.flatMap(
        visualRow => this.__renderVisualRow(visualRow)));
  }

  __renderVisualRow(visualRow) {
    return visualRow.map(v => {
      if (!Array.isArray(v)) {
        return {
          size: v.colSize || 1,
          maxSize: visualRow.length,
          template: this.__renderVisual(v)
        }
      } else {
        return {
          size: 1,
          maxSize: visualRow.length,
          template: renderStack(...this.__renderVisualRow(v))
        }
      }
    })
  }


  __renderVisual(v) {
    return html`
      <vl-info-tile data-vl-auto-open="true" ?data-vl-center="${v.align === "center"}">
        <span slot="title">${v.title}</span>
        <div slot="content">
          <img class="icon"
               src="assets/icons/PNG-natuurlijke persoon.png"/>
          <qlik-visual id="${v.id}"
                       type="${v.type}"
                       height="${v.height}"
                       .stardust="${this.stardust}"
                       @visual-changed="${this.__visualChanged}"></qlik-visual>
          ${v.visuals ? renderStack(...v.visuals.flatMap(
              visualRow => this.__renderVisualRow(visualRow))) : html``}
        </div>
      </vl-info-tile>
    `;
  }

}

define('qlik-infoblock', QlikInfoBlock, {})