import React from 'react';

const Alert = ({
    children,
    title = 'Opgelet',
    icon = 'warning',
    type = 'error',
    size = 'small',
    naked = false,
    message = '',
}) => {
    return (
        <vl-alert
            data-cy="alert"
            data-vl-icon={icon}
            data-vl-title={title}
            data-vl-type={type}
            data-vl-size={size}
            data-vl-naked={naked ? '' : undefined}
            data-vl-message={message}
        >
            {children}
        </vl-alert>
    );
};

export default Alert;

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            'vl-alert': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}
