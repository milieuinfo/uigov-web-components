import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map.js';
import '../vl-tooltip.component';
import { tooltipArgs, tooltipArgTypes } from './vl-tooltip.stories-arg';

export default {
    title: 'Components/tooltip',
    tags: ['autodocs'],
    args: tooltipArgs,
    argTypes: tooltipArgTypes,
} as Meta<typeof tooltipArgs>;

export const tooltipDefault = ({ placement, tooltipContent, vlStatic }: typeof tooltipArgs) => {
    return html` <div
        style=${styleMap({
            display: 'flex',
            justifyContent: 'center',
            margin: '64px 124px',
        })}
    >
        <button is="vl-button">
            <vl-tooltip ?data-vl-static=${vlStatic} data-vl-placement=${placement}>${tooltipContent}</vl-tooltip>
            Tooltip
        </button>
    </div>`;
};
tooltipDefault.storyName = 'vl-tooltip - default';
tooltipDefault.argTypes = {
    vlStatic: {
        control: {
            disable: true,
        },
    },
};

export const tooltipStatic = ({ placement, tooltipContent, vlStatic }: typeof tooltipArgs) => {
    return html` <div
        style=${styleMap({
            border: '1px solid #e8ebee',
            padding: '1rem',
            margin: '64px 124px',
        })}
    >
        <vl-tooltip ?data-vl-static=${vlStatic} data-vl-placement=${placement}>${tooltipContent}</vl-tooltip>
    </div>`;
};
tooltipStatic.storyName = 'vl-tooltip - static';
tooltipStatic.args = { vlStatic: true };
