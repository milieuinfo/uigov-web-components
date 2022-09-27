import { html } from 'lit-html';
import '../vl-checkbox.component';
import { checkboxArgs, checkboxArgTypes } from './vl-checkbox.stories-arg';

export default {
    title: 'Components/checkbox',
    args: checkboxArgs,
    argTypes: checkboxArgTypes,
};

export const checkboxDefault = ({
    block,
    disabled,
    error,
    label,
    name,
    single,
    switchAttr,
    value,
}: typeof checkboxArgs) => html`
    <vl-checkbox
        ?data-vl-block=${block}
        ?data-vl-disabled=${disabled}
        ?data-vl-error=${error}
        data-vl-label=${label}
        data-vl-name=${name}
        data-vl-value=${value}
        ?data-vl-single=${single}
        ?data-vl-switch${switchAttr}
        data-cy="checkbox"
    ></vl-checkbox>
`;
checkboxDefault.storyName = 'vl-checkbox - default';

export const checkboxSwitch = () => html` <vl-checkbox
    data-vl-switch=""
    data-vl-label="Instellingen blokkeren"
    data-cy="switch"
></vl-checkbox>`;
checkboxSwitch.storyName = 'vl-checkbox - switch';
