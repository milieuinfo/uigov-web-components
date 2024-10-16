import { html } from 'lit-html';
import '../vl-form-annotation.element';

export default {
    id: 'elements-form-message-form-annotation',
    title: 'Elements/form-message/form-annotation',
    tags: ['autodocs'],
    controls: { hideNoControlsWarning: true },
};

export const formAnnotationDefault = () => html`
    <p is="vl-form-annotation" data-cy="form-annotation">
        De naam van het evenement moet minstens 12 karakters tellen.
    </p>
`;
formAnnotationDefault.storyName = 'vl-form-annotation - default';

export const formAnnotationSpan = () => html`
    <span is="vl-form-annotation-span" data-cy="form-annotation-span"
        >De naam van het evenement moet minstens 12 karakters tellen.</span
    >
`;
formAnnotationSpan.storyName = 'vl-form-annotation - span';
