import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';
import { VlPropertyTerm } from './vl-property-term.tester';
import { VlPropertyValueTester } from './vl-property-value.tester';

export class VlPropertiesListTester extends VlElementTester {
    async getPropertyByTermText(termText) {
        const properties = await this.getProperties();
        for (let i = 0; i < properties.length; i++) {
            const property = properties[i];
            if (property.term && (await property.term.getText()) === termText) {
                return property;
            }
        }
    }

    async getProperties() {
        const terms = await this._getTerms();
        const values = await this._getValues();
        return terms.map((term, index) => {
            const value = values[index];
            return {
                term: term,
                value: value,
            };
        });
    }

    async _getTerms() {
        const rawTerms = await this.findElements(By.css('[is="vl-property-term"]'));
        return Promise.all(rawTerms.map((term) => new VlPropertyTerm(this.driver, term)));
    }

    async _getValues() {
        const rawValues = await this.findElements(By.css('[is="vl-property-value"]'));
        return Promise.all(rawValues.map((value) => new VlPropertyValueTester(this.driver, value)));
    }
}
