import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import '../vl-annotation.component';
import { annotationArgs, annotationArgTypes } from './vl-annotation.stories-arg';

export default {
    id: 'components-annotation',
    title: 'Components/annotation',
    tags: ['autodocs'],
    args: annotationArgs,
    argTypes: annotationArgTypes,
} as Meta<typeof annotationArgs>;

const annotationTemplate = ({ content, small }: typeof annotationArgs) => html`
    <vl-annotation ?data-vl-small=${small}>${content}</vl-annotation>
`;

export const annotationDefault = annotationTemplate.bind({}) as any;
annotationDefault.storyName = 'vl-annotation - default';

const annotationTemplateWithIcon = ({ small }: typeof annotationArgs) =>
    html`
        <p is="vl-icon-wrapper">
            <span is="vl-icon" class="vl-icon--before vl-icon--light vl-vi" data-vl-icon="calendar"></span>
            <vl-annotation ?data-vl-small=${small}>
                Bevoegde instantie Werk en Sociale Economie • juli 2018 • Deel van collectie
            </vl-annotation>
        </p>
    `;

export const annotationWithIcon = annotationTemplateWithIcon.bind({}) as any;
annotationWithIcon.storyName = 'vl-annotation - with icon';
annotationWithIcon.argTypes = {
    content: {
        control: false,
    },
};

const annotationTemplateWithSmall = ({ small }: typeof annotationArgs) =>
    html`
        <h2 is="vl-h2">
            Districtchef
            <vl-annotation ?data-vl-small=${small}>(6 vacatures)</vl-annotation>
        </h2>
    `;
export const annotationSmallStyle = annotationTemplateWithSmall.bind({}) as any;
annotationSmallStyle.storyName = 'vl-annotation - small';
annotationSmallStyle.argTypes = {
    content: {
        control: false,
    },
};
