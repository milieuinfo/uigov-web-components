export const CATEGORIES = {
    ATTRIBUTES: 'Attributes',
    PROPERTIES: 'Properties',
    EVENTS: 'Events',
    SLOTS: 'Slots',
    CHILD_ATTRIBUTES: 'Child attributes',
};

export const TYPES = {
    BOOLEAN: 'boolean',
    STRING: 'string',
    NUMBER: 'number',
    HTML: 'html',
    URL: 'url',
    FUNCTION: 'function',
};

export const filterOutClasses = (input: string) => {
    return input?.replace(/ class=".*"/, '');
};
