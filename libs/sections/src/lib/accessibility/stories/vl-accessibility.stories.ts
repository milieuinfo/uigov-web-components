import { html, nothing } from 'lit-html';
import '../vl-accessibility.section';
import { Meta, StoryFn } from '@storybook/web-components';
import accessibilityDoc from './vl-accessibility.stories-doc.mdx';
import { accessibilityArgs, accessibilityArgTypes } from './vl-accessibility.stories-arg';

// TODO kspeltin: deze commentaar was dode code, moet die ergens opgenomen worden ?
// const limitationsDescription = `<p>Attribuut om limitaties mee te geven aan de verklaring. De string die verwacht wordt is de <code>id</code> van een script dat aanwezig is op de pagina waarin een object zit.</p>
//
// Voorbeeld van zo'n object:
// <pre style="font-family: monospace;">{
//   withTiming: ['limitatie 1', 'limitatie 2'],
//   withoutTiming: ['limitatie 3'],
//   outsideApplicableLaw: ['limitatie 4']
// }</pre>
//
// <p>De <code>withTiming</code> limitaties vallen onder 'Niet-naleving van het bestuursdecreet'. Dit zijn tijdelijke limitaties.</p>
// <p>De <code>withoutTiming</code> limitaties vallen onder 'Onevenredige last'. Dit zijn permanente limitaties.</p>
// <p>De <code>outsideApplicableLaw</code> limitaties vallen onder 'De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving'. Dit zijn limitaties die buiten de werkingssfeer van de toepasselijke wetgeving vallen.</p>`;

export default {
    title: 'sections/accessibility',
    args: accessibilityArgs,
    argTypes: accessibilityArgTypes,
    parameters: {
        layout: 'fullscreen',
        docs: { page: accessibilityDoc },
    },
} as Meta<typeof accessibilityArgs>;

const Template: StoryFn<typeof accessibilityArgs> = ({
    application,
    compliance,
    date,
    dateModified,
    disableBackLink,
    evaluation,
    version,
    limitations,
    onClickBack,
}) => html`
    <vl-accessibility
        data-vl-application=${application || nothing}
        data-vl-compliance=${compliance || nothing}
        data-vl-date=${date || nothing}
        data-vl-date-modified=${dateModified || nothing}
        ?data-vl-disable-back-link=${disableBackLink}
        data-vl-evaluation=${evaluation || nothing}
        data-vl-version=${version || nothing}
        .limitations=${limitations}
        @vl-click-back=${onClickBack}
    ></vl-accessibility>
`;

export const AccessibilityDefault = Template.bind({});
AccessibilityDefault.storyName = 'vl-accessibility - default';
