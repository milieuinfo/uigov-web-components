export class TypographyElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Typography';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt>${title}</h2>
                    <vl-typography>
                        <h1>Heading 1</h1>
                        <h2>Heading 2</h2>
                        <h3>Heading 3</h3>
                        <h4>Heading 4</h4>
                        <h5>Heading 5</h5>
                        <h6>Heading 6</h6>
                    </vl-typography>
                    <vl-typography is="vl-typography">
                        <table>
                            <caption>table title</caption>
                            <thead>
                                <tr>
                                <th>head 1</th>
                                <th>head 2</th>
                                <th>head 3</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>item 1</td>
                                <td>item 2</td>
                                <td>item 3</td>
                                </tr>
                                <tr>
                                <td>item 1</td>
                                <td>item 2</td>
                                <td>item 3</td>
                                </tr>
                                <tr>
                                <td>item 1</td>
                                <td>item 2</td>
                                <td>item 3</td>
                                </tr>
                            </tbody>
                        </table>
                    </vl-typography>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-typography', TypographyElement);
