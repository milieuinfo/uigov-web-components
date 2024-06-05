import { addons } from '@storybook/addons';
import theme from './voTheme';
import React from 'react';

addons.setConfig({
    theme,
    enableShortcuts: false,
    sidebar: {
        renderLabel: (storyData) => {
            const { name, id, type, parameters = {} } = storyData;
            const statusRegex = /\[([^)]+)]/gi;
            const [statusMatch, statusType] = statusRegex.exec(name) || [];
            if (statusMatch && statusType === 'deprecated') {
                return (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            height: '16px',
                        }}
                    >
                        <div>{name.replace(statusMatch, '').trim()}</div>
                        <div
                            style={{
                                color: '#d83a52',
                                border: '1px solid #d83a52',
                                borderRadius: '0.3rem',
                                padding: '0.2rem 0.4rem',
                                marginRight: '1.6rem',
                            }}
                        >
                            Deprecated
                        </div>
                    </div>
                );
            } else {
                return null;
            }
        },
    },
});
