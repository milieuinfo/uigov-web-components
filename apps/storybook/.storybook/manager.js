import { addons } from '@storybook/addons';
import theme from './voTheme';
import React from 'react';
import './storybook-styles.css';
import { SidebarLabel } from './blocks';

addons.setConfig({
    theme,
    enableShortcuts: false,
    sidebar: {
        renderLabel: (storyData) => <SidebarLabel storyData={storyData} />,
    },
});
