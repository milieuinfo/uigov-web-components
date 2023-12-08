import { VlWizard } from '../';

const getLastElement = (element: string): InstanceType<typeof VlWizard> => {
    const [lastItem] = [...document.querySelectorAll(element)].slice(-1);

    return lastItem as VlWizard; // typecast <Element> to <VlWizard>, because we know lastItem is a <vl-wizard>
};

/**
 * @description Get last wizard, because storybook renders <vl-wizard> multiple times.
 * @returns {InstanceType<typeof VlWizard>}
 */
export const getWizard = () => getLastElement('vl-wizard');
