import React from 'react';

const Deprecated = ({ children, title = 'Deprecated', icon = 'warning', type = 'error', size = 'small' }) => {
    //*
    return (
        <vl-alert data-cy="alert" data-vl-icon={icon} data-vl-title={title} data-vl-type={type} data-vl-size={size}>
            {children}
        </vl-alert>
    );
    // */
    /* old deprecated style
    return (
        <span style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            <span style={{ marginRight: '4px', fontSize: '14px' }}>&#x2757;DEPRECATED:</span>
            <span>{children}</span>
        </span>
    );
     */
};

export default Deprecated;

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            'vl-alert': any;
        }
    }
}
