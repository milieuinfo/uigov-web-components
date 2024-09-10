import { ArgTypes } from '@storybook/web-components';
import { WTConfig } from '../web-types.model';

export const buildWTConfig = (
    componentName: string,
    argTypes: ArgTypes,
    storiesDocFile: string,
    storybookPath: string
): WTConfig => {
    return {
        componentName,
        argTypes,
        storiesDocFile,
        storybookPath,
    };
};
