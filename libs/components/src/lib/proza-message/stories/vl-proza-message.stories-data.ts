export const prozaMessageMockData = [
    {
        url: '/proza/domein/noneditable/inline',
        method: 'GET',
        status: 200,
        response: {
            code: 'inline',
            tekst: 'Inline',
        },
    },
    {
        url: '/proza/domein/noneditable/action',
        method: 'GET',
        status: 200,
        response: {
            code: 'action',
            tekst: 'Action',
        },
    },
    {
        url: '/proza/domein/noneditable/block',
        method: 'GET',
        status: 200,
        response: {
            code: 'block',
            tekst: `
        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. <b>Duis aute irure dolor</b> in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        `,
        },
    },
    {
        url: '/proza/domein/noneditable/toegelatenoperaties',
        method: 'GET',
        status: 200,
        response: {
            create: false,
            read: true,
            update: false,
            delete: false,
        },
    },
    {
        url: '/proza/domein/editable/inline',
        method: 'GET',
        status: 200,
        response: {
            code: 'inline',
            tekst: 'Inline',
        },
    },
    {
        url: '/proza/domein/editable/action',
        method: 'GET',
        status: 200,
        response: {
            code: 'action',
            tekst: 'Action',
        },
    },
    {
        url: '/proza/domein/editable/block',
        method: 'GET',
        status: 200,
        response: {
            code: 'block',
            tekst: `<div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. <b>Duis aute irure dolor</b> in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>`,
        },
    },
    {
        url: '/proza/domein/editable/toegelatenoperaties',
        method: 'GET',
        status: 200,
        response: {
            create: true,
            read: true,
            update: true,
            delete: true,
        },
    },
];
