import { story } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { VlDoormatComponent } from '../vl-doormat.component';
import { registerWebComponents } from '@domg-wc/common';
import { doormatArgTypes, doormatArgs } from './vl-doormat.stories-arg';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import doormatDoc from './vl-doormat.stories-doc.mdx';

registerWebComponents([VlDoormatComponent]);

export default {
    id: 'components-next-doormat',
    title: 'Components-next/doormat',
    tags: ['autodocs'],
    args: doormatArgs,
    argTypes: doormatArgTypes,
    parameters: {
        docs: {
            page: doormatDoc,
        },
    },
} as Meta<typeof doormatArgs>;

const DoormatTemplate = story(
    doormatArgs,
    ({ href, external, alt, imageSrc, imageAlt, imageHeight, imageWidth, graphic, textSlot, titleSlot }) =>
        html`
            <div class="story--fixed-width">
                <vl-doormat-next
                    href=${href}
                    ?external=${external}
                    ?alt=${alt}
                    image-src=${imageSrc}
                    image-alt=${imageAlt}
                    image-height=${imageHeight}
                    image-width=${imageWidth}
                    ?graphic=${graphic}
                >
                    <span slot="title">${unsafeHTML(titleSlot)}</span>
                    <span slot="text">${unsafeHTML(textSlot)}</span>
                </vl-doormat-next>
            </div>
        `
);

export const DoormatDefault = DoormatTemplate.bind({});
DoormatDefault.storyName = 'vl-doormat-next - default';
DoormatDefault.args = {
    href: 'https://www.vlaanderen.be/bouwen-wonen-en-energie',
    titleSlot: 'Bouwen, wonen en energie',
    textSlot: `De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te
                maken. Ze biedt sociale woningen aan, geeft premies aan wie zijn woning verbouwt en
                energiezuinig maakt en zoekt oplossingen om de stijging van de vastgoedprijzen onder controle te
                houden.`,
};

export const DoormatAlt = DoormatTemplate.bind({});
DoormatAlt.storyName = 'vl-doormat-next - alt';
DoormatAlt.args = {
    ...DoormatDefault.args,
    alt: true,
};

export const DoormatImage = DoormatTemplate.bind({});
DoormatImage.storyName = 'vl-doormat-next - image';
DoormatImage.args = {
    ...DoormatDefault.args,
    imageSrc: 'https://picsum.photos/100/150?image=1048',
    imageAlt: 'Bouwen in Brussel',
};

export const DoormatGraphic = DoormatTemplate.bind({});
DoormatGraphic.storyName = 'vl-doormat-next - graphic';
DoormatGraphic.args = {
    ...DoormatDefault.args,
    imageSrc: 'https://picsum.photos/1600/400?image=1048',
    imageAlt: 'Bouwen in Brussel',
    graphic: true,
};
