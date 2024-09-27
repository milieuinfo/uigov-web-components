import { useOf } from '@storybook/blocks';
import React from 'react';
import { CustomDocMetaData } from './custom-doc-meta-data';

export const CustomDocHeader = ({ of }) => {
    const storyData = useOf(of || 'story', ['story']);
    return (
        <div>
            <h1>{formatTitle(storyData?.story?.title)}</h1>
            <CustomDocMetaData id={storyData?.story?.componentId} />
        </div>
    );
};

const formatTitle = (title: string): string => {
    let endPart = title.split('/').pop() ?? '';
    const isNext = title.includes('-next');
    endPart = endPart
        .split('-')
        .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
        .join(' ');
    return isNext ? endPart + ' - next' : endPart;
};
