import { html } from 'lit-html';
import '../vl-steps.component';

export default {
    title: 'Components/steps',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const stepsDefault = () => html`
    <vl-steps id="vl-steps-1" data-cy="steps">
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

export const stepsWithAccordions = () => html`
    <vl-steps id="vl-steps-2" data-cy="steps-with-accordions">
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
    <vl-steps id="vl-steps-3" data-vl-timeline="" data-cy="steps-with-timeline">
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
