import { Validator } from '@open-wc/form-control';

export const minValueValidator: Validator = {
    attribute: 'min',
    key: 'rangeUnderflow',
    message(instance: { min: number }): string {
        return `Value must be greater than or equal to ${instance.min}.`;
    },
    isValid(instance: HTMLElement & { min: number }, value: string): boolean {
        if (!instance.min && instance.min !== 0) {
            return true;
        }

        if (!!value && instance.min > parseInt(value)) {
            return false;
        }

        return true;
    },
};

export const maxValueValidator: Validator = {
    attribute: 'max',
    key: 'rangeOverflow',
    message(instance: { max: number }): string {
        return `Value must be lesser than or equal to ${instance.max}.`;
    },
    isValid(instance: HTMLElement & { max: number }, value: string): boolean {
        if (!instance.max && instance.max !== 0) {
            return true;
        }

        if (!!value && instance.max < parseInt(value)) {
            return false;
        }

        return true;
    },
};
