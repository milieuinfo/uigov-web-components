import { registerWebComponents } from '@domg-wc/common-utilities';
import { html } from 'lit';
import { VlMap } from '../../vl-map';
import { VlMapSideSheet } from './vl-map-side-sheet';

registerWebComponents([VlMap, VlMapSideSheet]);

const mapSideSheetFixture = html`
    <vl-map>
        <vl-map-side-sheet></vl-map-side-sheet>
    </vl-map>
`;

describe('vl-map-side-sheet', () => {
    it('de side sheet zal absoluut en links gepositioneerd worden', () => {
        cy.mount(mapSideSheetFixture);
        cy.runTestFor<VlMapSideSheet>('vl-map-side-sheet', (vlMapSideSheet) => {
            expect(vlMapSideSheet.hasAttribute('data-vl-left')).to.be.true;
            expect(vlMapSideSheet.hasAttribute('data-vl-absolute')).to.be.true;
        });
    });
});
