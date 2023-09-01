import { html } from 'lit-html';
import '../vl-step.component';
import '../vl-steps.component';
import '../vl-duration-step.component';
import { stepsArgs, stepsArgTypes } from './vl-steps.stories-arg';
import { registerWebComponents } from '@domg-wc/common-utilities';
import {
    VlSideNavigation,
    VlSideNavigationToggleElement,
    VlSideNavigationContentElement,
    VlSideNavigationH5,
    VlSideNavigationItemElement,
    VlSideNavigationGroupElement,
    VlSideNavigationReferenceElement,
} from '@domg-wc/elements';
import { storyArgs, storyArgTypes } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';

registerWebComponents([
    VlSideNavigation,
    VlSideNavigationToggleElement,
    VlSideNavigationContentElement,
    VlSideNavigationH5,
    VlSideNavigationItemElement,
    VlSideNavigationGroupElement,
    VlSideNavigationReferenceElement,
]);

export default {
    title: 'Components/steps',
    args: storyArgs(stepsArgs),
    argTypes: storyArgTypes(stepsArgTypes),
    parameters: {
        controls: {
            hideNoControlsWarning: true,
        },
    },
} as Meta<typeof stepsArgs>;

export const stepsDefault = ({ timeline }: typeof stepsArgs) => html`
    <vl-steps id="vl-steps-1" ?data-vl-timeline=${timeline} data-cy="steps">
        <vl-step data-cy="step-1">
            <span slot="identifier">1</span>
            <span slot="title">Step 1: action</span>
            <span slot="sub-title">This is a subtitle.</span>
        </vl-step>
        <vl-step disabled="" data-cy="step-2">
            <span slot="identifier">2</span>
            <span slot="title">Step 2: action</span>
            <span slot="sub-title">This is a subtitle.</span>
        </vl-step>
        <vl-step type="success" data-cy="step-3">
            <span slot="identifier">3</span>
            <span slot="title">Step 3: action</span>
            <span slot="sub-title">This is a subtitle.</span>
        </vl-step>
        <vl-step type="warning" data-cy="step-4">
            <span slot="identifier">4</span>
            <span slot="title">Step 4: action</span>
            <span slot="sub-title">This is a subtitle.</span>
        </vl-step>
        <vl-step type="error" data-cy="step-5">
            <span slot="identifier">5</span>
            <span slot="title">Step 5: action</span>
            <span slot="sub-title">This is a subtitle.</span>
        </vl-step>
    </vl-steps>
`;
stepsDefault.storyName = 'vl-steps - default';

export const stepsWithAccordions = ({ timeline }: typeof stepsArgs) => html`
    <vl-steps id="vl-steps-2" ?data-vl-timeline=${timeline} data-cy="steps-with-accordions">
        <vl-step data-vl-disabled="">
            <span slot="identifier">0</span>
            <span slot="title">Six centuries ago</span>
            <span slot="sub-title">The last visitor from earth entered my world.</span>
            <span slot="content"> Now, it's your turn to feel that pain. The gates are open. </span>
        </vl-step>
        <vl-step data-vl-toggleable="" data-cy="toggable-step-1">
            <span slot="identifier">1</span>
            <span slot="title">Gate 1</span>
            <span slot="content"> Darkness, the world of demons. Look around you, they're everywhere. </span>
        </vl-step>
        <vl-step data-vl-toggleable="" data-cy="toggable-step-2">
            <span slot="identifier">2</span>
            <span slot="title">Gate 2</span>
            <span slot="content"> My guards are watching you. </span>
        </vl-step>
        <vl-step data-vl-toggleable="" data-cy="toggable-step-3">
            <span slot="identifier">3</span>
            <span slot="title">Gate 3</span>
            <span slot="content"> Only evil lives here. </span>
        </vl-step>
        <vl-step data-vl-toggleable="" data-cy="toggable-step-4">
            <span slot="identifier">4</span>
            <span slot="title">Gate 4</span>
            <span slot="content"> There's no way out. </span>
        </vl-step>
        <vl-step data-vl-toggleable="" data-cy="toggable-step-5">
            <span slot="identifier">5</span>
            <span slot="title">Gate 5</span>
            <span slot="content"> Feel the fire. </span>
        </vl-step>
    </vl-steps>
`;
stepsWithAccordions.storyName = 'vl-steps - with accordions';

export const stepsWithTimeline = () => html`
    <vl-steps id="vl-steps-3" data-vl-timeline data-cy="steps-with-timeline">
        <vl-step data-cy="timeline-step-1">
            <span slot="identifier">2</span>
            <span slot="identifier-annotation">maa</span>
            <span slot="title">Central Station</span>
            <span slot="title-annotation">13u00 - 15u00</span>
            <span slot="sub-title">The most beautiful train station in the world</span>
            <span slot="content">
                The Antwerp Central Station, chosen by DK magazine as the most beautiful manmade object, is the perfect
                starting point for any trip to Antwerp. The Central Station has been drawn by Da Vinci himself in 200 BC
                and built by 10 000 laborers from all over the world. <br />
                Described by Caesar as the bravest building of all buildings, the unique architecture is perfectly
                maintained and keeps dazzling archaeologists.
            </span>
        </vl-step>
        <vl-duration-step data-cy="timeline-duration-step-1"> Vrije tijd: 1 uur</vl-duration-step>
        <vl-step data-cy="timeline-step-2">
            <span slot="identifier">3</span>
            <span slot="identifier-annotation">maa</span>
            <span slot="title">The Botanical Gardens</span>
            <span slot="sub-title">A green oasis in a bustling city</span>
            <span slot="content">
                The Royal Botanical Gardens in Antwerp is a massive botanical garden in the center of the city. These
                gardens are ideal to stroll around, take a breather from everyday life or go for a leisurly walk, all of
                this on less than 500m from the city center.
            </span>
        </vl-step>
        <vl-duration-step data-cy="timeline-duration-step-2"> Vrije tijd: 2 uur</vl-duration-step>
        <vl-step data-vl-disabled="" data-cy="timeline-step-3">
            <span slot="identifier">3</span>
            <span slot="identifier-annotation">maa</span>
            <span slot="title">Bike ride</span>
            <span slot="title-annotation">22u00 - 23u00</span>
            <span slot="sub-title">Linkeroever</span>
            <span slot="content"> This activity is canceled. </span>
        </vl-step>
        <vl-step data-vl-type="success" data-cy="timeline-step-4">
            <span slot="identifier">3</span>
            <span slot="identifier-annotation">maa</span>
            <span slot="title">Bike ride</span>
            <span slot="title-annotation">22u00 - 23u00</span>
            <span slot="sub-title">Linkeroever</span>
            <span slot="content"> This activity is new! </span>
        </vl-step>
        <vl-step data-vl-type="warning" data-cy="timeline-step-5">
            <span slot="identifier">3</span>
            <span slot="identifier-annotation">maa</span>
            <span slot="title">Bike ride</span>
            <span slot="title-annotation">22u00 - 23u00</span>
            <span slot="sub-title">Linkeroever</span>
            <span slot="content"> This activity is almost fully booked. </span>
        </vl-step>
        <vl-step data-vl-type="error" data-cy="timeline-step-6">
            <span slot="identifier">3</span>
            <span slot="identifier-annotation">maa</span>
            <span slot="title">Bike ride</span>
            <span slot="title-annotation">22u00 - 23u00</span>
            <span slot="sub-title">Linkeroever</span>
            <span slot="content"> This activity is canceled. </span>
        </vl-step>
    </vl-steps>
`;
stepsWithTimeline.storyName = 'vl-steps - with timeline';

export const stepsWithSideNavigation = ({ timeline }: typeof stepsArgs) => html`
    <section is="vl-region">
        <div is="vl-layout">
            <div is="vl-grid" data-vl-is-stacked>
                <div
                    is="vl-column"
                    data-vl-size="8"
                    data-vl-medium-size="8"
                    data-vl-small-size="8"
                    data-vl-extra-small-size="12"
                >
                    <div is="vl-side-navigation-reference">
                        <vl-steps id="vl-steps-4" ?data-vl-timeline=${timeline} data-cy="steps-with-side-navigation">
                            <vl-step data-cy="step-1">
                                <span slot="identifier">1</span>
                                <span id="vl-steps-4-step-1" slot="title">Step 1: action</span>
                                <div slot="content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Facilisis gravida neque convallis a cras semper auctor. Condimentum mattis
                                        pellentesque id nibh tortor. Tortor at auctor urna nunc id. Facilisi nullam
                                        vehicula ipsum a arcu cursus vitae congue mauris. Adipiscing at in tellus
                                        integer feugiat scelerisque varius. Amet volutpat consequat mauris nunc congue
                                        nisi vitae suscipit tellus. Quisque sagittis purus sit amet. Neque egestas
                                        congue quisque egestas diam. Tincidunt lobortis feugiat vivamus at augue eget
                                        arcu. Dolor purus non enim praesent. Odio euismod lacinia at quis risus sed
                                        vulputate odio ut. Tempor id eu nisl nunc mi ipsum. Quam elementum pulvinar
                                        etiam non quam lacus suspendisse faucibus. Quam lacus suspendisse faucibus
                                        interdum. Eu nisl nunc mi ipsum faucibus vitae. Aliquet risus feugiat in ante.
                                        Quam vulputate dignissim suspendisse in est ante in nibh.
                                    </p>
                                    <p>
                                        Donec et odio pellentesque diam volutpat commodo. Lorem dolor sed viverra ipsum
                                        nunc aliquet bibendum enim facilisis. Proin nibh nisl condimentum id venenatis a
                                        condimentum. Nulla at volutpat diam ut. Metus aliquam eleifend mi in nulla
                                        posuere sollicitudin aliquam. Egestas quis ipsum suspendisse ultrices gravida
                                        dictum fusce. Dolor purus non enim praesent elementum facilisis leo vel
                                        fringilla. Nisi lacus sed viverra tellus in. Pulvinar mattis nunc sed blandit
                                        libero volutpat sed cras ornare. Metus vulputate eu scelerisque felis. Posuere
                                        ac ut consequat semper viverra nam libero justo laoreet. Viverra aliquet eget
                                        sit amet tellus cras.
                                    </p>
                                    <p>
                                        Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Dui nunc
                                        mattis enim ut tellus elementum sagittis. Cursus turpis massa tincidunt dui.
                                        Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Ipsum
                                        suspendisse ultrices gravida dictum fusce ut. In hendrerit gravida rutrum
                                        quisque non tellus orci. Sed risus pretium quam vulputate dignissim. Sociis
                                        natoque penatibus et magnis dis. Nec ultrices dui sapien eget mi proin sed
                                        libero. Tempus egestas sed sed risus pretium quam vulputate dignissim. In
                                        fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sed lectus
                                        vestibulum mattis ullamcorper velit sed ullamcorper morbi. Risus pretium quam
                                        vulputate dignissim. Dictum varius duis at consectetur lorem donec massa sapien
                                        faucibus. Dolor sit amet consectetur adipiscing. Egestas erat imperdiet sed
                                        euismod. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.
                                    </p>
                                    <p>
                                        Commodo nulla facilisi nullam vehicula ipsum. Ultrices dui sapien eget mi. Sed
                                        risus ultricies tristique nulla aliquet enim tortor. Vestibulum morbi blandit
                                        cursus risus. Lobortis scelerisque fermentum dui faucibus in. Mauris rhoncus
                                        aenean vel elit. Sociis natoque penatibus et magnis dis parturient montes
                                        nascetur ridiculus. Fermentum et sollicitudin ac orci phasellus. Lacus
                                        vestibulum sed arcu non odio. Morbi enim nunc faucibus a pellentesque sit amet
                                        porttitor. A pellentesque sit amet porttitor eget dolor morbi non. Purus in
                                        massa tempor nec.
                                    </p>
                                    <p />
                                </div>
                            </vl-step>
                            <vl-step data-cy="step-2">
                                <span slot="identifier">2</span>
                                <span id="vl-steps-4-step-2" slot="title">Step 2: action</span>
                                <div slot="content">
                                    <h3 id="vl-steps-4-step-2-abstract" data-cy="step-2-abstract">Abstract</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Facilisis gravida neque convallis a cras semper auctor. Condimentum mattis
                                        pellentesque id nibh tortor. Tortor at auctor urna nunc id. Facilisi nullam
                                        vehicula ipsum a arcu cursus vitae congue mauris. Adipiscing at in tellus
                                        integer feugiat scelerisque varius. Amet volutpat consequat mauris nunc congue
                                        nisi vitae suscipit tellus. Quisque sagittis purus sit amet. Neque egestas
                                        congue quisque egestas diam. Tincidunt lobortis feugiat vivamus at augue eget
                                        arcu. Dolor purus non enim praesent. Odio euismod lacinia at quis risus sed
                                        vulputate odio ut. Tempor id eu nisl nunc mi ipsum. Quam elementum pulvinar
                                        etiam non quam lacus suspendisse faucibus. Quam lacus suspendisse faucibus
                                        interdum. Eu nisl nunc mi ipsum faucibus vitae. Aliquet risus feugiat in ante.
                                        Quam vulputate dignissim suspendisse in est ante in nibh.
                                    </p>
                                    <p>
                                        Donec et odio pellentesque diam volutpat commodo. Lorem dolor sed viverra ipsum
                                        nunc aliquet bibendum enim facilisis. Proin nibh nisl condimentum id venenatis a
                                        condimentum. Nulla at volutpat diam ut. Metus aliquam eleifend mi in nulla
                                        posuere sollicitudin aliquam. Egestas quis ipsum suspendisse ultrices gravida
                                        dictum fusce. Dolor purus non enim praesent elementum facilisis leo vel
                                        fringilla. Nisi lacus sed viverra tellus in. Pulvinar mattis nunc sed blandit
                                        libero volutpat sed cras ornare. Metus vulputate eu scelerisque felis. Posuere
                                        ac ut consequat semper viverra nam libero justo laoreet. Viverra aliquet eget
                                        sit amet tellus cras.
                                    </p>
                                    <p>
                                        Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Dui nunc
                                        mattis enim ut tellus elementum sagittis. Cursus turpis massa tincidunt dui.
                                        Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Ipsum
                                        suspendisse ultrices gravida dictum fusce ut. In hendrerit gravida rutrum
                                        quisque non tellus orci. Sed risus pretium quam vulputate dignissim. Sociis
                                        natoque penatibus et magnis dis. Nec ultrices dui sapien eget mi proin sed
                                        libero. Tempus egestas sed sed risus pretium quam vulputate dignissim. In
                                        fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sed lectus
                                        vestibulum mattis ullamcorper velit sed ullamcorper morbi. Risus pretium quam
                                        vulputate dignissim. Dictum varius duis at consectetur lorem donec massa sapien
                                        faucibus. Dolor sit amet consectetur adipiscing. Egestas erat imperdiet sed
                                        euismod. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.
                                    </p>
                                    <p>
                                        Commodo nulla facilisi nullam vehicula ipsum. Ultrices dui sapien eget mi. Sed
                                        risus ultricies tristique nulla aliquet enim tortor. Vestibulum morbi blandit
                                        cursus risus. Lobortis scelerisque fermentum dui faucibus in. Mauris rhoncus
                                        aenean vel elit. Sociis natoque penatibus et magnis dis parturient montes
                                        nascetur ridiculus. Fermentum et sollicitudin ac orci phasellus. Lacus
                                        vestibulum sed arcu non odio. Morbi enim nunc faucibus a pellentesque sit amet
                                        porttitor. A pellentesque sit amet porttitor eget dolor morbi non. Purus in
                                        massa tempor nec.
                                    </p>
                                    <p />

                                    <h3 id="vl-steps-4-step-2-volledig" data-cy="step-2-volledig">Volledig</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Facilisis gravida neque convallis a cras semper auctor. Condimentum mattis
                                        pellentesque id nibh tortor. Tortor at auctor urna nunc id. Facilisi nullam
                                        vehicula ipsum a arcu cursus vitae congue mauris. Adipiscing at in tellus
                                        integer feugiat scelerisque varius. Amet volutpat consequat mauris nunc congue
                                        nisi vitae suscipit tellus. Quisque sagittis purus sit amet. Neque egestas
                                        congue quisque egestas diam. Tincidunt lobortis feugiat vivamus at augue eget
                                        arcu. Dolor purus non enim praesent. Odio euismod lacinia at quis risus sed
                                        vulputate odio ut. Tempor id eu nisl nunc mi ipsum. Quam elementum pulvinar
                                        etiam non quam lacus suspendisse faucibus. Quam lacus suspendisse faucibus
                                        interdum. Eu nisl nunc mi ipsum faucibus vitae. Aliquet risus feugiat in ante.
                                        Quam vulputate dignissim suspendisse in est ante in nibh.
                                    </p>
                                    <p>
                                        Donec et odio pellentesque diam volutpat commodo. Lorem dolor sed viverra ipsum
                                        nunc aliquet bibendum enim facilisis. Proin nibh nisl condimentum id venenatis a
                                        condimentum. Nulla at volutpat diam ut. Metus aliquam eleifend mi in nulla
                                        posuere sollicitudin aliquam. Egestas quis ipsum suspendisse ultrices gravida
                                        dictum fusce. Dolor purus non enim praesent elementum facilisis leo vel
                                        fringilla. Nisi lacus sed viverra tellus in. Pulvinar mattis nunc sed blandit
                                        libero volutpat sed cras ornare. Metus vulputate eu scelerisque felis. Posuere
                                        ac ut consequat semper viverra nam libero justo laoreet. Viverra aliquet eget
                                        sit amet tellus cras.
                                    </p>
                                    <p>
                                        Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Dui nunc
                                        mattis enim ut tellus elementum sagittis. Cursus turpis massa tincidunt dui.
                                        Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Ipsum
                                        suspendisse ultrices gravida dictum fusce ut. In hendrerit gravida rutrum
                                        quisque non tellus orci. Sed risus pretium quam vulputate dignissim. Sociis
                                        natoque penatibus et magnis dis. Nec ultrices dui sapien eget mi proin sed
                                        libero. Tempus egestas sed sed risus pretium quam vulputate dignissim. In
                                        fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sed lectus
                                        vestibulum mattis ullamcorper velit sed ullamcorper morbi. Risus pretium quam
                                        vulputate dignissim. Dictum varius duis at consectetur lorem donec massa sapien
                                        faucibus. Dolor sit amet consectetur adipiscing. Egestas erat imperdiet sed
                                        euismod. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.
                                    </p>
                                    <p>
                                        Commodo nulla facilisi nullam vehicula ipsum. Ultrices dui sapien eget mi. Sed
                                        risus ultricies tristique nulla aliquet enim tortor. Vestibulum morbi blandit
                                        cursus risus. Lobortis scelerisque fermentum dui faucibus in. Mauris rhoncus
                                        aenean vel elit. Sociis natoque penatibus et magnis dis parturient montes
                                        nascetur ridiculus. Fermentum et sollicitudin ac orci phasellus. Lacus
                                        vestibulum sed arcu non odio. Morbi enim nunc faucibus a pellentesque sit amet
                                        porttitor. A pellentesque sit amet porttitor eget dolor morbi non. Purus in
                                        massa tempor nec.
                                    </p>
                                    <p />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Facilisis gravida neque convallis a cras semper auctor. Condimentum mattis
                                        pellentesque id nibh tortor. Tortor at auctor urna nunc id. Facilisi nullam
                                        vehicula ipsum a arcu cursus vitae congue mauris. Adipiscing at in tellus
                                        integer feugiat scelerisque varius. Amet volutpat consequat mauris nunc congue
                                        nisi vitae suscipit tellus. Quisque sagittis purus sit amet. Neque egestas
                                        congue quisque egestas diam. Tincidunt lobortis feugiat vivamus at augue eget
                                        arcu. Dolor purus non enim praesent. Odio euismod lacinia at quis risus sed
                                        vulputate odio ut. Tempor id eu nisl nunc mi ipsum. Quam elementum pulvinar
                                        etiam non quam lacus suspendisse faucibus. Quam lacus suspendisse faucibus
                                        interdum. Eu nisl nunc mi ipsum faucibus vitae. Aliquet risus feugiat in ante.
                                        Quam vulputate dignissim suspendisse in est ante in nibh.
                                    </p>
                                    <p>
                                        Donec et odio pellentesque diam volutpat commodo. Lorem dolor sed viverra ipsum
                                        nunc aliquet bibendum enim facilisis. Proin nibh nisl condimentum id venenatis a
                                        condimentum. Nulla at volutpat diam ut. Metus aliquam eleifend mi in nulla
                                        posuere sollicitudin aliquam. Egestas quis ipsum suspendisse ultrices gravida
                                        dictum fusce. Dolor purus non enim praesent elementum facilisis leo vel
                                        fringilla. Nisi lacus sed viverra tellus in. Pulvinar mattis nunc sed blandit
                                        libero volutpat sed cras ornare. Metus vulputate eu scelerisque felis. Posuere
                                        ac ut consequat semper viverra nam libero justo laoreet. Viverra aliquet eget
                                        sit amet tellus cras.
                                    </p>
                                    <p>
                                        Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Dui nunc
                                        mattis enim ut tellus elementum sagittis. Cursus turpis massa tincidunt dui.
                                        Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Ipsum
                                        suspendisse ultrices gravida dictum fusce ut. In hendrerit gravida rutrum
                                        quisque non tellus orci. Sed risus pretium quam vulputate dignissim. Sociis
                                        natoque penatibus et magnis dis. Nec ultrices dui sapien eget mi proin sed
                                        libero. Tempus egestas sed sed risus pretium quam vulputate dignissim. In
                                        fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sed lectus
                                        vestibulum mattis ullamcorper velit sed ullamcorper morbi. Risus pretium quam
                                        vulputate dignissim. Dictum varius duis at consectetur lorem donec massa sapien
                                        faucibus. Dolor sit amet consectetur adipiscing. Egestas erat imperdiet sed
                                        euismod. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.
                                    </p>
                                    <p>
                                        Commodo nulla facilisi nullam vehicula ipsum. Ultrices dui sapien eget mi. Sed
                                        risus ultricies tristique nulla aliquet enim tortor. Vestibulum morbi blandit
                                        cursus risus. Lobortis scelerisque fermentum dui faucibus in. Mauris rhoncus
                                        aenean vel elit. Sociis natoque penatibus et magnis dis parturient montes
                                        nascetur ridiculus. Fermentum et sollicitudin ac orci phasellus. Lacus
                                        vestibulum sed arcu non odio. Morbi enim nunc faucibus a pellentesque sit amet
                                        porttitor. A pellentesque sit amet porttitor eget dolor morbi non. Purus in
                                        massa tempor nec.
                                    </p>
                                    <p />
                                </div>
                            </vl-step>
                            <vl-step data-cy="step-3">
                                <span slot="identifier">3</span>
                                <span id="vl-steps-4-step-3" slot="title">Step 3: action</span>
                                <div slot="content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada
                                        nunc vel risus commodo viverra maecenas accumsan lacus. Pretium lectus quam id
                                        leo in vitae. Dictum at tempor commodo ullamcorper a lacus. Facilisis gravida
                                        neque convallis a cras. Ut porttitor leo a diam sollicitudin tempor. Augue ut
                                        lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas
                                        maecenas pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                        Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac felis
                                        donec. Elit pellentesque habitant morbi tristique senectus et netus et.
                                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor consequat
                                        id porta nibh venenatis cras.
                                    </p>
                                    <p>
                                        Facilisis gravida neque convallis a cras semper auctor. Condimentum mattis
                                        pellentesque id nibh tortor. Tortor at auctor urna nunc id. Facilisi nullam
                                        vehicula ipsum a arcu cursus vitae congue mauris. Adipiscing at in tellus
                                        integer feugiat scelerisque varius. Amet volutpat consequat mauris nunc congue
                                        nisi vitae suscipit tellus. Quisque sagittis purus sit amet. Neque egestas
                                        congue quisque egestas diam. Tincidunt lobortis feugiat vivamus at augue eget
                                        arcu. Dolor purus non enim praesent. Odio euismod lacinia at quis risus sed
                                        vulputate odio ut. Tempor id eu nisl nunc mi ipsum. Quam elementum pulvinar
                                        etiam non quam lacus suspendisse faucibus. Quam lacus suspendisse faucibus
                                        interdum. Eu nisl nunc mi ipsum faucibus vitae. Aliquet risus feugiat in ante.
                                        Quam vulputate dignissim suspendisse in est ante in nibh.
                                    </p>
                                    <p>
                                        Donec et odio pellentesque diam volutpat commodo. Lorem dolor sed viverra ipsum
                                        nunc aliquet bibendum enim facilisis. Proin nibh nisl condimentum id venenatis a
                                        condimentum. Nulla at volutpat diam ut. Metus aliquam eleifend mi in nulla
                                        posuere sollicitudin aliquam. Egestas quis ipsum suspendisse ultrices gravida
                                        dictum fusce. Dolor purus non enim praesent elementum facilisis leo vel
                                        fringilla. Nisi lacus sed viverra tellus in. Pulvinar mattis nunc sed blandit
                                        libero volutpat sed cras ornare. Metus vulputate eu scelerisque felis. Posuere
                                        ac ut consequat semper viverra nam libero justo laoreet. Viverra aliquet eget
                                        sit amet tellus cras.
                                    </p>
                                    <p>
                                        Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Dui nunc
                                        mattis enim ut tellus elementum sagittis. Cursus turpis massa tincidunt dui.
                                        Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Ipsum
                                        suspendisse ultrices gravida dictum fusce ut. In hendrerit gravida rutrum
                                        quisque non tellus orci. Sed risus pretium quam vulputate dignissim. Sociis
                                        natoque penatibus et magnis dis. Nec ultrices dui sapien eget mi proin sed
                                        libero. Tempus egestas sed sed risus pretium quam vulputate dignissim. In
                                        fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sed lectus
                                        vestibulum mattis ullamcorper velit sed ullamcorper morbi. Risus pretium quam
                                        vulputate dignissim. Dictum varius duis at consectetur lorem donec massa sapien
                                        faucibus. Dolor sit amet consectetur adipiscing. Egestas erat imperdiet sed
                                        euismod. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.
                                    </p>
                                    <p>
                                        Commodo nulla facilisi nullam vehicula ipsum. Ultrices dui sapien eget mi. Sed
                                        risus ultricies tristique nulla aliquet enim tortor. Vestibulum morbi blandit
                                        cursus risus. Lobortis scelerisque fermentum dui faucibus in. Mauris rhoncus
                                        aenean vel elit. Sociis natoque penatibus et magnis dis parturient montes
                                        nascetur ridiculus. Fermentum et sollicitudin ac orci phasellus. Lacus
                                        vestibulum sed arcu non odio. Morbi enim nunc faucibus a pellentesque sit amet
                                        porttitor. A pellentesque sit amet porttitor eget dolor morbi non. Purus in
                                        massa tempor nec.
                                    </p>
                                    <p />
                                </div>
                            </vl-step>
                        </vl-steps>
                    </div>
                </div>
                <div
                    is="vl-column"
                    data-vl-size="3"
                    data-vl-medium-size="3"
                    data-vl-small-size="3"
                    data-vl-extra-small-size="0"
                >
                    <nav is="vl-side-navigation" aria-label="inhoudsopgave">
                        <h5 is="vl-side-navigation-h5">Op deze pagina</h5>
                        <div is="vl-side-navigation-content">
                            <ul is="vl-side-navigation-group">
                                <li is="vl-side-navigation-item">
                                    <a is="vl-side-navigation-toggle" href="#vl-steps-4-step-1">
                                        step 1
                                        <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                    </a>
                                </li>
                                <li is="vl-side-navigation-item" data-vl-parent="step-2">
                                    <a is="vl-side-navigation-toggle" href="#vl-steps-4-step-2" data-vl-child="step-2">
                                        step 2
                                        <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                    </a>
                                    <ul>
                                        <li is="vl-side-navigation-item">
                                            <div>
                                                <a href="#vl-steps-4-step-2-abstract" data-vl-parent="step-2"
                                                    >Abstract</a
                                                >
                                            </div>
                                        </li>
                                        <li is="vl-side-navigation-item">
                                            <div>
                                                <a href="#vl-steps-4-step-2-volledig" data-vl-parent="step-2"
                                                    >Volledig</a
                                                >
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li is="vl-side-navigation-item">
                                    <a is="vl-side-navigation-toggle" href="#vl-steps-4-step-3">
                                        step 3
                                        <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </section>
`;
stepsWithSideNavigation.storyName = 'vl-steps - with vl-side-navigation';
