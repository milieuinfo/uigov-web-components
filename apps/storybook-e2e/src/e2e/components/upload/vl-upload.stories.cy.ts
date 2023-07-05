import { transformStringToArgument } from '../../../support/utils';

const uploadUrl = 'http://localhost:8080/iframe.html?id=components-upload--upload-default&viewMode=story';
const uploadAutoProcessUrl =
    'http://localhost:8080/iframe.html?id=components-upload--upload-default&viewMode=story&args=autoProcess:true;';
const uploadInForm = 'http://localhost:8080/iframe.html?id=components-upload--upload-in-form&viewMode=story';

const uploadPdfFilePath = 'src/fixtures/upload/file.pdf';
const uploadTxtFilePath = 'src/fixtures/upload/file.txt';
const uploadMockedResponseFixture = 'upload/upload-mock-response-200.json';
const uploadTargetUrl = 'fake-url';

const shouldAddPdfFiles = (number = 1) => {
    for (let i = 0; i < number; i++) {
        cy.get('vl-upload').shadow().find('input[type=file]').selectFile(uploadPdfFilePath, { force: true });
    }
};
const shouldAddTxtFiles = (number = 1) => {
    for (let i = 0; i < number; i++) {
        cy.get('vl-upload').shadow().find('input[type=file]').selectFile(uploadTxtFilePath, { force: true });
    }
};

const shouldRemoveFile = () => {
    cy.get('vl-upload').shadow().find('button.vl-upload__files__close').click();
};

const shouldHaveUploadFiles = (number: number) => {
    cy.get('vl-upload').shadow().find('div.vl-upload__file').its('length').should('eq', number);
};
const shouldHaveValidUploadFiles = (number: number) => {
    cy.get('vl-upload').shadow().find('div.vl-upload__file').not('.dz-error').its('length').should('eq', number);
};
const shouldHaveUploadFilesWithNoSuccess = (number: number) => {
    cy.get('vl-upload').shadow().find('div.vl-upload__file').not('.dz-success').its('length').should('eq', number);
};

const shouldHaveSuccessUploadFiles = (number: number) => {
    cy.get('vl-upload').shadow().find('div.dz-success').its('length').should('eq', number);
};

const shouldOnlyHaveUnprocessedUploadFiles = (number: number) => {
    cy.get('vl-upload')
        .shadow()
        .find('div.vl-upload__file')
        .not('.dz-error')
        .not('.dz-success')
        .its('length')
        .should('eq', number);
};

const shouldSuccessfullyUploadFiles = (numberOfFiles: number, name?: string) => {
    // intercepts outgoing requests so can test them
    cy.intercept('POST', uploadTargetUrl, (req) => {
        req.reply({
            statusCode: 200,
            fixture: uploadMockedResponseFixture,
        });
    }).as('uploadPost');
    shouldAddPdfFiles(numberOfFiles);
    cy.wait('@uploadPost').then((uploadPost) => {
        if (name) {
            const bodyString = Cypress.Blob.arrayBufferToBinaryString(uploadPost.request.body);
            cy.wrap(bodyString).should('contain', name);
        }
    });
    cy.get('@uploadPost.all').then((interceptions) => {
        expect(interceptions).to.have.length(numberOfFiles);
    });
    shouldHaveSuccessUploadFiles(numberOfFiles);
};

describe('story vl-upload - default', () => {
    it('can select a file to upload, by default it should not start uploading', () => {
        cy.visit(uploadUrl.concat(`&args=url:${uploadTargetUrl}`));
        const numberOfFiles = 1;

        cy.intercept('POST', uploadTargetUrl, (req) => {
            req.reply({
                statusCode: 200,
                fixture: uploadMockedResponseFixture,
            });
        }).as('uploadPost');
        shouldAddPdfFiles(numberOfFiles);
        cy.get('@uploadPost.all').then((interceptions) => {
            expect(interceptions).to.have.length(0);
        });
        shouldOnlyHaveUnprocessedUploadFiles(numberOfFiles);
    });

    it('can select a file to upload with autoprocess flag enabled, it should start uploading and have a success flag', () => {
        cy.visit(uploadAutoProcessUrl.concat(`url:${uploadTargetUrl}`));

        shouldSuccessfullyUploadFiles(1);
    });

    it('after adding a file and the upload fails, the related file should not have a success flag', () => {
        const numberOfFiles = 1;
        cy.visit(uploadAutoProcessUrl.concat(`url:${uploadTargetUrl}`));

        cy.intercept('POST', uploadTargetUrl, (req) => {
            req.reply({
                statusCode: 500,
            });
        }).as('uploadPost');
        shouldAddTxtFiles();
        cy.wait('@uploadPost');
        cy.get('@uploadPost.all').then((interceptions) => {
            expect(interceptions).to.have.length(numberOfFiles);
        });
        shouldHaveUploadFilesWithNoSuccess(numberOfFiles);
    });

    it('can select a file to upload & then cancel the upload', () => {
        cy.visit(uploadUrl);

        shouldAddPdfFiles(1);
        cy.createStubForEvent('vl-upload', 'change');
        shouldRemoveFile();
        cy.get('@change').should('have.been.called');
    });

    it('when adding a file with the wrong extension, it will generate an error', () => {
        const errorMessage = 'Dit bestandstype is niet toegestaan';
        cy.visit(
            uploadUrl.concat(
                `&args=acceptedFiles:txt;errorMessageAcceptedFiles:${transformStringToArgument(errorMessage)}`
            )
        );

        cy.get('vl-upload').shadow().find('input[type=file]').selectFile(uploadPdfFilePath, { force: true });
        cy.get('vl-upload').shadow().find('.dz-error-message').should('contain', errorMessage, '');
    });

    it('by default, only one file can be added at the time', () => {
        const errorMessage = 'U mag maar 1 bestand tegelijk uploaden';
        cy.visit(uploadUrl.concat(`&args=errorMessageMaxFiles:${transformStringToArgument(errorMessage)}`));

        shouldAddPdfFiles(2);
        cy.get('vl-upload').shadow().find('.dz-error-message').should('contain', errorMessage, '');
    });

    it('when exceeding the number of files allowed, it will generate an error', () => {
        const errorMessage = 'Het maximum aantal toegelaten bestanden is overschreden';
        cy.visit(uploadUrl.concat(`&args=maxFiles:2;errorMessageMaxFiles:${transformStringToArgument(errorMessage)}`));

        shouldAddPdfFiles(3);
        shouldHaveUploadFiles(3);
        shouldHaveValidUploadFiles(2);
        cy.get('vl-upload').shadow().find('.dz-error-message').should('contain', errorMessage, '');
    });

    it('when adding duplicate files, only one will be added & duplicateRemoved event will be thrown', () => {
        cy.visit(uploadUrl.concat(`&args=maxFiles:2;disallowDuplicates:true`));

        shouldAddPdfFiles(2);
        shouldHaveUploadFiles(1);
        cy.createStubForEvent('vl-upload', 'duplicateRemoved');
        cy.get('@duplicateRemoved').should('have.been.called');
    });

    it('when adding a file that is bigger than allowed, it will generate an error', () => {
        const errorMessage = 'Dit bestand heeft de maximale bestandsgrootte overschreden';
        cy.visit(
            uploadUrl.concat(`&args=maxSize:2000;errorMessageFilesize:${transformStringToArgument(errorMessage)}`)
        );

        shouldAddPdfFiles(1);
        cy.get('vl-upload').shadow().find('.dz-error-message').should('contain', errorMessage, '');
    });

    it('can select a file to upload, with autoprocess, it will automatically start the upload', () => {
        cy.visit(uploadAutoProcessUrl.concat(`url:${uploadTargetUrl}`));

        cy.intercept('POST', uploadTargetUrl, (req) => {
            req.reply({
                statusCode: 200,
                fixture: uploadMockedResponseFixture,
            });
        }).as('uploadPost');

        cy.get('vl-upload').shadow().find('div').not('.vl-upload__file');
        shouldAddPdfFiles(1);
        shouldHaveUploadFiles(1);

        cy.wait('@uploadPost');
        cy.get('@uploadPost.all').then((interceptions) => {
            expect(interceptions).to.have.length(1);
        });
        shouldHaveSuccessUploadFiles(1);
    });

    it('can change the subtitle and title of the upload component', () => {
        const titel = 'Upload hier je documenten';
        const subTitel = 'je mag maar 1 bestand uploaden';
        cy.visit(
            uploadUrl.concat(
                `&args=subTitle:${transformStringToArgument(subTitel)};title:${transformStringToArgument(
                    titel
                )};url:fake-url&viewMode=story`
            )
        );

        cy.get('vl-upload').shadow().find('span.vl-upload__element__button__container').should('contain', titel, '');
        cy.get('vl-upload').shadow().find('small#sub-title').should('contain', subTitel, '');
    });

    it('can change the name of the uploaded file', () => {
        const name = 'super_geheim_bestand';
        cy.visit(
            uploadAutoProcessUrl.concat(`inputName:${transformStringToArgument(name)};url:fake-url&viewMode=story`)
        );

        shouldSuccessfullyUploadFiles(1, name);
    });
});

describe('story vl-upload - in a form', () => {
    it('can select a file to upload, inside a form, removing the files will trigger required validation', () => {
        cy.visit(uploadInForm.concat('&args=autoProcess:false;url:${uploadTargetUrl};resetFormOnClear:false'));

        shouldAddPdfFiles(1);
        shouldHaveUploadFiles(1);
        shouldRemoveFile();
        cy.get('vl-upload').shadow().find('div').not('.vl-upload__file');
        cy.get('p[is=vl-form-validation-message]').should('not.be.visible');
    });

    it('can select a file to upload, inside a form, removing the files will reset validation if resetFormOnClear is true', () => {
        cy.visit(uploadInForm.concat(`&args=autoProcess:false;url:${uploadTargetUrl};resetFormOnClear:true`));

        shouldAddPdfFiles(1);
        shouldHaveUploadFiles(1);
        cy.createStubForEvent('vl-upload', 'change');
        cy.get('@change').should('have.been.called');
        cy.get('vl-upload').shadow().find('button.vl-upload__files__close').click({ force: true });
        cy.get('p[is=vl-form-validation-message]').should('be.not.visible');
        cy.get('vl-upload').should('not.have.attr', 'error', '');
    });
});
