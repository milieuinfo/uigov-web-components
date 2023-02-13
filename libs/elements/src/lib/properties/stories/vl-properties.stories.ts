import { html } from 'lit-html';
import '../vl-properties.element';
import '../vl-properties-column.element';
import '../vl-properties-list.element';
import '../vl-property-term.element';
import '../vl-property-value.element';

export default {
    title: 'Elements/properties',
    args: { fullWidth: false, collapsed: false },
    argTypes: {
        fullWidth: {
            name: 'data-vl-full-width',
            type: { summary: 'boolean' },
            description:
                'Attribuut wordt gebruikt om de maximale breedte van het label te benutten.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-collapsed',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        collapsed: {
            name: 'data-vl-collapsed',
            type: { summary: 'boolean' },
            description:
                'Zorgt ervoor dat labels en waarden op aparte lijnen afgebeeld worden.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-full-width',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
    },
};

interface PropertiesArgs {
    fullWidth: boolean;
    collapsed: boolean;
}

export const propertiesDefault = ({ fullWidth, collapsed }: PropertiesArgs) => html`
    <vl-properties ?data-vl-full-width=${fullWidth} ?data-vl-collapsed=${collapsed}>
        <h4 is="vl-h4">Gegevens</h4>
        <dl is="vl-properties-list" data-cy="properties-list">
            <dt is="vl-property-term" data-cy="property-term-1">Voornaam</dt>
            <dd is="vl-property-value" data-cy="property-value-1">Koen</dd>
            <dt is="vl-property-term" data-cy="property-term-2">Naam</dt>
            <dd is="vl-property-value" data-cy="property-value-2">Peeters</dd>
            <dt is="vl-property-term" data-cy="property-term-3">Geslacht</dt>
            <dd is="vl-property-value" data-cy="property-value-3">Man</dd>
        </dl>
    </vl-properties>
`;
propertiesDefault.storyName = 'vl-properties - default';
