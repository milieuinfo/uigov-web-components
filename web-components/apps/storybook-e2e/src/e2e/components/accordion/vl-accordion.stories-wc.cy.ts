import { VlAccordionComponent } from '@domg-wc/components';
import { extractWebComponent } from '../../../support/utils';

const accordionUrl = 'http://localhost:8080/iframe.html?id=components-accordion--accordion-default&viewMode=story';
const accordionTitleSlotUrl =
    'http://localhost:8080/iframe.html?id=components-accordion--accordion-title-slot&viewMode=story';
const accordionDynamicToggleUrl =
    'http://localhost:8080/iframe.html?id=components-accordion--accordion-dynamic-toggle&viewMode=story';

const shouldBeToggleable = async () => {
    extractWebComponent<VlAccordionComponent>('vl-accordion', (component) => {
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

describe('story vl-accordion wc', () => {
    it('default - should be toggleable', () => {
        cy.visit(`${accordionUrl}`);

        shouldBeToggleable();
    });

    it('title slot - should be toggleable', () => {
        cy.visit(`${accordionTitleSlotUrl}`);

        shouldBeToggleable();
    });

    it('dynamic toggle - should be toggleable', () => {
        cy.visit(`${accordionDynamicToggleUrl}`);

        shouldBeToggleable();
    });
});
