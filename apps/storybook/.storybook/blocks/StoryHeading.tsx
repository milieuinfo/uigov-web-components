import React from 'react';
import { Markdown, useOf } from '@storybook/blocks';
import { Alert } from './Alert';

/**
 * StoryHeading component
 * werking: Toont de titel van een story en behalve als deze "[deprecated]" bevat, dan toont het ook een Alert component.
 * @param of
 * @constructor
 */
export const StoryHeading = ({ of }) => {
    const storyData = useOf(of || 'story', ['story']);
    console.log('storyData', storyData);
    const formatComponentName = (name: string): string => {
        const trimDeprecated = name.replace(/\[deprecated\]/g, '');
        const lastPart = trimDeprecated.split('/').pop() ?? '';
        return lastPart
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };
    if (storyData?.story?.title.includes('[deprecated')) {
        const templateData = storyData?.story?.parameters?.templateData;
        const alertText = templateData?.alertText?.toString();
        return (
            <div>
                <h1>{formatComponentName(storyData?.story?.title)}</h1>
                <Alert title="Deprecated">
                    {templateData?.alertText ? alertText : 'In v2.0.0 verdwijnt deze component.'.toString()}
                </Alert>
            </div>
        );
    }
    return <h1>{formatComponentName(storyData?.story?.title)}</h1>;
};
