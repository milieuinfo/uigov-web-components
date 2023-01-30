import '../vl-side-navigation.element';

// TODO kspeltin: dit werkt niet (wat logisch is) want die 'child' argTypes is niet stuurbaar
//  -> mogelijks is de parameter wel zinvol maar dan moet het op de default 'vl-side-navigation.stories.ts' komen
export default {
    title: 'Elements/vl-side-navigation/vl-side-navigation-toggle',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    argTypes: {
        child: {
            name: 'data-vl-child',
            type: { summary: 'string' },
            description:
                'Attribuut wordt gebruikt om aan te geven dat het een menu item is. De koppeling gebeurt via het `data-vl-parent` attribuut van `vl-navigation-item`.',
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
