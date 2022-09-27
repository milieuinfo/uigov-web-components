import { VlElementTester } from '../../base/vl-element.tester';
import { By, assert } from '../../util/tester.setup';

export class VlDataTableTester extends VlElementTester {
    async getCaption() {
        const caption = await this.findElement(By.css('caption'));
        return caption.getText();
    }

    async getHeader() {
        return new VlDataTableHeader(this.driver, await this.findElement(By.css('thead')));
    }

    async getBody() {
        return new VlDataTableBody(this.driver, await this.findElement(By.css('tbody')));
    }

    async isHover() {
        return this.hasAttribute('hover');
    }

    async isMatrix() {
        return this.hasAttribute('matrix');
    }

    async isGrid() {
        return this.hasAttribute('grid');
    }

    async isZebra() {
        return this.hasAttribute('zebra');
    }

    async isCollapsedMedium() {
        return this.hasAttribute('collapsed-m');
    }

    async isCollapsedSmall() {
        return this.hasAttribute('collapsed-s');
    }

    async isCollapsedExtraSmall() {
        return this.hasAttribute('collapsed-xs');
    }
}

class VlDataTableHeader extends VlElementTester {
    async getRows() {
        const rows = await this.findElements(By.css('tr'));
        return Promise.all(rows.map((row) => new VlDataTableRow(this.driver, row)));
    }
}

class VlDataTableBody extends VlElementTester {
    async getRows() {
        const rows = await this.findElements(By.css('tr'));
        return Promise.all(rows.map((row) => new VlDataTableRow(this.driver, row)));
    }
}

export class VlDataTableRow extends VlElementTester {
    async getCells() {
        const cells = await this.findElements(By.css('tr>*'));
        return Promise.all(cells.map((cell) => new VlDataTableCell(this.driver, cell)));
    }

    async assertValues(values) {
        const cells = await this.getCells();
        assert.lengthOf(cells, values.length);
        for (let i = 0; i < cells.length; i++) {
            await cells[i].assertValue(values[i]);
        }
    }
}

export class VlDataTableCell extends VlElementTester {
    async getRowSpan() {
        return this.getAttribute('rowspan');
    }

    async getColSpan() {
        return this.getAttribute('colspan');
    }

    async getScope() {
        return this.getAttribute('scope');
    }

    async isTd() {
        const tag = await this.getTagName();
        return tag == 'td';
    }

    async isTh() {
        const tag = await this.getTagName();
        return tag == 'th';
    }

    async assertValue(value) {
        await assert.eventually.equal(this.getText(), value);
    }
}
