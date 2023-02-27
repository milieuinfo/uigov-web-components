import { html } from 'lit-html';
import { Meta, StoryFn } from '@storybook/web-components';
import { propertiesArgs, propertiesArgTypes } from './vl-properties.stories-arg';
import propertiesDoc from './vl-properties.stories-doc.mdx';
import '../vl-properties.element';
import '../vl-properties-column.element';
import '../vl-properties-list.element';
import '../vl-property-term.element';
import '../vl-property-value.element';

export default {
    title: 'Elements/properties',
    argTypes: propertiesArgTypes,
    parameters: {
        docs: { page: propertiesDoc },
    },
} as Meta<typeof propertiesArgs>;

// Wijkt af van de andere componenten die een template gebruiken voor hun stories omdat de HTML van deze stories verschilt van elkaar (zie vl-properties-column).

export const PropertiesDefault: StoryFn<typeof propertiesArgs> = ({ collapsed, fullWidth }) => html`
    <vl-properties ?data-vl-full-width=${fullWidth} ?data-vl-collapsed=${collapsed}>
        <h4 is="vl-h4">Gegevens</h4>
        <dl is="vl-properties-list">
            <dt is="vl-property-term">Voornaam</dt>
            <dd is="vl-property-value">Koen</dd>
            <dt is="vl-property-term">Naam</dt>
            <dd is="vl-property-value">Peeters</dd>
            <dt is="vl-property-term">Geslacht</dt>
            <dd is="vl-property-value">Man</dd>
        </dl>
    </vl-properties>
`;
PropertiesDefault.storyName = 'vl-properties - default';
PropertiesDefault.args = { collapsed: propertiesArgs.collapsed, fullWidth: propertiesArgs.fullWidth };

export const PropertiesColumn: StoryFn<typeof propertiesArgs> = ({ collapsed, full, fullWidth }) => html`
    <vl-properties ?data-vl-full-width=${fullWidth} ?data-vl-collapsed=${collapsed}>
        <h4 is="vl-h4">Gegevens</h4>
        <div is="vl-properties-column" ?data-vl-full=${full}>
            <dl is="vl-properties-list">
                <dt is="vl-property-term">Voornaam</dt>
                <dd is="vl-property-value">Koen</dd>
                <dt is="vl-property-term">Naam</dt>
                <dd is="vl-property-value">Peeters</dd>
                <dt is="vl-property-term">Geslacht</dt>
                <dd is="vl-property-value">Man</dd>
            </dl>
        </div>
        <div is="vl-properties-column" ?data-vl-full=${full}>
            <dl is="vl-properties-list">
                <dt is="vl-property-term">Telefoon</dt>
                <dd is="vl-property-value">000/00.00.00</dd>
                <dt is="vl-property-term">Gsm-nummer</dt>
                <dd is="vl-property-value">000/00.00.00</dd>
                <dt is="vl-property-term">E-mailadres</dt>
                <dd is="vl-property-value">koen.peeters@outlook.be</dd>
            </dl>
        </div>
    </vl-properties>
`;
PropertiesColumn.storyName = 'vl-properties - column';
PropertiesColumn.args = propertiesArgs;
