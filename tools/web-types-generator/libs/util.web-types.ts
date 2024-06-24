import { ArgTypes } from '@storybook/web-components';
import { WTComponent } from '../web-types.model';

export const addWebTypes = (
    componentName: string,
    argTypes: ArgTypes,
    storiesDocFile: string,
    storybookPath: string
): WTComponent => {
    return {
        componentName,
        argTypes,
        storiesDocFile,
        storybookPath,
    };
};
