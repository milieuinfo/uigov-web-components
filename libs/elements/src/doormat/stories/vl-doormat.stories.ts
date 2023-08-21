import { html } from 'lit-html';
import '../vl-doormat.element';

export default {
    title: 'Elements/doormat',
    args: {
        alt: false,
    },
    argTypes: {
        alt: {
            name: 'data-vl-alt',
            description: 'Changes the gray background of the doormat to white.',
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
};

interface DoormatArgs {
    alt: string;
}

export const doormatDefault = ({ alt }: DoormatArgs) => html` <div style="max-width: 780px">
    <a is="vl-doormat" href="#" ?data-vl-alt=${alt} data-cy="doormat">
        <h2 is="vl-doormat-title">Bouwen, wonen en energie</h2>
        <div is="vl-doormat-text">
            De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te maken. Ze biedt
            sociale woningen aan, geeft premies aan wie zijn woning verbouwt en energiezuinig maakt en zoekt oplossingen
            om de stijging van de vastgoedprijzen onder controle te houden.
        </div>
    </a>
</div>`;
doormatDefault.storyName = 'vl-doormat - default';
