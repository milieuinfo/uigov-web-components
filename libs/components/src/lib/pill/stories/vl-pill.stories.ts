import { html } from 'lit-html';
import '../vl-pill.component';
import { pillArgs, pillArgTypes } from './vl-pill.stories-arg';
import { storyArgs, storyArgTypes } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';

export default {
    title: 'Components/pill',
    args: storyArgs(pillArgs),
    argTypes: storyArgTypes(pillArgTypes),
} as Meta<typeof pillArgs>;

export const pillDefault = ({ closable, checkable, checked, type, disabled, close, check }: typeof pillArgs) => html`
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
pillDefault.storyName = 'vl-pill - default';
