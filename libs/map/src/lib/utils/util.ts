import { action } from '@storybook/addon-actions';

// Logt het event in zowel in Storybook als in de developer console.
// Logt het event in de developer console omdat in Storybook custom event properties soms niet gelogd worden.
export const logStorybookEvent = <T extends Event>(eventName: string) => {
    return (event: T) => {
        if (!event) return;

        console.log(event);
        action(eventName)(event);
    };
};
