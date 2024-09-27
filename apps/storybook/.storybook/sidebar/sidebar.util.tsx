import { API_HashEntry } from '@storybook/types';
import React, { useEffect, useRef } from 'react';
import { ComponentMetaData } from '../component-meta-data/component-meta-data.model';
import componentsMetaData from '../component-meta-data/components.meta-data.json';

export const SidebarUpdateLabel = ({ storyData }: { storyData: API_HashEntry }) => {
    const { name = '', id = '' } = storyData;
    const inputRef = useRef(null);

    useEffect(() => {
        const input = inputRef.current;
        const componentMetaData = componentsMetaData[id] as ComponentMetaData;
        if (componentMetaData && componentMetaData.vStatus)
            input.parentElement.setAttribute('data-version', componentMetaData.vStatus);
    }, []);

    return <div ref={inputRef}>{name}</div>;
};
