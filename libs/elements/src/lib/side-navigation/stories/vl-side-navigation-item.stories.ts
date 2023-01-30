import '../vl-side-navigation.element';

// TODO kspeltin: dit werkt niet (wat logisch is) want die 'parent' argTypes is niet stuurbaar
//  -> mogelijks is de parameter wel zinvol maar dan moet het op de default 'vl-side-navigation.stories.ts' komen
export default {
    title: 'Elements/vl-side-navigation/vl-side-navigation-item',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    argTypes: {
        parent: {
            name: 'data-vl-parent',
            type: { summary: 'string' },
            description:
                'Attribuut wordt gebruikt op de navigatie menu list elementen. De koppeling gebeurt via het `data-vl-child` attribuut van `vl-navigation-toggle`.',
            table: {
                defaultValue: { summary: `""` },
            },
            control: {
                disable: true,
            },
        },
    },
};

// export { sideNavigationDefault } from './vl-side-navigation.stories';
