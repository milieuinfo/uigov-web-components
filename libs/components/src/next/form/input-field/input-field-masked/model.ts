export interface CleaveInstance {
    getRawValue(): string;
}

export interface MaskOptions {
    blocks?: number[];
    delimiter?: string;
    delimiters?: string[];
    prefix?: string;
    numericOnly?: boolean;
    numeral?: boolean;
    numeralPositiveOnly?: boolean;
    rawValueTrimPrefix?: boolean;
    numeralDecimalMark?: string;
    date?: boolean;
    datePattern?: string[];
    stripLeadingZeroes?: boolean;
    validationRegex?: RegExp;
    customTransformFn?: (value: string) => string;
}
