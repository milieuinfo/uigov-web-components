import {TYPES } from '@domg-wc/common-utilities';
import {Args} from "@storybook/web-components";
import {action} from "@storybook/addon-actions";


export const mapClickActionArgs: Args = {
    onClick: action('vl-click-map'),
};
export const mapClickActionArgTypes = {
    onClick: {
        name: 'onClick',
        type: { summary: TYPES.FUNCTION },
        description: `Callback function to be executed when the user clicks on the map. See action tab.`,
        control: false
    }
};
