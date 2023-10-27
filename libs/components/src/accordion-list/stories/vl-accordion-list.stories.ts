import { html } from 'lit-html';
import '../../accordion/vl-accordion.component';
import '../vl-accordion-list.component';
import { Meta } from '@storybook/web-components';
import { accordionListArgs, accordionListArgTypes } from './vl-accordion-list.stories-arg';
import accordionListDoc from './vl-accordion-list.stories-doc.mdx';
import { story, storyArgTypes, storyArgs } from '@domg-wc/common-storybook';

export default {
    title: 'Components/accordion-list',
    tags: ['autodocs'],
    args: storyArgs(accordionListArgs),
    argTypes: storyArgTypes(accordionListArgTypes),
    parameters: {
        docs: {
            page: accordionListDoc,
        },
    },
} as Meta<typeof accordionListArgs>;

export const AccordionListDefault = story(
    accordionListArgs,
    ({ bordered }) => html`
        <vl-accordion-list ?data-vl-bordered=${bordered}>
            <vl-accordion data-vl-toggle-text="Accordion 1"> Inhoud accordion 1 </vl-accordion>
            <vl-accordion data-vl-toggle-text="Accordion 2"> Inhoud accordion 2 </vl-accordion>
            <vl-accordion data-vl-toggle-text="Accordion 3"> Inhoud accordion 3 </vl-accordion>
        </vl-accordion-list>
    `
);
AccordionListDefault.storyName = 'vl-accordion-list - default';

export const AccordionListNested = story(
    accordionListArgs,
    ({ bordered }) => html`
        <vl-accordion-list ?data-vl-bordered=${bordered}>
            <vl-accordion data-vl-toggle-text="Accordion 1">
                <vl-accordion-list>
                    <vl-accordion data-vl-toggle-text="Accordion 1.1"> Inhoud accordion 1.1 </vl-accordion>
                    <vl-accordion data-vl-toggle-text="Accordion 1.2"> Inhoud accordion 1.2 </vl-accordion>
                </vl-accordion-list>
            </vl-accordion>
            <vl-accordion data-vl-toggle-text="Accordion 2">
                <vl-accordion-list>
                    <vl-accordion data-vl-toggle-text="Accordion 2.1"> Inhoud accordion 2.1 </vl-accordion>
                    <vl-accordion data-vl-toggle-text="Accordion 2.2"> Inhoud accordion 2.2 </vl-accordion>
                </vl-accordion-list>
            </vl-accordion>
            <vl-accordion data-vl-toggle-text="Accordion 3">
                <vl-accordion-list>
                    <vl-accordion data-vl-toggle-text="Accordion 3.1"> Inhoud accordion 3.1 </vl-accordion>
                    <vl-accordion data-vl-toggle-text="Accordion 3.2"> Inhoud accordion 3.2 </vl-accordion>
                </vl-accordion-list>
            </vl-accordion>
        </vl-accordion-list>
    `
);
AccordionListNested.storyName = 'vl-accordion-list - nested';
