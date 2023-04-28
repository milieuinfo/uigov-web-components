const mapActionControlUrl =
    'http://localhost:8080/iframe.html?id=map-controls-action-control--map-action-control-default&viewMode=story';
const mapActionControlIconUrl =
    'http://localhost:8080/iframe.html?id=map-controls-action-control--map-action-control-icon&viewMode=story';
const mapActionControlMultipleUrl =
    'http://localhost:8080/iframe.html?id=map-controls-action-control--map-action-control-multiple&viewMode=story';

describe('story vl-map-action-control default', () => {
    it('should render a map', () => {
        cy.visit(mapActionControlUrl);

        cy.get('vl-map').shadow().find('div#map');
    });

    it('should render an action control', () => {
        cy.visit(mapActionControlUrl);

        cy.get('vl-map')
            .find('vl-map-action-controls')
            .find('vl-map-action-control')
            .should('have.attr', 'data-vl-action-id', 'draw-polygon-action')
            .should('have.attr', 'data-vl-label', 'Teken');
    });

    it('should render a toggle button with label', () => {
        cy.visit(mapActionControlUrl);

        cy.get('vl-map')
            .find('vl-map-action-controls')
            .find('vl-map-action-control')
            .find('vl-toggle-button')
            .invoke('text')
            .should('contain', 'Teken');
    });

    it('should set the label of the toggle button', () => {
        cy.visit(`${mapActionControlUrl}&args=label:Tekenen`);

        cy.get('vl-map')
            .find('vl-map-action-controls')
            .find('vl-map-action-control')
            .should('have.attr', 'data-vl-action-id', 'draw-polygon-action')
            .should('have.attr', 'data-vl-label', 'Tekenen')
            .find('vl-toggle-button')
            .invoke('text')
            .should('contain', 'Tekenen');
    });
});

describe('story vl-map-action-control icon', () => {
    it('should render a map', () => {
        cy.visit(mapActionControlIconUrl);

        cy.get('vl-map').shadow().find('div#map');
    });

    it('should render an action control', () => {
        cy.visit(mapActionControlIconUrl);

        cy.get('vl-map')
            .find('vl-map-action-controls')
            .find('vl-map-action-control')
            .should('have.attr', 'data-vl-action-id', 'draw-polygon-action')
            .should('have.attr', 'data-vl-icon', 'pencil');
    });

    it('should render a toggle button with icon', () => {
        cy.visit(mapActionControlIconUrl);

        cy.get('vl-map')
            .find('vl-map-action-controls')
            .find('vl-map-action-control')
            .find('vl-toggle-button')
            .shadow()
            .find('span[is="vl-icon"][data-vl-icon="pencil"]');
    });

    it('should set the icon of the toggle button', () => {
        cy.visit(`${mapActionControlIconUrl}&args=icon:ruler`);

        cy.get('vl-map')
            .find('vl-map-action-controls')
            .find('vl-map-action-control')
            .should('have.attr', 'data-vl-action-id', 'draw-polygon-action')
            .should('have.attr', 'data-vl-icon', 'ruler')
            .find('vl-toggle-button')
            .shadow()
            .find('span[is="vl-icon"][data-vl-icon="ruler"]');
    });
});

describe('story vl-map-action-control multiple', () => {
    it('should render a map', () => {
        cy.visit(mapActionControlMultipleUrl);

        cy.get('vl-map').shadow().find('div#map');
    });

    it('should render 3 action controls', () => {
        cy.visit(mapActionControlMultipleUrl);

        cy.get('vl-map').find('vl-map-action-controls').find('vl-map-action-control[data-vl-action-id="draw-action"]');
        cy.get('vl-map')
            .find('vl-map-action-controls')
            .find('vl-map-action-control[data-vl-action-id="modify-action"]');
        cy.get('vl-map')
            .find('vl-map-action-controls')
            .find('vl-map-action-control[data-vl-action-id="delete-action"]');
    });

    it('should deactivate toggle button when activating another toggle button', () => {
        cy.visit(mapActionControlMultipleUrl);

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

        getToggleButtonForAction(drawActionId).click({ force: true });
        getToggleButtonForAction(drawActionId).should('not.have.attr', 'data-vl-tertiary');
        getToggleButtonForAction(modifyActionId).should('have.attr', 'data-vl-tertiary');
        getToggleButtonForAction(deleteActionId).should('have.attr', 'data-vl-tertiary');

        getToggleButtonForAction(modifyActionId).click({ force: true });
        getToggleButtonForAction(drawActionId).should('have.attr', 'data-vl-tertiary');
        getToggleButtonForAction(modifyActionId).should('not.have.attr', 'data-vl-tertiary');
        getToggleButtonForAction(deleteActionId).should('have.attr', 'data-vl-tertiary');

        getToggleButtonForAction(deleteActionId).click({ force: true });
        getToggleButtonForAction(drawActionId).should('have.attr', 'data-vl-tertiary');
        getToggleButtonForAction(modifyActionId).should('have.attr', 'data-vl-tertiary');
        getToggleButtonForAction(deleteActionId).should('not.have.attr', 'data-vl-tertiary');
    });
});
