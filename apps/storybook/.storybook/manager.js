import { addons } from '@storybook/addons';
import theme from './voTheme';
import React from 'react';
import { VluxSidebarLabel } from './vlux-sidebar-label/vlux-sidebar-label.component';

addons.setConfig({
    theme,
    enableShortcuts: false,
    sidebar: {
        renderLabel: (storyData) => <VluxSidebarLabel storyData={storyData} />,
    },
});
