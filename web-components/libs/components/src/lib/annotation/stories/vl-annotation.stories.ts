import { html } from 'lit-html';
import '../vl-annotation.component';
import { annotationArgs, annotationArgTypes } from './vl-annotation.stories-arg';

export default {
    title: 'elements/annotation',
    args: annotationArgs,
    argTypes: annotationArgTypes,
};

const annotationTemplate = ({ content, small }: typeof annotationArgs) => html`
    <vl-annotation ?data-vl-small=${small}>${content}</vl-annotation>
`;

export const annotationDefault = annotationTemplate.bind({});
(annotationDefault as any).storyName = 'vl-annotation - default';

const annotationTemplateWithIcon = () =>
    html` <p is="vl-icon-wrapper">
        <span is="vl-icon" class="vl-icon--before vl-icon--light vl-vi" data-vl-icon="calendar"></span>
        <vl-annotation>Bevoegde instantie Werk en Sociale Economie • juli 2018 • Deel van collectie</vl-annotation>
    </p>`;

export const annotationWithIcon = annotationTemplateWithIcon.bind({});
(annotationWithIcon as any).storyName = 'vl-annotation - with icon';

const annotationTemplateWithSmall = () =>
    html` <h2 is="vl-h2">
        Districtchef
        <vl-annotation data-vl-small="true">(6 vacatures)</vl-annotation>
    </h2>`;
export const annotationSmallStyle = annotationTemplateWithSmall.bind({});
(annotationSmallStyle as any).storyName = 'vl-annotation - small';
