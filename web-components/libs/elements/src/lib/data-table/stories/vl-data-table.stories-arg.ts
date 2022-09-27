export const dataTableArgs = {
    hover: false,
    matrix: false,
    grid: false,
    zebra: false,
    collapsedM: false,
    collapsedS: false,
    collapsedXS: false,
};

export const dataTableArgTypes = {
    hover: {
        name: 'data-vl-hover',
        description:
            'Attribuut wordt gebruikt om een rij te highlighten waneer de gebruiker erover hovert met muiscursor.',
        table: {
            category: 'Attributes',
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
    matrix: {
        name: 'data-vl-matrix',
        description:
            'Attribuut wordt gebruikt om data in 2 dimensies te tonen. Zowel de rijen als de kolommen krijgen een titel. Deze titels worden gescheiden door een dikke lijn.',
        table: {
            category: 'Attributes',
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
    grid: {
        name: 'data-vl-grid',
        description: 'Variant met een lijn tussen elke rij en kolom.',
        table: {
            category: 'Attributes',
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
    zebra: {
        name: 'data-vl-zebra',
        description:
            'Variant waarin de rijen afwisslend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar.',
        table: {
            category: 'Attributes',
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
    collapsedM: {
        name: 'data-vl-collapsed-m',
        description:
            'Vanaf een medium schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.',
        table: {
            category: 'Attributes',
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
    collapsedS: {
        name: 'data-vl-collapsed-s',
        description:
            'Vanaf een small schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.',
        table: {
            category: 'Attributes',
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
    collapsedXS: {
        name: 'data-vl-collapsed-xs',
        description:
            'Vanaf een extra small schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.',
        table: {
            category: 'Attributes',
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
};
