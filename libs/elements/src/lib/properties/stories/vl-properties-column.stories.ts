import { html } from 'lit-html';
import '../vl-properties.element';
import '../vl-properties-column.element';
import '../vl-properties-list.element';
import '../vl-property-term.element';
import '../vl-property-value.element';

export default {
    title: 'Elements/properties',
    args: { full: false, collapsed: false },
    argTypes: {
        full: {
            name: 'data-vl-full',
            type: { summary: 'boolean' },
            description:
                'Attribuut wordt gebruikt om de kolom de volledige breedte te laten innemen.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-collapsed',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        collapsed: {
            name: 'data-vl-collapsed',
            type: { summary: 'boolean' },
            description:
                'Zorgt ervoor dat labels en waarden op aparte lijnen afgebeeld worden.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-full',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
    },
};

interface PropertiesColumnArgs {
    full: string;
    collapsed: boolean;
}

export const propertiesColumn = ({ full, collapsed }: PropertiesColumnArgs) => html`
    <vl-properties data-cy="properties" ?data-vl-collapsed=${collapsed}>
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
    </vl-properties>
`;
propertiesColumn.storyName = 'vl-properties - column';
