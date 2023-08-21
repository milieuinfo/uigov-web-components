import { html } from 'lit-html';
import '../vl-form-label.element';
import { formLabelArgs, formLabelArgTypes } from './vl-form-label.stories-arg';

export default {
    title: 'Elements/form-message',
    args: formLabelArgs,
    argTypes: formLabelArgTypes,
};

export const formLabelDefault = ({ light, block }: typeof formLabelArgs) => html`
    <label is="vl-form-label" for="demo-label" ?data-vl-light=${light} ?data-vl-block=${block} data-cy="form-label"
        >foobar</label
    >
`;
formLabelDefault.storyName = 'vl-form-label - default';
