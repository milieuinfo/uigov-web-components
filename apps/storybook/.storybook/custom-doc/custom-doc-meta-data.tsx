import { Markdown } from '@storybook/blocks';
import React from 'react';
import { ComponentMetaData } from '../component-meta-data/component-meta-data.model';
import componentsMetaData from '../component-meta-data/components.meta-data.json';

export const CustomDocMetaData = ({ id }) => {
    const componentMetaData = componentsMetaData[id] as ComponentMetaData;
    return componentMetaData ? (
        <vl-alert
            data-vl-icon="warning"
            data-vl-title={buildTitle(componentMetaData)}
            data-vl-type={buildType(componentMetaData)}
            data-vl-size="small"
        >
            <Markdown options={{ forceInline: true }} style={{ fontSize: '14px' }}>
                {buildText(componentMetaData)}
            </Markdown>
        </vl-alert>
    ) : null;
};

const buildType = (componentMetaData: ComponentMetaData): string => {
    switch (componentMetaData?.vStatus) {
        case 'replaced':
        case 'v1-replace':
        case 'v1-remove':
            return 'error';
        case 'v1-todo':
            return 'warning';
        case 'v2-next':
            return 'success';
        default:
            return 'info';
    }
};

const buildTitle = (componentMetaData: ComponentMetaData): string => {
    switch (componentMetaData?.vStatus) {
        case 'replaced':
        case 'v1-replace':
        case 'v1-remove':
        case 'v1-todo':
            return 'legacy-component';
        case 'v2-next':
            return 'next-component';
        default:
            return '';
    }
};

const buildText = (componentMetaData: ComponentMetaData): string => {
    switch (componentMetaData?.vStatus) {
        case 'replaced':
            return `De **${componentMetaData.legacyText}** is een legacy-component die vervangen is door
                    ${componentMetaData.nextText}.`;
        case 'v1-replace':
            return `De **${componentMetaData.legacyText}** is een legacy-component die vervangen wordt door
                    ${componentMetaData.nextText}, zie ${componentMetaData.planningInfo} voor bijkomende informatie.`;
        case 'v1-remove':
            return `De **${componentMetaData.legacyText}** is een legacy-component die geschrapt wordt in v2,
                    zie ${componentMetaData.planningInfo} voor meer informatie.`;
        case 'v1-todo':
            return `De **${componentMetaData.legacyText}** is een legacy-component die vervangen gaat worden door
                    een next-component, zie ${componentMetaData.planningInfo} voor de release waarin dat gepland is.`;
        case 'v2-next':
            return `De **${componentMetaData.nextText}** is een next-component die ${componentMetaData.legacyText}
                    vervangt, zie ${componentMetaData.planningInfo} voor bijkomende informatie.`;
        default:
            return '';
    }
};

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            'vl-alert': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}
