export const ComplianceStatus = {
    FULLY_COMPLIANT: 'FULLY_COMPLIANT',
    PARTIALLY_COMPLIANT: 'PARTIALLY_COMPLIANT',
    NOT_COMPLIANT: 'NOT_COMPLIANT',
} as const;

export type ComplianceStatus = typeof ComplianceStatus[keyof typeof ComplianceStatus];

export const EvaluationStatus = {
    EXPERT_EVALUATED: 'EXPERT_EVALUATED',
    SELF_EVALUATED: 'SELF_EVALUATED',
    NOT_EVALUATED: 'NOT_EVALUATED',
};

export type EvaluationStatus = typeof EvaluationStatus[keyof typeof EvaluationStatus];

export interface AccessibilityStatus {
    complianceStatus: ComplianceStatus;
    evaluationStatus: EvaluationStatus;
}
