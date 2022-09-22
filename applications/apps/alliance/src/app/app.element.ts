import './app.element.scss';

export class AppElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        this.innerHTML = `
        <div class="wrapper">
            <h1>Alliance App</h1>
            <alliance-elements></alliance-elements>
            <alliance-components></alliance-components>
            <alliance-sections></alliance-sections>
            <alliance-map></alliance-map>
        </div>
      `;
    }
}
customElements.define('applications-root', AppElement);
