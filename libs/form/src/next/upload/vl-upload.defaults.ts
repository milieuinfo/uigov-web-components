import { formControlDefaults } from '../form-control/form-control.defaults';

export const uploadDefaults = {
    ...formControlDefaults,
    readonly: false as boolean,
    acceptedFiles: '' as string,
    autoProcess: false as boolean,
    disallowDuplicates: false as boolean,
    errorMessageAcceptedFiles: 'Dit bestand is niet toegevoegd. Dit bestandstype is niet toegestaan.' as string,
    errorMessageFilesize: 'Dit bestand is niet toegevoegd. Het bestand mag maximaal {{maxFilesize}} MB zijn.' as string,
    errorMessageMaxFiles:
        'Dit bestand is niet toegevoegd. Je kan maximaal {{maxFiles}} bestand(en) uploaden.' as string,
    maxFiles: 1 as number,
    maxSize: 2 as number,
    subTitle: 'Sleep de bijlage naar hier om toe te voegen' as string,
    mainTitle: 'Bijlage toevoegen' as string,
    url: '' as string,
} as const;
