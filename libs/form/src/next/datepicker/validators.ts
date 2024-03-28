import { Validator } from '@open-wc/form-control';
import { CleaveInstance, MaskOptions } from '../../models/cleave.model';

export const maskValidator: Validator = {
    key: 'patternMismatch',
    message: 'Value does not meet the given pattern.',
    isValid(
        instance: HTMLElement & {
            disableMaskValidation: boolean;
            pattern: string;
            regex: RegExp;
            maskOptions: MaskOptions;
            cleaveInstance: CleaveInstance;
        },
        value: string
    ): boolean {
        const { disableMaskValidation, cleaveInstance } = instance;
        const regex = instance.regex || instance.pattern;
        if (!value || (!regex && (!cleaveInstance || disableMaskValidation))) {
            return true;
        }
        if (cleaveInstance && !disableMaskValidation && instance.maskOptions?.regex) {
            const rawValue = cleaveInstance.getRawValue();
            const regExp = new RegExp(instance.maskOptions.regex);
            return regExp.test(rawValue);
        } else {
            const regExp = new RegExp(regex);
            return regExp.test(value);
        }
    },
};
