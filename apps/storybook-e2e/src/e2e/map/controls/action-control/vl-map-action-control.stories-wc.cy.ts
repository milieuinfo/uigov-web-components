import { VlToggleButtonComponent } from '@domg-wc/components';
import { VlMapAction, VlMapActionControl } from '@domg-wc/map';
import { runTestFor } from '../../../../../src/support/utils';

const mapActionControlMultipleUrl =
    'http://localhost:8080/iframe.html?id=map-controls-action-control--action-control-multiple&viewMode=story';

const drawActionId = 'draw-action';
const modifyActionId = 'modify-action';
const deleteActionId = 'delete-action';
const getToggleButtonForAction = (actionId: string) => {
    return cy
        .get('vl-map')
        .find(`vl-map-action-control[data-vl-action-id="${actionId}"]`)
        .find('vl-toggle-button')
        .shadow()
        .find('button');
};

describe('story vl-map-action-control multiple', () => {
    it('should activate/deactivate action and toggle button on click toggle', () => {
        cy.visit(mapActionControlMultipleUrl);

        getToggleButtonForAction(drawActionId).click({ force: true });
        runTestFor<VlMapAction>(`#${drawActionId}`, (action) => {
            expect(action.active).to.be.true;
        });
        runTestFor<VlToggleButtonComponent>(
            `vl-map-action-control[data-vl-action-id="${drawActionId}"]>vl-toggle-button`,
            (toggleButton) => {
                expect(toggleButton.active).to.be.true;
            }
        );

        getToggleButtonForAction(drawActionId).click({ force: true });
        runTestFor<VlMapAction>(`#${drawActionId}`, (action) => {
            expect(action.active).to.be.false;
        });
        runTestFor<VlToggleButtonComponent>(
            `vl-map-action-control[data-vl-action-id="${drawActionId}"]>vl-toggle-button`,
            (toggleButton) => {
                expect(toggleButton.active).to.be.false;
            }
        );
    });

    it('should activate/deactivate action and toggle button when calling activate()/deactivate()', () => {
        cy.visit(mapActionControlMultipleUrl);

        runTestFor<VlMapActionControl>(
            `vl-map-action-control[data-vl-action-id="${drawActionId}"]`,
            (actionControl) => {
                actionControl.activate();
            }
        );
        runTestFor<VlMapAction>(`#${drawActionId}`, (action) => {
            expect(action.active).to.be.true;
        });
        runTestFor<VlToggleButtonComponent>(
            `vl-map-action-control[data-vl-action-id="${drawActionId}"]>vl-toggle-button`,
            (toggleButton) => {
                expect(toggleButton.active).to.be.true;
            }
        );

        runTestFor<VlMapActionControl>(
            `vl-map-action-control[data-vl-action-id="${drawActionId}"]`,
            (actionControl) => {
                actionControl.deactivate();
            }
        );
        runTestFor<VlMapAction>(`#${drawActionId}`, (action) => {
            expect(action.active).to.be.false;
        });
        runTestFor<VlToggleButtonComponent>(
            `vl-map-action-control[data-vl-action-id="${drawActionId}"]>vl-toggle-button`,
            (toggleButton) => {
                expect(toggleButton.active).to.be.false;
            }
        );
    });

    it('should deactivate action and toggle button when activating another action', () => {
        cy.visit(mapActionControlMultipleUrl);

        getToggleButtonForAction(drawActionId).click({ force: true });
        runTestFor<VlMapAction>(`#${drawActionId}`, (action) => {
            expect(action.active).to.be.true;
        });
        runTestFor<VlToggleButtonComponent>(
            `vl-map-action-control[data-vl-action-id="${drawActionId}"]>vl-toggle-button`,
            (toggleButton) => {
                expect(toggleButton.active).to.be.true;
            }
        );
        runTestFor<VlMapAction>(`#${modifyActionId}`, (action) => {
            expect(action.active).to.be.false;
        });
        runTestFor<VlToggleButtonComponent>(
            `vl-map-action-control[data-vl-action-id="${modifyActionId}"]>vl-toggle-button`,
            (toggleButton) => {
                expect(toggleButton.active).to.be.false;
            }
        );
        runTestFor<VlMapAction>(`#${deleteActionId}`, (action) => {
            expect(action.active).to.be.false;
        });
        runTestFor<VlToggleButtonComponent>(
            `vl-map-action-control[data-vl-action-id="${deleteActionId}"]>vl-toggle-button`,
            (toggleButton) => {
                expect(toggleButton.active).to.be.false;
            }
        );

        getToggleButtonForAction(modifyActionId).click({ force: true });
        runTestFor<VlMapAction>(`#${drawActionId}`, (action) => {
            expect(action.active).to.be.false;
        });
        runTestFor<VlToggleButtonComponent>(
            `vl-map-action-control[data-vl-action-id="${drawActionId}"]>vl-toggle-button`,
            (toggleButton) => {
                expect(toggleButton.active).to.be.false;
            }
        );
        runTestFor<VlMapAction>(`#${modifyActionId}`, (action) => {
            expect(action.active).to.be.true;
        });
        runTestFor<VlToggleButtonComponent>(
            `vl-map-action-control[data-vl-action-id="${modifyActionId}"]>vl-toggle-button`,
            (toggleButton) => {
                expect(toggleButton.active).to.be.true;
            }
        );
        runTestFor<VlMapAction>(`#${deleteActionId}`, (action) => {
            expect(action.active).to.be.false;
        });
        runTestFor<VlToggleButtonComponent>(
            `vl-map-action-control[data-vl-action-id="${deleteActionId}"]>vl-toggle-button`,
            (toggleButton) => {
                expect(toggleButton.active).to.be.false;
            }
        );

        getToggleButtonForAction(deleteActionId).click({ force: true });
        runTestFor<VlMapAction>(`#${drawActionId}`, (action) => {
            expect(action.active).to.be.false;
        });
        runTestFor<VlToggleButtonComponent>(
            `vl-map-action-control[data-vl-action-id="${drawActionId}"]>vl-toggle-button`,
            (toggleButton) => {
                expect(toggleButton.active).to.be.false;
            }
        );
        runTestFor<VlMapAction>(`#${modifyActionId}`, (action) => {
            expect(action.active).to.be.false;
        });
        runTestFor<VlToggleButtonComponent>(
            `vl-map-action-control[data-vl-action-id="${modifyActionId}"]>vl-toggle-button`,
            (toggleButton) => {
                expect(toggleButton.active).to.be.false;
            }
        );
        runTestFor<VlMapAction>(`#${deleteActionId}`, (action) => {
            expect(action.active).to.be.true;
        });
        runTestFor<VlToggleButtonComponent>(
            `vl-map-action-control[data-vl-action-id="${deleteActionId}"]>vl-toggle-button`,
            (toggleButton) => {
                expect(toggleButton.active).to.be.true;
            }
        );
    });
});
