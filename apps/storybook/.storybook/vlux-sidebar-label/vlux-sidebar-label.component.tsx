import { API_HashEntry } from '@storybook/types';
import React, { useEffect, useRef } from 'react';
import vluxMetaData from '../vlux-meta-data/vlux-meta-data.json';
import { VluxMetaDataModel } from '../vlux-meta-data/vlux-meta-data.model';

export const VluxSidebarLabel = ({ storyData }: { storyData: API_HashEntry }) => {
    const { name = '', id = '' } = storyData;
    const inputRef = useRef(null);

    useEffect(() => {
        const input = inputRef.current;
        const componentMetaData = vluxMetaData[id] as VluxMetaDataModel;
        if (componentMetaData && componentMetaData.vStatus)
            input.parentElement.setAttribute('data-version', componentMetaData.vStatus);
    }, []);

    return <div ref={inputRef}>{name}</div>;
};
