import { html } from 'lit-html';
import '../vl-properties.element';
import '../vl-properties-column.element';
import '../vl-properties-list.element';
import '../vl-property-term.element';
import '../vl-property-value.element';

export default {
    title: 'Elements/properties',
    args: { fullWidth: false },
    argTypes: {
        fullWidth: {
            name: 'data-vl-full-width',
            type: { summary: 'boolean' },
            description: 'Attribuut wordt gebruikt om de maximale breedte van het label te benutten.',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
    },
};

interface PropertiesArgs {
    fullWidth: string;
}

export const propertiesDefault = ({ fullWidth }: PropertiesArgs) => html` <vl-properties
    ?data-vl-full-width=${fullWidth}
    data-cy="properties"
>
    <h4 is="vl-h4">Gegevens</h4>
    <dl is="vl-properties-list" data-cy="properties-list">
        <dt is="vl-property-term" data-cy="property-term-1">Voornaam</dt>
        <dd is="vl-property-value" data-cy="property-value-1">Koen</dd>
        <dt is="vl-property-term" data-cy="property-term-2">Naam</dt>
        <dd is="vl-property-value" data-cy="property-value-2">Peeters</dd>
        <dt is="vl-property-term" data-cy="property-term-3">Geslacht</dt>
        <dd is="vl-property-value" data-cy="property-value-3">Man</dd>
    </dl>
</vl-properties>`;
propertiesDefault.storyName = 'vl-properties - default';
