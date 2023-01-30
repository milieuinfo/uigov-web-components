export const COMPLIANCE_STATUS = {
    FULLY_COMPLIANT: 'FULLY_COMPLIANT',
    PARTIALLY_COMPLIANT: 'PARTIALLY_COMPLIANT',
    NOT_COMPLIANT: 'NOT_COMPLIANT',
} as const;

export type COMPLIANCE_STATUS = typeof COMPLIANCE_STATUS[keyof typeof COMPLIANCE_STATUS];

export const EVALUATION_STATUS = {
    EXPERT_EVALUATED: 'EXPERT_EVALUATED',
    SELF_EVALUATED: 'SELF_EVALUATED',
    NOT_EVALUATED: 'NOT_EVALUATED',
} as const;

export type EVALUATION_STATUS = typeof EVALUATION_STATUS[keyof typeof EVALUATION_STATUS];

export interface AccessibilityStatus {
    complianceStatus: COMPLIANCE_STATUS;
    evaluationStatus: EVALUATION_STATUS;
}

export interface AccessibilityProperties extends AccessibilityStatus {
    version: string;
    application: string;
    limitations: any;
    date: string;
    dateModified: string;
}
