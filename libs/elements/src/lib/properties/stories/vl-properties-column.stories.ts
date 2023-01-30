import { html } from 'lit-html';
import '../vl-properties.element';
import '../vl-properties-column.element';
import '../vl-properties-list.element';
import '../vl-property-term.element';
import '../vl-property-value.element';

export default {
    title: 'Elements/properties',
    args: { full: false },
    argTypes: {
        full: {
            name: 'data-vl-full',
            type: { summary: 'boolean' },
            description: 'Attribuut wordt gebruikt om de kolom de volledige breedte te laten innemen.',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
    },
};

interface PropertiesColumnArgs {
    full: string;
}

export const propertiesColumn = ({ full }: PropertiesColumnArgs) => html` <vl-properties data-cy="properties">
    <h4 is="vl-h4">Gegevens</h4>
    <div is="vl-properties-column" ?data-vl-full=${full} data-cy="properties-column-1">
        <dl is="vl-properties-list">
            <dt is="vl-property-term" data-cy="property-term-1">Voornaam</dt>
            <dd is="vl-property-value" data-cy="property-value-1">Koen</dd>
            <dt is="vl-property-term" data-cy="property-term-2">Naam</dt>
            <dd is="vl-property-value" data-cy="property-value-2">Peeters</dd>
            <dt is="vl-property-term" data-cy="property-term-3">Geslacht</dt>
            <dd is="vl-property-value" data-cy="property-value-3">Man</dd>
        </dl>
    </div>
    <div is="vl-properties-column" ?data-vl-full=${full} data-cy="properties-column-2">
        <dl is="vl-properties-list">
            <dt is="vl-property-term" data-cy="property-term-4">Telefoon</dt>
            <dd is="vl-property-value" data-cy="property-value-4">000/00.00.00</dd>
            <dt is="vl-property-term" data-cy="property-term-5">Gsm-nummer</dt>
            <dd is="vl-property-value" data-cy="property-value-5">000/00.00.00</dd>
            <dt is="vl-property-term" data-cy="property-term-6">E-mailadres</dt>
            <dd is="vl-property-value" data-cy="property-value-6">koen.peeters@outlook.be</dd>
        </dl>
    </div>
</vl-properties>`;
propertiesColumn.storyName = 'vl-properties - column';
