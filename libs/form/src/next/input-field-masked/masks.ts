import { MaskOptions } from './model';

// Deze maskers zijn gebaseerd op de maskers van Cleave.js, uitgebreid met de properties customTransformFn en validationRegex.
// De customTransformFn wordt gebruikt om features die Cleave.js niet ondersteunt toe te voegen, bv. het verwijderen van niet hexadecimale karakters.
// De validationRegex wordt gebruikt om de waarde te valideren, tijdens het valideren wordt altijd de rawValue gebruikt.

export const maskOptions: { [key: string]: MaskOptions } = {
    iban: {
        blocks: [4, 4, 4, 4],
        prefix: 'BE',
        numericOnly: true,
        numeralPositiveOnly: true,
        stripLeadingZeroes: false,
        validationRegex: /^[A-Z]{2}[0-9]{14}$/,
    },
    rrn: {
        blocks: [2, 2, 2, 3, 2],
        delimiters: ['.', '.', '-', '.'],
        numericOnly: true,
        numeralPositiveOnly: true,
        stripLeadingZeroes: false,
        validationRegex: /^[0-9]{11}$/,
    },
    uuid: {
        blocks: [8, 4, 4, 4, 12],
        delimiter: '-',
        stripLeadingZeroes: false,
        validationRegex: /^[0-9a-fA-F]{32}$/,
        customTransformFn: (value: string) => {
            // Verwijder alle niet hexadecimale karakters.
            return value.replace(/[^0-9a-fA-F-]/g, '');
        },
    },
    date: {
        date: true,
        datePattern: ['d', 'm', 'Y'],
        delimiter: '.',
        validationRegex: /^[0-9]{8}$/,
    },
    numerical: {
        numeral: true,
        numeralDecimalMark: ',',
        delimiter: '.',
        validationRegex: /^[0-9]+(.[0-9]+)?$/,
    },
    price: {
        numeral: true,
        prefix: '€',
        rawValueTrimPrefix: true,
        numeralDecimalMark: ',',
        delimiter: '.',
        validationRegex: /^[0-9]+(.[0-9]+)?$/,
    },
    phone: {
        blocks: [3, 2, 2, 2, 2],
        prefix: '+32',
        numericOnly: true,
        numeralPositiveOnly: true,
        delimiter: ' ',
        validationRegex: /^\+[0-9]{10}$/,
    },
    mobile: {
        blocks: [3, 3, 2, 2, 2],
        prefix: '+32',
        numericOnly: true,
        numeralPositiveOnly: true,
        delimiter: ' ',
        validationRegex: /^\+[0-9]{11}$/,
    },
};
