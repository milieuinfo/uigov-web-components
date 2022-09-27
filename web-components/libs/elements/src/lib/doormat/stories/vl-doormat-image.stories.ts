import { html } from 'lit-html';
import '../vl-doormat.element';
import { doormatDefault } from './vl-doormat.stories';

export default {
    title: 'Elements/doormat',
    args: { graphic: false },
    argTypes: {
        graphic: {
            name: 'data-vl-graphic',
            description: 'Default doormat with a large image above.',
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
};

interface DoormatImageArgs {
    graphic: string;
}

export const doormatWithImage = ({ graphic }: DoormatImageArgs) => html` <div style="max-width: 780px">
    <a is="vl-doormat" href="#" data-cy="doormat">
        <h2 is="vl-doormat-title">Bouwen, wonen en energie</h2>
        <div is="vl-doormat-text">
            De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te maken. Ze biedt
            sociale woningen aan, geeft premies aan wie zijn woning verbouwt en energiezuinig maakt en zoekt oplossingen
            om de stijging van de vastgoedprijzen onder controle te houden.
        </div>
        <img
            is="vl-doormat-image"
            src=${graphic ? 'https://picsum.photos/1600/400?image=1048' : 'https://picsum.photos/100/150?image=1048'}
            alt="Bouwen in Brussel"
            ?data-vl-graphic=${graphic}
            data-cy="doormat-image"
        />
    </a>
</div>`;
doormatWithImage.storyName = 'vl-doormat - with image';
