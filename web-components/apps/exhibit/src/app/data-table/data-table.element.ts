export class DataTableElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Link list';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <div>
                        <h2 is="vl-h2" data-vl-alt>${title}</h2>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Data table met hover</h3>
                            <table is="vl-data-table" data-vl-hover>
                                <caption>Data table Hover</caption>
                                <thead>
                                    <tr>
                                    <th>Entry Header 1</th>
                                    <th>Entry Header 2</th>
                                    <th>Entry Header 3</th>
                                    <th>Entry Header 4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Entry line 1</td>
                                    <td>Entry line 2</td>
                                    <td>Entry line 3</td>
                                    <td>Entry line 4</td>
                                    </tr>
                                    <tr>
                                    <td>Entry line 1</td>
                                    <td colspan="2">Entry line 2</td>
                                    <td>Entry line 3</td>
                                    </tr>
                                    <tr>
                                    <td>Entry line 1</td>
                                    <td>Entry line 2</td>
                                    <td>Entry line 3</td>
                                    <td>Entry line 4</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Data table matrix | column titels </h3>
                            <table is="vl-data-table" data-vl-matrix>
                                <caption>Data table Matrix - Column titles</caption>
                                <thead>
                                    <tr>
                                    <th>Entry Header 1</th>
                                    <th>Entry Header 2</th>
                                    <th>Entry Header 3</th>
                                    <th>Entry Header 4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Entry line 1</td>
                                    <td>Entry line 2</td>
                                    <td>Entry line 3</td>
                                    <td>Entry line 4</td>
                                    </tr>
                                    <tr>
                                    <td>Entry line 1</td>
                                    <td colspan="2">Entry line 2</td>
                                    <td>Entry line 3</td>
                                    </tr>
                                    <tr>
                                    <td>Entry line 1</td>
                                    <td>Entry line 2</td>
                                    <td>Entry line 3</td>
                                    <td>Entry line 4</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Data table matrix | joined row titles</h3>
                            <table is="vl-data-table" data-vl-matrix>
                                <caption>Data table Matrix - Joined row titles</caption>
                                <thead>
                                    <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th rowspan="3" scope="rowgroup">Entry line 1</th>
                                    <td>Entry line 2</td>
                                    <td>Entry line 3</td>
                                    <td>Entry line 4</td>
                                    </tr>
                                    <tr>
                                    <td>Entry line 1</td>
                                    <td colspan="2">Entry line 2</td>
                                    </tr>
                                    <tr>
                                    <td>Entry line 2</td>
                                    <td>Entry line 3</td>
                                    <td>Entry line 4</td>
                                    </tr>
                                    <tr>
                                    <th rowspan="3" scope="rowgroup">Entry line 2</th>
                                    <td>Entry line 2</td>
                                    <td>Entry line 3</td>
                                    <td>Entry line 4</td>
                                    </tr>
                                    <tr>
                                    <td>Entry line 1</td>
                                    <td colspan="2">Entry line 2</td>
                                    </tr>
                                    <tr>
                                    <td>Entry line 2</td>
                                    <td>Entry line 3</td>
                                    <td>Entry line 4</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Data table | lined</h3>
                            <table is="vl-data-table" data-vl-lined>
                                <caption>Data table Lined</caption>
                                <thead>
                                    <tr>
                                    <th>Entry Header 1</th>
                                    <th>Entry Header 2</th>
                                    <th>Entry Header 3</th>
                                    <th>Entry Header 4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Entry line 1</td>
                                    <td>Entry line 2</td>
                                    <td>Entry line 3</td>
                                    <td>Entry line 4</td>
                                    </tr>
                                    <tr>
                                    <td>Entry line 1</td>
                                    <td colspan="2">Entry line 2</td>
                                    <td>Entry line 3</td>
                                    </tr>
                                    <tr>
                                    <td>Entry line 1</td>
                                    <td>Entry line 2</td>
                                    <td>Entry line 3</td>
                                    <td>Entry line 4</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Data table | joined row titles</h3>
                            <table is="vl-data-table" data-vl-lined>
                                <caption>Data table Lined - Joined row titles</caption>
                                <thead>
                                    <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th rowspan="3" scope="rowgroup">Entry line 1</th>
                                    <td>Entry line 2</td>
                                    <td>Entry line 3</td>
                                    <td>Entry line 4</td>
                                    </tr>
                                    <tr>
                                    <td>Entry line 1</td>
                                    <td colspan="2">Entry line 2</td>
                                    </tr>
                                    <tr>
                                    <td>Entry line 2</td>
                                    <td>Entry line 3</td>
                                    <td>Entry line 4</td>
                                    </tr>
                                    <tr>
                                    <th rowspan="3" scope="rowgroup">Entry line 2</th>
                                    <td>Entry line 2</td>
                                    <td>Entry line 3</td>
                                    <td>Entry line 4</td>
                                    </tr>
                                    <tr>
                                    <td>Entry line 1</td>
                                    <td colspan="2">Entry line 2</td>
                                    </tr>
                                    <tr>
                                    <td>Entry line 2</td>
                                    <td>Entry line 3</td>
                                    <td>Entry line 4</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Data table | zebra</h3>
                            <table is="vl-data-table" data-vl-zebra>
                                <caption>Data table Zebra</caption>
                                <thead>
                                    <tr>
                                    <th>Entry Header 1</th>
                                    <th>Entry Header 2</th>
                                    <th>Entry Header 3</th>
                                    <th>Entry Header 4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Entry line 1</td>
                                    <td>Entry line 2</td>
                                    <td>Entry line 3</td>
                                    <td>Entry line 4</td>
                                    </tr>
                                    <tr>
                                    <td>Entry line 1</td>
                                    <td colspan="2">Entry line 2</td>
                                    <td>Entry line 3</td>
                                    </tr>
                                    <tr>
                                    <td>Entry line 1</td>
                                    <td>Entry line 2</td>
                                    <td>Entry line 3</td>
                                    <td>Entry line 4</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="container">
                            <h3 is="vl-h3" data-vl-has-border>Data table | collapsed medium</h3>
                            <table is="vl-data-table" data-vl-collapsed-m>
                                <thead>
                                    <tr>
                                    <th>Entry Header 1</th>
                                    <th>Entry Header 2</th>
                                    <th>Entry Header 3</th>
                                    <th>Entry Header 4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td data-title="Entry Header 1">Entry line 1</td>
                                    <td data-title="Entry Header 2">Entry line 2</td>
                                    <td data-title="Entry Header 3">Entry line 3</td>
                                    <td data-title="Entry Header 4">Entry line 4</td>
                                    </tr>
                                    <tr>
                                    <td data-title="Entry Header 1">Entry line 1</td>
                                    <td data-title="Entry Header 2">Entry line 2</td>
                                    <td data-title="Entry Header 3">Entry line 3</td>
                                    <td data-title="Entry Header 4">Entry line 4</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-data-table', DataTableElement);
