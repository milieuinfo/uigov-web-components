export type Class<T = any> = new (...args: any[]) => T;

// FIXME: vindt een betere oplossing voor dit type ?
// - of type als unknown
// - of als de union type of BaseLitElement | new () => LitElement | Class ??
// gebruikt on registerWebComponents
export type WebComponent = any;
