import { addons } from '@storybook/addons';
import theme from './voTheme';
import React from 'react';
import { SidebarUpdateLabel } from './sidebar/sidebar.util';

addons.setConfig({
    theme,
    enableShortcuts: false,
    sidebar: {
        renderLabel: (storyData) => <SidebarUpdateLabel storyData={storyData} />,
    },
});
