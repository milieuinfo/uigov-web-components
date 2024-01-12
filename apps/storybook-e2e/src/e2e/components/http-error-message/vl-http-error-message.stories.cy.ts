const httpErrorMessageDefaultUrl =
    'http://localhost:8080/iframe.html?args=&id=components-http-error-message--http-error-message-default&viewMode=story';
const httpErrorMessage400Url =
    'http://localhost:8080/iframe.html?args=&id=components-http-error-message--http-error-message-400&viewMode=story';
const httpErrorMessage401Url =
    'http://localhost:8080/iframe.html?args=&id=components-http-error-message--http-error-message-401&viewMode=story';
const httpErrorMessage403Url =
    'http://localhost:8080/iframe.html?args=&id=components-http-error-message--http-error-message-403&viewMode=story';
const httpErrorMessage404Url =
    'http://localhost:8080/iframe.html?args=&id=components-http-error-message--http-error-message-404&viewMode=story';
const httpErrorMessage405Url =
    'http://localhost:8080/iframe.html?args=&id=components-http-error-message--http-error-message-405&viewMode=story';
const httpErrorMessage408Url =
    'http://localhost:8080/iframe.html?args=&id=components-http-error-message--http-error-message-408&viewMode=story';
const httpErrorMessage410Url =
    'http://localhost:8080/iframe.html?args=&id=components-http-error-message--http-error-message-410&viewMode=story';
const httpErrorMessage411Url =
    'http://localhost:8080/iframe.html?args=&id=components-http-error-message--http-error-message-411&viewMode=story';
const httpErrorMessage412Url =
    'http://localhost:8080/iframe.html?args=&id=components-http-error-message--http-error-message-412&viewMode=story';
const httpErrorMessage413Url =
    'http://localhost:8080/iframe.html?args=&id=components-http-error-message--http-error-message-413&viewMode=story';
const httpErrorMessage414Url =
    'http://localhost:8080/iframe.html?args=&id=components-http-error-message--http-error-message-414&viewMode=story';
const httpErrorMessage415Url =
    'http://localhost:8080/iframe.html?args=&id=components-http-error-message--http-error-message-415&viewMode=story';
const httpErrorMessage500Url =
    'http://localhost:8080/iframe.html?args=&id=components-http-error-message--http-error-message-500&viewMode=story';
const httpErrorMessage501Url =
    'http://localhost:8080/iframe.html?args=&id=components-http-error-message--http-error-message-501&viewMode=story';
const httpErrorMessage502Url =
    'http://localhost:8080/iframe.html?args=&id=components-http-error-message--http-error-message-502&viewMode=story';
const httpErrorMessage503Url =
    'http://localhost:8080/iframe.html?args=&id=components-http-error-message--http-error-message-503&viewMode=story';
const httpErrorMessage504Url =
    'http://localhost:8080/iframe.html?args=&id=components-http-error-message--http-error-message-504&viewMode=story';
const httpErrorMessage505Url =
    'http://localhost:8080/iframe.html?args=&id=components-http-error-message--http-error-message-505&viewMode=story';
const httpErrorMessage506Url =
    'http://localhost:8080/iframe.html?args=&id=components-http-error-message--http-error-message-506&viewMode=story';

describe('story vl-http-error-message - default', () => {
    it('should render http error message', () => {
        cy.visit(`${httpErrorMessageDefaultUrl}`);
        cy.get('vl-http-error-message').shadow();
    });
});

describe('story vl-http-error-message - 400', () => {
    it('should render http error message', () => {
        cy.visit(`${httpErrorMessage400Url}`);
        cy.get('vl-http-error-message').shadow();
    });
});

describe('story vl-http-error-message - 401', () => {
    it('should render http error message', () => {
        cy.visit(`${httpErrorMessage401Url}`);
        cy.get('vl-http-error-message').shadow();
    });
});

describe('story vl-http-error-message - 403', () => {
    it('should render http error message', () => {
        cy.visit(`${httpErrorMessage403Url}`);
        cy.get('vl-http-error-message').shadow();
    });
});

describe('story vl-http-error-message - 404', () => {
    it('should render http error message', () => {
        cy.visit(`${httpErrorMessage404Url}`);
        cy.get('vl-http-error-message').shadow();
    });
});

describe('story vl-http-error-message - 405', () => {
    it('should render http error message', () => {
        cy.visit(`${httpErrorMessage405Url}`);
        cy.get('vl-http-error-message').shadow();
    });
});

describe('story vl-http-error-message - 408', () => {
    it('should render http error message', () => {
        cy.visit(`${httpErrorMessage408Url}`);
        cy.get('vl-http-error-message').shadow();
    });
});

describe('story vl-http-error-message - 410', () => {
    it('should render http error message', () => {
        cy.visit(`${httpErrorMessage410Url}`);
        cy.get('vl-http-error-message').shadow();
    });
});

describe('story vl-http-error-message - 411', () => {
    it('should render http error message', () => {
        cy.visit(`${httpErrorMessage411Url}`);
        cy.get('vl-http-error-message').shadow();
    });
});

describe('story vl-http-error-message - 412', () => {
    it('should render http error message', () => {
        cy.visit(`${httpErrorMessage412Url}`);
        cy.get('vl-http-error-message').shadow();
    });
});

describe('story vl-http-error-message - 413', () => {
    it('should render http error message', () => {
        cy.visit(`${httpErrorMessage413Url}`);
        cy.get('vl-http-error-message').shadow();
    });
});

describe('story vl-http-error-message - 414', () => {
    it('should render http error message', () => {
        cy.visit(`${httpErrorMessage414Url}`);
        cy.get('vl-http-error-message').shadow();
    });
});

describe('story vl-http-error-message - 415', () => {
    it('should render http error message', () => {
        cy.visit(`${httpErrorMessage415Url}`);
        cy.get('vl-http-error-message').shadow();
    });
});

describe('story vl-http-error-message - 500', () => {
    it('should render http error message', () => {
        cy.visit(`${httpErrorMessage500Url}`);
        cy.get('vl-http-error-message').shadow();
    });
});

describe('story vl-http-error-message - 501', () => {
    it('should render http error message', () => {
        cy.visit(`${httpErrorMessage501Url}`);
        cy.get('vl-http-error-message').shadow();
    });
});

describe('story vl-http-error-message - 502', () => {
    it('should render http error message', () => {
        cy.visit(`${httpErrorMessage502Url}`);
        cy.get('vl-http-error-message').shadow();
    });
});

describe('story vl-http-error-message - 503', () => {
    it('should render http error message', () => {
        cy.visit(`${httpErrorMessage503Url}`);
        cy.get('vl-http-error-message').shadow();
    });
});

describe('story vl-http-error-message - 504', () => {
    it('should render http error message', () => {
        cy.visit(`${httpErrorMessage504Url}`);
        cy.get('vl-http-error-message').shadow();
    });
});

describe('story vl-http-error-message - 505', () => {
    it('should render http error message', () => {
        cy.visit(`${httpErrorMessage505Url}`);
        cy.get('vl-http-error-message').shadow();
    });
});

describe('story vl-http-error-message - 506', () => {
    it('should render http error message', () => {
        cy.visit(`${httpErrorMessage506Url}`);
        cy.get('vl-http-error-message').shadow();
    });
});
