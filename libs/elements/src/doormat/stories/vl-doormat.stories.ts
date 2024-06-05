import { html } from 'lit-html';
import { story } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';
import doormatDocs from './vl-doormat.stories-doc.mdx';
import { doormatArgs, doormatArgTypes } from './vl-doormat.stories-args';

export default {
    id: 'Elements/doormat',
    title: 'Elements/doormat [deprecated]',
    tags: ['autodocs'],
    parameters: {
        docs: { page: doormatDocs },
    },
    argTypes: doormatArgTypes,
} as Meta<typeof doormatArgs>;

export const DoormatDefault = story<typeof doormatArgs>(
    { alt: false, graphic: '' },
    ({ alt }) => html` <div style="max-width: 780px">
        <a is="vl-doormat" href="#" ?data-vl-alt=${alt} data-cy="doormat">
            <h2 is="vl-doormat-title">Bouwen, wonen en energie</h2>
            <div is="vl-doormat-text">
                De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te maken. Ze
                biedt sociale woningen aan, geeft premies aan wie zijn woning verbouwt en energiezuinig maakt en zoekt
                oplossingen om de stijging van de vastgoedprijzen onder controle te houden.
            </div>
        </a>
    </div>`
);
DoormatDefault.storyName = 'vl-doormat - default';

export const DoormatWithImage = story<typeof doormatArgs>(
    { alt: false, graphic: '' },
    ({ graphic }) => html` <div style="max-width: 780px">
        <a is="vl-doormat" href="#" data-cy="doormat">
            <h2 is="vl-doormat-title">Bouwen, wonen en energie</h2>
            <div is="vl-doormat-text">
                De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te maken. Ze
                biedt sociale woningen aan, geeft premies aan wie zijn woning verbouwt en energiezuinig maakt en zoekt
                oplossingen om de stijging van de vastgoedprijzen onder controle te houden.
            </div>
            <img
                is="vl-doormat-image"
                src=${graphic
                    ? 'https://picsum.photos/1600/400?image=1048'
                    : 'https://picsum.photos/100/150?image=1048'}
                alt="Bouwen in Brussel"
                ?data-vl-graphic=${graphic}
                data-cy="doormat-image"
            />
        </a>
    </div>`
);
DoormatWithImage.storyName = 'vl-doormat - with image';
