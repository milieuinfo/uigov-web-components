import React from 'react';
import { API_HashEntry } from '@storybook/types';

export const SidebarLabel = ({ storyData }: { storyData: API_HashEntry }) => {
    const { name } = storyData;
    const statusRegex = /\[([^)]+)]/gi;
    const [statusMatch, statusType] = statusRegex.exec(name) || [];

    if (statusMatch && statusType.toLowerCase() === 'deprecated') {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <div>{name.replace(statusMatch, '').trim()}</div>
                <div
                    style={{
                        color: 'rgb(210, 55, 60)',
                        // border: '1px solid #d83a52',
                        // borderRadius: '0.3rem',
                        padding: '0.1rem 0.4rem',
                        marginRight: '1.6rem',
                    }}
                >
                    Deprecated
                </div>
            </div>
        );
    }

    return <>{name}</>;
};
