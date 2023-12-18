const cookieStatementUrl =
    'http://localhost:8080/iframe.html?id=sections-cookie-statement--cookie-statement-default&viewMode=story';

const cookieStatementHeaderSlotUrl =
    'http://localhost:8080/iframe.html?args=&id=sections-cookie-statement--cookie-statement-header-slot&viewMode=story';

describe('story vl-cookie-statement - default', () => {
    it('should display story', () => {
        cy.visit(cookieStatementUrl);
        cy.get('vl-cookie-statement');
    });
});

describe('story vl-cookie-statement - header slot', () => {
    it('should have replace default header with custom header', () => {
        cy.visit(cookieStatementHeaderSlotUrl);

        cy.get('vl-cookie-statement').find('vl-functional-header').shadow().find('slot[name="back"]').contains('Start');
    });
});

// describe('story vl-cookie-statement - default', () => {
//     it('should be accessible', () => {
//         cy.visitWithA11y(cookieStatementUrl);

//         cy.get('vl-cookie-statement');
//         cy.checkA11y('vl-cookie-statement');
//     });

//     it('should have cookie statement header', () => {
//         cy.visit(cookieStatementUrl);

//         cy.get('vl-cookie-statement').shadow().find('h1').contains('Cookieverklaring');
//     });

//     it('should have default date', () => {
//         cy.visit(cookieStatementUrl);

//         cy.get('vl-cookie-statement').shadow().find('section').find('span').contains('3 maart 2021');
//     });

//     it('should set date', () => {
//         cy.visit(`${cookieStatementUrl}&args=date:27+januari+2023`);

//         cy.get('vl-cookie-statement').shadow().find('section').find('span').contains('27 januari 2023');
//     });

//     it('should disable back link and emit event', () => {
//         cy.visit(`${cookieStatementUrl}&args=disableBackLink:true`);

//         cy.createStubForEvent('vl-cookie-statement', 'vl-click-back');
//         cy.get('vl-cookie-statement').shadow().find('vl-functional-header').shadow().find('a#back-link').click();
//         cy.get('@vl-click-back').should('have.been.calledOnce');
//     });

//     it('should have default version', () => {
//         cy.visit(cookieStatementUrl);

//         cy.get('vl-cookie-statement').shadow().find('section').find('span').contains('1.0.0');
//     });

//     it('should set version', () => {
//         cy.visit(`${cookieStatementUrl}&args=version:v24`);

//         cy.get('vl-cookie-statement').shadow().find('section').find('span').contains('v24');
//     });
// });
