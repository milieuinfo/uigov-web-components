import { html } from 'lit-html';
import '../vl-accessibility.section';
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
    parameters: {
        layout: 'fullscreen',
    },

    args: accessibilityArgs,
    argTypes: accessibilityArgTypes,
};

export const accessibilityDefault = ({
    application,
    version,
    date,
    dateModified,
    compliance,
    limitations,
    evaluation,
}: typeof accessibilityArgs) => {
    return html` <vl-accessibility
        data-vl-application=${application}
        data-vl-version=${version}
        data-vl-date=${date}
        data-vl-date-modified=${dateModified}
        data-vl-compliance=${compliance}
        data-vl-evaluation=${evaluation}
        .limitations=${limitations}
        data-cy="accessibility"
    ></vl-accessibility>`;
};
accessibilityDefault.storyName = 'vl-accessibility - default';
