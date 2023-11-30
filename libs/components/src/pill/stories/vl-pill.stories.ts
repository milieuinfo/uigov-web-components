import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import '../vl-pill.component';
import { pillArgs, pillArgTypes } from './vl-pill.stories-arg';

export default {
    title: 'Components/pill/pill',
    tags: ['autodocs'],
    args: pillArgs,
    argTypes: pillArgTypes,
} as Meta<typeof pillArgs>;

export const PillDefault = ({ closable, checkable, checked, type, disabled, close, check }: typeof pillArgs) => html`
    <vl-pill
        ?data-vl-closable=${closable}
        ?data-vl-checkable=${checkable}
        data-vl-type=${type}
        ?data-vl-disabled=${disabled}
        .checked=${checked}
        @close=${(event: any) => close(event)}
        @check=${(event: any) => check(event.detail)}
        data-cy="pill"
        >Optie 1
    </vl-pill>
`;
PillDefault.storyName = 'vl-pill - default';
