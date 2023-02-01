import { VlAccordionComponent } from '@domg-wc/components';
import { runTestFor } from '../../../../src/support/utils';

const accordionUrl = 'http://localhost:8080/iframe.html?id=components-accordion--accordion-default&viewMode=story';
const accordionTitleSlotUrl =
    'http://localhost:8080/iframe.html?id=components-accordion--accordion-title-slot&viewMode=story';
const accordionDynamicToggleUrl =
    'http://localhost:8080/iframe.html?id=components-accordion--accordion-dynamic-toggle&viewMode=story';

const shouldBeToggleable = async () => {
    runTestFor<VlAccordionComponent>('vl-accordion', (component) => {
        expect(component._isOpen).to.be.false;
        component.open();
        expect(component._isOpen).to.be.true;
        component.close();
        expect(component._isOpen).to.be.false;
        component.toggle();
        expect(component._isOpen).to.be.true;
        component.toggle();
        expect(component._isOpen).to.be.false;
    });
};

describe('story vl-accordion default', () => {
    it('should be toggleable', () => {
        cy.visit(`${accordionUrl}`);

        shouldBeToggleable();
    });
});

describe('story vl-accordion dynamic toggle', () => {
    it('should be toggleable', () => {
        cy.visit(`${accordionDynamicToggleUrl}`);

        shouldBeToggleable();
    });
});

describe('story vl-accordion title slot', () => {
    it('should be toggleable', () => {
        cy.visit(`${accordionTitleSlotUrl}`);

        shouldBeToggleable();
    });
});
